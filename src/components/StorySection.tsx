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
        description: [
            "The journey began with a simple but powerful idea: bring transparency and accountability to digital work.",
            "As organizations increasingly relied on distributed teams and global talent, new tools were needed to manage work, productivity, and collaboration with clarity and trust.",
            "This vision laid the foundation for a broader ecosystem built around transparency, technology, and global opportunity."
        ],
    },
    {
        id: "sheworks",
        highlight: "SheWorks!",
        title: "Empowering Women Through Work",
        description: [
            "The vision expanded globally with the creation of SheWorks!, a platform designed to connect women with remote professional opportunities.",
            "By enabling companies to access global talent and helping women participate in the digital economy, SheWorks became a leading community for the future of work.",
            "Today, the platform represents a powerful movement supporting professional growth, flexibility, and economic inclusion."
        ],
        cta: { text: "Discover SheWorks", link: "https://sheworks.com" },
    },
    {
        id: "unicorn-hunters",
        highlight: "Unicorn Hunters",
        title: "Democratizing Access to Investment",
        description: [
            "The ecosystem expanded into media and global investment with the launch of Unicorn Hunters.",
            "Through a unique platform that combines entertainment, entrepreneurship, and capital markets, Unicorn Hunters connects high-growth companies with investors around the world.",
            "By opening access to opportunities traditionally reserved for institutional investors, the platform contributes to a more inclusive investment landscape."
        ],
        cta: { text: "Explore Unicorn Hunters", link: "https://unicornhunters.com" },
    },
    {
        id: "unicoin",
        highlight: "Unicoin",
        title: "A New Model for Digital Assets",
        description: [
            "The next step in the ecosystem’s evolution introduced a new approach to digital assets.",
            "Unicoin was created as an asset-backed cryptocurrency designed to bring greater transparency and accountability to the crypto economy.",
            "Built on the principles of transparency and long-term value, the project aims to create a more stable and trustworthy model for digital finance."
        ],
        cta: { text: "Learn about Unicoin", link: "https://unicoin.com" },
    },
    {
        id: "vision",
        eyebrow: "Vision",
        title: "A Vision for the Future",
        description: [
            "Across every initiative, one principle has remained constant: transparency.",
            "From remote work platforms to global investment media and digital assets, the ecosystem continues to evolve around the idea that transparency is essential for the future of organizations and markets.",
            "By combining technology, innovation, and global collaboration, the vision continues to expand into new industries and opportunities."
        ],
    },
    {
        id: "global-ecosystem",
        eyebrow: "Global Ecosystem",
        title: "A Global Network",
        description: [
            "Over time, the ecosystem has grown into an international network of companies, partners, collaborators, and communities.",
            "From technology platforms to media initiatives and digital assets, these projects share a common mission: building transparent systems that empower individuals, organizations, and investors worldwide.",
            "Through global teams, partnerships, and international recognition, the ecosystem continues to expand its presence around the world."
        ],
    }
];

const WarOnCryptoSection = () => {
    const { classes } = useStyles();
    return (
        <section className={classes.warSection}>
            <div className={classes.warContainer}>
                <span className={classes.eyebrow}>War on Crypto</span>
                <h2 className={classes.titleSmall}>Standing for Transparency</h2>
                <div className={classes.warGrid}>
                    <div className={classes.warCard}>
                        <p className={classes.descriptionSmall}>
                            As innovation in digital finance continues to grow, the ecosystem has also faced regulatory challenges that reflect broader debates within the cryptocurrency industry.
                        </p>
                    </div>
                    <div className={classes.warCard}>
                        <p className={classes.descriptionSmall}>
                            These events became known as the War on Crypto, highlighting the tensions between innovation and regulation in emerging financial technologies.
                        </p>
                    </div>
                    <div className={classes.warCard}>
                        <p className={classes.descriptionSmall}>
                            The story represents an important chapter in the ongoing conversation about transparency, fairness, and the future of digital assets.
                        </p>
                    </div>
                </div>
                <a href="https://waroncrypto.com" className={classes.ctaButtonOutline}>
                    Read the Full Story
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

                            {/* Text Content */}
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
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {Array.isArray(block.description) ? (
                                        block.description.map((p, idx) => (
                                            <p key={idx} className={classes.description}>{p}</p>
                                        ))
                                    ) : (
                                        <p className={classes.description}>{block.description}</p>
                                    )}
                                </div>
                            </motion.div>

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
