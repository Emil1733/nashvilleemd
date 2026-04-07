'use client';
import { Clock, MapPin, ChevronRight, CheckCircle, AlertTriangle, Info, ShieldCheck, HardHat, TrendingUp, DollarSign, LandPlot, Droplets, Mountain, Award } from 'lucide-react';

export default function BlogGuide() {
  const Heading = ({ icon, text, size = 18 }) => (
    <h4 style={{display: 'flex', alignItems: 'center', gap: '10px', fontSize: `${size}px`, color: 'var(--primary)', fontWeight: 800}}>
      {icon} {text}
    </h4>
  );

  return (
    <article className="blog-page fade-in">
      {/* BLOG HERO - High Editorial Authority */}
      <header className="blog-hero" style={{padding: '120px 0 60px', background: '#fff', borderBottom: '1px solid #f1f1f1'}}>
        <div className="container">
          <div className="meta" style={{display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '25px', fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 600}}>
            <span className="badge" style={{background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '30px'}}>Ultimate Authority Guide</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}><Clock size={14} /> Comprehensive 2026 Edition</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}><MapPin size={14} /> Localized for Middle Tennessee</span>
          </div>
          <h1 className="reveal-top" style={{fontSize: 'clamp(2.2rem, 8vw, 4rem)', letterSpacing: '-1px', marginBottom: '25px', lineHeight: '1.2', color: 'var(--dark)'}}>The Definitive Guide to <br/><span className="text-grad">Pool Removal in Nashville</span></h1>
          <p className="subheadline" style={{maxWidth: '850px', fontSize: 'clamp(1rem, 4vw, 1.35rem)', color: 'var(--secondary)', lineHeight: '1.6', color: 'var(--secondary)'}}>An exhaustive deep-dive into geotechnical engineering, limestone excavation, Metro Nashville permits, and property value reclamation for the Middle Tennessee homeowner.</p>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <section className="blog-body" style={{padding: '100px 0'}}>
        <div className="container grid" style={{display: 'grid', gridTemplateColumns: 'minmax(250px, 320px) 1fr', gap: '80px', alignItems: 'start'}}>
          
          {/* STICKY TOC */}
          <aside className="table-of-contents" style={{padding: '35px', background: 'white', borderRadius: '24px', position: 'sticky', top: '120px', border: '1px solid rgba(27, 77, 62, 0.05)', boxShadow: 'var(--shadow-sm)'}}>
            <h4 style={{marginBottom: '20px', borderBottom: '3px solid var(--primary)', paddingBottom: '12px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px'}}>Guide Navigation</h4>
            <ul style={{fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 500, listStyle: 'none'}}>
              <li style={{marginBottom: '15px'}}><a href="#intro" className="toc-link">1. The Nashville Paradox</a></li>
              <li style={{marginBottom: '15px'}}><a href="#methods" className="toc-link">2. Removal Methods: Full vs Partial</a></li>
              <li style={{marginBottom: '15px'}}><a href="#geotechnical" className="toc-link">3. The Limestone & Clay Challenge</a></li>
              <li style={{marginBottom: '15px'}}><a href="#process" className="toc-link">4. The 8-Phase Restoration Cycle</a></li>
              <li style={{marginBottom: '15px'}}><a href="#permits" className="toc-link">5. Metro Nashville Permitting</a></li>
              <li style={{marginBottom: '15px'}}><a href="#real-estate" className="toc-link">6. Real Estate & Equity Impact</a></li>
              <li style={{marginBottom: '15px'}}><a href="#faqs" className="toc-link">7. Nashville Specific FAQs</a></li>
            </ul>
            <div className="toc-cta" style={{marginTop:'40px', padding:'20px', background: 'rgba(27,77,62,0.05)', borderRadius: '12px'}}>
               <p style={{fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, marginBottom:'10px'}}>Need an Immediate Quote?</p>
               <a href="/contact" className="btn btn-primary btn-sm w-full">Request Assessment</a>
            </div>
          </aside>

          {/* MAIN ARTICLE CONTENT */}
          <div className="article-content" style={{maxWidth: '850px', fontSize: '1.15rem', color: '#333', lineHeight: '1.85'}}>
            
            <section id="intro">
              <p className="lead" style={{fontSize: '1.4rem', fontWeight: 500, color: 'var(--dark)', marginBottom: '50px', lineHeight: '1.7', borderLeft: '4px solid var(--accent)', paddingLeft: '30px'}}>For homeowners in neighborhoods like Oak Hill, Forest Hills, and Belle Meade, the shimmering blue backyard pool is increasingly being viewed through a different lens: <strong>as a high-maintenance liability.</strong> In Nashville's red-hot real estate market, reclaimed land is often worth more than a 30-year-old concrete basin.</p>
              
              <h2 style={{fontSize: '2.5rem', marginBottom: '30px', color: 'var(--dark)'}}>1. The Nashville Pool Paradox</h2>
              <p>While Nashville enjoys warm summers, the "usable season" for an unheated pool is remarkably short. When you combine the energy costs of heating, the chemical maintenance cycles, and the inevitable structural repairs required by Tennessee's shifting clay soils, the math often points toward removal.</p>
              
              <p>Furthermore, Nashville's landscape has moved toward outdoor living suites—think pavilions, outdoor kitchens, and fire pits—that require more flat, stable yard space than a pool footprint allows. Reclaiming your yard isn't just about demolition; it's about unlocking the next 2,000 square feet of your lifestyle.</p>
            </section>

            <section id="methods" style={{marginTop: '80px'}}>
              <h2 style={{fontSize: '2.5rem', marginBottom: '30px', color: 'var(--dark)'}}>2. Removal Methodologies: Full vs. Partial</h2>
              <p>One of the most critical decisions is the scope of removal. In Nashville, this choice is often dictated by your property's topography.</p>

              <div className="method-box" style={{background: '#f8f9fa', padding: '40px', borderRadius: '24px', margin: '40px 0', border: '1px solid #eee'}}>
                 <h4 style={{display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)'}}><ShieldCheck /> Partial Removal (Structural Abandonment)</h4>
                 <p style={{fontSize: '1rem', marginTop: '15px'}}>In this scenario, we remove the top 2-3 feet of the pool's concrete beam. Holes are jackhammered into the floor of the pool for drainage, and the remainder is backfilled. <strong>Cost: $6,000 - $11,000.</strong></p>
                 <p style={{fontSize: '1rem', marginTop: '10px'}}><em>Best for:</em> Flat properties where the homeowners don't plan on building permanent structures (ADUs) in the future.</p>
              </div>

              <div className="method-box" style={{background: 'var(--white)', padding: '40px', borderRadius: '24px', margin: '40px 0', border: '2px solid var(--primary)', boxShadow: 'var(--shadow-md)'}}>
                 <h4 style={{display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)'}}><Award /> Full Removal (Engineered Demolition)</h4>
                 <p style={{fontSize: '1rem', marginTop: '15px'}}>Every ounce of concrete, steel, and vinyl is removed from the property. The void is سپس backfilled with engineered lifts of soil and compacted to 95% Proctor density. <strong>Cost: $12,000 - $22,000+.</strong></p>
                 <p style={{fontSize: '1rem', marginTop: '10px'}}><em>Best for:</em> Sloped Nashville lots, properties with drainage concerns, and anyone wanting to maximize home resale value or build future structures.</p>
              </div>
            </section>

            <section id="geotechnical" style={{marginTop: '80px'}}>
              <h2 style={{fontSize: '2.5rem', marginBottom: '30px', color: 'var(--dark)'}}>3. The Limestone & Clay Challenge</h2>
              <p>Middle Tennessee geology presents unique hurdles that "standard" demolition crews often overlook. Nashville sits on an massive shelf of Ordovician limestone. In many backyards (especially in West Nashville), this rock is just 12 inches below the grass.</p>
              
              <div className="logic-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', margin: '40px 0'}}>
                <div className="logic-card" style={{padding: '30px', background: 'rgba(212, 163, 115, 0.05)', borderRadius: '16px', borderLeft: '4px solid var(--accent)'}}>
                  <Heading size={18} icon={<Mountain />} text="The Limestone Shelf" />
                  <p style={{fontSize: '0.95rem', marginTop: '10px'}}>If we hit rock during a removal, we use 8,000lb hydraulic breakers. Failing to address sub-surface rock can lead to "perched water tables" where your new lawn becomes a swamp after rain.</p>
                </div>
                <div className="logic-card" style={{padding: '30px', background: 'rgba(27, 77, 62, 0.05)', borderRadius: '16px', borderLeft: '4px solid var(--primary)'}}>
                  <Heading size={18} icon={<Droplets />} text="Nashville Expansive Clay" />
                  <p style={{fontSize: '0.95rem', marginTop: '10px'}}>Tennessee's red clay expands and contracts with moisture. Without mechanical compaction during backfill, your pool void will sink 6-12 inches over the next 24 months.</p>
                </div>
              </div>
            </section>

            <section id="process" style={{marginTop: '80px'}}>
              <h2 style={{fontSize: '2.5rem', marginBottom: '30px', color: 'var(--dark)'}}>4. The 8-Phase Restoration Cycle</h2>
              <p>We've standardized our Nashville pool removals into a precise 8-phase system to ensure consistency and quality control:</p>
              
              <ul className="authority-list" style={{listStyle: 'none', padding: '0', marginTop: '40px'}}>
                <li style={{marginBottom: '30px'}}>
                  <span style={{fontWeight: 900, color: 'var(--primary)', fontSize: '1.5rem', display: 'block'}}>Phase 1: Safe-Off & Permitting</span>
                  <p style={{marginTop: '10px'}}>We coordinate with Nashville Electric Service (NES) and Metro Water Services to ensure all power, gas, and water lines are capped and safe before machinery arrives.</p>
                </li>
                <li style={{marginBottom: '30px'}}>
                  <span style={{fontWeight: 900, color: 'var(--primary)', fontSize: '1.5rem', display: 'block'}}>Phase 2: Access & Protection</span>
                  <p style={{marginTop: '10px'}}>Rubber mats are laid over driveways and root protection zones are marked for mature trees. We use low-impact equipment to preserve your property.</p>
                </li>
                <li style={{marginBottom: '30px'}}>
                  <span style={{fontWeight: 900, color: 'var(--primary)', fontSize: '1.5rem', display: 'block'}}>Phase 3: Structural Demolition</span>
                  <p style={{marginTop: '10px'}}>Utilizing heavy-duty excavators to break and pull the concrete shell. We minimize vibrational impact to nearby structures (like your home foundation).</p>
                </li>
                <li style={{marginBottom: '30px'}}>
                   <span style={{fontWeight: 900, color: 'var(--primary)', fontSize: '1.5rem', display: 'block'}}>Phase 4: Debris Hauling</span>
                   <p style={{marginTop: '10px'}}>Clean concrete is hauled to specialized recycling centers, keeping Nashville's landfills free of unnecessary waste.</p>
                </li>
                {/* ... Continuing the high-word count expansion ... */}
                <li style={{marginBottom: '30px'}}>
                   <span style={{fontWeight: 900, color: 'var(--primary)', fontSize: '1.5rem', display: 'block'}}>Phase 5: Geotechnical Fill</span>
                   <p style={{marginTop: '10px'}}>Importing regional chert and structural fill. This phase is critical for the long-term stability of the land.</p>
                </li>
                <li style={{marginBottom: '30px'}}>
                   <span style={{fontWeight: 900, color: 'var(--primary)', fontSize: '1.5rem', display: 'block'}}>Phase 6: Lift-Based Compaction</span>
                   <p style={{marginTop: '10px'}}>Using vibratory rollers to compact soil in 8-inch increments. We aim for 95% density to mirror the surrounding native soil.</p>
                </li>
                <li style={{marginBottom: '30px'}}>
                   <span style={{fontWeight: 900, color: 'var(--primary)', fontSize: '1.5rem', display: 'block'}}>Phase 7: Final Precision Grading</span>
                   <p style={{marginTop: '10px'}}>Laser-guided grading ensures that rainfall is directed away from the home and safely into designated runoff zones.</p>
                </li>
                <li style={{marginBottom: '30px'}}>
                   <span style={{fontWeight: 900, color: 'var(--primary)', fontSize: '1.5rem', display: 'block'}}>Phase 8: Finish & Seeding</span>
                   <p style={{marginTop: '10px'}}>A clean layer of nutrient-rich topsoil is applied, followed by high-quality Tennessee fescue seed and straw to kickstart your new lawn.</p>
                </li>
              </ul>
            </section>

            <section id="permits" style={{marginTop: '80px'}}>
              <h2 style={{fontSize: '2.5rem', marginBottom: '30px', color: 'var(--dark)'}}>5. Metro Nashville Permitting</h2>
              <p>Davidson County homeowners are subject to strict demolition codes. A legal pool removal requires a permit from the Metro Department of Codes and Building Safety. This ensures that the demo doesn't negatively impact neighborhood drainage or utility easements.</p>
              <div className="alert-box" style={{background: '#fffbe6', padding: '30px', borderRadius: '12px', border: '1px solid #ffe58f', display: 'flex', gap: '20px', alignItems: 'start', margin: '40px 0'}}>
                <AlertTriangle style={{color: '#856404'}} />
                <p style={{fontSize: '0.95rem', color: '#856404'}}><strong>Warning:</strong> Performing a pool removal without a permit can lead to massive fines in Davidson County and major issues during a title search when you try to sell your home.</p>
              </div>
            </section>

            <section id="real-estate" style={{marginTop: '80px'}}>
               <h2 style={{fontSize: '2.5rem', marginBottom: '30px', color: 'var(--dark)'}}>6. Real Estate & Equity Impact</h2>
               <p>In many cases, removing an aging pool can actually <em>increase</em> your home's pool of potential buyers by 40-50%. Many families with small children or those looking for gardening space are actively deterred by a pool. By removing the liability, you are opening up your home to the widest possible market in high-demand areas like 12 South, Sylvan Park, and The Gulch.</p>
            </section>

            <section id="faqs" style={{marginTop: '80px'}}>
               <h2 style={{fontSize: '2.5rem', marginBottom: '30px', color: 'var(--dark)'}}>7. Common Nashville Questions</h2>
               <div className="faq-grid" style={{fontSize: '1rem', marginTop: '40px'}}>
                  <div className="faq-q" style={{marginBottom: '30px'}}>
                    <p style={{fontWeight: 800, color: 'var(--primary)'}}>How long does the whole process take?</p>
                    <p style={{marginTop: '10px'}}>A standard Nashville residential pool removal takes 3 to 5 business days, including final grading.</p>
                  </div>
                  <div className="faq-q" style={{marginBottom: '30px', paddingTop: '30px', borderTop: '1px solid #eee'}}>
                    <p style={{fontWeight: 800, color: 'var(--primary)'}}>Will my yard be a mud pit for months?</p>
                    <p style={{marginTop: '10px'}}>We use rubber-tracked equipment and apply straw/seed immediately. With standard Tennessee weather, you'll have a lush green lawn within 4-6 weeks.</p>
                  </div>
                  <div className="faq-q" style={{marginBottom: '30px', paddingTop: '30px', borderTop: '1px solid #eee'}}>
                    <p style={{fontWeight: 800, color: 'var(--primary)'}}>Do you handle the gas and electrical lines?</p>
                    <p style={{marginTop: '10px'}}>Yes. We coordinate all utility safe-offs and capping to ensure your property meets all Davidson County safety standards.</p>
                  </div>
               </div>
            </section>

            <div className="mega-cta" style={{background: 'var(--dark)', color: 'white', padding: 'clamp(40px, 10vw, 100px) clamp(20px, 5vw, 80px)', borderRadius: '40px', textAlign: 'center', marginTop: '120px', position: 'relative', overflow: 'hidden'}}>
               <div style={{position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--primary)', borderRadius: '50%', opacity: 0.2}}></div>
               <h2 style={{color: 'white', fontSize: 'clamp(1.8rem, 6vw, 3rem)', marginBottom: '20px'}}>Ready to Reclaim Your Landscape?</h2>
               <p style={{color: '#adb5bd', marginBottom: '50px', fontSize: 'clamp(1rem, 4vw, 1.3rem)', maxWidth: '600px', margin: '0 auto 50px'}}>Contact Nashville's geotechnical demolition experts today for a precise site assessment and quote.</p>
               <div className="cta-group-center" style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
                 <a href="/contact" className="btn btn-accent btn-xl">Get Started Now</a>
                 <a href="/cost" className="btn btn-outline btn-lg" style={{borderColor: 'white', color: 'white'}}>View Cost Calculator</a>
               </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .toc-link { color: var(--secondary); text-decoration: none; transition: var(--transition); display: block; padding: 5px 0; }
        .toc-link:hover { color: var(--primary); padding-left: 10px; }
        .authority-list span { letter-spacing: -0.5px; }
        
        @media (max-width: 1024px) {
          .blog-body .container { grid-template-columns: 1fr !important; }
          .table-of-contents { display: none; }
          .logic-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 768px) {
          .blog-hero h1 { font-size: 2.2rem !important; }
          .blog-body { padding: 40px 0 !important; }
          .method-box { padding: 25px !important; }
          .mega-cta { border-radius: 20px !important; }
        }
      `}</style>
    </article>
  );
}

function Heading({ icon, text, size }) {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px'}}>
      <div className="icon-grad">{icon}</div>
      <h4 style={{fontSize: `${size}px`, color: 'var(--dark)', fontWeight: 800}}>{text}</h4>
    </div>
  );
}
