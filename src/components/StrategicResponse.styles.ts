import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: '120px', // Strict 120px top/bottom
        paddingBottom: '120px',
        backgroundColor: '#FFFFFF', // Strict White
        color: '#111827',
        width: '100%',
    },
    container: {
        maxWidth: '1200px', // Maintain 1200px max width container rule
        margin: '0 auto',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '40px',
            paddingRight: '40px',
        }
    },
    header: {
        textAlign: 'center',
        marginBottom: '64px', // Strict 64px from title to table
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(2),
        lineHeight: 1.1,
        fontSize: '44px',
        [theme.breakpoints.up('md')]: {
            fontSize: '64px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '72px',
        }
    },
    subtitle: {
        fontSize: '1.25rem',
        color: theme.palette.text.primary,
        maxWidth: '700px',
        margin: '0 auto',
        fontWeight: 700,
    },
    tableContainer: {
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse', // Executive report lines, not separated cards
        borderSpacing: '0',
    },
    th: {
        textAlign: 'left',
        padding: '24px 24px', // Generous header padding
        fontSize: '18px', // Montserrat 18-20px
        fontWeight: 700, // Bold
        fontFamily: theme.typography.h1.fontFamily, // Montserrat
        textTransform: 'none', // Removed uppercase
        letterSpacing: '0', // Removed tight tracking
        color: '#111827', // Institutional dark text
        backgroundColor: '#F8FAFC', // Very slight distinction
        borderBottom: '2px solid #E5E7EB', // Stronger division under headers
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
        }
    },
    thBrand: {
        color: '#111827', // Same color constraint, no highlights
    },
    tr: {
        backgroundColor: '#FFFFFF',
        transition: 'none', // Removed bounce/hover
        '&:hover': {
            transform: 'none',
            backgroundColor: '#F8FAFC', // Extremely subtle line highlight on read
        }
    },
    td: {
        padding: '24px', // Huge vertical padding (20-24px)
        fontSize: '16px', // Inter 16-18px
        fontFamily: theme.typography.body1.fontFamily,
        lineHeight: 1.6, // Comfortable reading
        borderBottom: '1px solid #E5E7EB', // Single subtle divider
        color: '#374151',
        verticalAlign: 'top',
        '&:first-of-type': {
            fontWeight: 600, // Slightly bolder feature names
            width: '25%',
        },
        '&:last-of-type': {
            width: '40%',
            backgroundColor: 'transparent', // Removed brand highlight
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
        }
    },
    traditionalValue: {
        color: '#6B7280', // Slightly muted for contrast
        width: '35%',
        fontWeight: 400,
    },
    brandValue: {
        fontWeight: 500, // Medium emphasis, not overly bold
        color: '#111827', // Darker text
    }
}));
