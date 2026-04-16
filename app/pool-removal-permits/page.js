import PermitsClient from './PermitsClient';

export const metadata = {
  title: 'Metro Nashville Pool Removal Permits | MWS & Grading Compliance',
  description: 'Complete guide to pool demolition permits in Metro Nashville and Davidson County. We handle MWS stormwater compliance, erosion control, and grading permits.',
  keywords: 'Nashville pool removal permit, Metro Nashville grading permit, MWS stormwater compliance, Davidson County demolition permit, pool fill-in laws Nashville',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/pool-removal-permits',
  },
};

export default function PermitsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "Metro Nashville Pool Demolition Permitting Assistance",
    "description": "Professional coordination and submittal for Nashville pool removal and grading permits.",
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
      <PermitsClient />
    </>
  );
}
