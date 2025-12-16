'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ConnectHero } from '@/components/connect/ConnectHero';
import { ContactSection } from '@/components/connect/ContactSection';
import { LocationSection } from '@/components/connect/LocationSection';
import { SocialGrid } from '@/components/connect/SocialGrid';
import styles from './page.module.scss';



export default function Connect() {
    return (
        <main className={styles.main}>
            <Header />
            <ConnectHero />
            <ContactSection />
            <LocationSection />
            <SocialGrid />
            <Footer />
        </main>
    );
}
