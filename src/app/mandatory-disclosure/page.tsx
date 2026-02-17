import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import styles from './page.module.scss';

import { Button } from '@/components/ui/Button';

import {
    FileText,
    Download,
    Eye,
    ShieldCheck,
    BookOpen,
    Building,
    Scale,
    Users,
    Calendar
} from 'lucide-react';
import { CoursesHero } from '@/components/courses/CoursesHero';

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
    title: 'Mandatory Public Disclosure | Learners Global School',
    description:
        'Access mandatory public disclosure documents including CBSE affiliation, safety certificates, fee structure, and academic calendar.',
    keywords: [
        'mandatory public disclosure',
        'CBSE disclosure',
        'school safety certificates',
        'fee structure',
        'academic calendar'
    ],
    openGraph: {
        title: 'Mandatory Public Disclosure | Learners Global School',
        description:
            'Complete transparency of school operations, compliance, and academic details as per CBSE norms.',
        url: 'https://learnersglobalschool.com/mandatory-disclosure',
        images: [
            {
                url: '/LL.webp',
                width: 1200,
                height: 630,
                alt: 'Mandatory Public Disclosure'
            }
        ]
    }
};

/* -------------------------------------------------------------------------- */
/*                               Data Structure      renewal-recognise-approval-signed-certificate.pdf                          */
/* -------------------------------------------------------------------------- */

const documents = [
    {
        title: 'Mandatory Disclosure',
        category: 'General',
        icon: FileText,
        viewUrl: '/documents/mandatory-disclosure.pdf',
        downloadUrl: '/documents/mandatory-disclosure.pdf'
    },  
    {
        title: 'Recognition Certificate',
        category: 'Legal',
        icon: Scale,
        viewUrl: '/documents/recognition-certificate.pdf',
        downloadUrl: '/documents/recognition-certificate.pdf'
    },
    {
        title: 'Renewal Recognise Approval Signed Certificate',
        category: 'Legal',
        icon: FileText,
        viewUrl: '/documents/renewal-recognise-approval-signed-certificate.pdf ',
        downloadUrl: '/documents/renewal-recognise-approval-signed-certificate.pdf '
    },
    {
        title: 'No Objection Certificate (NOC)',
        category: 'Legal',
        icon: ShieldCheck,
        viewUrl: '/documents/noc.pdf',
        downloadUrl: '/documents/noc.pdf'
    },
    {
        title: 'Self Certification',
        category: 'Legal',
        icon: FileText,
        viewUrl: '/documents/affiliation-letter.pdf',
        downloadUrl: '/documents/affiliation-letter.pdf'
    },
    {
        title: 'Trust Certificate',
        category: 'Legal',
        icon: Scale,
        viewUrl: '/documents/trust-certificate.pdf',
        downloadUrl: '/documents/trust-certificate.pdf'
    },
    {
        title: 'Fire Safety Certificate',
        category: 'Safety',
        icon: ShieldCheck,
        viewUrl: '/documents/fire-safety-certificate.pdf',
        downloadUrl: '/documents/fire-safety-certificate.pdf'
    },
    {
        title: 'Building Safety Certificate',
        category: 'Safety',
        icon: Building,
        viewUrl: '/documents/building-safety-certificate.pdf',
        downloadUrl: '/documents/building-safety-certificate.pdf'
    },
    {
        title: 'Land Certificate',
        category: 'Legal',
        icon: Scale,
        viewUrl: '/documents/land-certificate.pdf',
        downloadUrl: '/documents/land-certificate.pdf'
    }
];

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function MandatoryDisclosurePage() {
    return (
        <main id="main-content" className={styles.main}>
            <Header />

            <div>
                <CoursesHero
                    imageSrc="/images/mandatory.jpg"
                    imageAlt="Mandatory Disclosure"
                    title="Mandatory Disclosure"
                    subtitle=" Committed to Transparency and Open Communication"
                />
            </div>

            <section className={styles.documentsSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {documents.map((doc, index) => {
                            const Icon = doc.icon;

                            return (
                                <div key={index} className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.iconWrapper}>
                                            <Icon size={24} />
                                        </div>
                                        <span
                                            className={`${styles.badge} ${styles[doc.category.toLowerCase()] ?? ''}`}
                                        >
                                            {doc.category}
                                        </span>
                                    </div>

                                    <h3 className={styles.cardTitle}>{doc.title}</h3>

                                    <div className={styles.actions}>
                                        {/* View button — opens PDF inline in browser */}
                                        <a
                                            href={doc.viewUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.actionLink}
                                        >
                                            <Button variant="outline" size="sm">
                                                <Eye size={14} />
                                                View
                                            </Button>
                                        </a>

                                        {/* Download button — forces file download */}
                                        <a
                                            href={doc.downloadUrl}
                                            download
                                            className={styles.actionLink}
                                        >
                                            <Button variant="primary" size="sm">
                                                <Download size={14} />
                                                PDF
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}