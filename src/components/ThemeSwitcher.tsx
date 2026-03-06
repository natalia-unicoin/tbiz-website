'use client';

import React from 'react';
import { useThemeContext, ThemeMode } from '@/context/ThemeContext';
import { Box, Button, Typography, Paper } from '@mui/material';

const ThemeSwitcher = () => {
    const { activeTheme, setTheme } = useThemeContext();

    const themes: { id: ThemeMode; label: string; color: string }[] = [
        { id: 'tbiz', label: 'TBIZ 1', color: '#FCD144' },
        { id: 'safebets', label: 'TBIZ 2', color: '#009EE3' },
        { id: 'glass', label: 'TBIZ LIQUID GLASS', color: '#06b6d4' } // Cyan dot
    ];

    return (
        <Paper
            elevation={4}
            sx={{
                position: 'fixed',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 99999, // Ensure it is above the navbar
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 1.5,
                borderRadius: '0 0 16px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0,0,0,0.05)',
                borderTop: 'none',
            }}
        >
            <Typography variant="caption" sx={{ fontWeight: 700, color: '#000' }}>
                PALETTES (TESTING):
            </Typography>
            {themes.map((t) => (
                <Button
                    key={t.id}
                    size="small"
                    onClick={() => setTheme(t.id)}
                    sx={{
                        textTransform: 'none',
                        fontWeight: activeTheme === t.id ? 800 : 500,
                        backgroundColor: activeTheme === t.id ? '#000' : 'transparent',
                        color: activeTheme === t.id ? '#FFF' : '#333',
                        border: `2px solid ${activeTheme === t.id ? '#000' : 'transparent'}`,
                        borderRadius: '20px',
                        py: 0.5,
                        px: 1.5,
                        '&:hover': {
                            backgroundColor: activeTheme === t.id ? '#000' : 'rgba(0,0,0,0.05)',
                        }
                    }}
                >
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: t.color, mr: 1 }} />
                    {t.label}
                </Button>
            ))}
        </Paper>
    );
};

export default ThemeSwitcher;
