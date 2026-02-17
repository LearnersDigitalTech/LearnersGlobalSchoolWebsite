import React from 'react';
import styles from './Streams.module.scss';
import { Card, CardContent, CardImage } from '../ui/Card';
import { BookOpen, GraduationCap, Users, Star, Trophy } from 'lucide-react';

import Image from 'next/image';

const streams = [
    {
        title: 'Foundational Stage',
        description: 'Pre-KG – Class 2: Play-based learning and skill development.',
        icon: <Star size={24} color="#FFFFFF" />,
        color: 'blue',
        image: '/images/streams/Pre-KG-New.webp'
    },
    {
        title: 'Preparatory Stage',
        description: 'Class 3 – 5: Building strong foundations in literacy and numeracy.',
        icon: <BookOpen size={24} color="#FFFFFF" />,
        color: 'green',
        image: '/images/preparatorystage.webp'
    },
    {
        title: 'Middle Stage',
        description: 'Class 6 – 8: Encouraging curiosity and critical thinking.',
        icon: <Users size={24} color="#FFFFFF" />,
        color: 'yellow',
        image: '/images/middlestage.webp'
    },
    {
        title: 'Secondary Stage',
        description: 'Class 9 – 12: Academic rigor and holistic development.',
        icon: <Trophy size={24} color="#FFFFFF" />,
        color: 'red',
        image: '/images/secondary.webp'
    }
];

export const Streams = () => {
    return (
        <section className={styles.streams}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Academic Streams</h2>
                    <p className={styles.subtitle}>
                        Comprehensive education pathways tailored for every stage of growth.
                    </p>
                </div>

                <div className={styles.grid}>
                    {streams.map((stream, index) => (
                        <Card key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={stream.image}
                                    alt={stream.title}
                                    fill
                                    className={styles.bgImage}
                                />
                                <div className={styles.overlay} />
                            </div>
                            <div className={`${styles.iconWrapper} ${styles[stream.color]}`}>
                                {stream.icon}
                            </div>
                            <CardContent className={styles.content}>
                                <h3 className={styles.cardTitle}>{stream.title}</h3>
                                <p className={styles.cardDesc}>{stream.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                    <Card className={`${styles.card} ${styles.nepCard}`}>
                        <CardContent className={styles.nepContent}>
                            <div className={styles.nepHeader}>
                                <h3 className={styles.nepTitle}>What is NEP 2020?</h3>
                            </div>
                            <p className={styles.nepDesc}>
                                The National Education Policy 2020 is a comprehensive framework to transform education in India, focusing on holistic, flexible, and multidisciplinary learning.
                            </p>
                            <a href="/courses-admissions" className={styles.nepButton}>
                                Learn More &rarr;
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
