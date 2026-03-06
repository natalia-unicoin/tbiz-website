'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './InstagramMesh.styles';
import { getImagePath } from '@/utils/image';

const InstagramMesh = () => {
    const { classes } = useStyles();

    const posts = [
        { id: 1, image: getImagePath("assets/instagram-1.png"), alt: "TransparentBusiness Instagram Posts" },
        { id: 2, image: getImagePath("assets/instagram-2.png"), alt: "TransparentBusiness Instagram Posts" },
    ];

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <motion.h2
                        className={classes.title}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        #TransparentBusinessLife
                    </motion.h2>
                    <a
                        href="https://www.instagram.com/unicoin_news/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.followLink}
                    >
                        Follow us on Instagram
                    </a>
                </div>

                <div className={classes.meshGrid}>
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className={classes.postWrapper}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => window.open("https://www.instagram.com/unicoin_news/", "_blank")}
                        >
                            <img src={post.image} alt={post.alt} className={classes.postImage} />
                            <div className={classes.overlay}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={classes.instagramIcon}>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramMesh;
