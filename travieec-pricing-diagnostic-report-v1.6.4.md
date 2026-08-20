# TravieeC BYSC V1.6.4 pricing diagnostic report

## Electrical manual-QA scenario

Scope: Outlet replacement ×4, Switch replacement ×3, Standard light fixture ×2, Ceiling fan replacement ×1.

| Task | Base | Repetition sequence | Task price | Labor |
|---|---:|---|---:|---:|
| Outlets ×4 | $130 | 100%, 85%, 73%, 62% | $416 | 60 min |
| Switches ×3 | $130 | 100%, 85%, 73% | $335 | 45 min |
| Fixtures ×2 | $150 | 100%, 85% | $278 | 60 min |
| Ceiling fan ×1 | $225 | 100% | $225 | 60 min |
| **Total** |  | Each task resets | **$1,254** | **225 min / 3.75 hr** |

No shared-visit discount was invented. Test Mode exposes every unit contribution and percentage. A Dimmer replacement used instead of a standard switch produces $1,293 because its approved base is $145.

## Two 76–85 inch TVs

- Base price: $225 each.
- Repetition: first $225; second 85% = $191.25.
- Straightforward two-TV total: $416 rounded.
- Soundbar modifier: +$60, producing the observed approximately $476.
- Straightforward labor: 55 minutes per TV = 110 minutes in V1.6.4; price repetition does not compress labor.

The requested practical target near $300 conflicts with the existing approved $225 base and repetition curve. No pricing change was made without approval.

## Bundle Efficiency diagnostic

Test cart: two distinct Standard Quick Fix tasks ×20.

- Legitimate summed task base reference: $2,400.
- Final repeated-task estimate: $917.
- Difference displayed/diagnosed: $1,483.
- Ratio: 61.8%.
- `bundleEfficiencySanityCheck`: true.

The progressive curve is applied independently to each repeated task. Shared-visit efficiency is reported as `not approved`; no new curve was invented. The diagnostic shows that customer-facing “Bundle Efficiency” still needs an approved semantic/display decision when most of the difference is repeated-task efficiency rather than shared-visit efficiency.

