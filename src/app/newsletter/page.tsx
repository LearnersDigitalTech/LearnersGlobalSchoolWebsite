'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NewsletterSection } from '@/components/connect/NewsletterSection';
import styles from './page.module.scss';



export default function NewsletterPage() {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.content}>
                <NewsletterSection />
            </div>
            <Footer />
        </main>
    );
}
