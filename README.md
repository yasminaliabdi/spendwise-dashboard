# SpendWise Dashboard

## What This Project Does

SpendWise is a personal budget tracking dashboard. It helps users track their income, expenses, and spending across different categories. This is my capstone project, built step by step over several weeks.

## Files

- **index.html** - The dashboard structure with sidebar navigation, header, summary cards, add expense form, feedback section, and expense list.
- **style.css** - The complete styling: CSS Grid, Flexbox, CSS custom properties, and responsive design.
- **script.js** - The interactive JavaScript logic.
- **README.md** - This file.

## Week 6 Improvements

This week, SpendWise became fully interactive. Here is what was added:

### 1. Conditionals (Decision Making)

The `getBudgetFeedback()` function uses `if / else if / else` to provide different feedback based on the remaining balance:

- **Over budget** → Warning message
- **Exactly zero** → Neutral message
- **Less than 20% left** → Caution message
- **Within budget** → Positive message

### 2. Arrays (Multiple Records)

Instead of individual variables, all expenses are stored in an array:

```javascript
let expenses = [];
