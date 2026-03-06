'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './TokenDetails.styles';
import { getImagePath } from '@/utils/image';

const TokenDetails = () => {
    const { classes } = useStyles();

    const details = [
        {
            label: "Token Name",
            value: "TransparentBusiness",
            type: "text"
        },
        {
            label: "Network",
            value: "Ethereum",
            type: "logo",
            logo: getImagePath("assets/ethereum-logo.png") // We might need to generate or ensure this exists
        },
        {
            label: "Ticker",
            value: "TB",
            type: "text"
        },
        {
            label: "Contract Address",
            value: "0xF12Cbb0B9a0Bcc6Fc6782775f513beE049516Ac9",
            type: "address"
        },
        {
            label: "Security Audit",
            value: "Cyberscope",
            type: "logo",
            logo: getImagePath("assets/cyberscope-logo.png")
        },
        {
            label: "Contract Code",
            value: "GitHub",
            type: "logo",
            logo: getImagePath("assets/github-logo.png")
        }
    ];

    return (
        <section id="token-details" className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={classes.title}
                    >
                        Designed for<br />Growth
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={classes.description}
                    >
                        The security token is engineered for long-term value creation.
                        Designed under the ERC-20 standard and built on the Ethereum blockchain,
                        it enables seamless integration, security, and global reach.
                        TransparentBusiness Foundation plans to deploy its own blockchain more scalable
                        and efficient than Bitcoin.
                    </motion.p>
                </div>

                <div className={classes.grid}>
                    {details.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={classes.card}
                        >
                            <span className={classes.label}>{item.label}</span>

                            {item.type === "text" && (
                                <h3 className={classes.value}>{item.value}</h3>
                            )}

                            {item.type === "address" && (
                                <p className={classes.address}>{item.value}</p>
                            )}

                            {(item.type === "logo" || item.type === "image") && (
                                <>
                                    <img
                                        src={item.logo}
                                        alt={item.value}
                                        className={classes.logo}
                                        onError={(e) => {
                                            // Fallback for missing logos
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                    <h3 className={classes.value}>{item.value}</h3>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TokenDetails;
