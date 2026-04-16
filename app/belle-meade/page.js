import BelleMeadeClient from './BelleMeadeClient';

export const metadata = {
  title: 'Belle Meade Pool Removal Specialists | Luxury Estate Restoration',
  description: 'Premium pool removal and landscape restoration for Belle Meade estates. We specialized in structural demolition, heritage tree protection, and white-glove debris management.',
  keywords: 'Belle Meade pool removal, luxury pool demolition Nashville, estate landscape restoration, Belle Meade property improvement, pool fill-in Belle Meade',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/belle-meade',
  },
};

export default function BelleMeadePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Belle Meade Estate Pool Removal",
    "description": "High-end, low-impact pool demolition and site restoration specifically for the Belle Meade community.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nashville Pool Professionals",
      "@id": "https://nashvillepoolremoval.com/#organization"
    },
    "areaServed": {
      "@type": "Neighborhood",
      "name": "Belle Meade"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BelleMeadeClient />
    </>
  );
}
