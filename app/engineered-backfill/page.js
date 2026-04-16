import BackfillClient from './BackfillClient';

export const metadata = {
  title: 'Engineered Backfill & Compaction | Nashville Pool Removal Structural Fill',
  description: 'Certified 95% Proctor compaction and structural backfill for Nashville pool removals. We use civil-grade engineered fill to ensure buildable-grade backyard restoration.',
  keywords: 'engineered backfill Nashville, pool fill compaction, structural fill Nashville, 95% Proctor compaction, Nashville pool earthwork',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/engineered-backfill',
  },
};

export default function BackfillPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nashville Engineered Backfill & Compaction",
    "description": "Professional structural backfilling and compaction services for residential pool removals.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nashville Pool Professionals",
      "@id": "https://nashvillepoolremoval.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Nashville"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Compaction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "95% Proctor Compaction Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Structural Engineered Fill"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BackfillClient />
    </>
  );
}
