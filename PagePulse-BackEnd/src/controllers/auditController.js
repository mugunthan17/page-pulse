const analyzePage = require("../services/pageAnalyzer");
const calculateScore = require("../services/scoreCalculator");
const validator = require("validator");

const auditWebsite = async (req, res) => {
  try {
    let { url } = req.body;

    // Check URL exists

    if (!url) {
      return res.status(400).json({
        success: false,

        error: "URL is required",
      });
    }

    // Remove unnecessary spaces

    url = url.trim();

    // Validate URL format

    if (
      !validator.isURL(url, {
        protocols: ["http", "https"],

        require_protocol: true,
      })
    ) {
      return res.status(400).json({
        success: false,

        error: "Invalid URL format. Please provide a valid HTTP/HTTPS URL",
      });
    }

    // Analyze website

    const result = await analyzePage(url);

    // Generate audit score

    const audit = calculateScore(result);

    // Final response

    return res.status(200).json({
      success: true,

      data: {
        ...result,

        audit,
      },
    });
  } catch (error) {
    console.error("Audit Error:", error.message);

    // Website unreachable

    if (
      error.code === "ENOTFOUND" ||
      error.code === "ECONNREFUSED" ||
      error.code === "ETIMEDOUT"
    ) {
      return res.status(400).json({
        success: false,

        error: "Unable to access website",

        message:
          "The URL may be invalid, unreachable, or taking too long to respond",
      });
    }

    // Generic error

    return res.status(500).json({
      success: false,

      error: "Unable to analyze website",

      message: error.message,
    });
  }
};

module.exports = auditWebsite;
