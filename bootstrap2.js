let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value; // Corrected from ariaValueMax
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }

    const expense = { category, amount, date };
    expenses.push(expense);

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const editCell = newRow.insertCell();
    const editBtn = document.createElement('button');

    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', function() {
        categorySelect.value = expense.category;
        amountInput.value = expense.amount;
        dateInput.value = expense.date;

        // Remove the expense from the array and update the total amount
        expenses.splice(expenses.indexOf(expense), 1);
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(newRow);
    });

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    editCell.appendChild(editBtn);
});

for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const editCell = newRow.insertCell();
    const editBtn = document.createElement('button');

    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', function() {
        categorySelect.value = expense.category;
        amountInput.value = expense.amount;
        dateInput.value = expense.date;

        // Remove the expense from the array and update the total amount
        expenses.splice(expenses.indexOf(expense), 1);
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(newRow);
    });

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    editCell.appendChild(editBtn);
}
