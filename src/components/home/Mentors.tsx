'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Mentors.module.scss';
import { Button } from '../ui/Button';

const mentors = [
    {
        name: 'Shree Shankar Guruji',
        role: 'Spiritual Leader',
        image: '/images/leaders/ShankarGuruji.webp',
        videoTitle: 'Shree Shankar Guruji',
        videoUrl: 'https://www.youtube.com/embed/y4HTKNWB-vo?si=ClK6DVEXmZ6pgPgd'
    },
    {
        name: 'Mr. Narayan Murthy',
        role: 'Founder Infosys',
        image: '/images/leaders/NarayanMurthy.webp',
        videoTitle: 'Narayan Murthy',
        videoUrl: 'https://www.youtube.com/embed/biN-LIpmBos?si=MdGu9N27xWRbyqKO'
    },
    {
        name: 'Mr. Mohandas Pai',
        role: 'Chairman Aarin Capital',
        image: '/images/leaders/KDinesh.webp',
        videoTitle: 'Mohandas Pai',
        videoUrl: 'https://www.youtube.com/embed/zWgxB5BkGU8?si=asv2LiEh0rYtKaE-'
    },
    {
        name: 'Mr. K. Dinesh',
        role: 'Co-founder Infosys',
        image: '/images/leaders/MohandasPai.webp',
        videoTitle: 'K. Dinesh',
        videoUrl: 'https://www.youtube.com/embed/0iA14WxkZoI?si=dNvw3yapkjzzBAsr'
    }
];

export const Mentors = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState<number | null>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const isMobile = () => window.innerWidth < 768;

        const startAutoScroll = () => {
            if (!isMobile() || isVideoPlaying !== null) return;

            autoScrollIntervalRef.current = setInterval(() => {
                if (!container) return;

                setActiveIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % mentors.length;
                    const cardWidth = container.querySelector(`.${styles.mentorCard}`)?.clientWidth || 0;
                    const gap = 16;
                    const scrollPosition = newIndex * (cardWidth + gap);

                    container.scrollTo({
                        left: scrollPosition,
                        behavior: 'smooth'
                    });

                    return newIndex;
                });
            }, 5000);
        };

        const stopAutoScroll = () => {
            if (autoScrollIntervalRef.current) {
                clearInterval(autoScrollIntervalRef.current);
                autoScrollIntervalRef.current = null;
            }
        };

        startAutoScroll();

        const handleUserScroll = () => {
            stopAutoScroll();
            setTimeout(startAutoScroll, 10000);
        };

        container.addEventListener('touchstart', handleUserScroll);
        container.addEventListener('mousedown', handleUserScroll);

        const handleResize = () => {
            if (isMobile()) {
                startAutoScroll();
            } else {
                stopAutoScroll();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            stopAutoScroll();
            container.removeEventListener('touchstart', handleUserScroll);
            container.removeEventListener('mousedown', handleUserScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isVideoPlaying]);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
        const container = scrollContainerRef.current;
        if (!container) return;

        const cardWidth = container.querySelector(`.${styles.mentorCard}`)?.clientWidth || 0;
        const gap = 16;
        const scrollPosition = index * (cardWidth + gap);

        container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    };

    const handleVideoClick = (index: number) => {
        setIsVideoPlaying(isVideoPlaying === index ? null : index);
    };

    return (
        <section className={styles.mentors}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        {/* <span className={styles.badge}>Our Mentors</span> */}
                        <h2 className={styles.title}>Interaction with Leaders</h2>
                        <p className={styles.subtitle}>
                            Learn from the wisdom and experience of distinguished leaders who shape our community
                        </p>
                    </div>
                    {/* <Button href="/mentors" variant="primary" size="sm">View All Leaders</Button> */}
                </div>

                <div className={styles.gridWrapper}>
                    <div className={styles.grid} ref={scrollContainerRef}>
                        {mentors.map((mentor, index) => (
                            <div key={index} className={styles.mentorCard}>
                                <div className={styles.cardInner}>
                                    <div className={styles.profileSection}>
                                        <div className={styles.imageWrapper}>
                                            <div className={styles.imageCircle}>
                                                <Image
                                                    src={mentor.image}
                                                    alt={mentor.name}
                                                    fill
                                                    className={styles.mentorImage}
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div className={styles.gradientOverlay}></div>
                                        </div>
                                        <div className={styles.info}>
                                            <h3 className={styles.name}>{mentor.name}</h3>
                                            <p className={styles.role}>{mentor.role}</p>
                                        </div>
                                    </div>

                                    <div className={styles.videoSection}>
                                        {mentor.videoUrl && (
                                            <div 
                                                className={`${styles.videoContainer} ${isVideoPlaying === index ? styles.playing : ''}`}
                                                onClick={() => handleVideoClick(index)}
                                            >
                                                {isVideoPlaying === index ? (
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src={`${mentor.videoUrl}&autoplay=1`}
                                                        title={`${mentor.name} - YouTube video`}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen
                                                        className={styles.videoIframe}
                                                    ></iframe>
                                                ) : (
                                                    <div className={styles.videoPlaceholder}>
                                                        <div className={styles.playButton}>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                                                            </svg>
                                                        </div>
                                                        <span className={styles.videoLabel}>Watch Interview</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots for Mobile */}
                    <div className={styles.pagination}>
                        {mentors.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};