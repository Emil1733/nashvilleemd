import DeckCopingClient from './DeckCopingClient';

export const metadata = {
  title: 'Nashville Pool Deck & Coping Removal | Hardscape Demo',
  description: 'Specialized demolition for concrete pool decks, coping stones, and tile. We provide precision removal and material recycling for Nashville backyard renovations.',
  keywords: 'pool deck removal Nashville, coping stone removal, Nashville hardscape demolition, pool tile removal, concrete recycling Nashville',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/deck-and-coping-removal',
  },
};

export default function DeckCopingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nashville Pool Deck & Coping Demolition",
    "description": "Precision hardscape removal and concrete recycling services for residential pool sites in Nashville.",
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
      <DeckCopingClient />
    </>
  );
}
