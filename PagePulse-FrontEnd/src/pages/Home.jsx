import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import ReportSection from "../components/report/ReportSection";
import EmptyState from "../components/common/EmptyState";
import Loader from "../components/common/Loader";
import ErrorState from "../components/common/ErrorState";
import { auditWebsite } from "../api/auditAPI";

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;

  const units = ["KB", "MB", "GB"];
  let size = bytes / 1024;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }

  return `${size.toFixed(size >= 10 || unitIndex === 0 ? 0 : 1)} ${
    units[unitIndex]
  }`;
};

/**
 * Calculates a dynamic performance rating based on load time.
 * The score decreases gradually rather than using fixed buckets.
 */
const getPerformanceMetrics = (loadTime) => {
  let score;

  if (loadTime <= 100) {
    score = 99;
  } else if (loadTime <= 3000) {
    score = Math.round(99 - ((loadTime - 100) * (99 - 20)) / (3000 - 100));
  } else {
    score = 20;
  }

  score = Math.max(20, Math.min(99, score));

  let rating;
  let message;

  if (score >= 90) {
    rating = "Fast";
    message = "Excellent loading performance with a near-instant response.";
  } else if (score >= 70) {
    rating = "Fast";
    message = "Fast loading speed that provides a smooth user experience.";
  } else if (score >= 50) {
    rating = "Average";
    message =
      "Good loading performance, though some optimization could improve responsiveness.";
  } else {
    rating = "Slow";
    message =
      "Slow loading performance. Consider optimizing assets and server response time.";
  }

  return {
    score,
    rating,
    message,
  };
};

const buildReport = (payload) => {
  const data = payload?.data ?? payload;
  const response = data?.response ?? {};
  const performance = data?.performance ?? {};
  const seo = data?.seo ?? {};
  const content = data?.content ?? {};
  const audit = data?.audit ?? {};
  const security = data?.security ?? {};
  const warnings = data?.warnings ?? [];

  const totalImages = content?.totalImages ?? 0;
  const missingAlt = content?.imagesWithoutAlt ?? 0;

  const loadTime = performance?.loadTime ?? 0;

  const metrics = getPerformanceMetrics(loadTime);

  return {
    summary: {
      status: response?.statusCode ?? 200,
      responseTime: loadTime,
      contentType: response?.contentType ?? "text/html",
      pageSize: formatBytes(performance?.pageSize ?? 0),
      wordCount: content?.wordCount ?? 0,
    },

    seo: {
      title: seo?.titleText || "No title found",
      metaDescription: seo?.descriptionText || "No meta description found",
      h1Count: content?.headings?.h1 ?? 0,
      seoScore: audit?.grade ?? "N/A",
      metaStatus: seo?.descriptionText ? "Present" : "Missing",
    },

    images: {
      total: totalImages,
      withAlt: Math.max(0, totalImages - missingAlt),
      missingAlt,
    },

    performance: {
      loadTime,
      rating: metrics.rating,
      score: metrics.score,
      message: metrics.message,
    },

    content: {
      htmlElements: content?.htmlElements ?? 0,
      internalLinks: content?.internalLinks ?? 0,
      externalLinks: content?.externalLinks ?? 0,
    },

    security: {
      https: security?.https ?? false,
      headers: {
        contentSecurityPolicy:
          security?.headers?.contentSecurityPolicy ?? false,
        xFrameOptions: security?.headers?.xFrameOptions ?? false,
        strictTransportSecurity:
          security?.headers?.strictTransportSecurity ?? false,
      },
    },

    warnings,

    analysis: {
      completed: data?.status === "completed",
      completedAt: new Date().toLocaleString(),
      score: audit?.score ?? 0,
      grade: audit?.grade ?? "N/A",
      issues: audit?.issues ?? [],
    },
  };
};

const Home = () => {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    setError("");
    setReport(null);

    if (!url.trim()) {
      setError("Please enter a website URL.");
      return;
    }

    try {
      new URL(url);
    } catch {
      setError("Please enter a valid URL (e.g. https://example.com).");
      return;
    }

    try {
      setLoading(true);

      const payload = await auditWebsite(url);

      if (payload?.success) {
        setReport(buildReport(payload));
      } else {
        setError(payload?.error || "Unable to analyze website.");
      }
    } catch (err) {
      setError(err.message || "Unable to analyze website.");
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    if (error) setError("");
  };

  const handleReset = () => {
    setUrl("");
    setReport(null);
    setError("");
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <Hero
        url={url}
        setUrl={setUrl}
        onAnalyze={handleAnalyze}
        error={error}
        loading={loading}
        clearError={clearError}
      />

      <div className="mx-auto max-w-screen-2xl px-8 pb-20">
        {!loading && !report && !error && <EmptyState />}

        {loading && <Loader />}

        {error && <ErrorState message={error} onRetry={handleAnalyze} />}

        {!loading && report && (
          <>
            <ReportSection report={report} />

            <div className="mt-8 flex justify-center">
              <button
                onClick={handleReset}
                className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
              >
                Analyze Another Website
              </button>
            </div>
          </>
        )}
        <div className="mt-12 border-t border-slate-200 py-1">
          <p className="text-center text-sm text-slate-500">
            Built for{" "}
            <a
              href="https://digitalheroesco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700 hover:underline"
            >
              Digital Heroes Training Task
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
