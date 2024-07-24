document.addEventListener('DOMContentLoaded', (event) => {
    displayExpenses();
});
  
function handleFormSubmit(event) {
    event.preventDefault();

    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const expense = {amount, description, category};
    localStorage.setItem(amount, JSON.stringify(expense));
    displayExpenses(expense);
}

function displayExpenses(expense) {
    const expenseList = document.getElementById('expenseList');
    const listItem = document.createElement('li');
    listItem.textContent = `${expense.amount} - ${expense.category} - ${expense.description}`;

    const dltbtn = document.createElement('button');
    dltbtn.textContent = 'Delete Expense';

    dltbtn.addEventListener('click' , function(){
        localStorage.removeItem(expense.amount);
        expenseList.removeChild(listItem);
    });

    const editbtn = document.createElement('button');
    editbtn.textContent = 'Edit Expense';

    editbtn.addEventListener('click' , function(){
        localStorage.removeItem(expense.amount);
        expenseList.removeChild(listItem);

        document.getElementById('amount').value = expense.amount;
        document.getElementById('description').value = expense.description;
        document.getElementById('category').value = expense.category;

    });

    listItem.appendChild(dltbtn);
    listItem.appendChild(editbtn);
    expenseList.appendChild(listItem);
}