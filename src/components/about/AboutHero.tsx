'use client';

import React from 'react';
import Image from 'next/image';
import styles from './AboutHero.module.scss';
import { User } from 'lucide-react';

export const AboutHero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.estBadge}>
                        EST. 1995
                    </div>

                    <h1 className={styles.title}>
                        Cultivating<br />
                        Excellence in<br />
                        <span>Every Learner</span>
                    </h1>

                    <p className={styles.description}>
                        At Learner Global School, Mysuru, we believe education is a journey of self-discovery.
                        We nurture curiosity, integrity, and global citizenship in a warm, student-centric environment.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.avatars}>
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={styles.avatar}>
                                    <User size={20} color="#64748B" />
                                </div>
                            ))}
                            <div className={`${styles.avatar} ${styles.avatarCount}`}>
                                +2k
                            </div>
                        </div>
                        <span className={styles.statsText}>Happy Students</span>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="https://storage.googleapis.com/global-school-website-bucket/2025-2026/Annual-Day-28-12-2025/Moments/DSC05901.JPG"
                        alt="Students of Learners Global School"
                        width={600}
                        height={500}
                        className={styles.heroImage}
                        priority
                    />

                    <div className={styles.yearsBadge}>
                        <span className={styles.yearsNumber}>25+</span>
                        <span className={styles.yearsText}>Years of Excellence</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
