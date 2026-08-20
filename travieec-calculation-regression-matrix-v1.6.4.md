# TravieeC BYSC V1.6.4 calculation/regression matrix

| Area | Cases | Expected | Result |
|---|---|---|---|
| Review state | no-change Edit/Done | Exact idempotency | Pass |
| Review removal | Quick Fix/multi-item | Canonical removal and full recalculation | Pass |
| Quantities | 1, 6, 7, 12, 17, 20, 20+ | Exact synchronization; typed overflow | Pass |
| Partial estimate | add incomplete Electrical item | Preserve known price with `+` | Pass |
| Repetition | mixed task types | Reset by task type | Pass |
| Labor | mixed/repeated cart | Independent of price curve | Pass |
| Review | fully known quantity 20 | Bookable absent explicit trigger | Pass |
| Review | 20+ / unresolved scope | Explicit reason | Pass |
| Bookcase | Small vs Large | Approved anchors affect labor/price | Pass |
| Bundle sanity | ratio >30% | Diagnostic true; no automatic repricing | Pass |
| Capacity | 480 / 481 min | Standard / capacity | Pass |
| Same-day | 84 / 85 / 89 / 90 min | Reject / accept / accept / accept | Pass |
| Future date | any normal valid slot | Lead rule unaffected | Pass |
| Final validation | stale same-day slot | Explicit rejection, state preserved | Pass |

