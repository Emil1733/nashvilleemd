import LimestoneClient from './LimestoneClient';

export const metadata = {
  title: 'Central Basin Limestone Excavation | Nashville Pool Removal Rock Breaking',
  description: 'Specialized hydraulic rock breaking and limestone excavation for Nashville pool removals. We navigate the Central Basin bedrock with precision equipment and geotechnical expertise.',
  keywords: 'limestone excavation Nashville, rock breaking Nashville, Nashville bedrock pool removal, Central Basin geology, hydraulic hammer Nashville',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/limestone-excavation',
  },
};

export default function LimestonePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nashville Limestone Excavation & Rock Breaking",
    "description": "Specialized geotechnical excavation for pool removals in the Nashville Central Basin.",
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
      "name": "Rock Excavation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hydraulic Rock Breaking"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Geological Bedrock Assessment"
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
      <LimestoneClient />
    </>
  );
}
