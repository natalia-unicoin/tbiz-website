import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        paddingTop: theme.spacing(12), // Huge padding
        paddingBottom: theme.spacing(10),
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
    },
    container: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(3), // px-6
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '150px',
            paddingRight: '150px',
        }
    },
    mainGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: theme.spacing(6),
        marginBottom: theme.spacing(10),
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        }
    },
    brandColumn: {
        gridColumn: 'span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Force left alignment
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 4 / span 4',
        }
    },
    logoWrapper: {
        display: 'flex',
        alignItems: 'flex-start', // Align to left side of wrapper
        justifyContent: 'flex-start',
        marginBottom: theme.spacing(4), // mb-8
    },
    isotypeImage: {
        height: '40px', // Set back to normal logo height
        width: 'auto',
        objectFit: 'contain',
        objectPosition: 'left center', // Ensure image itself aligns left
    },
    description: {
        color: theme.palette.text.secondary,
        lineHeight: 1.625,
        maxWidth: '24rem',
        marginBottom: theme.spacing(4),
        fontFamily: theme.typography.body1.fontFamily,
        fontSize: '14px', // Slightly smaller for better Apple-style text hierarchy
        textAlign: 'left', // Force left alignment
    },
    socialWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(3),
    },
    socialIcon: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.text.primary,
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.text.primary,
            color: theme.palette.background.default,
            boxShadow: 'none',
        }
    },
    socialSvg: {
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    // Links Columns
    linksColumn: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2 / span 2',
        }
    },
    linksColumnFirst: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2 / span 2',
            gridColumnStart: 5, // Moved from 6
        }
    },
    linksColumnSecond: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2 / span 2',
            gridColumnStart: 7, // Moved from 9
        }
    },
    socialColumn: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 3 / span 3',
            gridColumnStart: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
        }
    },
    columnTitle: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 600,
        fontSize: '18px',
        letterSpacing: '0.05em',
        marginBottom: theme.spacing(3),
        color: theme.palette.text.primary,
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    linkItem: {
        color: 'inherit',
        textDecoration: 'none',
        fontFamily: theme.typography.body1.fontFamily,
        fontSize: '16px',
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.palette.text.primary,
        }
    },
    // Bottom Bar
    bottomBar: {
        paddingTop: theme.spacing(4),
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
    },
    tagline: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing(6),
        gap: theme.spacing(3),
        fontSize: '10px',
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        fontWeight: 600,
        letterSpacing: '0.2em',
        textTransform: 'uppercase', // Enforce uppercase
        color: theme.palette.text.secondary,
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            fontSize: '12px',
        }
    },
    separator: {
        display: 'none',
        color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    },
    legalLinksBar: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing(2),
        marginTop: 0,
        [theme.breakpoints.up('md')]: {
            gap: theme.spacing(3),
        }
    },
    bottomLegalLink: {
        color: theme.palette.text.secondary,
        fontSize: '12px',
        fontFamily: theme.typography.body1.fontFamily,
        textDecoration: 'none',
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.palette.text.primary,
        }
    },
    legalSeparator: {
        color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
        fontSize: '12px',
    },
    copyright: {
        marginTop: theme.spacing(8),
        display: 'flex',
        justifyContent: 'center',
        fontSize: '12px',
        fontFamily: theme.typography.body1.fontFamily,
        color: theme.palette.text.secondary,
    },
    copyrightBrand: {
        whiteSpace: 'nowrap',
        fontWeight: 700,
    }
}));
