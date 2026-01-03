'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './EventsGrid.module.scss';

const events = [
    {
        id: 1,
        title: "Learners Annual Day '25",
        category: 'Cultural',
        categoryClass: 'cultural',
        date: { day: '28', month: 'Dec' },
        description: 'A vibrant celebration of art, music, and dance featuring performances by students across all grades.',
        image: '/images/celestia.JPG'
    },
    {
        id: 2,
        title: 'Science Exhibition 2024',
        category: 'Academic',
        categoryClass: 'academic',
        date: { day: '22', month: 'Sep' },
        description: 'Showcasing innovative projects and models created by our budding scientists and engineers.',
        image: '/images/stem-lab.png'
    },
    {
        id: 3,
        title: 'Inter-School Sports Meet',
        category: 'Sports',
        categoryClass: 'sports',
        date: { day: '05', month: 'Oct' },
        description: 'Competing with top schools in the region in football, basketball, and athletics.',
        image: '/images/ground.jpeg'
    },
    {
        id: 4,
        title: 'Robotics Workshop',
        category: 'Workshop',
        categoryClass: 'workshop',
        date: { day: '12', month: 'Nov' },
        description: 'Hands-on workshop on building and programming autonomous robots for students of class 8-10.',
        image: '/images/smart-class.png'
    }
];

export const EventsGrid = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Events</h2>
                    <p className={styles.subtitle}>
                        Stay updated with the latest happenings and upcoming activities at Learner Global School.
                    </p>
                </div>

                <div className={styles.grid}>
                    {events.map((event) => {
                        const slug = event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

                        return (
                            <a href={`/gallery/${slug}`} key={event.id} className={styles.card}>
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className={styles.image}
                                />
                                <div className={styles.overlay} />

                                <div className={styles.dateBadge}>
                                    <span className={styles.day}>{event.date.day}</span>
                                    <span className={styles.month}>{event.date.month}</span>
                                </div>

                                <div className={styles.content}>
                                    <span className={styles.category}>
                                        {event.category}
                                    </span>
                                    <h3 className={styles.title}>{event.title}</h3>
                                    <p className={styles.description}>{event.description}</p>
                                    <div className={styles.readMore}>
                                        View Gallery <ArrowRight size={16} />
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
