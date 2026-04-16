'use client';
import Link from 'next/link';
import { Ruler, ShieldCheck, MapPin, HardHat, CheckCircle, ArrowRight, Truck, Construction, Box, Zap, Compass } from 'lucide-react';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorityHub from '../components/AuthorityHub';

export default function GreenHillsOakHill() {
  return (
    <div className="location-page fade-in">
      <Breadcrumbs items={[{ label: 'Green Hills Authority' }]} />
      {/* HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Established Nashville Neighborhoods</div>
          <h1 className="reveal-top">Pool Removal in <span className="text-grad">Green Hills & Oak Hill</span></h1>
          <p className="subheadline max-800 mx-auto">Specialized removal for Nashville's premier residential corridors. From Burton Hills to Tyne Blvd, we master the challenges of tight-access lots and urban infill with surgical precision.</p>
        </div>
      </section>

      {/* CALCULATOR / CTA SPLIT - MOVED TO TOP */}
      <section className="cta-calc-section" style={{padding: '60px 0', background: 'var(--light)', borderBottom: '1px solid var(--border)'}}>
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
            <Calculator variant="light" source="green_hills_location" />
          </div>
        </div>
      </section>

      {/* TIGHT ACCESS BLOCK */}
      <section className="tight-access-focus glass-section">
        <div className="container grid-split">
          <div className="image-side">
            <img src="/green_hills_tight_access_pool_removal_1776324688253.png" alt="Tight Access Pool Removal Green Hills Nashville" className="premium-img" />
            <div className="img-caption">Mini-excavation equipment navigating a 48-inch side-yard clearance.</div>
          </div>
          <div className="content">
            <h2 className="section-title">The <span className="text-grad">Tight-Access</span> Specialists.</h2>
            <p className="authority-text">Green Hills and Oak Hill are home to some of Nashville's most beautiful—and densest—residential lots. Standard demolition equipment often can't fit through the narrow side yards common in these areas.</p>
            
            <p className="authority-text">We utilize a fleet of specialized mini-excavators and motorized track-barrows that allow us to execute full pool removals through gaps as narrow as 42 inches without removing fences.</p>
            
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

      {/* URBAN INFILL MATRIX */}
      <section className="protection-matrix dark-bg" style={{padding: '80px 0'}}>
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">Urban <span className="text-grad">Restoration Matrix</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Solving the logistical hurdles of Nashville's established neighborhoods.</p>
          </div>
          <div className="hub-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px'}}>
             <div className="v-card" style={{background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <Box className="icon-grad mb-20" />
                <h4 style={{color: 'white', marginBottom: '10px'}}>Zero-Fence Removal</h4>
                <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem'}}>42-inch machinery that fits through standard pedestrian gates.</p>
             </div>
             <div className="v-card" style={{background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <Zap className="icon-grad mb-20" />
                <h4 style={{color: 'white', marginBottom: '10px'}}>Urban Utility Log</h4>
                <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem'}}>Certified mapping of aging Davidson County sewer and gas lines.</p>
             </div>
             <div className="v-card" style={{background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <MapPin className="icon-grad mb-20" />
                <h4 style={{color: 'white', marginBottom: '10px'}}>Corridor Access</h4>
                <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem'}}>Specialized traffic management for Hillsboro Pike and Tyne Blvd egress.</p>
             </div>
          </div>
        </div>
      </section>

      {/* BORDER/NEIGHBORHOODS */}
      <section className="neighborhood-specs glass-section">
        <div className="container">
          <div className="text-center mb-60">
             <h2 className="section-title">Nashville <span className="text-grad">Metro Focus</span></h2>
             <p>Serving the high-density residential corridors of Metro Nashville.</p>
          </div>
          <div className="neighborhood-grid-4" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px'}}>
             <div className="n-card text-center" style={{padding: '30px', background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow-md)'}}><h4>Burton Hills</h4></div>
             <div className="n-card text-center" style={{padding: '30px', background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow-md)'}}><h4>Tyne Blvd</h4></div>
             <div className="n-card text-center" style={{padding: '30px', background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow-md)'}}><h4>Abbot-Martin</h4></div>
             <div className="n-card text-center" style={{padding: '30px', background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow-md)'}}><h4>Forrest Hills</h4></div>
          </div>
        </div>
      </section>

      <AuthorityHub />

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

        @media (max-width: 1024px) {
           .grid-split, .points-grid-responsive, .neighborhood-grid-4, .hub-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
           .location-page h1 { font-size: 2.22rem !important; }
           .image-side { order: 2; margin-top: 40px; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
