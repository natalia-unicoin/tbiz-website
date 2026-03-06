'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './TokenSection.styles';

const TokenSection = () => {
    const { classes } = useStyles();
    const governanceItems = [
        "DAO Voting Rights",
        "Strategic Decisions",
        "Treasury Management",
        "Protocol Upgrades",
        "Long-term Value"
    ];

    const utilityItems = [
        "Exclusive Access",
        "Event Tickets",
        "Merch & Drops",
        "Community Rewards",
        "Member Experiences"
    ];

    return (
        <section id="token" className={classes.section}>
            <div className={classes.container}>
                {/* Header */}
                <div className={classes.header}>
                    <h2 className={classes.title}>
                        TransparentBusiness Ecosystem
                    </h2>
                    <p className={classes.description}>
                        A balanced ecosystem designed for both stability and active participation. Governance for the future, Utility for the now.
                    </p>
                </div>

                {/* Split Layout */}
                <div className={classes.grid}>
                    {/* Governance Card */}
                    <div className={`${classes.card} group`}>
                        <div
                            className={`${classes.blurCircle} group-hover:bg-[#111111]/10`}
                            style={{ backgroundColor: 'rgba(17, 17, 17, 0.05)' }}
                        />

                        <div className={classes.cardHeader}>
                            <span
                                className={classes.badge}
                                style={{ backgroundColor: 'rgba(17, 17, 17, 0.1)', color: '#111111' }}
                            >
                                Governance Layer
                            </span>
                            <h3 className={classes.cardTitle}>
                                TransparentBusiness Inc.
                            </h3>
                            <p className={classes.cardSubtitle}>The Voice of the DAO</p>
                        </div>

                        <ul className={classes.list}>
                            {governanceItems.map((item, i) => (
                                <li key={i} className={classes.listItem}>
                                    <div className={classes.dot} style={{ backgroundColor: '#111111' }} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://transparentbusiness.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.button}
                            style={{ backgroundColor: '#111111' }}
                        >
                            View Governance Portal
                        </a>
                    </div>

                    {/* Utility Card */}
                    <div className={`${classes.card} group`}>
                        <div
                            className={`${classes.blurCircle} group-hover:bg-[#333333]/10`}
                            style={{ backgroundColor: 'rgba(51, 51, 51, 0.05)' }}
                        />

                        <div className={classes.cardHeader}>
                            <span
                                className={classes.badge}
                                style={{ backgroundColor: 'rgba(51, 51, 51, 0.1)', color: '#333333' }}
                            >
                                Utility Layer
                            </span>
                            <h3 className={classes.cardTitle}>
                                TransparentBusiness Platform
                            </h3>
                            <p className={classes.cardSubtitle}>Fuel for Experiences</p>
                        </div>

                        <ul className={classes.list}>
                            {utilityItems.map((item, i) => (
                                <li key={i} className={classes.listItem}>
                                    <div className={classes.dot} style={{ backgroundColor: '#333333' }} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://transparentbusiness.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.button}
                            style={{ backgroundColor: '#333333' }}
                        >
                            View Utility Platform
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenSection;
