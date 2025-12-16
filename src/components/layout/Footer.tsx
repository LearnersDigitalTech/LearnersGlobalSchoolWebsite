'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './Footer.module.scss';
import { Button } from '../ui/Button';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: 'Newsletter Subscriber',
                    email: email,
                    phone: 'N/A',
                    childName: '',
                    grade: 'Newsletter',
                    message: 'Newsletter subscription from footer',
                    source: 'Footer Newsletter',
                    timestamp: new Date().toISOString()
                })
            });

            const result = await response.json();

            if (response.ok && result.success !== false) {
                setStatus('success');
                setEmail('');
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }

        } catch (error) {
            console.error('Error subscribing:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1: About */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Learners Global School</h3>
                        <p className={styles.text}>
                            Shaping future leaders through holistic education, innovation, and values.
                            Join us in our journey of excellence.
                        </p>
                        <div className={styles.socials}>
                            <a href="https://www.facebook.com/share/17nuSeiQGP/" target='blank' aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="https://www.youtube.com/@learnerspuc6316" target='blank' aria-label="Youtube"><Youtube size={20} /></a>
                            <a href="https://www.instagram.com/learners_global_school_mysuru?igsh=MTk5aXFyYm8zdG0zdg==" target='blank' aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://www.linkedin.com/company/learners-digital/" target='blank' aria-label="LinkedIn"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.column}>
                        <h4 className={styles.subheading}>Quick Links</h4>
                        <ul className={styles.links}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/courses-admissions">Admissions</Link></li>
                            <li><Link href="/life">Life at Learners</Link></li>
                            <li><Link href="/connect">Careers</Link></li>
                            {/* <li><Link href="/privacy">Privacy Policy</Link></li> */}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className={styles.column}>
                        <h4 className={styles.subheading}>Contact Us</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <MapPin size={18} />
                                <span>Sathagalli, Mysore, Karnataka 570029</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <span>+91 9916933202</span>
                            </li>
                            <li>
                                <Mail size={18} />
                                <span>admissions@learnersdigital.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className={styles.column}>
                        <h4 className={styles.subheading}>Newsletter</h4>
                        <p className={styles.text}>Subscribe to get the latest news and updates.</p>
                        <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading'}
                                required
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                size="sm"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                            </Button>
                        </form>
                        {status === 'success' && (
                            <div className={styles.successMsg}>
                                <CheckCircle size={16} />
                                <span>Subscribed!</span>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className={styles.errorMsg}>
                                <AlertCircle size={16} />
                                <span>Failed. Try again.</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Learners Global School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

