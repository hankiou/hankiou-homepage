# BRAND MANIFEST

## Identity Overview

A personal brand for a full-stack developer who bridges the gap between technical precision and creative vision. This brand communicates mastery across the entire development stack while emphasizing a design-forward approach that resonates with fellow frontend developers.

---

## Brand Essence

**Tagline**: `/* design · code · ship */`

**Core Values**:

- Precision in craft
- End-to-end capability
- Modern, forward-thinking approach
- Design as a first-class citizen
- Creative

**Brand Voice**:

- Technical but approachable
- Confident without arrogance
- Clean and direct
- Subtly creative

---

## Visual Identity

### Design Philosophy

The visual language draws from **technical blueprints** and **IDE aesthetics**—environments where developers spend their creative hours. The dark theme provides focus and sophistication while green accents evoke terminal outputs, successful builds, and forward progress.

### Color System

Built on Tailwind CSS colors for seamless integration into modern workflows.

| Token              | Hex                    | Usage                                   |
| ------------------ | ---------------------- | --------------------------------------- |
| `--bg-primary`     | `#020617`              | slate-950 — Primary background          |
| `--bg-secondary`   | `#0f172a`              | slate-900 — Secondary/elevated surfaces |
| `--bg-tertiary`    | `#1e293b`              | slate-800 — Cards, containers           |
| `--border-default` | `#334155`              | slate-700 — Borders, dividers           |
| `--border-subtle`  | `#475569`              | slate-600 — Subtle separators           |
| `--text-primary`   | `#f1f5f9`              | slate-100 — Primary text                |
| `--text-secondary` | `#cbd5e1`              | slate-300 — Secondary text              |
| `--text-muted`     | `#94a3b8`              | slate-400 — Muted/placeholder text      |
| `--accent`         | `#22c55e`              | green-500 — Primary accent              |
| `--accent-hover`   | `#4ade80`              | green-400 — Hover states                |
| `--accent-muted`   | `#16a34a`              | green-600 — Pressed states              |
| `--accent-glow`    | `rgba(34,197,94,0.15)` | Glow effects                            |

### Typography

**Primary Font: Sora**
A geometric sans-serif with a modern, technical feel. Used for headings, navigation, and UI elements.

**Monospace Font: JetBrains Mono**
A developer-focused monospace with ligature support. Used for:

- Code snippets
- Technical labels
- Version numbers
- Terminal-style text
- Decorative accents

**Type Scale**:

```
--text-xs: 0.75rem (12px)
--text-sm: 0.875rem (14px)
--text-base: 1rem (16px)
--text-lg: 1.125rem (18px)
--text-xl: 1.25rem (20px)
--text-2xl: 1.5rem (24px)
--text-3xl: 1.875rem (30px)
--text-4xl: 2.25rem (36px)
--text-5xl: 3rem (48px)
```

### Blueprint Background Pattern

A signature visual element: subtle grid lines reminiscent of technical blueprints or graph paper. This pattern:

- Uses `--border-default` for major grid lines
- Uses `--bg-secondary` for minor grid lines
- Creates depth through layered transparency
- Should be used sparingly on hero sections and key containers

---

## Component Guidelines

### Buttons

**Primary Button**

- Background: `--accent`
- Text: `--bg-primary`
- Border-radius: 6px
- Font: Sora, 500 weight
- Subtle glow on hover

**Secondary Button**

- Background: transparent
- Border: 1px solid `--border-default`
- Text: `--text-primary`
- Monospace font for technical CTAs

### Cards

All cards use a **glassmorphism** design with semi-transparent backgrounds and beveled borders that create a subtle 3D effect.

**Default Card**

- Semi-transparent gradient background with backdrop blur
- Beveled border using gradient pseudo-element (light top-left, dark bottom-right)
- Inset shadows for depth
- Subtle lift on hover

**Accent Card**

- Green-tinted glassmorphism background
- Beveled border with green gradient highlights
- No top border — uses gradient border instead

**Glow Card**

- Stronger green tint in background
- Green glow shadow effect
- Beveled border with prominent green gradient

### Code Blocks

- Background: `--bg-primary`
- Border: 1px solid `--border-default`
- Font: JetBrains Mono
- Green accent for syntax highlighting keywords

### Tags/Badges

- Background: `--accent-glow`
- Text: `--accent`
- Border: 1px solid `--accent`
- Font: JetBrains Mono, uppercase, small

---

## Iconography

- Style: Outline, 1.5px stroke
- Recommended set: Lucide Icons or Heroicons (outline)
- Accent color for interactive states
- Consistent 20px or 24px sizing

---

## Spacing System

Following Tailwind's 4px base unit:

```
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-24: 6rem (96px)
```

---

## Motion

- **Duration**: 150ms for micro-interactions, 300ms for transitions
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind's default)
- **Effects**:
  - Subtle scale (1.02) on card hover
  - Glow pulse on accent elements
  - Smooth color transitions
  - Fade-in on scroll for sections

---

## Usage Notes

### Do

- Use the blueprint pattern for hero sections and important containers
- Apply monospace font for technical elements (versions, code, labels)
- Maintain generous whitespace
- Let green accents guide user attention

### Don't

- Overuse the blueprint pattern (it's a signature, not wallpaper)
- Mix monospace and sans-serif in the same text block
- Use green for error states (use red-500)
- Apply glow effects to every interactive element

---

## Technical Stack Representation

When showcasing full-stack capabilities, organize technologies visually:

```
┌─────────────────────────────────────┐
│  FRONTEND                           │
│  React · Vue · TypeScript · CSS     │
├─────────────────────────────────────┤
│  BACKEND                            │
│  Node.js · Python · REST · GraphQL  │
├─────────────────────────────────────┤
│  DATABASE & INFRA                   │
│  PostgreSQL · Redis · Docker · AWS  │
└─────────────────────────────────────┘
```

Use ASCII-style boxes with monospace font for technical diagrams.

---

_Brand Manifest v1.0_
_Generated for a full-stack developer who codes with intention and designs with precision._
