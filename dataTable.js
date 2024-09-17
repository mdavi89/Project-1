// Selecting the main branch and adding it to a variable
const tbodyEl = document.querySelector('tbody');
const budgetHtmlEl = document.getElementById('budget-html');
const RemainingHtmlEl = document.getElementById('remaining-html');



function isNumber(value) {
    return typeof value === 'number';
}
// reads local storage data
const readLocalStorage = function() {
    let emptyData = [];
    let localData = JSON.parse(localStorage.getItem('expData'));
    if (localData === null) {
        return emptyData;
    }
    else {
        return localData;
    }
    
};

  // stores local data
const storeLocalStorage = function(object) {
    let localData = readLocalStorage();
    localData.push(object);
    localStorage.setItem('expData', JSON.stringify(localData));
    let remaining = getRemaining();
    localStorage.setItem('remaining', JSON.stringify(remaining));
    renderBudget();
};
// function to add budget entries to the main
const buildAnElement = function() {
    let budgetEntry = readLocalStorage();
    budgetEntry.forEach(entry => {
        const trElement = document.createElement('tr');
        trElement.classList.add('entry');

        const expenseElement = document.createElement('th');
        expenseElement.textContent = entry.expense;

        const amountElement = document.createElement('td');
        amountElement.textContent = entry.amount;

        // Append elements to the budget element
        trElement.appendChild(expenseElement);
        trElement.appendChild(amountElement);

        // Append the entry element to the tbody element
        tbodyEl.appendChild(trElement);
    });

}
// function to check for an empty budget list
function budgetCheck() {
    let emptyData = '';
    check = readLocalStorage();
    if (check == emptyData) {
        tbodyEl.textContent = "No expense added yet!";
    };
    
};

function budgetTotalCheck() {
    let check = JSON.parse(localStorage.getItem('budget'));
    let checkingCheck = isNumber(check);
    if (checkingCheck === false) {
        budgetHtmlEl.textContent = "No budget added yet!";
        RemainingHtmlEl.textContent = '';
    };
    
};

function renderBudget(){
    let budget = JSON.parse(localStorage.getItem('budget'));
    let remainingMoney = JSON.parse(localStorage.getItem('remaining'));

    budgetHtmlEl.textContent = budget;
    RemainingHtmlEl.textContent = remainingMoney;
    budgetTotalCheck();
};

// function to render the budget to the html
function renderBudgetList() {
    tbodyEl.innerHTML = '';
    budgetCheck();
    buildAnElement();
    
};

budgetCheck();
renderBudgetList();
renderBudget();

