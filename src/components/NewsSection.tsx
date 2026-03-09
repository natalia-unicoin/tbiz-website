'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getImagePath } from '@/utils/image';

const categories = ["All", "TransparentBusiness", "Unicoin", "Unicorn Hunters", "SheWorks!"];

const MOCK_NEWS = [
    {
        id: 1,
        category: "TransparentBusiness",
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        author: "Lorem Ipsum",
        image: getImagePath('assets/tbiz-poster.jpg')
    },
    {
        id: 2,
        category: "Unicoin",
        title: "Ut enim ad minim veniam quis nostrud exercitation",
        excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        author: "Dolor Sit",
        image: getImagePath('assets/unicoin-poster.jpg')
    },
    {
        id: 3,
        category: "Unicorn Hunters",
        title: "Excepteur sint occaecat cupidatat non proident",
        excerpt: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.",
        author: "Amet Consectetur",
        image: getImagePath('assets/unicorn-hunters-poster.jpg')
    },
    {
        id: 4,
        category: "SheWorks!",
        title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        excerpt: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        author: "Adipiscing Elit",
        image: getImagePath('assets/sheworks-poster.jpg')
    }
];

const NewsSection = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredNews = MOCK_NEWS.filter(
        item => activeFilter === "All" || item.category === activeFilter
    );

    return (
        <section style={{ backgroundColor: '#F9FAFB', padding: '120px 24px', borderTop: '1px solid #E5E7EB' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>
                        Latest from the Ecosystem
                    </h2>
                    <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
                        Explore recent news, milestones, and announcements across all our platforms.
                    </p>
                </div>

                {/* Filter Bar */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '12px',
                    marginBottom: '48px'
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            style={{
                                padding: '10px 24px',
                                borderRadius: '30px',
                                border: 'none',
                                backgroundColor: activeFilter === cat ? '#111827' : '#F3F4F6',
                                color: activeFilter === cat ? '#FFFFFF' : '#111827',
                                fontSize: '11px',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* News Grid Container */}
                <div className="news-grid">
                    <style>
                        {`
                            .news-grid {
                                display: grid;
                                grid-template-columns: 1fr;
                                gap: 32px;
                            }
                            @media (min-width: 768px) {
                                .news-grid {
                                    grid-template-columns: repeat(2, 1fr);
                                }
                            }
                            @media (min-width: 1024px) {
                                .news-grid {
                                    grid-template-columns: repeat(4, 1fr);
                                }
                            }
                        `}
                    </style>
                    <AnimatePresence mode="popLayout">
                        {filteredNews.map((news) => (
                            <motion.article
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                key={news.id}
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid #F3F4F6',
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Top Image */}
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '16/9',
                                    backgroundImage: `url(${news.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                        color: '#111827',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        padding: '4px 10px',
                                        borderRadius: '12px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {news.category}
                                    </span>
                                </div>

                                {/* Content Box */}
                                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        color: '#111827',
                                        marginBottom: '12px',
                                        lineHeight: 1.3
                                    }}>
                                        {news.title}
                                    </h3>
                                    <p style={{
                                        color: '#6B7280',
                                        fontSize: '15px',
                                        lineHeight: 1.6,
                                        marginBottom: '24px',
                                        flex: 1
                                    }}>
                                        {news.excerpt}
                                    </p>

                                    {/* Author / Footer */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        borderTop: '1px solid #F3F4F6',
                                        paddingTop: '16px'
                                    }}>
                                        <div style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            backgroundColor: '#E5E7EB',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 700,
                                            color: '#9CA3AF',
                                            fontSize: '12px'
                                        }}>
                                            {news.author.charAt(0)}
                                        </div>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>
                                            by {news.author}
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
