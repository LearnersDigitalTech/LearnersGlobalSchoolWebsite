import React from 'react';
import styles from './Achievers.module.scss';
import { Button } from '../ui/Button';

import Image from 'next/image';

const achievers = [
    {
        name: 'Ashika Rao',
        achievement: 'National Level Swimmer',
        description: 'Secured Gold Medal in 50m Freestyle at the National Aquatic Championship 2024.',
        image: '/images/ashika.webp',
        color: 'blue'
    },
    {
        name: 'Mohit Sinha',
        achievement: 'Math Olympiad Winner',
        description: 'Ranked 1st in the International Mathematics Olympiad (IMO) - Regional Level.',
        image: '/images/mohit.webp',
        color: 'green'
    },
    {
        name: 'Ashika Rao',
        achievement: 'National Level Swimmer',
        description: 'Secured Gold Medal in 50m Freestyle at the National Aquatic Championship 2024.',
        image: '/images/ashika.webp',
        color: 'blue'
    },
    {
        name: 'Mohit Sinha',
        achievement: 'Math Olympiad Winner',
        description: 'Ranked 1st in the International Mathematics Olympiad (IMO) - Regional Level.',
        image: '/images/mohit.webp',
        color: 'green'
    }
];

export const Achievers = () => {
    return (
        <section className={styles.achievers}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Notable Achievers</h2>
                    <p className={styles.subtitle}>Celebrating excellence in academics and sports.</p>
                </div>

                <div className={styles.carouselContainer}>
                    <div className={styles.track}>
                        {/* Render list twice for infinite scroll effect */}
                        {[...achievers, ...achievers].map((achiever, index) => (
                            <div key={index} className={`${styles.card} ${styles[achiever.color]}`}>
                                <div className={styles.content}>
                                    <h3 className={styles.name}>{achiever.name}</h3>
                                    <p className={styles.achievement}>{achiever.achievement}</p>
                                    <p className={styles.description}>{achiever.description}</p>
                                    <Button variant="outline" size="sm" className={styles.button}>View Achievement</Button>
                                </div>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={achiever.image}
                                        alt={achiever.name}
                                        fill
                                        className={styles.achieverImage}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
