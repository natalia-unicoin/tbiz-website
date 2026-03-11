import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : '#F5F5F7', // Transparent in dark mode to reveal mesh
        color: theme.palette.text.primary,
        padding: theme.spacing(8, 0),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(16, 0),
        }
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
        marginBottom: theme.spacing(6),
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '900px',
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(8),
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Inter
        fontSize: '2.5rem',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        color: theme.palette.text.primary,
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
        gap: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '64px', // Strict 64px gap
        }
    },
    card: {
        backgroundColor: '#FFFFFF', // Strict solid institutional white
        border: '1px solid #E5E7EB', // Subtle dividing line
        borderRadius: '8px', // Maximum 8px radius
        padding: '32px', // Lots of air (a bit less than 48px if text is short, but 48px preferred. Enforcing 48px)
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
        minHeight: '200px',
        transition: 'none', // Removed transition
        '&:hover': {
            transform: 'none',
            boxShadow: 'none',
            backgroundColor: '#FFFFFF',
        },
        [theme.breakpoints.up('md')]: {
            padding: '48px', // Strict 48px for desktop per rules
        }
    },
    cardTitle: {
        fontSize: '24px',
        fontWeight: 600, // SemiBold
        color: '#111827', // Strong institutional dark
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        lineHeight: 1.3,
        letterSpacing: '-1px', // Keep strict header tracing
        marginBottom: '24px', // Enforce 24px space beneath title
        [theme.breakpoints.up('md')]: {
            fontSize: '28px',
        }
    },
    cardAction: {
        fontSize: '16px', // Inter Regular mapped
        fontWeight: 600, // Action link remains slightly bolder for affordance but not uppercase
        color: '#0A337C', // TBIZ Deep blue or strong institutional blue
        textTransform: 'none',
        letterSpacing: '0',
        display: 'flex',
        alignItems: 'center',
        marginTop: 'auto',
        textDecoration: 'none',
    }
}));
