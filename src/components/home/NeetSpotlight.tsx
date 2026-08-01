'use client';

// ─────────────────────────────────────────────
//  NeetSpotlight — Learners NEET banner
//  Celebrates the NEET 2026 result and hands off to the full
//  Learners NEET experience on Skill100.ai (which plays its
//  own reveal animation on arrival).
// ─────────────────────────────────────────────

import { motion } from 'framer-motion';
import { Stethoscope, HeartPulse, GraduationCap } from 'lucide-react';
import styles from './NeetSpotlight.module.scss';

const NEET_URL = 'https://www.skill100.ai/neet';

export function NeetSpotlight() {
  return (
    <section className={styles.section} aria-label="Learners NEET">
      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badge}>
            <Stethoscope size={15} /> Now enrolling · NEET 2027
          </span>
          <h2 className={styles.title}>
            Learners NEET scripts history — <span className={styles.hl}>81% success</span> in its
            very first batch
          </h2>
          <p className={styles.sub}>
            30 of 37 students cleared NEET 2026. From next year NEET moves to a computer-based
            format — and we are going with it, pioneering AI-powered NEET preparation on
            Skill100.ai, built for the new exam.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.cta} href={NEET_URL}>
              Enter Learners NEET →
            </a>
            <span className={styles.ctaNote}>
              <GraduationCap size={15} /> Classes 11 &amp; 12 and repeaters
            </span>
          </div>
        </motion.div>

        <motion.div
          className={styles.statCard}
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <div className={styles.statTop}>
            <HeartPulse size={18} /> NEET 2026 · Mysuru
          </div>
          <div className={styles.statBig}>81%</div>
          <div className={styles.statLabel}>30 of 37 cleared in our very first batch</div>
          <svg className={styles.ecg} viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,30 L70,30 L85,10 L100,52 L115,30 L160,30 L180,30 L195,6 L215,56 L232,30 L300,30" fill="none" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
