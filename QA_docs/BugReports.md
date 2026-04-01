# Bug Report: BR-01 System allows registration with empty fields

**Summary:** User can successfully register a new account without providing Username, Email, or Password.
**Severity:** Critical (Security/Logic flaw)
**Priority:** High

**Environment:**
- URL: http://localhost:5173/register
- Browser: Google Chrome (145.0.7632.76)
- Node.js: v20.x

**Steps to Reproduce:**
1. Navigate to the "Sign up" page.
2. Ensure all input fields ("Username", "Email", "Password") are empty.
3. Click the "Sign up" button.

**Actual Result:**
The system registers a "ghost" user and redirects to the home page. No validation errors are displayed.

**Expected Result:**
Registration should fail. Validation error messages (e.g., "Username can't be blank") should be displayed.