const axios = require("axios");
const analyzePage = require("../src/services/pageAnalyzer");

jest.mock("axios");

describe("Page Analyzer", () => {
  test("should correctly parse a valid HTML page", async () => {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Test Page</title>
          <meta name="description" content="Test Description">
        </head>

        <body>
          <h1>Welcome</h1>

          <img src="logo.png" alt="Logo">
          <img src="banner.png">

          <p>Hello world from Page Pulse.</p>
        </body>
      </html>
    `;

    axios.get.mockResolvedValue({
      status: 200,
      data: html,
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    });

    const result = await analyzePage("https://example.com");

    expect(result.response.statusCode).toBe(200);

    expect(result.seo.title).toBe(true);
    expect(result.seo.titleText).toBe("Test Page");

    expect(result.seo.description).toBe(true);
    expect(result.seo.descriptionText).toBe("Test Description");

    expect(result.content.headings.h1).toBe(1);

    expect(result.content.totalImages).toBe(2);
    expect(result.content.imagesWithoutAlt).toBe(1);

    expect(result.content.wordCount).toBeGreaterThan(0);

    expect(result.status).toBe("completed");
  });

  test("should throw an error when the HTTP request fails", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    await expect(analyzePage("https://example.com")).rejects.toThrow(
      "Network Error",
    );
  });

  test("should throw an error for non-HTML responses", async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: "PNG IMAGE DATA",
      headers: {
        "content-type": "image/png",
      },
    });

    await expect(analyzePage("https://example.com/image.png")).rejects.toThrow(
      "URL does not contain a valid HTML page",
    );
  });
});
