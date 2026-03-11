import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    wrapper: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        color: '#0B1026',
        overflow: 'hidden',
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        padding: theme.spacing(12, 4),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(16, 8),
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1000px', // Constrain width for readable text lines
        margin: '0 auto',
        gap: theme.spacing(8),
    },
    textContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 2,
    },
    visualContent: {
        width: '100%',
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: theme.shadows[20],
        aspectRatio: '16/9', // Universal wide ratio for all timeline blocks
        maxWidth: '1000px',
    },
    largeImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'transform 0.7s ease',
        '&:hover': {
            transform: 'scale(1.03)',
        }
    },
    eyebrow: {
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        color: '#9CA3AF',
        marginBottom: theme.spacing(3),
        display: 'block',
    },
    title: {
        fontFamily: "'Montserrat', sans-serif !important",
        fontWeight: '700 !important' as any,
        letterSpacing: '-0.02em !important',
        marginBottom: theme.spacing(4),
        lineHeight: 1.1,
        fontSize: '44px !important',
        textAlign: 'center !important' as any,
        color: '#111827', // Very dark gray for premium contrast
        textWrap: 'balance',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px !important',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px !important',
        }
    },
    description: {
        fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)',
        color: '#4B5563', // Slightly lighter gray for body
        lineHeight: 1.6,
        textWrap: 'balance',
        fontWeight: 400,
    },
    ctaContainer: {
        marginTop: theme.spacing(5),
        display: 'flex',
        justifyContent: 'center',
    },
    ctaButton: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: 700,
        fontSize: '0.875rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: '#111827', // Dark text as requested
        backgroundColor: '#FCD144', // Main yellow
        padding: '16px 36px',
        borderRadius: '40px',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        fontFamily: "'Inter', sans-serif !important",
        boxShadow: '0 4px 14px rgba(252, 209, 68, 0.4)',
        cursor: 'pointer',
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(252, 209, 68, 0.6)',
            backgroundColor: '#EBE563' // Slightly lighter hover
        },
        '& svg': {
            transition: 'transform 0.3s ease'
        },
        '&:hover svg': {
            transform: 'translateX(4px)'
        }
    },

    // War on Crypto section styles
    warSection: {
        padding: theme.spacing(12, 4),
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        borderTop: '1px solid #E5E7EB',
    },
    warContainer: {
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center',
        padding: theme.spacing(6), // Reduced outer padding to give cards room
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(10), // Desktop padding
        }
    },
    warGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr', // Mobile: 1 column
        gap: theme.spacing(3),
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)', // Desktop: 3 columns
            gap: theme.spacing(4),
        }
    },
    warCard: {
        backgroundColor: '#F9FAFB', // Very subtle gray
        border: '1px solid #F3F4F6',
        borderRadius: '24px',
        padding: theme.spacing(5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
        }
    },
    titleSmall: {
        fontFamily: theme.typography.h2.fontFamily,
        fontWeight: 700,
        fontSize: '44px',
        lineHeight: 1.1,
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        },
        color: '#111827',
    },
    descriptionSmall: {
        fontSize: '1.125rem',
        color: '#6B7280',
        lineHeight: 1.5,
        marginBottom: theme.spacing(4),
        maxWidth: '600px',
        margin: '0 auto',
        paddingBottom: theme.spacing(4),
    },
    ctaButtonOutline: {
        display: 'inline-block',
        padding: '12px 32px',
        borderRadius: '40px',
        border: '2px solid #111827',
        color: '#111827',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#111827',
            color: '#FFFFFF',
        }
    }
}));
