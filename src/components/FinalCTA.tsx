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
            <img src={getImagePath('assets/executive-standing.png')} alt="Corporate Background" className={classes.bgImage} />
            <div className={classes.overlay} />
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
                        marginTop: '48px',
                        overflow: 'hidden', // Hide scrollbar for clean carousel
                        cursor: 'grab',
                    }}
                // whileTap={{ cursor: "grabbing" }} // This is a framer-motion prop, not a standard div prop
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
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
                            { title: "TransparentBusiness", desc: "Transparency infrastructure for the digital economy", link: "https://transparentbusiness.com", img: getImagePath('assets/box-placeholder.jpg') },
                            { title: "Unicoin", desc: "Asset-backed digital asset", link: "https://unicoin.com", img: getImagePath('assets/unicoin-thumbnail.jpg') },
                            { title: "Unicorn Hunters", desc: "Investment show connecting startups with investors", link: "https://unicornhunters.com", img: getImagePath('assets/uh-thumbnail.jpg') },
                            { title: "SheWorks", desc: "Global remote opportunities for women", link: "https://sheworks.com", img: getImagePath('assets/sheworks-thumbnail.jpg') }
                        ].map((card, idx) => (
                            <motion.a
                                key={idx}
                                href={card.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', display: 'block', minWidth: '320px', flex: '0 0 auto' }}
                                whileHover={{ y: -12 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div style={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '40px 24px',
                                    height: '480px',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    pointerEvents: 'none', // Let the <a> tag handle clicks
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                }}
                                    className="card-container"
                                >

                                    {/* Background Image */}
                                    <div className="bg-img" style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage: `url(${card.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        zIndex: 0,
                                        transition: 'transform 0.7s ease',
                                    }} />

                                    {/* Gradient Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
                                        zIndex: 1,
                                    }} />

                                    {/* Content */}
                                    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                                        <h3 style={{
                                            fontSize: '1.75rem',
                                            fontWeight: 700,
                                            color: '#FFFFFF',
                                            margin: 0,
                                            letterSpacing: '-0.02em',
                                        }}>{card.title}</h3>
                                        <p style={{
                                            color: '#E5E7EB',
                                            fontSize: '1rem',
                                            marginTop: '12px',
                                            marginBottom: 0,
                                            lineHeight: 1.5
                                        }}>{card.desc}</p>
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
