import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Nashville Pool Professionals | Geotechnical Authority',
  description: 'The leading Nashville authority on pool removal and land reclamation. Over 350 yards reclaimed with a 95% soil compaction guarantee and limestone expertise.',
  keywords: 'about Nashville pool professionals, Nashville demolition company, TN pool removal experts, Nashville geotechnical specialists',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
