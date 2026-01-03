'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CampusGallery.module.scss';

const galleryItems = [
    // { id: 1, src: '/images/hero_students.png', category: 'Students', alt: 'Students celebrating' },
    { id: 1, src: '/images/library.png', category: 'Campus', alt: 'Library interior' },
    { id: 2, src: '/images/smart-class.png', category: 'Campus', alt: 'Smart classroom session' },
    { id: 3, src: '/images/mohit.png', category: 'Achievements', alt: 'Award ceremony' },
    { id: 4, src: '/images/stem-lab.png', category: 'Campus', alt: 'STEM Lab' },
    { id: 5, src: '/images/clubs.jpeg', category: 'Events', alt: 'Music club performance' },
    { id: 6, src: '/images/ground.jpeg', category: 'Campus', alt: 'Sports ground' },
    { id: 7, src: '/images/ss21.jpeg', category: 'Events', alt: 'Annual day performance' },
    // Clubs
    { id: 8, src: '/images/club1.jpeg', category: 'Clubs', alt: 'Club Activity 1' },
    { id: 9, src: '/images/club2.jpeg', category: 'Clubs', alt: 'Club Activity 2' },
    { id: 10, src: '/images/club3.jpeg', category: 'Clubs', alt: 'Club Activity 3' },
    { id: 11, src: '/images/club4.jpeg', category: 'Clubs', alt: 'Club Activity 4' },
    { id: 12, src: '/images/club5.jpeg', category: 'Clubs', alt: 'Club Activity 5' },
    { id: 13, src: '/images/club6.jpeg', category: 'Clubs', alt: 'Club Activity 6' },
    { id: 14, src: '/images/club7.jpeg', category: 'Clubs', alt: 'Club Activity 7' },
    // Labs
    { id: 15, src: '/images/lab1.jpeg', category: 'Labs', alt: 'Lab Session 1' },
    { id: 16, src: '/images/lab2.jpeg', category: 'Labs', alt: 'Lab Session 2' },
    { id: 17, src: '/images/lab3.jpeg', category: 'Labs', alt: 'Lab Session 3' },
    { id: 18, src: '/images/lab4.jpeg', category: 'Labs', alt: 'Lab Session 4' },
];

const filters = ['All', 'Labs', 'Clubs', 'Campus', 'Events', 'Achievements', 'Students'];

export const CampusGallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredItems = activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <section id="gallery" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Moments That Matter</h2>
                    <p className={styles.subtitle}>
                        Capturing the essence of life at Learner Global School through our lens.
                    </p>
                </div>

                <div className={styles.filters}>
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`${styles.filterChip} ${activeFilter === filter ? styles.active : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className={styles.galleryGrid}>
                    {filteredItems.map((item) => (
                        <div key={item.id} className={styles.galleryItem}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className={styles.image}
                            />
                            <div className={styles.overlay}>
                                <span className={styles.viewButton}>View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
