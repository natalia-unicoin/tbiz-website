import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '160px',
        paddingBottom: '80px',
        backgroundColor: theme.palette.background.paper,
        backgroundImage: 'url(/images/liquid-glass-bg-1.jpg)', // The new Apple texture
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderTop: '1px solid #E5E5E7',
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    title: {
        fontSize: '44px',
        lineHeight: '1.1',
        fontWeight: 700,
        marginBottom: '60px',
        letterSpacing: '-0.03em',
        fontFamily: theme.typography.h1.fontFamily,
        color: theme.palette.text.primary,
        textAlign: 'center',
        textTransform: 'none',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
            marginBottom: '100px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px', // Added gap for mobile
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
        }
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        padding: '24px', // Tighter padding on mobile
        border: '1px solid rgba(255, 255, 255, 0.5)', // Light glass border
        borderRadius: '24px', // Scaled border radius
        backgroundColor: 'rgba(255, 255, 255, 0.4)', // Frosty white glass
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.05)', // Subtle shadow to lift the white glass
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
        },
        [theme.breakpoints.up('md')]: {
            padding: '32px',
            borderRadius: '30px',
        }
    },
    statValue: {
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: '1',
        marginBottom: '8px',
        color: theme.palette.text.primary,
        fontFamily: theme.typography.h1.fontFamily,
        [theme.breakpoints.up('md')]: {
            fontSize: '48px',
        }
    },
    statLabel: {
        fontSize: '12px',
        fontWeight: 700,
        color: theme.palette.text.secondary, // Theme standard secondary
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        lineHeight: '1.4',
        fontFamily: theme.typography.body1.fontFamily,
    }
}));
