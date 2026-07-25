const calculateScore = require("../src/services/scoreCalculator");

describe("Score Calculator", () => {
  test("should return a perfect score for an optimized website", () => {
    const auditData = {
      seo: {
        title: true,
        description: true,
      },

      performance: {
        loadTime: 500,
      },

      content: {
        imagesWithoutAlt: 0,
      },

      security: {
        https: true,
        headers: {
          contentSecurityPolicy: true,
          xFrameOptions: true,
          strictTransportSecurity: true,
        },
      },
    };

    const result = calculateScore(auditData);

    expect(result.score).toBe(100);
    expect(result.grade).toBe("A");
    expect(result.issues).toHaveLength(0);

    expect(result.breakdown).toEqual({
      performance: 25,
      seo: 25,
      accessibility: 20,
      security: 20,
      bestPractices: 10,
    });
  });

  test("should deduct points for missing SEO metadata", () => {
    const auditData = {
      seo: {
        title: false,
        description: false,
      },

      performance: {
        loadTime: 500,
      },

      content: {
        imagesWithoutAlt: 0,
      },

      security: {
        https: true,
        headers: {
          contentSecurityPolicy: true,
          xFrameOptions: true,
          strictTransportSecurity: true,
        },
      },
    };

    const result = calculateScore(auditData);

    expect(result.score).toBe(75);
    expect(result.grade).toBe("B");

    expect(result.issues).toContainEqual({
      category: "SEO",
      severity: "high",
      message: "Missing page title",
    });

    expect(result.issues).toContainEqual({
      category: "SEO",
      severity: "medium",
      message: "Missing meta description",
    });
  });
  test("should heavily deduct points for a poorly optimized website", () => {
    const auditData = {
      seo: {
        title: false,
        description: false,
      },

      performance: {
        loadTime: 4000,
      },

      content: {
        imagesWithoutAlt: 5,
      },

      security: {
        https: false,
        headers: {
          contentSecurityPolicy: false,
          xFrameOptions: false,
          strictTransportSecurity: false,
        },
      },
    };

    const result = calculateScore(auditData);

    expect(result.score).toBe(31);
    expect(result.grade).toBe("F");
    expect(result.issues).toHaveLength(8);

    expect(result.issues).toContainEqual({
      category: "Performance",
      severity: "high",
      message: "Slow page loading time",
    });

    expect(result.issues).toContainEqual({
      category: "Security",
      severity: "high",
      message: "Website is not using HTTPS",
    });

    expect(result.issues).toContainEqual({
      category: "Accessibility",
      severity: "medium",
      message: "5 images missing alt text",
    });
  });
});
