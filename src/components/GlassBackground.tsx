'use client';

import React from 'react';
import { useThemeContext } from '@/context/ThemeContext';
import { Box } from '@mui/material';

const GlassBackground = () => {
    const { activeTheme } = useThemeContext();

    if (activeTheme !== 'glass') return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: -1, // Behind all content
                overflow: 'hidden',
                background: '#0B1426', // Base deep TBIZ Navy
                pointerEvents: 'none',
            }}
        >
            {/* Luminous Orbs for Mesh Gradient Effect */}
            <Box sx={{
                position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw',
                background: 'radial-gradient(circle, rgba(0, 158, 227, 0.3) 0%, rgba(0,0,0,0) 70%)', // Azure
                filter: 'blur(80px)', animation: 'floatOrb 10s infinite alternate ease-in-out'
            }} />
            <Box sx={{
                position: 'absolute', top: '30%', right: '-15%', width: '45vw', height: '45vw',
                background: 'radial-gradient(circle, rgba(10, 51, 124, 0.35) 0%, rgba(0,0,0,0) 70%)', // TBIZ Deep Blue
                filter: 'blur(80px)', animation: 'floatOrb 12s infinite alternate-reverse ease-in-out'
            }} />
            <Box sx={{
                position: 'absolute', bottom: '-20%', left: '15%', width: '60vw', height: '60vw',
                background: 'radial-gradient(circle, rgba(42, 75, 106, 0.25) 0%, rgba(0,0,0,0) 70%)', // TBIZ Complement
                filter: 'blur(100px)', animation: 'floatOrb 14s infinite alternate ease-in-out'
            }} />
            <Box sx={{
                position: 'absolute', top: '60%', left: '40%', width: '30vw', height: '30vw',
                background: 'radial-gradient(circle, rgba(252, 209, 68, 0.12) 0%, rgba(0,0,0,0) 70%)', // TBIZ Yellow (Subtle)
                filter: 'blur(60px)', animation: 'floatOrb 8s infinite alternate ease-in-out'
            }} />
            <style>{`
                @keyframes floatOrb {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(30px, -50px) scale(1.1); }
                }
            `}</style>
        </Box>
    );
};

export default GlassBackground;
