const axios = require("axios");
const cheerio = require("cheerio");
const analyzeSecurity = require("./securityAnalyzer");

async function analyzePage(url) {
  const startTime = Date.now();

  const response = await axios.get(url, {
    timeout: 5000,
    headers: {
      "User-Agent": "Mozilla/5.0 PagePulse-Audit-Bot",
    },
  });

  const loadTime = Date.now() - startTime;
  const contentType = response.headers["content-type"] || "";

  if (!contentType.includes("text/html")) {
    throw new Error("URL does not contain a valid HTML page");
  }

  const html = response.data;
  const $ = cheerio.load(html);

  const titleText = $("title").text().trim();
  const descriptionText = $('meta[name="description"]').attr("content")?.trim() || null;

  // Exclude <script>/<style>/<noscript> content from word count so JS/CSS
  // source code isn't miscounted as "visible words". Cloning keeps the
  // original DOM (and therefore htmlElements/heading/image counts) intact.
  const bodyClone = $("body").clone();
  bodyClone.find("script, style, noscript, template").remove();
  const visibleText = bodyClone.text().replace(/\s+/g, " ").trim();
  const wordCount = visibleText ? visibleText.split(/\s+/).length : 0;

  const headings = {
    h1: $("h1").length,
    h2: $("h2").length,
    h3: $("h3").length,
  };

  const images = $("img").length;
  const imagesWithoutAlt = $("img:not([alt])").length;

  // Classify each <a href="..."> as internal or external by resolving it
  // against the analyzed page's URL and comparing hostnames. This correctly
  // handles bare relative paths ("about.html"), protocol-relative URLs
  // ("//example.com"), and skips non-navigational hrefs (mailto:, tel:,
  // javascript:) and anchors with no href at all, instead of naively
  // pattern-matching a handful of prefixes.
  let internalLinks = 0;
  let externalLinks = 0;

  $("a[href]").each((_, element) => {
    const href = ($(element).attr("href") || "").trim();

    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:")
    ) {
      return;
    }

    try {
      const resolved = new URL(href, url);
      const base = new URL(url);

      if (resolved.hostname === base.hostname) {
        internalLinks += 1;
      } else {
        externalLinks += 1;
      }
    } catch {
      // Unparseable href (rare malformed markup) - ignore rather than
      // silently miscounting it as external.
    }
  });

  const totalLinks = internalLinks + externalLinks;
  const htmlElements = $("*").length;

  const security = analyzeSecurity(response, url);

  return {
    url,
    response: {
      statusCode: response.status,
      contentType,
    },
    performance: {
      loadTime,
      pageSize: Buffer.byteLength(html),
    },
    seo: {
      title: titleText.length > 0,
      description: descriptionText !== null,
      titleText,
      descriptionText,
    },
    content: {
      headings,
      totalImages: images,
      imagesWithoutAlt,
      totalLinks,
      internalLinks,
      externalLinks,
      htmlElements,
      wordCount,
    },
    security,
    status: "completed",
  };
}

module.exports = analyzePage;
