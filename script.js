const formEl = document.querySelector('form');
const clearBtmEl = document.getElementById('clear');
const expenseInput = document.getElementById('expense');
const amountInput = document.getElementById('amount');
const budgetInput = document.getElementById('budget');


function getInfo(event) {
  event.preventDefault();
  
  let expDataEntry = {
    expense: expenseInput.value,
    amount: amountInput.value,
  };

  storeLocalStorage(expDataEntry);
  renderBudgetList();
  formEl.reset();

}

function clearTable(event) {
  event.preventDefault();
  tbodyEl.innerHTML = '';
  localStorage.clear();
  renderBudgetList();
};

formEl.addEventListener('submit', getInfo);
clearBtmEl.addEventListener('click', clearTable);


