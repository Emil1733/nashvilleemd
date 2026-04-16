'use client';
import Link from 'next/link';
import { Ruler, ShieldCheck, MapPin, HardHat, CheckCircle, ArrowRight, Truck, Construction } from 'lucide-react';
import Calculator from '../components/Calculator';

export default function GreenHillsOakHill() {
  return (
    <div className="location-page fade-in">
      {/* HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Established Nashville Neighborhoods</div>
          <h1 className="reveal-top">Pool Removal in <span className="text-grad">Green Hills & Oak Hill</span></h1>
          <p className="subheadline max-800 mx-auto">Specialized removal for Nashville's premier residential corridors. We master the challenges of tight-access lots, historic preservation, and older pool infrastructure with surgical precision.</p>
        </div>
      </section>

      {/* TIGHT ACCESS BLOCK */}
      <section className="tight-access-focus glass-section">
        <div className="container grid-split">
          <div className="image-side">
            <img src="/green_hills_tight_access_pool_removal_1776324688253.png" alt="Tight Access Pool Removal Green Hills Nashville" className="premium-img" />
            <div className="img-caption">Mini-excavation equipment navigating a 48-inch side-yard clearance in Green Hills.</div>
          </div>
          <div className="content">
            <h2 className="section-title">The <span className="text-grad">Tight-Access</span> Specialists.</h2>
            <p className="authority-text">Green Hills and Oak Hill are home to some of Nashville's most beautiful—and densest—residential lots. Standard demolition equipment often can't fit through the narrow side yards or under low-hanging canopies typical of these areas.</p>
            
            <p className="authority-text">We utilize a fleet of specialized mini-excavators and motorized track-barrows that allow us to execute full pool removals through gaps as narrow as 42 inches without removing fences or damaging your neighbor's property.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Truck size={32} className="icon-grad" />
                <h4>Low-Impact Logistics</h4>
                <p>Rubber-tracked machinery prevents driveway cracking and allows us to operate on turf without leaving permanent ruts.</p>
              </div>
              <div className="p-item">
                <Construction size={32} className="icon-grad" />
                <h4>Infrastructure Care</h4>
                <p>Older pools in Oak Hill often have complex, aging plumbing and gas lines. We use precision hand-tools near utility intersections.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD STANDARDS */}
      <section className="neighborhood-specs dark-bg">
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">The Green Hills <span className="text-grad">Blueprint</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Ensuring your home remains the center of the neighborhood throughout the restoration.</p>
          </div>

          <div className="process-grid-main">
            <div className="p-item-card">
              <div className="p-num">01</div>
              <h4>Zoning Compliance</h4>
              <p>We handle all Metro Nashville residential zoning clearances and setback verifications for your new green space.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">02</div>
              <h4>Utility Safety</h4>
              <p>Specialized locating for older sewer lines and irrigation systems common in established Green Hills estates.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">03</div>
              <h4>Drainage Engineering</h4>
              <p>Custom grading to prevent water runoff into neighboring lots—essential for the dense topography of Oak Hill.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">04</div>
              <h4>Total Site Cleanliness</h4>
              <p>Daily site sweep-downs and debris management to keep your street and property looking pristine during the 5-day project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-calc-section" style={{padding: '100px 0'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Upgrade Your <span className="text-grad">Urban Oasis.</span></h2>
            <p className="large-p mb-40">Trading an old pool for a modern garden or outdoor lounge? We provide the foundation for your next backyard masterpiece.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Specialized Tight-Access Fleet</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Established Nashville Code Expertise</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Structural-Grade Backfill Guarantee</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Book Site Assessment <ArrowRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" />
          </div>
        </div>
      </section>

      <style jsx>{`
        .premium-img { width: 100%; border-radius: 30px; box-shadow: var(--shadow-xl); display: block; }
        .img-caption { margin-top: 15px; font-size: 0.8rem; font-style: italic; color: var(--secondary); text-align: left; }
        .mb-20 { margin-bottom: 20px; }
        .mb-40 { margin-bottom: 40px; }
        .mb-60 { margin-bottom: 60px; }
        .max-800 { max-width: 800px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        .p-item h4 { margin-top: 15px; margin-bottom: 10px; color: var(--dark); font-weight: 800; }
        .p-item p { font-size: 0.9rem; line-height: 1.6; color: var(--secondary); }

        .p-item-card { background: rgba(255,255,255,0.05); padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); position: relative; overflow: hidden; }
        .p-num { font-size: 3rem; font-weight: 900; position: absolute; right: 20px; top: 10px; opacity: 0.1; color: white; }
        .p-item-card h4 { color: white; margin-bottom: 15px; }
        .p-item-card p { font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.6; }

        @media (max-width: 1024px) {
           .grid-split, .points-grid-responsive { grid-template-columns: 1fr !important; gap: 40px !important; }
           .location-page h1 { font-size: 2.22rem !important; }
           .image-side { order: 2; margin-top: 40px; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
