# SpendWise Dashboard

## What This Project Does

SpendWise is a personal budget tracking dashboard. It helps users track their income, expenses, and spending across different categories. This is my capstone project, built step by step over several weeks.

## Files

- **index.html** - The dashboard structure with sidebar navigation, header, summary cards, and six category cards (Food, Transport, Rent, Entertainment, Savings, Utilities).
- **style.css** - The complete styling: CSS Grid for the page layout, Flexbox for internal component alignment, CSS custom properties for theming, and responsive design.
- **script.js** - The JavaScript logic for collecting and processing budget data.
- **README.md** - This file.

## Layout Techniques Used (Week 4)

- **CSS Grid** - Used for the overall dashboard layout (sidebar + header + main content) and for the category cards grid.
- **Flexbox** - Used inside the header, sidebar navigation, summary cards, and each category card.
- **No absolute positioning** was used for the layout.

## Theme

The color palette is defined using CSS custom properties on the `:root` selector:
- Brand color: `--brand`
- Accent color: `--accent`
- Surface background: `--surface`
- Primary text: `--text-primary`
- Secondary text: `--text-secondary`

A dark theme is included using `@media (prefers-color-scheme: dark)` which overrides only the `:root` variables.

## Responsive Design

A media query below **768px** collapses the dashboard into a single-column layout:
- The sidebar becomes a horizontal navigation bar
- The summary cards stack vertically
- The category grid adjusts to available space

## Card Micro-interactions

Each category card has a hover and focus animation that lasts **250ms**:
- `transform: translateY(-4px)` for a subtle lift
- `box-shadow` for depth
- `border-color` change to the brand color
- Applied to both `:hover` and `:focus` states

## JavaScript Concepts Implemented (Week 6)

- **Variables** (`let`, `const`) — Used to store budget data and category names.
- **Data Types** — Numbers (`monthlyBudget`, `totalExpenses`), Strings, Arrays (`categories`).
- **User Input** — Used `prompt()` to collect budget and expense amounts from the user.
- **Calculations** — Subtracted total expenses from monthly budget to find remaining balance.
- **Functions** — Created reusable functions for each task:
  - `getBudget()` — Collects the monthly budget from the user.
  - `getExpenses()` — Loops through categories and collects each expense amount.
  - `calculateBalance(budget, expenses)` — Returns the remaining balance.
  - `displayResults(budget, expenses, balance)` — Prints the summary to the console.
- **Loops** — Used a `for` loop to go through each expense category.
- **Conditionals** — Used `if/else if/else` to warn when over budget.

## How Variables Are Used

| Variable | Type | Purpose |
|----------|------|---------|
| `monthlyBudget` | Number | Stores the user's total budget |
| `totalExpenses` | Number | Stores the sum of all expenses |
| `remainingBalance` | Number | Stores the calculated balance |
| `categories` | Array (const) | Stores the 6 expense categories |

## How User Input Is Collected

`prompt()` is used to ask the user for:
1. Their monthly budget
2. Amount spent on each category (Food, Transport, Rent, Entertainment, Savings, Utilities)

## How Calculations Are Performed

```javascript
remainingBalance = monthlyBudget - totalExpenses;