import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import { HardHat } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'Nashville Pool Removal & Demolition | Rock & Drainage Specialists',
  description: 'Expert concrete and fiberglass pool removal in Nashville. Specialists in limestone excavation, slope stabilization, and drainage-stable backfill. Most projects 3-5 days.',
  keywords: 'pool removal Nashville, Nashville pool demolition, pool fill-in Nashville, rock excavation Nashville, pool drainage Nashville',
  metadataBase: new URL('https://nashvillepoolremoval.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nashville Pool Professionals",
    "image": "https://nashvillepoolremoval.com/nashville_reclaimed.png",
    "@id": "https://nashvillepoolremoval.com",
    "url": "https://nashvillepoolremoval.com",
    "telephone": "+16153983421",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nashville",
      "addressRegion": "TN",
      "postalCode": "37201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1627,
      "longitude": -86.7816
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <Breadcrumbs />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
