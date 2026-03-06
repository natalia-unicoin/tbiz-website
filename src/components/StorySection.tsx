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
        description: "The journey began with a simple idea: bringing transparency and accountability to digital work.",
        image: 'assets/poised-bg.jpg', // Placeholder for archival images
        layout: 'hero-image'
    },
    {
        id: "sheworks",
        highlight: "SheWorks",
        title: "Empowering Women Through Work",
        description: "A global platform connecting women with remote professional opportunities.",
        image: 'assets/executive-standing.png', // Placeholder
        cta: { text: "Discover SheWorks", link: "https://sheworks.com" },
        layout: 'split-right'
    },
    {
        id: "unicorn-hunters",
        highlight: "Unicorn Hunters",
        title: "Democratizing Access to Investment",
        description: "A global media platform connecting innovative companies with investors worldwide.",
        image: 'assets/poised-bg.jpg', // Placeholder
        cta: { text: "Explore Unicorn Hunters", link: "https://unicornhunters.com" },
        layout: 'split-left'
    },
    {
        id: "unicoin",
        highlight: "Unicoin",
        title: "A New Model for Digital Assets",
        description: "An asset-backed digital asset designed to bring transparency to the crypto economy.",
        image: 'assets/bg-white.png', // Placeholder
        cta: { text: "Learn about Unicoin", link: "https://unicoin.com" },
        layout: 'hero-image'
    },
    {
        id: "vision",
        eyebrow: "Vision",
        title: "The Vision for the Future",
        description: "Building infrastructure for transparency across digital work, finance, and global organizations.",
        image: 'assets/poised-bg.jpg', // Placeholder
        layout: 'split-right'
    },
    {
        id: "global-ecosystem",
        eyebrow: "Global Ecosystem",
        title: "A Global Network",
        description: "Companies, partners and collaborators around the world contributing to a growing ecosystem.",
        image: 'assets/executive-standing.png', // Placeholder
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
                    A defining legal moment defending innovation and transparency in the crypto industry.
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
                const isBgGray = index % 2 !== 0; // Alternating subtle backgrounds

                return (
                    <section
                        key={block.id}
                        className={cx(
                            classes.sectionBlock,
                            isBgGray && classes.bgGrayLight
                        )}
                    >
                        <div className={cx(
                            classes.contentWrapper,
                            block.layout === 'split-right' ? classes.rowReverse : classes.rowNormal,
                            block.layout === 'hero-image' ? classes.colNormal : null
                        )}>

                            {/* Text Content */}
                            <div className={cx(
                                classes.textContent,
                                block.layout === 'hero-image' && classes.textContentCenter
                            )}>
                                <motion.div
                                    initial={{ y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <span className={classes.eyebrow}>
                                        {block.highlight || block.eyebrow}
                                    </span>
                                    <h2 className={classes.title}>
                                        {block.title}
                                    </h2>
                                    <p className={classes.description}>
                                        {block.description}
                                    </p>
                                    {block.cta && (
                                        <div className={classes.ctaContainer}>
                                            <a href={block.cta.link} target="_blank" rel="noopener noreferrer" className={classes.ctaButton}>
                                                {block.cta.text}
                                            </a>
                                        </div>
                                    )}
                                </motion.div>
                            </div>

                            {/* Visual Content */}
                            <motion.div
                                className={cx(
                                    classes.visualContent,
                                    block.layout === 'hero-image' && classes.visualContentWide
                                )}
                                initial={{ scale: 0.95 }}
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

                        </div>
                    </section>
                );
            })}

            <WarOnCryptoSection />
        </div>
    );
};

export default StorySection;
