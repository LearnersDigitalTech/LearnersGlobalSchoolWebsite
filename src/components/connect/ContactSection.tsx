'use client';

import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, Download, Send, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './ContactSection.module.scss';

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        childName: '',
        grade: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.fullName || !formData.email || !formData.phone || !formData.grade) {
            setStatus('error');
            setErrorMessage('Please fill in all required fields');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            // Use Next.js API route instead of direct call to avoid CORS issues
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    source: 'Contact Form',
                    timestamp: new Date().toISOString()
                })
            });

            const result = await response.json();

            if (response.ok && result.success !== false) {
                setStatus('success');

                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    childName: '',
                    grade: '',
                    message: ''
                });

                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error(result.message || 'Failed to submit form');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'Failed to submit form. Please try again or contact us directly at +91 9916933202'
            );
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Column: Form */}
                <div className={styles.formColumn}>
                    <div className={styles.formHeader}>
                        <h2 className={styles.formTitle}>Send us a Message</h2>
                        <p className={styles.formDesc}>
                            Fill out the form below and our admissions team will get back to you within 24 hours.
                        </p>
                    </div>

                    <form className={styles.formGrid} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="John Doe"
                                className={styles.input}
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Phone Number *</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+91 9916933202"
                                className={styles.input}
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Child's Name (Optional)</label>
                            <input
                                type="text"
                                name="childName"
                                placeholder="Child's Name"
                                className={styles.input}
                                value={formData.childName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Select Grade Interested In *</label>
                            <select
                                className={styles.select}
                                name="grade"
                                value={formData.grade}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Grade</option>
                                <option value="Nursery">Nursery</option>
                                <option value="Primary (1-5)">Primary (1-5)</option>
                                <option value="Middle (6-8)">Middle (6-8)</option>
                                <option value="Secondary (9-10)">Secondary (9-10)</option>
                                <option value="Senior Secondary (11-12)">Senior Secondary (11-12)</option>
                            </select>
                        </div>

                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Your Message / Enquiry</label>
                            <textarea
                                placeholder="How can we help you?"
                                className={styles.textarea}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                            ></textarea>
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className={`${styles.statusMessage} ${styles.success}`}>
                                <CheckCircle size={20} />
                                <span>Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className={`${styles.statusMessage} ${styles.error}`}>
                                <AlertCircle size={20} />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <div className={styles.fullWidth}>
                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                                <Send size={18} />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Column: Info Cards */}
                <div className={styles.infoColumn}>
                    {/* Contact Info */}
                    <div className={styles.infoCard}>
                        <div className={styles.contactBlock}>
                            <div className={styles.iconCircle}>
                                <Phone size={24} />
                            </div>
                            <div className={styles.blockContent}>
                                <h4>Call Us</h4>
                                <p>+91 9916933202</p>
                            </div>
                        </div>
                        <div className={styles.contactBlock}>
                            <div className={styles.iconCircle}>
                                <Mail size={24} />
                            </div>
                            <div className={styles.blockContent}>
                                <h4>Email Us</h4>
                                <p>admissions@learnersdigital.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Join Team */}
                    <div className={styles.joinCard}>
                        <h3>Join Our Team</h3>
                        <p>We are always looking for passionate educators to join our family.</p>
                        <a
                            href="https://wa.me/919916933202?text=Hi%2C%20I%20would%20like%20to%20apply%20for%20a%20teaching%20position%20at%20Learners%20Global%20School.%20Please%20find%20my%20resume%20attached."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.applyBtn}
                        >
                            Apply Now <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Brochure */}
                    {/* <div className={styles.brochureCard}>
                        <div className={styles.brochureInfo}>
                            <div className={styles.downloadIcon}>
                                <Download size={20} />
                            </div>
                            <div className={styles.brochureText}>
                                <h4>School Brochure</h4>
                                <span>PDF Download</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};
