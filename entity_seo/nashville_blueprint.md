# Nashville Implementation Blueprint: Pages & Sections

This document outlines the content architecture required to satisfy both Google’s Knowledge Graph (indexing) and high-ticket homeowner needs (conversion) for nashvillepoolremoval.com.

## 1. Current Page Audit (What We Have)
*   **Homepage (`/app/page.js`)**: Broad market overview, Geotechnical Authority positioning.
*   **Services (`/app/services/page.js`)**: General service descriptions (Full vs. Partial).
*   **Cost Guide (`/app/cost/page.js`)**: High-intent "money" keyword target.
*   **Authority Guide (`/app/blog/guide/page.js`)**: Educational hub for Nashville geology.
*   **Support Pages**: About, Contact.

## 2. The "Expert Density" Gap (Future Expansion)
To achieve #1 rankings, we should consider these supplemental "Entity Anchors." These prove we are the definitive local resource.

### A. Technical Entity Pages (Expertise Density)
| Page Name | Target Entity | Goal |
| :--- | :--- | :--- |
| **Limestone Breaking** | `Central Basin Rock`, `Hydraulic Breakers` | Address the #1 geological challenge in Middle TN. |
| **TN Clay Soil Engineering** | `Moisture Conditioning`, `Compaction` | Solve the fear of "sinking yards" and drainage failure. |
| **Metro Nashville Permitting** | `MWS`, `Erosion Control Permits` | High-trust regulatory transparency (Zero Search Volume target). |

### B. Location Entity Pages (Contextual Anchors)
*   **/belle-meade**: Luxury estate care, strict access protocols, landscape preservation.
*   **/brentwood**: Williamson County specifics, large estate drainage, slope stabilization.
*   **/green-hills-oak-hill**: Older pool infrastructure challenges and narrow lot access.

---

## 3. Section Blueprint (Structural Requirements)

### Every New Page MUST Include:
1.  **Entity-Specific Hero**: Title must include the specific technical or location entity (e.g., "Belle Meade Pool Removal Specialists").
2.  **The "Nashville Problem" Section**: Educational content explaining the local challenge (limestone, clay, stormwater).
3.  **The "Proof of Work" Section**: Mentioning specific licensing and insurance ($2M Policy) for Nashville operations.
4.  **The "Contextual Footer"**: Links to all other Entity pages to lower our "Relationship Score" in Google.

---

## 4. How We Make These Pages "Worthy"

### 🛡️ Satisfying Google (Indexing Strategy)
*   **Semantic Density**: Naturally weave in terms like "limestone shelf," "high-plasticity clay," "Metro Stormwater," and "Erosion Control."
*   **Schema Markup**: Using `LocalBusiness` schema with `areaServed` Nashville and `knowsAbout` Geotechnical Demolition.
*   **Site Topology**: Ensuring every page is internal-linked to avoid "Thin Content" flags.

### 💎 Satisfying Users (Conversion Strategy)
*   **Direct Answers**: Solve the fear: "Will my yard become a swamp?" and "How much for limestone breaking?"
*   **Visual Trust**: Implementation of the "Nashville Estimate Calculator" on every sub-page.
*   **Property Value Focus**: Frame removal as "Reclaiming Premium Nashville Land" for ADUs, outdoor kitchens, or resale.
