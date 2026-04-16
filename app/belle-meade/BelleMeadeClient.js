'use client';
import Link from 'next/link';
import { ShieldCheck, MapPin, Ruler, HardHat, CheckCircle, ArrowRight, TreePine, Landmark } from 'lucide-react';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorityHub from '../components/AuthorityHub';

export default function BelleMeade() {
  return (
    <div className="location-page fade-in">
      <Breadcrumbs items={[{ label: 'Belle Meade Authority' }]} />
      {/* HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Luxury Estate Specialists</div>
          <h1 className="reveal-top">White-Glove Pool Removal in <span className="text-grad">Belle Meade, TN</span></h1>
          <p className="subheadline max-800 mx-auto">Providing the highest standard of site restoration for Nashville's most prestigious estates. We specialize in zero-impact logistics and heritage landscape preservation.</p>
        </div>
      </section>

      {/* CALCULATOR / CTA SPLIT - MOVED TO TOP */}
      <section className="cta-calc-section" style={{padding: '60px 0', background: 'var(--light)', borderBottom: '1px solid var(--border)'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Reclaim Your <span className="text-grad">Estate Garden.</span></h2>
            <p className="large-p mb-40">Ready to transform your legacy pool into a sprawling lawn or custom hardscape? Our Belle Meade team delivers surgical precision with zero site damage.</p>
            <Link href="/contact" className="btn btn-primary btn-xl">Request Private Consultation <ArrowRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" source="belle_meade_location" />
          </div>
        </div>
      </section>

      {/* ESTATE FOCUS BLOCK */}
      <section className="estate-focus glass-section">
        <div className="container grid-split">
          <div className="image-side">
            <img src="/belle_meade_luxury_pool_removal_1776324545793.png" alt="Luxury Pool Removal Belle Meade" className="premium-img" />
            <div className="img-caption">Precision removal on a historic Belle Meade property, preserving 100-year-old oak canopies.</div>
          </div>
          <div className="content">
            <h2 className="section-title">The Belle Meade <span className="text-grad">Difference.</span></h2>
            <p className="authority-text">Estate owners in the 37205 ZIP code face unique challenges: strict historical setbacks, narrow gated entries, and high-value heritage trees. Standard pool demolition is too aggressive for these environments.</p>
            
            <p className="authority-text">We employ a "Surgical Demolition" protocol, using smaller, rubber-tracked equipment that fits through standard estate gates while providing the same structural compaction as industrial machinery.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <TreePine size={32} className="icon-grad" />
                <h4>Arborist-Led Sites</h4>
                <p>We work alongside arborists to ensure heavy machinery never compacts the root zones of historic Belle Meade oaks.</p>
              </div>
              <div className="p-item">
                <Landmark size={32} className="icon-grad" />
                <h4>Historical Setbacks</h4>
                <p>Expert navigation of the City of Belle Meade's specific zoning and lot-coverage regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTATE PRESERVATION MATRIX */}
      <section className="protection-matrix dark-bg" style={{padding: '80px 0'}}>
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">Estate <span className="text-grad">Preservation Standards</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Ensuring zero-impact restoration for Nashville's premier residences.</p>
          </div>
          <div style={{overflowX: 'auto', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}>
              <thead>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Protocol Item</th>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Standard Contractor</th>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Belle Meade Spec (Ours)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Dust Mitigation</td>
                  <td style={{padding: '15px'}}>Occasional Hosing</td>
                  <td style={{padding: '15px'}}>HEPA Water-Mist System</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Lawn Protection</td>
                  <td style={{padding: '15px'}}>Plywood Boards</td>
                  <td style={{padding: '15px'}}>High-Density AlturnaMats</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Noise Control</td>
                  <td style={{padding: '15px'}}>Standard Diesel</td>
                  <td style={{padding: '15px'}}>Low-Decibel Tier 4 Final Fleet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" style={{padding: '100px 0'}}>
        <div className="container max-800">
          <h2 className="section-title text-center mb-60">Belle Meade <span className="text-grad">Restoration FAQ</span></h2>
          <div className="faq-list" style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Will your machines fit through my 4-foot pedestrian gate?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Yes. We utilize specialized mini-excavators as narrow as 36 inches specifically for Belle Meade transit routes, avoiding the need to dismantle historic stone walls or iron fencing.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Do you handle the City of Belle Meade permit process?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Absolutely. We are familiar with the specific variance requirements and architectural reviews unique to Belle Meade City Hall, ensuring 100% legal compliance.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Can we plant a new garden exactly where the pool was?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Yes. Our "Garden-Ready" backfill option includes a deep-layer organic topsoil cap, perfectly conditioned for the lush landscaping typical of Nashville's premier estates.</p>
             </div>
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
           .grid-split, .points-grid-responsive { grid-template-columns: 1fr !important; gap: 40px !important; }
           .location-page h1 { font-size: 2.22rem !important; }
           .image-side { order: 2; margin-top: 40px; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
