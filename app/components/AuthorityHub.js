'use client';
import Link from 'next/link';
import { Mountain, Shovel, FileText, MapPin, HardHat, Compass, Droplets, Layers, Hammer } from 'lucide-react';

export default function AuthorityHub() {
  const links = [
    { label: 'Limestone Excavation', href: '/limestone-excavation', icon: <Mountain size={18} /> },
    { label: 'Engineered Backfill', href: '/engineered-backfill', icon: <Shovel size={18} /> },
    { label: 'Permit Regulations', href: '/pool-removal-permits', icon: <FileText size={18} /> },
    { label: 'Stormwater & Drainage', href: '/nashville-drainage', icon: <Droplets size={18} /> },
    { label: 'Outdoor Living Prep', href: '/outdoor-living-prep', icon: <Layers size={18} /> },
    { label: 'Full vs Partial Removal', href: '/full-vs-partial-removal', icon: <HardHat size={18} /> },
    { label: 'Deck & Coping Demo', href: '/deck-and-coping-removal', icon: <Hammer size={18} /> },
    { label: 'Franklin Authority', href: '/franklin', icon: <MapPin size={18} /> },
    { label: 'Belle Meade Authority', href: '/belle-meade', icon: <MapPin size={18} /> },
    { label: 'Brentwood Authority', href: '/brentwood', icon: <MapPin size={18} /> },
    { label: 'Hendersonville Authority', href: '/hendersonville-gallatin', icon: <MapPin size={18} /> },
    { label: 'Green Hills Authority', href: '/green-hills-oak-hill', icon: <MapPin size={18} /> },
  ];

  return (
    <section className="authority-hub dark-bg" style={{padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)'}}>
      <div className="container">
        <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px'}}>
           <Compass className="icon-grad" size={24} />
           <h3 style={{color: 'white', fontSize: '1.2rem', margin: 0}}>Nashville <span className="text-grad">Excellence Network</span></h3>
        </div>
        <div className="hub-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px'}}>
           {links.map((link) => (
             <Link key={link.href} href={link.href} className="hub-link">
                {link.icon} {link.label}
             </Link>
           ))}
        </div>
      </div>
      <style jsx>{`
        .hub-link { 
          display: flex; alignItems: center; gap: 10px; color: rgba(255,255,255,0.6); 
          padding: 15px 20px; background: rgba(255,255,255,0.02); border-radius: 12px;
          font-size: 0.9rem; transition: 0.3s; border: 1px solid rgba(255,255,255,0.05);
        }
        .hub-link:hover { 
          color: white; background: rgba(255,255,255,0.05); 
          border-color: var(--primary); transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .hub-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
