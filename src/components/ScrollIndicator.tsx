'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll animation for a premium feel
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div style={{
            position: 'fixed',
            right: 'clamp(16px, 3vw, 40px)',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '6px',
            height: '160px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent track
            borderRadius: '10px',
            zIndex: 9999,
            overflow: 'hidden',
            mixBlendMode: 'difference', // Ensure visibility on both dark and light backgrounds
        }}>
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#FFFFFF',
                    transformOrigin: 'top',
                    scaleY
                }}
            />
        </div>
    );
};

export default ScrollIndicator;
