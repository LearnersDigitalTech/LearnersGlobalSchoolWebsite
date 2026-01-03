
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './AnnualDayGallery.module.scss';
import { ChevronLeft, X, ChevronRight, Play, Download } from 'lucide-react';
import Link from 'next/link';
// Import raw data and cast it to the correct type
import rawGalleryData from './annual-day-gallery.json';

// Define types
interface MediaItem {
    id: number;
    type: string;
    title?: string;
    category?: string;
    description?: string;
    src: string;
    thumbnail?: string;
}

interface GalleryFolder {
    folder: string;
    media: MediaItem[];
}

// Safely cast the JSON data
const galleryFolders: GalleryFolder[] = rawGalleryData as unknown as GalleryFolder[];

// Fallback logic for development
const FALLBACK_IMAGE = '/images/celestia.JPG';

export default function AnnualDayGallery() {
    const [activeFolderIndex, setActiveFolderIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isBoxLoading, setIsBoxLoading] = useState(false);

    // Swipe state
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance (in px) 
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null); // Reset
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            showNext();
        } else if (isRightSwipe) {
            showPrev();
        }
    };

    // Column count state
    const [numColumns, setNumColumns] = useState(1);

    // Dynamic column calculation
    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth >= 1024) {
                setNumColumns(3); // lg
            } else if (window.innerWidth >= 640) {
                setNumColumns(2); // sm
            } else {
                setNumColumns(1); // mobile
            }
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        setIsBoxLoading(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = useCallback(() => {
        setSelectedIndex(null);
        setIsBoxLoading(false);
        document.body.style.overflow = 'unset';
    }, []);

    // Get current items based on active folder
    const currentItems = galleryFolders[activeFolderIndex]?.media || [];

    const showNext = useCallback(() => {
        setSelectedIndex((prev) => {
            if (prev === null) return null;
            setIsBoxLoading(true);
            return (prev + 1) % currentItems.length;
        });
    }, [currentItems]);

    const showPrev = useCallback(() => {
        setSelectedIndex((prev) => {
            if (prev === null) return null;
            setIsBoxLoading(true);
            return (prev - 1 + currentItems.length) % currentItems.length;
        });
    }, [currentItems]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, closeLightbox, showNext, showPrev]);

    const selectedItem = selectedIndex !== null ? currentItems[selectedIndex] : null;

    // Distribute items into columns row-by-row
    // Col 1 gets 0, 3, 6...
    // Col 2 gets 1, 4, 7...
    const columns: MediaItem[][] = Array.from({ length: numColumns }, () => []);
    currentItems.forEach((item, index) => {
        columns[index % numColumns].push(item);
    });

    const handleDownload = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedItem) return;

        try {
            const response = await fetch(selectedItem.src);
            if (!response.ok) throw new Error('Network response was not ok');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            // Extract filename from URL or use title
            const filename = selectedItem.src.split('/').pop() || selectedItem.title || 'download';
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed, falling back to new tab', error);
            window.open(selectedItem.src, '_blank');
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Back Navigation */}
                <div style={{ marginBottom: '2rem' }}>
                    <Link href="/life" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#64748B', fontWeight: 600, textDecoration: 'none' }}>
                        <ChevronLeft size={20} /> Back
                    </Link>
                </div>

                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Learners Celestia '25</h2>
                    <p className={styles.subtitle}>
                        A glimpse of our spectacular Annual Day Celebration at Kalamandira.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className={styles.filterContainer}>
                    {galleryFolders.map((folder, index) => (
                        <button
                            key={folder.folder}
                            className={`${styles.filterButton} ${activeFolderIndex === index ? styles.active : ''}`}
                            onClick={() => {
                                setActiveFolderIndex(index);
                                setSelectedIndex(null); // Reset lightbox when switching folders
                            }}
                        >
                            {folder.folder}
                        </button>
                    ))}
                </div>

                {/* Split Column Grid */}
                <div className={styles.galleryWrapper}>
                    {columns.map((colItems, colIndex) => (
                        <div key={colIndex} className={styles.column}>
                            {colItems.map((item) => {
                                // Find index relative to current folder for Lightbox
                                const itemIndex = currentItems.indexOf(item);

                                // Priority: First 6 items of current view
                                const isPriority = itemIndex < 6;

                                return (
                                    <div
                                        key={item.id}
                                        className={styles.card}
                                        onClick={() => openLightbox(itemIndex)}
                                    >
                                        <div className={styles.mediaWrapper}>
                                            <Image
                                                src={item.type === 'video' ? (item.thumbnail || FALLBACK_IMAGE) : (item.src.startsWith('http') || item.src.startsWith('/images') ? item.src : FALLBACK_IMAGE)}
                                                alt={item.title || 'Gallery Image'}
                                                width={0}
                                                height={0}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                style={{ width: '100%', height: 'auto' }}
                                                className={styles.image}
                                                quality={50}
                                                priority={isPriority}
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = FALLBACK_IMAGE;
                                                }}
                                            />
                                            {item.type === 'video' && (
                                                <div className={styles.playIcon}>
                                                    <Play fill="white" size={24} />
                                                </div>
                                            )}
                                        </div>

                                        <div className={styles.overlay} />

                                        <div className={styles.content}>
                                            {item.category && <span className={styles.category}>{item.category}</span>}
                                            {item.title && <h3 className={styles.title}>{item.title}</h3>}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && selectedItem && (
                <div
                    className={styles.lightboxOverlay}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) closeLightbox();
                    }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <button
                        className={styles.downloadButton}
                        onClick={handleDownload}
                        title="Download Original"
                        aria-label="Download"
                    >
                        <Download size={24} />
                    </button>

                    <button className={styles.closeButton} onClick={closeLightbox} aria-label="Close">
                        <X size={24} />
                    </button>

                    <button className={`${styles.navButton} ${styles.prev}`} onClick={showPrev} aria-label="Previous">
                        <ChevronLeft size={32} />
                    </button>

                    <div className={styles.lightboxContent}>
                        {isBoxLoading && <span className={styles.loader}></span>}

                        {selectedItem.type === 'video' ? (
                            <video
                                src={selectedItem.src}
                                controls
                                autoPlay
                                playsInline
                                className={styles.lightboxVideo}
                                poster={selectedItem.thumbnail || FALLBACK_IMAGE}
                                onLoadedData={() => setIsBoxLoading(false)}
                                style={{ display: isBoxLoading ? 'none' : 'block' }}
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={selectedItem.src}
                                alt={selectedItem.title || 'Gallery Image'}
                                width={1200}
                                height={800}
                                priority
                                unoptimized={true} // Skip Next.js optimization to load directly from source (faster for full res)
                                style={{ objectFit: 'contain', opacity: isBoxLoading ? 0 : 1 }}
                                onLoadingComplete={() => setIsBoxLoading(false)}
                            />
                        )}

                        {!isBoxLoading && (selectedItem.title || selectedItem.description) && (
                            <div className={styles.lightboxInfo}>
                                <h3 className={styles.lightboxTitle}>{selectedItem.title}</h3>
                                <p className={styles.lightboxDesc}>{selectedItem.description}</p>
                            </div>
                        )}
                    </div>

                    <button className={`${styles.navButton} ${styles.next}`} onClick={showNext} aria-label="Next">
                        <ChevronRight size={32} />
                    </button>
                </div>
            )}
        </section>
    );
}
