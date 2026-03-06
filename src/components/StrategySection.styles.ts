import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundColor: theme.palette.background.default, // White
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(15), // 120px
            paddingBottom: theme.spacing(15), // 120px
        }
    },
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    title: {
        fontSize: '48px',
        lineHeight: '52px',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        textAlign: 'center',
        marginBottom: theme.spacing(3),
        fontFamily: theme.typography.h1.fontFamily,
        color: theme.palette.text.primary, // Obsidian Green
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
            lineHeight: '70px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '80px',
            lineHeight: '84px',
        }
    },
    subtitle: {
        fontSize: '32px', // Apple mobile h2
        lineHeight: '36px',
        fontWeight: 600,
        letterSpacing: '-0.03em',
        textAlign: 'center',
        marginBottom: theme.spacing(2),
        fontFamily: theme.typography.h2.fontFamily,
        color: theme.palette.text.primary, // Black
        [theme.breakpoints.up('md')]: {
            fontSize: '48px', // Apple desktop h2
            lineHeight: '52px',
        }
    },
    content: {
        maxWidth: '900px',
        margin: '0 auto',
    },
    description: {
        fontSize: '17px', // Apple body
        lineHeight: '25px',
        marginBottom: theme.spacing(4),
        color: theme.palette.text.primary, // Black
        [theme.breakpoints.up('md')]: {
            fontSize: '17px',
        },
        '& strong': {
            color: theme.palette.text.primary, // Apple almost black
            fontWeight: 600,
        }
    }
}));
