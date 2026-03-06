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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className={classes.eyebrow}>The War On Innovation</h3>
                </motion.div>

                {/* Main Title - "Smooth operator" equivalent */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <h2 className={classes.mainTitle}>
                        <span className={classes.accent}>Regulatory volatility</span> stress-tested our institutional framework.
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
                        For many participants, this period represented not only financial instability but also a loss of strategic momentum. Our response was guided by one priority: protecting stakeholders while preserving long-term institutional viability through a debt-free model.
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
                        <span className={classes.metricValue}>$1T+</span>
                        <span className={classes.metricLabel}>Market Value Impact</span>
                    </div>
                    <div className={classes.metricDivider} />
                    <div className={classes.metricItem}>
                        <span className={classes.metricValue}>Thousands</span>
                        <span className={classes.metricLabel}>Investors Impacted</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WarOnInnovation;
