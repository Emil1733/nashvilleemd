'use client';
import Link from 'next/link';
import { TrendingUp, ShieldCheck, MapPin, Ruler, HardHat, CheckCircle, ArrowRight, Construction, Mountain, Compass } from 'lucide-react';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorityHub from '../components/AuthorityHub';

export default function Brentwood() {
  return (
    <div className="location-page fade-in">
      <Breadcrumbs items={[{ label: 'Brentwood Authority' }]} />
      {/* HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Williamson County Specialists</div>
          <h1 className="reveal-top">Pool Removal & Restoration in <span className="text-grad">Brentwood, TN</span></h1>
          <p className="subheadline max-800 mx-auto">Providing expert excavation for Brentwood's unique topography. From the Governors Club to Annandale, we deliver certified soil-stability and landscape-ready restoration.</p>
        </div>
      </section>

      {/* CALCULATOR / CTA SPLIT - MOVED TO TOP */}
      <section className="cta-calc-section" style={{padding: '60px 0', background: 'var(--light)', borderBottom: '1px solid var(--border)'}}>
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
            <Calculator variant="light" source="brentwood_location" />
          </div>
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

      {/* BRENTWOOD EXCELLENCE MATRIX */}
      <section className="protection-matrix dark-bg" style={{padding: '80px 0'}}>
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">Brentwood <span className="text-grad">Topographic Standards</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Engineering stability for Williamson County's unique landscapes.</p>
          </div>
          <div style={{overflowX: 'auto', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}>
              <thead>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Service Detail</th>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Standard Protocol</th>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Brentwood Estate Spec</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Compaction</td>
                  <td style={{padding: '15px'}}>85% Standard</td>
                  <td style={{padding: '15px'}}>95% Structural Grade</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Erosion Control</td>
                  <td style={{padding: '15px'}}>Silt Fencing</td>
                  <td style={{padding: '15px'}}>Advanced Hydro-Binding</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Rock Handling</td>
                  <td style={{padding: '15px'}}>Surface Clearing</td>
                  <td style={{padding: '15px'}}>Hydraulic Shelf Breaking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="neighborhood-specs glass-section">
        <div className="container">
          <div className="text-center mb-60">
             <h2 className="section-title">Serving All <span className="text-grad">Brentwood Enclaves</span></h2>
             <p>Hyper-local expertise in Williamson County logistics.</p>
          </div>
          <div className="neighborhood-grid-4" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px'}}>
             <div className="n-card text-center" style={{padding: '30px', background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow-md)'}}><h4>Governors Club</h4></div>
             <div className="n-card text-center" style={{padding: '30px', background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow-md)'}}><h4>Annandale</h4></div>
             <div className="n-card text-center" style={{padding: '30px', background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow-md)'}}><h4>Tabbleside</h4></div>
             <div className="n-card text-center" style={{padding: '30px', background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow-md)'}}><h4>Brentwood Hills</h4></div>
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
