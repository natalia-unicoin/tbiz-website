'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStyles } from './StorySection.styles';
import { getImagePath } from '@/utils/image';

const storyBlocks = [
    {
        id: "origins",
        eyebrow: "Origins + Founders",
        logoImage: getImagePath('assets/logo-tbiz-white.png'),
        title: "Where the Vision Began",
        description: [
            "The journey began with a simple but powerful idea: bring transparency and accountability to digital work.",
            "As organizations increasingly relied on distributed teams and global talent, new tools were needed to manage work, productivity, and collaboration with clarity and trust.",
            "This vision laid the foundation for a broader ecosystem built around transparency, technology, and global opportunity."
        ],
        bgImage: getImagePath('assets/founders-bg.jpg'),
    },
    {
        id: "sheworks",
        highlight: "SheWorks!",
        logoImage: getImagePath('assets/logo-sheworks-white.png'),
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
        logoImage: getImagePath('assets/logo-unicorn-hunters-white.png'),
        title: "Democratizing Access to Investment",
        description: [
            "The ecosystem expanded into media and global investment with the launch of Unicorn Hunters.",
            "Through a unique platform that combines entertainment, entrepreneurship, and capital markets, Unicorn Hunters connects high-growth companies with investors around the world.",
            "By opening access to opportunities traditionally reserved for institutional investors, the platform contributes to a more inclusive investment landscape."
        ],
        cta: { text: "Explore Unicorn Hunters", link: "https://unicornhunters.com" },
        bgImage: getImagePath('assets/unicorn-hunters-bg.png'),
    },
    {
        id: "unicoin",
        highlight: "Unicoin",
        logoImage: getImagePath('assets/logo-unicoin-white.png'),
        title: "A New Model for Digital Assets",
        description: [
            "Building upon the mission of democratizing investment, Unicoin was developed as an asset-backed cryptocurrency.",
            "Unlike traditional digital currencies, Unicoin is designed to reduce volatility by being backed by real-world assets and equity stakes in high-growth companies.",
            "This approach bridges the gap between traditional finance and blockchain technology, offering a more stable path for digital asset holders."
        ],
        cta: { text: "Learn About Unicoin", link: "https://unicoin.com" },
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
        <section className={classes.warSection} style={{ position: 'relative', overflow: 'hidden', borderTop: 'none', padding: '120px 0' }}>
            {/* Background Image & Dark Overlay for War on Crypto */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("/assets/war-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(17, 24, 39, 0.7)', zIndex: 1 }}></div>

            <div className={classes.warContainer} style={{ position: 'relative', zIndex: 10 }}>
                <span className={classes.eyebrow} style={{ color: '#E5E7EB' }}>
                    STANDING FOR TRANSPARENCY
                </span>
                <h2 className={classes.titleSmall} style={{ color: '#FFFFFF' }}>
                    War on Crypto
                </h2>

                <p className={classes.descriptionSmall} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    The U.S. Securities and Exchange Commission (SEC) has filed charges against Unicoin, alleging fraudulent practices in the promotion and sale of digital assets. These blatantly false accusations are part of a broader "regulation by enforcement" strategy that has been widely questioned by various stakeholders, including 18 U.S. states that have sued the SEC for overstepping its regulatory authority.
                </p>

                <a href="https://unicoin.com/war-on-crypto" target="_blank" rel="noopener noreferrer" className={classes.ctaButton}>
                    READ MORE
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
                const currentBg = block.bgImage ? 'transparent' : bgColors[index % 3];
                const textColor = block.bgImage ? '#FFFFFF' : 'inherit';
                const descColor = block.bgImage ? 'rgba(255, 255, 255, 0.9)' : undefined;

                return (
                    <section key={block.id} className={classes.section} style={{ backgroundColor: currentBg, position: 'relative', overflow: 'hidden' }}>
                        {/* Background Image Layer */}
                        {block.bgImage && (
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100%',
                                marginLeft: 'calc(50% - 50vw)', // Break out of container
                                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%), url(${block.bgImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                zIndex: 0
                            }} />
                        )}

                        <div className={classes.container} style={{ position: 'relative', zIndex: 1 }}>

                            {/* Text Content */}
                            <motion.div
                                className={classes.textContent}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span className={classes.eyebrow} style={{ color: block.bgImage ? '#E5E7EB' : undefined }}>
                                    {block.logoImage ? (
                                        <img src={block.logoImage} alt={`${block.eyebrow || block.highlight} logo`} style={{ height: '32px', width: 'auto', marginBottom: '8px', filter: block.bgImage ? 'none' : 'invert(1)' }} />
                                    ) : (
                                        block.highlight ? (
                                            <span style={{ color: block.bgImage ? '#38BDF8' : '#009EE3' }}>{block.highlight}</span>
                                        ) : block.eyebrow
                                    )}
                                </span>

                                <h2 className={classes.title} style={{ color: textColor }}>{block.title}</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {Array.isArray(block.description) ? (
                                        block.description.map((p, idx) => (
                                            <p key={idx} className={classes.description} style={{ color: descColor }}>{p}</p>
                                        ))
                                    ) : (
                                        <p className={classes.description} style={{ color: descColor }}>{block.description}</p>
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
