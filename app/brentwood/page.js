import BrentwoodClient from './BrentwoodClient';

export const metadata = {
  title: 'Brentwood Pool Removal & Excavation | Williamson County Experts',
  description: 'Specialized pool removal for Brentwood and Williamson County. Experts in sloped topography, high-trust estate demolition, and certified backyard restoration.',
  keywords: 'Brentwood pool removal, Williamson County pool demolition, pool fill-in Brentwood, sloped yard pool removal, Brentwood property restoration',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/brentwood',
  },
};

export default function BrentwoodPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brentwood Pool Removal & Demolition",
    "description": "Professional pool demolition and structural site restoration for Brentwood and Williamson County.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nashville Pool Professionals",
      "@id": "https://nashvillepoolremoval.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Brentwood"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrentwoodClient />
    </>
  );
}
