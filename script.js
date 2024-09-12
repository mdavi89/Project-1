const submitButton = document.querySelector()
const expenseInput = document.querySelector()
const amountInput = document.querySelector()
const budgetInput = document.querySelector()


function getInfo(event) {
  event.preventDefault();
  
  const expense = expenseInput.value
  const amount = amountInput.value
    if (isNaN(amount)) {
      return;
    }
  const budget = budgetInput.value
    if (isNaN(budget)) {
      return;
    }
  localStorage.setItem('expense', expense);
  localStorage.setItem('amount', amount);
  localStorage.setItem('budget', budget);
}
submitButton.addEventListener('click', getInfo)

