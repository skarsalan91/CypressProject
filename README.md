# Cypress Automation Testing Project

## 📌 Overview

This repository contains a collection of **Cypress End-to-End (E2E) automation tests** created to demonstrate practical web application testing using Cypress.

The project covers fundamental and intermediate Cypress concepts including:

* Web element identification
* CSS selectors
* XPath locators
* Assertions
* Radio buttons and checkboxes
* Dropdown handling
* File upload
* End-to-End test scenarios
* Page interaction and validation

The test scripts are organized under the `cypress/e2e` directory and are written using JavaScript.

---

## 🛠️ Technology Stack

| Technology | Purpose                    |
| ---------- | -------------------------- |
| Cypress    | End-to-End Test Automation |
| JavaScript | Test scripting             |
| Node.js    | Runtime environment        |
| npm        | Package management         |
| Git        | Version control            |
| GitHub     | Source code repository     |

---

## 📂 Project Structure

```text
CypressProject/
│
├── cypress/
│   ├── e2e/
│   │   ├── Assertion.cy.js
│   │   ├── Assertion1.cy.js
│   │   ├── Assertion2.cy.js
│   │   ├── CSSLocator.cy.js
│   │   ├── MyFirstTest.cy.js
│   │   ├── RadioAndCheckbox.cy.js
│   │   ├── Testcase1.cy.js
│   │   ├── Testcase2.cy.js
│   │   ├── Testcase3.cy.js
│   │   ├── Testcase4.cy.js
│   │   ├── Testcase5.cy.js
│   │   ├── Testcase6.cy.js
│   │   ├── Testcase7.cy.js
│   │   ├── XpathLocator.cy.js
│   │   ├── dropdown.cy.js
│   │   └── fileUpload.cy.js
│   │
│   ├── fixtures/
│   └── support/
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧪 Test Coverage

### 1. Assertions

The assertion test cases demonstrate how Cypress can validate expected application behavior using assertions such as:

```javascript
.should()
```

and

```javascript
.expect()
```

Examples include validating:

* Element visibility
* Text content
* Element state
* Page behavior
* Expected values

---

### 2. CSS Locators

`CSSLocator.cy.js` demonstrates locating web elements using CSS selectors.

Examples include:

```javascript
cy.get('input[type="email"]')
```

```javascript
cy.get('button[type="submit"]')
```

CSS selectors are useful for creating stable and readable Cypress tests.

---

### 3. XPath Locators

`XpathLocator.cy.js` demonstrates element identification using XPath expressions.

XPath can be useful when an element does not have a convenient CSS selector or when relationships between elements need to be used.

---

### 4. Radio Buttons & Checkboxes

`RadioAndCheckbox.cy.js` demonstrates interaction with:

* Radio buttons
* Checkboxes
* Selection validation
* Element state verification

Typical Cypress commands include:

```javascript
.check()
```

```javascript
.uncheck()
```

```javascript
.should('be.checked')
```

---

### 5. Dropdown Testing

`dropdown.cy.js` demonstrates working with dropdown elements and validating selected values.

Example:

```javascript
cy.get('select').select('Option')
```

The tests validate that the expected option is selected successfully.

---

### 6. File Upload

`fileUpload.cy.js` demonstrates automated file-upload testing using Cypress.

The test verifies that a file can be selected and uploaded successfully.

---

### 7. End-to-End Test Cases

The repository contains multiple end-to-end test scenarios:

* `Testcase1.cy.js`
* `Testcase2.cy.js`
* `Testcase3.cy.js`
* `Testcase4.cy.js`
* `Testcase5.cy.js`
* `Testcase6.cy.js`
* `Testcase7.cy.js`

These tests demonstrate how individual Cypress commands can be combined to automate complete user workflows.

---

## 🚀 Installation

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

Clone the repository:

```bash
git clone https://github.com/skarsalan91/CypressProject.git
```

Navigate to the project:

```bash
cd CypressProject
```

Install project dependencies:

```bash
npm install
```

---

## ▶️ Running Cypress

### Open Cypress Test Runner

Run:

```bash
npx cypress open
```

Select:

```text
E2E Testing
```

Then select the required browser and test specification.

---

### Run Tests in Headless Mode

To execute all E2E tests from the command line:

```bash
npx cypress run
```

---

### Run a Specific Test

To execute a specific specification:

```bash
npx cypress run --spec "cypress/e2e/Testcase1.cy.js"
```

You can replace the filename with any other spec file.

---

## 🌐 Application Under Test

The test suite contains examples of web UI automation against web applications used for learning and practicing Cypress automation concepts.

Before running the tests, make sure the application being tested is accessible and that the URLs used in the test scripts are available.

---

## 🎯 Learning Objectives

This project was created to build practical experience with Cypress and demonstrate the following skills:

* Cypress test automation
* E2E testing
* Web UI automation
* Locator strategies
* CSS selectors
* XPath
* Assertions
* Form testing
* Checkbox and radio-button testing
* Dropdown testing
* File-upload testing
* Test organization
* JavaScript-based automation

---

## 📈 Future Enhancements

The project can be further enhanced by adding:

* Page Object Model (POM)
* Custom Cypress commands
* Fixtures and test data
* Data-driven testing
* API testing
* API mocking and interception
* Screenshot and video reporting
* HTML test reports
* Cross-browser execution
* GitHub Actions CI/CD
* Parallel test execution
* Environment-specific configurations

Cypress supports running specific E2E specifications from the command line and can also be integrated into CI workflows using the official Cypress GitHub Action.

---

## 👨‍💻 Author

**Arsalan Shaikh**

Software QA Engineer | Manual Testing | Automation Testing | API Testing | Database Testing

---

## 🔗 Repository

[View Cypress Project on GitHub](https://github.com/skarsalan91/CypressProject)

---

## ⭐ Purpose of This Repository

This repository is intended as a **QA Automation learning and portfolio project** demonstrating hands-on experience with Cypress E2E testing and common web automation scenarios.

If you find this project useful, feel free to ⭐ the repository.
# CypressProject
