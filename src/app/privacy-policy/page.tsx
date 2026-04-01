import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Learners Global School',
  description: 'Privacy Policy for Learners Global School, Sathagalli, Mysuru.',
};

export default function PrivacyPolicy() {
  return (
    <div style={{
      maxWidth: '800px', margin: '0 auto',
      padding: '60px 20px 80px', fontFamily: 'sans-serif',
      lineHeight: 1.8, color: '#1a2a3a'
    }}>
      <h1 style={{ color: '#0c2a52', marginBottom: '8px', fontSize: '32px' }}>
        Privacy Policy
      </h1>
      <p style={{ color: '#6a7f96', marginBottom: '40px' }}>
        Last updated: April 2026
      </p>

      <h2 style={{ color: '#0c2a52', marginTop: '32px' }}>1. Information We Collect</h2>
      <p>When you submit an enquiry on our website, we collect your name, phone number,
      email address, and your child's details to process your admission enquiry.</p>

      <h2 style={{ color: '#0c2a52', marginTop: '32px' }}>2. How We Use Your Information</h2>
      <p>Your information is used solely to respond to your admission enquiry and to
      schedule a campus visit. We do not sell or share your personal data with third parties.</p>

      <h2 style={{ color: '#0c2a52', marginTop: '32px' }}>3. Cookies and Analytics</h2>
      <p>We use Google Analytics and Google Ads tags to understand how visitors use our
      website. These tools use cookies to collect anonymous usage data. You can opt out
      via your browser settings.</p>

      <h2 style={{ color: '#0c2a52', marginTop: '32px' }}>4. Google Advertising</h2>
      <p>We use Google Ads to promote our school. Google may use cookies to serve ads
      based on your prior visits to this website. You can opt out at{' '}
      <a href="https://google.com/settings/ads" style={{ color: '#1155a8' }}>
        google.com/settings/ads
      </a>.</p>

      <h2 style={{ color: '#0c2a52', marginTop: '32px' }}>5. Data Security</h2>
      <p>All form data is transmitted securely. We retain enquiry data for a maximum
      of 12 months and use it only for admissions purposes.</p>

      <h2 style={{ color: '#0c2a52', marginTop: '32px' }}>6. Contact Us</h2>
      <p>
        Learners Global School, Sathagalli, Mysuru 570029<br />
        Phone: <a href="tel:+919916933202" style={{ color: '#1155a8' }}>+91 9916933202</a><br />
        Email: <a href="mailto:admissions@learnersdigital.com" style={{ color: '#1155a8' }}>
          admissions@learnersdigital.com
        </a>
      </p>

      <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #e0e0e0' }}>
        <Link href="/admission26" style={{ color: '#1155a8', textDecoration: 'none' }}>
          ← Back
        </Link>
      </div>
    </div>
  );
}
