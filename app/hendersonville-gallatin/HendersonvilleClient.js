'use client';
import Link from 'next/link';
import { Waves, ShieldCheck, MapPin, Ruler, HardHat, CheckCircle, ArrowRight, Anchor, Construction, Droplets } from 'lucide-react';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorityHub from '../components/AuthorityHub';

export default function HendersonvilleGallatin() {
  return (
    <div className="location-page fade-in">
      <Breadcrumbs items={[{ label: 'Hendersonville Authority' }]} />
      
      {/* 1. HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Sumner County Pool Removal Experts</div>
          <h1 className="reveal-top">Pool removal in <span className="text-grad">Hendersonville & Gallatin</span></h1>
          <p className="subheadline max-800 mx-auto">Providing the "City by the Lake" with high-precision, geotechnical pool demolition. We specialize in lakeside logistics, Old Hickory Lake setbacks, and Hendersonville's unique alluvial soil profiles.</p>
        </div>
      </section>

      {/* 2. COST CALCULATOR - TOP PLACEMENT */}
      <section className="cta-calc-section" style={{padding: '60px 0', background: 'var(--light)', borderBottom: '1px solid var(--border)'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Reclaim Your <span className="text-grad">Lakeside View.</span></h2>
            <p className="large-p mb-40">Ready to replace that high-maintenance pool with a sweeping lawn that leads to the water? Use our Hendersonville-specific calculator to get an engineering-grade quote.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Old Hickory Lake Setback Expertise</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Sumner County Licensed & Bonded</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Precision Shoreline Logistics</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Request Lakeside Assessment <ArrowRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" source="hendersonville_authority" />
          </div>
        </div>
      </section>

      {/* 3. THE HENDERSONVILLE CHALLENGE */}
      <section className="lakeside-focus glass-section">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">The <span className="text-grad">Lakeside Factor.</span></h2>
            <p className="authority-text">Hendersonville and Gallatin properties often sit near the Old Hickory Lake flowage easement. Removing a pool in these areas isn't just a demolition job—it's a hydrological one. Disturbed soil near the shoreline can lead to sediment runoff and water-table issues. Read about our <Link href="/nashville-drainage" style={{color: 'var(--primary)', textDecoration: 'underline'}}>lakeside drainage solutions</Link> for proper environmental management.</p>
            
            <p className="authority-text">We specialize in "Alluvial Soil Management," utilizing specialized silt-trap technology and heavy-duty moisture barriers to ensure your pool removal project doesn't negatively impact the lake or your neighbors' downstream properties.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Anchor size={32} className="icon-grad" />
                <h4>Flowage Easement Compliance</h4>
                <p>Ensuring all work stays within the legal boundaries of the Army Corps of Engineers and Sumner County zoning.</p>
              </div>
              <div className="p-item">
                <Droplets size={32} className="icon-grad" />
                <h4>High Water-Table Prep</h4>
                <p>Properties near the Cumberland River require advanced de-watering techniques during the pool extraction phase.</p>
              </div>
            </div>
          </div>
          <div className="image-side">
            <img src="/nashville_backyard_reclaimed_1775457183161.png" alt="Hendersonville Pool Removal Lakeshore" className="premium-img" />
            <div className="img-caption">Recent 100% extraction on a lake-front lot in Indian Lake Forest, Hendersonville.</div>
          </div>
        </div>
      </section>

      {/* 4. NORTHERN BASIN MATRIX */}
      <section className="protection-matrix dark-bg" style={{padding: '80px 0'}}>
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">Northern Basin <span className="text-grad">Geotechnical Standards</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Understanding the soil transition from Nashville to Sumner County.</p>
          </div>
          <div style={{overflowX: 'auto', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.7)', fontSize: '1rem'}}>
              <thead>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Environmental Risk</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Coastal/Lake Zone</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Inland Hendersonville</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Soil Type</td>
                  <td style={{padding: '20px'}}>Sandy Alluvium (Loose)</td>
                  <td style={{padding: '20px'}}>High-Plasticity Clay</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Compaction Needs</td>
                  <td style={{padding: '20px'}}>High-Frequency Vibration</td>
                  <td style={{padding: '20px'}}>Mechanical Kneading Lifts</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Drainage Target</td>
                  <td style={{padding: '20px'}}>Lake-Runoff Control</td>
                  <td style={{padding: '20px'}}>Vertical Aquifer Release</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. LONG-FORM CONTENT - THE LEGACY POOL CHALLENGE */}
      <section className="deep-content" style={{padding: '100px 0'}}>
        <div className="container max-800">
           <h2 className="section-title mb-40">Tackling the <span className="text-grad">"70s Era" Pool</span> in Hendersonville.</h2>
           <div className="long-form-content" style={{lineHeight: '1.9', color: 'var(--secondary)', fontSize: '1.1rem'}}>
              <p className="mb-30">Hendersonville and Gallatin have a unique concentration of 1970s and 80s "concrete castle" pools. These structures were built with massive amounts of over-engineered concrete and rebar that now, decades later, are failing. The vinyl liners have leaked, the plumbing has corroded, and the cost of repair often exceeds the cost of a full demolition.</p>
              
              <p className="mb-30">Our team understands the specific construction methods used in these older Sumner County neighborhoods. When we perform a <strong>Full Extraction</strong> in an area like Saundersville or Fairvue Plantation, we don't just "break the floor." We remove every pound of that 40-year-old debris and haul it to certified processors, ensuring your property is 100% clean for the next generation of building.</p>
              
              <p className="mb-30">Furthermore, the "lake life" transition is a major trend in Gallatin. Homeowners are removing old pools to install professional-grade <strong>fire pits, boat-prep garages, or expanded lake-view decks.</strong> These structures require a soil density that can only be achieved through our engineered 95% Proctor compaction protocol.</p>
              
              <h3 style={{color: 'var(--dark)', marginTop: '50px', marginBottom: '20px'}}>Managing Sumner County Permits</h3>
              <p className="mb-30">Local laws in Gallatin and Hendersonville can differ from the Metro Nashville core. We maintain a professional relationship with the **Sumner County Building and Codes Department**, ensuring your project is fully permitted and signed off by the necessary inspectors before we demobilize. This protects your ability to sell your home without "unpermitted work" flags on your property disclosure.</p>
           </div>
        </div>
      </section>

      {/* 6. NEIGHBORHOODS grid */}
      <section className="neighborhoods-grid bg-light" style={{padding: '80px 0'}}>
         <div className="container">
            <div className="text-center mb-60">
               <h2 className="section-title">Sumner County <span className="text-grad">Enclaves Served</span></h2>
               <p>Dedicated logistical support for all northern Nashville suburbs.</p>
            </div>
            <div className="grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px'}}>
               <div className="n-card">
                  <h4>Indian Lake Forest</h4>
                  <p>Managing high-water table logistics near the Drakes Creek reach.</p>
               </div>
               <div className="n-card">
                  <h4>Fairvue Plantation</h4>
                  <p>White-glove estate care for Gallatin's premier golf and lake community.</p>
               </div>
               <div className="n-card">
                  <h4>Saundersville Station</h4>
                  <p>Precision removal for high-density suburban lots with narrow entry-points.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="faq-section" style={{padding: '100px 0'}}>
        <div className="container max-800">
          <h2 className="section-title text-center mb-60">Hendersonville <span className="text-grad">Demolition FAQ</span></h2>
          <div className="faq-list" style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Do you work in Gated Communities in Gallatin?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Yes. We coordinate directly with HOAs and security management to ensure our machinery and transport trucks comply with weight limits and noise ordinances typical of neighborhoods like Foxland or Fairvue.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>How do you handle the sandy soil near Old Hickory Lake?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Sandy or alluvial soil requires high-frequency vibratory compaction to "lock" the particles together. We use specialized smooth-drum rollers for these sites to ensure the ground is as solid as a residential foundation.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Is it cheaper to remove a pool in Hendersonville than Nashville?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Costs are comparable, but Hendersonville often has lighter rock-breaking requirements than Green Hills, which can lead to lower "Machine-Hour" surcharges. Use our calculator for an accurate estimate.</p>
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
        .max-800 { max-width: 800px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        .p-item h4 { margin-top: 15px; margin-bottom: 10px; color: var(--dark); font-weight: 800; }
        .p-item p { font-size: 0.9rem; line-height: 1.6; color: var(--secondary); }

        @media (max-width: 1024px) {
           .grid-split, .points-grid-responsive, .grid-3 { grid-template-columns: 1fr !important; gap: 40px !important; }
           .location-page h1 { font-size: 2.22rem !important; }
           .image-side { order: 2; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
