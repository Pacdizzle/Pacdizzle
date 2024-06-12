const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const fileInput = document.getElementById('file-input');
const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

window.addEventListener('load', scrollBtns);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    updateLocalStorage();

    scrollBtns();

    text.value = '';
    amount.value = '';
  }
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Add transactions to DOM list
function addTransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
  `;

  list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

function removeTransaction(id) {
  const transactionToRemove = transactions.find((t) => t.id === id);
  if (transactionToRemove) {
    const command = new RemoveTransactionCommand(transactionToRemove);
    undoStack.push(command);
    command.execute();
    undoToast();
    scrollBtns();
  }
}

// Remove all transactions
function removeAllTransactions() {
  transactions = []; // Clear the transactions array
  updateLocalStorage();
  init();
  scrollBtns();
}

// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);


// Undo button click handler
const undoButton = document.getElementById("undo-button");
undoButton.addEventListener("click", () => {
  const lastCommand = undoStack.pop();
  if (lastCommand) {
    lastCommand.undo();
    scrollBtns();
  }
});

const undoStack = [];

// Command class for removing a transaction
class RemoveTransactionCommand {
  constructor(transaction) {
    this.transaction = transaction;
  }

  execute() {
    // Remove the transaction
    transactions = transactions.filter((t) => t.id !== this.transaction.id);
    updateLocalStorage();
    init();
  }

  undo() {
    // Add the transaction back
    transactions.push(this.transaction);
    updateLocalStorage();
    init();
  }
}

// replace transactions with user-defined JSON file
function replaceTransactionsWithUserFile() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    try {
      const userTransactions = JSON.parse(event.target.result);
      transactions = userTransactions;
      updateLocalStorage();
      init();
      scrollBtns();
    } catch (error) {
      alert('Error parsing the JSON file. Please ensure it is valid.');
    }
  };

  reader.readAsText(file);
}

function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);
fileInput.addEventListener('change', replaceTransactionsWithUserFile);

// export data to a JSON file
function exportDataToJSON() {
  const dataToExport = JSON.stringify(transactions, null, 2); // Convert transactions array to a formatted JSON string

  // Prompt the user to choose a file name and location
  const userFileName = prompt('Enter a file name (without extension):');
  if (!userFileName) {
    console.log('User canceled the operation.');
    return;
  }

  // Create a Blob with the JSON data
  const blob = new Blob([dataToExport], { type: 'application/json' });

  // Create a URL for the Blob
  const url = window.URL.createObjectURL(blob);

  // Create an anchor element
  const a = document.createElement('a');
  a.href = url; // Set the URL as the anchor's href
  a.download = `${userFileName}.json`; // Set the filename for the downloaded file
  a.click(); // Programmatically trigger the download

  // Clean up by revoking the URL
  window.URL.revokeObjectURL(url);
}

function undoToast() {
  var ut = document.getElementById("undoToast");
  ut.className = "show";
  setTimeout(function(){ ut.className = ut.className.replace("show", ""); }, 5000);
}

function scrollBtns() {
  var list = document.getElementById('list');
  var scrollUpButton = document.getElementById('scrollUp');
  var scrollDownButton = document.getElementById('scrollDown');

  // Check if the list overflows
  if (list.scrollHeight > list.clientHeight) {
    scrollUpButton.style.display = 'block';
    scrollDownButton.style.display = 'block';
  } else {
    scrollUpButton.style.display = 'none';
    scrollDownButton.style.display = 'none';
  }

  scrollUpButton.onclick = function() {
    list.scrollTop -= 25;  // Change this value to adjust scrolling speed
  };

  scrollDownButton.onclick = function() {
    list.scrollTop += 25;  // Change this value to adjust scrolling speed
  };
};