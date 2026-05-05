'use client';

import { useEffect, useState } from 'react';

declare global { interface Window { dataLayer: any[]; gtag?: Function; } }

function pushEvent(event: string, params: Record<string, string> = {}) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  }
}

function getParam(name: string): string {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get(name) || '';
}

export default function ThankYouPage() {
  const [name, setName] = useState('');
  const [source, setSource] = useState('form');
  const [conversionFired, setConversionFired] = useState(false);

  useEffect(() => {
    const n = getParam('name');
    const s = getParam('source') || 'form';
    setName(n);
    setSource(s);

    // ── Fire conversion ONCE on this page only ──────────────────────────────
    if (!conversionFired) {
      // Google Ads conversion — fires for both form fills and WhatsApp clicks
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18041287506',
          value: 1,          // ₹1 per lead — avoids inflated conversion values
          currency: 'INR',
        });
      }

      // GTM dataLayer event
      pushEvent(
        s === 'whatsapp' ? 'whatsapp_conversion' : 'form_conversion',
        { conversion_source: s, lead_name: n }
      );

      setConversionFired(true);
    }
  }, []);

  const isWhatsApp = source === 'whatsapp';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:'DM Sans',system-ui,sans-serif;color:#1a2a3a;background:#f4f9fd;font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;min-height:100vh;display:flex;flex-direction:column}
        :root{
          --navy:#0c2a52;--blue:#1155a8;--blue-light:#e8f2fb;
          --green:#1a6b43;--green-light:#e8f5ed;
          --white:#fff;--off:#f4f9fd;--text:#1a2a3a;--muted:#4a6a8a;
          --border:#d0dde8;--serif:'DM Serif Display',Georgia,serif;
          --sans:'DM Sans',system-ui,sans-serif;--radius:12px;
          --shadow:0 4px 32px rgba(12,42,82,0.12);
        }
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes scaleIn{from{opacity:0;transform:scale(0.7)}to{opacity:1;transform:scale(1)}}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
        .page-wrap{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 20px 40px}
        .card{background:#fff;border-radius:var(--radius);box-shadow:var(--shadow);max-width:480px;width:100%;padding:36px 28px;text-align:center;animation:fadeUp .5s ease both}
        .tick-wrap{width:80px;height:80px;border-radius:50%;background:var(--green-light);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:40px;animation:scaleIn .45s cubic-bezier(0.34,1.56,0.64,1) both .1s}
        .card h1{font-family:var(--serif);font-size:clamp(22px,6vw,30px);color:var(--navy);line-height:1.2;margin-bottom:10px}
        .card .sub{font-size:15px;color:var(--muted);line-height:1.7;margin-bottom:24px}
        .info-box{background:var(--green-light);border:1px solid #b7dfca;border-radius:10px;padding:16px 18px;margin-bottom:24px;text-align:left;font-size:13px;color:#1a6b43;line-height:1.7}
        .info-box strong{font-weight:600}
        .btn-group{display:flex;flex-direction:column;gap:10px;margin-bottom:24px}
        @media(min-width:400px){.btn-group{flex-direction:row;justify-content:center}}
        .btn{padding:13px 22px;border-radius:8px;font-weight:700;font-size:15px;text-decoration:none;font-family:var(--sans);display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;cursor:pointer;transition:transform .1s,opacity .15s}
        .btn:active{transform:scale(.98)}
        .btn-wa{background:#25d366;color:#fff}
        .btn-home{background:var(--blue-light);color:var(--navy)}
        .divider{height:1px;background:var(--border);margin:20px 0}
        .next-steps{text-align:left}
        .next-steps h3{font-size:14px;font-weight:700;color:var(--navy);margin-bottom:12px}
        .step-row{display:flex;gap:12px;align-items:flex-start;margin-bottom:12px}
        .step-dot{width:28px;height:28px;border-radius:50%;background:var(--navy);color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
        .step-text{font-size:13px;color:var(--text);line-height:1.55}
        .step-text strong{color:var(--navy);display:block;font-size:13px;margin-bottom:1px}
        .header{background:#fff;border-bottom:1px solid var(--border);padding:12px 20px;display:flex;align-items:center;justify-content:space-between}
        .logo-wrap{display:flex;align-items:center;gap:10px;text-decoration:none}
        .logo-text{font-family:var(--serif);font-size:15px;color:var(--navy);line-height:1.25}
        .logo-text small{font-family:var(--sans);font-size:11px;color:var(--muted);font-style:italic;display:block}
        .footer{background:var(--navy);color:rgba(255,255,255,.6);padding:18px 20px;font-size:13px;text-align:center;line-height:1.8}
        .footer strong{color:#fff}
        .footer a{color:rgba(255,255,255,.6);text-decoration:none}
      `}</style>

      <header className="header">
        <a href="https://learnersglobalschool.com/" className="logo-wrap">
          <img
            src="https://learnersglobalschool.com/_next/image?url=%2Fimages%2F1.webp&w=128&q=75"
            alt="LGS"
            style={{ height: 40, width: 'auto' }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="logo-text">
            Learners Global School & PU College
            <small>Sathagalli, Mysuru · CBSE</small>
          </div>
        </a>
      </header>

      <main className="page-wrap">
        <div className="card">
          <div className="tick-wrap">✅</div>

          {isWhatsApp ? (
            <>
              <h1>We'll Respond Shortly{name ? `, ${name}` : ''}!</h1>
              <p className="sub">
                Your WhatsApp message has been received. Our admissions counsellor will reply to you soon with all the details you need.
              </p>
            </>
          ) : (
            <>
              <h1>Enquiry Received{name ? `, ${name}!` : '!'}</h1>
              <p className="sub">
                Thank you for your interest in Learners Global School. Your child's admission enquiry has been successfully submitted.
              </p>
            </>
          )}

          <div className="info-box">
            📱 <strong>Check your SMS</strong> — a confirmation has been sent to your mobile.<br />
            📞 Our counsellor will call from <strong>+91 9916933202</strong> — please save this number.<br />
            ⏱️ Expected callback: <strong>within a few hours</strong> during school hours (9 AM – 5 PM).
          </div>

          <div className="btn-group">
            <a
              href="https://wa.me/919916933202?text=Hi%2C%20I%20just%20enquired%20about%20admissions%20for%202026-27."
              className="btn btn-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat on WhatsApp
            </a>
            <a href="/admission26" className="btn btn-home">
              ← Back to Admission Page
            </a>
          </div>

          <div className="divider" />

          <div className="next-steps">
            <h3>What happens next?</h3>
            <div className="step-row">
              <div className="step-dot">1</div>
              <div className="step-text">
                <strong>Counsellor Calls You</strong>
                Our team reviews your enquiry and calls to understand your child's needs.
              </div>
            </div>
            <div className="step-row">
              <div className="step-dot">2</div>
              <div className="step-text">
                <strong>Campus Visit Scheduled</strong>
                We arrange a convenient time for you and your child to tour the campus.
              </div>
            </div>
            <div className="step-row">
              <div className="step-dot">3</div>
              <div className="step-text">
                <strong>Seat Confirmed</strong>
                Fee structure and admission details are shared personally at the school.
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <strong>Learners Global School &amp; PU College</strong><br />
        Sathagalli, Mysore, Karnataka 570029<br />
        <a href="tel:+919916933202">+91 9916933202</a> ·{' '}
        <a href="mailto:admissions@learnersdigital.com">admissions@learnersdigital.com</a><br /><br />
        <small>© 2026 Learners Global School. All rights reserved.</small>
      </footer>
    </>
  );
}
