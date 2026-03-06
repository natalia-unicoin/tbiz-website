'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './WarOnInnovation.styles';

const WarOnInnovation = () => {
    const { classes } = useStyles();

    return (
        <section id="conflict" className={classes.section}>
            <div className={classes.container}>
                {/* Eyebrow - "macOS" equivalent */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className={classes.eyebrow}>The War on Crypto</h3>
                </motion.div>

                {/* Main Title - "Smooth operator" equivalent */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <h2 className={classes.mainTitle}>
                        <span className={classes.accent}>A Stand</span> for Transparency
                    </h2>
                </motion.div>

                {/* Description Paragraph */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className={classes.description}>
                        As the ecosystem grew, it faced regulatory challenges that became known as the War on Crypto — a defining moment in the fight for innovation and transparency in digital finance.
                    </p>
                </motion.div>

                {/* Metrics Grid */}
                <motion.div
                    className={classes.metricGrid}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className={classes.metricItem}>
                        <span className={classes.metricValue}>Battle</span>
                        <span className={classes.metricLabel}>Regulatory<br />Defense</span>
                    </div>
                    <div className={classes.metricDivider} />
                    <div className={classes.metricItem}>
                        <span className={classes.metricValue}>Impact</span>
                        <span className={classes.metricLabel}>Industry-wide<br />Innovation</span>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default WarOnInnovation;
