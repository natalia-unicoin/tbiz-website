import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    wrapper: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        color: '#0B1026',
        overflow: 'hidden',
    },
    sectionBlock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Long scroll Apple-style
        padding: theme.spacing(12, 4),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(16, 8),
        }
    },
    bgGrayLight: {
        backgroundColor: '#F7F9FC', // Alternating background
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        gap: theme.spacing(8),
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            gap: theme.spacing(12),
            justifyContent: 'space-between',
        }
    },
    rowNormal: {
        // Default L-R flow
    },
    rowReverse: {
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row-reverse',
        }
    },
    colNormal: {
        flexDirection: 'column !important' as any,
        textAlign: 'center',
    },
    textContent: {
        flex: 1,
        maxWidth: '800px', // increased from 600px to give centered text more room
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // added center alignment explicitly
        textAlign: 'center', // explicitly Center
        zIndex: 2,
        margin: '0 auto', // ensure block is centered
    },
    textContentCenter: {
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '800px',
    },
    visualContent: {
        flex: 1,
        width: '100%',
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: theme.shadows[20], // Premium shadow
        aspectRatio: '4/3', // Make images large and standard ratio
        [theme.breakpoints.up('lg')]: {
            maxWidth: '55%',
        }
    },
    visualContentWide: {
        aspectRatio: '16/9',
        maxWidth: '1200px !important',
        marginTop: theme.spacing(6),
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
        fontSize: 'clamp(2.625rem, 5.25vw, 4.5rem) !important',
        textAlign: 'center !important' as any,
        color: '#111827', // Very dark gray for premium contrast
        textWrap: 'balance',
    },
    description: {
        fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)',
        color: '#4B5563', // Slightly lighter gray for body
        lineHeight: 1.6,
        textWrap: 'balance',
        fontWeight: 400,
    },
    ctaContainer: {
        marginTop: theme.spacing(6),
        display: 'flex',
    },
    ctaButton: {
        backgroundColor: theme.palette.info.main,
        color: '#0B1026',
        padding: '16px 40px',
        borderRadius: '40px',
        fontWeight: 700,
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textDecoration: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-block',
        transition: 'all 0.3s ease',
        boxShadow: theme.shadows[4],
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: theme.shadows[8],
            backgroundColor: '#e6bd3c',
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
        maxWidth: '800px',
        textAlign: 'center',
        padding: theme.spacing(8),
        borderRadius: '24px',
        backgroundColor: '#F9FAFB', // Very subtle gray
        border: '1px solid #F3F4F6',
    },
    titleSmall: {
        fontFamily: theme.typography.h2.fontFamily,
        fontWeight: 700,
        fontSize: '32px',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            fontSize: '40px',
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
