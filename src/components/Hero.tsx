'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './Hero.styles';

const Hero = () => {
    const { classes } = useStyles();
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className={classes.section}>
            {/* Background Video */}
            <div className={classes.bgWrapper}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={classes.videoBackground}
                >
                    <source src={getImagePath('/assets/AdobeStock_1897137541.mov')} />
                </video>
                <div className={classes.videoOverlay} />
            </div>

            {/* Content */}
            <div className={classes.content}>
                <motion.h1
                    className={classes.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    TransparentBusiness<br />is Evolving
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className={classes.subtitle}>
                        From Unicoin to TransparentBusiness. A new chapter built on.<br />
                        transparency, resilience, and leadership.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className={classes.description}>
                        Evolving our institutional model to navigate the shifting regulatory landscape.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={classes.ctaContainer}
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={classes.ctaButton}
                    >
                        Discover the Transition
                    </button>
                </motion.div>

            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={classes.modalBackdrop}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className={classes.modalContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={classes.modalCloseButton} onClick={() => setIsModalOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="currentColor">
                                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                </svg>
                            </button>
                            <h3 className={classes.modalTitle}>Institutional Clarification</h3>
                            <p className={classes.modalText}>
                                TransparentBusiness is not merely a rebrand. It represents a structural evolution of TransparentBusiness' institutional framework. The transition reflects a strategic realignment designed to ensure regulatory clarity, protect investor interests, and strengthen long-term governance standards. This evolution positions TransparentBusiness as a forward-facing institutional platform built for transparency, resilience, and compliance in a shifting global regulatory environment.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
