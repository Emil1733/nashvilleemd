'use client';
import Link from 'next/link';
import { CheckCircle, AlertTriangle, Layers, Maximize, Hammer, Truck, ShieldCheck, MapPin, Ruler, HardHat } from 'lucide-react';

export default function Services() {
  return (
    <div className="services-page fade-in">
      {/* SERVICE HERO - High Authority Positioning */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Tennessee General Contractor #18714</div>
          <h1 className="reveal-top">Precision Pool <span className="text-grad">Demolition</span> & <br/>Land Restoration Services</h1>
          <p className="subheadline">Engineered pool removal solutions for Nashville homeowners, specializing in heavy rock excavation, advanced drainage planning, and buildable-grade land restoration.</p>
        </div>
      </section>

      {/* CORE SERVICE TYPES */}
      <section className="service-types">
        <div className="container">
          <div className="grid-split">
            {/* PARTIAL REMOVAL */}
            <div className="s-card dark-card">
              <div className="badge">Budget-Focused Option</div>
              <h2 className="title">Partial Pool Removal <br/> <small>Fill-In / Structural Abandonment</small></h2>
              <p className="description">Our engineered abandonment protocol is designed for speed and cost-efficiency without compromising the long-term integrity of your yard's surface.</p>
              
              <div className="list">
                <li><CheckCircle size={18} /> Upper 2-3 feet of concrete structure removed</li>
                <li><CheckCircle size={18} /> Drainage holes jackhammered into the floor (limestone base)</li>
                <li><CheckCircle size={18} /> 95% compaction rate across multiple soil lifts</li>
                <li><CheckCircle size={18} /> Rapid 3-day turnaround from mobilization to seed</li>
              </div>

              <div className="nashville-reality">
                <AlertTriangle size={20} className="alert-icon" />
                <div>
                  <p><strong>Nashville Soil Note:</strong> We only recommend abandonment for flat properties. Nashville's heavy limestone bed can trap water in partial removals if the yard slope exceeds 5%.</p>
                </div>
              </div>
            </div>

            {/* FULL REMOVAL */}
            <div className="s-card primary-card">
              <div className="badge accent">Geotechnical Gold Standard</div>
              <h2 className="title">Full Pool Removal <br/> <small>Complete Structural Demolition</small></h2>
              <p className="description">The only option for homeowners planning future construction (pavilions, ADUs, additions) or those living on sloped Nashville lots.</p>
              
              <div className="list">
                <li><CheckCircle size={18} /> 100% of concrete, steel, and vinyl removed</li>
                <li><CheckCircle size={18} /> Off-site debris hauling and certified disposal</li>
                <li><CheckCircle size={18} /> Strategic backfilling with locally sourced chert and topsoil</li>
                <li><CheckCircle size={18} /> Full certification for future building permits</li>
              </div>
              
              <img src="/limestone-rock-breaker.png" alt="Nashville Mini-Excavator with Hydraulic Rock Hammer" style={{width: '100%', borderRadius: '15px', marginTop: '20px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* DRAINAGE & GEOTECHNICAL FOCUS */}
      <section className="drainage-authority dark-bg">
        <div className="container">
          <div className="grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'}}>
            <div className="authority-text" style={{order: 2}}>
              <h2 className="section-title white">The Nashville Geotechnical <br/> <span className="text-grad">Authority System</span></h2>
              <p>In Middle Tennessee, our "soil" is notoriously difficult. Between the high clay content and the shallow limestone shelf, any pool removal fundamentally changes your property's hydrology.</p>
              
              <div className="feature-item-complex">
                <div className="f-icon"><Layers /></div>
                <div className="f-body">
                  <h4>Mechanical Compaction Lifts</h4>
                  <p>We utilize vibratory trench rollers to compact soil in 8-inch lifts, ensuring your new yard won't sink after heavy Nashville rain.</p>
                </div>
              </div>
              <div className="feature-item-complex">
                <div className="f-icon"><HardHat /></div>
                <div className="f-body">
                  <h4>Permit Concierge</h4>
                  <p>We handle all demo permits and utility disconnections with Metro Nashville Codes and Building Safety.</p>
                </div>
              </div>
            </div>
            <div className="image-box" style={{order: 1}}>
              <img src="/nashville-pool-excavation.png" alt="Nashville Pool Excavation Concrete Removal" style={{width: '100%', borderRadius: '30px', boxShadow: 'var(--shadow-lg)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="final-cta text-center dark-bg">
        <div className="container">
          <h2 className="white">Ready to Reclaim Your Backyard in Nashville?</h2>
          <p className="mb-40" style={{marginTop: '10px', opacity: 0.8}}>Get a professional geotechnical assessment and firm demolition quote within 24 hours.</p>
          <div className="cta-group">
            <Link href="/contact" className="btn btn-accent btn-xl">Request Free Estimate</Link>
            <Link href="/cost" className="btn btn-outline btn-lg" style={{borderColor: 'white', color: 'white'}}>View Cost Guide</Link>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .mb-20 { margin-bottom: 20px; }
        .mb-40 { margin-bottom: 40px; }
        .s-card { padding: 40px; border-radius: 20px; transition: var(--transition); }
        .s-card .title { font-size: 1.75rem; margin-bottom: 15px; }
        .s-card .description { margin-bottom: 30px; font-size: 0.95rem; }
        .list li { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; font-size: 0.95rem; font-weight: 500; }
        .feature-item-complex { display: flex; gap: 20px; margin-bottom: 35px; }
        .f-icon { width: 50px; height: 50px; background: var(--primary); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .f-body h4 { margin-bottom: 5px; color: white; }
        .f-body p { font-size: 0.9rem; line-height: 1.5; color: rgba(255,255,255,0.7); }

        @media (max-width: 1024px) {
           .grid-split { 
             grid-template-columns: 1fr !important; 
             gap: 40px !important; 
           }
           .service-hero h1 { font-size: 2.2rem !important; }
           .s-card { padding: 30px 20px !important; }
           .feature-item-complex { flex-direction: column; gap: 10px; }
        }
      `}</style>
    </div>
  );
}
