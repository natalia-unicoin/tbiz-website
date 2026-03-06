import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        backgroundColor: '#FFFFFF', // Forza fondo blanco Apple-style
        color: '#111827', // Texto oscuro siempre para contrastar con el blanco
        [theme.breakpoints.up('lg')]: {
            paddingTop: '160px',
            paddingBottom: '160px',
        }
    },
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    innerFlex: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(8),
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: theme.spacing(12),
        }
    },
    stickyColumn: {
        flex: 1,
        [theme.breakpoints.up('lg')]: {
            position: 'sticky',
            top: '160px', /* Stays anchored near the top */
            maxWidth: '500px',
            paddingRight: theme.spacing(6),
        }
    },
    scrollColumn: {
        flex: 1.5,
        display: 'flex',
        flexDirection: 'row', // Horizontal on mobile
        gap: theme.spacing(2),
        overflowX: 'auto',
        overflowY: 'visible', // Must be visible to allow cards to cast shadows or just breathe vertically
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        paddingTop: theme.spacing(2), // Give space top
        paddingBottom: theme.spacing(4), // Give space bottom
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'column', // Back to vertical on desktop
            overflowX: 'visible',
            scrollSnapType: 'none',
            paddingTop: '320px', // Starts low so user scrolls into it
            paddingBottom: '160px',
            gap: '120px', // Massive gap on desktop
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(4),
        lineHeight: 1.1,
        fontSize: '44px',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        }
    },
    subtitle: {
        fontSize: '1.25rem',
        fontWeight: 700,
        color: theme.palette.text.primary, // Dark Navy
        lineHeight: 1.5,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        }
    },
    storyBlock: {
        backgroundColor: '#F5F5F7', // Apple Light Gray Glass
        border: '1px solid transparent',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        borderRadius: '32px',
        padding: '32px 20px', // Even tighter padding for iPhones
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '380px', // Reduced from 400 to prevent edge clipping on smaller iPhones
        minWidth: '85vw', // Take up most of screen on mobile
        scrollMarginLeft: '20px',
        boxSizing: 'border-box', // Ensure padding doesn't push width out
        transition: 'all 0.4s ease',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        },
        [theme.breakpoints.up('md')]: {
            padding: '60px 40px',
            minHeight: '400px',
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: 'auto', // Reset on desktop
            scrollMarginLeft: 0,
        }
    },
    chapterLabel: {
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: theme.palette.info.main, // Complementary Blue
        marginBottom: theme.spacing(3),
        display: 'block',
    },
    cardTitle: {
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: theme.spacing(3),
        letterSpacing: '-0.03em',
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
        }
    },
    cardText: {
        fontSize: '1.125rem',
        lineHeight: 1.7,
        color: theme.palette.text.primary,
        fontWeight: 400,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem',
        }
    },
    highlightBlock: {
        backgroundColor: theme.palette.primary.main,
        border: 'none',
        color: '#FFFFFF', // Always white text
    },
    imperativeLabel: {
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: theme.palette.secondary.main, // Brand Accent Yellow
        marginBottom: theme.spacing(3),
        display: 'block',
    },
    imperativeTitle: {
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: theme.spacing(3),
        letterSpacing: '-0.03em',
        color: '#FFFFFF',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
        }
    },
    imperativeDescription: {
        fontSize: '1.125rem',
        color: '#FFFFFF',
        lineHeight: 1.7,
        fontWeight: 400,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem',
        }
    },
    scrollIndicator: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            display: 'none', // Hide on desktop where it's vertical
        }
    },
    dot: {
        height: '8px',
        width: '8px',
        borderRadius: '4px',
        backgroundColor: '#D1D1D6', // Light gray for inactive
        transition: 'all 0.3s ease',
    },
    activeDot: {
        width: '32px', // Elongated for active
        backgroundColor: theme.palette.primary.main, // Dark for active
    }
}));
