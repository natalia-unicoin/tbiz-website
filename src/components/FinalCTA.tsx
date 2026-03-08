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
                            { title: "TransparentBusiness", desc: "Transparency infrastructure for the digital economy.", link: "https://transparentbusiness.com", img: getImagePath('assets/box-placeholder.jpg') },
                            { title: "Unicoin", desc: "The next-generation asset-backed cryptocurrency.", link: "https://unicoin.com", img: getImagePath('assets/unicoin-thumbnail.jpg') },
                            { title: "Unicorn Hunters", desc: "The most iconic investment show in history.", link: "https://unicornhunters.com", img: getImagePath('assets/uh-thumbnail.jpg') },
                            { title: "SheWorks", desc: "Empowering women globally with remote opportunities.", link: "https://sheworks.com", img: getImagePath('assets/sheworks-thumbnail.jpg') }
                        ].map((card, idx) => (
                            <motion.a
                                key={idx}
                                href={card.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', display: 'block', minWidth: '340px', maxWidth: '340px', flex: '0 0 auto' }}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    paddingTop: '40px',
                                    height: '520px',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                                }}
                                    className="card-container"
                                >
                                    {/* Text Content */}
                                    <div style={{
                                        padding: '0 24px',
                                        textAlign: 'center',
                                        position: 'relative',
                                        zIndex: 10,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: '#FFFFFF', // Guarantee white behind text
                                    }}>
                                        <h3 style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 800,
                                            color: '#000000', // Absolute black
                                            margin: 0,
                                            letterSpacing: '-0.02em',
                                            fontFamily: "'Inter', sans-serif"
                                        }}>{card.title}</h3>
                                        <p style={{
                                            color: '#333333',
                                            fontSize: '1rem',
                                            marginTop: '12px',
                                            marginBottom: '16px',
                                            lineHeight: 1.5,
                                            fontFamily: "'Inter', sans-serif"
                                        }}>{card.desc}</p>
                                        <span style={{
                                            color: '#0066CC',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            fontFamily: "'Inter', sans-serif"
                                        }}>
                                            Learn more &gt;
                                        </span>
                                    </div>

                                    {/* Image Content */}
                                    <div style={{
                                        width: '100%',
                                        flex: 1,
                                        marginTop: '40px',
                                        position: 'relative',
                                        overflow: 'hidden'
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
