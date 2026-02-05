# Wellington Funeral Home - Design Specification

**Version:** 1.0
**Date:** 2026-02-05

---

## Design Philosophy

The Wellington Funeral Home website should convey:
- **Dignity** — Respectful, professional, trustworthy
- **Warmth** — Compassionate, caring, approachable
- **Clarity** — Easy to navigate, especially during difficult times
- **Timelessness** — Classic design that won't feel dated quickly

---

## Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Navy Blue** | `#1B365D` | Primary brand color, headers, CTAs |
| **Warm Gold** | `#C9A227` | Accents, highlights, hover states |
| **Pure White** | `#FFFFFF` | Backgrounds, text on dark |
| **Soft Cream** | `#FAF8F5` | Alternate backgrounds, sections |

### Secondary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Slate Gray** | `#4A5568` | Body text |
| **Light Gray** | `#E2E8F0` | Borders, dividers |
| **Charcoal** | `#2D3748` | Dark text emphasis |
| **Sage Green** | `#6B8E6B` | Success states, hope elements |

### Semantic Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Error** | `#C53030` | Form errors |
| **Success** | `#2F855A` | Success messages |
| **Warning** | `#D69E2E` | Warnings |
| **Info** | `#3182CE` | Informational |

### Tailwind Config
```javascript
colors: {
  navy: {
    50: '#E8ECF2',
    100: '#C5CEE0',
    500: '#1B365D',
    600: '#162B4D',
    700: '#11203D',
  },
  gold: {
    50: '#FBF8EF',
    100: '#F5EDD5',
    500: '#C9A227',
    600: '#A68520',
    700: '#836919',
  },
  cream: '#FAF8F5',
}
```

---

## Typography

### Font Families

**Headings:** Playfair Display (Serif)
- Elegant, timeless, dignified
- Google Fonts: https://fonts.google.com/specimen/Playfair+Display
- Weights: 400, 500, 600, 700

**Body:** Inter (Sans-serif)
- Clean, highly readable, modern
- Google Fonts: https://fonts.google.com/specimen/Inter
- Weights: 400, 500, 600, 700

### Type Scale

| Element | Font | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|------|----------------|---------------|--------|-------------|
| H1 | Playfair | 48px / 3rem | 36px / 2.25rem | 600 | 1.2 |
| H2 | Playfair | 36px / 2.25rem | 28px / 1.75rem | 600 | 1.25 |
| H3 | Playfair | 28px / 1.75rem | 24px / 1.5rem | 500 | 1.3 |
| H4 | Inter | 20px / 1.25rem | 18px / 1.125rem | 600 | 1.4 |
| Body | Inter | 16px / 1rem | 16px / 1rem | 400 | 1.6 |
| Small | Inter | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.5 |
| Caption | Inter | 12px / 0.75rem | 12px / 0.75rem | 500 | 1.4 |

### Tailwind Config
```javascript
fontFamily: {
  heading: ['Playfair Display', 'Georgia', 'serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
}
```

---

## Hero Section Concept

### Layout (Desktop)
```
┌─────────────────────────────────────────────────────────────────────┐
│ [NAVBAR - Semi-transparent overlay]                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                    [HERO IMAGE - Full width]                        │
│                    Soft focus: peaceful nature scene                │
│                    OR funeral home exterior at dusk                 │
│                                                                      │
│         ┌───────────────────────────────────────┐                   │
│         │                                        │                   │
│         │   Caring Is At The Heart              │                   │
│         │   Of Everything We Do                 │                   │
│         │                                        │                   │
│         │   Serving Jamaican families with      │                   │
│         │   compassion for over 50 years.       │                   │
│         │                                        │                   │
│         │   [Contact Us]  [Pre-Plan Now]        │                   │
│         │                                        │                   │
│         └───────────────────────────────────────┘                   │
│                    ▼ Scroll indicator                               │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Hero Image Guidelines
- **Style:** Soft, peaceful, dignified
- **Options:**
  1. Exterior of funeral home at golden hour
  2. Peaceful nature scene (trees, water, sunset)
  3. Abstract floral/botanical
  4. Chapel interior with soft lighting
- **Treatment:** Slight dark overlay (40-50% opacity navy) for text readability
- **Aspect Ratio:** 16:9 desktop, 4:3 tablet, 3:4 mobile

### Hero Text
- **Headline:** White, Playfair Display, large
- **Subheadline:** White/cream, Inter, medium
- **CTAs:** Solid buttons (gold primary, white outline secondary)

---

## Key UI Components

### Buttons

**Primary Button**
```css
.btn-primary {
  background: #C9A227;
  color: #FFFFFF;
  padding: 12px 32px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
}
.btn-primary:hover {
  background: #A68520;
}
```

**Secondary Button**
```css
.btn-secondary {
  background: transparent;
  color: #1B365D;
  border: 2px solid #1B365D;
  padding: 12px 32px;
  border-radius: 4px;
  font-weight: 600;
}
.btn-secondary:hover {
  background: #1B365D;
  color: #FFFFFF;
}
```

**Text Link**
```css
.text-link {
  color: #1B365D;
  text-decoration: underline;
  text-underline-offset: 2px;
}
```

### Cards

**Service Card**
```
┌─────────────────────────────┐
│      [Icon/Image]           │
│                             │
│   Card Title                │
│   ─────────                 │
│   Brief description text    │
│   that explains the         │
│   service offering.         │
│                             │
│   Learn More →              │
└─────────────────────────────┘
```
- Background: White
- Border: 1px #E2E8F0
- Shadow: subtle (0 2px 8px rgba(0,0,0,0.08))
- Border-radius: 8px
- Hover: lift effect (transform: translateY(-4px))

**Obituary Card**
```
┌─────────────────────────────┐
│  ┌─────────┐                │
│  │  Photo  │  Name Here     │
│  │ (circle │  Jan 1, 1950 - │
│  │   or    │  Dec 31, 2025  │
│  │ square) │                │
│  └─────────┘  View →        │
└─────────────────────────────┘
```
- Background: Cream (#FAF8F5)
- Border-radius: 8px
- Photo: 80x80px, rounded

### Navigation

**Desktop Nav**
```
┌─────────────────────────────────────────────────────────────────────┐
│ [LOGO]    Home  About ▼  Services ▼  Obituaries  Contact    [📞 CTA]│
└─────────────────────────────────────────────────────────────────────┘
```
- Background: White
- Shadow: subtle bottom shadow
- Logo: Left-aligned
- Links: Center or right
- CTA: Right corner, accent color
- Sticky on scroll

**Mobile Nav**
- Hamburger menu
- Full-screen overlay
- Centered links
- Phone CTA prominently at bottom

### Forms

**Input Fields**
```css
.form-input {
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 16px;
  transition: border-color 0.2s;
}
.form-input:focus {
  border-color: #1B365D;
  outline: none;
  box-shadow: 0 0 0 3px rgba(27, 54, 93, 0.1);
}
```

**Labels**
- Font: Inter, 14px, 500 weight
- Color: Charcoal (#2D3748)
- Margin-bottom: 4px

### Footer

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Background: Navy #1B365D]                                         │
│                                                                      │
│  [LOGO - White]                                                     │
│  Caring Is At The Heart Of Everything We Do                         │
│                                                                      │
│  ────────────────────────────────────────────                       │
│                                                                      │
│  CONTACT          SERVICES        RESOURCES       FOLLOW US         │
│  (876) 996-7077   Funeral         Grief Support   [f] [ig] [tw]     │
│  email@...        Cremation       FAQ                               │
│  52 Warners St    Pre-Planning    Contact                           │
│                                                                      │
│  ────────────────────────────────────────────                       │
│                                                                      │
│  © 2026 Wellington Funeral Home  |  Privacy  |  Terms               │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Spacing System

Using Tailwind's default spacing scale:
- 4px increments (1 = 4px, 2 = 8px, etc.)
- Section padding: 80px (py-20) desktop, 48px (py-12) mobile
- Component gaps: 24-32px
- Inner padding: 16-24px

---

## Iconography

**Style:** Line icons, 2px stroke, rounded caps
**Source:** Lucide Icons (https://lucide.dev)
**Size:** 24px default, 20px small, 32px large

**Key Icons Needed:**
- Phone
- Mail
- MapPin
- Clock
- Heart
- Users
- Calendar
- ChevronDown
- ChevronRight
- Menu
- X (close)
- Facebook, Instagram, Twitter

---

## Image Guidelines

### Photography Style
- Soft, natural lighting
- Warm tones (not cold/clinical)
- Peaceful, dignified subjects
- Avoid overly somber imagery
- Nature elements (flowers, trees, water)
- Real people when possible (not stock-looking)

### Image Optimization
- WebP format with JPEG fallback
- Lazy loading below fold
- Responsive srcset
- Max quality: 80%
- Hero: 1920px wide max
- Cards: 600px wide max
- Thumbnails: 200px max

---

## Responsive Breakpoints

```javascript
screens: {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet portrait
  lg: '1024px',  // Tablet landscape / small desktop
  xl: '1280px',  // Desktop
  '2xl': '1536px' // Large desktop
}
```

---

## Accessibility Requirements

- WCAG 2.1 AA compliance
- Color contrast ratio: minimum 4.5:1
- Focus states visible
- Skip-to-content link
- Alt text for all images
- Semantic HTML structure
- Keyboard navigable
- Screen reader tested

---

## Animation & Transitions

### General Principle
Subtle, purposeful animations that don't distract

### Transitions
- Default: 200ms ease
- Page transitions: 300ms
- Hover states: 150ms

### Animations
- Fade in on scroll (subtle, 20px translate)
- Card hover lift
- Button scale on click (0.98)
- No flashy or excessive motion
- Respect prefers-reduced-motion

---

## Component Library Reference

Build these components first:
1. `<Button>` - Primary, Secondary, Text variants
2. `<Card>` - Service, Obituary, Feature variants
3. `<Navigation>` - Desktop, Mobile
4. `<Footer>` - Full footer component
5. `<Hero>` - Homepage hero
6. `<SectionHeader>` - Consistent section titles
7. `<ContactForm>` - Reusable form
8. `<ObituaryCard>` - List item component
9. `<TestimonialCard>` - Quote display
10. `<SEO>` - Meta tags component
