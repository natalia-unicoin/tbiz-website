import { createTheme } from '@mui/material/styles';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

const montserrat = Montserrat({
    weight: ['700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
});

import { ThemeMode } from '@/context/ThemeContext';

const getPalette = (mode: ThemeMode) => {
    switch (mode) {
        case 'safebets': // This acts as TBIZ 2 now
            return {
                mode: 'light' as const,
                primary: { main: '#10141E' }, // Darkest Navy/Black from image
                secondary: { main: '#009EE3', contrastText: '#FFFFFF' }, // Azure CTA
                success: { main: '#10141E' },
                info: { main: '#FCD144' }, // Requested Gold/Yellow mapped to UI accents
                warning: { main: '#0A337C' }, // Deep Blue from image
                background: { default: '#FFFFFF', paper: '#F9F9F9' }, // Light Gray from palette
                text: { primary: '#10141E', secondary: '#0A337C' }, // Deep blue for secondary text
            };
        case 'glass':
            return {
                mode: 'light' as const, // Switched to light mode Apple style
                primary: { main: '#111827' }, // Dark text for primary brand
                secondary: { main: '#009EE3' },
                success: { main: '#111827' },
                info: { main: '#FCD144' },
                warning: { main: '#0A337C' },
                background: { default: '#FFFFFF', paper: 'rgba(255, 255, 255, 0.7)' }, // Bright white environments
                text: { primary: '#111827', secondary: '#4B5563' }, // High contrast dark text
            };
        case 'tbiz':
        default:
            return {
                mode: 'light' as const,
                primary: { main: '#0E1A2B' }, // Darkest Blue/Black (assumed from first card background)
                secondary: { main: '#FCD144', contrastText: '#0E1A2B' }, // Yellow Accent with forced dark text
                success: { main: '#0E1A2B' },
                info: { main: '#2A4B6A' }, // Dark Blue Complement
                warning: { main: '#FCD144' },
                background: { default: '#FFFFFF', paper: '#FAFBFC' }, // Off-white for paper
                text: { primary: '#0E1A2B', secondary: '#2A4B6A' },
            };
    }
};

const getTheme = (mode: ThemeMode) => createTheme({
    palette: getPalette(mode),
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-1px',
            textTransform: 'capitalize',
        },
        h2: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-1px',
            textTransform: 'capitalize',
        },
        h3: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-1px',
            textTransform: 'capitalize',
        },
        h4: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-1px',
            textTransform: 'capitalize',
        },
        h5: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-1px',
            textTransform: 'capitalize',
        },
        h6: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-1px',
            textTransform: 'capitalize',
        },
        body1: {
            fontFamily: inter.style.fontFamily,
            fontSize: '18px',
            lineHeight: 1.6,
        },
        body2: {
            fontFamily: inter.style.fontFamily,
            fontSize: '18px',
            lineHeight: 1.6,
        },
        subtitle1: {
            fontFamily: inter.style.fontFamily,
            fontSize: '18px',
            lineHeight: 1.6,
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                h1, h2, h3, h4, h5, h6 {
                    font-family: ${montserrat.style.fontFamily} !important;
                    font-weight: 700 !important;
                    letter-spacing: -1px !important;
                    text-transform: capitalize !important;
                }
            `,
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    padding: '12px 24px',
                },
            },
        },
    },
});

export default getTheme;
