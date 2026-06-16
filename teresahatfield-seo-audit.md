# Comprehensive SEO Audit: The Hatfield Law Office (teresahatfield.com)

**Prepared:** June 16, 2026
**Business:** The Hatfield Law Office, LLC — Family Law & Criminal Defense Attorney
**Location:** 2133 Silverside Road, Suite M, Baton Rouge, LA 70808
**Phone:** (225) 663-2247
**Attorney:** Teresa L. Hatfield (licensed ~20 years; bilingual English/Spanish)

> **Note on data collection:** The teresahatfield.com server returns HTTP 403 Forbidden to all automated crawlers, which is itself a significant SEO finding (see Section 1). All page-level data below is derived from Google's indexed snippets, directory profiles, and third-party sources that have previously crawled the site.

---

## 1. Site Overview

The Hatfield Law Office, LLC is a solo-attorney law firm founded in 2009 in Baton Rouge, Louisiana. Teresa L. Hatfield handles **family law** (divorce, custody, child support, domestic violence, community property) and **criminal defense** (DUI, criminal offenses), plus civil litigation, traffic matters, and notary services. She also targets the **Spanish-speaking Hispanic community** as a bilingual differentiator. The firm serves East and West Baton Rouge, Livingston, Lafayette, Iberville, Ascension, and surrounding parishes.

The firm operates **two websites**:
- **Primary:** https://www.teresahatfield.com/ (main brand site)
- **Secondary:** https://divorcelawyersbr.com/ (keyword-targeted satellite domain)

---

## 2. Technical SEO

### SSL / HTTPS
- **Status: PASS.** The site operates on HTTPS — confirmed by consistent HTTPS URLs appearing across all directory citations.

### Indexed Pages (from `site:teresahatfield.com`)
Google indexes **only 4 confirmed pages:**

| URL | Title (from search snippets) |
|-----|------------------------------|
| `https://www.teresahatfield.com/` | The Hatfield Law Office \| Family Law & Criminal Defense Attorney in Baton Rouge, LA |
| `https://www.teresahatfield.com/practice-areas` | Practice Areas \| The Hatfield Law Office |
| `https://www.teresahatfield.com/about` | About \| The Hatfield Law Office |
| `https://www.teresahatfield.com/contact` | Contact \| The Hatfield Law Office |

**Critical finding:** Only 4 pages are discoverable in Google's index. This is extremely thin for a law firm competing in a local market.

### Meta Titles

| Page | Title | Assessment |
|------|-------|------------|
| Homepage | `The Hatfield Law Office \| Family Law & Criminal Defense Attorney in Baton Rouge, LA` | Good — includes location + primary keywords. ~75 chars (slightly over 60-char limit, may truncate) |
| Practice Areas | `Practice Areas \| The Hatfield Law Office` | **Weak** — generic, no keywords |
| About | `About \| The Hatfield Law Office` | **Very weak** — no keywords at all |
| Contact | `Contact \| The Hatfield Law Office` | **Very weak** — generic |

### Meta Descriptions
- Not confirmed from available sources. Action needed: write unique, keyword-rich meta descriptions for all pages (150–160 characters each with a CTA).

### robots.txt
- **Status: NOT ACCESSIBLE (returns 403 to crawlers)**
- If Googlebot receives 403 on robots.txt, it treats the file as unrestricted — not ideal for controlled indexing.
- **HIGH PRIORITY ISSUE**

### sitemap.xml
- **Status: NOT ACCESSIBLE (returns 403)**
- No sitemap is confirmed served to crawlers. With only 4 pages indexed, an XML sitemap is critical.
- **HIGH PRIORITY ISSUE**

### Page Speed & Mobile
- No direct data obtainable (site blocks crawlers).
- **Action:** Run Google PageSpeed Insights and Google's Mobile-Friendly Test directly on the live site.

### Crawler Access Issue (Critical)
- **The site returns HTTP 403 Forbidden to all automated user-agents.** If this affects Googlebot, the site is effectively invisible for ongoing crawling and re-indexing. The fact that 4 pages ARE indexed suggests Googlebot may be partially whitelisted, or the 403 is intermittent.
- Possible cause: Cloudflare WAF misconfiguration, security plugin, or server-level bot-blocking rule.
- **Investigate via Google Search Console → Coverage → Crawl Errors immediately.**

### URL Structure
- Confirmed clean URLs: `/`, `/practice-areas`, `/about`, `/contact`
- No keyword-rich subfolder structure visible (e.g., no `/family-law/divorce/`, `/criminal-defense/dui/`)
- **Opportunity:** Deep practice area pages with keyword-rich URLs

### Schema Markup / Structured Data
- **No evidence of structured data detected** in any indexed snippets.
- No `LegalService`, `Attorney`, `LocalBusiness`, `Person`, or `FAQPage` schema present.
- **HIGH PRIORITY ISSUE**

### Canonical Tags
- Cannot confirm without page access. Unknown.

---

## 3. On-Page SEO

### Primary Keywords Being Targeted
- "family law attorney Baton Rouge"
- "criminal defense attorney Baton Rouge"
- "divorce lawyer Baton Rouge"
- "child custody attorney Baton Rouge"
- "family law Baton Rouge LA"

### Differentiators Present in Content
From indexed snippets, the site communicates these strong credibility signals:
- 20+ years litigation experience
- 1,000+ court appearances
- Bilingual (Spanish/English)
- Former President of Baton Rouge Association of Women Attorneys

These are excellent differentiators — but they need more prominent SEO deployment (dedicated pages, schema markup, structured headers).

### Content Quality and Depth
- **Critical weakness:** Only 4 pages are indexed.
- The Practice Areas page appears to cover all services on **one single page** rather than individual pages per practice area.
- No blog, no resource pages, no FAQ pages visible in the index.
- Competitor sites (Cosenza, Magnolia Law, Ossie Brown, Friley & Dugas) have **deep content architectures** with individual pages for divorce, child custody, child support, DUI, etc.

### Internal Linking
- With only 4 pages, internal linking structure is extremely limited. No blog posts or resources to link from/to.

---

## 4. Local SEO

### NAP Consistency

| Source | Name | Address | Phone |
|--------|------|---------|-------|
| teresahatfield.com | The Hatfield Law Office | 2133 Silverside Road, Suite M, Baton Rouge, LA 70808 | (225) 663-2247 |
| Avvo | Teresa Lucia Fiore Hatfield | 2133 Silverside Dr, Ste M, Baton Rouge, LA 70808 | — |
| Yellow Pages (primary) | The Hatfield Law Office | 2133 Silverside Dr # M, Baton Rouge, LA 70808 | (225) 663-2247 |
| Yellow Pages (secondary) | The Hatfield Law Office | Baton Rouge, LA **70802** | — |
| BBB | The Hatfield Law Office | Baton Rouge, LA | — |
| Lawful.com | The Hatfield Law Office LLC | — | — |

**NAP Issues:**
- **Inconsistent ZIP code:** One Yellow Pages listing shows `70802` instead of the correct `70808`. Must be corrected.
- Suite formatting varies (`Suite M` vs. `Ste M` vs. `# M`) — minor but worth standardizing.
- Phone `(225) 663-2247` appears consistent where listed.

### Google Business Profile
- Confirmed **5-star Google rating** referenced by third-party aggregators.
- The firm appears in Google Maps results (place ID `ChIJJ3nccM-gJoYRCtZT3fhLdXY` confirmed).
- A GBP exists and is active.
- **Unknown:** Whether GBP has complete categories, services, posts, photos, Q&A, and service area fully configured.

### Local Keyword Targeting
- Homepage title includes "Baton Rouge, LA" — **Good baseline.**
- Service area pages or parish-specific landing pages (e.g., "Livingston Parish Family Law Attorney") are **absent** — significant opportunity given the firm's stated multi-parish service area.
- Spanish-language landing page absent — **major missed opportunity** given bilingual differentiator.

### Local Schema Markup
- **None detected.** `LegalService` + `LocalBusiness` schema with address, phone, geo-coordinates, service areas, and attorney credentials would significantly boost local pack visibility.

### Citations Summary

| Directory | Listed? | Notes |
|-----------|---------|-------|
| Avvo | ✅ Yes | 9.0 rating, 38 reviews, 4.8/5.0 — strong |
| Yellow Pages | ✅ Yes | 5-star, (225) 663-2247 |
| BBB | ✅ Yes | Listed |
| Martindale.com | ✅ Yes | Profile exists |
| Lawful.com | ✅ Yes | Family law category |
| ReachAttorneys.com | ✅ Yes | Listed |
| Google Maps / Waze | ✅ Yes | Place ID confirmed |
| ExploreLawyers.com | ✅ Yes | Listed |
| LinkedIn | ✅ Yes | Company + personal profile |
| **Justia** | ❌ Not confirmed | Dominates legal SERPs — missing |
| **FindLaw** | ❌ Not confirmed | High DA — missing |
| **SuperLawyers** | ❌ Not confirmed | Prestigious — missing |
| **Yelp** | ❌ Not confirmed | High consumer trust — missing |
| **NOLO** | ❌ Not confirmed | High DA legal resource — missing |
| **Expertise.com** | ❌ Not confirmed | Appears in "best lawyers" SERPs |

---

## 5. Off-Page SEO

### Domain Authority Signals
- **Avvo Rating: 9.0/10** with 38 client reviews (4.8/5.0) — strong authority signal in legal SEO
- **Google: 5 stars** — positive review signal
- **BBB: Listed** — trust signal
- **Martindale: Listed** — major legal directory backlink
- **divorcelawyersbr.com:** A separate domain that appears to be a satellite site — creates link splitting risks (see Recommendation #9)
- **attorneyteresalhatfield.wordpress.com:** Old WordPress blog/profile — may point links to main site; if outdated, could be a liability

### Social Media
- **LinkedIn (Personal):** `linkedin.com/in/teresa-hatfield-48525515/` — confirmed active
- **LinkedIn (Company):** `linkedin.com/company/the-hatfield-law-office-llc` — confirmed
- **Twitter/X:** `@teresahatfield` — confirmed profile exists
- **Facebook:** No confirmed Facebook page for The Hatfield Law Office found
- **Instagram:** No confirmed presence

### Brand Confusion Risk
- A Dr. Teresa Hatfield, PhD (psychologist in White Plains, NY) appears on Healthgrades and other platforms. This argues for stronger branded content on the main site to dominate "Teresa Hatfield" search results.

---

## 6. Content Strategy

### Blog / Resource Presence
- **No blog detected** on teresahatfield.com.
- An old WordPress blog (`attorneyteresalhatfield.wordpress.com`) exists but its status is unclear.
- Competitors run active blogs targeting long-tail queries — this site does not.

### High-Value Keyword Opportunities Not Being Captured

| Keyword | Intent | Gap Status |
|---------|--------|------------|
| "divorce attorney Baton Rouge" | High | Partially targeted only |
| "child custody attorney Baton Rouge" | High | No dedicated page |
| "uncontested divorce Baton Rouge" | Medium-High | Not targeted |
| "contested divorce Baton Rouge" | Medium-High | Not targeted |
| "criminal defense attorney Baton Rouge" | High | No dedicated page |
| "DUI attorney Baton Rouge" | Medium | Not targeted |
| "domestic violence attorney Baton Rouge" | Medium | Not targeted |
| "abogado divorcio Baton Rouge" | Medium | **UNTAPPED — bilingual differentiator** |
| "abogada familia Baton Rouge" | Medium | **UNTAPPED** |
| "child support attorney Baton Rouge" | Medium | Not targeted |
| "family law attorney Livingston Parish" | Low-Medium | Not targeted |
| "family law attorney East Baton Rouge" | Medium | Not targeted |

---

## 7. Subdomains

**No subdomains discovered** via search queries.

**Related domains found:**
- `divorcelawyersbr.com` — satellite site for the same firm. Requires strategic management (see Recommendation #9).
- `attorneyteresalhatfield.wordpress.com` — old WordPress profile/blog; status unknown.

---

## 8. Competitive Landscape

### Top Competitors Ranking for Target Keywords

| Competitor | Domain | Key Strength |
|-----------|--------|--------------|
| Ossie Brown Law | ossiebrown.com | Deep content, multiple sub-pages per practice area, active blog |
| Cosenza Law Firm | cosenzalaw.com | 40+ year attorney, deep content, two office locations |
| Magnolia Law | magnolia-law.com | Modern site, active Facebook, 4.6 Google rating |
| Friley & Dugas, LLC | kfrileylaw.com | Since 1984, high local trust, contested divorce focus |
| Louisiana Family Law Firm | thelouisianafamilylawfirm.com | Multi-city coverage |

### Directories Driving Competitor Visibility
- **Justia** — appears at top of SERP for "family law attorney Baton Rouge"; Hatfield Law **not listed**
- **Expertise.com** — appears for "best divorce lawyers Baton Rouge"; Hatfield Law **not listed**
- **SuperLawyers** — 21 Baton Rouge family lawyers listed; Hatfield Law **not listed**

### Competitive Gap Summary
The Hatfield Law Office has strong reputation signals (Avvo 9.0, 38 reviews, 5-star Google, 20+ years, 1,000+ court appearances, bilingual) that **competitors cannot easily match.** However, the website fails to leverage these advantages through:
- Absence from key legal directories
- No content depth to capture long-tail searches
- No blog to build topical authority
- 4-page site vs. competitors' 20–50+ page content architectures

---

## 9. Priority Recommendations — Top 10 Actionable Fixes (Ranked by Impact)

### #1 — Fix the Crawler/Bot Blocking Issue (CRITICAL)
**Impact: Existential | Effort: Medium**
The site returns 403 Forbidden to automated crawlers. If this affects Googlebot, the site cannot be indexed or crawled for updates.
- Check Cloudflare, hosting firewall, or `.htaccess` rules for bot-blocking
- Whitelist Googlebot user-agent
- Verify in Google Search Console whether crawl errors are being reported
- Ensure `robots.txt` and `sitemap.xml` return 200 OK responses

### #2 — Build Out Practice Area Pages (HIGHEST CONTENT IMPACT)
**Impact: Very High | Effort: High**
Create individual pages for every practice area sub-type:
- `/family-law/divorce-attorney-baton-rouge/`
- `/family-law/child-custody-baton-rouge/`
- `/family-law/child-support-baton-rouge/`
- `/family-law/domestic-violence-attorney-baton-rouge/`
- `/criminal-defense/dui-attorney-baton-rouge/`
- `/criminal-defense/criminal-defense-baton-rouge/`

Each page: 800–1,500 words, unique meta title, meta description, H1, H2s, FAQ section, internal links.

### #3 — Add Schema Markup
**Impact: High | Effort: Low**
Implement JSON-LD structured data on the homepage:
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "LegalService"],
  "name": "The Hatfield Law Office",
  "description": "Family law and criminal defense attorney in Baton Rouge, LA. Serving East and West Baton Rouge, Livingston, Ascension, and surrounding parishes.",
  "url": "https://www.teresahatfield.com",
  "telephone": "(225) 663-2247",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2133 Silverside Road, Suite M",
    "addressLocality": "Baton Rouge",
    "addressRegion": "LA",
    "postalCode": "70808",
    "addressCountry": "US"
  },
  "areaServed": [
    "East Baton Rouge Parish", "West Baton Rouge Parish",
    "Livingston Parish", "Lafayette Parish",
    "Iberville Parish", "Ascension Parish"
  ],
  "sameAs": [
    "https://www.avvo.com/attorneys/70808-la-teresa-hatfield-4335823.html",
    "https://www.martindale.com/attorney/teresa-lucia-fiore-hatfield-300687730/"
  ]
}
```
Add `Person` schema on the About page and `FAQPage` schema on service pages.

### #4 — Rewrite All Meta Titles and Add Meta Descriptions
**Impact: High | Effort: Low**
Recommended rewrites:
- **About:** `Teresa L. Hatfield — Baton Rouge Family Law Attorney | 20+ Years Experience`
- **Practice Areas:** `Family Law & Criminal Defense in Baton Rouge, LA | The Hatfield Law Office`
- **Contact:** `Contact a Baton Rouge Family Law Attorney | The Hatfield Law Office`

Write unique 150–160 character meta descriptions for every page with target keyword + CTA.

### #5 — Submit to Missing High-Authority Legal Directories
**Impact: High | Effort: Low**
Priority submissions:
1. **Justia.com** — free, extremely high DA, dominates legal SERPs
2. **FindLaw.com** — high DA, Google trusts it for legal queries
3. **SuperLawyers.com** — prestigious, high visibility
4. **Yelp** — consumer trust, local pack signals
5. **NOLO.com** — high DA, informational traffic
6. **Expertise.com** — appears in "best lawyers" SERPs

Also fix the **70802 vs. 70808 ZIP code** discrepancy on the old Yellow Pages listing.

### #6 — Create a Spanish-Language Landing Page
**Impact: High | Effort: Medium**
Teresa Hatfield's bilingual ability is a significant differentiator with essentially **no competitor targeting it in Spanish.**
- Create `/abogada-familia-baton-rouge/`
- Target: "abogado divorcio Baton Rouge," "abogada custodia hijos Louisiana," "abogada criminal Baton Rouge"
- Spanish meta tags, Spanish H1, Spanish content, hreflang tags
- This is largely uncontested keyword territory

### #7 — Start a Blog Targeting Long-Tail Questions
**Impact: High (Compounding) | Effort: High**
Publish articles Louisiana clients are actively searching:
- "How long does a divorce take in Louisiana?"
- "Can I get sole custody in Louisiana?"
- "What is community property in Louisiana divorce?"
- "DUI penalties in Louisiana first offense"
- "How to file for divorce in East Baton Rouge Parish"

Minimum 1 post/month. Each article builds topical authority and creates backlink-worthy content.

### #8 — Optimize Google Business Profile
**Impact: High | Effort: Medium**
- Ensure **all services** are listed (divorce, custody, DUI, etc.)
- Add **service area parishes** explicitly
- Upload **professional photos** (office exterior, interior, headshot)
- Add **Google Posts** weekly
- Set up **Q&A** with pre-seeded answers
- Enable **Spanish-speaking** attribute
- Primary category: "Family Law Attorney" | Secondary: "Criminal Justice Attorney"

### #9 — Resolve the divorcelawyersbr.com Duplicate Site Issue
**Impact: Medium-High | Effort: Low**
`divorcelawyersbr.com` creates risks:
- Duplicate content if pages mirror teresahatfield.com
- Divided link equity — backlinks split across two domains

**Recommended:** 301 redirect `divorcelawyersbr.com` → `teresahatfield.com` to consolidate all link equity into the primary domain.

### #10 — Add Service-Area / Parish Landing Pages
**Impact: Medium-High | Effort: Medium**
Create geo-targeted pages for the firm's service area:
- "Family Law Attorney Livingston Parish, LA"
- "Divorce Attorney Ascension Parish, LA"
- "Criminal Defense Attorney Lafayette, LA"

These capture lower-competition, high-intent local searches in surrounding parishes.

---

## Summary Scorecard

| Category | Grade | Notes |
|----------|-------|-------|
| Technical SEO | D | 403 crawler block, no sitemap accessible, no schema, only 4 indexed pages |
| On-Page SEO | C- | Homepage title OK; all others generic; no content depth |
| Local SEO | C+ | GBP exists with 5-star rating; NAP mostly consistent; schema absent |
| Off-Page SEO | B- | Strong Avvo 9.0 profile; missing Justia, FindLaw, SuperLawyers, Yelp |
| Content Strategy | F | 4 pages, no blog, no FAQs, no practice sub-pages |
| Competitive Position | C | Strong reputation/credentials; very weak digital presence vs. competitors |

**Overall SEO Health: D+ / ~35 out of 100**

The Hatfield Law Office has excellent offline reputation signals (Avvo 9.0, 4.8/5.0 on 38 reviews, 5-star Google, 20+ years, 1,000+ court appearances, bilingual) that competitors cannot easily match — but the website critically under-leverages them. With technical fixes and content investment, this site has significant upside potential in the Baton Rouge legal market.

---

## Appendix: Confirmed External Profiles

- [Avvo Profile](https://www.avvo.com/attorneys/70808-la-teresa-hatfield-4335823.html) — 9.0 rating, 38 reviews
- [Martindale.com](https://www.martindale.com/attorney/teresa-lucia-fiore-hatfield-300687730/)
- [BBB Profile](https://www.bbb.org/us/la/baton-rouge/profile/lawyers/the-hatfield-law-office-0835-90012379)
- [Yellow Pages](https://www.yellowpages.com/baton-rouge-la/mip/the-hatfield-law-office-469409786)
- [Lawful.com](https://lawful.com/la/baton-rouge/family-law-attorneys/the-hatfield-law-office-llc-C8jrT5M1su)
- [ReachAttorneys.com](https://www.reachattorneys.com/lawyers/louisiana/baton-rouge/the-hatfield-law-office-llc/)
- [ExploreLawyers.com](https://www.explorelawyers.com/attorney/hatfield-teresa-l-236649-baton-rouge)
- [LinkedIn — Company](https://www.linkedin.com/company/the-hatfield-law-office-llc)
- [LinkedIn — Personal](https://www.linkedin.com/in/teresa-hatfield-48525515/)
- [divorcelawyersbr.com](https://divorcelawyersbr.com/)
- [WordPress Blog](https://attorneyteresalhatfield.wordpress.com/about/)

---

*All technical findings are derived from Google's search index, SERP snippet data, directory listings, and observable URL/title patterns. The site's 403 response to crawlers prevented direct HTML inspection. A full technical audit using Screaming Frog and Google Search Console access is recommended to validate and extend these findings.*
