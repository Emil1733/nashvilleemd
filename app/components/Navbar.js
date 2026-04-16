'use client';
import { useState, useEffect } from 'react';
import { HardHat, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header className="main-header dark-bg">
        <div className="container header-content" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <a href="/" className="logo" style={{display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 800}}>
            <HardHat size={28} className="icon-grad" />
            <span style={{color: 'white'}}>Nashville Pool <span className="text-grad">Professionals</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul style={{display: 'flex', listStyle: 'none', gap: '30px', alignItems: 'center'}}>
              <li className="has-dropdown">
                <a href="/services" style={{color: 'white', fontWeight: 600}}>Services</a>
                <div className="dropdown">
                   <a href="/limestone-excavation">Limestone Excavation</a>
                   <a href="/engineered-backfill">Engineered Backfill</a>
                   <a href="/nashville-drainage">Stormwater & Drainage</a>
                   <a href="/outdoor-living-prep">Outdoor Living Prep</a>
                   <a href="/pool-removal-permits">Permits & Regulations</a>
                </div>
              </li>
              <li className="has-dropdown">
                <a href="#" style={{color: 'white', fontWeight: 600}}>Service Areas</a>
                <div className="dropdown">
                   <a href="/belle-meade">Belle Meade</a>
                   <a href="/brentwood">Brentwood</a>
                   <a href="/franklin">Franklin</a>
                   <a href="/hendersonville-gallatin">Hendersonville</a>
                   <a href="/green-hills-oak-hill">Green Hills</a>
                </div>
              </li>
              <li><a href="/cost" style={{color: 'white', fontWeight: 600}}>Cost Guide</a></li>
              <li><a href="/blog/guide" style={{color: 'white', fontWeight: 600}}>Authority Guide</a></li>
              <li><a href="/about" style={{color: 'white', fontWeight: 600}}>About</a></li>
              <li><a href="/contact" className="btn btn-accent" style={{padding: '12px 24px', fontSize: '0.85rem'}}>Get Estimate</a></li>
            </ul>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="hamburger-btn" 
            onClick={() => setIsOpen(true)}
            style={{background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none'}}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR OVERLAY */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(false)}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
          background: 'rgba(0,0,0,0.5)', zIndex: 999, transition: '0.3s', 
          opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'all' : 'none',
          backdropFilter: 'blur(5px)'
        }}
      ></div>

      {/* MOBILE SIDEBAR BODY */}
      <div 
        className={`mobile-sidebar ${isOpen ? 'active' : ''}`}
        style={{
          position: 'fixed', top: 0, right: isOpen ? 0 : '-320px', width: '320px', 
          height: '100%', background: 'white', zIndex: 1000, transition: '0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: '40px', display: 'flex', flexDirection: 'column',
          boxShadow: isOpen ? '-20px 0 60px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <button 
          onClick={() => setIsOpen(false)}
          style={{position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'var(--secondary)', cursor: 'pointer'}}
        >
          <X size={32} />
        </button>

        <div className="sidebar-logo" style={{marginBottom: '40px'}}>
             <HardHat size={32} className="icon-grad" style={{marginBottom: '10px'}} />
             <div style={{fontSize: '1.2rem', fontWeight: 900}}>Nashville Pool <br/><span className="text-grad">Professionals</span></div>
        </div>

        <nav className="mobile-nav-list" style={{display: 'flex', flexDirection: 'column', gap: '25px', fontSize: '1.1rem', fontWeight: 700}}>
          <a href="/services" onClick={() => setIsOpen(false)} style={{color: 'var(--dark)'}}>Services</a>
          <a href="/cost" onClick={() => setIsOpen(false)} style={{color: 'var(--dark)'}}>Cost Guide</a>
          <a href="/blog/guide" onClick={() => setIsOpen(false)} style={{color: 'var(--dark)'}}>Authority Guide</a>
          <a href="/about" onClick={() => setIsOpen(false)} style={{color: 'var(--dark)'}}>About</a>
        </nav>

        <div className="sidebar-footer" style={{marginTop: 'auto'}}>
            <a href="/contact" className="btn btn-primary w-full" onClick={() => setIsOpen(false)} style={{justifyContent: 'center'}}>
                Get Free Estimate <ArrowRight size={18} />
            </a>
            <div style={{marginTop: '30px', fontSize: '0.8rem', opacity: 0.6, textAlign: 'center'}}>
                📍 Serving Nashville & Middle TN<br/> (615) 398-3421
            </div>
        </div>
      </div>

      <style jsx>{`
        .has-dropdown { position: relative; padding: 10px 0; }
        .dropdown { 
          position: absolute; top: 100%; left: 0; background: rgba(255,255,255,0.95); 
          backdrop-filter: blur(10px); min-width: 200px; padding: 15px 0; 
          border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          display: none; flex-direction: column; z-index: 100;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .has-dropdown:hover .dropdown { display: flex; }
        .dropdown a { 
          padding: 10px 20px; color: var(--dark); font-size: 0.9rem; 
          font-weight: 500; transition: 0.2s;
        }
        .dropdown a:hover { color: var(--primary); background: rgba(0,0,0,0.02); padding-left: 25px; }

        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }

        .mobile-nav-list a { transition: 0.3s; }
        .mobile-nav-list a:hover { color: var(--primary); padding-left: 10px; }
      `}</style>
    </>
  );
}
