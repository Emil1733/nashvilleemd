'use client';
import Calculator from '../components/Calculator';
import { Mountain, TrendingUp, HardHat, Info } from 'lucide-react';

export default function CostGuide() {
  return (
    <div className="cost-page fade-in">
      {/* COST HERO */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20" style={{marginBottom: '20px'}}>2026 Pricing Guide</div>
          <h1 className="reveal-top">How Much Does Pool Removal <br/>Cost in <span className="text-grad">Nashville?</span></h1>
          <p className="subheadline max-800 mx-auto" style={{maxWidth: '800px', margin: '0 auto 40px'}}>Providing transparent, geotechnical-based pricing for Middle Tennessee homeowners. From limestone excavation to engineered backfilling.</p>
        </div>
      </section>

      {/* QUICK STATS section */}
      <section className="price-summary bg-light" style={{padding: '100px 0'}}>
        <div className="container">
          <div className="summary-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', alignItems: 'stretch'}}>
            <div className="s-item" style={{background: 'white', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-md)', border: '1px solid #eee'}}>
               <div style={{fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '15px', color: 'var(--secondary)', letterSpacing: '1px'}}>Economy Scope</div>
               <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Partial Removal</h3>
               <div className="price-tag text-grad" style={{fontSize: '2rem', fontWeight: 900, marginBottom: '20px'}}>$6,500 – $12,000</div>
               <ul className="mini-list" style={{listStyle: 'none', padding: 0, marginTop: '20px', fontSize: '0.9rem', color: 'var(--secondary)', lineHeight: '1.8'}}>
                 <li>• Upper structure removed</li>
                 <li>• Engineered drainage gaps</li>
                 <li>• Standard soil compaction</li>
               </ul>
            </div>
            <div className="s-item highlighted" style={{background: 'white', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--primary)', transform: 'scale(1.05)', position: 'relative', zIndex: 10}}>
               <div style={{position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: 'white', padding: '8px 16px', borderRadius: '30px', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '1px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}>BEST VALUE</div>
               <div style={{fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '15px', color: 'var(--primary)', letterSpacing: '1px', paddingTop: '10px'}}>RECOMMENDED</div>
               <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Full Engineered Removal</h3>
               <div className="price-tag text-grad" style={{fontSize: '2.2rem', fontWeight: 900, marginBottom: '20px'}}>$11,500 – $22,000</div>
               <ul className="mini-list" style={{listStyle: 'none', padding: 0, marginTop: '20px', fontSize: '0.9rem', color: 'var(--secondary)', lineHeight: '1.8'}}>
                 <li>• 100% concrete/steel disposal</li>
                 <li>• Certified buildable backfill</li>
                 <li>• Advanced yard grading</li>
               </ul>
            </div>
            <div className="s-item" style={{background: 'white', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-md)', border: '1px solid #eee'}}>
               <div style={{fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '15px', color: 'var(--secondary)', letterSpacing: '1px'}}>Local Factor</div>
               <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Limestone Surcharge</h3>
               <div className="price-tag text-grad" style={{fontSize: '2rem', fontWeight: 900, marginBottom: '20px'}}>+$1,500 – $4,500</div>
               <ul className="mini-list" style={{listStyle: 'none', padding: 0, marginTop: '20px', fontSize: '0.9rem', color: 'var(--secondary)', lineHeight: '1.8'}}>
                 <li>• Hydraulic rock hammers</li>
                 <li>• Specialized shale disposal</li>
                 <li>• Seismic vibration monitoring</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="calculator-interface" style={{padding: '100px 0'}}>
        <div className="container">
          <div className="grid-split">
            <div className="calc-card-wrapper">
               <Calculator variant="light" />
            </div>

            <div className="cost-breakdown-details">
                <h2 className="section-title">The "Nashville 3" <br/><span className="text-grad">Cost Pillars</span></h2>
                <p className="mb-40" style={{marginBottom: '40px'}}>Unlike Florida or Texas, Nashville costs are driven by the Cumberland River Valley geology.</p>
                
                <div className="detail-item" style={{display: 'flex', gap: '20px', marginBottom: '40px'}}>
                  <div className="d-icon" style={{width: '60px', height: '60px', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', color: 'var(--primary)', flexShrink: 0}}><Mountain /></div>
                  <div className="d-text">
                    <h4>The Limestone Factor</h4>
                    <p style={{fontSize: '0.9rem', opacity: 0.8}}>In Belle Meade or Oak Hill, "Nashville Rock" often sits 18" below the surface. Breaking this adds 15-20% to labor.</p>
                  </div>
                </div>

                <div className="detail-item" style={{display: 'flex', gap: '20px', marginBottom: '40px'}}>
                  <div className="d-icon" style={{width: '60px', height: '60px', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', color: 'var(--primary)', flexShrink: 0}}><TrendingUp /></div>
                  <div className="d-text">
                    <h4>Slope Engineering</h4>
                    <p style={{fontSize: '0.9rem', opacity: 0.8}}>Lots in West End or Green Hills are often sloped. Backfilling on a 15-degree slope requires advanced terracing.</p>
                  </div>
                </div>

                <div className="detail-item" style={{display: 'flex', gap: '20px'}}>
                     <div className="d-icon" style={{width: '60px', height: '60px', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', color: 'var(--primary)', flexShrink: 0}}><HardHat /></div>
                     <div className="d-text">
                       <h4>Municipal Permitting</h4>
                       <p style={{fontSize: '0.9rem', opacity: 0.8}}>Metro Nashville requires demo permits, erosion control plans, and sign-offs ($800–$1,500).</p>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta text-center" style={{padding: '100px 0'}}>
        <div className="container">
          <h2 className="text-grad" style={{fontSize: '3rem', fontWeight: 900}}>Stop the Cash Leak.</h2>
          <p className="large-p" style={{marginTop:'10px'}}>Homeowners save an average of $3,500/year after removal.</p>
          <div className="cta-group" style={{marginTop: '40px'}}>
            <a href="/contact" className="btn btn-primary btn-xl">Get Your Exact Quote</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 1024px) {
           .grid-split { 
             grid-template-columns: 1fr !important; 
             gap: 60px !important; 
           }
           .cost-page h1 { font-size: 2.22rem !important; }
           .detail-item { flex-direction: column; text-align: left; }
           .price-summary { padding: 60px 0 !important; }
        }
      `}</style>
    </div>
  );
}
