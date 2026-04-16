import OutdoorPrepClient from './OutdoorPrepClient';

export const metadata = {
  title: 'Nashville Outdoor Living Prep | Building-Ready Garden Spaces',
  description: 'Transform your Nashville backyard after pool removal. Specialists in engineered compaction, build-ready grading, and landscape foundation preparation for ADUs and pavilions.',
  keywords: 'Nashville outdoor living, pool removal backyard restoration, building ready land Nashville, pool fill-in landscaping, Nashville patio preparation',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/outdoor-living-prep',
  },
};

export default function OutdoorPrepPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nashville Outdoor Living Prep & Foundation Restoration",
    "description": "Professional ground stabilization and foundation prep for backyards following pool removal.",
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
      <OutdoorPrepClient />
    </>
  );
}
