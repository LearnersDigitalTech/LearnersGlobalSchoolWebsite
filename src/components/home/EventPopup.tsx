'use client';

import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './EventPopup.module.scss';

const results = [
    { src: '/images/results/001-sujel.png', alt: 'Sujel Mog – State 7th Topper, 593/600' },
    { src: '/images/results/002-jahnavi.png', alt: 'Jahnavi S – State 7th Topper, 593/600' },
    { src: '/images/results/003-yoshita.png', alt: 'Yoshita Konareddy – State 9th Rank, 98.72%' },
    { src: '/images/results/004-sophiya.png', alt: 'Sophiya Ali Khan – 97.76%' },
];

export const EventPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('hasSeenResultsPopup');
            if (!hasSeenPopup) {
                setIsOpen(true);
                sessionStorage.setItem('hasSeenResultsPopup', 'true');
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % results.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
            <div className={styles.popup}>
                <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close popup">
                    <X size={20} />
                </button>

                <div className={styles.resultsHeader}>
                    <span className={styles.tag}>2025–26 Results</span>
                    <h2 className={styles.resultsTitle}>Congratulations to our Toppers!</h2>
                </div>

                <div className={styles.carousel}>
                    <button
                        className={styles.navBtn}
                        onClick={() => setCurrent((prev) => (prev - 1 + results.length) % results.length)}
                        aria-label="Previous"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <div className={styles.imageWrapper}>
                        <Image
                            key={current}
                            src={results[current].src}
                            alt={results[current].alt}
                            fill
                            className={styles.resultImage}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    <button
                        className={styles.navBtn}
                        onClick={() => setCurrent((prev) => (prev + 1) % results.length)}
                        aria-label="Next"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>

                <div className={styles.dots}>
                    {results.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to result ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
