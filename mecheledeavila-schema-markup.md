# Schema Markup — mecheledeavila-lcsw.com
**How to add:** In Squarespace, go to Pages → (select page) → Page Settings → Advanced → Code Injection → paste in the `<head>` field. Repeat for each page as noted below.

---

## SCHEMA 1 — WebSite (add to HOMEPAGE ONLY)
Enables the Google sitelinks search box and confirms the site's official URL.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mechele de Avila Evans, LCSW, LLC",
  "url": "https://www.mecheledeavila-lcsw.com/"
}
</script>
```

---

## SCHEMA 2 — LocalBusiness + MedicalBusiness (add to HOMEPAGE ONLY)
The most important schema for local SEO. Tells Google exactly who this business is, where it's located, and what it does.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "name": "Mechele de Avila Evans, LCSW, LLC",
  "description": "Individual therapy in Baton Rouge, LA specializing in anxiety, depression, trauma, EMDR, IFS, and couples therapy. Telehealth available. Serving Louisiana.",
  "url": "https://www.mecheledeavila-lcsw.com/",
  "telephone": "(225) 366-8606",
  "email": "mechele@mecheledeavila-lcsw.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1082 Havenwood Drive",
    "addressLocality": "Baton Rouge",
    "addressRegion": "LA",
    "postalCode": "70815",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.4515,
    "longitude": -91.0845
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Check, Credit Card, Insurance",
  "areaServed": [
    {
      "@type": "City",
      "name": "Baton Rouge",
      "sameAs": "https://en.wikipedia.org/wiki/Baton_Rouge,_Louisiana"
    },
    {
      "@type": "State",
      "name": "Louisiana"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Therapy Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Individual Therapy"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Couples Therapy"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "EMDR Therapy"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Internal Family Systems (IFS) Therapy"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Gottman Method Couples Therapy"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Telehealth Therapy"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Trauma Therapy"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Anxiety Therapy"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Depression Therapy"}}
    ]
  },
  "sameAs": [
    "https://www.facebook.com/PsychotherapywithMechele/",
    "https://www.linkedin.com/in/mechele-evans-82850116/",
    "https://www.psychologytoday.com/us/therapists/mechele-de-avila-lcsw-llc-baton-rouge-la/173463",
    "https://www.emdria.org/directory/people/mechele-de-avila-evans/",
    "https://ifs-institute.com/practitioners/all/123242"
  ]
}
</script>
```

> **Note:** Replace `mechele@mecheledeavila-lcsw.com` with her actual email address. Confirm the geo coordinates are accurate for the office location.

---

## SCHEMA 3 — Person (add to ABOUT page only)
Links the therapist as a real, credentialed person to the business — helps Google build a knowledge panel.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mechele de Avila Evans",
  "givenName": "Mechele",
  "familyName": "de Avila Evans",
  "jobTitle": "Licensed Clinical Social Worker",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "Licensed Clinical Social Worker (LCSW)",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Louisiana State Board of Social Work Examiners"
      }
    }
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "EMDR International Association (EMDRIA)",
      "url": "https://www.emdria.org/"
    },
    {
      "@type": "Organization",
      "name": "IFS Institute",
      "url": "https://ifs-institute.com/"
    }
  ],
  "worksFor": {
    "@type": "LocalBusiness",
    "name": "Mechele de Avila Evans, LCSW, LLC",
    "url": "https://www.mecheledeavila-lcsw.com/"
  },
  "url": "https://www.mecheledeavila-lcsw.com/about",
  "sameAs": [
    "https://www.linkedin.com/in/mechele-evans-82850116/",
    "https://www.psychologytoday.com/us/therapists/mechele-de-avila-lcsw-llc-baton-rouge-la/173463",
    "https://www.emdria.org/directory/people/mechele-de-avila-evans/"
  ]
}
</script>
```

---

## SCHEMA 4 — FAQPage (add to FAQ page only)
Enables FAQ rich results directly in Google — your answers can show up expanded under the search listing without the user clicking through.

**Replace the questions/answers below with the actual content from her FAQ page.**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you accept insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, I accept select insurance plans including Blue Cross Blue Shield PPO. Please contact me to confirm whether your specific plan is accepted before scheduling."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer telehealth therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, I offer secure telehealth sessions for clients located anywhere in Louisiana. Telehealth sessions are conducted via a HIPAA-compliant video platform."
      }
    },
    {
      "@type": "Question",
      "name": "What is your cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please provide at least 24 hours' notice if you need to cancel or reschedule your appointment. Late cancellations or no-shows may be subject to a fee."
      }
    },
    {
      "@type": "Question",
      "name": "What is EMDR therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy used to help people heal from trauma and distressing life experiences. It uses bilateral stimulation to help the brain reprocess stuck or painful memories."
      }
    },
    {
      "@type": "Question",
      "name": "What is Internal Family Systems (IFS) therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Internal Family Systems (IFS) is a non-pathologizing therapy model that views the mind as made up of different 'parts,' each with their own perspectives and roles. IFS helps you develop a compassionate relationship with all parts of yourself to promote healing and self-leadership."
      }
    },
    {
      "@type": "Question",
      "name": "How long are therapy sessions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard therapy sessions are 50 minutes. Extended sessions may be available upon request."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach out through the contact form on this website or call (225) 366-8606. We'll schedule an initial consultation to determine if we're a good fit and discuss your goals for therapy."
      }
    }
  ]
}
</script>
```

> **Important:** Update every question and answer to match the actual content on her FAQ page. Inaccurate schema can be flagged by Google.

---

## SCHEMA 5 — BreadcrumbList (add to ALL interior pages)
Helps Google display breadcrumb navigation in search results (e.g., Home > Services > Anxiety Therapy).

**You'll need a separate version for each page — change the `name` and `item` values for each page. Examples below:**

### Anxiety page (`/anxiety/`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.mecheledeavila-lcsw.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Anxiety Therapy",
      "item": "https://www.mecheledeavila-lcsw.com/anxiety/"
    }
  ]
}
</script>
```

### Trauma page (`/trauma/`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.mecheledeavila-lcsw.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Trauma Therapy",
      "item": "https://www.mecheledeavila-lcsw.com/trauma/"
    }
  ]
}
</script>
```

### IFS Therapy page (`/internal-family-systems/`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.mecheledeavila-lcsw.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Internal Family Systems (IFS) Therapy",
      "item": "https://www.mecheledeavila-lcsw.com/internal-family-systems/"
    }
  ]
}
</script>
```

> Follow the same pattern for Depression, Individual Therapy, Telehealth, Suicide Prevention, Fees & Insurance, About, FAQ, and Contact pages — just change position 2's `name` and `item` to match the page.

---

## HOW TO ADD SCHEMA IN SQUARESPACE

1. Log into Squarespace
2. Go to **Pages** in the left sidebar
3. Hover over the page → click the **gear icon** (Page Settings)
4. Click the **Advanced** tab
5. Paste the schema code into the **Header Code Injection** box
6. Click **Save**
7. Repeat for each page

**For site-wide schema** (like Schema 2 — LocalBusiness), you can also add it once via:
- **Settings → Advanced → Code Injection → Header** — this injects it on every page

---

## AFTER ADDING SCHEMA — VERIFY IT

Test each page at: **https://search.google.com/test/rich-results**
- Paste the page URL and run the test
- It will show you which schema types were detected and flag any errors
- Fix any red errors before moving on

Also submit the sitemap (if not already done):
- Go to **Google Search Console → Sitemaps**
- Submit: `https://www.mecheledeavila-lcsw.com/sitemap.xml`

---

## QUICK REFERENCE — Which Schema Goes Where

| Schema Type | Page(s) |
|-------------|---------|
| WebSite | Homepage only |
| LocalBusiness + MedicalBusiness | Homepage only |
| Person | About page only |
| FAQPage | FAQ page only |
| BreadcrumbList | All interior pages (custom per page) |
