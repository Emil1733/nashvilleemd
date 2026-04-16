'use client';
import Link from 'next/link';
import { Shovel, ShieldCheck, Ruler, Hammer, Trash2, CheckCircle, ArrowRight, Construction, Layers, Zap, Info } from 'lucide-react';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorityHub from '../components/AuthorityHub';

export default function DeckAndCoping() {
  return (
    <div className="deck-page fade-in">
      <Breadcrumbs items={[{ label: 'Deck & Coping Removal' }]} />
      
      {/* 1. HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Hardscape Demolition Specialists</div>
          <h1 className="reveal-top">Nashville <span className="text-grad">Pool Deck & Coping</span> Removal</h1>
          <p className="subheadline max-800 mx-auto">Precision demolition for aged concrete decks, pavers, and coping stones. We specialize in surgical removal that preserves your home's foundation while clearing the path for new landscaping.</p>
        </div>
      </section>

      {/* 2. COST CALCULATOR - TOP PLACEMENT */}
      <section className="cta-calc-section" style={{padding: '60px 0', background: 'var(--light)', borderBottom: '1px solid var(--border)'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Clear the <span className="text-grad">Way.</span></h2>
            <p className="large-p mb-40">Ready to remove that cracked, dated concrete deck? Get a precision estimate based on your square footage and the specific thickness of your Nashville pool apron.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Concrete Recycling & Haul-Away Included</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Precision Coping Stone Extraction</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Foundation-Safe Boundary Cutting</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Request Demo Assessment <ArrowRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" />
          </div>
        </div>
      </section>

      {/* 3. THE HARDSCAPE CHALLENGE */}
      <section className="hardscape-section glass-section">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">Beyond the <span className="text-grad">Jackhammer.</span></h2>
            <p className="authority-text">Removing a Nashville pool deck is more than just breaking concrete. Older decks in neighborhoods like Crieve Hall or West Meade often hide integrated utility lines, complex drainage slopes, and varying concrete depths—sometimes up to 8 inches of reinforced material over a limestone base.</p>
            
            <p className="authority-text">We use "Impact-Reduction" demolition techniques. Instead of vibrations that can transfer through the soil and stress your home’s main foundation, we use hydraulic pulverizers and precision slab saws to isolate the deck from the house before extraction begins.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Trash2 size={32} className="icon-grad" />
                <h4>Sustainable Disposal</h4>
                <p>100% of the concrete and stone we remove is transported to Nashville recycling facilities to be crushed and reused as aggregate road base.</p>
              </div>
              <div className="p-item">
                <Construction size={32} className="icon-grad" />
                <h4>Utility Safe-Zones</h4>
                <p>Our team meticulously hand-picks around existing electrical and plumbing lines to preserve infrastructure for your new project.</p>
              </div>
            </div>
          </div>
          <div className="image-side">
            <img src="/nashville_pool_pro_favicon_1775446587731.png" alt="Nashville Pool Deck Removal" className="premium-img" />
            <div className="img-caption">Surgical removal of a 1,500 sq. ft. concrete deck, isolating it from the main residence foundation.</div>
          </div>
        </div>
      </section>

      {/* 4. HARDSCAPE MATRIX */}
      <section className="hardscape-matrix dark-bg" style={{padding: '100px 0'}}>
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">Demolition & <span className="text-grad">Recovery Matrix</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Ensuring a clean slate for your Nashville backyard restoration.</p>
          </div>
          
          <div style={{overflowX: 'auto', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.7)', fontSize: '1rem'}}>
              <thead>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Material Type</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Removal Method</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Sub-Grade Result</th>
                  <th style={{padding: '20px', textAlign: 'left', color: 'white'}}>Next Steps</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Reinforced Concrete</td>
                  <td style={{padding: '20px'}}>Slab Sawing + Pulling</td>
                  <td style={{padding: '20px'}}>Compacted Soil Base</td>
                  <td style={{padding: '20px'}}>Lawns, Pavestone, Decks</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Coping Stone & Tile</td>
                  <td style={{padding: '20px'}}>Hand-Chiseling</td>
                  <td style={{padding: '20px'}}>Clean Beam Level</td>
                  <td style={{padding: '20px'}}>Flush-Deck Conversions</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '20px'}}>Paver & Sand Base</td>
                  <td style={{padding: '20px'}}>Bulk Scraping</td>
                  <td style={{padding: '20px'}}>Graded Sub-Surface</td>
                  <td style={{padding: '20px'}}>Garden Beds, Turf</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. LONG-FORM CONTENT - THE IMPORTANCE OF DECK REMOVAL */}
      <section className="deep-content" style={{padding: '100px 0'}}>
        <div className="container max-800">
           <h2 className="section-title mb-40">Why <span className="text-grad">Partial Deck Abandonment</span> Fails.</h2>
           <div className="long-form-content" style={{lineHeight: '1.9', color: 'var(--secondary)', fontSize: '1.1rem'}}>
              <p className="mb-30">A common shortcut in Nashville is to simply bury the old pool deck under 6 inches of topsoil. While it looks good for the first six months, this is a recipe for **perpetual yard failure.** Concrete is non-porous. By burying a massive slab of concrete, you are creating a subterranean barrier that prevents deep-root growth and causes water to pool just beneath the surface, leading to muddy "dead spots" in your grass.</p>
              
              <p className="mb-30">Our deck removal service focuses on **Total Surface Extraction.** We remove 100% of the non-porous material, allowing the earth beneath your yard to breathe and drain naturally. This is especially critical in Nashville’s heavy clay soil, which requires vertical drainage to prevent foundation shifting during our wet-dry cycles.</p>
              
              <p className="mb-30">Furthermore, if you are planning a new structure—like a pergola, fire pit, or outdoor kitchen—your new foundation must sit on **Virgin or Engineered Earth.** Building on top of unremoved old concrete leads to "Ghost Cracks," where your new luxury materials shift and break along the lines of the buried slabs below. We eliminate this risk by providing a completely clean sub-grade, verified and graded for your next contractor.</p>
              
              <h3 style={{color: 'var(--dark)', marginTop: '50px', marginBottom: '20px'}}>Managing the Coping and Tile Line</h3>
              <p className="mb-30">The "Coping" is the stone or concrete lip that sits at the very edge of the pool. For homeowners who are keeping their pool but want to modernize the look, or for those doing a "Partial Removal," the coping line is the most sensitive area. We offer **Precision Coping Extraction** that removes the heavy stone without damaging the underlying structural beam of the pool, allowing for a seamless transition to modern pavers or natural stone decks.</p>
           </div>
        </div>
      </section>

      {/* 6. NEIGHBORHOODS grid */}
      <section className="neighborhoods-grid bg-light" style={{padding: '80px 0'}}>
         <div className="container">
            <div className="text-center mb-60">
               <h2 className="section-title">Nashville Neighborhood <br/><span className="text-grad">Hardscape Focus</span></h2>
               <p>Bringing premium demolition standards to every Davidson County ZIP code.</p>
            </div>
            <div className="grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px'}}>
               <div className="n-card">
                  <h4>Crieve Hall</h4>
                  <p>Specializing in 1960s-era thick-slab concrete deck removals.</p>
               </div>
               <div className="n-card">
                  <h4>West Meade</h4>
                  <p>Navigating large-scale estate demolition with zero landscape impact.</p>
               </div>
               <div className="n-card">
                  <h4>Sylvan Park</h4>
                  <p>Urban-lot specialists focusing on noise reduction and tight egress.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="faq-section" style={{padding: '100px 0'}}>
        <div className="container max-800">
          <h2 className="section-title text-center mb-60">Hardscape <span className="text-grad">Demo FAQ</span></h2>
          <div className="faq-list" style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Do you remove the dirt under the deck too?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>We typically grade the existing sub-base soil to ensure proper slope and drainage. If the underlying soil is high-plasticity clay, we may recommend replacing the top 6 inches with clean fill to ensure your new deck or lawn doesn't shift.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Can you remove just the coping stones?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Yes. If you're doing a pool renovation and just need the old, dated coping stones removed without damaging the pool shell, our precision team can execute that with specialized hand-chiseling tools.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>How long does it take to remove a 1,000 sq. ft. deck?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Typically 1 to 2 business days. This includes the initial isolation cuts, mechanical breaking, debris loading, and a final magnet-sweep to ensure no metal shards or debris remain in your yard.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 8. AUTHORITY HUB NAVIGATION */}
      <AuthorityHub />

      <style jsx>{`
        .deck-page { color: var(--dark); }
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
           .deck-page h1 { font-size: 2.22rem !important; }
           .image-side { order: 2; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
