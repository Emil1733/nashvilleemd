import DrainageClient from './DrainageClient';

export const metadata = {
  title: 'Nashville Stormwater & Drainage Engineering | MWS Compliant',
  description: 'Proactive drainage planning and stormwater management for Nashville pool removals. We prevent backyard swamp conditions using vertical rock fracturing and engineered stone corridors.',
  keywords: 'Nashville stormwater management, pool removal drainage, MWS compliance Nashville, backyard drainage Tennessee, French drain Nashville',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/nashville-drainage',
  },
};

export default function DrainagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nashville Pool Removal Drainage Engineering",
    "description": "Geotechnical hydrological management and stormwater compliance for pool demolition sites in Nashville.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nashville Pool Professionals",
      "@id": "https://nashvillepoolremoval.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Nashville"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DrainageClient />
    </>
  );
}
