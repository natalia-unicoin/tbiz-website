import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<{ isScrolled: boolean }>()((theme, { isScrolled }) => ({
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? (theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)') : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` : 'none',
        transition: 'all 0.3s ease-in-out',
    },
    container: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: isScrolled ? theme.spacing(1) : theme.spacing(2),
        paddingBottom: isScrolled ? theme.spacing(1) : theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100%',
        margin: '0 auto',
        transition: 'all 0.3s ease-in-out',
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
            paddingTop: isScrolled ? theme.spacing(1.5) : theme.spacing(3),
            paddingBottom: isScrolled ? theme.spacing(1.5) : theme.spacing(3),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '60px',
            paddingRight: '60px',
        }
    },
    logoLink: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
        textDecoration: 'none',
        [theme.breakpoints.up('md')]: {
            gap: theme.spacing(2),
        },
    },
    isotypeImage: {
        height: isScrolled ? '32px' : '40px',
        width: 'auto',
        objectFit: 'contain',
        transition: 'all 0.3s ease-in-out',
        [theme.breakpoints.up('md')]: {
            height: isScrolled ? '40px' : '48px',
        },
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            gap: theme.spacing(4),
        },
    },
    joinButton: {
        backgroundColor: theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? 'rgba(17, 24, 39, 0.05)' : theme.palette.secondary.main,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        color: theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? '#111827' : theme.palette.secondary.contrastText,
        padding: '8px 20px',
        borderRadius: '9999px', // Pill shape
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        border: theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? '1px solid rgba(17, 24, 39, 0.15)' : (isScrolled ? 'none' : '1px solid rgba(255,255,255,0.3)'),
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': {
            transform: 'translateY(-1px)',
            backgroundColor: theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? 'rgba(17, 24, 39, 0.15)' : theme.palette.secondary.dark,
        },
        [theme.breakpoints.up('md')]: {
            padding: '8px 24px',
            fontSize: '0.875rem',
        },
    },
    langSelector: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(1),
            fontSize: '0.875rem',
            fontWeight: 500,
            color: isScrolled ? theme.palette.text.primary : (theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? '#111827' : '#FFFFFF'), // Default white except Liquid Glass
        },
    },
    langActive: {
        color: isScrolled ? theme.palette.text.primary : (theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? '#111827' : '#FFFFFF'),
        fontWeight: 700,
        cursor: 'pointer',
    },
    langInactive: {
        color: isScrolled ? 'rgba(0,0,0,0.5)' : (theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? 'rgba(17,24,39,0.5)' : 'rgba(255,255,255,0.7)'),
        cursor: 'pointer',
        transition: 'color 0.2s',
        '&:hover': {
            color: isScrolled ? theme.palette.text.primary : (theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? '#111827' : '#FFFFFF'),
        }
    },
    menuButtonWrapper: {
        position: 'relative',
        zIndex: 60,
    },
    menuButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: isScrolled ? theme.palette.text.primary : (theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? '#111827' : '#FFFFFF'),
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        transition: 'color 0.2s',
        '&:hover': {
            color: isScrolled ? theme.palette.text.secondary : (theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? 'rgba(17,24,39,0.7)' : 'rgba(255,255,255,0.7)'),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.875rem',
        },
    },
    menuLabel: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    },
    menuIconMobile: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        fill: isScrolled ? theme.palette.text.primary : (theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? '#111827' : '#FFFFFF'),
    },
    // DRAWER STYLES
    backdrop: {
        position: 'fixed',
        inset: 0,
        backgroundColor: theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)',
        zIndex: 55,
        backdropFilter: theme.palette.mode === 'light' && theme.palette.primary.main === '#111827' ? 'blur(16px)' : 'blur(4px)',
    },
    drawer: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.background.default,
        zIndex: 60,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(5), // Increased from 3 (40px)
        paddingRight: theme.spacing(5), // Increased from 3 (40px)
        display: 'flex',
        flexDirection: 'column',
        boxShadow: theme.shadows[24],
        overflowY: 'auto',
        [theme.breakpoints.up('md')]: {
            width: '500px',
            padding: theme.spacing(6), // 48px on md
        }
    },
    closeButtonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: theme.spacing(4),
    },
    closeButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: theme.spacing(1),
        borderRadius: '9999px',
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)',
        }
    },
    menuLogo: {
        marginBottom: theme.spacing(2),
        // No extra padding/margin-left to ensure straight alignment
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(4),
        }
    },
    menuLinkItem: {
        display: 'block',
        width: 'fit-content',
        textDecoration: 'none !important', // Force removal of underline
    },
    isotypeImageMobile: {
        height: '64px',
        width: 'auto',
        objectFit: 'contain',
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3), // gap-6
        [theme.breakpoints.up('md')]: {
            gap: theme.spacing(4), // gap-8
        }
    },
    mainLinkButton: {
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: theme.typography.h1.fontFamily, // Inter
        fontWeight: 700, // bold
        textTransform: 'uppercase',
        letterSpacing: '-0.05em', // tracking-tighter
        color: theme.palette.text.primary,
        lineHeight: 0.9,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
        width: '100%',
        textDecoration: 'none',
        fontSize: '1.125rem', // text-lg
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem', // text-xl (was 1.5rem/2xl)
        },
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.palette.success.main, // Teal
        }
    },
    mainLinkTextWrapper: {
        position: 'relative',
    },
    subItemsContainer: {
        overflow: 'hidden',
        paddingLeft: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        marginTop: theme.spacing(2),
        borderLeft: `2px solid ${theme.palette.grey[100]}`,
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
        }
    },
    subItem: {
        fontSize: '1.125rem', // text-lg
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em', // tracking-widest
        color: theme.palette.grey[300],
        cursor: 'not-allowed',
        display: 'block',
        paddingTop: '4px',
        marginBottom: '4px',
        width: 'fit-content',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem', // text-xl
        }
    },

    menuFooter: {
        marginTop: 'auto',
        borderTop: `1px solid ${theme.palette.grey[100]}`,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        width: '100%', // Take full width matching parent's padding
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        }
    },
    footerContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    },
    contactLink: {
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: theme.palette.text.secondary,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.text.primary,
        }
    },
    socialIcons: {
        display: 'flex',
        gap: theme.spacing(2),
    },
    socialIcon: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.text.primary,
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.text.primary,
            color: theme.palette.background.default,
        }
    }
}));
