import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundColor: theme.palette.background.default, // White
        color: theme.palette.text.primary,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(15), // 120px
            paddingBottom: theme.spacing(15),
        }
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    header: {
        marginBottom: theme.spacing(8),
        maxWidth: '68rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(12),
        }
    },
    title: {
        fontSize: '48px',
        lineHeight: '52px',
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
            lineHeight: '70px',
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '80px',
            lineHeight: '84px',
        }
    },
    description: {
        fontSize: '1rem',
        fontWeight: 300,
        lineHeight: 1.5,
        color: '#000000', // Black
        maxWidth: '42rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem',
            lineHeight: 1.625,
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)',
        gap: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(6),
        }
    },
    card: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3),
        borderRadius: '20px',
        border: `1px solid ${theme.palette.grey[100]}`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.5s',
        '&:hover': {
            boxShadow: theme.shadows[10],
            transform: 'translateY(-0.5rem)',
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            borderRadius: '20px',
        }
    },
    blurCircle: {
        position: 'absolute',
        top: '-2rem',
        right: '-2rem',
        width: '12rem',
        height: '12rem',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 0,
        transition: 'background-color 0.5s',
    },
    cardHeader: {
        position: 'relative',
        zIndex: 10,
        marginBottom: theme.spacing(4),
    },
    badge: {
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: 700,
        marginBottom: theme.spacing(2),
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    cardTitle: {
        fontSize: '3rem',
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        lineHeight: 1,
        marginBottom: theme.spacing(1),
    },
    cardSubtitle: {
        fontSize: '1rem',
        fontWeight: 500,
        color: theme.palette.text.secondary,
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        marginBottom: theme.spacing(4),
        flexGrow: 1,
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1.5),
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(6),
            gap: theme.spacing(2),
        }
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
        fontSize: '1rem',
        color: '#464243',
        borderBottom: `1px solid ${theme.palette.grey[50]}`,
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            gap: theme.spacing(2),
            fontSize: '1.125rem',
            paddingBottom: theme.spacing(1.5),
        },
        '&:last-child': {
            borderBottom: 'none',
        }
    },
    dot: {
        width: '0.5rem',
        height: '0.5rem',
        borderRadius: '50%',
    },
    button: {
        width: '100%',
        display: 'block',
        textAlign: 'center',
        color: theme.palette.background.paper,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        borderRadius: '0.75rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        transition: 'background-color 0.3s',
        position: 'relative',
        zIndex: 10,
        textDecoration: 'none',
    }
}));
