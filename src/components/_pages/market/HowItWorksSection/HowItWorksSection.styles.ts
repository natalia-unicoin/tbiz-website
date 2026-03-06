import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  howItWorksRoot: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '48px',
    paddingBottom: '48px',
    backgroundColor: '#ffffff',
    color: '#000000',
    overflow: 'hidden',
  },
  howItWorksContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingLeft: '32px',
    paddingRight: '32px',
    width: '100%',
  },
  howItWorksTitle: {
    fontWeight: 700,
    letterSpacing: '-0.06em',
    marginBottom: '48px',
    textAlign: 'center',
    fontSize: '4.5rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '3.75rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.25rem',
    },
  },
  howItWorksTitleHighlight: {
    fontFamily: 'var(--font-hand, inherit)',
    textTransform: 'lowercase',
    color: '#317788',
    fontSize: '5rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '4.5rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem',
    },
  },
  howItWorksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
    gap: '32px',

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
    },

    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(1,minmax(0,1fr))',
    },
  },
  howItWorksCardWrapper: {
    height: '600px',
    cursor: 'pointer',
    perspective: '1000px',

    '&:hover .howItWorksCardImageFront': {
      transform: 'scale(1.1)',
    },

    '&:hover .howItWorksCardOverlayFront': {
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
  },
  howItWorksCardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.7s ease',
  },
  howItWorksCardSideFront: {
    position: 'absolute',
    inset: 0,
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(15,23,42,0.25)',
    backgroundColor: '#f9fafb',
    backfaceVisibility: 'hidden',
  },
  howItWorksCardImageFront: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.7s ease',
  },
  howItWorksCardOverlayFront: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    transition: 'background-color 0.4s ease',
  },
  howItWorksCardFrontId: {
    position: 'absolute',
    top: '16px',
    right: '24px',
    fontSize: '4.5rem',
    fontWeight: 700,
    opacity: 0.5,
    fontFamily: 'var(--font-display, inherit)',
    color: '#ffffff',
    zIndex: 10,
  },
  howItWorksCardFrontTitleWrapper: {
    position: 'absolute',
    bottom: '32px',
    left: '32px',
  },
  howItWorksCardFrontTitle: {
    fontFamily: 'var(--font-hand, inherit)',
    fontWeight: 700,
    fontSize: '3rem',
    color: '#ffffff',
    letterSpacing: '-0.04em',

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.25rem',
    },
  },
  howItWorksCardSideBack: {
    position: 'absolute',
    inset: 0,
    borderRadius: '24px',
    padding: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderWidth: '2px',
    borderStyle: 'solid',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    boxSizing: 'border-box',

    [theme.breakpoints.down('xs')]: {
      padding: '32px',
    },
  },
  howItWorksCardBackId: {
    fontFamily: 'var(--font-display, inherit)',
    fontWeight: 700,
    fontSize: '3.75rem',
    marginBottom: '32px',
    opacity: 0.2,
  },
  howItWorksCardBackTitle: {
    fontFamily: 'var(--font-hand, inherit)',
    fontWeight: 700,
    fontSize: '3rem',
    marginBottom: '32px',

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.25rem',
    },
  },
  howItWorksCardBackDescription: {
    fontSize: '1.25rem',
    color: '#4b5563',
    lineHeight: '1.7',
    fontWeight: 300,

    [theme.breakpoints.down('xs')]: {
      fontSize: '1.125rem',
    },
  },
}));

export default useStyles;
