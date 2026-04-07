'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    poolType: 'Concrete',
    size: '15x30',
    access: 'Easy',
    slope: 'Flat',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Add site source for attribution
    const leadData = {
       full_name: formData.name,
       phone: formData.phone,
       pool_type: formData.poolType,
       pool_size: formData.size,
       estimated_price_range: formData.slope === 'Steep' ? '$18,000 - $25,000' : '$12,000 - $18,000',
       source_page: 'nashville_contact',
       created_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('emd_leads_atlanta') // Using the table name specified by the user
      .insert([leadData]);

    if (!error) {
      setSuccess(true);
    } else {
      console.error('Error submitting lead:', error);
      alert('There was an error. Please try again or call us directly.');
    }
    setLoading(false);
  };

  if (success) {
    return (
      <section className="success-screen text-center" style={{padding: '180px 0', minHeight: '80vh'}}>
        <div className="container">
          <CheckCircle size={80} style={{color:'var(--primary)', marginBottom:'30px'}} />
          <h1 style={{fontSize: '3rem', marginBottom: '20px'}}>Estimate Request Received!</h1>
          <p style={{fontSize: '1.25rem', color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto 40px'}}>Thank you for reaching out. We will review your project details and yard conditions and get back to you within 24 hours.</p>
          <a href="/" className="btn btn-primary">Return Home</a>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="contact-page fade-in">
        <section className="service-hero">
          <div className="container text-center">
            <h1 className="reveal-top">Get Your Nashville Pool <br/> <span className="text-grad">Removal Estimate</span></h1>
            <p className="subheadline">Tell us about your yard and we'll provide a realistic quote based on Nashville rock and slope conditions.</p>
          </div>
        </section>

        <section className="contact-main">
          <div className="container grid" style={{display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'start'}}>
            <div className="contact-info">
              <h2>Why Get an Estimate?</h2>
              <p>Every Nashville property is different. By understanding your specific slope and access, we can provide an accurate range before we even visit the site.</p>
              
              <div className="info-list" style={{display: 'flex', flexDirection: 'column', gap: '30px', margin: '50px 0'}}>
                <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                  <div style={{width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(27,77,62,0.05)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Phone size={24} /></div>
                  <div>
                    <h4>Call Directly</h4>
                    <p>(615) 398-3421</p>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                  <div style={{width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(27,77,62,0.05)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Mail size={24} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>estimates@nashvillepoolpro.com</p>
                  </div>
                </div>
              </div>

              <div className="nashville-notice" style={{background: 'var(--dark)', color: 'white', padding: '40px', borderRadius: '20px'}}>
                 <h4 style={{color: '#fcc419', marginBottom: '15px'}}>⚠️ Nashville Rock Alert</h4>
                 <p style={{fontSize: '0.95rem', color: '#adb5bd'}}>We specialize in rock excavation. If other contractors have turned you down, we have the heavy equipment to finish the job.</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} style={{padding: '50px', background: 'white', border: '1px solid #eee', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', gap: '25px'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                <div className="field">
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem'}}>Full Name</label>
                  <input type="text" placeholder="Your full name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd'}} />
                </div>
                <div className="field">
                   <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem'}}>Best Phone Number</label>
                  <input type="tel" placeholder="(615) 000-0000" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd'}} />
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                <div className="field">
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem'}}>Pool Material</label>
                  <select value={formData.poolType} onChange={e => setFormData({...formData, poolType: e.target.value})} style={{width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd'}}>
                    <option>Concrete</option>
                    <option>Fiberglass</option>
                    <option>Vinyl</option>
                  </select>
                </div>
                <div className="field">
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem'}}>Yard Slope</label>
                  <select value={formData.slope} onChange={e => setFormData({...formData, slope: e.target.value})} style={{width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd'}}>
                    <option>Flat</option>
                    <option>Moderate</option>
                    <option>Steep</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem'}}>Access Point Width</label>
                <select value={formData.access} onChange={e => setFormData({...formData, access: e.target.value})} style={{width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd'}}>
                  <option>Easy (8ft+)</option>
                  <option>Limited (5-8ft)</option>
                  <option>Tight (Under 5ft)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-xl w-full" disabled={loading} style={{padding: '18px'}}>
                {loading ? <Loader2 className="spin" /> : 'Get Full Quote'}
              </button>
            </form>
          </div>
        </section>
      </div>
      <style jsx>{`
        @media (max-width: 1024px) {
          .contact-page h1 { font-size: 2.2rem !important; }
          .contact-main .container.grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-form { padding: 30px 20px !important; }
          .form-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
      `}</style>
    </>
  );
}
