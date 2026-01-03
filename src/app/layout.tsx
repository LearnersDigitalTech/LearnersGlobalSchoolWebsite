import type { Metadata } from "next";
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
  // Primary Meta Tags
  title: "Learners Global School Sathagalli | Premier CBSE School in Mysore",
  description: "Learners Global School Sathagalli - A leading CBSE school in Mysore dedicated to shaping future leaders of India through innovative education, holistic development, and world-class facilities. Admissions open for 2024-25.",
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

  // Robots directives
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

  // Open Graph Tags (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://learnersglobalschool.com",
    siteName: "Learners Global School Sathagalli",
    title: "Learners Global School Sathagalli | Premier CBSE School in Mysore",
    description: "Shaping future leaders of India through innovative CBSE education, holistic development, and world-class facilities in Mysore. Admissions open for 2024-25.",
    images: [
      {
        url: "/LL.png",
        width: 1200,
        height: 630,
        alt: "Learners Global School Logo",
      },
    ],
  },

  // Twitter Card Tags
  twitter: {
    card: "summary_large_image",
    title: "Learners Global School Sathagalli | Premier CBSE School in Mysore",
    description: "Shaping future leaders of India through innovative CBSE education and holistic development in Mysore.",
    images: ["/LL.png"],
    creator: "@LearnersGlobal",
  },

  // Icons and Favicons
  icons: {
    icon: [
      { url: "/LL.png", sizes: "32x32", type: "image/png" },
      { url: "/LL.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/LL.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/LL.png",
  },

  // Verification and other meta tags
  verification: {
    google: "your-google-verification-code", // Replace with actual Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Canonical URL
  metadataBase: new URL("https://learnersglobalschool.com"),

  // Additional metadata
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
      <body className={poppins.variable}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <EnquiryProvider>
          {children}
        </EnquiryProvider>
      </body>
    </html>
  );
}
