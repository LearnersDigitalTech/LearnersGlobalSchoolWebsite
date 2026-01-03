'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.scss';
import { Button } from '../ui/Button';
import { useEnquiry } from '@/context/EnquiryContext';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Courses', href: '/courses-admissions' },
    { label: 'Life at Learners', href: '/life' },
    { label: 'Connect', href: '/connect' },
    { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
];



export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { openEnquiry } = useEnquiry();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="Learners Global School Logo"
                        width={200}
                        height={60}
                        className={styles.logoImage}
                        priority
                    />
                    <span className={styles.tagline}>Where Every Learner is a Leader!</span>
                </Link>

                <nav className={styles.desktopNav}>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button onClick={openEnquiry} variant="primary" size="sm">
                        Enquire Now
                    </Button>
                </nav>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <div className={styles.mobileNavContent}>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className={styles.mobileCta}>
                            <Button onClick={() => {
                                setIsMobileMenuOpen(false);
                                openEnquiry();
                            }} variant="primary" fullWidth>
                                Enquire Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
