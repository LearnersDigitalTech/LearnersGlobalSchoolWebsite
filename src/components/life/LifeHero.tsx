'use client';

import React from 'react';
import Image from 'next/image';
import { Trophy, Star, Medal } from 'lucide-react';
import styles from './LifeHero.module.scss';

export const LifeHero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Celebrating Excellence</span>
                    <h1 className={styles.title}>Wall of <span>Fame</span></h1>
                    <p className={styles.subtitle}>
                        Honoring our brightest stars who have brought glory to the institution through
                        academic brilliance, sportsmanship, and creativity.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Left Card */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/girl1.webp"
                                alt="Sarah Jenkins"
                                width={120}
                                height={120}
                                className={styles.image}
                            />
                            <div className={`${styles.iconBadge} ${styles.gold}`}>
                                <Trophy size={18} />
                            </div>
                        </div>
                        <h3 className={styles.name}>Sarah Jenkins</h3>
                        <div className={styles.classInfo}>Class 12 - Science</div>
                        <div className={styles.quoteBox}>
                            <span className={styles.achievement}>"National Math Olympiad Gold Medalist 2024"</span>
                            <div className={styles.tags}>
                                <span className={styles.tag}>98.5% Agg.</span>
                                <span className={styles.tag}>Debate Capt.</span>
                            </div>
                        </div>
                    </div>

                    {/* Center Card (Highlighted) */}
                    <div className={`${styles.card} ${styles.centerCard}`}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/mohit.webp"
                                alt="David Chen"
                                width={160}
                                height={160}
                                className={styles.image}
                            />
                            <div className={`${styles.iconBadge} ${styles.purple}`}>
                                <Star size={20} />
                            </div>
                        </div>
                        <h3 className={styles.name}>David Chen</h3>
                        <div className={styles.classInfo}>Class 10</div>
                        <div className={styles.quoteBox}>
                            <span className={styles.achievement}>"International Robotics Champion & Young Innovator"</span>
                            <div className={styles.tags}>
                                <span className={styles.tag}>Robotics Club</span>
                                <span className={styles.tag}>State Swimmer</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/ashika.webp"
                                alt="Aisha Khan"
                                width={120}
                                height={120}
                                className={styles.image}
                            />
                            <div className={`${styles.iconBadge} ${styles.green}`}>
                                <Medal size={18} />
                            </div>
                        </div>
                        <h3 className={styles.name}>Aisha Khan</h3>
                        <div className={styles.classInfo}>Class 11 - Arts</div>
                        <div className={styles.quoteBox}>
                            <span className={styles.achievement}>"National Level Kathak Dancer & Fine Arts Winner"</span>
                            <div className={styles.tags}>
                                <span className={styles.tag}>Cultural Sec.</span>
                                <span className={styles.tag}>Editor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
