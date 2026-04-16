'use client';
import Link from 'next/link';
import { Mountain, HardHat, ShieldCheck, AlertTriangle, Hammer, Ruler, CheckCircle, ChevronRight } from 'lucide-react';
import Calculator from '../components/Calculator';

export default function LimestoneExcavation() {
  const Heading = ({ icon, text, size = 18 }) => (
    <h4 style={{display: 'flex', alignItems: 'center', gap: '10px', fontSize: `${size}px`, color: 'var(--primary)', fontWeight: 800}}>
      {icon} {text}
    </h4>
  );

  return (
    <div className="limestone-page fade-in">
      {/* HERO SECTION - Deep Authority */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Nashville Hard Rock Specialists</div>
          <h1 className="reveal-top">Nashville <span className="text-grad">Limestone Excavation</span> & Rock Breaking</h1>
          <p className="subheadline max-800 mx-auto">Don't let the Central Basin limestone shelf stall your project. We specialize in high-impact hydraulic breaking and precision removal for pool demolition sites across Middle Tennessee.</p>
        </div>
      </section>

      {/* CORE PROBLEM SECTION */}
      <section className="problem-section glass-section" id="limestone-problem">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">The "Hard Dig" <span className="text-grad">Reality.</span></h2>
            <p className="authority-text">In Nashville neighborhoods like Belle Meade, Green Hills, and Forest Hills, limestone often sits just 18 to 24 inches below the surface. Standard excavators can't touch it. Without the right equipment, pool removal becomes an expensive, multi-week disaster.</p>
            
            <p className="authority-text">We own our own fleet of 1,500lb and 3,000lb hydraulic rock hammers. We don't rent—which means we don't have downtime, and you don't pay 3rd party surcharges.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Hammer size={32} className="icon-grad" />
                <h4>1,500lb Impact Power</h4>
                <p>Specialized for residential tight-access where larger machines risk damaging nearby foundations or retaining walls.</p>
              </div>
              <div className="p-item">
                <Mountain size={32} className="icon-grad" />
                <h4>Geological Surveys</h4>
                <p>We use GPR and historical Nashville basin mapping to predict rock depth before we ever break ground.</p>
              </div>
            </div>
          </div>
          
          <div className="image-side">
            <img src="/nashville_limestone_breaker_1776324329961.png" alt="Hydraulic Rock Breaker in Nashville" className="premium-img" />
            <div className="img-caption">Our 3,500lb hammer breaking solid limestone in Oak Hill.</div>
          </div>
        </div>
      </section>

      {/* TECHNICAL PROCESS SECTION */}
      <section className="process-section dark-bg">
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">The Precision <span className="text-grad">Breaking Process</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Breaking rock in a backyard requires more than just force—it requires vibration management.</p>
          </div>

          <div className="process-grid-main">
            <div className="p-item-card">
              <div className="p-num">01</div>
              <h4>Vibration Monitoring</h4>
              <p>We set seismic markers near your foundation to ensure rock-breaking frequencies never reach destructive thresholds.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">02</div>
              <h4>Hydraulic Fracturing</h4>
              <p>Our operators use "seam-finding" techniques to split limestone along natural fault lines, reducing noise and power consumption.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">03</div>
              <h4>Clean Extraction</h4>
              <p>Broken limestone is sorted. Clean rock can often be repurposed for on-site drainage layers, saving you disposal costs.</p>
            </div>
            <div className="p-item-card">
              <div className="p-num">04</div>
              <h4>Leveling & Prep</h4>
              <p>We don't just leave a hole. We ensure the remaining shelf is leveled and prepped for engineered backfill.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR / CTA SPLIT */}
      <section className="cta-calc-section" style={{padding: '100px 0'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Get a <span className="text-grad">Rock-Steady</span> Quote.</h2>
            <p className="large-p mb-40">Don't guess on your excavation costs. Use our Nashville-specific tool to get a range based on local rock depth and machine access.</p>
            <div className="benefits-list" style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
              <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Flat-rate rock breaking options</div>
              <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Licensed, Bonded & Insured TN #74291</div>
              <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Next-Day site assessments available</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Book Site Inspection <ChevronRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" />
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING BLOCK */}
      <section className="internal-spokes glass-section">
        <div className="container">
          <h3 className="section-title text-center" style={{fontSize: '1.5rem', marginBottom: '40px'}}>Related <span className="text-grad">Geotechnical Services</span></h3>
          <div className="neighborhood-grid-4">
             <Link href="/services" className="n-card text-center">
                <HardHat className="icon-grad mx-auto" style={{marginBottom: '15px'}} />
                <h4>Full Removal</h4>
                <p>Complete structural demolition and total earth restoration.</p>
             </Link>
             <Link href="/cost" className="n-card text-center">
                <Ruler className="icon-grad mx-auto" style={{marginBottom: '15px'}} />
                <h4>Pricing Guide</h4>
                <p>Breaking down Nashville labor and haul-away rates.</p>
             </Link>
             <Link href="/about" className="n-card text-center">
                <ShieldCheck className="icon-grad mx-auto" style={{marginBottom: '15px'}} />
                <h4>Our Authority</h4>
                <p>Meet the team behind Nashville's deepest digs.</p>
             </Link>
             <Link href="/blog/guide" className="n-card text-center">
                <AlertTriangle className="icon-grad mx-auto" style={{marginBottom: '15px'}} />
                <h4>Safety Guide</h4>
                <p>Managing utility lines and rock shelves in backyards.</p>
             </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .premium-img { width: 100%; border-radius: 30px; box-shadow: var(--shadow-lg); display: block; }
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
           .grid-split, .points-grid-responsive, .neighborhood-grid-4 { grid-template-columns: 1fr !important; gap: 40px !important; }
           .image-side { margin-top: 40px; }
           .limestone-page h1 { font-size: 2.2rem !important; }
        }
      `}</style>
    </div>
  );
}
