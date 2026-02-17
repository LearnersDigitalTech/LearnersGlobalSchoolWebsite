import React from 'react';
import styles from './Clubs.module.scss';

const houses = [
    { 
        name: 'Krishna House', 
        color: 'yellow', 
        description: 'Innovation & Tech',
        icon: '💡',
        motto: 'Illuminate the Future'
    },
    { 
        name: 'Kabini House', 
        color: 'blue', 
        description: 'Arts & Culture',
        icon: '🎨',
        motto: 'Create with Passion'
    },
    { 
        name: 'Kaveri House', 
        color: 'purple', 
        description: 'Environmental Stewardship',
        icon: '🌿',
        motto: 'Nurture Nature'
    },
    { 
        name: 'Kapila House', 
        color: 'red', 
        description: 'Passion & Leadership',
        icon: '🔥',
        motto: 'Lead with Purpose'
    }
];

export const Clubs = () => {
    return (
        <section className={styles.clubs}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Our Community</span>
                    <h2 className={styles.title}>School Houses</h2>
                    <p className={styles.subtitle}>
                        Fostering team spirit, healthy competition, and lifelong friendships 
                        through our four distinctive houses.
                    </p>
                </div>
                
                <div className={styles.grid}>
                    {houses.map((house, index) => (
                        <div 
                            key={index} 
                            className={`${styles.houseCard} ${styles[house.color]}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>{house.icon}</span>
                                </div>
                                
                                <div className={styles.content}>
                                    <h3 className={styles.houseName}>{house.name}</h3>
                                    <p className={styles.houseDesc}>{house.description}</p>
                                    <p className={styles.motto}>{house.motto}</p>
                                </div>
                                
                                <div className={styles.colorStrip}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};