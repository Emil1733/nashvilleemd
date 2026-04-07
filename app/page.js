'use client';
import Link from 'next/link';
import Calculator from './components/Calculator';
import { 
  ShieldCheck, 
  Droplets, 
  Mountain, 
  Ruler, 
  HardHat, 
  FileText, 
  CheckCircle, 
  HelpCircle, 
  Hammer,
  Zap,
  Waves,
  Star,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does a full pool removal enable building ADUs or garages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Full Removal and Structural Fill protocol ensures the property is compacted to 95% Proctor density, providing the necessary documentation for future building permits in Metro Nashville."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for pool removal in Davidson County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Metro Nashville requires both demolition and grading permits. Nashville Pool Professionals manages the entire permit lifecycle, including final inspection sign-offs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does pool removal take in Nashville?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Nashville residential pool removals are completed in 3 to 5 business days, including limestone fracturing and final nutrient-rich topsoil application."
        }
      }
    ]
  };

  return (
    <div className="home-wrapper fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* PREMIUM HERO SECTION */}
      <section className="hero">
        <div className="container hero-grid" style={{display: 'grid', gridTemplateColumns: '1fr 450px', gap: '60px', alignItems: 'center'}}>
          <div className="hero-text">
            <div className="badge reveal-top" style={{ marginBottom: '20px', background: 'rgba(255, 255, 255, 0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>Nashville's Geotechnical Authority</div>
            <h1 className="reveal-top" style={{textAlign: 'left', marginLeft: 0}}>Nashville Pool Removal & <br/><span className="text-grad">Yard Restoration</span></h1>
            <p className="subheadline reveal-bottom" style={{ maxWidth: '600px', textAlign: 'left', margin: '0 0 40px' }}>
              Transform your liability into a lush, buildable oasis. We specialize in <strong>Nashville limestone excavation</strong>, <strong>engineered compaction</strong>, and <strong>high-velocity drainage planning</strong>.
            </p>
            <div className="trust-bullets reveal-bottom" style={{justifyContent: 'flex-start'}}>
              <div className="bullet"><ShieldCheck size={20} /> Zero-Settlement Guarantee</div>
              <div className="bullet"><HardHat size={20} /> Rock Specialists</div>
              <div className="bullet"><Droplets size={20} /> Stormwater Planning</div>
            </div>
          </div>

          <div className="hero-calc-container reveal-right">
            <Calculator variant="dark" />
          </div>
        </div>
      </section>

      {/* THE GEOTECHNICAL AUTHORITY SECTION */}
      <section className="authority-block glass-section">
        <div className="container grid" style={{display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '80px', alignItems: 'start'}}>
          <div className="content">
            <h2 className="section-title">The Nashville Geotechnical <br/><span className="text-grad">Excellence Standard.</span></h2>
            <p className="large-p">Standard pool demolition crews overlook Tennessee's unique geology. In Nashville, your backyard's longevity depends on three critical factors: rock, clay, and drainage.</p>
            
            <div className="authority-text" style={{fontSize: '1.05rem', lineHeight: '1.8'}}>
              <h4 style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}><Mountain size={20} className="icon-grad" /> Sub-Surface Limestone Management</h4>
              <p>Davidson County is anchored by solid limestone. If your pool shell is sitting on rock, generic demolition creates a "bowl" that traps water, leading to subterranean swamp conditions. We utilize heavy-duty hydraulic breakers to fracture the rock bottom, ensuring vertical drainage.</p>
              
              <h4 style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', marginTop: '30px'}}><Ruler size={20} className="icon-grad" /> Structural Lift Compaction</h4>
              <p>Our red clay soil is notoriously expansive. We employ an 8-inch lift protocol—compacting every 8 inches of new soil with a 5-ton vibratory roller. This ensures your land is dense enough to support new structures like ADUs or extensions.</p>
            </div>
          </div>

          <div className="viz-sidebar">
             <div className="viz-card premium">
                <h3>Nashville Soil Profile</h3>
                <div className="viz-progress"><div className="bar" style={{width: '10%'}}></div></div>
                <div className="viz-metric"><span className="label">Topsoil (Organic)</span><span className="value">12"</span></div>
                <div className="viz-progress"><div className="bar" style={{width: '40%'}}></div></div>
                <div className="viz-metric"><span className="label">Nashville Clay (Expansive)</span><span className="value">48"</span></div>
                <div className="viz-progress"><div className="bar" style={{width: '50%'}}></div></div>
                <div className="viz-metric"><span className="label">Limestone Shelf (Solid)</span><span className="value">Nashville Bedrock</span></div>
                <div className="badge success w-full text-center" style={{marginTop:'25px', color: 'var(--primary)', background: 'rgba(27,77,62,0.1)'}}>Geotechnically Verified</div>
             </div>
          </div>
        </div>
      </section>

      {/* THE LIMESTONE PARADOX / ACTION SECTION */}
      <section className="paradox-section bg-light">
        <div className="container grid" style={{display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '80px', alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">The Nashville <span className="text-grad">Limestone Paradox</span></h2>
            <p className="large-p">Unlike other cities, Nashville pool removal requires a specialized understanding of the <Link href="/blog/guide">limestone shelf</Link> that sits mere inches below the soil surface. This bedrock prevents standard drainage, meaning your filled pool can become a "sub-surface swamp" if not properly fractured.</p>
            <p style={{marginTop: '20px'}}>Our proprietary 8-phase system goes beyond basic demolition, ensuring your land is restored with <Link href="/services">engineered backfill</Link> and laser-guided grading to ensure 100% stable, buildable ground.</p>
            <div className="cta-row" style={{marginTop: '30px', display: 'flex', gap: '20px'}}>
               <Link href="/contact" className="btn btn-primary" style={{padding: '12px 30px'}}>Request Assessment</Link>
               <Link href="/cost" className="btn btn-outline" style={{padding: '12px 30px'}}>View Cost Breakdown</Link>
            </div>
          </div>
          <div className="image-viz reveal-right">
             <img src="/nashville-pool-excavation.png" alt="Nashville Pool Excavation Concrete Removal" style={{width: '100%', borderRadius: '30px', boxShadow: 'var(--shadow-lg)'}} />
          </div>
        </div>
      </section>

      {/* OUR 8-PHASE RESTORATION SYSTEM */}
      <section className="restoration-system">
        <div className="container">
          <div className="text-center" style={{marginBottom: '60px'}}>
            <h2 className="section-title">Our 8-Phase <span className="text-grad">Land Restoration</span> System</h2>
            <p className="large-p">A systematic approach to permanent yard recovery in Middle Tennessee.</p>
          </div>
          <div className="process-grid-main">
            {[
              { id: '01', title: 'Permits & Planning', desc: 'Acquiring Metro Nashville demo and grading permits to ensure compliance.' },
              { id: '02', title: 'Inert Shell Prep', desc: 'Draining and stripping the pool of all non-structural contaminants.' },
              { id: '03', title: 'Limestone Fracturing', desc: 'Mechanical breaking of the bedrock floor to enable vertical percolation.' },
              { id: '04', title: 'Structural Demo', desc: 'Pulverizing concrete shells into manageable aggregate for recycling.' },
              { id: '05', title: 'Hydraulic Compaction', desc: 'Leveling fill dirt in 8" lifts with 5-ton vibratory trench rollers.' },
              { id: '06', title: 'Sub-Surface Grade', desc: 'Laser-guided yard sculpting to direct runoff away from the home.' },
              { id: '07', title: 'Finish Top-Soil', desc: 'Importing nutrient-rich local topsoil for optimal sod or seed growth.' },
              { id: '08', title: 'Verification', desc: 'Final compaction testing and engineering sign-off for your property records.' }
            ].map((p) => (
              <div key={p.id} className="p-item-card">
                <div className="p-num text-grad">{p.id}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERED WATER MANAGEMENT SECTION */}
      <section className="water-management-section dark-bg">
        <div className="container">
           <div className="text-center" style={{marginBottom: '60px'}}>
              <h2 className="section-title white" style={{color: 'white'}}>Engineered <span className="text-grad">Water Management</span></h2>
              <p className="large-p" style={{color: '#adb5bd'}}>Nashville's hilly terrain and heavy rain cycles require advanced drainage strategies.</p>
           </div>
           <div className="water-actions-grid">
              <Link href="/blog/guide" className="water-card green-theme reveal-left no-underline">
                 <div className="card-status">Stabilize</div>
                 <h3>Vertical Rock <br/>Fracturing</h3>
                 <p>Breaking the limestone bedrock shelf below the pool floor to allow natural groundwater percolation, preventing "The Basin Effect."</p>
                 <div className="action-btn">Learn Strategy</div>
              </Link>
              <Link href="/services" className="water-card tan-theme reveal-bottom no-underline">
                 <div className="card-status">Control</div>
                 <h3>Engineered <br/>Surface Pitch</h3>
                 <p>Precision laser-guided grading to ensure a 2-3% yard slope away from your foundation and toward designated runoff zones.</p>
                 <div className="action-btn">View Grading Specs</div>
              </Link>
              <Link href="/contact" className="water-card blue-theme reveal-right no-underline">
                 <div className="card-status">Verify</div>
                 <h3>Compaction <br/>Log Reports</h3>
                 <p>Every Nashville project includes a 95% Proctor density report, essential for future homeowners and building permit transparency.</p>
                 <div className="action-btn">Request Site Visit</div>
              </Link>
           </div>
        </div>
      </section>

      {/* COST QUICK SUMMARY (RESTORED VERSION) */}
      <section className="quick-cost-summary bg-white">
        <div className="container">
           <div className="text-center mb-60">
             <h2 className="section-title">What Does Pool Removal <span className="text-grad">Cost in Nashville?</span></h2>
           </div>
           <div className="cost-visual-grid">
              <div className="c-viz-box">
                <div className="c-val text-grad">$6k - $8k</div>
                <div className="c-lab uppercase">Partial Removal (Standard)</div>
              </div>
              <div className="c-viz-box">
                <div className="c-val text-grad">$12k - $25k+</div>
                <div className="c-lab uppercase">Full Engineered Removal</div>
              </div>
              <div className="c-viz-box">
                <div className="c-val text-grad">3-5 Days</div>
                <div className="c-lab uppercase">Typical Project Duration</div>
              </div>
           </div>
           <p className="text-center mt-30" style={{maxWidth: '800px', margin: '30px auto 0', opacity: 0.7}}>*All pricing includes Metro Nashville permit management and zero-settlement compaction guarantee.</p>
        </div>
      </section>

      {/* SERVICE AREAS (RESTORED 4th BOX) */}
      <section className="neighborhoods bg-light">
        <div className="container">
          <div className="text-center" style={{marginBottom: '60px'}}>
            <h2 className="section-title">Nashville Service Area <br/>& <span className="text-grad">Local Expertise</span></h2>
            <p className="large-p">From the limestone shelves of Brentwood to the narrow lots of East Nashville.</p>
          </div>
          <div className="neighborhood-grid-4">
            <div className="n-card">
              <h4>Brentwood & Franklin</h4>
              <p>Taming high-density limestone bedrock with heavy hydraulic breakers.</p>
              <div className="tag">Rock Specialists</div>
            </div>
            <div className="n-card">
              <h4>East Nashville</h4>
              <p>Logistics experts for tight urban access and historical site preservation.</p>
              <div className="tag">Tight Access</div>
            </div>
            <div className="n-card">
              <h4>Belle Meade / West End</h4>
              <p>Advanced terracing and slope management for steep hillside properties.</p>
              <div className="tag">Hillside Master</div>
            </div>
            <div className="n-card">
              <h4>Hermitage / Mt. Juliet</h4>
              <p>Maximum compaction density protocols for expansive Tennessee red clay.</p>
              <div className="tag">Clay Stability</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (RESTORED SECTION) */}
      <section className="reviews-section bg-white">
        <div className="container">
          <h2 className="section-title text-center">Local Nashville <span className="text-grad">Reviews</span></h2>
          <div className="testimonial-grid" style={{marginTop: '40px'}}>
             <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>"Nashville Pool Professionals handled our Brentwood property with incredible care. They actually broke the rock bottom as promised, and our yard drained perfectly all winter."</p>
                <div className="author">— James R., Brentwood</div>
             </div>
             <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>"We had zero access in East Nashville, but they brought a small machine through our 5ft gate and left the yard perfectly flat. Fast and professional."</p>
                <div className="author">— Sarah T., East Nashville</div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (RESTORED ITEMS) */}
      <section className="faq-section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-grid" style={{marginTop: '40px'}}>
            <div className="faq-item">
               <h4><CheckCircle size={18} className="icon-grad" /> Does a full removal enable building?</h4>
               <p>Yes. With our Full Removal and Structural Fill protocol, we provide the documentation needed for future building permits (ADUs, garages, etc.).</p>
            </div>
            <div className="faq-item">
               <h4><CheckCircle size={18} className="icon-grad" /> Do I need a permit in Davidson County?</h4>
               <p>Yes. Metro Nashville requires demo and grading permits. We handle all paperwork and the final inspection process for you.</p>
            </div>
            <div className="faq-item">
               <h4><CheckCircle size={18} className="icon-grad" /> How long does the process take?</h4>
               <p>Most Nashville projects are completed in 3 to 5 business days, including limestone cracking and final sod-ready grading.</p>
            </div>
            <div className="faq-item">
               <h4><CheckCircle size={18} className="icon-grad" /> Will my property value decrease?</h4>
               <p>Actually, most homeowners see an increase in marketability and value by reclaiming yard space and removing a long-term liability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta dark-bg" style={{padding: '120px 0', textAlign: 'center'}}>
        <div className="container">
          <h2 className="section-title white">Reclaim Your Yard <span className="text-grad">Today.</span></h2>
          <div className="cta-buttons" style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
            <a href="/contact" className="btn btn-primary btn-xl">Get Your Free Estimate</a>
            <a href="tel:6153983421" className="btn btn-outline btn-xl" style={{color: 'white', borderColor: 'white'}}>Call: (615) 398-3421</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-grid { padding-top: 60px; }
        .hero-calc-container { position: relative; z-index: 10; }

        /* PROCESS GRID */
        .process-grid-main { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; margin-top: 40px; }
        .p-item-card { background: white; padding: 30px; border-radius: 20px; box-shadow: var(--shadow-sm); border: 1px solid #f0f0f0; transition: var(--transition); }
        .p-item-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); border-color: var(--primary); }
        .p-num { font-size: 2.5rem; font-weight: 900; opacity: 0.15; margin-bottom: 10px; }
        .p-item-card h4 { margin-bottom: 10px; color: var(--dark); }
        .p-item-card p { font-size: 0.85rem; line-height: 1.6; opacity: 0.8; }

        /* WATER MANAGEMENT STYLES */
        .water-actions-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .water-card { padding: 40px; border-radius: 24px; color: white; transition: var(--transition); position: relative; overflow: hidden; cursor: pointer; }
        .water-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .green-theme { background: #51cf66; }
        .tan-theme { background: #d4a373; }
        .gray-theme { background: #495057; }
        .card-status { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 800; margin-bottom: 15px; opacity: 0.8; }
        .water-card h3 { font-size: 1.8rem; margin-bottom: 20px; line-height: 1.2; color: white; }
        .water-card p { font-size: 0.95rem; line-height: 1.6; opacity: 0.9; margin-bottom: 30px; }
        .action-btn { display: inline-block; padding: 10px 20px; background: rgba(255,255,255,0.2); border-radius: 30px; font-size: 0.8rem; font-weight: 700; backdrop-filter: blur(5px); }

        /* COST VIZ */
        .cost-visual-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 40px; }
        .c-viz-box { background: #f8f9fa; padding: 40px; border-radius: 24px; text-align: center; border: 1px solid #eee; }
        .c-val { font-size: 2.2rem; font-weight: 900; margin-bottom: 10px; }
        .c-lab { font-size: 0.75rem; font-weight: 800; color: var(--secondary); letter-spacing: 1px; }

        /* NEIGHBORHOOD 4-GRID */
        .neighborhood-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .n-card { background: white; padding: 30px; border-radius: 20px; border: 1px solid #eee; transition: var(--transition); }
        .n-card:hover { border-color: var(--primary); }
        .n-card h4 { margin-bottom: 10px; }
        .n-card p { font-size: 0.85rem; opacity: 0.8; line-height: 1.6; margin-bottom: 15px; }
        .tag { display: inline-block; padding: 4px 12px; background: rgba(27,77,62,0.05); color: var(--primary); border-radius: 15px; font-size: 0.7rem; font-weight: 800; }

        /* REVIEWS */
        .testimonial-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .review-card { background: #fdfdfd; padding: 40px; border-radius: 24px; border: 1px solid #f1f1f1; position: relative; }
        .stars { color: var(--accent); margin-bottom: 15px; font-size: 0.9rem; }
        .author { margin-top: 20px; font-weight: 800; font-size: 0.85rem; color: var(--primary); }

        @media (max-width: 1024px) {
           .process-grid-main, .water-actions-grid, .cost-visual-grid, .neighborhood-grid-4, .testimonial-grid { 
             grid-template-columns: 1fr !important; 
             gap: 20px !important; 
           }
           .hero-calc-container { margin-top: 40px; }
           .water-card { padding: 30px 20px !important; }
        }


      `}</style>
    </div>
  );
}
