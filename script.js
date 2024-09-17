const formEl = document.querySelector('.budget-table');
const budgetEl = document.querySelector('.budget-total');
const clearBtmEl = document.getElementById('clear');
const expenseInput = document.getElementById('expense');
const amountInput = document.getElementById('amount');
const budgetInput = document.getElementById('budget');
const error = document.querySelector('#error');


function getInfo(event) {
  event.preventDefault();

  let check = JSON.parse(localStorage.getItem('budget'));
  let checkingCheck = isNumber(check);
  if (checkingCheck === false) {
      window.alert("Please add a budget first:");
      return;
  };
  let expDataEntry = {
    expense: expenseInput.value,
    amount: amountInput.value,
  };

  if (expDataEntry.expense === '' || expDataEntry.amount === '') {
    window.alert("Please enter all the fields:");
    return;
}
  else if (isNaN(expDataEntry.amount)) {
    window.alert("Please enter a number for the amount:");
    return;
}
  else {
  storeLocalStorage(expDataEntry);
  renderBudgetList();
  formEl.reset();
};
}

function getRemaining() {
  let budget = JSON.parse(localStorage.getItem('budget'));
  let amountTotal = 0;
  let getAmount = readLocalStorage();
  console.log(getAmount.length);
  for (i=0; i<getAmount.length; i++) {
    amountTotal = amountTotal+parseInt(getAmount[i].amount);
  }
  let budgetRemaining = budget-amountTotal;
  return budgetRemaining;
};

function getBudget(event) {
  event.preventDefault();
  let budgetTotal = budgetInput.value;
  localStorage.setItem('budget', (budgetTotal));
  budgetEl.reset();
  let remaining = getRemaining();
  localStorage.setItem('remaining', JSON.stringify(remaining));
  renderBudget();
};




function clearTable(event) {
  event.preventDefault();
  tbodyEl.innerHTML = '';
  localStorage.clear();
  renderBudgetList();
  renderBudget();
  budgetTotalCheck();
};


formEl.addEventListener('submit', getInfo);
clearBtmEl.addEventListener('click', clearTable);
budgetEl.addEventListener('submit', getBudget);


