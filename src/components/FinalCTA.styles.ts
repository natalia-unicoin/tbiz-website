import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '160px',
        paddingBottom: '160px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0F1626', // Deep dark theater mode for Apple TV style
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
        fontFamily: "'Montserrat', sans-serif !important",
        fontSize: '44px',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        },
        color: '#FFFFFF', // White for dark background
        textWrap: 'balance',
    },
    subtitle: {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#9CA3AF', // Gray for contrast
        maxWidth: '700px',
        margin: '0 auto',
        marginBottom: theme.spacing(8),
        fontWeight: 400,
        [theme.breakpoints.up('md')]: {
            fontSize: '24px',
        },
        textWrap: 'balance',
    },
    button: {
        display: 'inline-block',
        backgroundColor: theme.palette.info.main, // #FCD144
        color: '#0B1026',
        border: 'none',
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
            boxShadow: '0 0 30px rgba(252, 209, 68, 0.4)',
            backgroundColor: '#e6bd3c',
        }
    },
    bgAccent: {
        display: 'none', // Hide radial gradient since we are using image + overlay
    }
}));
