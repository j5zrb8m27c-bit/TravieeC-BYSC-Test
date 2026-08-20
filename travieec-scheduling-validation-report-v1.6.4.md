# TravieeC BYSC V1.6.4 scheduling-validation report

## Authoritative rules

- Business timezone: `America/Los_Angeles` (DST-aware through `Intl`).
- Same-day customer target: 90 minutes.
- Internal tolerance: 5 minutes.
- Absolute same-day minimum: 85 minutes.
- Standard capacity: estimated labor ≤480 minutes.
- Split/Extended capacity route: estimated labor >480 minutes.

## Boundary results

| Case | Result |
|---|---|
| 84-minute same-day lead | Rejected/hidden |
| 85-minute lead | Accepted |
| 89-minute lead | Accepted |
| 90-minute lead | Accepted |
| 120-minute lead | Accepted |
| Future date | Unaffected |
| 480 labor minutes | Standard |
| 481 labor minutes | Split/Extended |

Availability is re-evaluated at rendering, selection, and authorization. Rejection logs include `same_day_lead_time`, Pacific timestamp, appointment timestamp, lead minutes, target, tolerance, and minimum. The customer receives an explicit stale-slot explanation without losing scope or estimate.

Multi-Day behavior was preserved. Extended Day pre-auth now shows the authoritative date, start/end, available window, estimated labor, scope, estimate, and deposit/authorization information.

## Historical failure investigation

The actual accumulated live QA log was inspected. It retained only version-load events for the relevant period and contains neither the Plumbing failure nor House Cleaning loop event. Therefore an exact event-level cause cannot be truthfully certified.

Source audit found:

- V1.6.3 had no same-day past/lead-time filter in `renderSlots`.
- Final simulated availability used a deterministic seed based on session/date/slot.
- A failing seed could repeatedly take the `slot-lost-before-capture` path.
- The old logger cleared `selectedSlot` before recording that event, losing the very slot required for diagnosis.

These are confirmed source defects, not a claim that an absent historical event definitely followed that path. V1.6.4 corrects all four diagnostic gaps.

