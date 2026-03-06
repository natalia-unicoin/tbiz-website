'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './ComparisonSection.styles';

const ComparisonSection = () => {
    const { classes } = useStyles();

    const comparisonData = [
        {
            feature: "Financial Risk",
            traditional: "High leverage and substantial debt",
            transparentBusiness: "100% Debt-Free"
        },
        {
            feature: "Asset Strategy",
            traditional: "Buying assets at market prices",
            transparentBusiness: "Holding issued assets and strategic swaps"
        },
        {
            feature: "Management",
            traditional: "Passive \"HODL\" approach",
            transparentBusiness: "AI-powered active trading"
        },
        {
            feature: "Growth Goal",
            traditional: "High-growth proxy for Bitcoin",
            transparentBusiness: "Diversified digital asset growth"
        }
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const scrollPosition = scrollContainerRef.current.scrollLeft;
        const cardWidth = scrollContainerRef.current.offsetWidth * 0.85; // Approximate width of one card
        const newIndex = Math.round(scrollPosition / cardWidth);
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section id="comparison" className={classes.section}>
            <div className={classes.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={classes.header}
                >
                    <h2 className={classes.title}>
                        A Smarter Way to<br />Build Digital Asset Value
                    </h2>
                    <p className={classes.subtitle}>
                        Comparing traditional leveraged models with TransparentBusiness’s debt-free, AI-driven strategy.
                    </p>
                </motion.div>

                <div className={classes.cardsContainer}>
                    {/* Traditional Model Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={classes.traditionalCard}
                    >
                        <div className={classes.cardHeader}>
                            <h3 className={classes.cardTitle}>Traditional DAT Model</h3>
                        </div>
                        <ul className={classes.featureList}>
                            {comparisonData.map((row, index) => (
                                <li key={index} className={classes.featureItem}>
                                    <span className={classes.featureLabel}>{row.feature}</span>
                                    <span className={classes.traditionalValue}>{row.traditional}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* TransparentBusiness Strategy Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={classes.brandCard}
                    >
                        <div className={classes.cardHeaderBrand}>
                            <h3 className={classes.cardTitleBrand}>The TransparentBusiness Strategy</h3>
                        </div>
                        <ul className={classes.featureList}>
                            {comparisonData.map((row, index) => (
                                <li key={index} className={classes.featureItem}>
                                    <span className={classes.featureLabelBrand}>{row.feature}</span>
                                    <span className={classes.brandValue}>{row.transparentBusiness}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Mobile Scroll Indicator */}
                <div className={classes.scrollIndicator}>
                    {[0, 1].map((index) => ( // 2 cards total
                        <div
                            key={index}
                            className={`${classes.dot} ${activeIndex === index ? classes.activeDot : ''}`}
                            onClick={() => {
                                if (scrollContainerRef.current) {
                                    const cardWidth = scrollContainerRef.current.offsetWidth * 0.85;
                                    scrollContainerRef.current.scrollTo({
                                        left: index * cardWidth,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
