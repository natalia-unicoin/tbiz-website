import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '60px',
        paddingBottom: '60px',
        backgroundColor: '#F5F5F7', // Apple light gray
        [theme.breakpoints.up('md')]: {
            paddingTop: '100px',
            paddingBottom: '100px',
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
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: theme.spacing(6), // gap-12 -> 48px
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: theme.spacing(4), // gap-8
        }
    },
    textColumn: {
        width: '100%',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            width: '33.333333%', // w-1/3
            textAlign: 'left',
        }
    },
    title: {
        fontSize: '32px', // Apple mobile h2
        lineHeight: '36px',
        fontWeight: 600,
        marginBottom: theme.spacing(2),
        letterSpacing: '-0.03em',
        fontFamily: theme.typography.h2.fontFamily,
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            fontSize: '48px', // Apple desktop h2
            lineHeight: '52px',
        }
    },
    highlight: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Caveat
        fontSize: '3rem', // text-5xl
        color: '#E2622B', // Builder Orange prop
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem', // text-6xl
        }
    },
    description: {
        fontSize: '17px', // Apple body
        lineHeight: '25px',
        color: theme.palette.text.primary, // Apple medium gray
        fontWeight: 400,
        [theme.breakpoints.up('md')]: {
            fontSize: '17px',
        }
    },
    grid: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', // grid-cols-2
        gap: theme.spacing(4), // gap-8
        [theme.breakpoints.up('md')]: {
            width: '66.666667%', // w-2/3
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', // md:grid-cols-4
            gap: theme.spacing(6), // md:gap-12
        }
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    statValue: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700, // font-bold
        fontSize: '3rem', // text-5xl
        marginBottom: theme.spacing(1), // mb-2
        letterSpacing: '-0.05em', // tracking-tighter
        [theme.breakpoints.up('md')]: {
            fontSize: '4.5rem', // text-7xl
            marginBottom: theme.spacing(2), // mb-4
        }
    },
    statLabel: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Caveat
        fontWeight: 700,
        fontSize: '1.5rem', // text-2xl
        color: theme.palette.grey[600],
        whiteSpace: 'pre-line',
        lineHeight: 1,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.875rem', // text-3xl
        }
    }
}));
