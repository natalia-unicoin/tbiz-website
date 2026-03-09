'use client';

import React from 'react';
import { getImagePath } from '@/utils/image';
import { useStyles } from './Footer.styles';

const Footer = () => {
    const { classes } = useStyles();
    const navItems = [
        { label: "Strategy", href: "#strategy" },
        { label: "Media", href: "#media" },
        { label: "Legal", href: "#legal" },
        { label: "Contact", href: "#contact" }
    ];

    const legalLinks = [
        "Privacy Policy",
        "Terms of Use",
        "Forward-Looking Statements",
        "Risk Disclosures",
        "Compliance Statements"
    ];

    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.mainGrid}>
                    {/* Brand Column */}
                    <div className={classes.brandColumn}>
                        <div className={classes.logoWrapper}>
                            <img src={getImagePath("assets/tbiz-logo-black.svg")} alt="TransparentBusiness Logo" className={classes.isotypeImage} />
                        </div>
                        <p className={classes.description}>
                            A Transparent Institutional Platform for the Next Era of Digital Asset Governance.
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    <div className={classes.linksColumnFirst}>
                        <h4 className={classes.columnTitle}>Platform</h4>
                        <ul className={classes.linkList}>
                            <li><a href="#strategy" className={classes.linkItem}>Strategy</a></li>
                            <li><a href="#media" className={classes.linkItem}>Media</a></li>
                        </ul>
                    </div>

                    <div className={classes.linksColumnSecond}>
                        <h4 className={classes.columnTitle}>Company</h4>
                        <ul className={classes.linkList}>
                            <li><a href="#legal" className={classes.linkItem}>Legal</a></li>
                            <li><a href="#contact" className={classes.linkItem}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div className={classes.socialColumn}>
                        <h4 className={classes.columnTitle}>Connect</h4>
                        <div className={classes.socialWrapper}>
                            <a href="https://www.instagram.com/unicoininc/" target="_blank" rel="noopener noreferrer" className={`${classes.socialIcon} group`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/unicoininc/" target="_blank" rel="noopener noreferrer" className={`${classes.socialIcon} group`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="https://x.com/unicoininc" target="_blank" rel="noopener noreferrer" className={`${classes.socialIcon} group`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://vimeo.com/unicoininc" target="_blank" rel="noopener noreferrer" className={`${classes.socialIcon} group`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.396 7.158c-.093 2.026-1.507 4.799-4.245 8.319-2.84 3.653-5.228 5.48-7.16 5.48-1.2 0-2.214-1.107-3.041-3.321-.554-2.031-1.108-4.062-1.662-6.09-.616-2.217-1.272-3.326-1.967-3.326-.148 0-.665.311-1.551.933l-.924-1.185c.983-.861 1.954-1.731 2.91-2.61 1.321-1.173 2.316-1.791 2.986-1.854 1.57-.148 2.536.927 2.898 3.226.402 2.531.681 4.102.836 4.71.394 1.847.818 2.77 1.276 2.77.338 0 .903-.541 1.693-1.62.791-1.079 1.222-1.902 1.293-2.468.141-1.144-.333-1.717-1.423-1.717-.504 0-1.025.114-1.562.343 1.033-3.385 3.012-4.996 5.94-4.832 2.169.123 3.109 1.488 2.819 4.093z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/c/UnicoinInc" target="_blank" rel="noopener noreferrer" className={`${classes.socialIcon} group`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Brand Strip / Bottom Bar */}
                <div className={classes.bottomBar}>
                    <div className={classes.legalLinksBar}>
                        {legalLinks.map((link, idx) => (
                            <React.Fragment key={idx}>
                                <a href="#" className={classes.bottomLegalLink}>{link}</a>
                                {idx < legalLinks.length - 1 && (
                                    <span className={classes.legalSeparator}>•</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className={classes.tagline}>
                        <span>Built on Stability</span>
                        <span className={classes.separator}>|</span>
                        <span>Powered by Innovation</span>
                        <span className={classes.separator}>|</span>
                        <span>Designed for the Modern Investor</span>
                    </div>

                    <div className={classes.copyright}>
                        &copy; 2026 <span className={classes.copyrightBrand}>TransparentBusiness Inc.</span> All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
