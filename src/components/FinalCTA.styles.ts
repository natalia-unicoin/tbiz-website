import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '160px',
        paddingBottom: '160px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.1)', // Subtler border
        backgroundColor: theme.palette.primary.main, // Fallback if image fails
    },
    bgImage: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        backgroundColor: 'rgba(14, 26, 43, 0.5)', // Reduced overlay opacity to make image more visible
    },
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        position: 'relative',
        zIndex: 2,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    title: {
        lineHeight: '1.1',
        fontWeight: 700,
        marginBottom: theme.spacing(3),
        letterSpacing: '-0.03em',
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '44px',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        },
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: '18px',
        lineHeight: '1.6',
        color: 'rgba(255, 255, 255, 0.9)', // Clean white with slight transparency
        maxWidth: '700px',
        margin: '0 auto',
        marginBottom: theme.spacing(8),
        fontWeight: 700,
        [theme.breakpoints.up('md')]: {
            fontSize: '24px',
        }
    },
    button: {
        display: 'inline-block',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : theme.palette.secondary.main,
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : theme.palette.secondary.contrastText,
        border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
        backdropFilter: theme.palette.mode === 'dark' ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: theme.palette.mode === 'dark' ? 'blur(16px)' : 'none',
        padding: '20px 48px',
        borderRadius: '9999px', // Pill shape
        fontSize: '16px',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: theme.palette.mode === 'dark' ? '0 0 30px rgba(6, 182, 212, 0.4)' : '0 0 30px rgba(255,255,255,0.3)',
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : undefined,
        }
    },
    bgAccent: {
        display: 'none', // Hide radial gradient since we are using image + overlay
    }
}));
