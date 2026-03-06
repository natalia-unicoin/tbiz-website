import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  manifestoRoot: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '48px',
    paddingBottom: '48px',
    backgroundColor: '#ffffff',
    color: '#000000',

    [theme.breakpoints.down('md')]: {
      paddingTop: '64px',
      paddingBottom: '64px',
    },
  },
  manifestoContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingLeft: '32px',
    paddingRight: '32px',
    width: '100%',
  },
  manifestoContent: {
    maxWidth: '960px',
    margin: '0 auto',
    textAlign: 'center',
  },
  manifestoTitle: {
    fontFamily: 'var(--font-display, inherit)',
    fontWeight: 700,
    letterSpacing: '-0.06em',
    lineHeight: 1.15,
    marginBottom: '32px',
    fontSize: '4rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '3.25rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
      marginBottom: '24px',
    },
  },
  manifestoTitleHighlight: {
    fontFamily: 'var(--font-hand, inherit)',
    textTransform: 'lowercase',
    color: '#317788',
    fontSize: '5rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '4rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  manifestoDescription: {
    fontSize: '1.5rem',
    fontWeight: 300,
    lineHeight: 1.7,
    color: '#1f2937',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1.375rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '1.125rem',
    },
  },
  manifestoDescriptionBold: {
    whiteSpace: 'nowrap',
    fontWeight: 700,
  },
}));

export default useStyles;
