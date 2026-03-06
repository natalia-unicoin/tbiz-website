'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './LeadershipPositioning.styles';

const stats = [
    { value: "XX", label: "Lorem Ipsum" },
    { value: "YY", label: "Dolor Sit Amet" },
    { value: "WORD", label: "Consectetur Adipiscing" },
    { value: "KEY", label: "Elit Sed Do Eiusmod" },
    { value: "000", label: "Tempor Incididunt" },
    { value: "#0", label: "Ut Labore Et Dolore" }
];

const LeadershipPositioning = () => {
    const { classes } = useStyles();

    return (
        <section className={classes.section} id="leadership">
            <div className={classes.container}>
                <motion.h2
                    className={classes.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Lorem Ipsum Dolor
                </motion.h2>

                <div className={classes.grid}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={classes.statItem}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={classes.statValue}>{stat.value}</div>
                            <div className={classes.statLabel}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipPositioning;
