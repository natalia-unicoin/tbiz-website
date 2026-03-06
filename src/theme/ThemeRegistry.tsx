'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import getTheme from './theme';
import { useThemeContext } from '@/context/ThemeContext';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const { activeTheme } = useThemeContext();
    const currentTheme = React.useMemo(() => getTheme(activeTheme), [activeTheme]);

    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={currentTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
