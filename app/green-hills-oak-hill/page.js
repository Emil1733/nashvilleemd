import GreenHillsClient from './GreenHillsClient';

export const metadata = {
  title: 'Green Hills & Oak Hill Pool Removal | Tight-Access Experts',
  description: 'Specialized pool removal for high-density Nashville neighborhoods. Experts in 42-inch tight-access demolition, urban utility protection, and low-impact site restoration.',
  keywords: 'Green Hills pool removal, Oak Hill pool demolition, tight access excavation Nashville, urban pool removal, Nashville high density demolition',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/green-hills-oak-hill',
  },
};

export default function GreenHillsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Green Hills & Oak Hill Tight-Access Pool Removal",
    "description": "Specialized low-impact pool demolition for the Green Hills and Oak Hill corridors of Nashville.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nashville Pool Professionals",
      "@id": "https://nashvillepoolremoval.com/#organization"
    },
    "areaServed": [
      { "@type": "City", "name": "Green Hills" },
      { "@type": "City", "name": "Oak Hill" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GreenHillsClient />
    </>
  );
}
