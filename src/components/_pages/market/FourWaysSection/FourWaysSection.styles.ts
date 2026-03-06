import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  fourWaysRoot: {
    backgroundColor: '#ffffff',
    color: '#000000',
    paddingTop: '80px',
    paddingBottom: '80px',

    [theme.breakpoints.down('xs')]: {
      paddingTop: '48px',
      paddingBottom: '48px',
    },
  },
  fourWaysContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingLeft: '32px',
    paddingRight: '32px',
  },
  fourWaysHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '48px',
  },
  fourWaysHeaderTitleWrapper: {
    maxWidth: '960px',
    margin: '0 auto 32px',
  },
  fourWaysTitle: {
    fontWeight: 900,
    letterSpacing: '-0.08em',
    lineHeight: '0.9',
    textTransform: 'uppercase',
    fontSize: '4.5rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '3.75rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.25rem',
    },
  },
  fourWaysTitleHighlightCommunity: {
    fontFamily: 'var(--font-hand, inherit)',
    textTransform: 'lowercase',
    color: '#ebe462',
    marginLeft: '16px',
    fontSize: '6rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '4.5rem',
    },

    [theme.breakpoints.down('xs')]: {
      marginLeft: '8px',
      fontSize: '3rem',
    },
  },
  fourWaysTitleHighlightCollaboration: {
    fontFamily: 'var(--font-hand, inherit)',
    textTransform: 'lowercase',
    color: '#e66222',
    fontSize: '6rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '4.5rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem',
    },
  },
  fourWaysHeaderTextWrapper: {
    maxWidth: '768px',
    margin: '0 auto',
  },
  fourWaysHeaderText: {
    fontSize: '1.25rem',
    fontWeight: 300,
    lineHeight: '1.7',
    color: '#4b5563',

    [theme.breakpoints.down('xs')]: {
      fontSize: '1.125rem',
    },
  },
  fourWaysGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '16px',

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },

    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    },
  },
  fourWaysCard: {
    position: 'relative',
    height: '600px',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '24px',
    cursor: 'pointer',

    '&:hover .fourWaysCardImage': {
      transform: 'scale(1.1)',
    },

    '&:hover .fourWaysCardOverlay': {
      backgroundColor: 'rgba(0,0,0,0.6)',
    },

    '&:hover .fourWaysCardDescriptionWrapper': {
      maxHeight: '200px',
    },

    '&:hover .fourWaysCardDescription': {
      transform: 'translateY(0)',
      opacity: 1,
    },

    '&:hover .fourWaysCardIndicator': {
      transform: 'rotate(0deg)',
      backgroundColor: '#ffffff',
    },

    '&:hover .fourWaysCardIndicatorIcon': {
      color: '#000000',
    },
  },
  fourWaysCardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.7s ease',
  },
  fourWaysCardOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    transition: 'background-color 0.5s ease',
  },
  fourWaysCardContent: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '32px',
  },
  fourWaysCardTitle: {
    fontFamily: 'var(--font-hand, inherit)',
    fontWeight: 700,
    fontSize: '3.75rem',
    color: '#ffffff',
    marginBottom: '16px',
    letterSpacing: '-0.05em',
    lineHeight: 1,
    textShadow: '0 4px 20px rgba(0,0,0,0.3)',

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  fourWaysCardDescriptionWrapper: {
    overflow: 'hidden',
    maxHeight: 0,
    transition: 'max-height 0.5s ease',
    paddingBottom: '16px',
  },
  fourWaysCardDescription: {
    fontSize: '1.125rem',
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 300,
    transform: 'translateY(16px)',
    opacity: 0,
    transition: 'transform 0.5s ease, opacity 0.5s ease',
  },
  fourWaysCardIndicator: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    width: '48px',
    height: '48px',
    borderRadius: '9999px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'rotate(-45deg)',
    transition: 'transform 0.5s ease, background-color 0.5s ease',
  },
  fourWaysCardIndicatorIcon: {
    color: '#ffffff',
    transition: 'color 0.5s ease',
  },
}));

export default useStyles;
