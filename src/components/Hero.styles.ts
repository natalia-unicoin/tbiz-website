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
        backgroundImage: 'url("/assets/box-placeholder.jpg")', // Matching the user's abstract blue visual
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
        fontFamily: "'Montserrat', sans-serif !important",
        fontWeight: '700 !important' as any,
        letterSpacing: '-0.02em !important',
        marginBottom: theme.spacing(1),
        color: '#FFFFFF', // White for video
        fontSize: 'clamp(3rem, 8vw, 7rem) !important', // ~48px to 112px
        lineHeight: '1',
        textAlign: 'center !important' as any,
        textWrap: 'balance',
    },
    subtitle: {
        fontSize: '1.125rem', // Reduced from 1.25rem for mobile
        fontWeight: 600,
        letterSpacing: '0',
        color: '#FFFFFF', // White for video
        marginBottom: theme.spacing(12), // Dramatically increased to separate the button
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
        backgroundColor: '#FCD144',
        color: '#111827', // Very dark text
        fontWeight: '700 !important' as any,
        fontSize: '15px',
        padding: '16px 36px',
        borderRadius: '30px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif !important",
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transition: 'left 0.5s ease',
        },
        '&:hover': {
            backgroundColor: '#EBE563', // Slightly lighter highlight
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(252, 209, 68, 0.4)',
            color: '#000000',
            '&::before': {
                left: '100%',
            }
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
