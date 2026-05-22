import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import styles from './page.module.scss';
import { CoursesHero } from '@/components/courses/CoursesHero';
import { StreamOverview } from '@/components/courses/StreamOverview';
import { CurriculumSection } from '@/components/courses/CurriculumSection';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
    title: "Courses & Admissions | CBSE Curriculum Pre-KG to Class 12 | Learners Global School",
    description: "Explore our comprehensive CBSE curriculum from Pre-KG to Class 12. Science, Commerce, and Arts streams available. Admissions open for 2024-25. Apply now for quality education in Mysore.",
    keywords: ["CBSE curriculum", "admissions Mysore", "Pre-KG to Class 12", "Science stream", "Commerce stream", "Arts stream", "school admissions", "JEE NEET coaching"],
    openGraph: {
        title: "Courses & Admissions | CBSE Pre-KG to Class 12",
        description: "Comprehensive CBSE education with Science, Commerce & Arts streams. Admissions open for 2024-25 in Mysore.",
        url: "https://learnersglobalschool.com/courses-admissions",
        images: [{ url: "/LL.png", width: 1200, height: 630, alt: "Courses and Admissions" }],
    },
};

export default function CoursesAdmissions() {
    const curriculumData = [
        {
            id: 'foundational',
            title: 'Foundational Stage',
            subtitle: 'Pre-KG – Class 2',
            description: 'Our foundational program focuses on play-based learning, fostering curiosity, and developing essential social and motor skills in a nurturing environment.',
            points: [
                'Play-based and activity-based learning',
                'Development of fine and gross motor skills',
                'Introduction to phonics and numeracy',
                'Social skills and emotional development',
                'Creative expression through art and music'
            ]
        },
        {
            id: 'preparatory',
            title: 'Preparatory Stage',
            subtitle: 'Class 3 – 5',
            description: 'The preparatory stage builds a strong academic foundation while encouraging creativity, discovery, and values-based learning.',
            points: [
                'Strong foundation in literacy and numeracy',
                'Introduction to formal subjects',
                'Focus on reading, writing, and speaking skills',
                'Creative projects and hands-on activities',
                'Value education and character building'
            ]
        },
        {
            id: 'middle',
            title: 'Middle Stage',
            subtitle: 'Class 6 – 8',
            description: 'The middle stage is a time for exploration, deep diving into subjects, and developing critical thinking and problem-solving skills.',
            points: [
                'In-depth subject knowledge and experiential learning',
                'Introduction to vocational subjects and coding',
                'Project-based learning methodology',
                'Communication and presentation skills',
                'Collaborative group activities'
            ]
        },
        {
            id: 'secondary',
            title: 'Secondary Stage',
            subtitle: 'Class 9 – 12',
            description: 'We prepare students for board examinations and higher education with rigorous academic training, practical labs, and career guidance.',
            points: [
                'Intensive preparation for board exams',
                'Practical learning in Science and Computer labs',
                'Regular mock tests and assessments',
                'Career guidance and counseling sessions',
                'Specialized coaching for competitive exams (JEE/NEET)'
            ]
        }
    ];

    return (
        <main id="main-content" className={styles.main}>
            <Header />

            <CoursesHero />

            <StreamOverview />

            <div className={styles.curriculumWrapper}>
                {curriculumData.map((section, index) => (
                    <CurriculumSection
                        key={index}
                        {...section}
                    />
                ))}
            </div>

            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to start your journey?</h2>
                        <p className={styles.ctaText}>
                            Admissions are open for the upcoming academic year.
                        </p>
                        <Button variant="primary" size="lg" href="/connect">
                            Admissions Enquiry &rarr;
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

