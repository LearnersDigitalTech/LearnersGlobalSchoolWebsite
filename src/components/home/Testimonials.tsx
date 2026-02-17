'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './Testimonials.module.scss';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    type: 'parent' | 'student';
    image: string;
    quote: string;
    grade?: string;
    child?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Parent',
        type: 'parent',
        image: '👩‍💼',
        child: 'Mother of Aarav (Grade 8)',
        quote: 'The holistic approach to education here has transformed my son\'s learning journey. The teachers genuinely care about each child\'s individual growth and potential.'
    },
    {
        id: 2,
        name: 'Rahul Verma',
        role: 'Student',
        type: 'student',
        image: '👨‍🎓',
        grade: 'Grade 10',
        quote: 'Being part of Krishna House has taught me leadership and teamwork. The project-based learning approach makes every subject interesting and relevant to real life.'
    },
    {
        id: 3,
        name: 'Anjali Desai',
        role: 'Parent',
        type: 'parent',
        image: '👩‍⚕️',
        child: 'Mother of Diya (Grade 6)',
        quote: 'The school\'s focus on both academics and extracurricular activities ensures well-rounded development. My daughter has grown so much in confidence and creativity.'
    },
    {
        id: 4,
        name: 'Arjun Patel',
        role: 'Student',
        type: 'student',
        image: '👨‍💻',
        grade: 'Grade 9',
        quote: 'The technology integration and coding classes have opened up a whole new world for me. Teachers encourage us to think critically and solve real-world problems.'
    },
    {
        id: 5,
        name: 'Meera Reddy',
        role: 'Parent',
        type: 'parent',
        image: '👩‍🏫',
        child: 'Mother of twins (Grade 7)',
        quote: 'What sets this school apart is the personal attention each student receives. The communication between teachers and parents is excellent, keeping us involved in our children\'s progress.'
    },
    {
        id: 6,
        name: 'Karthik Kumar',
        role: 'Student',
        type: 'student',
        image: '👨‍🔬',
        grade: 'Grade 11',
        quote: 'The science labs and research opportunities are outstanding. My teachers have mentored me through my passion for environmental science, encouraging independent research projects.'
    },
    {
        id: 7,
        name: 'Lakshmi Iyer',
        role: 'Parent',
        type: 'parent',
        image: '👩‍💼',
        child: 'Mother of Rohan (Grade 5)',
        quote: 'The values-based education and emphasis on character building have made a significant impact. My son is not just academically strong but also kind and empathetic.'
    },
    {
        id: 8,
        name: 'Nisha Malhotra',
        role: 'Student',
        type: 'student',
        image: '👩‍🎨',
        grade: 'Grade 12',
        quote: 'The arts program here is exceptional. From painting to music to drama, every creative pursuit is encouraged. I\'ve discovered talents I never knew I had.'
    },
    {
        id: 9,
        name: 'Rajesh Nair',
        role: 'Parent',
        type: 'parent',
        image: '👨‍💼',
        child: 'Father of Aditi (Grade 9)',
        quote: 'The career counseling and college prep support is invaluable. The school prepares students not just for exams but for life beyond school walls.'
    },
    {
        id: 10,
        name: 'Sanya Kapoor',
        role: 'Student',
        type: 'student',
        image: '👩‍⚖️',
        grade: 'Grade 10',
        quote: 'Being part of the debate club and student council has helped me find my voice. The school empowers us to be leaders and change-makers in our community.'
    }
];

export const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Testimonials</span>
                    <h2 className={styles.title}>What Our Community Says</h2>
                    <p className={styles.subtitle}>
                        Hear from parents and students about their experiences and growth at our school.
                    </p>
                </div>

                <div className={styles.carouselWrapper}>
                    <button 
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={prevSlide}
                        aria-label="Previous testimonial"
                    >
                        ‹
                    </button>

                    <div className={styles.carousel}>
                        <div 
                            className={styles.cardWrapper}
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                        >
                            <div 
                                className={`${styles.testimonialCard} ${styles[currentTestimonial.type]}`}
                                key={currentTestimonial.id}
                            >
                                <div className={styles.quoteIcon}>"</div>
                                
                                <div className={styles.content}>
                                    <p className={styles.quote}>{currentTestimonial.quote}</p>
                                </div>

                                <div className={styles.author}>
                                    <div className={styles.avatarWrapper}>
                                        <div className={styles.avatar}>
                                            {currentTestimonial.image}
                                        </div>
                                        <div className={styles.typeBadge}>
                                            {currentTestimonial.type === 'parent' ? '👨‍👩‍👧' : '🎓'}
                                        </div>
                                    </div>
                                    
                                    <div className={styles.authorInfo}>
                                        <h4 className={styles.name}>{currentTestimonial.name}</h4>
                                        <p className={styles.role}>
                                            {currentTestimonial.type === 'parent' 
                                                ? currentTestimonial.child 
                                                : currentTestimonial.grade}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button 
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={nextSlide}
                        aria-label="Next testimonial"
                    >
                        ›
                    </button>
                </div>

                <div className={styles.indicators}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

           
            </div>
        </section>
    );
};