'use client';

import React, { useState, useEffect } from 'react';
import styles from './Methodology.module.scss';
import { Brain, Users, Globe, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const methods = [
    {
        title: '5W1H Framework',
        description: 'Encouraging inquiry: Who, What, Where, When, Why, How.',
        icon: <Brain size={24} color="#1E88E5" />,
        color: 'blue'
    },
    {
        title: 'Mind Mapping',
        description: 'Visualizing concepts to enhance memory and understanding.',
        icon: <Lightbulb size={24} color="#F59E0B" />,
        color: 'yellow'
    },
    {
        title: 'Hybrid Learning',
        description: 'Seamlessly blending physical classroom experiences with digital resources.',
        icon: <Users size={24} color="#10B981" />,
        color: 'green'
    },
    {
        title: 'Learn Technology',
        description: 'Mastering tools and tech for a future-ready mindset.',
        icon: <Globe size={24} color="#8B5CF6" />,
        color: 'purple'
    }
];

const slideshowImages = [
    '/images/ss21.webp',
    '/images/preparatorystage.webp',
    // '/images/ss23.webp', // Removed as it was not found
];

export const Methodology = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.methodology}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Learner's Teaching Methodologies</h2>
                    <p className={styles.subtitle}>
                        Innovative approaches designed to foster critical thinking and creativity.
                    </p>
                    <p className={styles.quote}>
                        "If you give a man a fish, you feed him for a day. If you teach a man to fish, you feed him for a lifetime."
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.grid}>
                        {methods.map((method, index) => (
                            <div key={index} className={styles.card}>
                                <div className={`${styles.iconWrapper} ${styles[method.color]}`}>
                                    {method.icon}
                                </div>
                                <h3 className={styles.cardTitle}>{method.title}</h3>
                                <p className={styles.cardDesc}>{method.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.imageSection}>
                        <div className={styles.imagePlaceholder}>
                            {slideshowImages.map((src, index) => (
                                <div
                                    key={index}
                                    className={`${styles.slide} ${index === currentImageIndex ? styles.active : ''}`}
                                >
                                    <Image
                                        src={src}
                                        alt={`Methodology Slideshow ${index + 1}`}
                                        fill
                                        className={styles.slideImage}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
