import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions Open 2026–27 | Learners Global School, Mysuru',
  description: 'CBSE school in Sathagalli, Mysuru. Pre-KG to Class 12. Smart Classrooms, STEM Labs, JEE/NEET coaching. Enquire for 2026–27 admissions.',
  openGraph: {
    title: 'Admissions Open 2026–27 | Learners Global School, Mysuru',
    description: 'CBSE school in Sathagalli, Mysuru. Pre-KG to Class 12. Smart Classrooms, STEM Labs, JEE/NEET coaching. Enquire for 2026–27 admissions.',
    url: 'https://learnersglobalschool.com/admission26',
    images: [{ url: '/images/Campus.webp', width: 1200, height: 630 }],
  },
};

export default function Admission26Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// ── GTM dataLayer push ──────────────────────────────────────────
declare global { interface Window { dataLayer: any[]; gtag?: Function; } }
function pushEvent(event: string, params: Record<string, string> = {}) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  }
}

// ── UTM helpers ─────────────────────────────────────────────────
function getParam(name: string): string {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get(name) || '';
}

// ── Google Script URL ────────────────────────────────────────────
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyJ5NrgRlLqsHXgHvGE6eDfnBd3WjBWnuqUXze5FboHGY6U2nlkP90rpatAev5ijrhpQA/exec';

// ────────────────────────────────────────────────────────────────
export default function Admission26Page() {
  const [form, setForm] = useState({
    parentName: '', phone: '', email: '',
    childName: '', classApplying: '', locality: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [btnText, setBtnText]     = useState('Book My Free Campus Visit →');
  const formRef = useRef<HTMLDivElement>(null);

  // UTM state
  const [utm, setUtm] = useState({ source: '', medium: '', campaign: '', keyword: '', ad: '', gclid: '' });
  useEffect(() => {
    const gclid = getParam('gclid');
    setUtm({
      source:   getParam('utm_source')   || (gclid ? 'google_ads' : 'direct'),
      medium:   getParam('utm_medium'),
      campaign: getParam('utm_campaign'),
      keyword:  getParam('utm_term'),
      ad:       getParam('utm_content'),
      gclid,
    });
  }, []);

  const scrollToForm = () => {
    pushEvent('book_visit_click');
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePhone = () => pushEvent('phone_call_click', { phone_number: '+919916933202' });
  const handleWA    = () => pushEvent('whatsapp_click',   { phone_number: '919916933202' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    if (!form.parentName.trim())   { alert('Please enter your name.');              return; }
    if (digits.length < 10)        { alert('Please enter a valid 10-digit number.'); return; }
    if (!form.childName.trim())    { alert('Please enter your child\'s name.');      return; }
    if (!form.classApplying)       { alert('Please select the class.');              return; }

    setLoading(true);
    setBtnText('Submitting…');

    const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const payload = {
      timestamp: now,
      parentName:    form.parentName.trim(),
      phone:         '+91' + digits.slice(-10),
      email:         form.email.trim(),
      childName:     form.childName.trim(),
      classApplying: form.classApplying,
      locality:      form.locality.trim(),
      message:       form.message.trim(),
      source:        utm.source, medium: utm.medium, campaign: utm.campaign,
      keyword:       utm.keyword, ad: utm.ad, gclid: utm.gclid,
      pageUrl:       typeof window !== 'undefined' ? window.location.href : '',
      device:        typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (_) { /* no-cors — always catch */ }

    // GTM conversion events
    pushEvent('form_submit', { form_name: 'admission_enquiry', child_grade: form.classApplying });
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', { send_to: 'AW-18041287506' });
    }

    setLoading(false);
    setSubmitted(true);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'DM Sans',system-ui,sans-serif;color:#1a2a3a;background:#fff;font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased}
        img{max-width:100%;display:block}

        :root{
          --navy:#0c2a52;--blue:#1155a8;--blue-light:#e8f2fb;
          --gold:#c48a10;--gold-light:#fdf6e7;
          --green:#1a6b43;--green-light:#e8f5ed;
          --white:#fff;--off:#f4f9fd;--text:#1a2a3a;--muted:#4a6a8a;
          --border:#d0dde8;--serif:'DM Serif Display',Georgia,serif;
          --sans:'DM Sans',system-ui,sans-serif;--radius:10px;
          --shadow:0 4px 24px rgba(12,42,82,0.10);
        }

        /* STICKY MOBILE CTA */
        .sticky-cta{position:fixed;bottom:0;left:0;right:0;z-index:100;display:none;background:var(--navy);padding:10px 16px;gap:10px}
        @media(max-width:640px){.sticky-cta{display:flex}}
        .sticky-cta a{flex:1;text-align:center;padding:12px 8px;border-radius:8px;font-weight:600;font-size:14px;text-decoration:none;letter-spacing:.01em}
        .sc-call{background:#25d366;color:#fff}
        .sc-enquire{background:var(--blue);color:#fff}

        /* HEADER */
        .lgs-header{background:#fff;border-bottom:1px solid var(--border);padding:12px 20px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:50}
        .logo-wrap{display:flex;align-items:center;gap:10px}
        .logo-text{display:none;font-family:var(--serif);font-size:15px;color:var(--navy);line-height:1.25}
        @media(min-width:480px){.logo-text{display:block}}
        .logo-text small{font-family:var(--sans);font-size:11px;color:var(--muted);font-style:italic;display:block}
        .header-cta{background:var(--blue);color:#fff;border:none;padding:10px 18px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;text-decoration:none;white-space:nowrap;font-family:var(--sans)}
        .header-cta:hover{background:var(--navy)}

        /* SCHOOL IMAGE BANNER */
        .school-banner{position:relative;width:100%;height:220px;overflow:hidden}
        @media(min-width:480px){.school-banner{height:300px}}
        @media(min-width:640px){.school-banner{height:380px}}
        @media(min-width:1024px){.school-banner{height:460px}}
        .school-banner img{width:100%;height:100%;object-fit:cover;object-position:center 30%}
        .school-banner-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(12,42,82,0.2) 0%,rgba(12,42,82,0.6) 100%)}
        .school-banner-label{position:absolute;bottom:16px;left:16px;right:16px;color:#fff}
        @media(min-width:480px){.school-banner-label{bottom:20px;left:20px}}
        .school-banner-label h2{font-family:var(--serif);font-size:clamp(15px,3.5vw,28px);line-height:1.2;margin-bottom:4px}
        .school-banner-label p{font-size:clamp(11px,2.5vw,13px);color:rgba(255,255,255,0.85)}

        /* MOBILE IMPROVEMENTS */
        @media(max-width:480px){
          .hero{padding:28px 16px 28px}
          .hero h1{font-size:28px}
          .hero-sub{font-size:14px}
          .form-section{padding:0 12px 28px}
          .form-card{padding:20px 16px;margin:-20px auto 0}
          .lgs-section{padding:24px 16px}
          .stats-band{padding:16px}
          .stats-inner{gap:8px}
          .stat-n{font-size:22px}
          .visit-cta{padding:28px 16px}
          .collab-band{padding:16px}
          .lgs-footer{padding:16px}
          .why-item{padding:12px}
          .stage-item{flex-direction:column;align-items:flex-start;gap:6px}
        }

        /* HERO */
        .hero{background:linear-gradient(160deg,var(--navy) 0%,#1a3f7a 100%);color:#fff;padding:36px 20px 32px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;top:-60px;right:-60px;width:260px;height:260px;border-radius:50%;background:rgba(255,255,255,0.04);pointer-events:none}
        .hero-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.22);border-radius:20px;padding:5px 14px;font-size:12px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:#7ecbff;margin-bottom:16px}
        .hero-badge::before{content:'●';font-size:8px;color:#4ade80;animation:pulse 1.5s infinite}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        .hero h1{font-family:var(--serif);font-size:clamp(26px,7vw,40px);line-height:1.15;margin-bottom:12px;color:#fff}
        .hero h1 em{color:#7ecbff;font-style:normal}
        .hero-sub{font-size:15px;color:rgba(255,255,255,.78);margin-bottom:20px;max-width:480px;line-height:1.7}
        .hero-chips{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:24px}
        .hero-chip{background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.20);border-radius:20px;padding:4px 12px;font-size:12px;color:rgba(255,255,255,.85)}
        .trust-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding-top:18px;border-top:1px solid rgba(255,255,255,.12)}
        .trust-item{display:flex;align-items:center;gap:5px;font-size:12px;color:rgba(255,255,255,.65)}
        .trust-item strong{color:rgba(255,255,255,.90);font-weight:600}

        /* FORM SECTION */
        .form-section{background:var(--off);padding:0 20px 32px}
        .form-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:24px 20px;box-shadow:var(--shadow);max-width:560px;margin:-24px auto 0;position:relative;z-index:2}
        .form-card-head{text-align:center;margin-bottom:20px}
        .form-card-head h2{font-family:var(--serif);font-size:22px;color:var(--navy);margin-bottom:4px}
        .form-card-head p{font-size:14px;color:var(--muted)}
        .form-group{margin-bottom:14px}
        .form-group label{display:block;font-size:13px;font-weight:600;color:var(--navy);margin-bottom:5px}
        .form-group label span{color:#e53e3e}
        .form-group input,.form-group select,.form-group textarea{width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:8px;font-size:15px;font-family:var(--sans);color:var(--text);background:#fff;transition:border-color .15s,box-shadow .15s;-webkit-appearance:none}
        .form-group input:focus,.form-group select:focus,.form-group textarea:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(17,85,168,.10)}
        .form-group select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234a6a8a' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:36px}
        .form-group textarea{resize:vertical;min-height:80px}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        @media(max-width:400px){.form-row{grid-template-columns:1fr}}
        .submit-btn{width:100%;padding:15px;background:var(--blue);color:#fff;border:none;border-radius:8px;font-size:16px;font-weight:700;font-family:var(--sans);cursor:pointer;transition:background .15s,transform .1s;letter-spacing:.01em;margin-top:4px}
        .submit-btn:hover{background:var(--navy)}
        .submit-btn:active{transform:scale(.99)}
        .submit-btn:disabled{background:#90bce8;cursor:not-allowed}
        .form-note{text-align:center;font-size:12px;color:var(--muted);margin-top:10px;line-height:1.6}
        .form-note a{color:var(--blue)}

        /* SUCCESS */
        .success-state{text-align:center;padding:20px 10px}
        .success-icon{width:64px;height:64px;border-radius:50%;background:var(--green-light);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px}
        .success-state h3{font-family:var(--serif);font-size:22px;color:var(--navy);margin-bottom:8px}
        .success-state p{font-size:14px;color:var(--muted);line-height:1.7;margin-bottom:20px}
        .whatsapp-btn{display:inline-flex;align-items:center;gap:8px;background:#25d366;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px}

        /* STATS */
        .stats-band{background:var(--navy);padding:20px}
        .stats-inner{max-width:560px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:12px;text-align:center}
        @media(max-width:360px){.stats-inner{grid-template-columns:repeat(2,1fr)}}
        .stat-n{font-family:var(--serif);font-size:26px;color:#7ecbff;line-height:1}
        .stat-l{font-size:11px;color:rgba(255,255,255,.60);margin-top:3px;line-height:1.3}

        /* SECTIONS */
        .lgs-section{padding:32px 20px}
        .section-inner{max-width:560px;margin:0 auto}
        .section-head{font-family:var(--serif);font-size:22px;color:var(--navy);margin-bottom:6px}
        .section-sub{font-size:14px;color:var(--muted);margin-bottom:20px;line-height:1.7}

        /* WHY LIST */
        .why-list{display:flex;flex-direction:column;gap:10px}
        .why-item{display:flex;gap:12px;align-items:flex-start;background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:14px}
        .why-num{width:32px;height:32px;border-radius:50%;background:var(--blue);color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .why-body strong{font-size:14px;color:var(--navy);display:block;margin-bottom:2px}
        .why-body p{font-size:13px;color:var(--muted);line-height:1.55}

        /* STAGES */
        .stages{display:flex;flex-direction:column;gap:8px}
        .stage-item{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:12px 14px}
        .stage-badge{background:var(--blue-light);color:var(--blue);font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:3px 8px;border-radius:4px;white-space:nowrap;flex-shrink:0}
        .stage-text{font-size:13px;color:var(--text);line-height:1.5}
        .stage-text strong{color:var(--navy);display:block;font-size:14px;margin-bottom:1px}

        /* STEPS */
        .steps{display:flex;flex-direction:column;gap:0}
        .step{display:flex;gap:14px;align-items:flex-start;padding:0 0 20px;position:relative}
        .step:not(:last-child)::after{content:'';position:absolute;left:15px;top:34px;bottom:0;width:2px;background:var(--border)}
        .step-dot{width:32px;height:32px;border-radius:50%;flex-shrink:0;background:var(--blue);color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;position:relative;z-index:1}
        .step-dot.done{background:var(--green)}
        .step-body strong{font-size:14px;color:var(--navy);display:block;margin-bottom:2px}
        .step-body p{font-size:13px;color:var(--muted);line-height:1.55}

        /* TESTIMONIAL */
        .testimonial{background:var(--blue-light);border-left:3px solid var(--blue);border-radius:0 var(--radius) var(--radius) 0;padding:16px 18px;margin-bottom:12px}
        .testimonial p{font-size:14px;color:var(--text);line-height:1.7;font-style:italic;margin-bottom:8px}
        .testimonial-by{font-size:12px;color:var(--muted);font-weight:600}

        /* COLLAB */
        .collab-band{background:var(--off);padding:20px;text-align:center;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
        .collab-band p{font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-weight:600;margin-bottom:12px}
        .collab-logos{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:16px 24px}
        .collab-logos span{font-size:13px;color:var(--navy);font-weight:600;opacity:.7}

        /* VISIT CTA */
        .visit-cta{background:linear-gradient(135deg,var(--navy) 0%,#1a3f7a 100%);padding:32px 20px;text-align:center;color:#fff}
        .visit-cta h2{font-family:var(--serif);font-size:24px;margin-bottom:8px;color:#fff}
        .visit-cta p{font-size:14px;color:rgba(255,255,255,.75);margin-bottom:20px;line-height:1.7}
        .cta-buttons{display:flex;flex-direction:column;gap:10px;align-items:center}
        @media(min-width:400px){.cta-buttons{flex-direction:row;justify-content:center}}
        .cta-btn{padding:13px 24px;border-radius:8px;font-weight:700;font-size:15px;text-decoration:none;font-family:var(--sans);display:inline-flex;align-items:center;gap:8px;transition:transform .1s;border:none;cursor:pointer}
        .cta-btn:active{transform:scale(.98)}
        .cta-btn-primary{background:#fff;color:var(--navy)}
        .cta-btn-wa{background:#25d366;color:#fff}

        /* FOOTER */
        .lgs-footer{background:var(--navy);color:rgba(255,255,255,.6);padding:20px;font-size:13px;text-align:center;line-height:1.8}
        .lgs-footer strong{color:#fff}
        .lgs-footer a{color:rgba(255,255,255,.6);text-decoration:none}

        /* LOADING */
        .loading-overlay{display:none;position:fixed;inset:0;z-index:200;background:rgba(12,42,82,.7);align-items:center;justify-content:center}
        .loading-overlay.active{display:flex}
        .spinner{width:44px;height:44px;border-radius:50%;border:3px solid rgba(255,255,255,.2);border-top-color:#fff;animation:spin .7s linear infinite}
        @keyframes spin{to{transform:rotate(360deg)}}

        @media(max-width:640px){body{padding-bottom:64px}}
      `}</style>

      {/* Loading Overlay */}
      {loading && (
        <div className="loading-overlay active">
          <div className="spinner" />
        </div>
      )}

      {/* Sticky Mobile CTA */}
      <div className="sticky-cta">
        <a href="tel:+919916933202" className="sc-call" onClick={handlePhone}>📞 Call Now</a>
        <button className="sc-enquire" style={{border:'none',cursor:'pointer',fontFamily:'inherit'}} onClick={scrollToForm}>✏️ Enquire Now</button>
      </div>

      {/* Header */}
      <header className="lgs-header">
        <a href="https://learnersglobalschool.com/" className="logo-wrap" style={{textDecoration:'none'}}>
          <img
            src="https://learnersglobalschool.com/_next/image?url=%2Fimages%2F1.webp&w=128&q=75"
            alt="Learners Global School"
            style={{ height: 44, width: 'auto' }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="logo-text">
            Learners Global School
            <small>Sathagalli, Mysuru · CBSE</small>
          </div>
        </a>
        <a href="tel:+919916933202" className="header-cta" onClick={handlePhone}>📞 9916933202</a>
      </header>

      {/* ── SCHOOL BUILDING IMAGE BANNER ── */}
      <div className="school-banner">
        <img
          src="https://learnersglobalschool.com/_next/image?url=%2Fimages%2FCampus.webp&w=1920&q=75"
          alt="Learners Global School Campus — Sathagalli, Mysuru"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div className="school-banner-overlay" />
        <div className="school-banner-label">
          <h2>Learners Global School &amp; PU College</h2>
          <p>Sathagalli, Mysuru · CBSE Affiliated · Pre-KG to Class 12</p>
        </div>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">Admissions Open — 2026–27</div>
        <h1>Give Your Child the<br /><em>Best Start in Mysuru</em></h1>
        <p className="hero-sub">
          CBSE school with Smart Classrooms, STEM Labs &amp; JEE/NEET coaching — right here in Sathagalli, Mysuru.
        </p>
        <div className="hero-chips">
          {['Pre-KG to Class 12','CBSE Board','10 km from Ring Road','IITIAN-Founder','NEP 2020 Aligned'].map(c => (
            <span className="hero-chip" key={c}>{c}</span>
          ))}
        </div>
        <div className="trust-row">
          <div className="trust-item"><strong>30+</strong> Years of Excellence</div>
          <div className="trust-item" style={{color:'rgba(255,255,255,0.3)'}}>|</div>
          <div className="trust-item"><strong>Infosys</strong> Collaborated</div>
          <div className="trust-item" style={{color:'rgba(255,255,255,0.3)'}}>|</div>
          <div className="trust-item"><strong>Limited</strong> Seats Left</div>
        </div>
      </section>

      {/* Form Card */}
      <section className="form-section" ref={formRef} id="enquiry-form">
        <div className="form-card">
          {submitted ? (
            <div className="success-state">
              <div className="success-icon">✅</div>
              <h3>Enquiry Received!</h3>
              <p>
                Thank you! Our admissions counsellor will call you within a few hours to schedule
                your campus visit at no charge. Please keep your phone handy.
              </p>
              <a
                href="https://wa.me/919916933202?text=Hi%2C%20I%20just%20enquired%20about%20admissions%20for%202026-27."
                className="whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWA}
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          ) : (
            <>
              <div className="form-card-head">
                <h2>Book a Free Campus Visit</h2>
                <p>Our counsellors will call you to schedule a visit — no fees discussed here.</p>
              </div>
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="parentName">Parent / Guardian Name <span>*</span></label>
                  <input id="parentName" type="text" placeholder="Your full name" autoComplete="name" required
                    value={form.parentName} onChange={e => setForm({...form, parentName: e.target.value})} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Mobile Number <span>*</span></label>
                    <input id="phone" type="tel" placeholder="+91 98765 43210" autoComplete="tel" required
                      value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder="your@email.com" autoComplete="email"
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="childName">Child's Name <span>*</span></label>
                    <input id="childName" type="text" placeholder="Child's name" required
                      value={form.childName} onChange={e => setForm({...form, childName: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="classApplying">Applying for Class <span>*</span></label>
                    <select id="classApplying" required
                      value={form.classApplying} onChange={e => setForm({...form, classApplying: e.target.value})}>
                      <option value="">Select class</option>
                      {['Pre-KG / Nursery','KG 1','KG 2','Class 1','Class 2','Class 3','Class 4','Class 5',
                        'Class 6','Class 7','Class 8','Class 9','Class 10',
                        'Class 11 – Science (JEE/NEET)','Class 11 – Commerce','Class 11 – Arts','Class 12'
                      ].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="locality">Your Area / Locality in Mysuru</label>
                  <input id="locality" type="text" placeholder="e.g. Kuvempunagar, Vijaynagar, Bogadi…"
                    value={form.locality} onChange={e => setForm({...form, locality: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Any specific questions? (optional)</label>
                  <textarea id="message" rows={3}
                    placeholder="e.g. JEE/NEET coaching details, transport, boarding…"
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>{btnText}</button>
                <p className="form-note">
                  🔒 Your details are confidential. Our counsellor will call within a few hours.<br />
                  <a href="/privacy-policy">Privacy Policy</a>
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Stats */}
      <div className="stats-band">
        <div className="stats-inner">
          <div><div className="stat-n">30+</div><div className="stat-l">Years of Excellence</div></div>
          <div><div className="stat-n">Pre-KG<br />–12</div><div className="stat-l">All Classes</div></div>
          <div><div className="stat-n">10km</div><div className="stat-l">From Ring Road</div></div>
          <div><div className="stat-n">IIT</div><div className="stat-l">Trained Faculty</div></div>
        </div>
      </div>

      {/* Why LGS */}
      <section className="lgs-section" style={{background:'#fff'}}>
        <div className="section-inner">
          <h2 className="section-head">Why Parents Choose LGS</h2>
          <p className="section-sub">Every feature built around one goal: your child's future.</p>
          <div className="why-list">
            {[
              ['IIT-Trained Faculty Leadership','School founded and led by IIT-trained educators with decades of experience building high-achieving students.'],
              ['Integrated JEE & NEET Coaching','For Class 11–12 Science, competitive exam coaching is woven into daily curriculum — not an add-on.'],
              ['Smart Classrooms & STEM Labs','Technology-first learning with interactive displays, robotics, and digital tools preparing students for tomorrow.'],
              ['Collaborated with Infosys, L&T, NH','Industry partnerships that bring real-world exposure and learning opportunities to our students.'],
              ['NEP 2020 Aligned Curriculum','Flexible, multidisciplinary education framework focused on holistic development, creativity, and critical thinking.'],
            ].map(([title, text], i) => (
              <div className="why-item" key={i}>
                <div className="why-num">{i + 1}</div>
                <div className="why-body">
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — after Why Parents Choose */}
      <section className="lgs-section" style={{background:'var(--off)'}}>
        <div className="section-inner">
          <h2 className="section-head">What Parents Say</h2>
          <p className="section-sub" style={{marginBottom:16}}>Families from across Mysuru trust LGS with their children's future.</p>
          <div className="testimonial">
            <p>"The holistic approach to education here has truly transformed my son's learning journey. The teachers genuinely care about each child's individual growth and potential."</p>
            <div className="testimonial-by">Kavithashree K S — Mother of Bhuvan S Gowda, Grade 8</div>
          </div>
          <div className="testimonial">
            <p>"We transferred our daughter from another school in Class 7. The difference in engagement and confidence has been remarkable within just one term."</p>
            <div className="testimonial-by">Sandeep Babu R — Father of Samruddhi S, Grade 8</div>
          </div>
        </div>
      </section>

      {/* Academic Stages */}
      <section className="lgs-section" style={{background:'#fff'}}>
        <div className="section-inner">
          <h2 className="section-head">Academic Stages</h2>
          <p className="section-sub">Tailored learning at every stage of your child's growth journey.</p>
          <div className="stages">
            {[
              ['Pre-KG – Class 2','Foundational Stage','Play-based learning, skill development, love for reading and discovery.'],
              ['Class 3 – 5','Preparatory Stage','Building strong literacy, numeracy, and scientific foundations.'],
              ['Class 6 – 8','Middle Stage','Critical thinking, inquiry-based learning, and exploration of subjects.'],
              ['Class 9 – 10','Secondary Stage','Academic rigour, CBSE board preparation, and holistic development.'],
              ['Class 11 – 12','Senior Secondary','Science streams PCMC / PCMB with JEE/NEET focused expert faculty guidance.'],
            ].map(([badge, title, text]) => (
              <div className="stage-item" key={badge}>
                <span className="stage-badge">{badge}</span>
                <div className="stage-text"><strong>{title}</strong>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="lgs-section" style={{background:'#fff'}}>
        <div className="section-inner">
          <h2 className="section-head">How Admissions Work</h2>
          <p className="section-sub">Simple, transparent, and stress-free for every family.</p>
          <div className="steps">
            {[
              [false,'Submit Your Enquiry','Fill in the form above or call us. Takes less than 2 minutes.'],
              [false,'Counsellor Calls You','Our admissions counsellor will call within a few hours to understand your child\'s needs and schedule a visit.'],
              [false,'Campus Visit','You and your child tour the campus, meet teachers, see the labs and classrooms — all at a time convenient for you.'],
              [true,'Seat Confirmed','All details — including fee structure — are discussed personally at the school. Secure your child\'s seat for 2026–27.'],
            ].map(([done, title, text], i) => (
              <div className="step" key={i}>
                <div className={`step-dot${done ? ' done' : ''}`}>{i + 1}</div>
                <div className="step-body"><strong>{title as string}</strong><p>{text as string}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collab */}
      <div className="collab-band">
        <p>In Collaboration With</p>
        <div className="collab-logos">
          {['Infosys','L&T','Narayana Health','ToastMasters','Art of Living','Bagaria Foundation'].map(c => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <section className="visit-cta">
        <h2>Seats Are Filling Fast</h2>
        <p>2026–27 admissions are open now. Enquire today to ensure your child's seat at Learners Global School, Sathagalli.</p>
        <div className="cta-buttons">
          <button className="cta-btn cta-btn-primary" onClick={scrollToForm}>📝 Enquire Now</button>
          <a
            href="https://wa.me/919916933202?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20admissions%20for%202026-27."
            className="cta-btn cta-btn-wa"
            target="_blank" rel="noopener noreferrer"
            onClick={handleWA}
          >
            💬 WhatsApp Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="lgs-footer">
        <strong>Learners Global School</strong><br />
        Sathagalli, Mysore, Karnataka 570029<br />
        <a href="tel:+919916933202" onClick={handlePhone}>+91 9916933202</a>
        &nbsp;·&nbsp;
        <a href="mailto:admissions@learnersdigital.com">admissions@learnersdigital.com</a><br /><br />
        <small>
          © 2026 Learners Global School. All rights reserved. &nbsp;·&nbsp;
          <a href="/privacy-policy">Privacy Policy</a>
        </small>
      </footer>
    </>
  );
}
