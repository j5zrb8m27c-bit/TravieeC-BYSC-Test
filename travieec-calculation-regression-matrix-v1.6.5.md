# V1.6.5 Calculation / Regression Matrix

| Case | Expected | Result |
|---|---|---|
| 7.9 / 8.0 labor hours | Standard | Pass |
| 8.1 / 8.5 / 9.1 / 12.0 labor hours | Split/Extended | Pass |
| Unknown component only | Pending Review, not $0 | Pass |
| Known + unresolved components | Known estimate plus unresolved reason | Pass |
| Electrical diagnostic locations ×3 | Scope detail; no quantity-only Review | Pass |
| Same task repetition | Approved progressive curve | Pass |
| Different task types | Curve resets per type | Pass |
| Price efficiency change | Labor unchanged | Pass |
| Quantity 20+ | Explicit state; no numeric artifact | Pass |
| Quick Fix primary items | Included; internal allocation hidden | Pass |
| Technician Discount $0 | Hidden | Pass |
| Bundle Efficiency $0 | Hidden | Pass |
| Furniture Nightstand | Pending Review | Pass |
| Painting coat count | Existing approved estimator effect retained | Pass |
| Authorization failure | State preserved; retry; no confirmation | Pass |

Automated result: 52 passed, 0 failed.

