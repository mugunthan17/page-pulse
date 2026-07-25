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
  const visibleText = $("body").text().replace(/\s+/g, " ").trim();
  const wordCount = visibleText ? visibleText.split(/\s+/).length : 0;

  const headings = {
    h1: $("h1").length,
    h2: $("h2").length,
    h3: $("h3").length,
  };

  const images = $("img").length;
  const imagesWithoutAlt = $("img:not([alt])").length;
  const totalLinks = $("a").length;
  const internalLinks = $("a[href]").filter((_, element) => {
    const href = $(element).attr("href") || "";

    return (
      href.startsWith("/") ||
      href.startsWith("./") ||
      href.startsWith("../") ||
      href.startsWith("#") ||
      href.startsWith("?")
    );
  }).length;
  const externalLinks = totalLinks - internalLinks;
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
