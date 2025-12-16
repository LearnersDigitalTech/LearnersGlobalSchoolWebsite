'use client';

import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import styles from './Announcements.module.scss';

export const Announcements = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Latest Announcements</h2>
                </div>

                <div className={styles.card}>
                    <div className={styles.content}>
                        {/* Date Box */}
                        <div className={styles.dateBox}>
                            <span className={styles.month}>DEC</span>
                            <span className={styles.day}>22</span>
                            <span className={styles.year}>2025</span>
                        </div>

                        {/* Event Info */}
                        <div className={styles.info}>
                            <h3 className={styles.eventTitle}>National Maths Day</h3>
                            <div className={styles.eventDate}>
                                <Calendar size={18} />
                                <span>Monday, December 22nd</span>
                            </div>
                            <p className={styles.eventDescription}>
                                Honoring the birth anniversary of Indian mathematician Srinivasa Ramanujan.
                            </p>

                            {/* Test Info - Same Section */}
                            <div className={styles.testInfo}>
                                <span className={styles.badge}>NATIONAL MATHEMATICS DAY 2025</span>
                                <h4 className={styles.testTitle}>Math Skills Proficiency Test</h4>
                                <p className={styles.testDescription}>
                                    Discover your math mastery level. Take the assessment and challenge yourself!
                                </p>
                                <a
                                    href="https://math100.learnersdigital.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.ctaButton}
                                >
                                    <span>Start Assessment</span>
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
