'use client';
import Link from 'next/link';
import { Home, ShieldCheck, MapPin, Trees, Camera, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Calculator from '../components/Calculator';

export default function BelleMeade() {
  return (
    <div className="location-page fade-in">
      {/* HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Premium Estate Services</div>
          <h1 className="reveal-top">Luxury Pool Removal in <span className="text-grad">Belle Meade, TN</span></h1>
          <p className="subheadline max-800 mx-auto">Providing white-glove excavation and land reclamation for the most prestigious estates in Middle Tennessee. We prioritize landscape preservation and strict compliance with local codes.</p>
        </div>
      </section>

      {/* LUXURY PROTECTION BLOCK */}
      <section className="luxury-protection glass-section">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">Landscape <span className="text-grad">Preservation First.</span></h2>
            <p className="authority-text">In Belle Meade, your landscape is as valuable as your home. We understand that bringing heavy machinery onto an established estate requires more than just skill—it requires a commitment to property protection.</p>
            
            <p className="authority-text">Our "Low-Impact" methodology utilizes specialized ground-protection mats and tight-radius machinery to ensure your centuries-old oaks and manicured lawns remain undisturbed.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Trees size={32} className="icon-grad" />
                <h4>Root System Protection</h4>
                <p>We work with arborists to map critical root zones, ensuring excavation depths never compromise your estate's foliage.</p>
              </div>
              <div className="p-item">
                <ShieldCheck size={32} className="icon-grad" />
                <h4>Utility Integrity</h4>
                <p>Luxury estates often have custom outdoor lighting, gas lines, and irrigation. We perform private utility locates before we ever break ground.</p>
              </div>
            </div>
          </div>
          
          <div className="image-side">
            <img src="/belle_meade_luxury_pool_removal_1776324545793.png" alt="Luxury Pool Removal Belle Meade" className="premium-img" />
            <div className="img-caption">Recent 40,000-gallon pool removal project in Belle Meade (Highland Park area).</div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD SPECIFICS */}
      <section className="neighborhood-specs dark-bg">
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">The Belle Meade <span className="text-grad">Standard</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>We don't just fill holes; we restore the architectural intent of your property.</p>
          </div>

          <div className="process-grid-main">
            <div className="p-item-card">
              <div className="p-num">01</div>
              <h4>Direct Code Liaison</h4>
              <p>We handle all Belle Meade City Hall permit submittals and onsite inspections, ensuring 100% legal compliance.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">02</div>
              <h4>Dust & Noise Mitigation</h4>
              <p>We employ active dust-suppression and schedule noisy work during approved windows to respect your neighbors' peace.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">03</div>
              <h4>Engineered Restoration</h4>
              <p>Once the pool is gone, we grade the land to match your master landscape plan, ready for sod or garden installation.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">04</div>
              <h4>Discreet Operations</h4>
              <p>Our crews are trained in estate etiquette—clean uniforms, organized staging areas, and zero-impact site exit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-calc-section" style={{padding: '100px 0'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Restore Your <span className="text-grad">Estate's Potential.</span></h2>
            <p className="large-p mb-40">High-maintenance pools can detract from property value. Reclaim your land for an outdoor kitchen, garden, or improved sightlines.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Belle Meade Registered Contractor</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Comprehensive General Liability ($2M)</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Structural-Grade Backfill Guarantee</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Request Private Consultation <ArrowRight size={18} /></Link>
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
