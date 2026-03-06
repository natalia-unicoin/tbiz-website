'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useStyles } from './StorySection.styles';

const StorySection = () => {
    const { classes, cx } = useStyles();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const scrollPosition = scrollContainerRef.current.scrollLeft;
        const cardWidth = scrollContainerRef.current.offsetWidth * 0.85; // match CSS minWidth: 85vw
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
        <section id="story" className={classes.section}>
            <div className={classes.container}>

                <div className={classes.innerFlex}>
                    {/* Left Sticky Column */}
                    <div className={classes.stickyColumn}>
                        <motion.h2
                            className={classes.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            The Story Behind the Evolution
                        </motion.h2>
                        <motion.p
                            className={classes.subtitle}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Navigating the transition from Unicoin to TransparentBusiness through transparency and strategic resilience.
                        </motion.p>
                    </div>

                    {/* Right Scrolling Column */}
                    <div className={classes.scrollColumn} ref={scrollContainerRef}>

                        <motion.div
                            className={classes.storyBlock}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className={classes.chapterLabel}>Phase 01</span>
                            <h3 className={classes.cardTitle}>The Path to NYSE</h3>
                            <p className={classes.cardText}>
                                TransparentBusiness was engineered with a clear institutional objective: to become the first publicly traded digital asset company on the New York Stock Exchange (NYSE), establishing a high standard for transparency in emerging markets.
                            </p>
                        </motion.div>

                        <motion.div
                            className={classes.storyBlock}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className={classes.chapterLabel}>Phase 02</span>
                            <h3 className={classes.cardTitle}>Regulatory Realignment</h3>
                            <p className={classes.cardText}>
                                The intensification of the "War on Crypto" and specific targeting by the SEC forced a critical decision. Evolution was not a choice, but a strategic imperative to protect investor interests and maintain company integrity in a shifting landscape.
                            </p>
                        </motion.div>

                        <motion.div
                            className={classes.storyBlock}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className={classes.chapterLabel}>Phase 03</span>
                            <h3 className={classes.cardTitle}>A Commitment to Institutional Transparency</h3>
                            <p className={classes.cardText}>
                                Transparency is not a narrative device; it is an operational principle. TransparentBusiness is structured around clear governance standards, responsible capital management, and measurable accountability. Our evolution reinforces a commitment to institutional discipline, long-term sustainability, and proactive regulatory alignment.
                            </p>
                        </motion.div>

                        <motion.div
                            className={cx(classes.storyBlock, classes.highlightBlock)}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className={classes.imperativeLabel}>Strategic Imperative</span>
                            <h3 className={classes.imperativeTitle}>Protecting Value through Resilience</h3>
                            <p className={classes.imperativeDescription}>
                                TransparentBusiness represents more than a name change; it is a structural pivot designed to lead with high-standard transparency in the next era of institutional digital asset management.
                            </p>
                        </motion.div>

                    </div>
                </div>

                {/* Mobile Scroll Indicator */}
                <div className={classes.scrollIndicator}>
                    {[0, 1, 2, 3].map((index) => ( // 4 story phases/cards
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

export default StorySection;
