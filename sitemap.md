# Wellington Funeral Home - Sitemap

**Version:** 1.0
**Date:** 2026-02-05

---

## Navigation Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│  LOGO          HOME  |  ABOUT  |  SERVICES  |  OBITUARIES  |  CONTACT  │
│                                                              CALL NOW │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Page Hierarchy

### Primary Navigation

| Page | URL Path | Priority |
|------|----------|----------|
| Home | `/` | High |
| About Us | `/about` | High |
| Services | `/services` | High |
| Obituaries | `/obituaries` | High |
| Contact | `/contact` | High |

### Secondary Navigation (Footer/Dropdowns)

| Page | URL Path | Parent |
|------|----------|--------|
| Our Story | `/about/our-story` | About |
| Our Team | `/about/our-team` | About |
| Our Locations | `/about/locations` | About |
| Funeral Services | `/services/funeral` | Services |
| Cremation Services | `/services/cremation` | Services |
| Pre-Planning | `/services/pre-planning` | Services |
| When Someone Dies | `/services/immediate-need` | Services |
| Grief Resources | `/resources` | Footer |
| Privacy Policy | `/privacy` | Footer |
| Terms of Service | `/terms` | Footer |

---

## Detailed Page Structure

### 1. Home (`/`)
**Purpose:** Welcome visitors, establish trust, provide quick access to key actions

**Sections:**
1. Hero Section
   - Tagline: "Caring Is At The Heart Of Everything We Do"
   - Background: Professional, dignified imagery
   - CTAs: "Contact Us" | "Pre-Plan Now"

2. Service Highlight Cards (3-4 cards)
   - Immediate Need
   - Planning a Funeral  
   - Pre-Planning
   - Obituaries

3. About Snippet
   - Brief intro (2-3 sentences)
   - "Serving families for over 50 years"
   - Link to full About page

4. Current Services / Recent Obituaries
   - 4-6 recent obituaries with photos
   - "View All Obituaries" link

5. Testimonial Section
   - 1-2 family quotes
   - Star rating or trust indicators

6. Contact Footer
   - Phone number prominently displayed
   - Address and hours
   - Quick contact form or CTA

---

### 2. About Us (`/about`)
**Purpose:** Build trust through history, values, and team introduction

**Sections:**
1. Hero with Mission Statement
2. Our Story
   - Founding history
   - 50+ years of service
   - Community roots
3. Our Values
   - Compassion
   - Dignity
   - Professionalism
   - Service
4. Our Team (overview + link to full page)
5. Our Facility (photos)
6. Community Involvement

**Subpages:**
- `/about/our-story` - Full company history
- `/about/our-team` - Staff bios and photos
- `/about/locations` - Branch details

---

### 3. Services (`/services`)
**Purpose:** Detail all service offerings with clear pathways

**Sections:**
1. Overview Hero
2. Service Categories Grid:
   - Immediate Need / At-Need
   - Funeral Planning
   - Cremation
   - Pre-Planning
3. Why Choose Us
4. Contact CTA

**Subpages:**
- `/services/immediate-need` - "When Someone Dies" guide
- `/services/funeral` - Traditional funeral services
- `/services/cremation` - Cremation options
- `/services/pre-planning` - Advance planning services

---

### 4. Obituaries (`/obituaries`)
**Purpose:** Honor the deceased, provide service information to visitors

**Sections:**
1. Search/Filter Header
2. Obituary Grid (paginated)
   - Photo
   - Name
   - Dates
   - Brief excerpt
3. "Can't find who you're looking for?" contact CTA

**Subpages:**
- `/obituaries/[slug]` - Individual obituary detail page
  - Full photo
  - Full obituary text
  - Service details (date, time, location)
  - Condolence form
  - Share buttons

---

### 5. Contact (`/contact`)
**Purpose:** Make it easy to reach the funeral home

**Sections:**
1. Contact Hero
2. Contact Information
   - Phone (prominent)
   - Email
   - Address
   - Hours
3. Contact Form
   - Name, Email, Phone
   - Reason for contact (dropdown)
   - Message
   - Submit
4. Google Map Embed
5. Driving Directions

---

### 6. Pre-Planning (`/services/pre-planning`)
**Purpose:** Encourage advance planning, capture leads

**Sections:**
1. Benefits of Pre-Planning
2. What's Included
3. Process Steps
4. FAQ
5. Pre-Planning Inquiry Form
6. Download Brochure CTA

---

### 7. Grief Resources (`/resources`)
**Purpose:** Provide value, support grieving families

**Sections:**
1. Immediate After-Loss Guidance
2. Grief Support Articles
3. Local Support Groups
4. Books and Resources
5. Contact for Support

---

## Footer Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│ WELLINGTON FUNERAL HOME                                             │
│ Caring Is At The Heart Of Everything We Do                          │
│                                                                      │
│ CONTACT           SERVICES           RESOURCES        CONNECT       │
│ Phone             Funeral            Grief Support    Facebook      │
│ Email             Cremation          FAQ              Instagram     │
│ Address           Pre-Planning       Contact          Twitter       │
│ Hours             Obituaries                                        │
│                                                                      │
│ © 2026 Wellington Funeral Home. All rights reserved.                │
│ Privacy Policy | Terms of Service                                   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## URL Mapping (Complete)

| URL | Page Title | Notes |
|-----|------------|-------|
| `/` | Home | Landing page |
| `/about` | About Us | Company overview |
| `/about/our-story` | Our Story | Full history |
| `/about/our-team` | Our Team | Staff bios |
| `/about/locations` | Our Locations | Branch info |
| `/services` | Our Services | Service overview |
| `/services/immediate-need` | When Someone Dies | Immediate guidance |
| `/services/funeral` | Funeral Services | Traditional services |
| `/services/cremation` | Cremation Services | Cremation options |
| `/services/pre-planning` | Pre-Planning | Advance planning |
| `/obituaries` | Obituaries | Listing page |
| `/obituaries/[slug]` | [Name] Obituary | Individual obituary |
| `/contact` | Contact Us | Contact info + form |
| `/resources` | Grief Resources | Support materials |
| `/privacy` | Privacy Policy | Legal |
| `/terms` | Terms of Service | Legal |

---

## Mobile Navigation

**Hamburger Menu (Mobile):**
```
☰ MENU
├── Home
├── About Us
│   ├── Our Story
│   ├── Our Team
│   └── Locations
├── Services
│   ├── When Someone Dies
│   ├── Funeral Services
│   ├── Cremation
│   └── Pre-Planning
├── Obituaries
├── Contact
└── 📞 Call Now: (876) 996-7077
```

---

## SEO Considerations

### Meta Titles (Examples)
- Home: "Wellington Funeral Home | Caring Is At The Heart | Port Maria, Jamaica"
- About: "About Us | 50+ Years Serving Jamaican Families | Wellington Funeral Home"
- Services: "Funeral Services | Cremation | Pre-Planning | Wellington Funeral Home"
- Contact: "Contact Us | (876) 996-7077 | Wellington Funeral Home Port Maria"

### Sitemap.xml
Generate dynamic sitemap including:
- All static pages
- All obituary pages (dynamic)
- Priority and changefreq settings
