import React from 'react';
import styles from './CoursesHero.module.scss';
import Image from 'next/image';

interface HeroProps {
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    subtitle?: string;
}

export const CoursesHero: React.FC<HeroProps> = ({ 
    imageSrc = "/images/streams/schoolimage.webp",
    imageAlt = "Hero Image",
    title = "Explore Our Curriculum",
    subtitle = "A structured learning journey from Pre-Primary to High School."
}) => {
    return (
        <section className={styles.hero}>
            <div className={styles.imageWrapper}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className={styles.bgImage}
                    priority
                />
                <div className={styles.overlay} />
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </section>
    );
};