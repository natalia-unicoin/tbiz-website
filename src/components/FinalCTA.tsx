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

            {/* 4-Column Card Grid Container with Exact 100px Margins on Desktop */}
            <motion.div
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    marginRight: 'calc(50% - 50vw)',
                    paddingLeft: 'clamp(20px, 5vw, 100px)',
                    paddingRight: 'clamp(20px, 5vw, 100px)',
                    marginTop: '64px',
                }}
            >
                <div
                    className="final-cta-grid"
                >
                    <style>
                        {`
                            .final-cta-grid {
                                display: grid;
                                grid-template-columns: 1fr;
                                gap: 20px; /* Exact 20px gutter */
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
                                aspectRatio: '16/9', // Wider than tall
                                position: 'relative',
                                backgroundColor: '#1E293B', // Dark background for the card
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                            }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <div style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(${card.img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
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
                </div>
            </motion.div>
        </section>
    );
};

export default FinalCTA;
