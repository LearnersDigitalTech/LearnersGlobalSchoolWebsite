'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './FacultyGrid.module.scss';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const facultyMembers = [
    { id: 1, name: 'Ms Trupthi G', image: '/images/Ms Trupthi G.webp' },
    { id: 2, name: 'Shreedevi YJ', image: '/images/Shreedevi YJ.webp' },
    { id: 3, name: 'Ms Tanya KJ', image: '/images/Ms Tanya KJ.webp' },
    { id: 4, name: 'Ms. Krupa Nandakumar', image: '/images/Ms. Krupa Nandakumar.webp' },
    { id: 5, name: 'Mr MADHU KUMAR', image: '/images/Mr MADHU KUMAR.webp' },
    { id: 6, name: 'ASHA JYOTHI.S', image: '/images/ASHA JYOTHI.S.webp' },
    { id: 7, name: 'Ms AMATUS SALMA MUNAZZA', image: '/images/Ms AMATUS SALMA MUNAZZA.webp' },
    { id: 8, name: 'Ms. Shilpa.R', image: '/images/Ms. Shilpa.R.webp' },
    { id: 9, name: 'Mrs. Leelavathi S ', image: '/images/Mrs. Leelavathi S .webp' },
    { id: 10, name: 'Ms Suchithra. T . S', image: '/images/Ms Suchithra. T . S.webp' },
    { id: 11, name: 'Numera Fathima ', image: '/images/Numera Fathima .webp' },
    { id: 12, name: 'Ms Mallika. M', image: '/images/Ms Mallika. M.webp' },
    { id: 13, name: 'Mizba kouser', image: '/images/Mizba kouser.webp' },
    { id: 14, name: 'Ms.Pooja.N', image: '/images/Ms.Pooja.N.webp' },
    { id: 15, name: 'Vyshnavi Rahul', image: '/images/Vyshnavi Rahul.webp' },
    { id: 16, name: 'MAHADEVA SWAMY M B', image: '/images/MAHADEVA SWAMY M B.webp' },
    { id: 17, name: 'Ms Deeparani M R', image: '/images/MsDeeparaniMR.webp' },
    { id: 18, name: 'Mrs. Antony Mary Swetha', image: '/images/Mrs. Antony Mary Swetha.webp' },
    { id: 19, name: 'Maitri Haveri', image: '/images/Maitri Haveri.webp' },
    { id: 20, name: 'Mr. Vijayakumar ', image: '/images/Mr. Vijayakumar .webp' },
    { id: 21, name: 'Ms. Nethravathi. B. M', image: '/images/Ms. Nethravathi. B. M.webp' },
    { id: 22, name: 'Ms. Lavanya A J ', image: '/images/Ms. Lavanya A J .webp' },
    { id: 23, name: 'Aishwaryalakshmi P A', image: '/images/Aishwaryalakshmi P A.webp' },
    { id: 24, name: 'Ms Divyarani G S', image: '/images/Ms Divyarani G S.webp' },
    { id: 25, name: 'Lakshmi B M ', image: '/images/Lakshmi B M .webp' },
];

type FacultyMember = typeof facultyMembers[0];

const LazyCard = ({ member }: { member: FacultyMember }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '100px' }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref}>
            <Card className={styles.card}>
                <div className={styles.imageWrapper}>
                    {!isVisible && <div className={styles.skeleton} />}
                    {isVisible && (
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className={styles.facultyImage}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading="lazy"
                        />
                    )}
                </div>
                <CardContent className={styles.content}>
                    <h3 className={styles.name}>{member.name}</h3>
                </CardContent>
            </Card>
        </div>
    );
};

export const FacultyGrid = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedMembers = showAll ? facultyMembers : facultyMembers.slice(0, 8);

    return (
        <div>
            <div className={styles.grid}>
                {displayedMembers.map((member) => (
                    <LazyCard key={member.id} member={member} />
                ))}
            </div>
            <div className={styles.buttonWrapper}>
                <Button
                    variant="outline"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'Show Less' : 'View All Faculty'}
                </Button>
            </div>
        </div>
    );
};