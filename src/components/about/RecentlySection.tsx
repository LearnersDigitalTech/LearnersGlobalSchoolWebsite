'use client';

import React from 'react';
import Image from 'next/image';
import styles from './RecentlySection.module.scss';

const recentEvents = [
    {
        id: 1,
        image: '/images/smart-class.webp',
        caption: 'New Smart Classrooms',
        description: 'Introducing state-of-the-art smart classrooms to enhance interactive learning. Our students now have access to digital boards and multimedia resources.'
    },
    {
        id: 2,
        image: '/images/library.webp',
        caption: 'Library Renovation',
        description: 'Our library has been revamped with thousands of new books and a cozy reading corner to foster a love for reading among students.'
    },
    {
        id: 3,
        image: '/images/stem-lab.webp',
        caption: 'STEM Lab Opening',
        description: 'A new dedicated space for Science, Technology, Engineering, and Math exploration, equipped with robotics kits and 3D printers.'
    },
    {
        id: 4,
        image: '/images/ground.webp',
        caption: 'Sports Day Highlights',
        description: 'Celebrating sportsmanship and athleticism at our annual sports meet. Students participated in track and field events with great enthusiasm.'
    },
    {
        id: 5,
        image: '/images/clubs.webp',
        caption: 'Cultural Fest',
        description: 'A vibrant display of talent and culture by our students, featuring dance, music, and drama performances.'
    }
];

export const RecentlySection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Recently</h2>
                <div className={styles.carousel}>
                    {recentEvents.map((event) => (
                        <div key={event.id} className={styles.card}>
                            <Image
                                src={event.image}
                                alt={event.caption}
                                width={400}
                                height={450}
                                className={styles.image}
                            />
                            <div className={styles.content}>
                                <h3 className={styles.caption}>{event.caption}</h3>
                                <p className={styles.description}>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
