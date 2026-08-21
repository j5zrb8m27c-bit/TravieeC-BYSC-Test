# V1.6.5 State / Estimate Architecture

V1.6.5 treats scope, qualifiers, pricing, repetition, labor, Review, appointment capacity, scheduling, and authorization as separate state domains.

- Canonical scope items have stable IDs. Upstream changes clear dependent values only within that item.
- Review renders and edits canonical items directly.
- Estimate state is `priced`, `partial`, or `review`; unknown never aliases to numeric zero.
- Review reasons are explicit. Informational scope facts such as Electrical affected-location count are not Review triggers.
- Repetition affects qualifying price sequences per task type. Labor uses approved task durations, not price factors.
- One 480-minute capacity authority determines standard versus Split/Extended scheduling.
- One Scheduling date controls slots and pre-authorization.
- One pre-authorization renderer consumes canonical appointment, scope, qualifier, labor, estimate, Review, and deposit state.
- Authorization failure mutates only authorization state and preserves the booking draft.

