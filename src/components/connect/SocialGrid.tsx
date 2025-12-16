'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ArrowRight, Youtube } from 'lucide-react';
import styles from './SocialGrid.module.scss';

const socials = [
    { id: 'fb', name: 'Follow us on Facebook', icon: <Facebook size={28} />, class: 'facebook', url: 'https://www.facebook.com/share/17nuSeiQGP/' },
    { id: 'ig', name: 'Follow us on Instagram', icon: <Instagram size={28} />, class: 'instagram', url: 'https://www.instagram.com/learners_global_school_mysuru?igsh=MTk5aXFyYm8zdG0zdg==' },
    { id: 'tw', name: 'Follow us on Youtube', icon: <Youtube size={28} />, class: 'Youtube', url: 'https://www.youtube.com/@learnerspuc6316' },
    { id: 'li', name: 'Connect on LinkedIn', icon: <Linkedin size={28} />, class: 'linkedin', url: 'https://www.linkedin.com/company/learners-digital/' },
];

export const SocialGrid = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {socials.map((social) => (
                        <a
                            key={social.id}
                            href={social.url}
                            className={styles.card}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={`${styles.iconCircle} ${styles[social.class]}`}>
                                {social.icon}
                            </div>
                            <span className={styles.text}>{social.name}</span>
                            <span className={styles.link}>Visit Page <ArrowRight size={16} /></span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
