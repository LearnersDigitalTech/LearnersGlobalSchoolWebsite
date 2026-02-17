'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ConnectHero } from '@/components/connect/ConnectHero';
import { ContactSection } from '@/components/connect/ContactSection';
import { LocationSection } from '@/components/connect/LocationSection';
import { SocialGrid } from '@/components/connect/SocialGrid';
import styles from './page.module.scss';
import { CoursesHero } from '@/components/courses/CoursesHero';



export default function Connect() {
    return (
        <main className={styles.main}>
            <Header />
            <CoursesHero
                imageSrc="/images/contact.webp"
                imageAlt="Connect With Us"
                title="Contact"
                subtitle=" Whether you have a question about admissions, careers, or just want to say hello, we’re here to help."
            />
            <ConnectHero />
            <ContactSection />
            <LocationSection />
            <SocialGrid />
            <Footer />
        </main>
    );
}
