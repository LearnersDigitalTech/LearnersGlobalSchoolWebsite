'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';


import { EventsGrid } from '@/components/life/EventsGrid';
import { CampusGallery } from '@/components/life/CampusGallery';
import { MediaRecognition } from '@/components/life/MediaRecognition';
import styles from './page.module.scss';



export default function Life() {
    const campusFacilities = [
        { title: 'Modern Labs', desc: 'Physics, Chemistry, and Biology labs equipped with latest apparatus.' },
        { title: 'Smart Classrooms', desc: 'Interactive panels and digital learning aids.' },
        { title: 'Sports Grounds', desc: 'Football, Cricket, and Athletics tracks.' },
        { title: 'Library', desc: 'Vast collection of books and digital resources.' }
    ];

    return (
        <main id="main-content" className={styles.main}>
            <Header />



            <EventsGrid />
            <CampusGallery />
            <MediaRecognition />







            <Footer />
        </main>
    );
}
