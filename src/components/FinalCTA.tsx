'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useStyles } from './FinalCTA.styles';

const FinalCTA = () => {
    const { classes } = useStyles();

    return (
        <section className={classes.section} id="transition">
            <img src={getImagePath('assets/executive-standing.png')} alt="Corporate Background" className={classes.bgImage} />
            <div className={classes.overlay} />
            <div className={classes.container}>
                <motion.h2
                    className={classes.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    Join the Next Chapter<br />of Transparent Finance
                </motion.h2>

                <motion.p
                    className={classes.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    Be part of an evolution built on integrity, resilience, and absolute transparency. Stay informed as we shape the future of digital asset treasury.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <a href="#" className={classes.button}>
                        Join the Transition
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
