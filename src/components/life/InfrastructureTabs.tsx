'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import styles from './InfrastructureTabs.module.scss';

const facilities = [
    {
        id: 'stem',
        title: 'STEM Labs',
        category: 'Innovation Hub',
        description: 'Our state-of-the-art STEM labs are designed to foster curiosity and hands-on learning. Equipped with the latest robotics kits, 3D printers, and physics apparatus, students can bring their theoretical knowledge to life.',
        features: ['Robotics & AI Workstations', '3D Printing Zone', 'Physics & Chemistry Bays', 'Collaborative Workspaces'],
        image: '/images/stem-lab.png'
    },
    {
        id: 'smart',
        title: 'Smart Classrooms',
        category: 'Digital Learning',
        description: 'Every classroom is a gateway to the world. With interactive flat panels, high-speed internet, and digital learning resources, we ensure that learning is engaging, visual, and boundless.',
        features: ['Interactive Flat Panels', 'Digital Content Library', 'Hybrid Learning Ready', 'Ergonomic Seating'],
        image: '/images/smart-class.png'
    },
    {
        id: 'library',
        title: 'Digital Library',
        category: 'Knowledge Center',
        description: 'More than just books, our library is a vibrant space for research and reading. It houses a vast collection of physical books alongside a comprehensive digital repository accessible to all students.',
        features: ['20,000+ Books', 'Kindle & E-Book Zone', 'Quiet Study Areas', 'Research Terminals'],
        image: '/images/library.png'
    },
    {
        id: 'sports',
        title: 'Sports Complex',
        category: 'Physical Education',
        description: 'Champions are made here. Our sprawling sports complex includes facilities for cricket, football, basketball, and athletics, coached by national-level trainers to ensure holistic physical development.',
        features: ['FIFA Standard Turf', 'Indoor Basketball Court', 'Swimming Pool', 'Athletics Track'],
        image: '/images/ground.jpeg'
    },
    {
        id: 'canteen',
        title: 'Modern Canteen',
        category: 'Health & Nutrition',
        description: 'We believe in fueling the mind and body. Our hygienic, modern canteen serves nutritious, balanced meals prepared fresh daily, ensuring students have the energy to excel throughout the day.',
        features: ['Hygienic Kitchen', 'Balanced Diet Menu', 'Spacious Dining Hall', 'Cashless Payments'],
        image: '/images/Canteen.jpeg' // Placeholder
    }
];

export const InfrastructureTabs = () => {
    const [activeTab, setActiveTab] = useState(facilities[0].id);

    const activeContent = facilities.find(f => f.id === activeTab) || facilities[0];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.sectionTitle}>Campus Infrastructure</h2>
                    <p className={styles.subtitle}>
                        Designed to inspire, built to facilitate excellence. Explore our campus facilities.
                    </p>
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.sidebar}>
                        {facilities.map((facility) => (
                            <button
                                key={facility.id}
                                className={`${styles.tabButton} ${activeTab === facility.id ? styles.active : ''}`}
                                onClick={() => setActiveTab(facility.id)}
                            >
                                {facility.title}
                            </button>
                        ))}
                    </div>

                    <div className={styles.displayArea} key={activeTab}>
                        <div className={styles.cardContent}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={activeContent.image}
                                    alt={activeContent.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.info}>
                                <span className={styles.categoryBadge}>{activeContent.category}</span>
                                <h3 className={styles.cardTitle}>{activeContent.title}</h3>
                                <p className={styles.description}>{activeContent.description}</p>
                                <ul className={styles.featureList}>
                                    {activeContent.features.map((feature, index) => (
                                        <li key={index} className={styles.featureItem}>
                                            <CheckCircle2 size={20} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
