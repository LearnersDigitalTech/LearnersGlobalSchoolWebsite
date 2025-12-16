# Learners Global School Website

A modern, responsive Next.js website for Learners Global School & PU College in Mysuru, Karnataka.

## 🚀 Features

- **Modern UI/UX** - Built with Next.js 14, TypeScript, and SCSS
- **Responsive Design** - Mobile-first approach with smooth animations
- **Form Integration** - Multiple contact forms with Google Sheets integration
- **Email Notifications** - Automated emails for admissions and inquiries
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Performance** - Optimized images, lazy loading, and code splitting

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Account (for Google Sheets integration)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LearnersGlobalSchoolWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Google Sheets Integration

### Setup Google Apps Script

1. **Create a Google Sheet**
   - Name: `LearnersGlobalSchool` (or any name you prefer)
   - Create a sheet tab named: `Form Responses`

2. **Add Column Headers** (Row 1):
   ```
   Timestamp | Full Name | Email | Phone | Child's Name | Grade | Message | Source
   ```

3. **Open Apps Script**
   - In your Google Sheet: Extensions → Apps Script
   - Delete any existing code
   - Copy the script from `google-apps-script-setup.md` artifact
   - Update the configuration:
     ```javascript
     const SHEET_NAME = 'Form Responses';
     const ADMIN_EMAIL = 'your-email@example.com';
     const SCHOOL_NAME = 'Learners Global School';
     ```

4. **Deploy as Web App**
   - Click **Deploy** → **New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**
   - Copy the Web App URL

5. **Update Environment Variable**
   - Paste the Web App URL in `.env.local`
   - Restart your dev server

### Google Sheets Column Details

| Column | Description | Example |
|--------|-------------|---------|
| **Timestamp** | Auto-generated submission time | 2025-12-16 21:30:45 |
| **Full Name** | User's full name | John Doe |
| **Email** | User's email address | john@example.com |
| **Phone** | Contact number | +91 9916933202 |
| **Child's Name** | Student name (optional) | Jane Doe |
| **Grade** | Grade/Class interested in | Class 1-5 |
| **Message** | User's message/query | Interested in admission |
| **Source** | Form origin | Contact Form / Admissions Popup / Newsletter |

## 📝 Form Integration

The website has **4 integrated forms**:

### 1. Contact Form (`/connect` page)
- Full contact form with validation
- Fields: Name, Email, Phone, Child's Name, Grade, Message
- Source: `Contact Form`

### 2. Admissions Popup (Homepage)
- Modal popup for quick enquiries
- Fields: Student Name, Phone, Email, Grade
- Source: `Admissions Popup`
- Auto-appears after 2 seconds (once per session)

### 3. Newsletter Section (`/connect` page)
- Email subscription
- Field: Email only
- Source: `Newsletter Subscription`

### 4. Footer Newsletter (All pages)
- Email subscription in footer
- Field: Email only
- Source: `Footer Newsletter`

## 📧 Email Notifications

All form submissions trigger **2 emails**:

1. **Admin Notification**
   - Sent to: Admin email (configured in Apps Script)
   - Contains: All form details in formatted table
   - Template: Professional HTML email

2. **User Auto-Reply**
   - Sent to: User's email
   - Contains: Thank you message + submission details
   - Template: Branded HTML email with school info

## 🔗 WhatsApp Integration

Career application buttons open WhatsApp:
- **Number**: +91 9916933202
- **Pre-filled message**: Job application template
- **Locations**: 
  - "Apply Now" button (Contact page)
  - "View Openings" button (Connect Hero)

## 🎨 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Icons**: Lucide React
- **Image Optimization**: Next/Image
- **Forms**: React Hooks
- **Backend**: Next.js API Routes + Google Apps Script

## 📁 Project Structure

```
LearnersGlobalSchoolWebsite/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/
│   │   │   └── contact/        # Contact form API route
│   │   ├── about/              # About page
│   │   ├── connect/            # Connect page
│   │   ├── courses-admissions/ # Courses page
│   │   └── life/               # Life at Learners page
│   ├── components/
│   │   ├── home/               # Homepage components
│   │   ├── connect/            # Contact components
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   └── ui/                 # Reusable UI components
│   ├── context/                # React Context providers
│   ├── styles/                 # Global styles and variables
│   └── public/                 # Static assets
├── .env.local                  # Environment variables (not in git)
└── README.md                   # This file
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variable: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
4. Deploy

## 🔧 Configuration

### Update School Information

1. **Contact Details** (`src/components/layout/Footer.tsx`):
   - Phone: +91 9916933202
   - Email: admissions@lgs.edu.in
   - Address: Sathagalli, Mysore, Karnataka 570029

2. **Social Media Links** (`src/components/layout/Footer.tsx`):
   - Facebook, YouTube, Instagram, LinkedIn

3. **Google Apps Script**:
   - Admin email
   - School name
   - Email templates

## 📝 Troubleshooting

### Forms not submitting to Google Sheets

1. Check Google Apps Script deployment is **Active**
2. Verify `.env.local` has correct URL
3. Ensure sheet name matches: `Form Responses`
4. Check Apps Script execution logs for errors
5. Verify all permissions are granted

See `contact-form-troubleshooting.md` for detailed debugging steps.

### Environment variables not working

1. Restart dev server after changing `.env.local`
2. Ensure variable starts with `NEXT_PUBLIC_`
3. Check no quotes around the URL

## 📄 License

© 2025 Learners Global School. All rights reserved.

## 📞 Support

For technical support or questions:
- **Email**: admissions@lgs.edu.in
- **Phone**: +91 9916933202
- **Website**: https://learnersglobalschool.com
