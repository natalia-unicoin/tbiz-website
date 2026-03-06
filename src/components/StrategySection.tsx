'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './StrategySection.styles';

const StrategySection = () => {
    const { classes } = useStyles();

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={classes.title}
                >
                    Redefining the Future of Corporate Reserves
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={classes.content}
                >
                    <p className={classes.description}>
                        While pioneers like MicroStrategy proved that a Digital Asset Treasury (DAT) strategy can transform a company into a high-growth powerhouse, they did so by accumulating substantial debt to purchase assets at high market prices.
                    </p>
                    <p className={classes.description}>
                        <strong>TransparentBusiness Inc.</strong> is charting a different path. We have evolved the DAT model into a debt-free strategy that maximizes upside while eliminating the risks of high leverage.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default StrategySection;
