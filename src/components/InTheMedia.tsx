'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './InTheMedia.styles';

const logos = [
    { name: "Forbes", width: 120 },
    { name: "Wall Street Journal", width: 160 },
    { name: "Fortune", width: 130 },
    { name: "Global Events", width: 140 }
];

const InTheMedia = () => {
    const { classes } = useStyles();

    return (
        <section className={classes.section} id="media">
            <div className={classes.container}>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}>
                    <motion.h2
                        className={classes.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Global Recognition
                    </motion.h2>
                    <motion.p
                        style={{ fontSize: '1.25rem', color: '#6B7280', lineHeight: 1.6 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Over the years, the ecosystem and its companies have been featured across leading global media outlets and industry events.
                    </motion.p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '48px', opacity: 0.6 }}>
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            style={{
                                fontWeight: 600,
                                fontSize: '1.5rem',
                                color: '#374151',
                                letterSpacing: '-0.02em'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* TODO: Replace text with actual SVG logos later */}
                            {logo.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InTheMedia;
