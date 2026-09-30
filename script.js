// ============================================
// SpendWise - Budget Calculator
// ============================================

// --- Variables: Store Application Data ---

// Budget data
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Expense categories
const categories = ["Food", "Transport", "Rent", "Entertainment", "Savings", "Utilities"];

// --- Function: Get User Budget ---

function getBudget() {
    let input = prompt("Enter your monthly budget (KSh):");
    monthlyBudget = Number(input);
    return monthlyBudget;
}

// --- Function: Get Expense Amounts ---

function getExpenses() {
    let total = 0;

    for (let i = 0; i < categories.length; i++) {
        let input = prompt("Enter amount spent on " + categories[i] + " (KSh):");
        let amount = Number(input);

        if (!isNaN(amount) && amount > 0) {
            total += amount;
        }
    }

    return total;
}

// --- Function: Calculate Remaining Balance ---

function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// --- Function: Display Results ---

function displayResults(budget, expenses, balance) {
    console.log("========================================");
    console.log("        SPENDWISE BUDGET SUMMARY        ");
    console.log("========================================");
    console.log("Monthly Budget:   KSh " + budget.toFixed(2));
    console.log("Total Expenses:   KSh " + expenses.toFixed(2));
    console.log("Remaining Balance: KSh " + balance.toFixed(2));
    console.log("========================================");

    if (balance < 0) {
        console.log("⚠️  WARNING: You are over budget!");
    } else if (balance === 0) {
        console.log("✅ You spent exactly your budget.");
    } else {
        console.log("✅ Good job! You are within budget.");
    }
}

// --- Main Program ---

console.log("Welcome to SpendWise!");

monthlyBudget = getBudget();
totalExpenses = getExpenses();
remainingBalance = calculateBalance(monthlyBudget, totalExpenses);

displayResults(monthlyBudget, totalExpenses, remainingBalance);