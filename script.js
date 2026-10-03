// ============================================
// SpendWise - Interactive Budget Dashboard
// ============================================

// --- Variables: Store Application Data ---

let monthlyBudget = 50000;
let expenses = [];  // Array to store expense records

// --- Function: Add Expense to Array ---

function addExpense(name, amount, category) {
    expenses.push({
        name: name,
        amount: amount,
        category: category
    });
}

// --- Function: Calculate Total Expenses ---

function calculateTotalExpenses() {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }
    return total;
}

// --- Function: Calculate Remaining Balance ---

function calculateBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

// --- Function: Get Budget Feedback (Conditionals) ---

function getBudgetFeedback(balance) {
    if (balance < 0) {
        return "⚠️ Over budget! You are spending more than you earn.";
    } else if (balance === 0) {
        return "⚖️ You spent exactly your budget.";
    } else if (balance < monthlyBudget * 0.2) {
        return "⚠️ Warning: Less than 20% of your budget remains.";
    } else {
        return "✅ Good job! You are within budget.";
    }
}

// --- Function: Update the DOM ---

function updateDashboard() {
    // Calculate totals
    let totalExpenses = calculateTotalExpenses();
    let balance = calculateBalance(monthlyBudget, totalExpenses);

    // Update summary cards
    document.getElementById("total-balance").textContent = "KSh " + balance.toLocaleString();
    document.getElementById("total-income").textContent = "+ KSh " + monthlyBudget.toLocaleString();
    document.getElementById("total-expenses").textContent = "- KSh " + totalExpenses.toLocaleString();

    // Update feedback message
    let feedback = getBudgetFeedback(balance);
    document.getElementById("feedback").textContent = feedback;

    // Update the expense list
    let list = document.getElementById("expense-list");
    list.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        let item = document.createElement("li");
        item.textContent = expenses[i].name + " - KSh " + expenses[i].amount + " (" + expenses[i].category + ")";
        list.appendChild(item);
    }
}

// --- Function: Handle Add Expense Button ---

function handleAddExpense() {
    let name = document.getElementById("expense-name").value;
    let amount = Number(document.getElementById("expense-amount").value);
    let category = document.getElementById("expense-category").value;

    // Validate input
    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    // Add to array
    addExpense(name, amount, category);

    // Clear input fields
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";

    // Update the page
    updateDashboard();
}

// --- Event Listener: Connect the Button ---

document.getElementById("add-expense-btn").addEventListener("click", handleAddExpense);

// --- Initial Load: Show the Dashboard ---

updateDashboard();