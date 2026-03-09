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

                <div
                    ref={carouselRef}
                    style={{
                        width: '100%',
                        marginTop: '64px',
                        overflow: 'hidden', // Hide scrollbar for clean carousel
                        cursor: 'grab',
                        paddingBottom: '40px', // Allow shadow overflow below
                    }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width - 40 }} // Extra scrolling room
                        whileTap={{ cursor: "grabbing" }}
                        style={{
                            display: 'flex',
                            gap: '24px',
                            textAlign: 'left'
                        }}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {[
                            { title: "TransparentBusiness", link: "https://transparentbusiness.com", img: getImagePath('assets/box-placeholder.jpg') },
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
                                    minWidth: '640px', // Large Apple TV Style
                                    maxWidth: '640px',
                                    flex: '0 0 auto',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    aspectRatio: '16/9',
                                    position: 'relative'
                                }}
                                whileHover={{ scale: 1.03, y: -8 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    backgroundColor: '#1E293B', // Subtle fallback
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                }}>
                                    <div className="bg-img" style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage: `url(${card.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.7s ease',
                                    }} />
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
