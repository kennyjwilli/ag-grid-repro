# Repro for AG Grid Maximum update depth exceeded

## Steps to reproduce

### Setup 

1. `cd apps/next-repro`
1. `pnpm i`
2. `pnpm dev`

### 

1. Navigate to http://localhost:3000/
2. Observe AG Grid table
3. Begin scrolling both vertically and horizontally at a random interval
4. Observe the "Maximum update depth exceeded." error
