// State Management
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// DOM Elements Selection
const balanceEl = document.getElementById('total-balance');
const incomeEl = document.getElementById('total-income');
const expenseEl = document.getElementById('total-expense');
const form = document.getElementById('transaction-form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');
const categoryInput = document.getElementById('category');
const transactionList = document.getElementById('transaction-list');
const searchInput = document.getElementById('search-input');
const filterCategory = document.getElementById('filter-category');
const errorMessage = document.getElementById('error-message');
const emptyListMsg = document.getElementById('empty-list-msg');

// Initial Application Setup
function init() {
  updateTotals();
  renderTransactions();
}

// Update Local Storage
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Calculate and Display Totals
function updateTotals() {
  const amounts = transactions.map(t => t.type === 'expense' ? -Math.abs(t.amount) : Math.abs(t.amount));
  
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => (acc += t.amount), 0)
    .toFixed(2);
  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => (acc += t.amount), 0)
    .toFixed(2);

  balanceEl.innerText = `$${total}`;
  incomeEl.innerText = `$${income}`;
  expenseEl.innerText = `$${expense}`;
}

// Render Filtered Transaction List to DOM
function renderTransactions() {
  transactionList.innerHTML = '';

  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = filterCategory.value;

  const filtered = transactions.filter(t => {
    const matchesSearch = t.text.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    emptyListMsg.classList.remove('hidden');
  } else {
    emptyListMsg.classList.add('hidden');
  }

  filtered.forEach(t => {
    const li = document.createElement('li');
    li.classList.add('transaction-item', t.type);

    const sign = t.type === 'income' ? '+' : '-';

    li.innerHTML = `
      <div class="item-info">
        <span class="item-title">${t.text}</span>
        <span class="item-category">${t.category}</span>
      </div>
      <div class="item-actions">
        <span>${sign}$${Math.abs(t.amount).toFixed(2)}</span>
        <button class="delete-btn" onclick="removeTransaction(${t.id})">✕</button>
      </div>
    `;

    transactionList.appendChild(li);
  });
}

// Add New Transaction
function addTransaction(e) {
  e.preventDefault();

  const textValue = textInput.value.trim();
  const amountValue = parseFloat(amountInput.value);

  // Form Validation
  if (textValue === '' || isNaN(amountValue) || amountValue <= 0) {
    showError('Please enter a valid description and a positive amount.');
    return;
  }

  hideError();

  const newTransaction = {
    id: Date.now(),
    text: textValue,
    amount: amountValue,
    type: typeInput.value,
    category: categoryInput.value
  };

  transactions.push(newTransaction);
  updateLocalStorage();
  updateTotals();
  renderTransactions();

  // Reset Form
  textInput.value = '';
  amountInput.value = '';
}

// Remove Transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateLocalStorage();
  updateTotals();
  renderTransactions();
}

// Error Message Handlers
function showError(msg) {
  errorMessage.innerText = msg;
  errorMessage.classList.remove('hidden');
}

function hideError() {
  errorMessage.classList.add('hidden');
}

// Event Listeners
form.addEventListener('submit', addTransaction);
searchInput.addEventListener('input', renderTransactions);
filterCategory.addEventListener('change', renderTransactions);

// Initialize App
init();