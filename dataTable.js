// Selecting the main branch and adding it to a variable
mainEl = document.querySelector('main');

// initial function for when the page loads


// function to add budget entries to the main
const buildAnElement = function() {
    let budgetEntry = readLocalStorage();
    budgetEntry.forEach(entry => {
        const budgetElement = document.createElement('div');
        budgetElement.classList.add('budget-entry');

        const expenseElement = document.createElement('h2');
        expenseElement.textContent = entry.expense;

        const amountElement = document.createElement('p');
        amountElement.textContent = entry.content;

        // Append elements to the budget element
        budgetElement.appendChild(expenseElement);
        budgetElement.appendChild(amountElement);

        // Append the post element to the main element
        mainEl.appendChild(budgetElement);
    });

}
// function to check for an empty budget list
function budgetCheck() {
    let emptyData = '';
    check = readLocalStorage();
    if (check == emptyData) {
        mainEl.textContent = "No expense added yet!";
    };
    
};

// function to render the budget to the html
function renderBudgetList() {
    mainEl.innerHTML = '';
    budgetCheck();
    buildAnElement();
    
};
// function to track spending
function trackSpending(){
    let budget = localStorage.getItem('budget');
    let expense = localStorage.getItem('expense');
    let expenseTotal = budget - expense;
    return expenseTotal;
    
};

// function to render the budget amounts
function renderBudget() {
    const budgetEl = document.createElement('div');
    budgetEl.classList.add('budget');

    const budgetTotal = document.createElement('h2');
    budgetTotal.textContent = localStorage.getItem('budget');

    const amountRemaining = document.createElement('p');
    amountRemaining.textContent = trackSpending();

    // Append elements to the budget element
    budgetEl.appendChild(budgetTotal);
    budgetEl.appendChild(amountRemaining);

    // Append the element to the main element
    mainEl.appendChild(budgetEl);
};

budgetCheck();
renderBudgetList();
renderBudget();
