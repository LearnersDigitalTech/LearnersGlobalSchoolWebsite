'use client';

import React, { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './EnquiryPopup.module.scss';
import { useEnquiry } from '@/context/EnquiryContext';

export const EnquiryPopup = () => {
    const { isOpen, closeEnquiry, openEnquiry } = useEnquiry();

    const [formData, setFormData] = useState({
        studentName: '',
        phone: '',
        email: '',
        grade: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Auto-show disabled - popup only shows when triggered by CTA buttons
        // Uncomment below to re-enable auto-show behavior
        /*
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('hasSeenEnquiryPopup');
            if (!hasSeenPopup) {
                openEnquiry();
                sessionStorage.setItem('hasSeenEnquiryPopup', 'true');
            }
        }, 2000);

        return () => clearTimeout(timer);
        */
    }, [openEnquiry]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.studentName,
                    email: formData.email,
                    phone: formData.phone,
                    childName: formData.studentName,
                    grade: formData.grade,
                    message: 'Enquiry from Admissions popup',
                    source: 'Admissions Popup',
                    timestamp: new Date().toISOString()
                })
            });

            const result = await response.json();

            if (response.ok && result.success !== false) {
                setStatus('success');

                // Reset form
                setFormData({
                    studentName: '',
                    phone: '',
                    email: '',
                    grade: ''
                });

                // Close popup after 3 seconds
                setTimeout(() => {
                    closeEnquiry();
                    setStatus('idle');
                }, 3000);
            } else {
                throw new Error(result.message || 'Failed to submit enquiry');
            }

        } catch (error) {
            console.error('Error submitting enquiry:', error);
            setStatus('error');
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'Failed to submit. Please try again or call +91 9916933202'
            );
        }
    };

    if (!isOpen) return null;

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
            <div className={styles.popup}>
                <button className={styles.closeBtn} onClick={closeEnquiry} aria-label="Close popup">
                    <X size={20} />
                </button>

                <div className={styles.formSection}>
                    <h2 className={styles.title}>Admissions Open</h2>
                    <p className={styles.subtitle}>Join the league of future leaders.</p>

                    {status === 'success' ? (
                        <div className={styles.successMessage}>
                            <CheckCircle size={48} />
                            <h3>Thank You!</h3>
                            <p>We've received your enquiry. Our admissions team will contact you within 24 hours.</p>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    name="studentName"
                                    placeholder="Student Name"
                                    className={styles.input}
                                    value={formData.studentName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Parent's Mobile Number"
                                    className={styles.input}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className={styles.input}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <select
                                    className={styles.input}
                                    name="grade"
                                    value={formData.grade}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Grade</option>
                                    <option value="Pre-KG">Pre-KG</option>
                                    <option value="LKG">LKG</option>
                                    <option value="UKG">UKG</option>
                                    <option value="Class 1-5">Class 1-5</option>
                                    <option value="Class 6-8">Class 6-8</option>
                                    <option value="Class 9-10">Class 9-10</option>
                                    <option value="Class 11-12">Class 11-12</option>
                                </select>
                            </div>

                            {status === 'error' && (
                                <div className={styles.errorMessage}>
                                    <AlertCircle size={20} />
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Submitting...' : 'Enquire Now'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
