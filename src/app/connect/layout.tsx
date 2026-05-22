import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | Get in Touch | Learners Global School Sathagalli, Mysore",
    description: "Contact Learners Global School Sathagalli for admissions enquiries, campus visits, or general information. Find our location, phone, email, and social media. We're here to help!",
    keywords: ["contact school Mysore", "school location Sathagalli", "admissions enquiry", "school phone number", "visit campus", "school address Mysore"],
    openGraph: {
        title: "Contact Us | Learners Global School Sathagalli",
        description: "Get in touch with us for admissions, campus visits, or any queries. We're located in Sathagalli, Mysore.",
        url: "https://learnersglobalschool.com/connect",
        images: [{ url: "/LL.png", width: 1200, height: 630, alt: "Contact Learners Global School" }],
    },
};

export default function ConnectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
