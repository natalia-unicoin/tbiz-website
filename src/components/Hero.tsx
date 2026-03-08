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
                <div style={{ width: '100%', height: '100%', backgroundColor: '#0F1626' }} className={classes.videoBackground} />
                <div className={classes.videoOverlay} />
            </div>

            {/* Content */}
            <div className={classes.content}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span style={{
                        display: 'inline-block',
                        color: '#FCD144',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        fontSize: '0.875rem',
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase'
                    }}>
                        BETA VERSION 1
                    </span>
                </motion.div>

                <motion.h1
                    className={classes.title}
                    initial={{ y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    The Evolution of<br />a Vision
                </motion.h1>

                <motion.div
                    initial={{ y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className={classes.subtitle}>
                        Introduction to the concept of the page:<br />
                        the evolution of the vision and ecosystem.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={classes.ctaContainer}
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={classes.ctaButton}
                    >
                        Begin the Journey
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
                            <h3 className={classes.modalTitle}>Placeholder Title</h3>
                            <p className={classes.modalText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
