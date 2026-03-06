import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        backgroundColor: 'transparent', // Clean architectural look
        color: '#111827', // Dark contrast for light mode if applicable, but we'll use white for dark mode context often
        padding: '120px 0', // Strict 120px padding
        width: '100%',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: theme.spacing(0, 3),
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(0, 6),
            maxWidth: '1440px',
        }
    },
    header: {
        marginBottom: theme.spacing(8),
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '900px',
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(12),
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        fontSize: '2.5rem',
        fontWeight: 700,
        letterSpacing: '-1px', // Updated to -1px as per global rules
        lineHeight: 1.1,
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : theme.palette.text.primary, // Adapt to light/dark palettes
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem',
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '40px', // Mobile gap
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '64px', // Required 64px gap
        }
    },
    card: {
        backgroundColor: 'transparent',
        border: 'none',
        padding: '0', // Let the grid handle spacing, clean architectural look
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center', // Center content within cell
        textAlign: 'center',
        position: 'relative',
        transition: 'none', // Remove animations
    },
    statValue: {
        display: 'block', // Force line break
        width: '100%',
        fontSize: '56px', // Mobile size
        fontWeight: 700, // Bold Montserrat
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : theme.palette.text.primary,
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        lineHeight: 1,
        marginBottom: '24px', // Generous spacing
        letterSpacing: '-2px', // Required -2px spacing
        [theme.breakpoints.up('md')]: {
            fontSize: '88px', // Desktop 88px minimum
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '104px', // Desktop 104px maximum
        }
    },
    statDescription: {
        fontSize: '18px',
        fontWeight: 500, // Medium Inter
        fontFamily: theme.typography.body1.fontFamily, // Inter
        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary,
        lineHeight: 1.5,
        maxWidth: '320px', // Keep text readable
        textAlign: 'center',
    }

}));
