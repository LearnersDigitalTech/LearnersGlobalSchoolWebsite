'use client';
import React from 'react';
import { ArrowRight, GraduationCap, Briefcase, Mail } from 'lucide-react';
import styles from './ConnectHero.module.scss';
import Link from 'next/link';
import { useEnquiry } from '@/context/EnquiryContext';

export const ConnectHero = () => {
    const { openEnquiry } = useEnquiry();
    
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.cardsWrapper}>
                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <GraduationCap className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>Admission Enquiry</h3>
                        <p className={styles.cardDesc}>
                            Interested in joining our LGS family? Get all the details about our admission process and criteria.
                        </p>
                        <button 
                            onClick={openEnquiry} 
                            className={styles.link}
                        >
                            Enquire Now 
                            <ArrowRight className={styles.arrow} />
                        </button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <Briefcase className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>Careers</h3>
                        <p className={styles.cardDesc}>
                            Passionate about education? Explore open positions and join our team of dedicated educators.
                        </p>
                        <a
                            href="https://wa.me/919916933202?text=Hi%2C%20I%20would%20like%20to%20apply%20for%20a%20teaching%20position%20at%20Learners%20Global%20School.%20Please%20find%20my%20resume%20attached."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            View Openings 
                            <ArrowRight className={styles.arrow} />
                        </a>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <Mail className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>Newsletter</h3>
                        <p className={styles.cardDesc}>
                            Stay updated with the latest news, events, and achievements from Learner Global School.
                        </p>
                        <Link href="/newsletter" className={styles.link}>
                            Subscribe 
                            <ArrowRight className={styles.arrow} />
                        </Link>
                    </div>
                </div>
               </div>
        </section>
    );
};