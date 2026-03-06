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

const getPalette = () => {
    return {
        mode: 'light' as const,
        primary: { main: '#0B1026' }, // Dark from user
        secondary: { main: '#2D6BFF', contrastText: '#FFFFFF' }, // Accent Blue
        success: { main: '#0B1026' },
        info: { main: '#FCD144' }, // Accent Yellow
        warning: { main: '#FCD144' },
        background: { default: '#FFFFFF', paper: '#F7F9FC' }, // Neutrals
        text: { primary: '#0B1026', secondary: '#4B5563' }, // Dark text
    };
};

const getTheme = () => createTheme({
    palette: getPalette(),
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-1px',
        },
        h2: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-1px',
        },
        h3: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-1px',
        },
        h4: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-1px',
        },
        h5: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-1px',
        },
        h6: {
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-1px',
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
