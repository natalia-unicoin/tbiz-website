import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  heroRoot: {
    position: 'relative',
    minHeight: '100dvh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    color: '#ffffff',
  },
  heroBackground: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
  },
  heroBackgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  heroBackgroundOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent, rgba(0,0,0,0.6))',
    zIndex: 10,
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    paddingLeft: '16px',
    paddingRight: '16px',
    maxWidth: '960px',
    margin: '80px auto 0',
  },
  heroTitle: {
    fontWeight: 700,
    letterSpacing: '-0.06em',
    marginBottom: '32px',
    textShadow: '0 10px 25px rgba(0,0,0,0.6)',
    fontSize: '4.5rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '3rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '1.875rem',
    },
  },
  heroTitleHighlight: {
    fontFamily: 'var(--font-hand, inherit)',
    color: '#ebe462',
    paddingRight: '12px',
    fontSize: '5rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '3.75rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.25rem',
    },
  },
  heroSubtitle: {
    fontSize: '2rem',
    fontWeight: 500,
    marginBottom: '48px',
    maxWidth: '768px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.7',
    textShadow: '0 6px 16px rgba(0,0,0,0.5)',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1.5rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '1.25rem',
    },
  },
  heroButton: {
    backgroundColor: '#ebe462',
    color: '#000000',
    padding: '16px 40px',
    fontSize: '1rem',
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
    transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',

    [theme.breakpoints.down('xs')]: {
      padding: '16px 32px',
      fontSize: '0.875rem',
    },

    '&:hover': {
      backgroundColor: '#d4cd55',
      transform: 'scale(1.05)',
      boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
    },

    '&:active': {
      transform: 'scale(0.98)',
    },
  },
}));

export default useStyles;
