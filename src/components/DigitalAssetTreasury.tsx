'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useStyles } from './DigitalAssetTreasury.styles';

const DigitalAssetTreasury = () => {
    const { classes } = useStyles();

    const columnsData = [
        {
            title: "Treasury Strategy",
            items: [
                "Debt-free capital model",
                "Equity swap alignment",
                "Long-term treasury discipline",
                "Institutional capital preservation"
            ]
        },
        {
            title: "Asset Allocation",
            items: [
                "Digital asset exposure strategy",
                "Real asset alignment",
                "Liquidity management framework",
                "Volatility mitigation discipline"
            ]
        },
        {
            title: "Risk Management",
            items: [
                "Regulatory alignment protocol",
                "Compliance-first governance",
                "Multi-layer risk mitigation",
                "SEC-responsive structural discipline"
            ]
        },
        {
            title: "Reporting Standards",
            items: [
                "Quarterly reporting commitment",
                "Treasury performance metrics",
                "Transparency framework",
                "Institutional accountability model"
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
                        Institutional Framework
                    </span>
                    <h2 className={classes.title}>
                        Digital Asset Treasury
                    </h2>
                    <p className={classes.subtitle}>
                        A Debt-Free Institutional Framework for Strategic Capital Preservation
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
