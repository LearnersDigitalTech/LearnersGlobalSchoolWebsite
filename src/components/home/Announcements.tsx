'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
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
        date: 'Saturday, December 28th',
        description: 'Spectacular celebration of talent, achievements, and memorable performances.',
        // badge: 'At Kalamandira',
        actionTitle: 'ANNUAL DAY CELEBRATION 2025',
        actionDescription: 'Experience an evening filled with music, dance, drama, and awards ceremony!',
        actionText: 'View Performance',
        actionLink: '#',
        color: 'purple'
    }
];

export const Announcements = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    // Handle manual navigation
    const handleDotClick = (index: number) => {
        setActiveIndex(index);
        if (trackRef.current) {
            const card = trackRef.current.children[index] as HTMLElement;
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    };

    // Auto-update active index based on time
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % announcements.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Latest Announcements</h2>
                </div>

                <div className={styles.carouselContainer}>
                    <div className={styles.track} ref={trackRef}>
                        {/* Render list twice for infinite scroll effect */}
                        {[...announcements, ...announcements].map((announcement, index) => (
                            <div key={index} className={`${styles.card} ${styles[announcement.color]}`}>
                                <div className={styles.content}>
                                    {/* Date Box */}
                                    <div className={styles.dateBox}>
                                        <span className={styles.month}>{announcement.month}</span>
                                        <span className={styles.day}>{announcement.day}</span>
                                        <span className={styles.year}>{announcement.year}</span>
                                    </div>

                                    {/* Event Info */}
                                    <div className={styles.info}>
                                        <h3 className={styles.eventTitle}>{announcement.title}</h3>
                                        <div className={styles.eventDate}>
                                            <Calendar size={18} />
                                            <span>{announcement.date}</span>
                                        </div>
                                        <p className={styles.eventDescription}>
                                            {announcement.description}
                                        </p>

                                        {/* Action Info */}
                                        <div className={styles.testInfo}>
                                            {/* <span className={styles.badge}>{announcement.badge}</span> */}
                                            <h4 className={styles.testTitle}>{announcement.actionTitle}</h4>
                                            <p className={styles.testDescription}>
                                                {announcement.actionDescription}
                                            </p>
                                            <a
                                                href={announcement.actionLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.ctaButton}
                                            >
                                                <span>{announcement.actionText}</span>
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
