const expenses = [];

// Function to add an expense
function addExpense(description, amount, date) {
    try {
        if (!description || typeof description !== 'string') {
            throw new Error("Invalid description.");
        }
        if (isNaN(amount) || amount <= 0) {
            throw new Error("Amount must be a positive number.");
        }
        if (typeof date !== 'number' || date <= 0) {
            throw new Error("Invalid date.");
        }

        const expense = { description, amount, date };
        expenses.push(expense);
        console.log("Expense added:", expense);
    } catch (error) {
        console.error(error.message);
    }
}

// Adding expenses (using timestamp for the date)
addExpense("Groceries", 50, 25 * 12 * 24 * 60 * 60 * 1000); // Example timestamp, should be valid number
addExpense("Gas", 30, Date.now()); // Using the current timestamp

// Function to calculate total expenses
function totalExpenses() {
    return expenses.reduce((total, exp) => total + exp.amount, 0);
}
console.log("Total Expenses:", totalExpenses());

// Function to filter expenses by date range
function filterByDateRange(startDate, endDate) {
    return expenses.filter(exp => exp.date >= startDate && exp.date <= endDate);
}
console.log("Filtered Expenses:", filterByDateRange(Date.now() - 7 * 24 * 60 * 60 * 1000, Date.now()));

// Async function to fetch expense report
function fetchExpenseReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (expenses.length > 0) {
                resolve(`Total Expenses: ${totalExpenses()}`);
            } else {
                reject("No expenses recorded.");
            }
        }, 2000);
    });
}

fetchExpenseReport()
    .then(report => console.log(report))
    .catch(err => console.error(err));

// Stop the operations after 60 seconds
setTimeout(() => {
    console.log("1 minute has passed. Ending all operations.");
}, 60 * 1000);
