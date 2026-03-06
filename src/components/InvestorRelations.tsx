'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './InvestorRelations.styles';

const InvestorRelations = () => {
    const { classes } = useStyles();

    const dataCards = [
        {
            title: "Investor Deck",
            items: [
                "Comprehensive strategic review",
                "Financial projections model",
                "Market positioning analysis"
            ],
            actionText: "Download Deck"
        },
        {
            title: "Contact IR",
            items: [
                "Direct institutional access",
                "Dedicated relationship manager",
                "Priority response timeline"
            ],
            actionText: "Get in Touch"
        },
        {
            title: "Institutional FAQs",
            items: [
                "Capital structure methodology",
                "Risk and governance framework",
                "Treasury deployment parameters"
            ],
            actionText: "View FAQs"
        },
        {
            title: "Analyst Inquiry",
            items: [
                "Custom data requests",
                "Management interview protocol",
                "Detailed performance metrics"
            ],
            actionText: "Submit Inquiry"
        }
    ];

    return (
        <section id="investors" className={classes.section}>
            <div className={classes.container}>
                <motion.div
                    className={classes.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={classes.title}>
                        Investor Relations
                    </h2>
                </motion.div>

                <div className={classes.grid}>
                    {dataCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={classes.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <h3 className={classes.cardTitle}>{card.title}</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px', flexGrow: 1, marginBottom: '48px' }}>
                                {card.items.map((item, idx) => (
                                    <li key={idx} style={{ fontSize: '16px', color: '#374151', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.5, fontFamily: 'Inter, sans-serif' }}>
                                        <span style={{ display: 'inline-block', flexShrink: 0, color: '#9CA3AF', fontSize: '18px', fontWeight: 300, marginTop: '0px' }}>→</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className={classes.cardAction}>
                                {card.actionText}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InvestorRelations;
