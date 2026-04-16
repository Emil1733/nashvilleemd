'use client';
import Link from 'next/link';
import { FileText, ShieldCheck, HardHat, Info, Gavel, ClipboardCheck, ArrowRight, MapPin, AlertTriangle, CheckCircle } from 'lucide-react';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorityHub from '../components/AuthorityHub';

export default function PoolRemovalPermits() {
  return (
    <div className="permits-page fade-in">
      <Breadcrumbs items={[{ label: 'Pool Removal Permits' }]} />
      {/* HERO SECTION */}
      <section className="service-hero bg-light">
        <div className="container text-center">
          <div className="badge accent mb-20">Regulatory Compliance</div>
          <h1 className="reveal-top">Nashville <span className="text-grad">Pool Removal Permits</span> & Law</h1>
          <p className="subheadline max-800 mx-auto">Navigating Metro Nashville and Davidson County codes can be complex. We handle the entire permitting lifecycle, from initial site map submittals to final grade certifications.</p>
        </div>
      </section>

      {/* CALCULATOR / CTA SPLIT - MOVED TO TOP */}
      <section className="cta-calc-section" style={{padding: '60px 0', background: 'var(--light)', borderBottom: '1px solid var(--border)'}}>
        <div className="container grid-split" style={{alignItems: 'center'}}>
          <div className="content">
            <h2 className="section-title">Get a <span className="text-grad">Code-Compliant</span> Start.</h2>
            <p className="large-p mb-40">Unpermitted work can lead to heavy fines and "Clouded Titles" during home sales. We do it right the first time.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Metro Nashville Licensed Contractor</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> Bonded Site Indemnity</div>
               <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><CheckCircle style={{color: 'var(--primary)'}} /> All-in-one Paperwork Handling</div>
            </div>
            <Link href="/contact" className="btn btn-primary btn-xl">Start Your Permit Assessment <ArrowRight size={18} /></Link>
          </div>
          <div className="calc-side">
            <Calculator variant="light" />
          </div>
        </div>
      </section>

      {/* DOCUMENTATION SECTION */}
      <section className="docs-section glass-section">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">Zero-Liability <span className="text-grad">Paperwork.</span></h2>
            <p className="authority-text">Many homeowners don't realize that in Nashville, a pool removal counts as a "Significant Grading" event. If not documented correctly with Metro Water Services (MWS), you could be liable for neighborhood drainage issues decades later.</p>
            
            <p className="authority-text">We take the administrative burden off your plate. Our premium service includes a complete documentation binder for your permanent property records.</p>
            
            <div className="points-grid-responsive" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px'}}>
              <div className="p-item">
                <Gavel size={32} className="icon-grad" />
                <h4>Metro Code Compliance</h4>
                <p>Full adherence to Chapter 16 of the Nashville City Code covering demolition and soil stabilization.</p>
              </div>
              <div className="p-item">
                <MapPin size={32} className="icon-grad" />
                <h4>Site Map Preparation</h4>
                <p>Detailed architectural site plans showing setbacks, utility lines, and the post-removal drainage plan.</p>
              </div>
            </div>
          </div>
          <div className="image-side">
            <img src="/nashville_permitting_documents_1776324470398.png" alt="Nashville Pool Removal Permit Documents" className="premium-img" />
            <div className="img-caption">Official permitting documents and site plans for a recent Green Hills project.</div>
          </div>
        </div>
      </section>

      {/* PERMIT MATRIX SECTION */}
      <section className="permit-table-section dark-bg" style={{padding: '80px 0'}}>
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="white">Jurisdictional <span className="text-grad">Permit Matrix</span></h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Breaking down the specific requirements across the Nashville basin.</p>
          </div>
          
          <div style={{overflowX: 'auto', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}>
              <thead>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Requirement</th>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Metro Nashville</th>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Brentwood</th>
                  <th style={{padding: '15px', textAlign: 'left', color: 'white'}}>Franklin</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Demolition Permit</td>
                  <td style={{padding: '15px'}}>Required (Chapter 16)</td>
                  <td style={{padding: '15px'}}>Required</td>
                  <td style={{padding: '15px'}}>Required</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Stormwater Sign-off</td>
                  <td style={{padding: '15px'}}>Yes (MWS)</td>
                  <td style={{padding: '15px'}}>Yes</td>
                  <td style={{padding: '15px'}}>Yes</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '15px'}}>Sewer Disconnect</td>
                  <td style={{padding: '15px'}}>Certified Inspection</td>
                  <td style={{padding: '15px'}}>Standard</td>
                  <td style={{padding: '15px'}}>Standard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* COMPLIANCE CHECKLIST */}
      <section className="compliance-checklist glass-section">
        <div className="container grid-split">
          <div className="content">
            <h2 className="section-title">The Nashville <span className="text-grad">Compliance Gap.</span></h2>
            <p className="authority-text">Many fly-by-night contractors bypass the permit process to save time. In Nashville, this is a high-risk move. Unpermitted pool removals stay on your property record forever, leading to:</p>
            <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '25px'}}>
               <li style={{display: 'flex', gap: '10px', alignItems: 'center'}}><AlertTriangle size={20} color="var(--primary)" /> <strong>Clouded Titles:</strong> Prevention of sale during the title search phase.</li>
               <li style={{display: 'flex', gap: '10px', alignItems: 'center'}}><AlertTriangle size={20} color="var(--primary)" /> <strong>Stop Work Orders:</strong> Fines that often double the cost of the project.</li>
               <li style={{display: 'flex', gap: '10px', alignItems: 'center'}}><AlertTriangle size={20} color="var(--primary)" /> <strong>Drainage Liens:</strong> Damage to neighboring properties due to unguided grading.</li>
            </ul>
          </div>
          <div className="checklist-side" style={{background: 'var(--light)', padding: '50px', borderRadius: '30px', boxShadow: 'var(--shadow-lg)'}}>
             <h3 className="mb-30" style={{color: 'var(--dark)'}}>Full Permit Audit</h3>
             <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><ClipboardCheck color="var(--primary)" /> Zoning Verification</div>
                <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><ClipboardCheck color="var(--primary)" /> Setback Map Approval</div>
                <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><ClipboardCheck color="var(--primary)" /> Sediment/Erosion Control Plan</div>
                <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}><ClipboardCheck color="var(--primary)" /> Final Grade Inspection Form</div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" style={{padding: '100px 0'}}>
        <div className="container max-800">
          <h2 className="section-title text-center mb-60">Permit & <span className="text-grad">Legal FAQ</span></h2>
          <div className="faq-list" style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>Does Metro Nashville allow "Pool Abandonment"?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Technically yes, but only with a specific "Partial Demolition" permit that includes floor-drilling for drainage. We recommend full removal for maximum property value, but we handle the compliance for both.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>How long does the permit process take?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>Typically 10-14 business days. However, because we have established relationships with Metro Codes, we can often expedite the administrative review phase.</p>
             </div>
             <div className="faq-item">
                <h4 style={{marginBottom: '10px', color: 'var(--dark)'}}>What happens if I already removed my pool without a permit?</h4>
                <p style={{color: 'var(--secondary)', lineHeight: '1.6'}}>We offer "Remedial Certification" services where we inspect, verify compaction, and file the necessary post-work documentation to clear your property title.</p>
             </div>
          </div>
        </div>
      </section>

      <AuthorityHub />

      <style jsx>{`
        .premium-img { width: 100%; border-radius: 30px; box-shadow: var(--shadow-xl); display: block; }
        .img-caption { margin-top: 15px; font-size: 0.8rem; font-style: italic; color: var(--secondary); text-align: right; }
        .mb-20 { margin-bottom: 20px; }
        .mb-40 { margin-bottom: 40px; }
        .mb-60 { margin-bottom: 60px; }
        .max-800 { max-width: 800px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        .p-item h4 { margin-top: 15px; margin-bottom: 10px; color: var(--dark); font-weight: 800; }
        .p-item p { font-size: 0.9rem; line-height: 1.6; color: var(--secondary); }

        .p-item-card { background: rgba(255,255,255,0.05); padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); position: relative; overflow: hidden; }
        .p-num { font-size: 3rem; font-weight: 900; position: absolute; right: 20px; top: 10px; opacity: 0.1; color: white; }
        .p-item-card h4 { color: white; margin-bottom: 15px; }
        .p-item-card p { font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.6; }

        @media (max-width: 1024px) {
           .grid-split, .points-grid-responsive { grid-template-columns: 1fr !important; gap: 40px !important; }
           .permits-page h1 { font-size: 2.22rem !important; }
           .image-side { order: 2; margin-top: 40px; }
           .content { order: 1; }
        }
      `}</style>
    </div>
  );
}
