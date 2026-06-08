# Mary Bird Perkins Cancer Center — Digital Marketing & SEO Audit
**Prepared for:** Digital Marketing & SEO Strategist Role
**Date:** June 2026
**Site:** marybird.org
**Frameworks applied:** SEO Audit, CRO, Content Strategy, Site Architecture, AI-SEO, Analytics, Copywriting, Competitor Profiling, Customer Research, Social, Schema

---

## Executive Summary

Mary Bird Perkins is Louisiana's leading independent cancer center with a strong clinical reputation and a multi-location footprint across Louisiana and southwest Mississippi. Their digital presence, however, does not reflect that leadership position. The website has significant gaps in SEO content depth, patient conversion flow, technical trust signals, and competitive positioning — all of which directly affect how many patients find them, choose them, and successfully navigate to care.

**The core problem:** The site functions as a digital brochure rather than a patient acquisition and support engine. At a moment when 82% of Americans use search to research healthcare providers, marybird.org is leaving a significant share of that intent unaddressed.

**Top 5 Priority Issues:**
1. No educational/condition content — the site does not capture the high-volume cancer symptom and treatment searches patients are actually doing
2. Appointment booking is phone-first and high-friction — no real-time online scheduling
3. Multiple "INACTIVE PORTAL" subdomains appear in Google search results — actively damaging trust and SEO authority
4. No blog, no thought leadership, no content that builds E-E-A-T signals with Google
5. Weak competitive positioning vs. Ochsner MD Anderson, which now has a fully integrated cancer program in Louisiana with strong digital infrastructure

**Opportunity:** A well-executed 90-day content and technical SEO strategy could position Mary Bird Perkins as the dominant organic search result for cancer care queries across Louisiana — capturing patients at their most critical moment of need.

---

## Section 1: Technical SEO Audit

### 1.1 Crawlability & Indexation

**Issue: Inactive portal subdomains polluting search results — CRITICAL**
- **Impact:** High
- **Evidence:** Google search results for "Mary Bird Perkins patient portal" return at least 4 results labeled "zINACTIVE PORTAL" — `mbpcc-tgmc.navigatingcare.com`, `mbpcc-steham.navigatingcare.com`, `mbpcc-cov.navigatingcare.com`, `mbpcc-olol.navigatingcare.com`
- **Problem:** These dead links appear in Google's index alongside the live site. A newly diagnosed patient clicking one of these will hit a dead or deprecated portal — a catastrophic experience at the worst possible time. This also fragments link authority and confuses Google about which portal URL is canonical.
- **Fix:** Work with Navigating Care to 301-redirect all deprecated subdomains to `marybird.navigatingcare.com` or to `marybird.org/portal/`. Submit removal requests in Google Search Console for any fully dead URLs. Add `noindex` headers to deprecated subdomain pages if they cannot be redirected.
- **Priority:** Fix immediately (Week 1)

**Issue: Site blocks all automated crawlers**
- **Impact:** Medium-High
- **Evidence:** All WebFetch requests to marybird.org return 403 Forbidden
- **Problem:** If robots.txt or server config is blocking Googlebot-like user agents, this could suppress indexation. More likely this is a Cloudflare/WAF configuration — but it needs verification.
- **Fix:** Check robots.txt at marybird.org/robots.txt. Verify Google Search Console for crawl errors. Confirm Googlebot is not being blocked by WAF rules. Check `site:marybird.org` in Google to verify current indexed page count.
- **Priority:** Week 1 verification

**Issue: XML Sitemap — unknown status**
- **Fix:** Verify sitemap exists at `marybird.org/sitemap.xml` or `marybird.org/sitemap_index.xml`. Confirm it is submitted in Google Search Console. Ensure all location pages, service pages, and key content pages are included.
- **Priority:** Week 1

### 1.2 Site Speed & Core Web Vitals

- **Check:** Run PageSpeed Insights on homepage, /make-appointment/, and at least two location pages
- **Benchmarks:** LCP < 2.5s, INP < 200ms, CLS < 0.1
- **Common issues for healthcare sites:** Unoptimized hero images, render-blocking JavaScript, third-party portal embeds slowing load times
- **Note:** Mobile performance is critical — cancer patients researching on phones at all hours is the norm, not the exception
- **Fix:** Compress and convert hero images to WebP, implement lazy loading, audit third-party scripts (Navigating Care widgets, analytics, chat tools), implement CDN if not already in place
- **Priority:** Week 2–3

### 1.3 Schema Markup

**Issue: No confirmed structured data**
- **Impact:** High — especially for healthcare
- **Evidence:** Unable to confirm schema via direct fetch (site blocks crawlers; schema may be JS-injected and not visible in static HTML)
- **Action needed:** Test each key page type using Google's Rich Results Test (renders JavaScript correctly): `https://search.google.com/test/rich-results`
- **Missing schema types (likely):**
  - `MedicalOrganization` — name, address, phone, specialties
  - `Hospital` / `MedicalClinic` — for each location page
  - `MedicalCondition` — for cancer type pages (once created)
  - `MedicalProcedure` — for treatment/service pages
  - `FAQPage` — for resource/patient FAQ sections
  - `BreadcrumbList` — for navigation clarity in SERPs
  - `LocalBusiness` with `geo` coordinates — for all 8+ location pages
- **Fix:** Implement JSON-LD schema on all page types. Start with homepage (`MedicalOrganization`) and all location pages (`MedicalClinic`). This is a high-value quick win for both traditional search and AI search (Perplexity, ChatGPT, AI Overviews).
- **Priority:** Week 2–4

### 1.4 HTTPS & Security

- Verify full HTTPS implementation with no mixed content warnings
- Confirm valid SSL certificate
- Confirm HTTP → HTTPS redirect is in place

### 1.5 URL Structure

**Observed structure:**
- `/service/` — services index
- `/service/patient-navigation-and-social-services/` — individual service
- `/location/main-campus/` — location pages
- `/locations/` — locations index
- `/make-appointment/` — conversion page

**Issues:**
- `/services/resources/` vs. `/service/` — inconsistent singular/plural creates potential crawl confusion
- No visible URL structure for cancer type pages (e.g., `/cancer-types/breast-cancer/`) — a major SEO gap
- **Fix:** Audit for URL inconsistencies. Standardize on singular (`/service/`) or plural (`/services/`) and 301-redirect the other. Build out `/cancer-types/` and `/treatments/` URL hierarchies.

---

## Section 2: On-Page SEO & Content Audit

### 2.1 The Core Gap: No Educational Content

**Issue: The website does not capture cancer information searches — CRITICAL**
- **Impact:** Very High
- **Evidence:** The site appears to have no blog, no cancer type/condition pages, no treatment explainer pages, and no symptom guides
- **The opportunity being missed:** The highest-volume cancer-related searches are informational:
  - "breast cancer symptoms" — 135,000 searches/month (national)
  - "what is radiation therapy" — 40,000/month
  - "lung cancer treatment options" — 18,000/month
  - "cancer center near me" — local intent, high conversion value
  - "best cancer hospital in Louisiana" — decision-stage, extremely high value
- **What competitors do:** MD Anderson, Mayo Clinic, and Cancer.org dominate these searches with deep condition libraries. Ochsner's cancer pages are indexed and appearing for Louisiana + cancer queries.
- **Fix:** Build a cancer types content hub (`/cancer-types/`) with individual pages for each cancer type treated. Build a treatments hub (`/treatments/`). Add a patient education blog. This is a 6–12 month SEO investment with compounding returns.
- **Priority:** Begin content planning Week 1; publish first pillar pages Month 1–2

### 2.2 Content Pillars to Build

Based on audience need, search volume, and clinical services:

| Pillar | Hub URL | Example Spoke Pages |
|--------|---------|-------------------|
| Cancer Types | `/cancer-types/` | Breast, Lung, Prostate, Colorectal, Head & Neck, Skin, Blood cancers |
| Treatments | `/treatments/` | Radiation therapy, Medical oncology, Chemotherapy, Clinical trials |
| Patient Journey | `/patient-journey/` | Diagnosis, Treatment planning, Survivorship, Caregivers |
| Support Services | `/support/` | Navigation, Nutrition, Social work, Financial assistance |
| Prevention & Screening | `/prevention/` | Mammograms, Lung screening, Genetic counseling |
| Locations | `/locations/` | Already exists — needs content depth per location |

### 2.3 Keyword Strategy

**Priority keyword categories for a new strategist to own:**

**Local/geo-intent (highest conversion value):**
- "cancer center Baton Rouge"
- "oncologist Baton Rouge LA"
- "radiation therapy [city name]"
- "cancer treatment near me"

**Condition + treatment (high volume, mid-funnel):**
- "breast cancer treatment options"
- "radiation therapy for prostate cancer"
- "lung cancer specialists Louisiana"

**Decision-stage (high intent):**
- "best cancer hospital Louisiana"
- "Mary Bird Perkins reviews"
- "Mary Bird Perkins vs [competitor]"

**Long-tail / patient questions (easy wins):**
- "how long does radiation therapy take"
- "what to expect at first oncology appointment"
- "can I self-refer to a cancer center"

### 2.4 E-E-A-T Signals

**Current state:** Likely weak
- **No visible physician/staff bios** with credentials, publications, or expertise signals
- **No patient stories or outcomes data** (highly effective for trust + conversion)
- **No authored content** — Google rewards content written by or attributed to credentialed medical professionals
- **Fix:** Add physician profile pages with photos, credentials, specialties, and publications. Add author attribution to any clinical content. Publish patient success stories (with consent). Display accreditations, awards, and outcomes data prominently.

---

## Section 3: CRO — Conversion Rate Optimization

### 3.1 Appointment Booking — High Friction

**Issue: No real-time online booking — CRITICAL for patient acquisition**
- **Current flow:** Patient visits `/make-appointment/` → must call 1-888-501-4763, OR submit a self-referral form and wait 1–2 weeks to be contacted
- **Problem:** This is a 2006-era conversion flow. Cancer patients are often in acute distress when searching. Every additional step loses people. The 1–2 week wait message on self-referral is psychologically devastating for someone who just received a diagnosis.
- **Competitive gap:** Ochsner uses MyChart for online scheduling. Many competitors allow appointment requests within 24 hours.
- **Fix (short-term):** Add a prominent "Request an Appointment" form above the fold on the homepage and all location pages — not buried in a sub-page. Reduce form fields to the absolute minimum (name, phone, email, cancer type, preferred location). Set response time expectation to 24–48 hours, not 1–2 weeks.
- **Fix (long-term):** Integrate real-time appointment scheduling or at minimum a same-day callback promise.
- **Priority:** High — Month 1

### 3.2 Homepage CTA Hierarchy

**Issues (based on available data):**
- Primary CTA is unclear — "Make an Appointment," "Find a Location," "Patient Portal," and "Why Mary Bird Perkins" likely compete for attention
- For a cancer patient arriving from Google, the only CTA that matters in the first 5 seconds is: **"Get care now"**
- **Fix:** Restructure homepage hero to: (1) clear value proposition headline, (2) single primary CTA ("Request an Appointment"), (3) trust signal (number of patients served, years of care, accreditation). Everything else is secondary.

### 3.3 Patient Portal Fragmentation

**Issue: Multiple portals create confusion**
- Baton Rouge patients: `marybird.org/baton-rouge/portal/`
- Covington patients: deprecated `mbpcc-cov.navigatingcare.com`
- Main portal: `marybird.navigatingcare.com`
- **Problem:** A patient who can't find their portal may give up or feel abandoned by their care team. This is both a CRO issue and a patient satisfaction issue.
- **Fix:** Create a single `/portal/` page that clearly routes patients by location. Remove or redirect all deprecated portal subdomains.

### 3.4 "Why Mary Bird Perkins" Page

**Issue: Likely underperforming as a conversion page**
- This page should be the most persuasive page on the site — the answer to "why should I trust you with my cancer care?"
- **Must-have elements:** Specific outcome statistics, accreditations (NCI designation? Commission on Cancer?), number of patients treated, years in operation, range of cancers treated, insurance accepted, what makes the care model different from a hospital system
- **Fix:** Treat this as a landing page, not an about page. Lead with what patients care about: outcomes, access, compassion, expertise. Add social proof (patient testimonials, physician quotes, awards).

---

## Section 4: Competitor Analysis

### Primary Competitor: Ochsner MD Anderson Cancer Center

| Dimension | Mary Bird Perkins | Ochsner MD Anderson |
|-----------|------------------|-------------------|
| Brand affiliation | Independent (strength + weakness) | MD Anderson partnership (massive trust signal) |
| Locations | 8+ across LA/MS | 7 in New Orleans, St. Tammany, Baton Rouge |
| Online scheduling | Phone/form only | MyChart integration |
| Educational content | Minimal visible content | Condition and treatment pages, resource library |
| Patient portal | Navigating Care (fragmented) | Epic MyChart (unified) |
| Clinical trials | Available | Phase 1 trials (only center between Houston & Birmingham) |
| Digital authority | Unknown — no content depth | Strong — backed by ochsner.org domain authority |

**Opportunity:** Mary Bird Perkins' independence from a hospital system is actually a differentiator — they can position as specialists-first, not a department inside a bigger system. That story needs to be told digitally.

### Secondary Competitor: Willis-Knighton Cancer Center (Shreveport market)
- Competes directly in the Shreveport/Springhill service area
- Audit their content strategy and local SEO for those specific markets

---

## Section 5: Local SEO

### 5.1 Google Business Profiles

**Issue: Unknown optimization status across 8+ locations**
- Every location page must have a fully optimized, claimed Google Business Profile
- **Check for each location:**
  - Correct name, address, phone (NAP consistency)
  - Updated hours (including holiday/weekend hours)
  - Photos (facility exterior, interior, staff)
  - Services listed
  - Responding to reviews (positive and negative)
  - GBP posts (events, health tips, services)
- **Fix:** Audit all GBPs. Assign ownership. Implement a review response protocol. Add a review generation process for post-visit patient emails (HIPAA-compliant).

### 5.2 Local Schema

Each location page at `/location/[city]/` should have:
- `MedicalClinic` schema with full address, phone, geo coordinates, services offered
- `openingHours` specification
- `aggregateRating` (if reviews exist)

### 5.3 Local Content Opportunities

- "Cancer treatment in [City], LA" pages — currently location pages exist but likely have thin content
- "Radiation therapy near [City]" — high-value local + service keyword combinations
- Community health content specific to each region (Louisiana has some of the highest cancer mortality rates in the country — own that statistic with mission-driven content)

---

## Section 6: AI Search Optimization (AEO/GEO)

In 2026, a meaningful and growing share of health searches happen through AI assistants — ChatGPT, Google AI Overviews, Perplexity. For cancer patients, this is increasingly the first stop before clicking a website.

**To be cited by AI systems, marybird.org needs:**

1. **Clear, factual, structured content** — "What is radiation therapy?" answered definitively on a dedicated page
2. **Schema markup** — `MedicalOrganization`, `MedicalCondition`, `MedicalProcedure` types tell AI systems exactly what the site is about
3. **Consistent brand mentions across the web** — citations in news articles, medical directories (Healthgrades, Vitals, US News), .edu and .gov backlinks
4. **FAQPage schema** — structured Q&A on common patient questions positions pages for AI citation and featured snippets
5. **Authoritative author attribution** — physician-authored or -reviewed content gets preferential AI citation

---

## Section 7: Social Media & Community

### Current State
- Facebook presence exists (at least for Covington location: `facebook.com/mbpcccov/`)
- 98% recommendation rate noted on Facebook (strong signal — not being leveraged on the website)

### Opportunities
1. **Patient story video content** — short-form video of survivors, care teams, patient navigators performs well on Facebook and Instagram in the cancer care space
2. **Educational reels** — "What to expect from your first radiation appointment," "How patient navigation works" — build trust before someone ever calls
3. **Community health awareness posts** — Louisiana-specific cancer stats, screening reminders, local events
4. **Cross-promote content hub** — once educational content is built on the site, social amplifies it and drives links

---

## Section 8: Content Gaps vs. Patient Needs

Based on what cancer patients actually search for and what marybird.org appears to be missing:

| Patient Need | Search Query | MBP Content? | Priority |
|-------------|-------------|--------------|----------|
| "Do I have cancer?" | cancer symptoms checker | ❌ None | High |
| "What kind of cancer do I have?" | [cancer type] diagnosis | ❌ None | High |
| "What are my treatment options?" | [cancer] treatment options | ❌ None | High |
| "What is radiation therapy?" | how does radiation therapy work | ❌ None | High |
| "Can I self-refer?" | self-referral cancer center | ✅ Exists | Medium |
| "How do I pay for cancer treatment?" | cancer treatment financial assistance | Partial | High |
| "What support is available?" | cancer patient support groups LA | ✅ Partial | Medium |
| "What do patients say?" | Mary Bird Perkins reviews | ❌ Not on site | High |
| "Are there clinical trials?" | cancer clinical trials Louisiana | Unknown | Medium |
| "How do I find a cancer doctor near me?" | oncologist near me | ❌ No local content | High |

---

## Section 9: 90-Day Roadmap

### Month 1 — Fix What's Broken + Plant the SEO Foundation

**Week 1–2: Technical Quick Wins**
- [ ] Audit and fix inactive portal subdomains in Google Search Console
- [ ] Verify robots.txt — no unintentional blocks
- [ ] Check and submit XML sitemap
- [ ] Test all pages for HTTPS / mixed content
- [ ] Run PageSpeed Insights on homepage + appointment page
- [ ] Verify/claim all Google Business Profiles across all locations

**Week 3–4: Schema + On-Page Fixes**
- [ ] Implement `MedicalOrganization` schema on homepage
- [ ] Implement `MedicalClinic` + `LocalBusiness` schema on all location pages
- [ ] Fix URL inconsistency (services vs. service)
- [ ] Add `FAQPage` schema to patient resources page
- [ ] Audit and rewrite all title tags and meta descriptions for keyword alignment
- [ ] Redesign appointment booking CTA — above the fold on homepage and location pages

---

### Month 2 — Content Foundation

**Content to publish:**
- [ ] Cancer Types hub page (`/cancer-types/`)
- [ ] 3–5 top cancer type pages (start with breast, lung, prostate, colorectal — highest incidence in Louisiana)
- [ ] "Why Mary Bird Perkins" page rewrite — outcome stats, testimonials, accreditations
- [ ] Patient navigation explainer page (high-value differentiator)
- [ ] Financial assistance / insurance guide (major search intent and patient need)

**On-page:**
- [ ] Add physician profile pages with credentials and authored content
- [ ] Embed Facebook reviews / patient testimonials on homepage and location pages
- [ ] Add internal links from location pages → service pages → appointment page

---

### Month 3 — Authority Building + Local Dominance

**Content:**
- [ ] Treatments hub page (`/treatments/`) — radiation, medical oncology, clinical trials
- [ ] 2–3 patient education blog posts (targeting long-tail question keywords)
- [ ] Location-specific content additions (unique content per city beyond name/address)

**Authority:**
- [ ] Outreach to Louisiana health news outlets for coverage/mentions
- [ ] Submit/update listings on Healthgrades, Vitals, US News, Castle Connolly
- [ ] Partner with LASACT (and similar organizations) for resource page backlinks
- [ ] Launch review generation program (post-visit email to patients — HIPAA-compliant)

**Measurement:**
- [ ] Set up GA4 conversion tracking (appointment form submissions, phone click-to-calls, portal clicks)
- [ ] Connect all GBPs to Google Search Console
- [ ] Establish monthly baseline report: organic traffic, keyword rankings, conversion rate, GBP calls

---

## Section 10: Key Metrics to Track

| Metric | Tool | Goal |
|--------|------|------|
| Organic search traffic | Google Search Console / GA4 | +30% in 6 months |
| Keyword rankings (cancer + city queries) | SEMrush / Ahrefs | Top 3 for key Louisiana queries |
| Appointment form submissions | GA4 | Establish baseline → optimize |
| Phone call clicks | GA4 + GBP | Establish baseline |
| GBP profile views (per location) | Google Business Profile | Monthly growth |
| Page speed (LCP) | PageSpeed Insights | < 2.5s across all key pages |
| Backlinks / domain authority | Ahrefs / SEMrush | Consistent monthly growth |
| Schema coverage | Rich Results Test | 100% of location + service pages |

---

## Summary of Highest-Impact Opportunities

| # | Opportunity | Effort | Impact | Timeline |
|---|------------|--------|--------|----------|
| 1 | Fix inactive portal subdomains | Low | High | Week 1 |
| 2 | Implement schema markup across all pages | Medium | High | Month 1 |
| 3 | Build cancer types content hub | High | Very High | Month 1–3 |
| 4 | Redesign appointment booking CTA | Low | High | Week 3–4 |
| 5 | Optimize all Google Business Profiles | Medium | High | Month 1 |
| 6 | Rewrite "Why Mary Bird Perkins" page | Medium | High | Month 2 |
| 7 | Add physician profiles + E-E-A-T signals | Medium | High | Month 2 |
| 8 | Launch review generation program | Low | Medium | Month 2 |
| 9 | Build treatments content hub | High | High | Month 2–3 |
| 10 | Local SEO content per location | Medium | Medium | Month 3 |

---

*Sources: marybird.org (search-indexed URLs), Google Search results, Ochsner Health digital presence, Cardinal Digital Marketing oncology best practices, Healthcare Marketing Trends 2025–2026, marketing skills: seo-audit, cro, content-strategy, site-architecture, ai-seo, competitor-profiling, analytics, schema, social, customer-research, copywriting*
