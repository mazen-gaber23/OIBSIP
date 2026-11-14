# Smart Login System (Client-Side Authentication)

A modern, secure, and responsive **Client-Side Login Authentication System** built as a front-end web development project. The application provides user registration, login validation, SHA-256 password hashing, route protection for the dashboard, and session persistence using browser `localStorage`.

---

## 🛠️ Tech Stack Used

* **HTML5:** Structuring the login page (`index.html`), registration page (`signUP.html`), and protected dashboard (`welcome.html`).
* **CSS3:** Custom modern dark-mode styling, glassmorphism (`backdrop-filter`), radial gradients, shadows, and smooth hover/focus transitions.
* **Bootstrap 5:** Responsive layout, flexbox centering utilities, navbar components, and form controls.
* **Vanilla JavaScript (ES6+):** Form validation, duplicate account checks, asynchronous password hashing, session verification, and redirection logic.
* **Web Crypto API (`crypto.subtle`):** Cryptographic hashing using **SHA-256** so passwords are never stored in plain text.
* **LocalStorage:** Persists registered user accounts and active session state across page reloads.

---

## ✨ Features & Functionality

* **User Registration (`signUP.html`):** Allows new users to create an account using their name, email, and password.
* **Strong Password Validation:** Enforces security rules requiring a minimum of 8 characters and at least 1 numeric digit using Regular Expressions.
* **Duplicate Email Detection:** Checks existing records in `localStorage` to prevent registering with an already used email address.
* **Secure Password Hashing:** Encrypts user passwords via **SHA-256** before saving them to `localStorage` and hashes login attempts for secure comparison.
* **User Login (`index.html`):** Authenticates users against stored hashed credentials and initializes an active user session.
* **Generic Error Handling:** Displays a unified error message (`Incorrect email or password`) on failed logins without revealing which specific field was incorrect.
* **Empty Field Validation:** Prevents empty form submissions on both the registration and login pages with clear visual alerts.
* **Protected Dashboard (`welcome.html`):** Restricts unauthorized access by checking for an active session; automatically redirects unauthenticated visitors back to the login page.
* **Session Logout:** Clears the active session key from `localStorage` upon clicking Logout and redirects the user safely to the login screen.

---

## 📚 Application Pages

1. **Login Page (`index.html`)** – The entry point of the application where registered users sign in with their email and password.
2. **Registration Page (`signUP.html`)** – Allows new users to sign up with input validation, password strength checks, and duplicate prevention.
3. **Protected Dashboard (`welcome.html`)** – Displays a personalized welcome message for authenticated users alongside a top navigation bar with a Logout button.

---

## 📁 Folder Structure

```text
Smart-Login-System/
├── index.html
├── signUP.html
├── welcome.html
├── css/
│   ├── bootstrap.min.css
│   ├── all.min.css
│   └── home.css
├── js/
│   ├── bootstrap.bundle.js
│   ├── login.js
│   ├── signUP.js
│   └── welcome.js
└── README.md
```

---

## 🎨 Design Highlights

* Sleek dark-slate theme with a radial gradient background (`#0f172a` to `#1e293b`).
* **Glassmorphism Cards:** Translucent containers with `backdrop-filter: blur(16px)` and subtle borders.
* Sky-blue (`#38bdf8`) accents and gradient action buttons with smooth lift animations on hover.
* Custom focus states on input fields for improved accessibility and visual feedback.
* Distinct amber-styled **Logout** button in the fixed top navbar for clear call-to-action separation.

---

## 💾 Data Persistence & Security

The application uses **Browser LocalStorage** to manage user records and active sessions:

Registered users are stored as a JSON array under:

```text
Data
```

Each user object stores the name, email, and **SHA-256 hashed password** (never plain text).

The currently logged-in user's session is tracked under:

```text
userName
```

When the user clicks **Logout**, the `userName` key is removed from `localStorage`, immediately revoking access to `welcome.html`.

---

## 📱 Responsive Design

The application is designed to work seamlessly across:

* 📱 Mobile phones
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

Centered flexbox containers and responsive Bootstrap utilities ensure forms and dashboard cards adapt cleanly to any viewport size.

---

## 🧠 JavaScript Functionality

The authentication logic is modularized into three dedicated scripts without external JS frameworks:

* **Registration (`signUP.js`):**
  * `isEmpty()` – Ensures all registration inputs are filled.
  * `checkPasswordStrength()` – Validates password length ($\ge 8$ characters) and numeric requirement via Regex.
  * `isExist()` – Scans `Data` in `localStorage` to block duplicate email registrations.
  * `hashAndAddData()` – Hashes the password using `crypto.subtle.digest('SHA-256', ...)` and saves the new user object.
* **Login (`login.js`):**
  * `isEmpty()` – Validates that email and password fields are not empty.
  * Login event listener – Hashes the entered password with SHA-256, compares credentials against stored users, sets `userName` in `localStorage`, and redirects to `welcome.html`.
* **Dashboard Protection (`welcome.js`):**
  * Route Guard – Verifies `localStorage.getItem('userName')` on page load and redirects to `index.html` if missing.
  * `logout()` – Removes `userName` from `localStorage` when logging out.

---

## 👨‍💻 Project

**Smart Login System**

Created as a front-end web development project to practice:

* HTML5 & CSS3 (Glassmorphism & Modern UI)
* Bootstrap 5
* Vanilla JavaScript (ES6+ & Async/Await)
* Web Crypto API (SHA-256 Hashing)
* Client-Side Form Validation & Regex
* LocalStorage & Session Management
* Protected Route Redirection

---

⭐ **A secure, modern client-side authentication system built with HTML, CSS, Bootstrap, and Vanilla JavaScript.**