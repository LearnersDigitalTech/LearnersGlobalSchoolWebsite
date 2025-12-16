import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InfrastructureTabs } from '@/components/life/InfrastructureTabs';
import styles from '../page.module.scss'; // Reusing main page styles for basic layout

export const metadata: Metadata = {
    title: "Mandatory Disclosure | CBSE Compliance | Learners Global School Sathagalli",
    description: "View mandatory disclosure information as per CBSE norms for Learners Global School Sathagalli, Mysore. Infrastructure details, facilities, and compliance documents.",
    keywords: ["mandatory disclosure", "CBSE compliance", "school infrastructure", "CBSE norms", "school facilities"],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Mandatory Disclosure | Learners Global School",
        description: "CBSE mandatory disclosure and compliance information for Learners Global School Sathagalli.",
        url: "https://learnersglobalschool.com/mandatory-disclosure",
    },
};

export default function MandatoryDisclosure() {
    return (
        <main className={styles.main}>
            <Header />
            <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '60vh' }} className="container">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Mandatory Disclosure</h1>

                <InfrastructureTabs />
            </div>
            <Footer />
        </main>
    );
}
