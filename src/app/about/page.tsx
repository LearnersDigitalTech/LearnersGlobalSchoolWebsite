import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import styles from './page.module.scss';
import { Card, CardContent } from '@/components/ui/Card';
import { FacultyGrid } from '@/components/about/FacultyGrid';
import { AboutHero } from '@/components/about/AboutHero';
import { FounderNote } from '@/components/about/FounderNote';
import { PrincipalNote } from '@/components/about/PrincipalNote';
import { RecentlySection } from '@/components/about/RecentlySection';

export const metadata: Metadata = {
    title: "About Us | Learners Global School Sathagalli - Mission, Vision & Faculty",
    description: "Learn about Learners Global School's mission to foster intellectual curiosity and emotional intelligence. Meet our experienced faculty and leadership team dedicated to shaping future leaders in Mysore.",
    keywords: ["about Learners Global School", "school mission vision", "experienced faculty Mysore", "CBSE school leadership", "educational excellence"],
    openGraph: {
        title: "About Learners Global School | Mission, Vision & Faculty",
        description: "Discover our mission to nurture compassionate global leaders through educational excellence in Mysore.",
        url: "https://learnersglobalschool.com/about",
        images: [{ url: "/LL.png", width: 1200, height: 630, alt: "About Learners Global School" }],
    },
};

export default function About() {
    return (
        <main id="main-content" className={styles.main}>
            <Header />

            <AboutHero />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <Card className={styles.missionCard}>
                            <CardContent className={styles.cardContent}>
                                <h2 className={styles.sectionTitle}>Our Mission</h2>
                                <p className={styles.text}>
                                    To provide a nurturing environment that fosters intellectual curiosity,
                                    critical thinking, and emotional intelligence, empowering students to become
                                    compassionate global leaders.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className={styles.missionCard}>
                            <CardContent className={styles.cardContent}>
                                <h2 className={styles.sectionTitle}>Our Vision</h2>
                                <p className={styles.text}>
                                    To be a beacon of educational excellence, shaping holistic individuals
                                    who contribute positively to society through innovation and integrity.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <FounderNote />
            <PrincipalNote />

            <section className={styles.faculty}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Faculty</h2>
                    <div className={styles.facultyGrid}>
                        <FacultyGrid />
                    </div>
                </div>
            </section>

            <RecentlySection />

            <Footer />
        </main>
    );
}
