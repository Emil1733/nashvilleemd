'use client';
import Link from 'next/link';
import { FileText, ShieldCheck, HardHat, Info, Gavel, ClipboardCheck, ArrowRight, MapPin } from 'lucide-react';
import Calculator from '../components/Calculator';

export default function PoolRemovalPermits() {
  return (
    <div className="permits-page fade-in">
      {/* HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Nashville Regulatory Experts</div>
          <h1 className="reveal-top">Metro Nashville <span className="text-grad">Pool Removal Permits</span></h1>
          <p className="subheadline max-800 mx-auto">Navigating Davidson County's codes shouldn't be your job. We handle the entire Metro Nashville permitting process—from initial site plan submittal to final stormwater sign-off.</p>
        </div>
      </section>

      {/* REGULATORY BLOCK */}
      <section className="regulatory-details glass-section">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">Codes, Compliance & <span className="text-grad">Confidence.</span></h2>
            <p className="authority-text">In Metro Nashville, pool demolition is strictly regulated under Chapter 16 of the Metro Code. This is to ensure that residential removal doesn't lead to localized flooding or unstable ground for future builds.</p>
            
            <p className="authority-text">We maintain a direct line with Metro Water Services (MWS) and the Department of Codes Administration to ensure every project is fast-tracked and fully compliant.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Gavel size={32} className="icon-grad" />
                <h4>Metro Code Compliance</h4>
                <p>Ensuring all concrete fragmentation and burial depths meet specific Davidson County residential demolition ordinances.</p>
              </div>
              <div className="p-item">
                <FileText size={32} className="icon-grad" />
                <h4>Stormwater Permits</h4>
                <p>We manage all grading and erosion control permits required by Nashville's strict Stormwater Management manual.</p>
              </div>
            </div>
          </div>
          
          <div className="image-side">
            <img src="/nashville_permitting_documents_1776324470398.png" alt="Nashville Pool Removal Permit Documentation" className="premium-img" />
            <div className="img-caption">Approved Metro Nashville site plan for a pool abandonment project.</div>
          </div>
        </div>
      </section>

      {/* PERMIT CHECKLIST SECTION */}
      <section className="checklist-section dark-bg">
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">The Nashville <span className="text-grad">Permit Protocol</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>We manage every step of the bureaucratic process so you can stay focused on your yard.</p>
          </div>

          <div className="process-grid-main">
            <div className="p-item-card">
              <div className="p-num">01</div>
              <h4>Site Survey</h4>
              <p>We map all existing underground utility lines and drainage paths to prepare a compliant demolition plan.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">02</div>
              <h4>MWS Submission</h4>
              <p>Site plans are submitted to Metro Water Services to ensure no impact on the city's stormwater infrastructure.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">03</div>
              <h4>Initial Inspection</h4>
              <p>A codes officer visits the site to verify safety protocols before any machinery arrives.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">04</div>
              <h4>Final Certification</h4>
              <p>Once backfilled and graded, we obtain the final "Closed Permit" status, essential for your property's resale value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-calc-section" style={{padding: '100px 0'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Get a <span className="text-grad">Code-Compliant</span> Start.</h2>
            <p className="large-p mb-40">Unpermitted work can lead to heavy fines and "Clouded Titles" during home sales. We do it right the first time.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Metro Nashville Licensed Contractor</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Bonded Site Indemnity</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> All-in-one Paperwork Handling</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Start Your Permit Assessment <ArrowRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" />
          </div>
        </div>
      </section>

      <style jsx>{`
        .premium-img { width: 100%; border-radius: 30px; box-shadow: var(--shadow-xl); display: block; }
        .img-caption { margin-top: 15px; font-size: 0.8rem; font-style: italic; color: var(--secondary); text-align: right; }
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
           .permits-page h1 { font-size: 2.22rem !important; }
           .image-side { order: 2; margin-top: 40px; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
