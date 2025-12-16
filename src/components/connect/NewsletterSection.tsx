'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './NewsletterSection.module.scss';

export const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

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
                    message: 'Newsletter subscription request',
                    source: 'Newsletter Subscription',
                    timestamp: new Date().toISOString()
                })
            });

            const result = await response.json();

            if (response.ok && result.success !== false) {
                setStatus('success');
                setEmail('');

                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error(result.message || 'Failed to subscribe');
            }

        } catch (error) {
            console.error('Error subscribing:', error);
            setStatus('error');
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'Failed to subscribe. Please try again.'
            );
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.iconWrapper}>
                    <Mail size={40} />
                </div>
                <h2 className={styles.title}>Stay Connected</h2>
                <p className={styles.subtitle}>
                    Subscribe to our newsletter to receive updates on admissions, events, and school achievements directly in your inbox.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                        required
                    />
                    <button
                        type="submit"
                        className={styles.button}
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    </button>
                </form>

                {status === 'success' && (
                    <div className={styles.successMessage}>
                        <CheckCircle size={20} />
                        <span>Thank you for subscribing! Check your email for confirmation.</span>
                    </div>
                )}

                {status === 'error' && (
                    <div className={styles.errorMessage}>
                        <AlertCircle size={20} />
                        <span>{errorMessage}</span>
                    </div>
                )}

                <p className={styles.footnote}>
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};
