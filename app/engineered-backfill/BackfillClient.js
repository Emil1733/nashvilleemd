'use client';
import Link from 'next/link';
import { Shovel, ShieldCheck, Ruler, Droplets, HardHat, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorityHub from '../components/AuthorityHub';

export default function EngineeredBackfill() {
  return (
    <div className="backfill-page fade-in">
      <Breadcrumbs items={[{ label: 'Engineered Backfill' }]} />
      {/* HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Civil Engineering Standards</div>
          <h1 className="reveal-top">Engineered <span className="text-grad">Backfill & Compaction</span></h1>
          <p className="subheadline max-800 mx-auto">The most critical part of pool removal is what you can't see. We provide 95% Proctor compaction to ensure your Nashville property is structurally sound for future construction.</p>
        </div>
      </section>

      {/* CALCULATOR / CTA SPLIT - MOVED TO TOP */}
      <section className="cta-calc-section" style={{padding: '60px 0', background: 'var(--light)', borderBottom: '1px solid var(--border)'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Reclaim Your <span className="text-grad">Stable Land.</span></h2>
            <p className="large-p mb-40">Ready to build an ADU, install a luxury pavilion, or just enjoy a flat, dry backyard? Our <Link href="/outdoor-living-prep" style={{color: 'var(--primary)', textDecoration: 'underline'}}>outdoor living foundation prep</Link> is the solution.</p>
            <Link href="/contact" className="btn btn-accent btn-xl">Get Your Site Assessment <ArrowRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" source="backfill_authority" />
          </div>
        </div>
      </section>

      {/* TECHNICAL MATRIX SECTION */}
      <section className="tech-section glass-section">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">Beyond "Just <span className="text-grad">Dirt."</span></h2>
            <p className="authority-text">Many contractors simply push the pool deck into the hole and cover it with soil. In Nashville's heavy clay environment, this leads to sinkholes and structural failure within 2-3 years.</p>
            
            <p className="authority-text">Our engineering protocol treats your backyard like a building site. We manage moisture content and lift-thickness to deliver a platform ready for ADUs, patios, or home extensions.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Layers size={32} className="icon-grad" />
                <h4>6-Inch Lift Protocol</h4>
                <p>We compact in precise 6-inch increments, using vibratory bridge-foot rollers to ensure zero air-pocket retention.</p>
              </div>
              <div className="p-item">
                <Droplets size={32} className="icon-grad" />
                <h4>Moisture Control</h4>
                <p>Nashville's clay requires specific moisture levels for optimal density. We test every 1,000sqft of surface area.</p>
              </div>
            </div>
          </div>
          <div className="image-side">
             <img src="/nashville_pool_backfill_compaction_1776324399457.png" alt="Engineered Backfill Nashville" className="premium-img" />
             <div className="img-caption">Recent compaction testing on a 95% Proctor density project in Green Hills.</div>
          </div>
        </div>
      </section>

      {/* DATA TABLE SECTION */}
      <section className="data-table-section dark-bg" style={{padding: '80px 0'}}>
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">Soil Engineering <span className="text-grad">Matrix</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Technical specifications for residential land restoration.</p>
          </div>
          
          <div style={{overflowX: 'auto', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}>
              <thead>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Metric</th>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>"Fill Only" (Competitors)</th>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Engineered Standard (Ours)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Standard Proctor Density</td>
                  <td style={{padding: '15px'}}>70% - 80% (Variable)</td>
                  <td style={{padding: '15px'}}>95% ASTM D698</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Lift Thickness</td>
                  <td style={{padding: '15px'}}>12" - 24"</td>
                  <td style={{padding: '15px'}}>Max 6" Per Lift</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Settlement Risk</td>
                  <td style={{padding: '15px'}}>High (2" - 6")</td>
                  <td style={{padding: '15px'}}>Negligible (&lt;0.25")</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" style={{padding: '100px 0'}}>
        <div className="container max-800">
          <h2 className="section-title text-center mb-60">Backfill & <span className="text-grad">Stability FAQ</span></h2>
          <div className="faq-list" style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
              <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Can I build a house on the filled pool area?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Yes, provided you choose our <Link href="/full-vs-partial-removal" style={{color: 'var(--primary)', textDecoration: 'underline'}}>Full Removal vs Partial Removal</Link> guide to ensure you select structural-grade extraction. We provide a compaction certificate that can be submitted to Metro Nashville Codes for building permits.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>What soil do you use?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>We use a specific blend of local Nashville surge rock (for the base) and screened, non-expansive fill soil. This prevents the "sponge effect" typical of unprocessed backyard dirt.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>How do you manage Nashville's heavy clay?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Clay is expansive. We often mix native soil with clean fill or select import material to balance the moisture sensitivity, ensuring it doesn't expand and contract drastically during Tennessee's wet-dry cycles.</p>
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
           .backfill-page h1 { font-size: 2.22rem !important; }
           .image-side { order: 2; margin-top: 40px; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
