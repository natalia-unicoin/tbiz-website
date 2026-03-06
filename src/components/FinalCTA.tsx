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
                        { title: "TransparentBusiness", desc: "Transparency infrastructure for the digital economy", link: "https://transparentbusiness.com" },
                        { title: "Unicoin", desc: "Asset-backed digital asset", link: "https://unicoin.com" },
                        { title: "Unicorn Hunters", desc: "Investment show connecting startups with investors", link: "https://unicornhunters.com" },
                        { title: "SheWorks", desc: "Global remote opportunities for women", link: "https://sheworks.com" }
                    ].map((card, idx) => (
                        <a key={idx} href={card.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <div style={{
                                background: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '24px',
                                padding: '40px 32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                height: '100%',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#FFFFFF', margin: 0, fontFamily: 'Montserrat, sans-serif' }}>{card.title}</h3>
                                <p style={{ color: '#9CA3AF', fontSize: '1.125rem', margin: 0, lineHeight: 1.6 }}>{card.desc}</p>
                            </div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
