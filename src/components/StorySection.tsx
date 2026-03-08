'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStyles } from './StorySection.styles';
import { getImagePath } from '@/utils/image';

const storyBlocks = [
    {
        id: "origins",
        eyebrow: "Origins",
        title: "Where the Vision Began",
        description: "The beginning of the vision focused on transparency and accountability in digital work.",
        image: 'assets/box-placeholder.jpg',
        layout: 'hero-image'
    },
    {
        id: "sheworks",
        highlight: "SheWorks",
        title: "Empowering Women Through Work",
        description: "Highlight the launch and global impact of SheWorks as a platform empowering women through remote work.",
        image: 'assets/box-placeholder.jpg',
        cta: { text: "Discover SheWorks", link: "https://sheworks.com" },
        layout: 'split-right'
    },
    {
        id: "unicorn-hunters",
        highlight: "Unicorn Hunters",
        title: "Democratizing Access to Investment",
        description: "Highlight the media and investment platform Unicorn Hunters and its mission to democratize access to investment opportunities.",
        image: 'assets/box-placeholder.jpg',
        cta: { text: "Explore Unicorn Hunters", link: "https://unicornhunters.com" },
        layout: 'split-left'
    },
    {
        id: "unicoin",
        highlight: "Unicoin",
        title: "A New Model for Digital Assets",
        description: "Introduction of Unicoin as an asset-backed digital asset bringing transparency to the crypto ecosystem.",
        image: 'assets/box-placeholder.jpg',
        cta: { text: "Learn about Unicoin", link: "https://unicoin.com" },
        layout: 'hero-image'
    },
    {
        id: "vision",
        eyebrow: "Vision",
        title: "The Vision for the Future",
        description: "A section explaining the broader vision behind the ecosystem and its role in shaping the future of digital work, finance, and technology.",
        image: 'assets/box-placeholder.jpg',
        layout: 'split-right'
    },
    {
        id: "global-ecosystem",
        eyebrow: "Global Ecosystem",
        title: "A Global Network",
        description: "Showcase the international presence of the ecosystem, including partners, collaborators, global reach, and media presence.",
        image: 'assets/box-placeholder.jpg',
        layout: 'split-left'
    }
];

const WarOnCryptoSection = () => {
    const { classes } = useStyles();
    return (
        <section className={classes.warSection}>
            <div className={classes.warContainer}>
                <span className={classes.eyebrow}>War on Crypto</span>
                <h2 className={classes.titleSmall}>Standing for Transparency</h2>
                <p className={classes.descriptionSmall}>
                    Brief reference to the regulatory/legal battle known as "War on Crypto," with a link to the dedicated site.
                </p>
                <a href="https://waroncrypto.com" className={classes.ctaButtonOutline}>
                    Read the full story
                </a>
            </div>
        </section>
    );
};

const StorySection = () => {
    const { classes, cx } = useStyles();

    return (
        <div id="story" className={classes.wrapper}>
            {storyBlocks.map((block, index) => {
                const bgColors = ['#FFFFFF', '#F9F9F9', '#F7F9FC'];
                const currentBg = bgColors[index % 3];

                return (
                    <section key={block.id} className={classes.section} style={{ backgroundColor: currentBg }}>
                        <div className={classes.container}>

                            {/* Text Content (Always first and centered) */}
                            <motion.div
                                className={classes.textContent}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span className={classes.eyebrow}>
                                    {block.highlight ? (
                                        <span style={{ color: '#009EE3' }}>{block.highlight}</span>
                                    ) : block.eyebrow}
                                </span>

                                <h2 className={classes.title}>{block.title}</h2>
                                <p className={classes.description}>{block.description}</p>
                            </motion.div>

                            {/* Optional Visual Content */}
                            {block.image && (
                                <motion.div
                                    className={classes.visualContent}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <img
                                        src={getImagePath(block.image)}
                                        alt={block.title}
                                        className={classes.largeImage}
                                    />
                                </motion.div>
                            )}

                            {/* Optional CTA */}
                            {block.cta && (
                                <motion.div
                                    className={classes.ctaContainer}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <a href={block.cta.link} target="_blank" rel="noopener noreferrer" className={classes.ctaButton}>
                                        {block.cta.text}
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </motion.div>
                            )}

                        </div>
                    </section>
                );
            })}

            <WarOnCryptoSection />
        </div>
    );
};

export default StorySection;
