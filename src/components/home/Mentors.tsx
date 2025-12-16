'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Mentors.module.scss';
import { Button } from '../ui/Button';

const mentors = [
    {
        name: 'Shree Shankar Guruji',
        role: 'Spiritual Leader',
        image: '/images/leaders/ShankarGuruji.jpg',
        videoTitle: 'Shree Shankar Guruji',
        videoUrl: 'https://www.youtube.com/embed/y4HTKNWB-vo?si=ClK6DVEXmZ6pgPgd'
    },
    {
        name: 'Mr. Narayan Murthy',
        role: 'Founder Infosys',
        image: '/images/leaders/NarayanMurthy.jpg',
        videoTitle: 'Narayan Murthy',
        videoUrl: 'https://www.youtube.com/embed/biN-LIpmBos?si=MdGu9N27xWRbyqKO'
    },
    {
        name: 'Mr. Mohandas Pai',
        role: 'Chairman Aarin Capital',
        image: '/images/leaders/KDinesh.jpg',
        videoTitle: 'Mohandas Pai',
        videoUrl: 'https://www.youtube.com/embed/zWgxB5BkGU8?si=asv2LiEh0rYtKaE-'
    },
    {
        name: 'Mr. K. Dinesh',
        role: 'Co-founder Infosys',
        image: '/images/leaders/MohandasPai.jpg',
        videoTitle: 'K. Dinesh',
        videoUrl: 'https://www.youtube.com/embed/0iA14WxkZoI?si=dNvw3yapkjzzBAsr'
    }
];

export const Mentors = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Only auto-scroll on mobile (screen width < 768px)
        const isMobile = () => window.innerWidth < 768;

        const startAutoScroll = () => {
            if (!isMobile()) return;

            let currentIndex = 0;

            autoScrollIntervalRef.current = setInterval(() => {
                if (!container) return;

                currentIndex = (currentIndex + 1) % mentors.length;
                const cardWidth = container.querySelector(`.${styles.mentorWrapper}`)?.clientWidth || 0;
                const gap = 24; // $spacing-4 in pixels
                const scrollPosition = currentIndex * (cardWidth + gap);

                container.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }, 4000); // Change slide every 4 seconds
        };

        const stopAutoScroll = () => {
            if (autoScrollIntervalRef.current) {
                clearInterval(autoScrollIntervalRef.current);
                autoScrollIntervalRef.current = null;
            }
        };

        // Start auto-scroll on mount
        startAutoScroll();

        // Stop auto-scroll when user manually scrolls
        const handleUserScroll = () => {
            stopAutoScroll();
            // Restart after 10 seconds of inactivity
            setTimeout(startAutoScroll, 10000);
        };

        container.addEventListener('touchstart', handleUserScroll);
        container.addEventListener('mousedown', handleUserScroll);

        // Handle window resize
        const handleResize = () => {
            if (isMobile()) {
                startAutoScroll();
            } else {
                stopAutoScroll();
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            stopAutoScroll();
            container.removeEventListener('touchstart', handleUserScroll);
            container.removeEventListener('mousedown', handleUserScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className={styles.mentors}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Interaction with Leaders</h2>
                    {/* <Button href="/mentors" variant="primary" size="sm">View All Leaders</Button> */}
                </div>

                <div className={styles.grid} ref={scrollContainerRef}>
                    {mentors.map((mentor, index) => (
                        <div key={index} className={styles.mentorWrapper}>
                            <div className={styles.imageCircle}>
                                <Image
                                    src={mentor.image}
                                    alt={mentor.name}
                                    fill
                                    className={styles.mentorImage}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.name}>{mentor.name}</h3>
                                <p className={styles.role}>{mentor.role}</p>
                            </div>
                            <div className={styles.videoThumbnail}>
                                {mentor.videoUrl ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={mentor.videoUrl}
                                        title={`${mentor.name} - YouTube video`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className={styles.videoIframe}
                                    ></iframe>
                                ) : (
                                    <>
                                        <div className={styles.playButton}>▶</div>
                                        <span className={styles.videoLabel}>{mentor.videoTitle}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

