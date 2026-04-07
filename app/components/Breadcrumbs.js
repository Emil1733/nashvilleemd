'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter((s) => s);
  
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb" style={{paddingTop: '20px', paddingBottom: '10px', fontSize: '0.85rem'}}>
      <ol style={{display: 'flex', listStyle: 'none', padding: 0, margin: 0, alignItems: 'center', gap: '8px', color: 'var(--secondary)'}}>
        <li>
          <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary)', fontWeight: 600}}>
            <Home size={14} /> Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          const isLast = index === segments.length - 1;
          const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

          return (
            <li key={href} style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <ChevronRight size={14} />
              {isLast ? (
                <span style={{fontWeight: 700, color: 'var(--dark)'}}>{label}</span>
              ) : (
                <Link href={href} style={{color: 'var(--primary)', fontWeight: 600}}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
      <style jsx>{`
        .breadcrumbs { opacity: 0.8; }
        .breadcrumbs a:hover { color: var(--accent) !important; text-decoration: underline; }
      `}</style>
    </nav>
  );
}
