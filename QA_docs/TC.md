# Comprehensive Test Suite: RealWorld Conduit (Professional Grade)

**Project:** React-Vite RealWorld Example App
**Scope:** Full Functional, Security, Boundary, and UI Testing
**Environment:** http://localhost:5173/
**QA Engineer:** Vlad
**Document Version:** 2.0 (Full Detailed Audit)

---

## 1. Module: Authentication (REG & LOG)

### REG-01: Success Registration | STATUS: PASSED
**Description:** Verify that a new user can successfully register with unique valid data.
**Pre-conditions:** User is on the Registration page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter a unique "Username" (e.g., Vlad_QA_2026) | Field accepts input |
| 2 | Enter a unique "Email" (e.g., vlad@test.com) | Field accepts input |
| 3 | Enter a valid "Password" (e.g., Password123) | Field accepts input (masked) |
| 4 | Click the "Sign up" button | User redirected to Home; Username is visible in the header; Token saved |

### REG-02: Registration with Empty Fields | STATUS: FAILED
**Description:** Verify that the system prevents registration when all fields are blank.
**Pre-conditions:** User is on the Registration page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Leave all input fields blank | No data entered |
| 2 | Click the "Sign up" button | Registration fails; Validation errors (e.g., "email can't be blank") appear |

### REG-03: Registration - Invalid Email Format | STATUS: PASSED
**Description:** Verify system rejects emails without standard formatting.
**Pre-conditions:** User is on the Registration page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter valid Username and Password | Fields filled |
| 2 | Enter "vlad.test.com" (missing "@") in Email | Data entered |
| 3 | Click "Sign up" | Error "email is invalid" is displayed |

### REG-04: Registration - Existing Username | STATUS: PASSED
**Description:** Verify system prevents duplicate usernames.
**Pre-conditions:** "UserA" is already registered.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter "UserA" in Username field | Data entered |
| 2 | Enter unique Email and Password | Data entered |
| 3 | Click "Sign up" | Error "username has already been taken" is displayed |

### REG-05: Registration - Existing Email | STATUS: PASSED
**Description:** Verify system prevents duplicate emails.
**Pre-conditions:** "test@test.com" is already registered.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter unique Username and Password | Data entered |
| 2 | Enter "test@test.com" in Email field | Data entered |
| 3 | Click "Sign up" | Error "email has already been taken" is displayed |

### REG-06: Registration - Password Length Boundary | STATUS: FAILED
**Description:** Verify system enforces minimum password length (8 chars).
**Pre-conditions:** User is on the Registration page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter valid Username and Email | Fields filled |
| 2 | Enter "123" in Password field | Data entered |
| 3 | Click "Sign up" | Error "password is too short" is displayed; Account is not created |

### LOG-01: Success Login | STATUS: PASSED
**Description:** Verify a registered user can log in.
**Pre-conditions:** User account exists.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Navigate to Login page | Page displayed |
| 2 | Enter correct Email and Password | Fields filled |
| 3 | Click "Sign in" | Redirected to Home; "Your Feed" tab is visible |

### LOG-02: Login with Empty Fields | STATUS: FAILED
**Description:** Verify system prevents empty logins.
**Pre-conditions:** User is on the Login page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Leave all fields blank | Fields remain empty |
| 2 | Click "Sign in" | Login fails; Error messages displayed |

### LOG-03: Login - Invalid Password | STATUS: PASSED
**Description:** Verify system handles incorrect passwords securely.
**Pre-conditions:** User account exists.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter correct Email | Field filled |
| 2 | Enter incorrect Password | Field filled |
| 3 | Click "Sign in" | Error "email or password is invalid" displayed |

### LOG-04: Login - Non-existent User | STATUS: PASSED
**Description:** Verify system behavior for unregistered emails.
**Pre-conditions:** User is on the Login page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter "ghost@test.com" (unregistered) and Password | Fields filled |
| 2 | Click "Sign in" | Error "email or password is invalid" displayed |

---

## 2. Module: Article Creation & Editor (ART)

### ART-01: Create Article - Full Data | STATUS: PASSED
**Description:** Verify user can publish a complete article.
**Pre-conditions:** User is logged in.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Click "New Post" | Editor opens |
| 2 | Fill Title, Description, and Body | Data entered |
| 3 | Type "react" and press Enter in Tags field | Tag becomes a label |
| 4 | Click "Publish Article" | Redirected to new article page; All data visible |

### ART-02: Create Article - Missing Title | STATUS: FAILED
**Description:** Verify article cannot be published without a Title.
**Pre-conditions:** User is on the Editor page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Fill Description and Body; Leave Title empty | Title is empty |
| 2 | Click "Publish Article" | Error "title can't be blank" appears; Publication fails |

### ART-03: Create Article - Missing Body | STATUS: FAILED
**Description:** Verify article cannot be published without main content.
**Pre-conditions:** User is on the Editor page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Fill Title and Description; Leave Body empty | Body is empty |
| 2 | Click "Publish Article" | Error "body can't be blank" appears; Publication fails |

### ART-04: Boundary - Maximum Title Length | STATUS: PASSED
**Description:** Verify UI stability with 500-character titles.
**Pre-conditions:** User is on the Editor page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Paste a 500-character string into Title | Input accepted |
| 2 | Fill required fields and click "Publish" | Article created |
| 3 | Check Global Feed | Title displays correctly without breaking page layout (truncated or wrapped) |

### ART-05: Markdown Rendering | STATUS: PASSED
**Description:** Verify Markdown formatting translates to HTML.
**Pre-conditions:** User is on the Editor page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter `# Header` and `**Bold**` in Body | Text entered |
| 2 | Click "Publish Article" | Text rendered as `<h1>` and `<b>` elements |

### ART-06: Duplicate Tags Handling | STATUS: PASSED
**Description:** Verify system handles redundant tags.
**Pre-conditions:** User is on the Editor page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter tag "test" and press Enter | Tag added |
| 2 | Enter tag "test" again and press Enter | System ignores duplicate or saves only one unique tag |

### ART-07: Edit Own Article | STATUS: PASSED
**Description:** Verify user can modify published content.
**Pre-conditions:** User has a published article.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Open own article | Article page opens |
| 2 | Click "Edit Article" | Editor opens with pre-filled data |
| 3 | Change Title text and click "Update" | Redirected to article; New title is visible |

### ART-08: Delete Own Article | STATUS: PASSED
**Description:** Verify user can remove their content.
**Pre-conditions:** User has a published article.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Open own article | Article page opens |
| 2 | Click "Delete Article" | Redirected to Home |
| 3 | Check profile feed | Article is no longer listed |

---

## 3. Module: Social Interaction (SOC)

### SOC-01: Post a Comment | STATUS: PASSED
**Description:** Verify commenting functionality.
**Pre-conditions:** User is logged in; viewing an article.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Scroll to comment area | Text area visible |
| 2 | Type "Great read!" | Text entered |
| 3 | Click "Post Comment" | Comment appears instantly with author name and timestamp |

### SOC-02: Empty Comment Submission | STATUS: FAILED
**Description:** Verify empty comments are blocked.
**Pre-conditions:** User is logged in; viewing an article.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Leave comment text area empty | No data entered |
| 2 | Click "Post Comment" | Button disabled OR system shows validation error |

### SOC-03: Delete Own Comment | STATUS: PASSED
**Description:** Verify comment removal.
**Pre-conditions:** User posted a comment.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Locate own comment | Trash icon is visible |
| 2 | Click Trash icon | Comment is immediately removed from the UI |

### SOC-04: Follow User | STATUS: PASSED
**Description:** Verify author following system.
**Pre-conditions:** User is logged in; viewing another author's profile.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Click "Follow [Name]" button | Button changes to "Unfollow"; Counter increases |
| 2 | Go to Home -> "Your Feed" | Author's articles populate the feed |

### SOC-05: Unfollow User | STATUS: PASSED
**Description:** Verify author unfollowing system.
**Pre-conditions:** User follows an author.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Click "Unfollow [Name]" button on profile | Button changes to "Follow"; Counter decreases |
| 2 | Go to Home -> "Your Feed" | Author's articles are removed from the feed |

### SOC-06: Favorite Article (Like) | STATUS: PASSED
**Description:** Verify article liking system.
**Pre-conditions:** User is logged in; viewing Global Feed.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Click Heart icon on an article | Heart fills; Number increments |
| 2 | Refresh page | Heart remains filled; Article appears in user's "Favorited" tab |

---

## 4. Module: Profile & Settings (SET)

### SET-01: Update Bio | STATUS: PASSED
**Description:** Verify user biography update.
**Pre-conditions:** User is logged in.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Go to "Settings" | Form displayed |
| 2 | Enter 200 words in "Short bio" | Data entered |
| 3 | Click "Update Settings" | Redirected to Profile; New bio is visible |

### SET-02: Update Profile Avatar | STATUS: PASSED
**Description:** Verify avatar image update via URL.
**Pre-conditions:** User is on Settings page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter valid image URL in Profile Picture field | Data entered |
| 2 | Click "Update Settings" | Avatar updates in navbar and profile page |

### SET-03: Change Password | STATUS: PASSED
**Description:** Verify secure password change.
**Pre-conditions:** User is on Settings page.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter new valid password in Password field | Data entered |
| 2 | Click "Update Settings" | Settings saved |
| 3 | Log out and log in with NEW password | Login successful |

### SET-04: Secure Logout | STATUS: PASSED
**Description:** Verify session termination.
**Pre-conditions:** User is logged in.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Go to Settings | Page displayed |
| 2 | Click "Or click here to logout" | Redirected to Home; "Sign in" option appears |
| 3 | Click browser "Back" button | User remains logged out; Cannot perform secure actions |

---

## 5. Module: UI & Security (UI/SEC)

### UI-01: Global Feed Pagination | STATUS: PASSED
**Description:** Verify article feed limits and page changes.
**Pre-conditions:** Feed has >10 articles.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Scroll to bottom of Global Feed | Pagination numbers visible |
| 2 | Click page "2" | New set of articles loads; URL updates or view jumps to top |

### UI-02: Mobile Navbar Collapse | STATUS: PASSED
**Description:** Verify responsive design on small screens.
**Pre-conditions:** App open in Chrome.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Open DevTools (F12) -> Device Toolbar | Responsive mode active |
| 2 | Set width to 375px (iPhone 12) | Layout shifts |
| 3 | Verify header navigation | Links stack properly or collapse into a hamburger menu without horizontal scrolling |

### SEC-01: Cross-Site Scripting (XSS) in Comments | STATUS: PASSED
**Description:** Verify system sanitizes malicious inputs.
**Pre-conditions:** User is logged in.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter `<script>alert('XSS')</script>` in comment box | Script entered |
| 2 | Click "Post Comment" | Text is rendered as string; No alert box triggers |

### SEC-02: Unauthorized Editor Access | STATUS: PASSED
**Description:** Verify URL protection for unauthenticated users.
**Pre-conditions:** User is logged out.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Enter `http://localhost:5173/editor` in URL bar | Request sent |
| 2 | Press Enter | Redirected to Home or Login page |

### SEC-03: Hidden Delete Button | STATUS: PASSED
**Description:** Verify users cannot delete others' content.
**Pre-conditions:** User A views User B's article.
| Step | Action | Expected Result |
| :--- | :--- | :--- |
| 1 | Open another author's article | Article displayed |
| 2 | Inspect page UI | "Edit Article" and "Delete Article" buttons are strictly hidden |