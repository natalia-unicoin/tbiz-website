import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.main, // Fallback for video
        color: '#FFFFFF', // White for video context
    },
    bgWrapper: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        backgroundColor: '#0F1626',
        backgroundImage: 'url("/assets/poised-bg.jpg")', // Using an existing asset as placeholder for abstract visual
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax effect
    },
    videoBackground: {
        display: 'none',
    },
    videoOverlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(14, 26, 43, 0.7)', // Slightly darker overlay for better text contrast
        zIndex: 1,
    },
    content: {
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0', // Adjusted from 5rem
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        fontWeight: '700 !important' as any,
        letterSpacing: '-0.02em !important',
        marginBottom: theme.spacing(1),
        color: '#FFFFFF', // White for video
        fontSize: '40px', // Reverted to 40px for mobile safety
        lineHeight: '1',
        textAlign: 'center !important' as any,
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '84px',
        },
        textWrap: 'balance',
    },
    subtitle: {
        fontSize: '1.125rem', // Reduced from 1.25rem for mobile
        fontWeight: 600,
        letterSpacing: '0',
        color: '#FFFFFF', // White for video
        marginBottom: theme.spacing(6), // Increased from 2 to give space before CTA
        lineHeight: 1.2,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.75rem',
        },
        textWrap: 'balance',
    },
    description: {
        fontSize: '1rem',
        fontWeight: 300,
        lineHeight: 1.6,
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(4),
        color: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem',
        }
    },
    ctaContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    ctaButton: {
        backgroundColor: theme.palette.info.main, // #FCD144
        color: '#0B1026',
        border: 'none',
        padding: '16px 32px', // px-8 py-4
        borderRadius: '9999px', // Pill shape
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        letterSpacing: '0.1em', // tracking-widest
        textTransform: 'uppercase',
        cursor: 'pointer',
        boxShadow: theme.shadows[10], // shadow-xl approximately
        transition: 'all 0.3s',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 30px rgba(252, 209, 68, 0.4)',
            backgroundColor: '#e6bd3c',
        },
        [theme.breakpoints.up('md')]: {
            padding: '20px 40px', // px-10 py-5
            fontSize: '1rem', // text-base
        }
    },
    watermark: {
        position: 'absolute',
        bottom: theme.spacing(4), // bottom-8
        right: theme.spacing(4), // right-8
        zIndex: 20,
        display: 'none', // Hidden as per requirement
    },
    modalBackdrop: {
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 100,
        backdropFilter: 'blur(8px)', // Apple-style frost
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(3),
    },
    modalContent: {
        backgroundColor: theme.palette.background.paper, // Use dynamic paper instead of #FFFFFF
        borderRadius: '30px', // Match the rest of the cards
        padding: theme.spacing(5),
        maxWidth: '700px',
        width: '100%',
        position: 'relative',
        boxShadow: theme.shadows[24],
        textAlign: 'left',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(8),
        }
    },
    modalCloseButton: {
        position: 'absolute',
        top: theme.spacing(3),
        right: theme.spacing(3),
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: theme.spacing(1),
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.text.secondary,
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : theme.palette.grey[100],
            color: theme.palette.text.primary,
        },
        [theme.breakpoints.up('md')]: {
            top: theme.spacing(4),
            right: theme.spacing(4),
        }
    },
    modalTitle: {
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '1.5rem',
        fontWeight: 700,
        letterSpacing: '-0.03em', // Typical Apple formatting
        marginBottom: theme.spacing(3),
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        }
    },
    modalText: {
        fontFamily: "'Inter', sans-serif",
        fontSize: '1rem',
        lineHeight: 1.8,
        fontWeight: 400,
        color: theme.palette.text.secondary,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        }
    }
}));
