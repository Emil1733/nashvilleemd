import HendersonvilleClient from './HendersonvilleClient';

export const metadata = {
  title: 'Hendersonville & Gallatin Pool Removal | Lakeside Property Experts',
  description: 'Specialized pool removal for Hendersonville, Gallatin, and Sumner County. Experts in high-water table lakeside demolition and certified structural backfill for lakefront estates.',
  keywords: 'Hendersonville pool removal, Gallatin pool demolition, Sumner County excavation, Old Hickory Lake pool removal, lakeside site restoration TN',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/hendersonville-gallatin',
  },
};

export default function HendersonvillePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hendersonville & Gallatin Lakeside Pool Removal",
    "description": "Professional pool demolition and coastal-grade site restoration for Sumner County and lakefront properties.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nashville Pool Professionals",
      "@id": "https://nashvillepoolremoval.com/#organization"
    },
    "areaServed": [
      { "@type": "City", "name": "Hendersonville" },
      { "@type": "City", "name": "Gallatin" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HendersonvilleClient />
    </>
  );
}
