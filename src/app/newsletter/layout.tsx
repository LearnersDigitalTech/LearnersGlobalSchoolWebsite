import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Newsletter Subscription | Stay Updated | Learners Global School Sathagalli",
    description: "Subscribe to Learners Global School newsletter for latest updates on events, admissions, achievements, and educational insights. Stay connected with our school community.",
    keywords: ["school newsletter", "education updates", "school events", "subscribe newsletter", "school news Mysore"],
    openGraph: {
        title: "Newsletter | Stay Updated with Learners Global School",
        description: "Subscribe to our newsletter for latest updates on events, admissions, and achievements.",
        url: "https://learnersglobalschool.com/newsletter",
        images: [{ url: "/LL.png", width: 1200, height: 630, alt: "Newsletter Subscription" }],
    },
};

export default function NewsletterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
