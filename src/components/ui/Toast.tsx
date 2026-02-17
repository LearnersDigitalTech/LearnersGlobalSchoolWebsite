'use client';

import React, { useState, useEffect } from 'react';
import styles from './Toast.module.scss';
import { X, Trophy } from 'lucide-react';

import Image from 'next/image';

export const StudentToast = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show toast after a small delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={styles.toast} role="status" aria-live="polite">
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/mohit.webp"
                        alt="Student of the Week"
                        width={60}
                        height={60}
                        className={styles.studentImage}
                    />
                </div>
                <div className={styles.text}>
                    <p className={styles.label}>Student of the Week</p>
                    <p className={styles.name}>Aarav Patel</p>
                    <p className={styles.grade}>Grade 5 - Excellence in Science</p>
                </div>
                <button
                    className={styles.closeBtn}
                    onClick={() => setIsVisible(false)}
                    aria-label="Close"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};
