## Test Case: LOG-01 Login with valid credentials | PASSED
**Description:** Verify that a registered user can successfully log in with correct email and password.
**Pre-conditions:** User has a registered account. User is logged out.

| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Navigate to `http://localhost:5173/login` | Login page is displayed |
| 2 | Enter valid registered "Email" and "Password" | Input fields are filled |
| 3 | Click the "Sign in" button | User is redirected to the home page; Username is visible in the header |


## Test Case: LOG-02 Login with empty fields | FAILED
**Description:** Verify that the system prevents login when "Email" and "Password" fields are empty.
**Pre-conditions:** User is on the Login page.

| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Leave both "Email" and "Password" fields blank | Fields remain empty |
| 2 | Click the "Sign in" button | Login fails; System displays an error message (e.g., "email can't be blank") |