'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useStyles } from './FinalCTA.styles';

const FinalCTA = () => {
    const { classes } = useStyles();
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [width, setWidth] = React.useState(0);

    React.useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className={classes.section} id="transition">
            <div className={classes.container}>
                <motion.h2
                    className={classes.title}
                    initial={{ y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    Continue the Journey
                </motion.h2>

                <motion.p
                    className={classes.subtitle}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ color: '#4B5563', marginTop: '-8px' }}
                >
                    Explore the companies and initiatives that form part of this evolving global ecosystem.
                </motion.p>

            </div>

            {/* 4-Column Card Grid Container */}
            <motion.div
                style={{
                    width: '100%',
                    marginTop: '64px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1, 1fr)', // Mobile single column
                    gap: '24px',
                }}
                className="final-cta-grid" // We'll rely on global or inline for breakpoints if we can't use style classes easily here, but actually we can just use a simple @media or predefined classes if available. In Next.js/Tailwind you'd use classes. Since this uses styled-components/MUI, let's use standard logic or add a class. Since we are inline styling, we can't easily do hover/breakpoints without a styles file.
            // Let's use a standard grid trick to auto-fit, which is inherently responsive without media queries:
            // gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
            // This perfectly mimics the 4-column layout on wide screens while degrading gracefully.
            >
                <style>
                    {`
                        .final-cta-grid {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 24px;
                            width: 100%;
                        }
                        @media (min-width: 768px) {
                            .final-cta-grid {
                                grid-template-columns: repeat(2, 1fr);
                            }
                        }
                        @media (min-width: 1024px) {
                            .final-cta-grid {
                                grid-template-columns: repeat(4, 1fr);
                            }
                        }
                    `}
                </style>
                {[
                    { title: "TransparentBusiness", link: "https://transparentbusiness.com", img: getImagePath('assets/tbiz-poster.jpg') },
                    { title: "Unicoin", link: "https://unicoin.com", img: getImagePath('assets/unicoin-poster.jpg') },
                    { title: "Unicorn Hunters", link: "https://unicornhunters.com", img: getImagePath('assets/unicorn-hunters-poster.jpg') },
                    { title: "SheWorks!", link: "https://sheworks.com", img: getImagePath('assets/sheworks-poster.jpg') }
                ].map((card, idx) => (
                    <motion.a
                        key={idx}
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: 'none',
                            display: 'block',
                            width: '100%',
                            borderRadius: '16px', // Standard modern radius
                            overflow: 'hidden',
                            aspectRatio: '1', // Square like the Apple reference images, or slightly tall
                            position: 'relative',
                            backgroundColor: '#F9FAFB', // Light gray background for the card
                            border: '1px solid #E5E7EB',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <div style={{
                            width: '100%',
                            height: '80%',
                            position: 'relative',
                            backgroundImage: `url(${card.img})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            marginBottom: '16px',
                        }} />
                        <span style={{
                            color: '#111827',
                            fontWeight: 600,
                            fontSize: '16px',
                            textAlign: 'center'
                        }}>
                            {card.title}
                        </span>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
};

export default FinalCTA;
