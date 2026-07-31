# Task 2: File-Based Routing

Next.js uses files for routes — no React Router needed.

RULES:

- app/page.js → /
- app/about/page.js → /about
- app/cart/page.js → /cart
- app/book/[id]/page.js → /book/1, /book/2

[id] = dynamic parameter (like :id in React Router)
