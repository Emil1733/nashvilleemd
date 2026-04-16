'use client';
import Link from 'next/link';
import { Shovel, ShieldCheck, Ruler, Hammer, Construction, CheckCircle, ArrowRight, Layers, Home, ChefHat, HardHat } from 'lucide-react';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorityHub from '../components/AuthorityHub';

export default function OutdoorLivingPrep() {
  return (
    <div className="prep-page fade-in">
      <Breadcrumbs items={[{ label: 'Outdoor Living Prep' }]} />
      
      {/* 1. HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Structural Site Restoration</div>
          <h1 className="reveal-top">Nashville <span className="text-grad">Outdoor Living Prep</span> & Pool Removal</h1>
          <p className="subheadline max-800 mx-auto">Don't just fill a hole—build a foundation. We specialize in converting old pools into buildable-grade platforms for high-value ADUs, outdoor kitchens, and custom pavilions across Middle Tennessee.</p>
        </div>
      </section>

      {/* 2. COST CALCULATOR - TOP PLACEMENT */}
      <section className="cta-calc-section" style={{padding: '60px 0', background: 'var(--light)', borderBottom: '1px solid var(--border)'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Prepare to <span className="text-grad">Build.</span></h2>
            <p className="large-p mb-40">Are you planning a new structural addition where your pool currently sits? Get a precision estimate for a buildable-grade restoration that meets Metro Nashville code requirements.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> 95% Proctor Compaction Certification</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Structural-Grade Backfill Protocol</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Nashville Building Permit Ready</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Request Site Feasibility Audit <ArrowRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" source="outdoor_prep_authority" />
          </div>
        </div>
      </section>

      {/* 3. THE "BUILDABLE GRADE" DIFFERENCE */}
      <section className="buildable-section glass-section">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">The <span className="text-grad">"Buildable-Grade"</span> Guarantee.</h2>
            <p className="authority-text">Most pool removal contractors offer a "landscape-ready" finish—a fancy way of saying the ground is flat but structurally hollow. If you try to build a heavy outdoor kitchen or a detached garage on top of that ground, the foundation will crack within 18 months.</p>
            
            <p className="authority-text">Our "Surgical Structural Removal" process extracts 100% of the pool's footprint and replaces it with engineered, vibratory-compacted lift layers. We transform a liability into a certified construction site, allowing you to build with the same confidence as on virgin earth.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Construction size={32} className="icon-grad" />
                <h4>Utility Rerouting</h4>
                <p>We trace and bypass existing pool heat, gasLines, and electrical systems to prepare for your new outdoor living amenities.</p>
              </div>
              <div className="p-item">
                <Home size={32} className="icon-grad" />
                <h4>Footing Preparation</h4>
                <p>Strategic excavation of pool-deck concrete remains to ensure deep-footing compatibility for ADUs and pavilions.</p>
              </div>
            </div>
          </div>
          <div className="image-side">
            <img src="/reclaimed_nashville_backyard_1775546298945.png" alt="Nashville Outdoor Kitchen Site Prep" className="premium-img" />
            <div className="img-caption">Site preparation for a 1,200 sq. ft. luxury outdoor kitchen in Belle Meade following a full pool extraction.</div>
          </div>
        </div>
      </section>

      {/* 4. STRUCTURAL FILL MATRIX */}
      <section className="fill-matrix dark-bg" style={{padding: '100px 0'}}>
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">Structural <span className="text-grad">Fill Matrix</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Ensuring your land is ready for the weight of your new Nashville lifestyle.</p>
          </div>
          
          <div style={{overflowX: 'auto', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.7)', fontSize: '1rem'}}>
              <thead>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Load Type</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Recommended Fill</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Compaction Target</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Future Asset</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Structural (Building)</td>
                  <td style={{padding: '20px'}}>Clean Surge & Screened Chert</td>
                  <td style={{padding: '20px'}}>95% (Certified)</td>
                  <td style={{padding: '20px'}}>ADUs, Garages, Additions</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>High-Traffic Hardscape</td>
                  <td style={{padding: '20px'}}>Dense-Grade Base (DGB)</td>
                  <td style={{padding: '20px'}}>92%</td>
                  <td style={{padding: '20px'}}>Stone Patios, Pool Decks</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Green Space</td>
                  <td style={{padding: '20px'}}>Native Topsoil Cap</td>
                  <td style={{padding: '20px'}}>85% (Optimal Growth)</td>
                  <td style={{padding: '20px'}}>Lawns, Vegetable Gardens</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. LONG-FORM CONTENT - THE VALUE OF A BUILDABLE YARD */}
      <section className="deep-content" style={{padding: '100px 0'}}>
        <div className="container max-800">
           <h2 className="section-title mb-40">The High ROI of <span className="text-grad">Pool-to-Living</span> Transitions.</h2>
           <div className="long-form-content" style={{lineHeight: '1.9', color: 'var(--secondary)', fontSize: '1.1rem'}}>
              <p className="mb-30">In the current Nashville real estate market, yard space is often more valuable than a pool. However, that value is only realized if the yard can be utilized for more than just aesthetics. Homeowners in Forest Hills, Crieve Hall, and Sylvan Park are increasingly looking for ways to maximize their "Lot Coverage" by building **Accessory Dwelling Units (ADUs)** or custom **Outdoor Kitchen & Pavilions.**</p>
              
              <p className="mb-30">The problem is "differential settlement." When you fill a pool with the wrong material or without precision compaction, the center of the old pool will settle at a different rate than the surrounding undisturbed earth. For a building foundation, even a 1-inch difference can lead to catastrophic wall-cracks and plumbing failures.</p>
              
              <p className="mb-30">Our **Outdoor Living Prep** service is designed specifically to eliminate this risk. We treat every pool removal as a civil engineering project. We remove 100% of the old pool structure (Full Extraction) and backfill with structural-grade material that matches the "bearing capacity" of your existing yard. By the time we leave, your property is not just "clean"—it is "permit-ready."</p>
              
              <h3 style={{color: 'var(--dark)', marginTop: '50px', marginBottom: '20px'}}>Managing Utility Infrastructure</h3>
              <p className="mb-30">Pools are hubs for gas, electric, and water lines. Simply cutting these wires and burying them is a recipe for disaster during future construction. As part of our prep service, we provide **Utility Lifecycle Mitigation.** We locate, cap, and—if necessary—reroute these lines to clear the path for your new addition's foundation. This prevents expensive "surprising discoveries" for your construction crew later on.</p>
           </div>
        </div>
      </section>

      {/* 6. USE CASES grid */}
      <section className="case-grid bg-light" style={{padding: '80px 0'}}>
         <div className="container">
            <div className="text-center mb-60">
               <h2 className="section-title">What Will You <span className="text-grad">Build Next?</span></h2>
               <p>Our site prep services are the foundation for Nashville's best backyards.</p>
            </div>
            <div className="grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px'}}>
               <div className="n-card">
                  <Home className="icon-grad mb-20" />
                  <h4>ADUs & Guest Homes</h4>
                  <p>Certified compaction that supports full concrete slabs and standard foundations.</p>
               </div>
               <div className="n-card">
                  <ChefHat className="icon-grad mb-20" />
                  <h4>Outdoor Kitchens</h4>
                  <p>Preparing zero-settlement bases for heavy stone masonry and custom appliances.</p>
               </div>
               <div className="n-card">
                  <HardHat className="icon-grad mb-20" />
                  <h4>Detached Garages</h4>
                  <p>Site leveling and sub-base prep for high-load vehicle storage and workspaces.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="faq-section" style={{padding: '100px 0'}}>
        <div className="container max-800">
          <h2 className="section-title text-center mb-60">Construction <span className="text-grad">Prep FAQ</span></h2>
          <div className="faq-list" style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Can my builder use your compaction reports?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Yes. We provide a documented completion binder that includes compaction testing results (if requested) and a site map of all backfill layers. Most Nashville architects and engineers accept our certification as a "Qualified Site Prep" for foundation design.</p>
             </div>
              <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Do you remove the old pool deck and patio too?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Absolutely. In fact, if you plan to build, we recommend our specialized <Link href="/deck-and-coping-removal" style={{color: 'var(--primary)', textDecoration: 'underline'}}>deck and coping demolition service</Link>. This prevents "Ghost Settlements" where original dirt meets old concrete edges, ensuring a uniform foundation plane.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>How soon can my builder start after you finish?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Because we use mechanical vibratory compaction (not just waiting for rain), your site is typically ready for construction immediately after we demobilize. There is zero "natural settling" time required with our engineered process.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 8. AUTHORITY HUB NAVIGATION */}
      <AuthorityHub />

      <style jsx>{`
        .prep-page { color: var(--dark); }
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
           .grid-split, .points-grid-responsive, .grid-3 { grid-template-columns: 1fr !important; gap: 40px !important; }
           .prep-page h1 { font-size: 2.22rem !important; }
           .image-side { order: 2; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
