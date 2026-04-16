'use client';
import Link from 'next/link';
import { ShieldCheck, Ruler, Hammer, AlertTriangle, CheckCircle, ArrowRight, Layers, FileText, TrendingUp, Info } from 'lucide-react';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorityHub from '../components/AuthorityHub';

export default function FullVsPartial() {
  return (
    <div className="comparison-page fade-in">
      <Breadcrumbs items={[{ label: 'Full vs Partial Removal' }]} />
      
      {/* 1. HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">The Homeowner's Decision Guide</div>
          <h1 className="reveal-top">Full vs. Partial Pool Removal: <br/><span className="text-grad">The Nashville Standard</span></h1>
          <p className="subheadline max-800 mx-auto">Don't make a $20,000 mistake. Understand the long-term impact of partial abandonment vs. full structural extraction on your Nashville property value, drainage, and buildability.</p>
        </div>
      </section>

      {/* 2. COST CALCULATOR - TOP PLACEMENT */}
      <section className="cta-calc-section" style={{padding: '60px 0', background: 'var(--light)', borderBottom: '1px solid var(--border)'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Investment <span className="text-grad">Transparency.</span></h2>
            <p className="large-p mb-40">Which method is right for your budget and your future property plans? Toggle between full and partial options to see the immediate cost delta.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Side-by-Side Methodology Comparison</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Nashville Real Estate ROI Analysis</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Engineering Certification Info</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Request Expert Site Audit <ArrowRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" source="full_vs_partial_authority" />
          </div>
        </div>
      </section>

      {/* 3. THE COMPARISON MATRIX (Visual Authority) */}
      <section className="comparison-matrix glass-section">
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="section-title">At-A-Glance <span className="text-grad">Methodology Guide</span></h2>
            <p>Evaluating the technical trade-offs for Middle Tennessee backyards.</p>
          </div>
          
          <div style={{overflowX: 'auto', background: 'white', padding: '40px', borderRadius: '30px', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.05)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', color: 'var(--secondary)', fontSize: '1rem'}}>
              <thead>
                <tr style={{borderBottom: '2px solid var(--light)'}}>
                  <th style={{padding: '20px', textAlign: 'left', color: 'var(--dark)'}}>Critical Factor</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'var(--dark)'}}>Partial Removal (Abandonment)</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'var(--dark)'}}>Full Structural Extraction</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid var(--light)'}}>
                  <td style={{padding: '20px'}}><strong>Immediate Cost</strong></td>
                  <td style={{padding: '20px'}}>$8,000 — $12,000 (Typical)</td>
                  <td style={{padding: '20px'}}>$14,000 — $25,000 (Typical)</td>
                </tr>
                <tr style={{borderBottom: '1px solid var(--light)'}}>
                  <td style={{padding: '20px'}}><strong>Future Buildability</strong></td>
                  <td style={{padding: '20px', color: '#b91c1c'}}>NONE (Non-buildable fill)</td>
                  <td style={{padding: '20px', color: '#15803d'}}>CERTIFIED (Building permit ready)</td>
                </tr>
                <tr style={{borderBottom: '1px solid var(--light)'}}>
                  <td style={{padding: '20px'}}><strong>Drainage Impact</strong></td>
                  <td style={{padding: '20px'}}>High risk of water entrapment</td>
                  <td style={{padding: '20px'}}>Natural ground-water flow restored</td>
                </tr>
                <tr style={{borderBottom: '1px solid var(--light)'}}>
                  <td style={{padding: '20px'}}><strong>Real Estate Disclosure</strong></td>
                  <td style={{padding: '20px'}}>Must disclose "buried concrete"</td>
                  <td style={{padding: '20px'}}>Full removal certificate provided</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. DEEP CONTENT - THE 1,500 WORD AUTHORITY PILLAR */}
      <section className="deep-content" style={{padding: '100px 0'}}>
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">The Hidden Truth of <span className="text-grad">Partial Removal.</span></h2>
            <div className="long-form-text" style={{lineHeight: '1.9', color: 'var(--secondary)', fontSize: '1.1rem'}}>
               <p className="mb-30">In the world of Nashville property management, the decision between partial and full pool removal is often framed as a simple budget choice. Marketed as "Pool Abandonment" or "Fill-In," the partial method is tempting: it’s cleaner, faster, and significantly cheaper up-front. <strong>But in Middle Tennessee, the up-front savings often lead to a back-end liability that can haunt a property title for decades.</strong></p>
               
               <p className="mb-30">When a pool is partially removed, the top 2-3 feet of concrete are broken away and dropped into the bottom of the shell. The remaining concrete "bowl" is then filled with soil. The theory is that holes drilled into the bottom will handle drainage. However, Nashville’s dense red clay and non-porous limestone shelves often render these holes useless. Over time, the buried concrete acts as a dam, trapping groundwater and creating a "swamp" effect that can destabilize your lawn and even your home’s foundation.</p>
               
               <h3 style={{color: 'var(--dark)', marginTop: '50px', marginBottom: '20px'}}>Why Full Extraction Wins in Nashville</h3>
                <p className="mb-30">Full removal is the "Geotechnical Gold Standard." By extracting 100% of the concrete, steel, and vinyl, we eliminate the subterranean tank altogether. We then utilize <Link href="/engineered-backfill" style={{color: 'var(--primary)', textDecoration: 'underline'}}>lift-compacted engineered fill</Link> to restore the property to its natural state. This is the only method that allows a homeowner to build a future structure—an ADU, a detached garage, or a home addition—directly over the old pool site. In neighborhoods like <Link href="/green-hills-oak-hill" style={{color: 'var(--primary)', textDecoration: 'underline'}}>Green Hills</Link> and <Link href="/brentwood" style={{color: 'var(--primary)', textDecoration: 'underline'}}>Brentwood</Link>, where lot values are at historic highs, the ability to build on every square foot of your land is worth significantly more than the cost of a full removal.</p>
            </div>
          </div>
          <div className="image-side">
             <div className="sticky-box" style={{position: 'sticky', top: '100px'}}>
                <img src="/nashville_limestone_breaker_1776324329961.png" alt="Full Pool Extraction Nashville" className="premium-img" />
                <div style={{marginTop: '30px', background: 'var(--light)', padding: '40px', borderRadius: '30px'}}>
                   <h4 className="mb-20">Pro Tip: Title Searches</h4>
                    <p style={{fontSize: '0.9rem', color: 'var(--secondary)'}}>Nashville title companies are becoming increasingly rigorous about "unpermitted fill areas." A partial removal that isn't properly documented can halt a home sale during the appraisal phase. Always check our <Link href="/pool-removal-permits" style={{color: 'var(--primary)', textDecoration: 'underline'}}>Nashville permitting guide</Link> for compliance details.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="deep-content-2 dark-bg" style={{padding: '100px 0'}}>
        <div className="container max-800">
           <h2 className="white text-center mb-60">The Science of <span className="text-grad">Compaction & Settlement.</span></h2>
           <div className="long-form-text" style={{lineHeight: '1.9', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem'}}>
              <p className="mb-30">Whether you choose partial or full removal, the success of the project hinges on one metric: **Standard Proctor Density.** Soil is naturally full of air pockets. If you simply push dirt into a pool hole, gravity will eventually settle that soil, creating a massive depression in your yard. In Nashville, where we experience heavy seasonal rainfall followed by intense summer heat, this "settling cycle" is accelerated.</p>
              
              <p className="mb-30">Our system utilizes **Vibratory Compaction Lifts.** We fill the pool in 8-inch increments (or "lifts"), compacting each layer with a 5-ton roller before the next layer is added. This ensures a 95% compaction rate—the same standard used for road-beds and foundation slabs. When we finish, the land is not just "filled"—it is stable. This is why we are the only removal company in Middle Tennessee to offer a **Life-of-Property Zero-Settlement Guarantee.**</p>
              
              <h3 style={{color: 'white', marginTop: '50px', marginBottom: '20px'}}>Environmental & Stormwater Compliance</h3>
              <p className="mb-30">Nashville is under strict MWS (Metro Water Services) oversight regarding stormwater runoff. A pool act as a retention basin; removing it changes how water leaves your property. In a partial removal, the lack of natural percolation can cause water to "sheet" off your yard and into a neighbor's, leading to code violations and potential litigation. In a full removal, we restore the natural hydrology of the earth, allowing water to dissipate vertically through the soil profile into the limestone aquifer as nature intended.</p>
           </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION - Final Push */}
      <section className="final-cta" style={{padding: '120px 0', textAlign: 'center'}}>
         <div className="container">
            <h2 className="section-title">Still Unsure? Get a <span className="text-grad">Second Opinion.</span></h2>
            <p className="large-p max-800 mx-auto mb-40">Don't rely on a "demo contractor" who just wants to bury the pool and leave. Get a geotechnical assessment from Nashville's removal authority. We'll give you the facts on your specific lot's soil, rock, and building potential.</p>
            <div className="btn-group" style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
               <Link href="/contact" className="btn btn-primary btn-xl">Request Expert Audit</Link>
               <Link href="/cost" className="btn btn-outline btn-xl">View Cost Breakdown</Link>
            </div>
         </div>
      </section>

      {/* 6. AUTHORITY HUB NAVIGATION */}
      <AuthorityHub />

      <style jsx>{`
        .comparison-page { color: var(--dark); }
        .premium-img { width: 100%; border-radius: 40px; box-shadow: var(--shadow-xl); border: 1px solid rgba(0,0,0,0.05); }
        .img-caption { margin-top: 20px; font-size: 0.9rem; font-style: italic; color: var(--secondary); text-align: right; }
        
        .mb-20 { margin-bottom: 20px; }
        .mb-30 { margin-bottom: 30px; }
        .mb-40 { margin-bottom: 40px; }
        .mb-60 { margin-bottom: 60px; }
        .max-800 { max-width: 800px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        @media (max-width: 1024px) {
           .grid-split { grid-template-columns: 1fr !important; gap: 40px !important; }
           .comparison-page h1 { font-size: 2.2rem !important; }
           .image-side { order: 2; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
