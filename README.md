# Repro for AG Grid Maximum update depth exceeded

## Steps to reproduce

### Setup 

1. `pnpm i`
2. `pnpx nx serve platform-ui`

### 

1. Navigate to http://localhost:4200/
2. Observe AG Grid table
3. Begin scrolling both vertically and horizontally at a random interval
4. Observe the "Maximum update depth exceeded." error
