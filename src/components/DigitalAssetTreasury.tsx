'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useStyles } from './DigitalAssetTreasury.styles';

const DigitalAssetTreasury = () => {
    const { classes } = useStyles();

    const columnsData = [
        {
            title: "Lorem Ipsum 1",
            items: [
                "Dolor sit amet, consectetur",
                "Adipiscing elit sed do",
                "Eiusmod tempor incididunt",
                "Ut labore et dolore magna"
            ]
        },
        {
            title: "Lorem Ipsum 2",
            items: [
                "Aliqua ut enim ad minim",
                "Veniam quis nostrud",
                "Exercitation ullamco laboris",
                "Nisi ut aliquip ex ea"
            ]
        },
        {
            title: "Lorem Ipsum 3",
            items: [
                "Commodo consequat duis",
                "Aute irure dolor in",
                "Reprehenderit in voluptate",
                "Velit esse cillum dolore"
            ]
        },
        {
            title: "Lorem Ipsum 4",
            items: [
                "Eu fugiat nulla pariatur",
                "Excepteur sint occaecat",
                "Cupidatat non proident",
                "Sunt in culpa qui officia"
            ]
        }
    ];

    return (
        <section id="treasury" className={classes.section}>
            <img src={getImagePath('assets/bg-white.png')} alt="Treasury Texture Background" className={classes.bgImage} />
            <div className={classes.container}>
                <motion.div
                    className={classes.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={classes.eyebrow}>
                        Consectetur Adipiscing
                    </span>
                    <h2 className={classes.title}>
                        Lorem Ipsum Dolor
                    </h2>
                    <p className={classes.subtitle}>
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </motion.div>

                <div className={classes.grid}>
                    {columnsData.map((col, index) => (
                        <motion.div
                            key={index}
                            className={classes.bentoCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                        >
                            <span className={classes.cardNumber}>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className={classes.colTitle}>{col.title}</h3>
                            <ul className={classes.list}>
                                {col.items.map((item, idx) => (
                                    <li key={idx} className={classes.listItem}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalAssetTreasury;
