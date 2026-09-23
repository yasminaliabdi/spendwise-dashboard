# SpendWise Dashboard Shell

## What I Built

A responsive dashboard shell for a personal finance app called SpendWise. This is the foundation of my capstone project, built entirely with HTML and CSS — no JavaScript functionality yet.

## Files

- **index.html** - The dashboard structure with sidebar navigation, header, summary cards, and six category cards (Food, Transport, Rent, Entertainment, Savings, Utilities).
- **style.css** - The complete styling: CSS Grid for the page layout, Flexbox for internal component alignment, CSS custom properties for theming, and responsive design.

## Layout Techniques Used

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