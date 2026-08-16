# TravieeC BYSC V1.6.3 calculation/regression matrix

| Area | Cases | Expected | Result |
|---|---|---|---|
| Quantity | 1, 6, 7, 12, 17, 20 | Exact typed quantity | Pass |
| Quantity overflow | 20+ | Review state; finite 20-unit anchor; no arithmetic coercion | Pass |
| Repetition | mixed task types | Curve restarts for each task identity | Pass |
| Labor | repeated/mixed carts | Full task labor unless an estimator explicitly defines labor efficiency | Pass |
| Review quantity | values above 6 | Title, selector, state, price, labor, capacity agree | Pass |
| Quick Fix primary | mixed items | Flat rate and standalone references; allocations hidden | Pass |
| Accounting | zero efficiency/discount | Zero rows omitted; Technician Discount absent before invoice | Pass |
| Electrical | multiple types | Independent quantity, qualifier, price, labor, review state | Pass |
| Furniture | multiple types | Independent structured items | Pass |
| Mounting | 12 Roman shades | Accepted; irrelevant size/weight hidden | Pass |
| Capacity | <=8 hours | Normal scheduling | Pass |
| Capacity | >8 hours | Split or Extended routing | Pass |
| Multi-Day | insufficient/exact capacity | Block with shortfall / allow exact capacity | Pass |
| Scheduling | Back/Forward | Authoritative windows persist | Pass |
| Authorization | simulated failure | Preserve all state, log, retry, no false confirmation | Pass |
| Rendering | all customer-visible output | No NaN, undefined, null, or Infinity | Pass |

