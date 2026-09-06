# Personal Expense & Budget Tracker

## Task 1: Project Planning

* **Project Title:** Personal Expense & Budget Tracker
* **Project Objective:** Build an interactive, real-time single-page web application to help users log daily income and expenses, calculate active balances, and search or filter transactions by category.
* **Target Users:** Students, freelancers, and individuals seeking a simple tool to manage daily finances without complex spreadsheet software.
* **Main Features:**
  - Add new income and expense entries with description, amount, and category.
  - Dynamic computation of Total Balance, Total Income, and Total Expenses using JavaScript array methods.
  - Delete transaction entries with real-time DOM updates.
  - Instant search filtering by text description and dropdown category filtering.
  - Data persistence using browser localStorage.
  - Input form validation preventing blank or negative monetary submissions.
* **Technologies Used:** HTML5, CSS3 (Flexbox & CSS Variables), JavaScript (ES6+), Web Storage API (localStorage).
* **Brief Description:** The Personal Expense & Budget Tracker is a responsive single-page web application designed to help users track their daily income and expenses effortlessly. Built using vanilla HTML, CSS, and JavaScript, the application automatically computes total income, total expenses, and net balance in real time. It utilizes browser localStorage to ensure data persistence, allowing users to save their financial records across sessions. Additionally, it features dynamic category filtering, instant search functionality, and input validation to deliver a seamless user experience for personal financial management.

---

## Task 6: Project Documentation & Reflection

### Project Overview
The Personal Expense & Budget Tracker is a responsive web application designed to help users record daily revenues and expenditures. The primary goal is to provide instantaneous visual feedback on active balances, total income, and net spending while allowing users to organize financial items dynamically.

### Features Implemented
* **Dynamic Calculations:** Automated total, income, and expense summaries using functional array methods.
* **Search & Category Filtering:** Real-time array filtering triggered by text input and dropdown selections.
* **Persistent Storage:** Browser localStorage integration ensuring data stays saved across sessions.
* **Input Validation:** Error handling preventing invalid numbers or blank inputs.

### Technologies & JavaScript Concepts Used
This project was constructed using standard HTML5, modern CSS flexbox/grid layouts, and vanilla JavaScript (ES6+). Core JS mechanics include:
* **DOM Operations:** Element selection (`getElementById`), dynamic element creation, and event listeners (`submit`, `input`, `change`).
* **Array Methods:** `map()`, `filter()`, `reduce()`, and `push()` for managing application state.
* **JSON Parsing:** `JSON.stringify()` and `JSON.parse()` for Web Storage serialization.

### Challenges Faced & Solutions Implemented
* **Challenge:** Maintaining accurate calculations when switching item types between income and expense.
  * **Solution:** Standardized the underlying state to store positive values while dynamically handling sign orientation (`+` / `-`) during `reduce()` operations.
* **Challenge:** List UI failing to refresh immediately when applying combined search queries and category filters.
  * **Solution:** Consolidated render logic into a single `renderTransactions()` function driven by unified event listeners.

### Key Learnings & Future Improvements
Building this application strengthened my understanding of state management, array manipulations, and event-driven architectures in JavaScript. Future enhancements will include adding graphical chart breakdowns (e.g., Chart.js integration), exporting data as CSV, and editing existing transactions.
