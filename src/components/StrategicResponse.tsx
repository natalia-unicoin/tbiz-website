'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './StrategicResponse.styles';

const StrategicResponse = () => {
    const { classes } = useStyles();

    const comparisonData = [
        {
            feature: "Leverage",
            traditional: "High-Risk Debt Dependency",
            tbiz: "Debt-Free Institutional Model"
        },
        {
            feature: "Asset Acquisition",
            traditional: "Linear Asset Acquisition",
            tbiz: "Strategic Equity Swaps"
        },
        {
            feature: "Intelligence",
            traditional: "Manual Analysis",
            tbiz: "AI-Powered Strategy"
        },
        {
            feature: "Sustainability",
            traditional: "Speculative Treasury",
            tbiz: "Sustainable Growth Model"
        }
    ];

    return (
        <section id="strategy" className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <motion.h2
                        className={classes.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Our Strategic Response
                    </motion.h2>
                    <motion.p
                        className={classes.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Pivoting from High-Liability Models to a Resilient, Debt-Free Institutional Standard
                    </motion.p>
                </div>

                <motion.div
                    className={classes.tableContainer}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th className={classes.th}>Metric</th>
                                <th className={classes.th}>Traditional Model</th>
                                <th className={`${classes.th} ${classes.thBrand}`}>TransparentBusiness Strategy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr key={index} className={classes.tr}>
                                    <td className={classes.td}>{row.feature}</td>
                                    <td className={`${classes.td} ${classes.traditionalValue}`}>{row.traditional}</td>
                                    <td className={`${classes.td} ${classes.brandValue}`}>
                                        {row.tbiz}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

export default StrategicResponse;
