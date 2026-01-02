'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
import { Button } from '../ui/Button';

import { VirtualTourModal } from './VirtualTourModal';

export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [isVirtualTourOpen, setIsVirtualTourOpen] = React.useState(false);
    const heroImages = [
        '/images/Campus.jpeg',
        '/images/ashika.png'
    ];

    const heroCaptions = [
        { title: 'Excellence', subtitle: 'In Education', details: null },
        {
            title: 'Student',
            subtitle: 'of the day',
            details: {
                name: 'Ashika Rao',
                achievement: 'State Topper 2023'
            }
        }
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <span className={styles.badge}>Admissions Open for 2026–27</span>
                        <h1 className={styles.headline}>
                            Shaping Future <span className={styles.highlight}>Leaders</span> of India
                        </h1>
                        <p className={styles.subhead}>
                            Learners Global School fosters holistic growth and academic excellence,
                            empowering students to become responsible global citizens.
                        </p>
                        <div className={styles.actions}>
                            <Button href="/connect" variant="primary" size="lg">
                                Enquire Now
                            </Button>
                            <Button onClick={() => setIsVirtualTourOpen(true)} variant="outline" size="lg">
                                Virtual Tour
                            </Button>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>500+</span>
                                <span className={styles.statLabel}>Students</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>1:12</span>
                                <span className={styles.statLabel}>Teacher Ratio</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageContent}>
                        <div className={styles.imageWrapper}>
                            {heroImages.map((src, index) => (
                                <Image
                                    key={src}
                                    src={src}
                                    alt="Students at LGS"
                                    fill
                                    priority={index === 0}
                                    className={`${styles.heroImage} ${index === currentImageIndex ? styles.active : ''}`}
                                    style={{ objectFit: 'contain' }}
                                />
                            ))}
                            <div className={styles.imageOverlay}></div>
                        </div>

                        {/* Floating elements for visual interest */}
                        <div className={`${styles.floatingCard} ${heroCaptions[currentImageIndex].details ? styles.expanded : ''}`}>
                            <span className={styles.floatingIcon}>🎓</span>
                            <div>
                                <p className={styles.floatingTitle}>{heroCaptions[currentImageIndex].title}</p>
                                <p className={styles.floatingSubtitle}>{heroCaptions[currentImageIndex].subtitle}</p>
                                {heroCaptions[currentImageIndex].details && (
                                    <div className={styles.studentDetails}>
                                        <p className={styles.studentName}>{heroCaptions[currentImageIndex].details.name}</p>
                                        <p className={styles.studentAchievement}>{heroCaptions[currentImageIndex].details.achievement}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className={styles.bgDecoration}></div>

            <VirtualTourModal
                isOpen={isVirtualTourOpen}
                onClose={() => setIsVirtualTourOpen(false)}
            />
        </section>
    );
};
