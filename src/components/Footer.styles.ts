import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    footer: {
        backgroundColor: '#FFFFFF', // Clean white
        color: '#111827',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(6),
        borderTop: '1px solid #E5E7EB', // Light divider
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    mainGrid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)',
        gap: theme.spacing(6),
        marginBottom: theme.spacing(10),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            gap: theme.spacing(4),
        }
    },
    brandColumn: {
        gridColumn: 'span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 5 / span 5',
            paddingRight: theme.spacing(6),
        }
    },
    logoWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: theme.spacing(3),
    },
    isotypeImage: {
        height: '32px', // Slightly smaller, refined logo
        width: 'auto',
        objectFit: 'contain',
        objectPosition: 'left center',
    },
    description: {
        color: '#6B7280', // Lighter text for secondary info
        lineHeight: 1.6,
        maxWidth: '24rem',
        marginBottom: theme.spacing(4),
        fontFamily: theme.typography.body1.fontFamily,
        fontSize: '14px',
        textAlign: 'left',
    },
    socialWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
    },
    socialIcon: {
        width: '36px',
        height: '36px',
        borderRadius: '8px', // Slightly rounded square like reference
        backgroundColor: '#F3F4F6', // Light gray background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4B5563',
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: '#111827',
            color: '#FFFFFF',
        }
    },
    // Links Columns
    linksColumnFirst: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2 / span 2',
            gridColumnStart: 7,
        }
    },
    linksColumnSecond: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2 / span 2',
            gridColumnStart: 9,
        }
    },
    linksColumnThird: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2 / span 2',
            gridColumnStart: 11,
        }
    },
    columnTitle: {
        fontFamily: theme.typography.body1.fontFamily,
        fontWeight: 700,
        fontSize: '11px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: theme.spacing(3),
        color: '#9CA3AF', // Gray for headings
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
    linkItem: {
        color: '#4B5563',
        textDecoration: 'none',
        fontFamily: theme.typography.body1.fontFamily,
        fontSize: '14px',
        transition: 'color 0.2s',
        '&:hover': {
            color: '#111827',
        }
    },
    // Bottom Bar
    bottomBar: {
        paddingTop: theme.spacing(4),
        borderTop: '1px solid #E5E7EB',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    },
    legalLinksBar: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing(3),
        order: 2,
        [theme.breakpoints.up('md')]: {
            order: 2,
            justifyContent: 'flex-end',
        }
    },
    bottomLegalLink: {
        color: '#6B7280',
        fontSize: '12px',
        fontFamily: theme.typography.body1.fontFamily,
        textDecoration: 'none',
        transition: 'color 0.2s',
        '&:hover': {
            color: '#111827',
        }
    },
    copyright: {
        fontSize: '12px',
        fontFamily: theme.typography.body1.fontFamily,
        color: '#6B7280',
        order: 1,
        [theme.breakpoints.up('md')]: {
            order: 1,
        }
    },
    copyrightBrand: {
        whiteSpace: 'nowrap',
    }
}));
