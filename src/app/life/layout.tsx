import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Campus Life | Events, Facilities & Activities | Learners Global School Sathagalli",
    description: "Experience vibrant campus life at Learners Global School. Explore our modern labs, smart classrooms, sports facilities, library, and exciting student events. See our campus gallery and media recognition.",
    keywords: ["campus life Mysore", "school facilities", "student events", "sports facilities", "smart classrooms", "school labs", "extracurricular activities"],
    openGraph: {
        title: "Campus Life | Events, Facilities & Activities",
        description: "Discover vibrant campus life with modern facilities, exciting events, and comprehensive student activities.",
        url: "https://learnersglobalschool.com/life",
        images: [{ url: "/LL.png", width: 1200, height: 630, alt: "Campus Life at Learners Global School" }],
    },
};

export default function LifeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
