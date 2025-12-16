import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import styles from './page.module.scss';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: "Thank You | Enquiry Submitted | Learners Global School Sathagalli",
    description: "Thank you for your enquiry. Our admissions team will contact you shortly.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYou() {
    return (
        <main id="main-content" className={styles.main}>
            <Header />

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <CheckCircle size={64} color="#10B981" />
                        <h1 className={styles.title}>Thank You!</h1>
                        <p className={styles.message}>
                            Your enquiry has been submitted successfully. <br />
                            Our admissions team will get back to you shortly.
                        </p>
                        <Button href="/" variant="primary">Back to Home</Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
