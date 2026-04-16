'use client';
import Link from 'next/link';
import { Shovel, ShieldCheck, Ruler, Droplets, HardHat, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import Calculator from '../components/Calculator';

export default function EngineeredBackfill() {
  return (
    <div className="backfill-page fade-in">
      {/* HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Certified Soil Engineering</div>
          <h1 className="reveal-top">Engineered <span className="text-grad">Backfill & 95% Compaction</span></h1>
          <p className="subheadline max-800 mx-auto">In Nashville, "filling a hole" is the easy part. Ensuring that hole never sinks, shifts, or becomes a swamp requires certified geotechnical precision. We guarantee 95% Proctor compaction on every yard restoration.</p>
        </div>
      </section>

      {/* THE CLAY CHALLENGE */}
      <section className="clay-challenge glass-section">
        <div className="container grid-split">
          <div className="image-side">
            <img src="/nashville_pool_backfill_compaction_1776324399457.png" alt="Engineered Backfill Compaction Nashville" className="premium-img" />
            <div className="img-caption">Vibratory plate compaction to 95% Proctor density in Brentwood.</div>
          </div>
          <div className="content">
            <h2 className="section-title">The Nashville <span className="text-grad">Clay Barrier.</span></h2>
            <p className="authority-text">Middle Tennessee soil is notorious for high-plasticity clay. When you remove a pool, the wrong backfill material will absorb water and expand, or if not compacted correctly, will settle over time—leaving you with a dangerous depression in your yard.</p>
            
            <p className="authority-text">We don't use "dirt." We use engineered fill material specifically selected for its drainage properties and structural stability under Nashville's variable rainfall.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Layers size={32} className="icon-grad" />
                <h4>Lift-by-Lift Compaction</h4>
                <p>We compact soil in 6-inch increments (lifts) to ensure uniform density from the bottom of the pool shell to the surface.</p>
              </div>
              <div className="p-item">
                <Droplets size={32} className="icon-grad" />
                <h4>Hydro-Stabilization</h4>
                <p>Strategic drainage layers prevent hydrostatic pressure buildup, keeping your new lawn dry and usable year-round.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACTION STANDARDS */}
      <section className="standards-section dark-bg">
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">The <span className="text-grad">95% Standard</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Most contractors ignore compaction. We make it the foundation of our reputation.</p>
          </div>

          <div className="grid-split" style={{alignItems: 'center'}}>
            <div className="v-card" style={{background: 'rgba(255,255,255,0.05)', padding: '50px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)'}}>
               <h3 style={{color: 'white', marginBottom: '20px'}}>What is Proctor Testing?</h3>
               <p style={{color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: '25px'}}>The Proctor compaction test is the geotechnical standard for determining the maximum dry density of soil. By hitting 95% of this density, we ensure your yard has the structural integrity to support structures, patios, or heavy landscaping without future settling.</p>
               <div className="badge success">Structural Grade Certification Available</div>
            </div>
            
            <div className="stats-list" style={{display: 'flex', flexDirection: 'column', gap: '25px'}}>
               <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                  <div style={{width: '60px', height: '60px', background: 'var(--primary)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white'}}><Ruler size={30} /></div>
                  <div>
                    <h4 style={{color: 'white'}}>Laser-Leveled Surface</h4>
                    <p style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)'}}>Final grading is executed with precision laser levels to ensure water flows AWAY from your home.</p>
                  </div>
               </div>
               <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                  <div style={{width: '60px', height: '60px', background: 'var(--primary)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white'}}><HardHat size={30} /></div>
                  <div>
                    <h4 style={{color: 'white'}}>ASTM D698 Compliance</h4>
                    <p style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)'}}>Our backfill protocols follow American Society for Testing and Materials (ASTM) standards.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-calc-section" style={{padding: '100px 0'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Reclaim Your <span className="text-grad">Stable Land.</span></h2>
            <p className="large-p mb-40">Ready to build an ADU, install a luxury patio, or just enjoy a flat, dry backyard? Our engineered backfill is the solution.</p>
            <Link href="/contact" className="btn btn-accent btn-xl">Get Your Site Assessment <ArrowRight size={18} /></Link>
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
