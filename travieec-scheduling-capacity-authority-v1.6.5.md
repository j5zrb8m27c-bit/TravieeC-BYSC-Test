# V1.6.5 Scheduling / Capacity Authority

- Business timezone: `America/Los_Angeles`.
- Estimated labor `<= 480` minutes: standard scheduling.
- Estimated labor `> 480` minutes: Split Across Multiple Days or Extended Day.
- Review status, price status, Bundle Efficiency, and category do not change the threshold.
- The customer-selected window is appointment capacity and is not trimmed to estimated labor.
- Address/Contact has no customer date input. `APP_STATE.scheduling.date` and the Scheduling control are authoritative.
- Same-day normal and After-Hours slots must begin at least 85 minutes after current Pacific time (90-minute target, 5-minute tolerance).
- After-Hours availability is the intersection of the approved After-Hours window and the same-day lead-time rule. Future dates do not inherit today's lead-time filter.
- Past dates and past/too-soon slots are excluded.
- Multi-day/extended schedules retain selected dates, starts, ends, usable capacity, and allocated/remaining labor.

