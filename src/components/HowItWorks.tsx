'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './HowItWorks.styles';

const HowItWorks = () => {
    const { classes, cx } = useStyles();

    const steps = [
        {
            id: "01",
            title: <>A Debt-Free<br />Foundation</>,
            description: "Traditional models rely on issuing debt. TransparentBusiness rejects this high-liability approach, ensuring growth is built on a sustainable financial foundation rather than borrowed capital.",
            className: classes.bentoItem1
        },
        {
            id: "02",
            title: <>Strategic Value<br />Creation</>,
            description: "Instead of buying external assets at market highs, we hold our issued equity and actively swap them for new cryptocurrencies with strong growth potential.",
            className: classes.bentoItem2
        },
        {
            id: "03",
            title: <>AI-Powered<br />Intelligence</>,
            description: "We utilize an affiliated AI-powered Collective Intelligence engine to trade cryptocurrencies, allowing for precise and active management that traditional models lack.",
            className: classes.bentoItem3
        },
        {
            id: "04",
            title: <>Modern Investor<br />Optimized</>,
            description: "We offer asymmetric upside and an inflation hedge without the volatility associated with massive debt obligations found in early DAT pioneers.",
            className: classes.bentoItem4
        }
    ];

    return (
        <section id="how-it-works" className={classes.section}>
            <div className={classes.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={classes.title}
                >
                    Why TransparentBusiness Is <br /><span className={classes.highlight}>Different.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className={classes.subtitle}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </motion.p>

                <div className={classes.bentoGrid}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cx(classes.bentoItem, step.className)}
                        >
                            <span className={classes.stepNumber}>{step.id}</span>
                            <div className={classes.textContent}>
                                <h3 className={classes.itemTitle}>{step.title}</h3>
                                <p className={classes.itemDescription}>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
