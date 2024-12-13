# Next.js 15 App Router: Client Component Re-render Issue

This repository demonstrates a bug in Next.js 15's App Router where client components don't always re-render when data changes in a parent server component.  This can lead to stale data being displayed in the UI.

## Bug Description

A server component fetches data and passes it to a client component as a prop. When the data in the server component changes (e.g., due to a user interaction or a timer), the client component does not automatically re-render to reflect the updated data. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that the client component does not update when the data changes in the server component.

## Expected Behavior

The client component should re-render whenever the data provided by the server component changes.

## Actual Behavior

The client component does not re-render, resulting in stale data in the UI.

## Solution

The solution involves using the `use` function provided by Next.js to create a custom hook that tracks data changes and triggers re-renders. This allows the client component to accurately reflect changes in data from the server component.
