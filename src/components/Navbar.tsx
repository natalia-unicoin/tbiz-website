'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from "next/link";
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './Navbar.styles';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const { classes, cx } = useStyles({ isScrolled });
    const { openJoinModal } = useModal();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        // Handle scroll state for transparency
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Handle hidden/visible state for nav bar behavior
        if (previous && latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setExpandedItem(null); // Reset expansion on close
    };

    const toggleAccordion = (title: string) => {
        if (expandedItem === title) {
            setExpandedItem(null);
        } else {
            setExpandedItem(title);
        }
    };

    const menuLinks = [
        { title: "About", href: "#about" },
        { title: "Digital Asset Treasury", href: "#treasury" },
        { title: "Financials", href: "#financials" },
        { title: "Strategy", href: "#strategy" },
        { title: "News & Press", href: "#media" },
        { title: "Investor Relations", href: "#investors" },
        { title: "Legal", href: "#legal" },
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={classes.nav}
            >
                <div className={classes.container}>
                    {/* Logo */}
                    <Link href="/" className={classes.logoLink}>
                        <img
                            src={getImagePath(isScrolled ? "assets/logo-tb-black.png" : "assets/logo-tb-white.png")}
                            alt="TransparentBusiness Logo"
                            className={classes.isotypeImage}
                        />
                    </Link>

                    <div className={classes.controls}>
                        {/* Dummy Language Selector */}
                        <div className={classes.langSelector}>
                            <span className={classes.langActive}>EN</span>
                            <span style={{ color: isScrolled ? '#DDD' : 'rgba(255,255,255,0.3)' }}>|</span>
                            <span className={classes.langInactive}>ES</span>
                        </div>

                        {/* Menu Button */}
                        <div className={classes.menuButtonWrapper}>
                            <button
                                onClick={toggleMenu}
                                className={classes.menuButton}
                            >
                                <span className={classes.menuLabel}>Menu</span>
                                <svg className={classes.menuIconMobile} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                                </svg>
                            </button>
                        </div>

                        {/* Join Now Button */}
                        <button
                            onClick={openJoinModal}
                            className={classes.joinButton}
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile/Desktop Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className={classes.backdrop}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.4, ease: "circOut" }}
                            className={classes.drawer}
                        >
                            {/* Close Button */}
                            <div className={classes.closeButtonWrapper}>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className={classes.closeButton}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#1f1f1f">
                                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                    </svg>
                                </button>
                            </div>

                            <div className={classes.menuLogo}>
                                <Link href="/" onClick={() => setIsMenuOpen(false)} className={classes.logoLink}>
                                    <img src={getImagePath('assets/logo-tb-black.png')} alt="TransparentBusiness" className={classes.isotypeImageMobile} />
                                </Link>
                            </div>

                            {/* Links */}
                            <div className={classes.linksContainer}>
                                {menuLinks.map((link, index) => (
                                    <div key={link.title} className="w-full">
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={classes.menuLinkItem}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                                className={classes.mainLinkButton}
                                            >
                                                <span className={classes.mainLinkTextWrapper}>
                                                    {link.title}
                                                </span>
                                            </motion.div>
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Links & Socials */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className={classes.menuFooter}
                            >
                                <div className={classes.footerContent}>
                                    <div className="flex gap-8">
                                        <a href="#" className={classes.contactLink}>Contact</a>
                                    </div>

                                    {/* Social Icons */}
                                    <div className={classes.socialIcons}>
                                        <a href="https://www.instagram.com/unicoininc/" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                        </a>
                                        <a href="https://www.linkedin.com/company/unicoininc/" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        </a>
                                        <a href="https://x.com/unicoininc" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                        </a>
                                        <a href="https://vimeo.com/unicoininc" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.396 7.158c-.093 2.026-1.507 4.799-4.245 8.319-2.84 3.653-5.228 5.48-7.16 5.48-1.2 0-2.214-1.107-3.041-3.321-.554-2.031-1.108-4.062-1.662-6.09-.616-2.217-1.272-3.326-1.967-3.326-.148 0-.665.311-1.551.933l-.924-1.185c.983-.861 1.954-1.731 2.91-2.61 1.321-1.173 2.316-1.791 2.986-1.854 1.57-.148 2.536.927 2.898 3.226.402 2.531.681 4.102.836 4.71.394 1.847.818 2.77 1.276 2.77.338 0 .903-.541 1.693-1.62.791-1.079 1.222-1.902 1.293-2.468.141-1.144-.333-1.717-1.423-1.717-.504 0-1.025.114-1.562.343 1.033-3.385 3.012-4.996 5.94-4.832 2.169.123 3.109 1.488 2.819 4.093z" /></svg>
                                        </a>
                                        <a href="https://www.youtube.com/c/UnicoinInc" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )
                }
            </AnimatePresence>
        </>
    );
};

export default Navbar;
