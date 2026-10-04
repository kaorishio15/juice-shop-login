# OWASP Juice Shop - Mock Authentication Interface

A front-end login interface and security testbed modeled after the OWASP Juice Shop application. This project demonstrates client-side and simulated server-side input validation, defense-in-depth principles, and resilience against common web application vulnerabilities (such as XSS and SQL Injection).

## Overview
This repository serves as a educational security research prototype designed to explore:
- Multi-tiered input validation (Client-side vs. Server-side).
- Defensive coding techniques against Cross-Site Scripting (XSS) in the DOM.
- Secure form state management and error propagation.

## Features
- **Client-Side Validation (`app.js`):** Validates field presence, password length ($\ge 8$ characters), and structural email formatting (`@` detection).
- **Simulated Server Validation:** Re-evaluates incoming payloads to model server-side defense-in-depth.
- **XSS Prevention:** Safe DOM manipulation using `textContent` instead of raw HTML rendering (`innerHTML`).

## Project Structure

```text
├── index.html        # Login form layout and UI structure
├── app.js            # Validation logic and DOM handling
├── README.md         # Project documentation
└── .gitignore        # Version control configuration
```

## How to Run
1. Clone this repository:
   ```bash
   git clone <YOUR_PUBLIC_REPO_URL>
2. Open index.html directly in any web browser (Chrome, Firefox, Safari, etc.)
3. Test validation by attempting submissions with empty fields, invalid email formats, short passwords, or injection payloads.