'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './InTheMedia.styles';

const mediaItems = [
    {
        tag: "Leadership Interview",
        title: "Entrepreneurship with AI: A New Vision",
        excerpt: "Silvina Moschini shares strategic recommendations for the next era of AI-driven business leadership and social product innovation.",
        source: "Sale el Sol"
    },
    {
        tag: "Strategic PR",
        title: "The Mockumentary: A Pragmatic Offensive",
        excerpt: "Reframing the crypto industry conflict through documentary-style narrative tactics as a major trend in corporate communication.",
        source: "Industry Insight"
    },
    {
        tag: "Regulatory Shift",
        title: "Regulation vs innovation: The Institutional Stakes",
        excerpt: "Analyzing the impact of restrictive regulatory maneuvers on emerging digital asset ecosystems and global market stability.",
        source: "Global Finance"
    }
];

const InTheMedia = () => {
    const { classes } = useStyles();

    return (
        <section className={classes.section} id="media">
            <div className={classes.container}>
                <motion.h2
                    className={classes.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    In the Media
                </motion.h2>

                <div className={classes.grid}>
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={classes.mediaCard}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <span className={classes.tag}>{item.tag}</span>
                            <h3 className={classes.mediaTitle}>{item.title}</h3>
                            <p className={classes.excerpt}>{item.excerpt}</p>
                            <div className={classes.source}>{item.source}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InTheMedia;
