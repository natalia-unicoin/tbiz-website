import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundColor: '#F5F5F7', // Apple Light Gray background
        color: theme.palette.text.primary,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(15),
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
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        fontSize: '48px',
        lineHeight: '52px',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
            lineHeight: '70px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '80px', // Massive Apple style
            lineHeight: '84px',
        }
    },
    highlight: {
        color: theme.palette.secondary.main, // #bbff71
        fontSize: '40px',
        display: 'block',
        [theme.breakpoints.up('md')]: {
            fontSize: '56px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '64px',
        }
    },
    subtitle: {
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 60px auto',
        fontSize: '17px', // Apple body
        lineHeight: '25px',
        color: theme.palette.text.primary, // Black
    },
    bentoGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: theme.spacing(3),
        }
    },
    bentoItem: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '32px',
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
        border: `1px solid ${theme.palette.grey[200]}`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
        }
    },
    bentoItem1: {
        [theme.breakpoints.up('md')]: { gridColumn: 'span 2' }
    },
    bentoItem2: {
        [theme.breakpoints.up('md')]: { gridColumn: 'span 1' }
    },
    bentoItem3: {
        [theme.breakpoints.up('md')]: { gridColumn: 'span 1' }
    },
    bentoItem4: {
        [theme.breakpoints.up('md')]: { gridColumn: 'span 2' }
    },
    stepNumber: {
        fontSize: '4rem',
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        color: 'rgba(0,0,0,0.05)',
        lineHeight: 1,
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem',
        }
    },
    textContent: {
        marginTop: 'auto',
    },
    itemTitle: {
        fontSize: '1.5rem',
        fontWeight: 700,
        fontFamily: theme.typography.h1.fontFamily,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(2),
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.75rem',
        }
    },
    itemDescription: {
        fontSize: '1rem',
        color: theme.palette.text.primary,
        lineHeight: 1.6,
        fontWeight: 400,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        }
    }
}));
