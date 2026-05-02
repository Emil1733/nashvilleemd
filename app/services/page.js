import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Nashville Pool Removal Services | Partial & Full Demolition',
  description: 'Professional Nashville pool demolition and land restoration. We offer engineered partial and full removal services with a focus on limestone management and drainage.',
  keywords: 'pool removal services Nashville, partial pool removal, full pool removal, pool demolition Nashville, Nashville yard restoration',
  alternates: {
    canonical: 'https://nashvillepoolremoval.com/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
