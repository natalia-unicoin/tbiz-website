'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useStyles } from './PositionedEra.styles';

const text = "The transition to TransparentBusiness marks a deliberate move toward institutional maturity. Built on a debt-free model, strategic asset alignment, and disciplined governance, TransparentBusiness is structured to operate within evolving regulatory frameworks while maintaining strategic independence. This is not a reactionary shift, but a forward-looking institutional recalibration designed for longevity.";

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
                        Positioned for the Next Era
                    </motion.h2>

                    <p className={classes.description}>
                        {words.map((word, i) => {
                            const start = i / words.length;
                            const end = start + (1 / words.length);
                            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                        })}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PositionedEra;
