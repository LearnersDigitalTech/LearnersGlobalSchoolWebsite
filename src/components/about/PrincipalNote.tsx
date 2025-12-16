'use client';

import React from 'react';
import Image from 'next/image';
import styles from './PrincipalNote.module.scss';

export const PrincipalNote = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    {/* Placeholder image - replace with actual principal image */}
                    <Image
                        src="/images/SmtMadhavi.jpeg"
                        alt="Madhavi Latha Konareddy, Principal"
                        width={500}
                        height={600}
                        className={styles.image}
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.label}>Principal's Desk</div>



                    <div className={styles.text}>
                        <p>
                            "I believe in the reciprocal nature of teaching, where students not only learn from me but also inspire and energize me every day."
                        </p>
                        <p>
                            My Learners journey started 10 years ago when we first setup Learners PU school from the ground up with limited resources and just a few students. I find immense joy in the vibrant energy students and children bring to the classroom.
                        </p>
                        <p>
                            I am committed to giving my students the best possible learning experience in campus.
                        </p>
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.author}>
                            <span className={styles.name}>Madhavi Latha Konareddy</span>
                            <span className={styles.role}>Founder | Principal</span>
                            <span className={styles.role}>M. Sc. Computer Science</span>
                            <div className={styles.contact}>
                                <a href="mailto:madhavi@learnersglobalschool.com">madhavi@learnersglobalschool.com</a>
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
