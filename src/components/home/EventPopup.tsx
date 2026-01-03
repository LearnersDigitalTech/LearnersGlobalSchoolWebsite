'use client';

import React, { useEffect, useState } from 'react';
import { X, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import styles from './EventPopup.module.scss';

export const EventPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after a short delay, but only if not seen before
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('hasSeenEventPopup');
            if (!hasSeenPopup) {
                setIsOpen(true);
                sessionStorage.setItem('hasSeenEventPopup', 'true');
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
            <div className={styles.popup}>
                <button className={styles.closeBtn} onClick={handleClose} aria-label="Close popup">
                    <X size={20} />
                </button>

                <div className={styles.content}>
                    <div className={styles.dateBadge}>
                        <div className={styles.month}>DEC</div>
                        <div className={styles.day}>28</div>
                        <div className={styles.year}>2025</div>
                    </div>

                    <div className={styles.eventInfo}>
                        <h2 className={styles.title}>Learners Celestia 2025 @ Kalamandira</h2>

                        <div className={styles.dateTime}>
                            <Calendar size={18} />
                            <span>Saturday, December 28th</span>
                        </div>

                        <p className={styles.description}>
                            Spectacular celebration of talent, achievements, and memorable performances.
                        </p>

                        <div className={styles.subEvent}>
                            <h3>ANNUAL DAY CELEBRATION 2025</h3>
                            <p>Experience an evening filled with music, dance, drama, and awards ceremony!</p>
                        </div>

                        <Link href="/gallery/learners-annual-day-25" className={styles.ctaBtn}>
                            View Performance
                            <ExternalLink size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
