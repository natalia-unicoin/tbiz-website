import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '80px',
        paddingBottom: '160px',
        backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.background.paper,
        color: theme.palette.text.primary,
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    title: {
        fontSize: '44px',
        lineHeight: '1.1',
        fontWeight: 700,
        color: theme.palette.text.primary, // Apple Black
        textAlign: 'center',
        letterSpacing: '-0.03em',
        fontFamily: theme.typography.h1.fontFamily,
        marginBottom: '60px',
        textTransform: 'none',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
            marginBottom: '80px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(6),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
        }
    },
    mediaCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: '40px',
        borderRadius: '30px',
        border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #D2D2D7', // Apple Light Gray
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FBFBFB',
        backdropFilter: theme.palette.mode === 'dark' ? 'blur(10px)' : 'none',
        transition: 'all 0.4s ease',
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : theme.palette.background.paper,
            boxShadow: theme.palette.mode === 'dark' ? '0 0 30px rgba(6, 182, 212, 0.3)' : '0 20px 40px rgba(0,0,0,0.05)',
            transform: 'translateY(-5px)',
            borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : undefined,
        }
    },
    tag: {
        fontSize: '12px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: theme.palette.text.primary,
        marginBottom: '20px',
    },
    mediaTitle: {
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: 1.3,
        marginBottom: '15px',
        color: theme.palette.text.primary,
    },
    excerpt: {
        fontSize: '16px',
        lineHeight: 1.6,
        color: theme.palette.text.primary,
        marginBottom: '25px',
        flexGrow: 1,
    },
    source: {
        fontSize: '14px',
        fontWeight: 700,
        color: theme.palette.text.primary,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    }
}));
