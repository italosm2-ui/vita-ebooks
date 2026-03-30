# Design System Strategy: The Cinematic Reader

## 1. Overview & Creative North Star
The "Cinematic Reader" is the Creative North Star of this design system. We are moving away from the static, boxy layouts of traditional SaaS and toward a high-fidelity, immersive experience reminiscent of premium streaming platforms. 

The goal is to treat eBook content as "Featured Media." By leveraging deep tonal shifts, intentional asymmetry, and glassmorphism, we create a digital environment that feels like a high-tech library. We break the "template" look by using exaggerated typography scales and overlapping "hero" elements that break the container, suggesting a depth of field that invites the user into the narrative.

## 2. Colors & Atmospheric Depth
Our palette is a sophisticated stack of deep blues and neons. This is not a "flat" dark mode; it is a layered, atmospheric environment.

### The Palette
- **Primary (Deep Electric/Navy):** `primary: #bcc2ff` / `primary_container: #002bff`
- **Secondary (Azure/Royal):** `secondary: #adc7ff` / `secondary_container: #4a8eff`
- **Tertiary (Vibrant Cyan):** `tertiary: #00dce5` (Used exclusively for "Action Highlighting").
- **Surface/Background:** `surface: #121318` / `surface_container_lowest: #0d0e13`

### The "No-Line" Rule
**Standard 1px borders are strictly prohibited for sectioning.** 
Visual separation must be achieved through background color shifts. To separate the navigation sidebar from the main feed, use `surface_container_low` against the `surface` background. The eye should perceive change through "areas of light" rather than "drawn lines."

### The "Glass & Gradient" Rule
Floating elements (modals, dropdowns, sticky navs) must use Glassmorphism. 
*   **Formula:** `surface_variant` at 60% opacity + `backdrop-filter: blur(24px)`.
*   **Signature Gradients:** For primary CTAs, do not use flat hex codes. Apply a linear gradient from `primary_container` to `secondary_container` at a 135° angle to create a sense of energy and "glow."

---

## 3. Typography: The Editorial Voice
We use **Manrope** across the entire system. It provides a geometric yet humanistic touch that feels "High-Tech Editorial."

- **Display Scales (`display-lg`: 3.5rem):** Reserved for book titles and landing page heroes. Use `-0.04em` letter spacing to create a "tight," premium look.
- **Headline Scales (`headline-md`: 1.75rem):** Used for category headers. These should feel authoritative and bold.
- **Body Scales (`body-md`: 0.875rem):** Optimized for long-form reading with a generous line-height (1.6) to ensure the eye doesn't fatigue during eBook consumption.

**Hierarchy Tip:** Contrast a `display-sm` book title in `on_surface` with a `label-md` author name in `tertiary`. This "High-Low" pairing instantly creates a professional, curated feel.

---

## 4. Elevation & Depth: Tonal Layering
In this system, "Elevation" is a measure of light, not shadow.

### The Layering Principle
Instead of shadows, we "stack" surfaces:
1.  **Level 0 (Base):** `surface_container_lowest` (#0d0e13) - The "Void" (Deep background).
2.  **Level 1 (Section):** `surface` (#121318) - The main workspace.
3.  **Level 2 (Card):** `surface_container_low` (#1a1b21) - Subtle lift for content pieces.
4.  **Level 3 (Interactive):** `surface_container_high` (#292a2f) - Hover states and active selections.

### Ambient Shadows
When an element must "float" (e.g., a reading settings popover), use a massive, diffused shadow: `box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5)`. The shadow should feel like a soft cloud of darkness, not a hard edge.

### The "Ghost Border" Fallback
If an element (like an input field) requires a boundary for accessibility, use the `outline_variant` at 15% opacity. It should be barely visible—a "suggestion" of a container.

---

## 5. Components: Sleek & Full-Rounded
Following the "Netflix/Kiwify" inspiration, components are tactile and fluid.

- **Buttons:**
    - **Primary:** Full rounded (`9999px`). Background: `primary_container` to `secondary_container` gradient. Text: `on_primary`.
    - **Tertiary/Action:** Full rounded. Background: `tertiary`. This is your "High-Voltage" button for "Buy Now" or "Start Reading."
- **Chips:** Always `full` roundness. Use `surface_container_highest` for unselected and `primary` for selected. No borders.
- **Input Fields:** Use `surface_container_low` as the base. On focus, do not change the border; instead, transition the background to `surface_container_high` and add a subtle `tertiary` outer glow (2px).
- **Cards & Lists:** **Strictly forbid dividers.** Use `3.5rem` (spacing 10) of vertical whitespace to separate chapters or book entries.
- **Specialized Component - The "Progress Glow" Bar:** For eBook progress, use a `tertiary` (Cyan) bar with a `0 0 12px tertiary` box-shadow to make the progress "glow" against the dark UI.

---

## 6. Do’s and Don’ts

### Do:
- **Use Intentional Asymmetry:** Align text to the left but allow book covers to "break" the grid slightly or overlap into the next section.
- **Embrace Negative Space:** Use the `20` (7rem) spacing token between major content blocks. Give the content room to breathe.
- **Tone-on-Tone:** Place `on_surface_variant` text on `surface_container` backgrounds for secondary information.

### Don't:
- **Never use pure white (#FFFFFF):** It is too harsh. Use `on_surface` (#e3e1e9) for primary text.
- **No Sharp Corners:** All interactive elements must adhere to the `full` or `xl` (3rem) rounding tokens. Sharp corners break the "Glassmorphism" immersion.
- **Avoid Flat Blue:** Blue should always feel "electric." If a blue feels dull, check if you are using `primary_fixed_dim` instead of the vibrant `tertiary`.

---

## 7. Public Shell Contract
The public experience must feel like a finished reading platform, not a technical prototype or implementation handoff.

- Use one fixed header across every public route.
- Header structure is locked to:
  - left: `Vita Ebooks` wordmark
  - center: integrated search field routing to `catalogo.html`
  - primary nav: `Início`, `Catálogo`, `Premium`
  - right: theme toggle, account access, one primary CTA `Assinar Premium`
- `Sobre` and `Suporte` belong in the footer and mobile menu, not in the desktop primary nav.
- The right-side action cluster must never change order, size, or label between pages.

---

## 8. Public Copy Guardrails
Public copy must speak to the reader, never to the repository owner or the build process.

### Allowed voice
- reading benefits
- curation logic
- membership value
- discovery, access, library, favorites, and support

### Forbidden on the public site
- Any reference to `GitHub`, `Hostinger`, `build`, `framework`, `deploy`, `V1`, `public_html`, `JSON`, or implementation phases
- Any sentence explaining the stack or saying the site is "ready to publish"
- Any phrase narrating what is missing in developer-facing language
- Meta commentary such as "honest CTA", "no fake checkout", "no simulated account", or "static site"

### Tone rule
If a sentence sounds like release notes, project management, or implementation commentary, it does not belong in the public UI. Rewrite it until it sounds like a real reading platform talking to a real customer.
