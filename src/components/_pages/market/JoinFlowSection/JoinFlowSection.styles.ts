import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  joinFlowRoot: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  joinFlowBackground: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
  },
  joinFlowBackgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  joinFlowBackgroundOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(2px)',
  },
  joinFlowContainer: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto',
    paddingLeft: '16px',
    paddingRight: '16px',

    [theme.breakpoints.down('md')]: {
      paddingLeft: '32px',
      paddingRight: '32px',
    },
  },
  joinFlowContent: {
    maxWidth: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#ffffff',
  },
  joinFlowTitle: {
    fontFamily: 'var(--font-display, inherit)',
    fontWeight: 700,
    letterSpacing: '-0.06em',
    lineHeight: 1,
    marginBottom: '32px',
    fontSize: '4.5rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '3.75rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.25rem',
      marginBottom: '24px',
    },
  },
  joinFlowDescription: {
    fontSize: '1.25rem',
    fontWeight: 300,
    lineHeight: 1.7,
    color: 'rgba(229,231,235,0.9)',
    marginBottom: '48px',
    maxWidth: '768px',
    marginLeft: 'auto',
    marginRight: 'auto',

    [theme.breakpoints.down('xs')]: {
      fontSize: '1.125rem',
      marginBottom: '32px',
    },
  },
  joinFlowActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '32px',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center',
    },
  },
  joinFlowButtonPrimary: {
    backgroundColor: '#ebe462',
    color: '#000000',
    padding: '16px 48px',
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 20px 40px rgba(0,0,0,0.45)',

    '&:hover': {
      backgroundColor: '#d4cd55',
      transform: 'scale(1.05)',
    },

    [theme.breakpoints.down('xs')]: {
      padding: '16px 32px',
      fontSize: '0.875rem',
    },
  },
  joinFlowButtonSecondary: {
    padding: '16px 48px',
    fontSize: '1rem',
    fontWeight: 700,
    color: '#ffffff',
    border: '1px solid rgba(255,255,255,0.3)',
    backdropFilter: 'blur(6px)',
    borderRadius: '9999px',
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    cursor: 'pointer',
    transition: 'all 0.3s ease',

    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
    },

    [theme.breakpoints.down('xs')]: {
      padding: '16px 32px',
      fontSize: '0.875rem',
    },
  },
}));

export default useStyles;
