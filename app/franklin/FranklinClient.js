'use client';
import Link from 'next/link';
import { ShieldCheck, MapPin, Ruler, HardHat, CheckCircle, ArrowRight, Gavel, Landmark, TrendingUp, Shovel, Droplets } from 'lucide-react';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorityHub from '../components/AuthorityHub';

export default function Franklin() {
  return (
    <div className="location-page fade-in">
      <Breadcrumbs items={[{ label: 'Franklin Authority' }]} />
      
      {/* 1. HERO SECTION - Hyper-Local Focus */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Williamson County #1 Demolition Specialist</div>
          <h1 className="reveal-top">Franklin <span className="text-grad">Pool Removal</span> & Site Restoration</h1>
          <p className="subheadline max-800 mx-auto">Providing Franklin homeowners with engineered, zero-liability pool demolition. From Westhaven to historic downtown, we handle the unique bedrock and regulatory requirements of Williamson County.</p>
        </div>
      </section>

      {/* 2. COST CALCULATOR - HIGH VISIBILITY (Conversion Intent) */}
      <section className="cta-calc-section" style={{padding: '60px 0', background: 'var(--light)', borderBottom: '1px solid var(--border)'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Get Your <span className="text-grad">Franklin Estimate.</span></h2>
            <p className="large-p mb-40">Ready to trade that high-maintenance pool for a custom outdoor pavilion or a pristine lawn? Use our Franklin-specific calculator to see your projected investment.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Williamson County Licensed Contractor</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Certified 95% Proctor Compaction</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> All-in-one Franklin Permit Management</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Request Site Inspection <ArrowRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" source="franklin_authority" />
          </div>
        </div>
      </section>

      {/* 3. THE FRANKLIN PROBLEM (Geology focus) */}
      <section className="geology-section glass-section">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">The "Franklin Blue" <span className="text-grad">Rock Challenge.</span></h2>
             <p className="authority-text">Many pool removal companies avoid Franklin because of the "Blue Limestone" shelf. This incredibly dense bedrock sits closer to the surface in areas like Fieldstone Farms and Westhaven than anywhere else in the Nashville basin. Read our technical guide on <Link href="/limestone-excavation" style={{color: 'var(--primary)', textDecoration: 'underline'}}>limestone rock breaking</Link> for Nashville properties.</p>
             
             <p className="authority-text">Standard demolition equipment simply bounces off this rock. We utilize 3,500lb hydraulic breakers designed specifically for igneous-density limestone, ensuring your pool floor is fractured for <Link href="/nashville-drainage" style={{color: 'var(--primary)', textDecoration: 'underline'}}>proper vertical drainage</Link>, not just "buried" to create a subterranean swamp.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Landmark size={32} className="icon-grad" />
                <h4>Franklin City Codes</h4>
                <p>Navigating the City of Franklin’s specific Zoning and Stormwater regulations to ensure your property remains a legal, buildable asset.</p>
              </div>
              <div className="p-item">
                <TrendingUp size={32} className="icon-grad" />
                <h4>Equity Preservation</h4>
                <p>A poorly filled pool can drop a Franklin home’s value by $50k+ during the home inspection phase. We provide the engineering docs to protect your equity.</p>
              </div>
            </div>
          </div>
          
          <div className="image-side">
            <img src="/nashville_limestone_breaker_1776324329961.png" alt="Franklin Limestone Breaking" className="premium-img" />
            <div className="img-caption">Breaking solid blue rock in a Westhaven backyard for drainage certification.</div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL STANDARDS MATRIX (Expertise proof) */}
      <section className="tech-matrix-section dark-bg" style={{padding: '100px 0'}}>
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">Franklin <span className="text-grad">Site Integrity Matrix</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Why our engineered approach is the only choice for Williamson County estates.</p>
          </div>
          
          <div style={{overflowX: 'auto', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.7)', fontSize: '1rem'}}>
              <thead>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Variable</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Standard Pool Demo</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Franklin Pro Standard (Ours)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Compaction Tech</td>
                  <td style={{padding: '20px'}}>Standard Bucket Tamping</td>
                  <td style={{padding: '20px'}}>5-Ton Vibratory Sheepfoot Roller</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Pore Pressure Mgmt</td>
                  <td style={{padding: '20px'}}>None (Traps Water)</td>
                  <td style={{padding: '20px'}}>Geotextile Liner + Surge Rock Base</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Title Documentation</td>
                  <td style={{padding: '20px'}}>None</td>
                  <td style={{padding: '20px'}}>Notarized Engineering Certificate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. DEEP CONTENT - WHY FULL REMOVAL MATTERS IN FRANKLIN */}
      <section className="deep-content" style={{padding: '100px 0'}}>
        <div className="container max-800">
           <h2 className="section-title mb-40">The High Stakes of <span className="text-grad">Westhaven & Fieldstone</span> Infill.</h2>
           <div className="long-form-content" style={{lineHeight: '1.9', color: 'var(--secondary)', fontSize: '1.1rem'}}>
              <p className="mb-30">Franklin, Tennessee is currently experiencing one of the highest "infill" construction booms in the Southeast. Homeowners in established neighborhoods are frequently removing old, high-maintenance pools to make way for <strong>detached garages, ADUs (Accessory Dwelling Units), or substantial house additions.</strong></p>
              
              <p className="mb-30">However, you cannot build on top of a standard "Fill-In" pool removal. In a partial removal, the concrete bowl remains underground, creating a structural fracture-point and a drainage trap. If you ever plan to build a structure—or even a heavy porcelain tile patio—your pool removal must be a <strong>Full Extraction.</strong></p>
              
              <p className="mb-30">At Nashville Pool professionals, our Franklin team specializes in the literal complete removal of every cubic inch of concrete, rebar, and plumbing. This allows us to backfill with <strong>structural-grade material</strong>, compacted to a 95% Proctor density. The result? A yard that is officially classified as "buildable," preserving your property's long-term utility and resale value. Compare our <Link href="/full-vs-partial-removal" style={{color: 'var(--primary)', textDecoration: 'underline'}}>Full vs. Partial removal options</Link> to see which is right for your Franklin estate.</p>
              
              <h3 style={{color: 'var(--dark)', marginTop: '50px', marginBottom: '20px'}}>Franklin-Specific Drainage Strategy</h3>
              <p className="mb-30">Because of Franklin’s rolling hills and dense clay, water management is the #1 failure point of amateur pool removals. We implement a subterranean flow strategy: we don't just fill the hole; we engineer a drainage path using 4-inch perforated HDPE pipe and #57 clean stone to ensure water moves <em>around</em> the fill site and away from your home’s foundation.</p>
           </div>
        </div>
      </section>

      {/* 6. NEIGHBORHOODS SERVED */}
      <section className="neighborhoods-grid bg-light" style={{padding: '80px 0'}}>
         <div className="container">
            <div className="text-center mb-60">
               <h2 className="section-title">Franklin <span className="text-grad">Neighborhood Focus</span></h2>
               <p>Deep familiarity with local lot layouts and Williamson County access routes.</p>
            </div>
            <div className="grid-4" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px'}}>
               <div className="n-card"><h4>Westhaven</h4><p>Mastering tight-access rear-entry lots.</p></div>
               <div className="n-card"><h4>Fieldstone Farms</h4><p>Managing the dense blue rock shelf.</p></div>
               <div className="n-card"><h4>Historic Downtown</h4><p>High-sensitivity heritage preservation.</p></div>
               <div className="n-card"><h4>Ladd Park</h4><p>Slope and topography management.</p></div>
            </div>
         </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="faq-section" style={{padding: '100px 0'}}>
        <div className="container max-800">
          <h2 className="section-title text-center mb-60">Franklin <span className="text-grad">Homeowner FAQ</span></h2>
          <div className="faq-list" style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Do I need a permit from the City of Franklin?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Yes. If you live within city limits, you need a Demolition Permit and potentially a Grading Permit if the site disturbace exceeds 5,000sqft. We handle the entire submittal process for you.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>What is the typical cost for pool removal in Franklin?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Franklin projects typically range from $9,000 to $22,000 depending on rock depth and whether you choose partial or full removal. Our calculator provides a more specific range for your exact lot.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Will your heavy machines crack my driveway?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>We use rubber-tracked machinery and "AlturnaMats" (HDPE ground protection) on every Franklin site. We treat your property with white-glove care, ensuring zero damage to your driveway or landscaping.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 8. AUTHORITY HUB NAVIGATION */}
      <AuthorityHub />

      <style jsx>{`
        .location-page { color: var(--dark); }
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
        .mt-60 { margin-top: 60px; }
        .max-800 { max-width: 800px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        .p-item h4 { margin-top: 15px; margin-bottom: 10px; color: var(--dark); font-weight: 800; }
        .p-item p { font-size: 0.9rem; line-height: 1.6; color: var(--secondary); }

        @media (max-width: 1024px) {
           .grid-split, .points-grid-responsive, .grid-4 { grid-template-columns: 1fr !important; gap: 40px !important; }
           .location-page h1 { font-size: 2.5rem !important; }
           .image-side { order: 2; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
