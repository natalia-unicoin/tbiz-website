import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        backgroundColor: '#ffffff',
        overflow: 'hidden',
    },
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        padding: theme.spacing(0, 3),
        [theme.breakpoints.up('lg')]: {
            padding: '0 150px',
        }
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            gap: theme.spacing(2),
        }
    },
    title: {
        fontSize: '40px',
        lineHeight: '50px',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        [theme.breakpoints.up('md')]: {
            fontSize: '56px',
            lineHeight: '66px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '64px',
            lineHeight: '74px',
        }
    },
    followLink: {
        fontSize: '1rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#000000',
        textDecoration: 'none',
        borderBottom: '2px solid #BBFF71',
        paddingBottom: '4px',
        transition: 'all 0.3s ease',
        '&:hover': {
            color: theme.palette.secondary.main,
        }
    },
    meshGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(3),
        }
    },
    postWrapper: {
        position: 'relative',
        aspectRatio: '4 / 1', // Wide composite images
        overflow: 'hidden',
        borderRadius: '20px', // Adjusted to 20px
        cursor: 'pointer',
        '&:hover $overlay': {
            opacity: 1,
        }
    },
    postImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        padding: theme.spacing(2),
    },
    instagramIcon: {
        color: '#ffffff',
        width: '32px',
        height: '32px',
    }
}));
