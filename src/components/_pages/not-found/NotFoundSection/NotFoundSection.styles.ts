import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  notFoundSection: {
    position: 'relative',
    width: '100%',
    height: 1080,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& > .notFoundPicture': {
      position: 'absolute',
      inset: 0,

      '& .notFoundImage': {
        objectFit: 'cover',
        objectPosition: 'top center',
      },
    },

    [theme.breakpoints.down('xxl')]: {
      height: 1024,
    },

    [theme.breakpoints.down('sm')]: {
      height: 600,
    },

    [theme.breakpoints.down('xs')]: {
      height: 500,
    },
  },
  vectorCornerImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 180,
    height: 'auto',

    [theme.breakpoints.down('xxl')]: {
      width: 170,
    },

    [theme.breakpoints.down('sm')]: {
      width: 130,
    },

    [theme.breakpoints.down('xs')]: {
      width: 100,
    },

    [theme.breakpoints.down('xxxs')]: {
      display: 'none',
    },
  },
  notFoundRoot: {
    position: 'relative',
    width: '100%',
    height: '100%',
    paddingLeft: 380,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down(1800)]: {
      paddingLeft: 280,
    },

    [theme.breakpoints.down('xxl')]: {
      paddingLeft: 100,
    },

    [theme.breakpoints.down('sm')]: {
      paddingLeft: 50,
    },

    [theme.breakpoints.down('xs')]: {
      paddingLeft: 40,
    },

    [theme.breakpoints.down('xxxs')]: {
      paddingLeft: 16,
      paddingBottom: 40,
      alignItems: 'flex-end',
    },
  },
  notFoundTitle: {
    fontSize: 160,
    fontWeight: 800,
    lineHeight: 1.2,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: theme.palette.common.white,

    [theme.breakpoints.down('xxl')]: {
      letterSpacing: -2,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 96,
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: 82,
    },

    [theme.breakpoints.down('xxxs')]: {
      fontSize: 70,
      letterSpacing: -1.5,
    },
  },
  notFoundDescription: {
    fontSize: 60,
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.common.white,

    '&.notFoundDescription2': {
      marginBottom: 40,
    },

    [theme.breakpoints.down('xxl')]: {
      fontSize: 40,
      lineHeight: 1.2,

      '&.notFoundDescription2': {
        marginBottom: 30,
      },
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 34,
      lineHeight: 1.2,

      '&.notFoundDescription2': {
        marginBottom: 22,
      },
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: 26,
      lineHeight: 1.3,

      '&.notFoundDescription2': {
        marginBottom: 16,
      },
    },

    [theme.breakpoints.down('xxxs')]: {
      fontSize: 24,
      lineHeight: 1.1,
      letterSpacing: -0.2,

      '&.notFoundDescription2': {
        marginBottom: 22,
      },
    },
  },
  notFoundPageDescription: {
    marginBottom: 60,
    fontFamily: 'Inter, Montserrat, sans-serif',
    fontSize: 27,
    fontWeight: 500,
    lineHeight: 1.3,
    letterSpacing: -0.7,
    color: theme.palette.common.white,

    [theme.breakpoints.down('sm')]: {
      marginBottom: 50,
      fontSize: 16,
      letterSpacing: -0.4,
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 40,
      fontSize: 14,
      lineHeight: 1.2,
      letterSpacing: -0.4,
    },

    [theme.breakpoints.down('xxxs')]: {
      marginBottom: 30,
      fontSize: 18,
      lineHeight: 1.3,
      letterSpacing: -0.3,
    },
  },
  notFoundButton: {
    '&.notFoundBackButton': {
      marginRight: 20,
      backgroundColor: theme.palette.background.brightSun,

      [theme.breakpoints.down('xs')]: {
        marginBottom: 10,
      },

      [theme.breakpoints.down('xxxs')]: {
        width: '100%',
        marginRight: 'unset',
      },
    },

    '&.notFoundAboutButton': {
      backgroundColor: theme.palette.common.white,

      [theme.breakpoints.down('xxxs')]: {
        width: '100%',
      },
    },

    '& > span': {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: 3.6,
      textTransform: 'uppercase',
      color: theme.palette.common.black,

      [theme.breakpoints.down('xxl')]: {
        fontSize: 22,
        letterSpacing: 4.4,
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
        letterSpacing: 3.6,
      },

      [theme.breakpoints.down('xs')]: {
        fontSize: 14,
        letterSpacing: 2.8,
      },
    },
  },
}));

export default useStyles;
