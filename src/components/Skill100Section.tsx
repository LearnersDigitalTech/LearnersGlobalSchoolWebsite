import Image from 'next/image'
import styles from './Skill100Section.module.css'

const campuses = [
  {
    href: 'https://learnersglobalschool.com/',
    src: '/images/campus-lgs.png',
    alt: 'Learners Global School & PU College, Sathagalli, Mysuru',
    badge: { text: 'CBSE', green: false },
    title: 'Learners Global School & PU College',
    location: 'Sathagalli 2nd Stage, Mysuru',
    cta: 'Visit Website →',
  },
  {
    href: 'https://learnerspuc.com/',
    src: '/images/campus-vijay.webp',
    alt: 'Learners PU College, Vijayanagar, Mysuru',
    badge: null,
    title: 'Learners PU College',
    location: 'Vijayanagar, Mysuru',
    cta: 'Visit Website →',
  },
  {
    href: 'https://www.skill100.ai/',
    src: '/images/campus-nesara.png',
    alt: 'Learners Digital Skill Hub, Nesara Tech Park, Hootagalli, Mysuru',
    badge: { text: 'Digital Hub', green: true },
    title: 'Learners Digital Skill Hub',
    location: 'Nesara Tech Park, Hootagalli, Mysuru',
    cta: 'Visit Skill100.ai →',
  },
]

export default function Skill100Section() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <a
            href="https://www.skill100.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <span className={styles.logoText}>
              <span className={styles.teal}>Skill</span>
              <span className={styles.teal}>100</span>
              <span className={styles.green}>.ai</span>
            </span>
          </a>
          <div>
            <span className={styles.aiBadge}>AI-Powered Learning</span>
          </div>
          <h2 className={styles.title}>Our Learning Centres</h2>
          <p className={styles.desc}>
            Skill100.ai is an AI-powered learning platform designed to help students learn smarter,
            practice better, and improve faster. It offers personalised learning support,
            step-by-step guidance, adaptive practice, and instant feedback to make studying
            easier and more effective.
          </p>
        </div>

        {/* ── Campus Cards ── */}
        <div className={styles.grid}>
          {campuses.map((campus) => (
            <a
              key={campus.href + campus.title}
              href={campus.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.imgWrap}>
                <Image
                  src={campus.src}
                  alt={campus.alt}
                  fill
                  sizes="(max-width: 500px) 100vw, 33vw"
                  className={styles.img}
                />
                {campus.badge && (
                  <span
                    className={`${styles.campusBadge} ${campus.badge.green ? styles.badgeGreen : ''}`}
                  >
                    {campus.badge.text}
                  </span>
                )}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>{campus.title}</div>
                <div className={styles.cardLoc}>📍 {campus.location}</div>
                <span className={styles.cardLink}>{campus.cta}</span>
              </div>
            </a>
          ))}
        </div>

        {/* ── Tagline ── */}
        <div className={styles.tagline}>
          Powered by{' '}
          <a
            href="https://www.skill100.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.taglineLink}
          >
            Skill100.ai
          </a>{' '}
          — Learn Smarter. Practice Better. Improve Faster.
        </div>

      </div>
    </section>
  )
}
