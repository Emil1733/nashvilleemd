'use client';
import Link from 'next/link';
import { Droplets, ShieldCheck, Ruler, Waves, AlertTriangle, CheckCircle, ArrowRight, Layers, FileText, Mountain } from 'lucide-react';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorityHub from '../components/AuthorityHub';

export default function NashvilleDrainage() {
  return (
    <div className="drainage-page fade-in">
      <Breadcrumbs items={[{ label: 'Stormwater & Drainage' }]} />
      
      {/* 1. HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Geotechnical Hydrology Specialists</div>
          <h1 className="reveal-top">Nashville <span className="text-grad">Stormwater & Drainage</span> Engineering</h1>
          <p className="subheadline max-800 mx-auto">Don't let your pool removal turn your backyard into a swamp. We specialize in Nashville-specific drainage solutions, engineered to manage groundwater flow and Metro Water Services (MWS) compliance.</p>
        </div>
      </section>

      {/* 2. COST CALCULATOR - TOP PLACEMENT */}
      <section className="cta-calc-section" style={{padding: '60px 0', background: 'var(--light)', borderBottom: '1px solid var(--border)'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Drainage <span className="text-grad">Precision.</span></h2>
            <p className="large-p mb-40">Get an estimate that includes the necessary hydro-engineering to protect your home’s foundation and your neighbors’ yards. Professional drainage is an investment, not an expense.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> MWS Compliant Stormwater Plans</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Sub-Surface Groundwater Redirection</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Certified Post-Removal Grading</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Request Hydro-Assessment <ArrowRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" source="drainage_authority" />
          </div>
        </div>
      </section>

      {/* 3. THE "SUB-SURFACE SWAMP" CHALLENGE */}
      <section className="challenge-section glass-section">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">The "Sub-Surface <span className="text-grad">Swamp"</span> Risk.</h2>
            <p className="authority-text">Nashville’s "Blue Limestone" bedrock is non-porous. When a pool is removed without an engineered drainage plan, the old pool "bowl" acts as a subterranean tank, trapping millions of gallons of Tennessee rainwater beneath your new lawn.</p>
            
            <p className="authority-text">If this water isn't redirected, the hydrostatic pressure will eventually force the groundwater toward your home’s crawlspace or foundation, leading to mold, settlement, and structural failure. We solve this by fracturing the rock shelf—a process detailed in our <Link href="/limestone-excavation" style={{color: 'var(--primary)', textDecoration: 'underline'}}>limestone extraction guide</Link>—and installing high-velocity drainage corridors.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Waves size={32} className="icon-grad" />
                <h4>Vertical Rock Fracturing</h4>
                <p>We use hydraulic hammers to puncture the limestone shelf, allowing water to dissipate naturally into the deep-earth aquifer.</p>
              </div>
              <div className="p-item">
                <ShieldCheck size={32} className="icon-grad" />
                <h4>French Drain Integration</h4>
                <p>Strategic installation of perforated HDPE drainage lines to intercept groundwater before it reaches the backfill site.</p>
              </div>
            </div>
          </div>
          <div className="image-side">
            <img src="/nashville_pool_backfill_compaction_1776324399457.png" alt="Nashville Sub-Surface Drainage Planning" className="premium-img" />
            <div className="img-caption">Installation of a dual-layer drainage system behind a limestone shelf in Brentwood.</div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL HYDRO MATRIX */}
      <section className="hydro-matrix dark-bg" style={{padding: '100px 0'}}>
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">Hydro-Engineering <span className="text-grad">Matrix</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Comparing standard backyard drainage vs. Nashville Pool Professionals' Engineering.</p>
          </div>
          
          <div style={{overflowX: 'auto', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.7)', fontSize: '1rem'}}>
              <thead>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Variable</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Standard Fill</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Hydro-Engineered (Ours)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Internal Porosity</td>
                  <td style={{padding: '20px'}}>Low (Traps Moisture)</td>
                  <td style={{padding: '20px'}}>High (#57 Stone Corridors)</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Vertical Relief</td>
                  <td style={{padding: '20px'}}>None (Horizontal flow only)</td>
                  <td style={{padding: '20px'}}>Hydraulic Rock Puncturing</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>MWS Compliance</td>
                  <td style={{padding: '20px'}}>Likely Non-Compliant</td>
                  <td style={{padding: '20px'}}>Certified Stormwater Plan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. LONG-FORM CONTENT - THE SCIENCE OF NASHVILLE DRAINAGE */}
      <section className="deep-content" style={{padding: '100px 0'}}>
        <div className="container max-800">
           <h2 className="section-title mb-40">The Hydrology of <span className="text-grad">Davidson County.</span></h2>
           <div className="long-form-content" style={{lineHeight: '1.9', color: 'var(--secondary)', fontSize: '1.1rem'}}>
              <p className="mb-30">Nashville isn't like most American cities. We sit on a geological basin of non-porous limestone, covered by a thin layer of highly expansive "fat clay." This combination creates a unique hydrological challenge: <strong>when it rains in Middle Tennessee, the water has nowhere to go but sideways.</strong></p>
              
              <p className="mb-30">A swimming pool interrupts this natural (though inefficient) sideways flow. When you remove a pool, you are essentially creating a 40,000-gallon interruption in the earth. If you fill that hole with standard "backyard dirt," you are creating a massive subterranean sponge. During the heavy spring rains Nashville is famous for, that sponge fills up. Once it hits capacity, the water exerts pressure outward.</p>
              
              <p className="mb-30">Our engineered drainage system utilizes <strong>#57 clean-wash stone</strong>—the same material used in civil highway construction—to create "Internal Relief Corridors." We don't just hope the water drains; we force it to follow a specific path away from the fill site and away from your home's foundation. This is a vital component of our <Link href="/engineered-backfill" style={{color: 'var(--primary)', textDecoration: 'underline'}}>engineered backfill protocol</Link>, which ensures total site stability.</p>
              
              <h3 style={{color: 'var(--dark)', marginTop: '50px', marginBottom: '20px'}}>Understanding MWS (Metro Water Services) Rules</h3>
              <p className="mb-30">In Metro Nashville, any grading project that alters the "discharge of stormwater" to a neighboring property is subject to strict regulation. Unpermitted work that causes flooding in a neighbor's yard is a fast-track to a lawsuit and a <strong>Metro Stop-Work Order.</strong> We coordinate directly with MWS to ensure your pool removal project follows the legal discharge protocols of Davidson County, protecting you from future liability.</p>
           </div>
        </div>
      </section>

      {/* 6. DRAINAGE COMPONENTS grid */}
      <section className="components-grid bg-light" style={{padding: '80px 0'}}>
         <div className="container">
            <div className="text-center mb-60">
               <h2 className="section-title">Our <span className="text-grad">Hydro-Hardware</span> Stack</h2>
               <p>Commercial-grade hardware for residential reliability.</p>
            </div>
            <div className="grid-4" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px'}}>
               <div className="n-card">
                  <Layers className="icon-grad mb-20" />
                  <h4>Non-Woven Geotextile</h4>
                  <p>Prevents silt from clogging your drainage stone layers over time.</p>
               </div>
               <div className="n-card">
                  <Droplets className="icon-grad mb-20" />
                  <h4>Schedule 40 HDPE</h4>
                  <p>Heavy-duty piping that won't crush under the weight of 95% compacted soil.</p>
               </div>
               <div className="n-card">
                  <Mountain className="icon-grad mb-20" />
                  <h4>#57 Surge Stone</h4>
                  <p>The civil-engineering standard for subterranean water redirection.</p>
               </div>
               <div className="n-card">
                  <Ruler className="icon-grad mb-20" />
                  <h4>Laser Grading</h4>
                  <p>Final surface grading to 1/8" precision to ensure positive surface runoff.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="faq-section" style={{padding: '100px 0'}}>
        <div className="container max-800">
          <h2 className="section-title text-center mb-60">Drainage & <span className="text-grad">Aquifer FAQ</span></h2>
          <div className="faq-list" style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Will a pool removal increase runoff to my neighbors?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Not with our system. We engineer the final grade to mimic the natural flow of the local topography. In most cases, our engineered soil and drainage layers actually <em>improve</em> the drainage profile of the property compared to the old pool.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Do you use "Dry Wells"?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>On properties with severe limestone shelves, yes. We may install a subterranean dissipation chamber (Dry Well) within the old pool footprint to manage burst rainfall events, ensuring your lawn stays dry and usable.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>What is a "Sinking Yard" and how do you prevent it?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>A yard "sinks" when water causes the underlying soil to settle. We prevent this via two methods: 95% Proctor compaction (mechanical density) and hydro-redirection (keeping the water away from the soil fibers in the first place).</p>
             </div>
          </div>
        </div>
      </section>

      {/* 8. AUTHORITY HUB NAVIGATION */}
      <AuthorityHub />

      <style jsx>{`
        .drainage-page { color: var(--dark); }
        .premium-img { width: 100%; border-radius: 40px; box-shadow: var(--shadow-xl); border: 1px solid rgba(0,0,0,0.05); }
        .img-caption { margin-top: 20px; font-size: 0.9rem; font-style: italic; color: var(--secondary); text-align: right; }
        
        .n-card { background: white; padding: 30px; border-radius: 20px; box-shadow: var(--shadow-md); border: 1px solid rgba(0,0,0,0.03); transition: transform 0.3s ease; }
        .n-card:hover { transform: translateY(-10px); border-color: var(--primary); }
        .n-card h4 { color: var(--dark); margin-bottom: 10px; font-weight: 800; }
        .n-card p { font-size: 0.85rem; color: var(--secondary); line-height: 1.5; }

        .mb-20 { margin-bottom: 20px; }
        .mb-30 { margin-bottom: 30px; }
        .mb-40 { margin-bottom: 40px; }
        .mb-60 { margin-bottom: 60px; }
        .max-800 { max-width: 800px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        .p-item h4 { margin-top: 15px; margin-bottom: 10px; color: var(--dark); font-weight: 800; }
        .p-item p { font-size: 0.9rem; line-height: 1.6; color: var(--secondary); }

        @media (max-width: 1024px) {
           .grid-split, .points-grid-responsive, .grid-4 { grid-template-columns: 1fr !important; gap: 40px !important; }
           .drainage-page h1 { font-size: 2.2rem !important; }
           .image-side { order: 2; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
