export const site = {
  legalBusinessName: "Marley Senior Services, LLC",
  brandName: "Marley Senior Services",
  dbaName: undefined as string | undefined,
  industry: "marketing services",
  website: "https://www.calmarco.com",
  phone: "+1 (970) 218-0705",
  email: undefined as string | undefined, // optional; add if available
  address: {
    country: "United States",
    city: "Fort Worth",
    state: "Texas",
    postalCode: "76116",
  },
  productDescription:
    "We deliver conversion‑focused web applications, digital marketing programs, lead‑generation funnels, and white‑label software for insurance brokers, agents, and agencies.",
  policies: {
    refunds: {
      lastUpdated: "2025-10-16",
    },
    cancellation: {
      lastUpdated: "2025-10-16",
    },
    legal: {
      lastUpdated: "2025-10-16",
    },
    promotions: {
      lastUpdated: "2025-10-16",
    },
    terms: {
      lastUpdated: "2025-10-16",
    },
  },
} as const;

export type SiteConfig = typeof site;
