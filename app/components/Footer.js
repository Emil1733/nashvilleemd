'use client';
import { HardHat } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="dark-bg" style={{padding: '80px 0 20px', borderTop: '1px solid rgba(255,255,255,0.05)'}}>
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="logo white" style={{marginBottom: '20px', color: 'white', display: 'flex', alignItems: 'center'}}>
            <HardHat size={24} style={{marginRight: '10px'}} />
            <span style={{fontWeight: 900, letterSpacing: '-0.5px'}}>Nashville Pool Professionals</span>
          </div>
          <p style={{fontSize: '0.9rem', lineHeight: '1.7', opacity: 0.7}}>The definitive geotechnical authority on residential pool removal and land reclamation in Middle Tennessee.</p>
          <div className="badge success" style={{display: 'inline-block', marginTop: '20px', background: 'rgba(51,207,102,0.1)', color: '#51cf66'}}>Licensed & Bonded TN</div>
        </div>
        
        <div className="footer-col">
          <h4 style={{marginBottom: '25px', fontSize: '1rem', color: 'var(--accent)'}}>Service Areas</h4>
          <ul style={{fontSize: '0.9rem', color: '#adb5bd', listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '10px'}}>• Brentwood & Franklin</li>
            <li style={{marginBottom: '10px'}}>• Belle Meade & Oak Hill</li>
            <li style={{marginBottom: '10px'}}>• East Nashville & Sylvan Park</li>
            <li style={{marginBottom: '10px'}}>• Green Hills & Forest Hills</li>
            <li style={{marginBottom: '10px'}}>• Mount Juliet & Lebanon</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{marginBottom: '25px', fontSize: '1rem', color: 'var(--accent)'}}>Quick Links</h4>
          <ul style={{fontSize: '0.9rem', color: '#adb5bd', listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '10px'}}><Link href="/services" style={{color: '#adb5bd'}}>Services Overview</Link></li>
            <li style={{marginBottom: '10px'}}><Link href="/cost" style={{color: '#adb5bd'}}>Nashville Cost Guide</Link></li>
            <li style={{marginBottom: '10px'}}><Link href="/blog/guide" style={{color: '#adb5bd'}}>Authority Guide</Link></li>
            <li style={{marginBottom: '10px'}}><Link href="/contact" style={{color: '#adb5bd'}}>Free Assessment</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{marginBottom: '25px', fontSize: '1rem', color: 'var(--accent)'}}>Contact Info</h4>
          <p style={{fontSize: '1.1rem', fontWeight: 700, marginBottom: '5px'}}>📞 (615) 398-3421</p>
          <p style={{fontSize: '0.85rem', color: '#adb5bd'}}>24-Hour Geotechnical Response</p>
        </div>
      </div>
      
      <div className="footer-bottom" style={{borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px'}}>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', flexWrap: 'wrap', gap: '20px'}}>
           <p>&copy; {new Date().getFullYear()} Nashville Pool Professionals. All Rights Reserved.</p>
           <p>Engineered by TN Geotechnical Demolition Labs</p>
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom .container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
