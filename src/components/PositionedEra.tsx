'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useStyles } from './PositionedEra.styles';

const text = "Today the vision continues with TransparentBusiness. Unicoin Inc now operates as TransparentBusiness, representing the evolution of a broader mission: building transparency across digital work, finance and global organizations.";

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.15, 1]);
    return (
        <motion.span style={{ opacity }}>
            {children}{" "}
        </motion.span>
    );
};

const PositionedEra = () => {
    const { classes } = useStyles();
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end 80%"] // Starts highlighting when top is in middle, finishes slightly before end 
    });

    const words = text.split(" ");

    return (
        <section id="positioned-era" className={classes.section} ref={containerRef}>
            <img src={getImagePath('assets/poised-bg.jpg')} alt="Cinematic Blurred Background" className={classes.bgImage} />
            <div className={classes.overlay} />
            <div className={classes.stickyWrapper}>
                <div className={classes.container}>
                    <motion.h2
                        className={classes.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        The Evolution Continues
                    </motion.h2>

                    <p className={classes.description}>
                        {words.map((word, i) => {
                            const start = i / words.length;
                            const end = start + (1 / words.length);
                            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                        })}
                    </p>

                    <motion.ul
                        style={{ marginTop: '48px', listStyleType: 'disc', paddingLeft: '20px', color: '#E6E8EB', fontSize: '1.25rem', display: 'flex', flexDirection: 'column', gap: '16px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <li>Digital transparency infrastructure</li>
                        <li>Global ecosystem of companies</li>
                        <li>Technology for the future economy</li>
                    </motion.ul>
                </div>
            </div>
        </section>
    );
};

export default PositionedEra;
