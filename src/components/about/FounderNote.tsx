'use client';

import React from 'react';
import Image from 'next/image';
import styles from './FounderNote.module.scss';

export const FounderNote = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/MuraliMohan.webp"
                        alt="Murali Mohan Konareddy, Founder Director"
                        width={500}
                        height={600}
                        className={styles.image}
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.label}>Founder Director's Desk</div>

                    <blockquote className={styles.quote}>
                        "Since my childhood, I have been passionate about education. I started as a Maths tutor in my village, and now as an entrepreneur I want to reach as many students as possible and inculcate in them the drive to keep learning and keep pushing their limits to excel in life!"
                    </blockquote>

                    <div className={styles.text}>
                        <p>
                            <strong>Areas of Focus:</strong> Mathematics, Physics, Programming, Soft Skills
                        </p>
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.author}>
                            <span className={styles.name}>Murali Mohan Konareddy</span>
                            <span className={styles.role}>Founder | Director</span>
                            <span className={styles.role}>M.Tech IIT Kanpur, Ex Head of Infosys China Education Center</span>
                            <div className={styles.contact}>
                                <a href="mailto:murali@learnersglobalschool.com">murali@learnersglobalschool.com</a>
                                <br />
                                <a href="tel:+919916933202">+91 9916933202</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
