import FullVsPartialClient from './FullVsPartialClient';

export const metadata = {
  title: 'Full vs Partial Pool Removal Guide | Nashville #1 Comparison',
  description: 'The definitive guide to choosing between full structural extraction and partial abandonment for Nashville pools. Geotechnical tips on compaction, drainage, and property ROI.',
  keywords: 'full pool removal vs partial, pool abandonment Nashville, pool fill-in comparison, Nashville pool demo guide, structural vs non-structural pool removal',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/full-vs-partial-removal',
  },
};

export default function FullVsPartialPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Full vs. Partial Pool Removal: The Nashville Homeowner's Guide",
    "description": "A comprehensive comparison of pool removal methodologies and their long-term impact on property value and land use.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nashville Pool Professionals",
      "@id": "https://nashvillepoolremoval.com/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FullVsPartialClient />
    </>
  );
}
