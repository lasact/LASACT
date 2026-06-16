# SEO Audit: mecheledeavila-lcsw.com
**Mechele de Avila Evans, LCSW, LLC — Baton Rouge, Louisiana**
**Audit Date: June 2026**

---

## Executive Summary

This is a solo-practitioner therapy website for Mechele de Avila Evans, LCSW, based in Baton Rouge, LA (ZIP 70815). The site has a solid keyword-targeted title and meta description, a good set of service-specific pages, and meaningful directory presence. However, it has significant gaps in schema markup, content depth, citation consistency, off-page authority, and a complete absence from several high-value therapist directories. The site appears to be built on a drag-and-drop platform (likely Squarespace or similar), which introduces common technical SEO limitations.

---

## 1. Technical SEO

### SSL / HTTPS
- **Status: HTTPS confirmed.** The domain resolves to `https://www.mecheledeavila-lcsw.com/` — SSL is active. The `www.` subdomain is the canonical version (non-www redirects observed from indexed pages appearing without `www` in some URLs, e.g., `https://mecheledeavila-lcsw.com/contact/`).
- **Issue:** URL inconsistency — Google's index shows both `https://www.mecheledeavila-lcsw.com/` and `https://mecheledeavila-lcsw.com/` (without www). If canonical tags are not properly set or the redirect is not a hard 301, this creates duplicate content signals. This needs verification via a canonical tag audit.

### robots.txt
- **Status: Unable to fetch directly (server returns 403 to bots without browser headers).** This is itself a technical concern — if the robots.txt is returning 403 to crawlers, Googlebot may log warnings in Search Console. A valid robots.txt should be publicly accessible at all times.
- **Likely issue:** The platform may be blocking non-browser user agents. This should be tested directly via Google Search Console's robots.txt tester.

### sitemap.xml
- **Status: Unable to fetch directly (same 403 issue).** A sitemap was not confirmed accessible. For a site of this type, a sitemap should be submitted to Google Search Console. If the platform auto-generates one (common in Squarespace/Wix), it should still be verified accessible at `/sitemap.xml`.

### Indexed Pages (via `site:mecheledeavila-lcsw.com`)
The following pages are confirmed indexed by Google:

| URL | Page Title (from SERP snippet) |
|-----|-------------------------------|
| `https://www.mecheledeavila-lcsw.com/` | Therapist in Baton Rouge, LA \| Anxiety, Depression & Trauma \| Mechele de Avila Evans, LCSW |
| `https://mecheledeavila-lcsw.com/contact/` | Contact \| Mechele de Avila Evans, LCSW, LLC |
| `https://mecheledeavila-lcsw.com/trauma/` | Trauma \| Mechele de Avila Evans, LCSW, LLC |
| `https://mecheledeavila-lcsw.com/suicide-prevention/` | Suicide Prevention \| Mechele de Avila Evans, LCSW, LLC |
| `https://www.mecheledeavila-lcsw.com/fees-and-insurance` | Fees & Insurance \| Therapy in Baton Rouge, LA \| Mechele de Avila Evans, LCSW |
| `https://mecheledeavila-lcsw.com/depression/` | Depression - Mechele de Avila, LCSW |
| `https://mecheledeavila-lcsw.com/individual-therapy/` | Individual Therapy \| Mechele de Avila Evans, LCSW, LLC |
| `https://mecheledeavila-lcsw.com/internal-family-systems/` | Internal Family Systems (IFS) Therapy in Baton Rouge, LA |
| `https://mecheledeavila-lcsw.com/trauma-has-many-layers/` | Trauma, Like Ogres And Onions, Has Many Layers. \| Mechele De Avila Evans, LCSW, LLC |
| `https://mecheledeavila-lcsw.com/anxiety/` | Anxiety \| Mechele de Avila Evans, LCSW, LLC |
| `https://mecheledeavila-lcsw.com/telehealth/` | Telehealth - Mechele de Avila, LCSW |
| `https://mecheledeavila-lcsw.com/about-me/` | About Me \| Mechele de Avila Evans, LCSW, LLC |
| `https://mecheledeavila-lcsw.com/frequently-asked-questions/` | FAQ \| Mechele de Avila Evans, LCSW, LLC |
| `https://www.mecheledeavila-lcsw.com/about` | About Mechele de Avila Evans, LCSW \| Baton Rouge Therapist |
| `https://www.mecheledeavila-lcsw.com/fees-and-insurance` | Fees & Insurance \| Therapy in Baton Rouge, LA \| Mechele de Avila Evans, LCSW |

**Issue: Duplicate /about pages** — both `/about` and `/about-me/` are indexed. This is a duplicate content problem. One should be canonical and redirect the other.

**Issue: Title inconsistency** — the "Depression" page title is `Depression - Mechele de Avila, LCSW` (drops "Evans" and uses a dash instead of pipe). The "Telehealth" page is `Telehealth - Mechele de Avila, LCSW`. These break the consistent brand + location signal pattern.

### URL Structure
- **Strengths:** Keyword-rich slugs — `/internal-family-systems/`, `/suicide-prevention/`, `/individual-therapy/`, `/fees-and-insurance`, `/trauma/`, `/anxiety/`, `/depression/` — excellent.
- **Issues:**
  - Trailing slash inconsistency: some URLs have trailing slashes (`/contact/`) while others do not (`/fees-and-insurance`). Should be standardized.
  - `/about` vs `/about-me/` — duplicate about pages (see above).

### Page Speed & Mobile
- **Direct test data unavailable** (site blocks automated fetching). However, given the platform characteristics and no observable lazy loading, image optimization, or structured performance signals in search snippets, this requires testing via Google PageSpeed Insights (pagespeed.web.dev).
- **Recommendation:** Run PageSpeed Insights on the homepage immediately. Therapy sites built on platforms like Squarespace often score 50–70 on mobile due to unoptimized images and render-blocking scripts.

### Schema / Structured Data
- **No structured data detected** in any search result snippets (no rich results like star ratings, breadcrumbs, or knowledge panel for the practice).
- **Missing schema types:**
  - `LocalBusiness` or `MedicalBusiness` — critical for local SEO
  - `Person` (for therapist bio page)
  - `ProfessionalService`
  - `FAQPage` (for the FAQ page)
  - `BreadcrumbList`
  - `WebSite` (for sitelinks search box)

### Canonical Tags
- **Status: Unverified** — could not directly inspect HTML. The www/non-www inconsistency in indexed URLs suggests canonical implementation may be absent or misconfigured.

---

## 2. On-Page SEO

### Homepage
- **Title:** `Therapist in Baton Rouge, LA | Anxiety, Depression & Trauma | Mechele de Avila Evans, LCSW`
  - **Length:** ~82 characters — slightly over the recommended 60–65 character display limit. May truncate in SERPs.
  - **Strength:** Contains primary local keyword ("Therapist in Baton Rouge, LA"), core specialty keywords (Anxiety, Depression, Trauma), and branded name with credential.
- **Meta Description:** `Individual therapy in Baton Rouge, LA with Mechele de Avila Evans, LCSW. Compassionate, evidence-based care for anxiety, depression, trauma, and more. Telehealth available.`
  - **Length:** ~175 characters — within the ~155–160 character sweet spot.
  - **Strength:** Clear, keyword-rich, includes USP (telehealth), professional tone.
  - **Weakness:** No call-to-action (e.g., "Schedule a free consultation today.").

### Key Service Pages — Title Analysis

| Page | Title | Issues |
|------|-------|--------|
| Fees & Insurance | `Fees & Insurance \| Therapy in Baton Rouge, LA \| Mechele de Avila Evans, LCSW` | Good — location keyword present |
| IFS Therapy | `Internal Family Systems (IFS) Therapy in Baton Rouge, LA` | Excellent — high-value specialty keyword |
| Individual Therapy | `Individual Therapy \| Mechele de Avila Evans, LCSW, LLC` | **Missing location** — should include "in Baton Rouge, LA" |
| Anxiety | `Anxiety \| Mechele de Avila Evans, LCSW, LLC` | **Weak** — no location, no therapy type context |
| Depression | `Depression - Mechele de Avila, LCSW` | **Weak** — truncated name, wrong separator, no location |
| Trauma | `Trauma \| Mechele de Avila Evans, LCSW, LLC` | **Missing location** |
| Suicide Prevention | `Suicide Prevention \| Mechele de Avila Evans, LCSW, LLC` | Missing location |
| Telehealth | `Telehealth - Mechele de Avila, LCSW` | **Weak** — truncated name, no location |
| About Me | `About Me \| Mechele de Avila Evans, LCSW, LLC` | **Generic** — duplicate of /about page |
| Blog post | `Trauma, Like Ogres And Onions, Has Many Layers.` | Creative but lacks keyword optimization |

**Pattern:** The condition/specialty pages (Anxiety, Depression, Trauma) are severely under-optimized in their titles — missing location qualifiers which are the most important ranking signals for a local service business.

### Keyword Targeting — Primary Terms Being Targeted
Based on indexed pages and content:
1. "Therapist in Baton Rouge, LA" ✅ (homepage)
2. "Anxiety therapy Baton Rouge" — partial (page exists but title weak)
3. "Depression therapy Baton Rouge" — partial
4. "Trauma therapy Baton Rouge" — partial
5. "EMDR therapy Baton Rouge" — inferred from services
6. "Internal Family Systems therapy Baton Rouge" ✅ (strong page)
7. "Couples therapy Baton Rouge" — inferred, page not confirmed indexed
8. "Gottman therapist Baton Rouge" — appears in content but likely no dedicated page
9. "Telehealth therapy Louisiana" — page exists
10. "LCSW Baton Rouge" — in homepage title

**Gaps:** "Gottman couples therapy Baton Rouge," "EMDR therapist Baton Rouge," "trauma therapist Baton Rouge," "PTSD therapist Baton Rouge," "childhood trauma therapist Louisiana" — these are high-intent queries with no confirmed dedicated, well-optimized pages.

### Internal Linking
- The site appears to have service-specific pages linked from the homepage. A `/frequently-asked-questions/` page and `/telehealth/` page exist, which is positive.
- **Issue:** No evidence of internal links between blog posts and service pages, or between specialty condition pages (e.g., linking from `/anxiety/` to `/individual-therapy/`).
- The one blog post found (`/trauma-has-many-layers/`) appears to be a standalone piece without obvious linking strategy to service pages.

### Content Depth
- **Services with standalone pages:** Individual Therapy, EMDR, IFS, Anxiety, Depression, Trauma, Suicide Prevention, Telehealth, Couples (inferred), Fees & Insurance, FAQ — **this is strong for a solo practitioner**.
- **Content quality:** Descriptions include modality-specific vocabulary (EMDR, IFS, Gottman, CBT, somatic, breathwork, tapping) which is good for long-tail keyword capture.
- **Word count risk:** Individual specialty pages on platform-built sites often contain only 200–400 words. Google typically rewards 600–1,200+ words on specialty/condition pages for healthcare providers.

---

## 3. Local SEO

### NAP (Name, Address, Phone) — Confirmed Information

| Source | Name | Address | Phone |
|--------|------|---------|-------|
| Psychology Today | Mechele de Avila, LCSW, LLC | 1082 Havenwood Drive, Back Apartment, Baton Rouge, LA 70815 | (225) 366-8606 |
| Healthgrades | Mechele de Avila Evans (MSW) | 1082 Havenwood Dr Apt Back, Baton Rouge, LA 70815 | — |
| TherapyFinder | Mechele De Avila Evans LCSW | 1082 Havenwood Dr Back Apartment, Baton Rouge, LA 70815 | 1.225.366.8606 |
| Marriage.com | Mechele de Avila, LCSW, LLC | 1082 Havenwood Drive, Back Apartment, Baton Rouge, LA 70815 | (225) 522-4998 |
| YellowPages | Mechele de Avila, LCSW | Baton Rouge, LA 70815 | — |

**Critical NAP Issue: Phone number inconsistency detected.**
- Psychology Today / TherapyFinder: **(225) 366-8606**
- Marriage.com: **(225) 522-4998**

These are different phone numbers on different citation sources. This is a **major local SEO problem** — inconsistent NAP data confuses Google and diminishes trust signals for local pack ranking.

**Name inconsistency also observed:**
- "Mechele de Avila Evans, LCSW, LLC" (Psychology Today, Facebook)
- "Mechele de Avila, LCSW, LLC" (Marriage.com, YellowPages)
- "Mechele De Avila Evans LCSW" (TherapyFinder)

The business name should be consistent across all platforms. The legal name appears to be "Mechele de Avila Evans, LCSW, LLC."

### Google Business Profile
- **Status: Not confirmed visible in search results.** The site appears in Google organic results, but no Google Business Profile (GBP) "map pack" appearance was found for her name. This is a **high-impact gap** — for local therapy searches, the map pack (3 listings that appear above organic results) is the most visible SERP real estate.
- **Recommendation:** Claim, verify, and fully optimize a Google Business Profile immediately.

**Note:** The home office address ("Back Apartment") may create challenges with GBP — Google sometimes hides addresses for home-based businesses. She can set a service area radius instead.

### Local Keyword Targeting
- **Homepage title** uses "Therapist in Baton Rouge, LA" — correct geography.
- **IFS page** title uses "in Baton Rouge, LA" — correct.
- **Fees & Insurance page** uses "Therapy in Baton Rouge, LA" — correct.
- **Issue:** Condition pages (Anxiety, Depression, Trauma, Telehealth) do not include "Baton Rouge" in their page titles — missed local ranking opportunity.

### Local Schema Markup
- **Not detected.** The site needs `LocalBusiness` JSON-LD schema with:
  - `name`, `address`, `telephone`, `url`, `geo` coordinates
  - `openingHours` (Tue–Thu 9am–5pm per Healthgrades)
  - `priceRange`
  - `serviceArea`

---

## 4. Off-Page SEO

### Directory Presence Summary

| Directory | Status | Notes |
|-----------|--------|-------|
| Psychology Today | ✅ Listed | Highest-authority therapist directory |
| EMDR International Association (EMDRIA) | ✅ Listed | Strong credibility signal |
| IFS Institute Practitioners Directory | ✅ Listed | Niche authority signal |
| TherapyFinder | ✅ Listed | Moderate authority |
| Marriage.com Experts | ✅ Listed | Low-moderate authority |
| LinkedIn | ✅ Listed | Personal profile exists |
| Facebook | ✅ Page exists | 81 likes — low engagement |
| YellowPages | ✅ Listed | Basic citation |
| Healthgrades | ✅ Listed | Good medical directory presence |
| TPN.health | ✅ Listed | Specialty mental health network |
| SimplePractice Client Portal | ✅ (mecheleevans.clientsecure.me) | Booking infrastructure |
| **TherapyDen** | ❌ **Not listed** | High-value — appears on page 1 for local searches |
| **GoodTherapy** | ❌ **Not listed** | High-authority therapist directory |
| **ZocDoc** | ❌ **Not listed** | High-traffic booking platform |
| **Zencare** | ❌ **Not listed** | Growing high-quality directory |
| **Yelp** | ❌ **Not listed** | High local authority |
| **Google Business Profile** | ❌ **Not verified active** | Most critical local listing |

### Backlink Profile
- **Confirmed backlinks from:** Psychology Today, EMDRIA, IFS Institute, TherapyFinder, Marriage.com, Healthgrades, YellowPages, LinkedIn, TPN.health, Facebook.
- **Estimated Domain Authority:** Low-to-moderate (typical for a solo practice site, estimated 5–20 range on Moz DA scale).
- The specialty association links (EMDRIA, IFS Institute) are valuable niche authority signals.
- **Opportunity:** The site is not visible on TherapyDen, which appears prominently in the Google SERP for "therapist Baton Rouge" queries.

### Social Media Presence
- **Facebook:** Page at `facebook.com/PsychotherapywithMechele` — 81 likes. Low engagement signals.
- **Instagram:** No confirmed presence.
- **LinkedIn:** Personal profile exists, no business page.
- **No Twitter/X, Pinterest, or YouTube detected.**

---

## 5. Content Strategy

### Blog / Resource Presence
- One confirmed blog post: **"Trauma, Like Ogres And Onions, Has Many Layers."** at `/trauma-has-many-layers/`
- This is the only blog post visible in Google's index — the blog appears very sparse or not regularly updated.
- No blog index page confirmed (no `/blog/` URL indexed).

**This is a major missed opportunity.** Regular long-form content (1,000–2,000 words per post) is one of the primary ways therapy websites climb in organic rankings.

### Content Gaps vs. Competitors

| Content Opportunity | Search Intent | Priority |
|--------------------|---------------|----------|
| "What is EMDR therapy?" | Informational | High |
| "What is IFS therapy?" | Informational | High |
| "Signs you have anxiety" | Informational | High |
| "How to find a trauma therapist in Baton Rouge" | Local navigational | High |
| "Gottman Method couples therapy explained" | Informational | Medium |
| "Therapy for childhood trauma" | Informational | High |
| "LGBTQIA+ affirming therapist Baton Rouge" | Local navigational | Medium |
| "Kink-aware therapist Louisiana" | Niche specialty | Medium |
| "How does telehealth therapy work?" | Informational | Medium |
| "BCBS PPO therapist Baton Rouge" | Insurance-specific | Medium |
| "Suicide prevention resources Baton Rouge" | Resource | Medium |

### Specialty Keywords — Differentiation Opportunities
The practitioner has rare and high-value specialty credentials that are under-marketed:
- **Certified Kink Aware Professional** — highly differentiated, low-competition niche
- **Gottman Level training** — dedicated page appears absent
- **IFS trained** — has a page ✅
- **EMDR** — has implied content, but no confirmed dedicated `/emdr-therapy/` page
- **LGBTQIA+ affirming** — not confirmed as a dedicated page or title keyword
- **Adults with childhood trauma** — strong niche with content demand

---

## 6. Subdomains

### Confirmed Subdomains
- **`www.mecheledeavila-lcsw.com`** — main site (canonical `www` version)
- **`mecheleevans.clientsecure.me`** — SimplePractice client portal (external domain, not a true subdomain)

### Not Found
- No `blog.`, `scheduling.`, `portal.`, `resources.`, or other subdomains detected via search index queries.

### Subdomain Notes
- The SimplePractice booking portal lives on a **third-party domain** (`clientsecure.me`), not on the main domain. This is standard for SimplePractice users but means no SEO benefit passes to the main domain from the booking flow.

---

## 7. Competitive Landscape

### Who Ranks for Local Therapy Keywords?

**SERP Tier 1 — Directories (rank above most individual sites):**
- TherapyDen — "10 BEST Therapists in Baton Rouge"
- Psychology Today — therapist search for Baton Rouge
- SonderMind, Rula, Headway — insurance-network platforms
- ZocDoc — booking platform
- Yelp, Tebra

**SERP Tier 2 — Practice/Group Sites:**
- **Highland Healing Center** (`highlandhealingcenter.com`) — multi-therapist boutique practice, appears in EMDR and IFS searches; has dedicated EMDR page and active content
- **BR Counseling Associates** — group practice, broader search visibility
- **Oldendorf Counseling Services** — appears for couples/marriage counseling

**Competitive Position of mecheledeavila-lcsw.com:**
- Appears in organic results for her own name — strong brand presence ✅
- Appears alongside top competitors in IFS Baton Rouge and Gottman Baton Rouge searches ✅
- Not visible in TherapyDen's "10 Best" list — critical gap ❌
- Not appearing in the local map pack (GBP gap) ❌
- The IFS therapy page (`/internal-family-systems/`) performs well for that niche query — genuine competitive advantage ✅

**Key differentiators vs. competitors:**

| Feature | Mechele de Avila Evans | Highland Healing Center |
|---------|------------------------|------------------------|
| Solo practice (personal connection) | ✅ | ❌ (group) |
| IFS trained | ✅ | ✅ |
| EMDR | ✅ | ✅ |
| Gottman couples | ✅ | ❌ confirmed |
| Kink-aware certified | ✅ | ❌ confirmed |
| LGBTQIA+ affirming | ✅ | ✅ |
| 20+ years experience | ✅ | ❌ (newer practice) |
| Active blog | ❌ | ✅ |
| Multiple therapists | ❌ | ✅ |

---

## 8. Priority Recommendations — Top 10 by Impact

### #1 — CRITICAL: Fix the Duplicate www / non-www URL Problem
**Impact: High | Effort: Low**
Ensure a hard 301 redirect from all non-www URLs to `https://www.mecheledeavila-lcsw.com/`. Add a canonical tag to every page. Resolve the duplicate `/about` vs `/about-me/` pages (keep one, 301 redirect the other).

### #2 — CRITICAL: Claim and Optimize Google Business Profile
**Impact: Very High | Effort: Medium**
This is the single highest-leverage action available. A fully optimized GBP can put Mechele in the **local map pack** for "therapist Baton Rouge," "LCSW near me," and specialty queries.
- Name: "Mechele de Avila Evans, LCSW, LLC"
- Address: 1082 Havenwood Dr, Baton Rouge, LA 70815 (or set as service area)
- Phone: (225) 366-8606 (confirm and standardize)
- Hours: Tue–Thu 9am–5pm
- Category: "Mental Health Clinic" or "Psychotherapist"
- Add photos, services, description
- Request reviews from past clients (ethically, per NASW guidelines)

### #3 — CRITICAL: Standardize NAP Across All Directories
**Impact: High | Effort: Medium**
The phone number discrepancy ((225) 366-8606 vs. (225) 522-4998) is actively hurting local SEO trust signals. Audit every listing and update to one consistent NAP:
- **Name:** Mechele de Avila Evans, LCSW, LLC
- **Address:** 1082 Havenwood Dr, Back Apt, Baton Rouge, LA 70815
- **Phone:** Confirm which number is current, then update Marriage.com, YellowPages, Healthgrades, TherapyFinder

### #4 — HIGH: Add LocalBusiness Schema Markup to Every Page
**Impact: High | Effort: Low–Medium**
Add JSON-LD structured data:
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "name": "Mechele de Avila Evans, LCSW, LLC",
  "telephone": "(225) 366-8606",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1082 Havenwood Dr",
    "addressLocality": "Baton Rouge",
    "addressRegion": "LA",
    "postalCode": "70815"
  },
  "url": "https://www.mecheledeavila-lcsw.com/",
  "openingHours": ["Tu 09:00-17:00", "We 09:00-17:00", "Th 09:00-17:00"]
}
```
Also add `FAQPage` schema to `/frequently-asked-questions/` and `Person` schema to the About page.

### #5 — HIGH: Fix Under-Optimized Service Page Titles
**Impact: High | Effort: Low**
Update the following page titles to include "Baton Rouge, LA":
- `/anxiety/` → `Anxiety Therapy in Baton Rouge, LA | Mechele de Avila Evans, LCSW`
- `/depression/` → `Depression Therapy in Baton Rouge, LA | Mechele de Avila Evans, LCSW`
- `/trauma/` → `Trauma Therapy in Baton Rouge, LA | Mechele de Avila Evans, LCSW`
- `/individual-therapy/` → `Individual Therapy in Baton Rouge, LA | Mechele de Avila Evans, LCSW`
- `/telehealth/` → `Telehealth Therapy | Louisiana | Mechele de Avila Evans, LCSW`
- `/suicide-prevention/` → `Suicide Prevention Therapy in Baton Rouge, LA | Mechele de Avila Evans, LCSW`

### #6 — HIGH: Get Listed on TherapyDen, GoodTherapy, and Zencare
**Impact: High | Effort: Low**
TherapyDen appears on page 1 of Google for "best therapists Baton Rouge." Mechele is not in their directory. **Create a profile at therapyden.com immediately.** Also:
- GoodTherapy.org
- Zencare.co
- Thervo.com

### #7 — MEDIUM-HIGH: Build a Content/Blog Strategy (minimum 4–8 posts/year)
**Impact: High long-term | Effort: High**
One blog post is not a strategy. Suggested first four posts:
1. "What Is IFS Therapy and Is It Right for You?" (target: "IFS therapy Baton Rouge")
2. "How EMDR Therapy Works for Trauma" (target: "EMDR therapy Baton Rouge")
3. "Signs You Might Benefit from Trauma Therapy" (target: "trauma therapist Baton Rouge")
4. "Therapy for Adults with Childhood Trauma: What to Expect" (long-tail niche)

### #8 — MEDIUM: Create Dedicated Pages for Missing High-Value Specialties
**Impact: Medium-High | Effort: Medium**
The following specialties are mentioned in content/directories but have no confirmed dedicated landing page:
- **Gottman Method Couples Therapy** — "Gottman therapist Baton Rouge" has search demand
- **LGBTQIA+ Affirming Therapy** — increasingly searched, differentiating
- **Kink Aware Professional Therapy** — very low competition, highly specific niche
- **EMDR Therapy** — EMDRIA directory links to the site but no `/emdr-therapy/` URL confirmed in index

### #9 — MEDIUM: Trim the Homepage Title Tag
**Impact: Medium | Effort: Low**
Current title (~93 characters) truncates in Google.
Suggested: `Therapist in Baton Rouge, LA | Mechele de Avila Evans, LCSW` (61 chars) — clean, full display. Specialties addressed through meta description and page content.

### #10 — MEDIUM: Expand Social Proof and Review Signals
**Impact: Medium | Effort: Medium**
- Facebook page has only 81 likes and appears content-inactive.
- No Google reviews confirmed (GBP not claimed).
- **Actions:**
  - Post to Facebook at least 2x/month with mental health content linking back to blog posts.
  - Once GBP is claimed, encourage former clients to leave Google reviews.
  - Consider embedding a Psychology Today trust badge on the website.

---

## Appendix: Confirmed External Profiles

- [Psychology Today Profile](https://www.psychologytoday.com/us/therapists/mechele-de-avila-lcsw-llc-baton-rouge-la/173463)
- [EMDRIA Directory](https://www.emdria.org/directory/people/mechele-de-avila-evans/)
- [IFS Institute Practitioner Directory](https://ifs-institute.com/practitioners/all/123242)
- [TherapyFinder](https://therapyfinder.com/therapist/mechele-de-avila-evans-licensed-clinical-social-worker-lcsw-baton-rouge-la)
- [Healthgrades](https://www.healthgrades.com/providers/mechele-de-avila-yrw84)
- [Marriage.com Experts](https://www.marriage.com/experts/mechele-de-avila-lcsw-llc)
- [LinkedIn](https://www.linkedin.com/in/mechele-evans-82850116/)
- [Facebook](https://www.facebook.com/PsychotherapywithMechele/)
- [TPN.health](https://app.tpn.health/profile/mecheledeavilaevans10977)
- [YellowPages](https://www.yellowpages.com/baton-rouge-la/mip/mechele-de-avila-lcsw-538991478)
- [SimplePractice Booking Portal](https://mecheleevans.clientsecure.me/)

---

*Note: Direct HTML inspection of the site was blocked by the server (HTTP 403 for non-browser user agents), which is itself a technical SEO concern — legitimate crawlers including Googlebot should be able to access the site. All technical findings are derived from Google's search index, SERP snippet data, directory listings, and observable URL/title patterns. A full technical audit using Screaming Frog, Google Search Console access, and PageSpeed Insights is recommended to validate and extend these findings.*
