import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { EnquiryProvider } from "@/components/providers/EnquiryProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learners Global School Sathagalli | Premier CBSE School in Mysore",
  description: "Learners Global School Sathagalli - A leading CBSE school in Mysore dedicated to shaping future leaders of India through innovative education, holistic development, and world-class facilities. Admissions open for 2026-27.",
  keywords: [
    "Learners Global School",
    "CBSE school Mysore",
    "best school in Sathagalli",
    "top schools in Mysore",
    "CBSE curriculum",
    "quality education Mysore",
    "international school Mysore",
    "holistic education",
    "student development",
    "admissions Mysore",
  ],
  authors: [{ name: "Learners Global School" }],
  creator: "Learners Global School",
  publisher: "Learners Global School",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://learnersglobalschool.com",
    siteName: "Learners Global School Sathagalli",
    title: "Learners Global School Sathagalli | Premier CBSE School in Mysore",
    description: "Shaping future leaders of India through innovative CBSE education, holistic development, and world-class facilities in Mysore. Admissions open for 2026-27.",
    images: [
      {
        url: "/LL.webp",
        width: 1200,
        height: 630,
        alt: "Learners Global School Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learners Global School Sathagalli | Premier CBSE School in Mysore",
    description: "Shaping future leaders of India through innovative CBSE education and holistic development in Mysore.",
    images: ["/LL.webp"],
    creator: "@LearnersGlobal",
  },
  icons: {
    icon: [
      { url: "/LL.webp", sizes: "32x32", type: "image/png" },
      { url: "/LL.webp", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/LL.webp", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/LL.webp",
  },
  verification: {
    google: "your-google-verification-code",
  },
  metadataBase: new URL("https://learnersglobalschool.com"),
  category: "Education",
  classification: "School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5FL4XSKT');`,
          }}
        />
      </head>
      <body className={poppins.variable}>
        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FL4XSKT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <a href="#main-content" className="skip-link">Skip to main content</a>
        <EnquiryProvider>
          {children}
        </EnquiryProvider>
      </body>
    </html>
  );
}
