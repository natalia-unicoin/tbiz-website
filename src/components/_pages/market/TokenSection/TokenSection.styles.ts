import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  tokenRoot: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '48px',
    paddingBottom: '48px',
    backgroundColor: '#f9f9f9',
    color: '#000000',
    overflow: 'hidden',

    [theme.breakpoints.down('md')]: {
      paddingTop: '64px',
      paddingBottom: '64px',
    },
  },
  tokenContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    paddingLeft: '16px',
    paddingRight: '16px',

    [theme.breakpoints.down('md')]: {
      paddingLeft: '32px',
      paddingRight: '32px',
    },
  },
  tokenHeader: {
    marginBottom: '64px',
    maxWidth: '768px',
  },
  tokenTitle: {
    fontFamily: 'var(--font-display, inherit)',
    fontWeight: 700,
    letterSpacing: '-0.06em',
    fontSize: '4rem',
    marginBottom: '24px',

    [theme.breakpoints.down('lg')]: {
      fontSize: '3.25rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.25rem',
      marginBottom: '16px',
    },
  },
  tokenSubtitle: {
    fontSize: '1.25rem',
    fontWeight: 300,
    lineHeight: 1.7,
    color: '#4b5563',
    borderLeft: '4px solid #ebe462',
    paddingLeft: '24px',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1.125rem',
    },

    [theme.breakpoints.down('xs')]: {
      paddingLeft: '16px',
    },
  },
  tokenGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
    gap: '32px',

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
  tokenCard: {
    backgroundColor: '#ffffff',
    padding: '48px',
    borderRadius: '24px',
    border: '1px solid #f3f4f6',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.5s ease',

    [theme.breakpoints.down('xs')]: {
      padding: '32px',
    },

    '&:hover': {
      boxShadow: '0 20px 40px rgba(0,0,0,0.16)',
      transform: 'translateY(-4px)',
    },

    '&:hover .tokenGlowEarn': {
      backgroundColor: 'rgba(49,119,136,0.1)',
    },

    '&:hover .tokenGlowRedeem': {
      backgroundColor: 'rgba(230,98,34,0.1)',
    },

    '&:hover .tokenListNumber': {
      opacity: 1,
      transform: 'translateY(-2px)',
    },
  },
  tokenGlow: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '192px',
    height: '192px',
    borderRadius: '50%',
    filter: 'blur(40px)',
    marginRight: '-96px',
    marginTop: '-96px',
    transition: 'background-color 0.4s ease',

    [theme.breakpoints.down('md')]: {
      width: '224px',
      height: '224px',
      marginRight: '-112px',
      marginTop: '-112px',
    },
  },
  tokenGlowEarn: {
    backgroundColor: 'rgba(49,119,136,0.05)',
  },
  tokenGlowRedeem: {
    backgroundColor: 'rgba(230,98,34,0.05)',
  },
  tokenCardTitle: {
    fontFamily: 'var(--font-hand, inherit)',
    fontWeight: 700,
    marginBottom: '48px',
    fontSize: '3.5rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '3rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.25rem',
      marginBottom: '32px',
    },
  },
  tokenList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  tokenListItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    fontSize: '1.25rem',
    fontWeight: 500,
    color: '#374151',
    paddingBottom: '16px',
    borderBottom: '1px solid #e5e7eb',

    [theme.breakpoints.down('xs')]: {
      fontSize: '1.125rem',
    },

    '&:last-child': {
      borderBottom: 'none',
    },
  },
  tokenListNumber: {
    fontFamily: 'var(--font-hand, inherit)',
    fontWeight: 700,
    fontSize: '2rem',
    opacity: 0.5,
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  },
}));

export default useStyles;
