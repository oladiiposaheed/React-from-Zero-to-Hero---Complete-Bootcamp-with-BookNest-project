# Task 3: Server vs Client Components

SERVER COMPONENTS (default):

- Run on server
- Fetch data directly
- No useState, onClick, useEffect
- Faster, better SEO

CLIENT COMPONENTS ('use client'):

- Run in browser
- Can use hooks, events, state
- For interactive parts

RULE: Interactive? → 'use client'. Just data? → Server Component.
