import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper, // Use default dark bg instead of transparent
        color: theme.palette.text.primary, // Dark text for contrast
        padding: theme.spacing(8, 0),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(16, 0),
        }
    },
    bgImage: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        pointerEvents: 'none',
        display: theme.palette.mode === 'dark' ? 'none' : 'block',
    },
    container: {
        position: 'relative',
        zIndex: 1,
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
    eyebrow: {
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        fontWeight: 500, // Medium 
        fontSize: '14px',
        letterSpacing: '2px', // +2 letter spacing
        textTransform: 'uppercase',
        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(17, 24, 39, 0.7)', // 70% opacity
        marginBottom: '24px', // Space below
        display: 'block', // Ensure it sits on its own line
        [theme.breakpoints.up('md')]: {
            fontSize: '16px',
            marginBottom: '32px', // 24-32px requested
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        fontSize: '44px',
        fontWeight: 700, // Bold
        letterSpacing: '-0.03em', // Typical bold tracking
        lineHeight: 1.1,
        marginBottom: theme.spacing(3),
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        }
    },
    subtitle: {
        fontSize: '1.25rem',
        lineHeight: 1.5,
        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : theme.palette.grey[700],
        maxWidth: '800px',
        margin: '0 auto',
        fontWeight: 700,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(4), // Mobile
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '64px', // Strict 64px desktop gap
        }
    },
    bentoCard: {
        position: 'relative',
        backgroundColor: '#FFFFFF', // Strict institutional white
        border: '1px solid #E5E7EB', // Subtle dividing line
        borderRadius: '8px', // Max 8px radius
        padding: '48px', // Strict 48px padding
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 0, // We control gap carefully per element now
        overflow: 'hidden',
        transition: 'none', // Removed SaaS hover
        '&:hover': {
            transform: 'none',
            boxShadow: 'none',
            backgroundColor: '#FFFFFF',
        },
    },
    cardNumber: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(3),
        fontSize: '4rem',
        fontWeight: 800,
        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(35, 39, 51, 0.03)', // Lighten in dark mode
        fontFamily: theme.typography.h1.fontFamily,
        pointerEvents: 'none',
        lineHeight: 1,
        [theme.breakpoints.up('md')]: {
            fontSize: '6rem',
            top: theme.spacing(3),
            right: theme.spacing(4),
        }
    },
    colTitle: {
        fontSize: '24px',
        fontWeight: 600, // SemiBold
        color: '#111827', // Institutional dark text
        textTransform: 'none', // Remove capitalize restriction if it was there
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        marginBottom: '24px', // Strict 24px space below
        position: 'relative',
        zIndex: 2,
        [theme.breakpoints.up('md')]: {
            fontSize: '28px',
        }
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px', // Strict 24px gap between bullets
        position: 'relative',
        zIndex: 2,
    },
    listItem: {
        fontSize: '16px', // Inter Regular 16-18px
        color: '#374151', // Content text color
        fontFamily: theme.typography.body1.fontFamily, // Inter
        fontWeight: 400, // Regular
        lineHeight: 1.5,
        display: 'flex',
        alignItems: 'flex-start',
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
        }
    }
}));
