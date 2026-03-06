'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './Financials.styles';

const Financials = () => {
    const { classes } = useStyles();

    const dataCards = [
        {
            value: "000",
            description: "Lorem Ipsum Dolor Sit Amet Consectetur",
        },
        {
            value: "00%",
            description: "Adipiscing Elit Sed Do Eiusmod Tempor",
        },
        {
            value: "XX",
            description: "Incididunt Ut Labore Et Dolore Magna",
        },
        {
            value: "LIP",
            description: "Aliqua Ut Enim Ad Minim Veniam",
        }
    ];

    return (
        <section id="financials" className={classes.section}>
            <div className={classes.container}>
                <motion.div
                    className={classes.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={classes.title}>
                        Lorem Ipsum
                    </h2>
                </motion.div>

                <div className={classes.grid}>
                    {dataCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={classes.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <div className="flex flex-col items-center justify-center w-full">
                                <span className={classes.statValue}>{card.value}</span>
                                <span className={classes.statDescription}>{card.description}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Financials;
