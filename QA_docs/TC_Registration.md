# Test Case: REG-01 User Registration | PASSED

**Description:** Verify that a new user can successfully register with valid credentials.
**Pre-conditions:** User is not logged in.

| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Navigate to `http://localhost:5173/` | Home page is displayed |
| 2 | Click on the "Sign up" button | Registration form is displayed |
| 3 | Enter a unique "Username", "Email", and "Password" | Input fields are filled correctly |
| 4 | Click the "Sign up" button | User is redirected to the home page; Username is visible in the header |

# Test Case: REG-02 Registration with empty fields | FAILED (See BR-01)

**Description:** Verify that the system prevents registration when all input fields are empty.
**Pre-conditions:** User is on the "Sign up" page (`http://localhost:5173/register`).

| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Leave "Username", "Email", and "Password" fields empty | Fields remain empty |
| 2 | Click the "Sign up" button | Registration fails; Error messages are displayed (e.g., "email can't be blank", "password can't be blank") |

**Additional Information:**
The issue also persists during the Login process. After logging out, the user can log back into the "empty" account by submitting an empty Login form.

# Test Case: REG-03 Registration with invalid email format | PASSED

**Description:** Verify that the system prevents registration when the email address is missing the "@" symbol.
**Pre-conditions:** User is on the "Sign up" page (`http://localhost:5173/register`).

| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter a valid "Username" and "Password" | Fields are filled with valid data |
| 2 | Enter "vlad.gmail.com" into the "Email" field | The email field accepts the input |
| 3 | Click the "Sign up" button | Registration fails; A validation error message is displayed (e.g., "email is invalid") |