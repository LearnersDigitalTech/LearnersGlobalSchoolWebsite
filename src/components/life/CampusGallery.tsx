'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './CampusGallery.module.scss';

const galleryItems = [
    { id: 1, src: '/images/library.webp', category: 'Campus', alt: 'Library interior' },
    { id: 2, src: '/images/smart-class.webp', category: 'Campus', alt: 'Smart classroom session' },
    { id: 3, src: '/images/mohit.webp', category: 'Achievements', alt: 'Award ceremony' },
    { id: 4, src: '/images/stem-lab.webp', category: 'Campus', alt: 'STEM Lab' },
    { id: 5, src: '/images/clubs.webp', category: 'Events', alt: 'Music club performance' },
    { id: 6, src: '/images/ground.webp', category: 'Campus', alt: 'Sports ground' },
    { id: 7, src: '/images/ss21.webp', category: 'Events', alt: 'Annual day performance' },
    { id: 8, src: '/images/club1.webp', category: 'Clubs', alt: 'Club Activity 1' },
    { id: 9, src: '/images/club2.webp', category: 'Clubs', alt: 'Club Activity 2' },
    { id: 10, src: '/images/club3.webp', category: 'Clubs', alt: 'Club Activity 3' },
    { id: 11, src: '/images/club4.webp', category: 'Clubs', alt: 'Club Activity 4' },
    { id: 12, src: '/images/club5.webp', category: 'Clubs', alt: 'Club Activity 5' },
    { id: 13, src: '/images/club6.webp', category: 'Clubs', alt: 'Club Activity 6' },
    { id: 14, src: '/images/club7.webp', category: 'Clubs', alt: 'Club Activity 7' },
    { id: 15, src: '/images/lab1.webp', category: 'Labs', alt: 'Lab Session 1' },
    { id: 16, src: '/images/lab2.webp', category: 'Labs', alt: 'Lab Session 2' },
    { id: 17, src: '/images/lab3.webp', category: 'Labs', alt: 'Lab Session 3' },
    { id: 18, src: '/images/lab4.webp', category: 'Labs', alt: 'Lab Session 4' },
];

const filters = ['All', 'Labs', 'Clubs', 'Campus', 'Events', 'Achievements', 'Students'];

export const CampusGallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const filteredItems = activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
    };

    const goToPrevious = () => {
        setSelectedImageIndex((prev) => {
            if (prev === null) return null;
            return (prev - 1 + filteredItems.length) % filteredItems.length;
        });
    };

    const goToNext = () => {
        setSelectedImageIndex((prev) => {
            if (prev === null) return null;
            return (prev + 1) % filteredItems.length;
        });
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;

            if (e.key === 'ArrowLeft') {
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImageIndex]);

    // Get current image safely
    const currentImage = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

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
                    {filteredItems.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={styles.galleryItem}
                            onClick={() => openLightbox(index)}
                        >
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

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && currentImage && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <button 
                        className={styles.closeButton}
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        ✕
                    </button>

                    <button 
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    <div 
                        className={styles.lightboxContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.imageWrapper} key={currentImage.id}>
                            <Image
                                src={currentImage.src}
                                alt={currentImage.alt}
                                fill
                                className={styles.lightboxImage}
                                quality={100}
                                priority
                            />
                        </div>
                        <p className={styles.imageCaption}>
                            {currentImage.alt}
                        </p>
                     
                    </div>

                    <button 
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        aria-label="Next image"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    );
};