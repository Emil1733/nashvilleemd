'use client';
import Link from 'next/link';
import { Mountain, MapPin, ShieldCheck, Droplets, HardHat, Hammer, Trash2, CheckCircle, Award, Users, Warehouse } from 'lucide-react';

export default function About() {
  return (
    <div className="about-page fade-in">
      {/* HERO SECTION - Establishing Authority */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Established Nashville Construction Professionals</div>
          <h1 className="reveal-top">The Geotechnical Authority for <br/><span className="text-grad">Nashville Pool Removal</span></h1>
          <p className="subheadline max-800 mx-auto">We don't just "fill in" holes; we reclaim land. Our Nashville-based team specializes in the complex interplay between Middle Tennessee's limestone shelf, local drainage patterns, and property value optimization.</p>
        </div>
      </section>

      {/* CORE IDENTITY BLOCK */}
      <section className="about-main glass-section">
        <div className="container grid" style={{display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start'}}>
          <div className="content">
            <h2 className="section-title">Beyond Standard <span className="text-grad">Demolition.</span></h2>
            <p className="authority-text">Most general contractors see a pool as a concrete object. We see it as a 200,000-pound geotechnical challenge sitting in your backyard. In Nashville, where the weather is unpredictable and the soil is heavy with clay, a poorly executed pool removal can lead to foundation shifts, swampy yards, and sinkholes.</p>
            
            <p className="authority-text">Our company was founded with a singular mission: to provide Nashville homeowners with a "Zero-Variable" demolition experience. We own our fleet of specialized tight-access machinery, we employ our own rock-hammer operators, and we handle the complex Metro Nashville permitting process from start to finish.</p>
            
            <div className="points-grid-mini" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Mountain size={32} className="icon-grad" />
                <h4>Nashville Rock Specialists</h4>
                <p>We are one of the few local crews equipped with the hydraulic breaking power to handle the limestone shelf that often sits just inches below Nashville's surface.</p>
              </div>
              <div className="p-item">
                <Droplets size={32} className="icon-grad" />
                <h4>Hydro-Logic Grading</h4>
                <p>We understand Tennessee rainfall cycles. Every yard is graded with custom surface-flow logic to protect your home's integrity.</p>
              </div>
            </div>
            
            <div style={{marginTop: '40px'}}>
               <img src="/reclaimed-nashville-backyard.png" alt="Nashville Yard Reclaimed after Pool Removal" style={{width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-md)'}} />
               <p style={{fontSize: '0.85rem', marginTop: '10px', fontStyle: 'italic', opacity: 0.7}}>One of our recent land reclamation projects in Green Hills, TN.</p>
            </div>
          </div>
          
          <div className="image-side-box premium">
             <div className="viz-card premium">
                <div className="stat-card" style={{marginBottom: '40px'}}>
                   <div style={{fontSize: '3.5rem', fontWeight:900, color: 'var(--primary)'}}>350+</div>
                   <div style={{fontSize: '0.8rem', fontWeight:800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px'}}>Yards Reclaimed in TN</div>
                </div>
                <div className="stat-card" style={{marginBottom: '40px'}}>
                   <div style={{fontSize: '3.5rem', fontWeight:900, color: 'var(--primary)'}}>100%</div>
                   <div style={{fontSize: '0.8rem', fontWeight:800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px'}}>In-House Equipment</div>
                </div>
                <div className="badge success w-full text-center">Fully Licensed & Insured</div>
             </div>
             <div className="nashville-seal" style={{marginTop: '30px', textAlign: 'center', opacity: 0.6}}>
               <Warehouse size={40} />
               <p style={{fontSize: '0.75rem', fontWeight:700}}>Proudly Headquartered in Nashville, TN</p>
             </div>
          </div>
        </div>
      </section>

      {/* WHY US / VALUES SECTION */}
      <section className="why-us dark-bg">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h2 className="section-title white" style={{color: 'white'}}>The Nashville <span className="text-grad">Property Standard</span></h2>
            <p className="max-800 mx-auto" style={{opacity: 0.8}}>Why discerning homeowners in Belle Meade, Brentwood, and Franklin choose our specialized team over generic excavation crews.</p>
          </div>

          <div className="values-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px'}}>
             <div className="v-card">
               <ShieldCheck className="icon-grad" size={32} />
               <h4>Zero-Risk Disposal</h4>
               <p style={{opacity: 0.7, fontSize: '0.9rem'}}>Many "cheap" crews illegal dump concrete in Nashville creekbeds. We use only certified Class IV inert landfills and provide weight-tickets for every ton of debris removed.</p>
             </div>
             <div className="v-card">
               <Users className="icon-grad" size={32} />
               <h4>Neighborhood Sensitivity</h4>
               <p style={{opacity: 0.7, fontSize: '0.9rem'}}>We know Nashville. From East Nashville narrow alleys to Sylvan Park's tree-lined streets, we use rubber-tracked equipment to minimize impact.</p>
             </div>
             <div className="v-card">
               <Award className="icon-grad" size={32} />
               <h4>The "Buildable" Guarantee</h4>
               <p style={{opacity: 0.7, fontSize: '0.9rem'}}>If you choose our Full Removal service, we provide a "Compaction Certification" packet, essential for future homeowners and building permits.</p>
             </div>
          </div>
          <div className="image-side-box">
             <div className="stat-card" style={{padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', marginBottom: '30px'}}>
                <h3 className="text-grad" style={{fontSize: '3rem', fontWeight: 900, marginBottom: '5px'}}>350+</h3>
                <p style={{fontSize: '0.8rem', color: 'white', fontWeight: 700}}>RECLAIMED YARDS IN NASHVILLE</p>
             </div>
             <p style={{fontSize: '0.9rem', lineHeight: '1.7', opacity: 0.8}}>Our team consists of veteran demolition operators and soil engineers who live right here in the Mid-State area. We don't use day-laborers; we use a dedicated team of rock-breaking experts.</p>
          </div>
        </div>
      </section>

      {/* VALUES / STATS SECTION */}
      <section className="values-section dark-bg">
        <div className="container">
          <div className="grid-split" style={{alignItems: 'center'}}>
             <div>
                <h2 className="section-title white" style={{color: 'white'}}>The Nashville <span className="text-grad">Property Standard</span></h2>
                <p className="mb-40" style={{marginBottom: '40px'}}>Every project we undertake is certified to the highest municipal standards. In Davidson, Williamson, and Wilson counties, a "Nashville Pool Pro" yard is recognized by realtors as a value-positive asset.</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                   <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> 95% Soil Compaction Guarantee</div>
                   <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Certified Clean Fill Material</div>
                   <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> 24-Hour Permitting Expediting</div>
                </div>
             </div>
             <div className="v-card" style={{background: 'rgba(255,255,255,0.05)', padding: '50px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <Award size={48} className="icon-grad" style={{marginBottom: '20px'}} />
                <h3 style={{color: 'white'}}>Licensed & Bonded</h3>
                <h4 style={{marginTop: '10px', marginBottom: '20px', color: 'var(--accent)'}}>TN Contractor #74291</h4>
                <p style={{fontSize: '0.9rem', opacity: 0.7}}>Fully insured for residential demolition and geotechnical earthmoving. We carry a $2M umbrella policy for elite property protection.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA 4-GRID */}
      <section className="service-area-grid" style={{padding: '100px 0'}}>
        <div className="container">
          <div className="text-center mb-60" style={{marginBottom: '60px'}}>
            <h2 className="section-title">Serving All of <br/><span className="text-grad">Middle Tennessee</span></h2>
            <p>From the urban density of Germantown to the sprawling estates of Forest Hills.</p>
          </div>
          <div className="neighborhood-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px'}}>
            <div className="n-card">
              <MapPin className="icon-grad" size={24} style={{marginBottom:'15px'}} />
              <h3>Davidson County</h3>
              <p style={{fontSize: '0.8rem', color: 'var(--secondary)'}}>Belle Meade, Green Hills, Forest Hills, Oak Hill, and East Nashville.</p>
            </div>
            <div className="n-card">
              <MapPin className="icon-grad" size={24} style={{marginBottom:'15px'}} />
              <h3>Williamson County</h3>
              <p style={{fontSize: '0.8rem', color: 'var(--secondary)'}}>Brentwood, Franklin, Nolensville, Fairview, and Thompson's Station.</p>
            </div>
            <div className="n-card">
              <MapPin className="icon-grad" size={24} style={{marginBottom:'15px'}} />
              <h3>Wilson & Sumner</h3>
              <p style={{fontSize: '0.8rem', color: 'var(--secondary)'}}>Mount Juliet, Lebanon, Hendersonville, and Gallatin for larger acreage pool removals.</p>
            </div>
            <div className="n-card">
              <MapPin className="icon-grad" size={24} style={{marginBottom:'15px'}} />
              <h3>Rutherford County</h3>
              <p style={{fontSize: '0.8rem', color: 'var(--secondary)'}}>Specialized limestone breaking services for Murfreesboro and Smyrna residential properties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta text-center dark-bg">
        <div className="container">
          <h2 className="white">Ready to Reclaim Your Property?</h2>
          <p className="large-p" style={{margin: '20px 0 40px', opacity: 0.8}}>Join the 350+ Nashville homeowners who have transformed their backyards into usable, stable, and valuable spaces.</p>
          <div className="cta-group" style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
            <Link href="/contact" className="btn btn-accent btn-xl">Request Expert Site Assessment</Link>
            <Link href="/cost" className="btn btn-outline btn-lg" style={{borderColor: 'white', color:'white'}}>Explore Nashville Costs</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .mb-20 { margin-bottom: 20px; }
        .mb-40 { margin-bottom: 40px; }
        .mb-60 { margin-bottom: 60px; }
        .max-800 { max-width: 800px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .p-item h4 { margin-top: 15px; margin-bottom: 10px; }
        .p-item p { font-size: 0.9rem; color: var(--secondary); line-height: 1.6; }
        .v-card h4 { margin-top: 20px; margin-bottom: 15px; color: var(--accent); }
        .v-card p { line-height: 1.6; }
        .image-side-box { padding: 40px; background: rgba(255,255,255,0.05); border-radius: 30px; border: 1px solid rgba(255,255,255,0.1); }
        .n-card { padding: 30px; background: white; border-radius: 20px; box-shadow: var(--shadow-sm); border: 1px solid #eee; }
        .n-card h3 { font-size: 1.2rem; margin-bottom: 10px; }

        @media (max-width: 1024px) {
           .grid-split, .points-grid-responsive, .neighborhood-grid { 
             grid-template-columns: 1fr !important; 
             gap: 30px !important; 
           }
           .about-main .container { flex-direction: column; }
           .image-side-box { margin-top: 40px; }
           .cta-group { flex-direction: column; }
           .cta-group .btn { width: 100%; }
        }
      `}</style>
    </div>
  );
}
