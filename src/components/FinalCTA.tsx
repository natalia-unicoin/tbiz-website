'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useStyles } from './FinalCTA.styles';

const FinalCTA = () => {
    const { classes } = useStyles();

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

                <motion.div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px',
                        width: '100%',
                        marginTop: '48px',
                        textAlign: 'left'
                    }}
                    initial={{ y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    {[
                        { title: "TransparentBusiness", desc: "Transparency infrastructure for the digital economy", link: "https://transparentbusiness.com", img: getImagePath('assets/box-placeholder.jpg') },
                        { title: "Unicoin", desc: "Asset-backed digital asset", link: "https://unicoin.com", img: getImagePath('assets/box-placeholder.jpg') },
                        { title: "Unicorn Hunters", desc: "Investment show connecting startups with investors", link: "https://unicornhunters.com", img: getImagePath('assets/box-placeholder.jpg') },
                        { title: "SheWorks", desc: "Global remote opportunities for women", link: "https://sheworks.com", img: getImagePath('assets/box-placeholder.jpg') }
                    ].map((card, idx) => (
                        <a key={idx} href={card.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <div style={{
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '40px 24px',
                                minHeight: '480px',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                cursor: 'pointer',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px)';
                                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.7)';
                                    const img = e.currentTarget.querySelector('.bg-img') as HTMLElement;
                                    if (img) img.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                                    const img = e.currentTarget.querySelector('.bg-img') as HTMLElement;
                                    if (img) img.style.transform = 'scale(1)';
                                }}>

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
                                    pointerEvents: 'none'
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
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
