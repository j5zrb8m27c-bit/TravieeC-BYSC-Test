# V1.6.6 Root-Cause Report

## A. Review quantities above six displayed as one

The line title and estimator used the canonical Quick Fix quantity, but the inherited V1.6.1 Review decorator independently created a selector from a hard-coded 1–6 array. Later renderers saw an existing selector and did not replace it consistently; normalization therefore fell back to its first valid value. V1.6.6 bypasses that decorator for Quick Fix primary and renders title, selector, and estimate from the same canonical item record using the shared 1–20 plus 20+ options.

## B. Verified Split reached Confirmation without booking action

Split capacity verification correctly populated `capacityPlan`, but the V1.6.5 confirmation transition assumed a standard `selectedSlot`. It rendered “Ready to book” without explicitly deriving authorization eligibility from a verified capacity plan or restoring the action button state. V1.6.6 adds a single capacity eligibility result and uses it to render/enable the action or show an explicit reason. Capacity authorization now creates the request record, Request ID, and terminal confirmation directly from selected service days.

## C. Quick Fix Back failed to reconstruct the catalog

Primary Quick Fix selections existed only in rendered checkbox/quantity DOM. The older captured scope covered “While I’m There” add-ons, not primary Quick Fix items. Returning to service details rebuilt default markup and therefore retained neither the complete visible state nor conditional answers. V1.6.6 stores primary item selection, quantity, Something else, After-Hours, and filter/model qualifiers in booking scope state, then rehydrates the complete catalog from that state on Back.

