import FranklinClient from './FranklinClient';

export const metadata = {
  title: 'Franklin Pool Removal & Site Restoration | Williamson County #1',
  description: 'Precision pool demolition for Franklin and Williamson County. Experts in addressing the Franklin blue rock shelf and providing building-ready land restoration.',
  keywords: 'Franklin pool removal, Williamson County excavation, Westhaven pool demolition, Franklin bedrock removal, pool fill-in Franklin TN',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/franklin',
  },
};

export default function FranklinPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Franklin Pool Removal & Restoration",
    "description": "Engineered pool demolition and site restoration specifically for Franklin and Williamson County homeowners.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nashville Pool Professionals",
      "@id": "https://nashvillepoolremoval.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Franklin"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FranklinClient />
    </>
  );
}
