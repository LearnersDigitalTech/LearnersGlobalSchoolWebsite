'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Announcements.module.scss';

const announcements = [
    {
        month: 'DEC',
        day: '22',
        year: '2025',
        title: 'National Maths Day',
        date: 'Monday, December 22nd',
        description: 'Honoring the birth anniversary of Indian mathematician Srinivasa Ramanujan.',
        badge: 'NATIONAL MATHEMATICS DAY 2025',
        actionTitle: 'Math Skills Proficiency Test',
        actionDescription: 'Discover your math mastery level. Take the assessment and challenge yourself!',
        actionText: 'Start Assessment',
        actionLink: 'https://math100.learnersdigital.com/',
        color: 'blue'
    },
    {
        month: 'DEC',
        day: '28',
        year: '2025',
        title: 'Learners Celestia 2025   @ Kalamandira',
        date: 'Sunday, December 28th',
        description: 'Spectacular celebration of talent, achievements, and memorable performances.',
        actionTitle: 'ANNUAL DAY CELEBRATION 2025',
        actionDescription: 'Experience an evening filled with music, dance, drama, and awards ceremony!',
        actionText: 'View Performance',
        actionLink: '/gallery/learners-annual-day-25',
        color: 'purple'
    },
    {
        month: 'JAN',
        day: '15',
        year: '2026',
        title: 'Admissions Open 2026-27',
        date: 'Wednesday, January 15th',
        description: 'Join the Learners community. Applications for the new academic year are now open.',
        actionTitle: 'SECURE YOUR SEAT',
        actionDescription: 'Early bird registration benefits available for a limited time. Apply now!',
        actionText: 'Apply Now',
        actionLink: '/admissions',
        color: 'green'
    }
];

export const Announcements = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % announcements.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
    };

    const handleDotClick = (index: number) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    const slideVariants = {
        enter: {
            opacity: 0,
            scale: 0.9,
            y: 20
        },
        center: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 1,
            scale: 0.9,
            y: -20
        }
    };

    const currentAnnouncement = announcements[activeIndex];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Latest Announcements</h2>
                </div>

                <div className={styles.sliderWrapper}>
                    {/* Navigation Arrows */}
                    <button
                        className={`${styles.navButton} ${styles.navLeft}`}
                        onClick={handlePrev}
                        aria-label="Previous announcement"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* Card Container */}
                    <div className={styles.cardContainer}>
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={activeIndex}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }}
                                className={`${styles.card} ${styles[currentAnnouncement.color]}`}
                            >
                                <div className={styles.content}>
                                    {/* Date Box */}
                                    <div className={styles.dateBox}>
                                        <span className={styles.month}>{currentAnnouncement.month}</span>
                                        <span className={styles.day}>{currentAnnouncement.day}</span>
                                        <span className={styles.year}>{currentAnnouncement.year}</span>
                                    </div>

                                    {/* Event Info */}
                                    <div className={styles.info}>
                                        <h3 className={styles.eventTitle}>{currentAnnouncement.title}</h3>
                                        <div className={styles.eventDate}>
                                            <Calendar size={18} />
                                            <span>{currentAnnouncement.date}</span>
                                        </div>
                                        <p className={styles.eventDescription}>
                                            {currentAnnouncement.description}
                                        </p>

                                        {/* Action Info */}
                                        <div className={styles.actionInfo}>
                                            <h4 className={styles.actionTitle}>{currentAnnouncement.actionTitle}</h4>
                                            <p className={styles.actionDescription}>
                                                {currentAnnouncement.actionDescription}
                                            </p>
                                            <a
                                                href={currentAnnouncement.actionLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.ctaButton}
                                            >
                                                <span>{currentAnnouncement.actionText}</span>
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrow Right */}
                    <button
                        className={`${styles.navButton} ${styles.navRight}`}
                        onClick={handleNext}
                        aria-label="Next announcement"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

                {/* Navigation Dots */}
                <div className={styles.navigation}>
                    {announcements.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Go to announcement ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};