'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Calculator as CalcIcon, Loader2, ArrowRight, ShieldCheck, AlertCircle, CheckCircle } from 'lucide-react';

export default function Calculator({ variant = 'light', source = 'nashville_calculator' }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    poolType: 'Concrete',
    size: '15x30',
    access: 'Easy (8ft+)',
    slope: 'Flat',
    name: '',
    phone: '',
    email: ''
  });
  const [quote, setQuote] = useState(null);
  const [calculating, setCalculating] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  const handleCalculate = () => {
    setCalculating(true);
    setTimeout(() => {
      let base = formData.poolType === 'Concrete' ? 12000 : 9000;
      if (formData.size === '20x40+') base += 5000;
      if (formData.access === 'Tight (Under 5ft)') base += 3500;
      if (formData.slope === 'Steep') base += 5500;
      if (formData.slope === 'Moderate') base += 2500;
      
      setQuote({
        partial: Math.round(base * 0.65),
        full: base,
        max: Math.round(base * 1.3)
      });
      setCalculating(false);
      setStep(3);
    }, 1500);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const leadData = {
      full_name: formData.name,
      phone: formData.phone,
      pool_type: formData.poolType,
      pool_size: formData.size,
      estimated_price_range: `$${quote.full.toLocaleString()} - $${quote.max.toLocaleString()}`,
      source_page: source,
      created_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('emd_leads_atlanta')
      .insert([leadData]);

    if (!error) {
      setLeadSuccess(true);
    } else {
      console.error('Submission error:', error);
      alert(`Submission error: ${error.message || 'Please call us at (615) 398-3421'}`);
    }
    setSubmitting(false);
  };

  const isDark = variant === 'dark';

  return (
    <div className={`calc-card premium ${isDark ? 'dark-mode' : ''}`}>
      <div className="calc-header text-center" style={{marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
        <div className="icon-circle" style={{color: isDark ? 'white' : 'var(--primary)'}}><CalcIcon size={24} /></div>
        <h3 style={{margin:'0', color: isDark ? 'white' : 'inherit', lineHeight: '1.1'}}>Nashville Instant Estimator</h3>
        <p style={{fontSize: '0.85rem', color: isDark ? 'rgba(255,255,255,0.8)' : 'inherit', margin: '0'}}>Get a calibrated range based on local metrics.</p>
      </div>

      {step === 1 && (
        <div className="calc-body zoom-in">
          <div className="input-group">
            <label>1. Select Pool Type</label>
            <div className="options-grid">
              {['Concrete', 'Fiberglass', 'Vinyl'].map(t => (
                <div key={t} className={`option-btn ${formData.poolType === t ? 'active' : ''} ${isDark ? 'dark' : ''}`} onClick={() => setFormData({...formData, poolType: t})}>
                  <span className="dot"></span>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="input-group" style={{marginTop:'25px'}}>
            <label>2. Approximate Size</label>
            <div className="options-grid">
              {[
                {label: 'Small (12x24)', val: '12x24'}, 
                {label: 'Standard (15x30)', val: '15x30'}, 
                {label: 'Large (20x40+)', val: '20x40+'}
              ].map(s => (
                <div key={s.val} className={`option-btn ${formData.size === s.val ? 'active' : ''} ${isDark ? 'dark' : ''}`} onClick={() => setFormData({...formData, size: s.val})}>
                  <span className="dot"></span>
                  {s.label}
                </div>
              ))}
            </div>
          </div>
          <button className="btn btn-primary w-full" style={{marginTop:'30px'}} onClick={() => setStep(2)}>Next Step <ArrowRight size={16} /></button>
        </div>
      )}

      {step === 2 && (
        <div className="calc-body zoom-in">
          <div className="input-group">
            <label>3. Machine Access Width</label>
            <div className="options-grid">
              {[
                {label: 'Easy', val: 'Easy (8ft+)'}, 
                {label: 'Limited', val: 'Limited (5-8ft)'}, 
                {label: 'Tight', val: 'Tight (Under 5ft)'}
              ].map(a => (
                <div key={a.val} className={`option-btn ${formData.access === a.val ? 'active' : ''} ${isDark ? 'dark' : ''}`} onClick={() => setFormData({...formData, access: a.val})}>
                  <span className="dot"></span>
                  {a.label}
                </div>
              ))}
            </div>
          </div>
          <div className="input-group" style={{marginTop:'25px'}}>
            <label>4. Yard Slope</label>
            <div className="options-grid">
              {['Flat', 'Moderate', 'Steep'].map(sl => (
                <div key={sl} className={`option-btn ${formData.slope === sl ? 'active' : ''} ${isDark ? 'dark' : ''}`} onClick={() => setFormData({...formData, slope: sl})}>
                  <span className="dot"></span>
                  {sl}
                </div>
              ))}
            </div>
          </div>
          <div className="btn-group-row" style={{marginTop:'30px'}}>
            <button className={`btn btn-outline ${isDark ? 'white-border' : ''}`} onClick={() => setStep(1)}>Back</button>
            <button className="btn btn-primary flex-grow" onClick={handleCalculate} disabled={calculating}>
              {calculating ? <Loader2 className="spin" size={18} /> : 'Calculate My Quote'}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="calc-body result-final text-center zoom-in">
          <div className="badge success mb-20" style={{marginBottom: '15px'}}>Analysis Complete</div>
          <h4 style={{color: isDark ? 'white' : 'inherit'}}>Estimated Nashville Investment</h4>
          
          <div className={`result-main-card ${isDark ? 'dark' : 'highlighted'}`}>
            <div className="res-row">
              <span style={{fontSize: '0.8rem', opacity: 0.8}}>Full Removal Range:</span>
              <div className="res-price" style={{color: 'var(--accent)'}}>${quote.full.toLocaleString()} — ${quote.max.toLocaleString()}</div>
            </div>
            <div className="res-row secondary">
              <span style={{fontSize: '0.8rem', opacity: 0.8}}>Partial Removal:</span>
              <div className="res-price-small">${quote.partial.toLocaleString()} — ${(quote.partial + 3000).toLocaleString()}</div>
            </div>
          </div>

          {!showLeadForm && !leadSuccess && (
             <div className="caveat-box" style={{background: isDark ? 'rgba(255,255,255,0.05)' : '#fffbe6', borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#ffe58f'}}>
                <AlertCircle size={14} style={{color: isDark ? 'var(--accent)' : '#856404'}} />
                <p style={{color: isDark ? 'rgba(255,255,255,0.7)' : '#856404'}}>Actual costs vary based on Nashville rock and utility complexity.</p>
             </div>
          )}

          {leadSuccess ? (
            <div className="lead-success-msg zoom-in" style={{marginTop: '25px', padding: '20px', background: 'rgba(40, 167, 69, 0.1)', borderRadius: '12px', border: '1px solid #28a745'}}>
               <CheckCircle size={30} style={{color: '#28a745', marginBottom: '10px', margin: '0 auto'}} />
               <h5 style={{color: isDark ? 'white' : 'var(--dark)'}}>Assessment Claimed!</h5>
               <p style={{fontSize: '0.8rem', color: isDark ? 'rgba(255,255,255,0.7)' : 'inherit'}}>A rock specialist will call you shortly.</p>
            </div>
          ) : showLeadForm ? (
            <form onSubmit={handleLeadSubmit} className="lead-capture-mini zoom-in" style={{marginTop: '25px', textAlign: 'left'}}>
               <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <div className="field">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: isDark ? 'rgba(0,0,0,0.2)' : 'white', color: isDark ? 'white' : 'inherit'}}
                    />
                  </div>
                  <div className="field">
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      required 
                      value={formData.phone} 
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: isDark ? 'rgba(0,0,0,0.2)' : 'white', color: isDark ? 'white' : 'inherit'}}
                    />
                  </div>
               </div>
               <button type="submit" className="btn btn-accent btn-xl w-full" style={{marginTop: '15px'}} disabled={submitting}>
                  {submitting ? <Loader2 className="spin" size={18} /> : 'Submit for Assessment'}
               </button>
            </form>
          ) : (
            <button 
              onClick={() => setShowLeadForm(true)} 
              className="btn btn-accent btn-xl w-full" 
              style={{marginTop: '25px'}}
            >
              Claim Your Free Assessment
            </button>
          )}
          
          <button className="btn-text" style={{marginTop:'15px', color: isDark ? 'rgba(255,255,255,0.6)' : 'var(--secondary)', border:'none', background:'none', cursor:'pointer'}} onClick={() => {setStep(1); setShowLeadForm(false); setLeadSuccess(false);}}>Restart Calculator</button>
        </div>
      )}

      <div className="calc-footer" style={{marginTop: '20px', paddingTop: '15px', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.75rem', color: isDark ? 'rgba(255,255,255,0.4)' : 'var(--secondary)'}}>
        <ShieldCheck size={14} /> Licensed & Bonded TN Operations
      </div>
    </div>
  );
}
