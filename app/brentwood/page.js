'use client';
import Link from 'next/link';
import { TrendingUp, ShieldCheck, MapPin, Ruler, HardHat, CheckCircle, ArrowRight, Construction } from 'lucide-react';
import Calculator from '../components/Calculator';

export default function Brentwood() {
  return (
    <div className="location-page fade-in">
      {/* HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Williamson County Specialists</div>
          <h1 className="reveal-top">Pool Removal & Restoration in <span className="text-grad">Brentwood, TN</span></h1>
          <p className="subheadline max-800 mx-auto">Providing expert excavation for Brentwood's unique topography. From sloped estates to rock-shelf properties, we deliver certified soil-stability and landscape-ready restoration.</p>
        </div>
      </section>

      {/* TOPOGRAPHY BLOCK */}
      <section className="topography-focus glass-section">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">Mastering <span className="text-grad">Brentwood's Slopes.</span></h2>
            <p className="authority-text">Many Brentwood properties feature significant elevation changes. Filling a pool on a slope isn't just about dumping dirt—it's about engineering a foundation that won't erode or shift toward your lower neighbors.</p>
            
            <p className="authority-text">We specialize in terraced grading and reinforced backfill protocols that ensure your newly reclaimed land is as stable as the surrounding hillside.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <TrendingUp size={32} className="icon-grad" />
                <h4>Slope Stabilization</h4>
                <p>Advanced terracing and moisture-modulated compaction to prevent lateral soil movement on Brentwood's rolling hills.</p>
              </div>
              <div className="p-item">
                <Construction size={32} className="icon-grad" />
                <h4>Large-Scale Logistics</h4>
                <p>Our fleet is equipped to handle the logistical requirements of large Brentwood estates, including long-reach excavation and sediment control.</p>
              </div>
            </div>
          </div>
          
          <div className="image-side">
            <img src="/brentwood_sloped_pool_removal_1776324613733.png" alt="Sloped Pool Removal Brentwood TN" className="premium-img" />
            <div className="img-caption">Slope management and engineered backfilling on a Governors Club estate.</div>
          </div>
        </div>
      </section>

      {/* WILLIAMSON COUNTY STANDARDS */}
      <section className="county-standards dark-bg">
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">The Williamson <span className="text-grad">Excellence</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Adhering to the highest residential standards in Middle Tennessee.</p>
          </div>

          <div className="process-grid-main">
            <div className="p-item-card">
              <div className="p-num">01</div>
              <h4>Williamson County Permits</h4>
              <p>We handle all Brentwood City and Williamson County permit filings, ensuring your property records are 100% accurate and legacy-ready.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">02</div>
              <h4>95% Proctor Density</h4>
              <p>We don't just fill; we engineer. Our compaction levels exceed local building requirements for secondary structures.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">03</div>
              <h4>Advanced Drainage</h4>
              <p>Custom-designed drainage layers prevent water pooling on sloped lots, protecting your main foundation from hydrostatic pressure.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">04</div>
              <h4>Professional Clean-Site</h4>
              <p>Our "Leave No Trace" protocol means we haul away all debris and leave your estate ready for immediate sod or hardscaping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-calc-section" style={{padding: '100px 0'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Reclaim Your <span className="text-grad">Acreage.</span></h2>
            <p className="large-p mb-40">Stop paying for pool maintenance and start enjoying your full property. Ideal for adding ADUs, gardens, or sweeping lawn views.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Fully Bonded & Insured Nashville Corp</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Specialized Williamson County Logistics</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Structural-Grade Restoration Guarantee</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Request Site Consultation <ArrowRight size={18} /></Link>
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
