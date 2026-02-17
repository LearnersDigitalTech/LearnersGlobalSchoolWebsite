'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Activities.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const activities = [
    {
        id: 'smart-class',
        title: 'Smart Classrooms',
        image: '/images/smart-class.webp',
        video: '/images/video.mp4',
        tag: 'Interactive Learning',
        description: 'Experience the future of education with our fully equipped smart classrooms featuring interactive displays and digital learning tools.'
    },
    {
        id: 'stem',
        title: 'STEM Labs',
        image: '/images/stem-lab.webp',
        tag: 'Innovation Hub',
        description: 'Our state-of-the-art STEM labs are designed to foster curiosity and hands-on learning with robotics, 3D printing, and more.'
    },
    {
        id: 'library',
        title: 'Library',
        image: '/images/library.webp',
        tag: 'Knowledge Center',
        description: 'Access a vast collection of digital and physical resources in our modern library designed for research and quiet study.'
    },
    {
        id: 'sports',
        title: 'Sports Complex',
        image: '/images/ground.webp',
        tag: 'Physical Excellence',
        description: 'World-class sporting facilities including basketball courts, football grounds, and indoor sports arenas.'
    },
    {
        id: 'clubs',
        title: 'Clubs and Societies',
        image: '/images/clubs.webp',
        tag: 'Co-Curricular',
        description: 'Join a variety of clubs and societies to pursue your passions, from music and dance to debate and coding.'
    }
];

export const Activities = () => {
    const [activeId, setActiveId] = useState(activities[0].id);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    
    const activeActivity = activities.find(a => a.id === activeId) || activities[0];
    const currentIndex = activities.findIndex(a => a.id === activeId);

    // Handle touch swipe for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && currentIndex < activities.length - 1) {
            setActiveId(activities[currentIndex + 1].id);
        }

        if (isRightSwipe && currentIndex > 0) {
            setActiveId(activities[currentIndex - 1].id);
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    // Scroll active tab into view
    useEffect(() => {
        if (scrollRef.current) {
            const activeButton = scrollRef.current.querySelector(`.${styles.active}`) as HTMLElement;
            if (activeButton) {
                activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [activeId]);

    return (
        <section className={styles.activities}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Beyond the Classroom</h2>
                    <p className={styles.headerDescription}>
                        Discover world-class facilities and opportunities that nurture holistic development
                    </p>
                </div>

                <div className={styles.contentWrapper}>
                    {/* Left Side: Navigation List */}
                    <div className={styles.sidebar}>
                        <nav className={styles.list}>
                            {activities.map((activity, index) => (
                                <button
                                    key={activity.id}
                                    className={`${styles.listItem} ${activeId === activity.id ? styles.active : ''}`}
                                    onClick={() => setActiveId(activity.id)}
                                >
                                    <span className={styles.itemNumber}>0{index + 1}</span>
                                    <span className={styles.itemTitle}>{activity.title}</span>
                                    <span className={styles.itemArrow}>→</span>
                                </button>
                            ))}
                        </nav>

                        <Link href="/connect" className={styles.enquireButton}>
                            <span>Enquire Now</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>

                    {/* Right Side: Display Area */}
                    <div className={styles.displayArea}>
                        {/* Mobile/Tablet Tab Navigation */}
                        <div className={styles.mobileTabsWrapper}>
                            <div className={styles.mobileTabs} ref={scrollRef}>
                                {activities.map((activity, index) => (
                                    <button
                                        key={activity.id}
                                        className={`${styles.mobileTab} ${activeId === activity.id ? styles.active : ''}`}
                                        onClick={() => setActiveId(activity.id)}
                                    >
                                        <span className={styles.tabNumber}>0{index + 1}</span>
                                        <span className={styles.tabTitle}>{activity.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div 
                            className={styles.mediaCard}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <Link href="/life#gallery" className={styles.mediaLink}>
                                <div className={styles.mediaWrapper} key={activeActivity.id}>
                                    {activeActivity.video ? (
                                        <video
                                            src={activeActivity.video}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className={styles.activityVideo}
                                        />
                                    ) : (
                                        <Image
                                            src={activeActivity.image}
                                            alt={activeActivity.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className={styles.activityImage}
                                            priority
                                        />
                                    )}
                                    <div className={styles.overlay}></div>
                                    
                                    {/* Overlaid Content on Image */}
                                    <div className={styles.overlayContent}>
                                        <div className={styles.tagWrapper}>
                                            <span className={styles.tag}>{activeActivity.tag}</span>
                                        </div>
                                        <h3 className={styles.activityTitle}>{activeActivity.title}</h3>
                                        <p className={styles.description}>{activeActivity.description}</p>
                                        <span className={styles.viewMore}>
                                            View Gallery 
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Mobile Navigation Dots */}
                        <div className={styles.mobileDots}>
                            {activities.map((activity) => (
                                <button
                                    key={activity.id}
                                    className={`${styles.dot} ${activeId === activity.id ? styles.activeDot : ''}`}
                                    onClick={() => setActiveId(activity.id)}
                                    aria-label={`View ${activity.title}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Bottom CTA */}
                <div className={styles.mobileCtaWrapper}>
                    <Link href="/connect" className={styles.mobileEnquireButton}>
                        Enquire Now
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};