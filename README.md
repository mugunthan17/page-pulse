# 🚀 PagePulse

<p align="center">
  <strong>Analyze any website in seconds.</strong><br>
  Performance • SEO • Accessibility • Security
</p>

<p align="center">
  <a href="https://pagepulse-beryl.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20PagePulse-2563EB?style=for-the-badge" alt="Live Demo"/>
  </a>
</p>

<p align="center">
  <img width="900" alt="PagePulse Screenshot" src="https://github.com/user-attachments/assets/58e90a86-b7fe-45dc-9bd5-8b7a479cd38b"/>
</p>

---

## 📖 Overview

PagePulse is a full-stack web application that audits any publicly accessible website and generates a structured report covering:

* ⚡ Performance
* 🔍 SEO
* ♿ Accessibility
* 🔒 Security
* 📊 Overall Website Score

The project was developed as part of the **Digital Heroes Software Development Internship Qualification Task**, with a focus on clean API design, robust error handling, and a polished user experience.

---

## ✨ Features

### Frontend

* Modern responsive UI built with React
* Clean dashboard for audit results
* Website health score
* Performance visualization
* Security analysis
* SEO overview
* Accessibility insights
* Warning banners for JavaScript-rendered websites
* User-friendly error handling

### Backend

* Fetches and analyzes any public webpage
* Calculates:

  * HTTP Status
  * Response Time
  * Page Size
  * Page Title
  * Meta Description
  * Heading Counts
  * Images Missing Alt Text
  * Internal & External Links
  * Word Count
  * Security Headers
* Generates an overall website score
* Returns actionable recommendations

---

# 🏗️ Project Structure

```text
PagePulse
│
├── PagePulse-FrontEnd/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── PagePulse-BackEnd/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── server.js
│   ├── test/
│   └── package.json
│
└── README.md
```

---

# 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* Axios
* Cheerio

### Testing

* Jest

### Deployment

* Vercel

---

# 🚀 Live Demo

**Application**

https://pagepulse-beryl.vercel.app/

---

# ⚙️ Local Setup

## 1. Clone the repository

```bash
git clone https://github.com/mugunthan17/page-pulse.git
```

```bash
cd page-pulse
```

---

## Backend

```bash
cd PagePulse-BackEnd
```

Install dependencies

```bash
npm install
```

Run the backend

```bash
npm run dev
```

or

```bash
npm start
```

Backend runs on

```text
http://localhost:5000
```

---

## Frontend

```bash
cd PagePulse-FrontEnd
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Frontend runs on

```text
http://localhost:5173
```

---

# 📡 API Contract

## Audit Website

**Endpoint**

```http
POST /api/audit
```

### Request

```json
{
  "url": "https://example.com"
}
```

### Successful Response

```json
{
  "success": true,
  "data": {
    "url": "https://example.com",
    "response": {
      "statusCode": 200,
      "contentType": "text/html"
    },
    "performance": {
      "loadTime": 120,
      "pageSize": 87500
    },
    "seo": {
      "title": true,
      "description": true
    },
    "content": {
      "wordCount": 980,
      "totalImages": 15
    },
    "security": {
      "https": true
    },
    "audit": {
      "score": 94,
      "grade": "A"
    }
  }
}
```

---

# ❌ Error Handling

The application gracefully handles:

* Invalid URLs
* Network failures
* Request timeouts
* Non-HTML responses
* Server errors
* Client-rendered (SPA) websites with informative warnings

---

# 🧪 Testing

Run all unit tests

```bash
npm test
```

Current Test Coverage

* ✅ Happy Path
* ✅ HTTP Request Failure
* ✅ Non-HTML Response
* ✅ Perfect Website Scoring
* ✅ Missing SEO Metadata
* ✅ Poor Website Scoring

---

# 💡 Design Decisions

## 1. Service-Oriented Architecture

Business logic is separated into dedicated services (`pageAnalyzer`, `securityAnalyzer`, and `scoreCalculator`) to improve maintainability, simplify testing, and keep controllers lightweight.

---

## 2. Custom Website Scoring

Instead of relying on external APIs such as Google Lighthouse, PagePulse uses a custom scoring algorithm based on measurable website characteristics including SEO, performance, accessibility, and security. This keeps the application lightweight, transparent, and easy to extend.

---

## 3. JavaScript SPA Detection

Many modern websites render their content after page load using frameworks like React, Vue, or Angular. PagePulse detects these client-rendered pages and displays a warning explaining that only the server-delivered HTML can be analyzed, helping users interpret results correctly.

---

# 🔮 Future Improvements

Given additional development time, I would like to add:

* Lighthouse integration
* Core Web Vitals
* Broken link detection
* Sitemap analysis
* Robots.txt validation
* Open Graph and Twitter Card analysis
* PDF export
* Historical audit tracking
* User authentication
* Batch website auditing

---

# 👨‍💻 Author

**Mugunthan N**

* GitHub: https://github.com/mugunthan17
* LinkedIn: https://www.linkedin.com/in/mugunthann

---

<p align="center">
Made with ❤️ and JavaScript
</p>
