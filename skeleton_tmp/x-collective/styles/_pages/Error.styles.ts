import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  notFoundRoot: {
    height: 620,

    [theme.breakpoints.down('lg')]: {
      height: 500,
    },

    [theme.breakpoints.down('sm')]: {
      height: 500,
    },

    [theme.breakpoints.down('xs')]: {
      height: 400,
    },

    [theme.breakpoints.down('xxxs')]: {
      height: 500,
      alignItems: 'flex-end',
    },
  },
  errorWrapper: {
    position: 'relative',
    color: theme.palette.common.white,
  },
  notFoundSectionImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
  },
  notFoundTitle: {
    marginBottom: 50,
    fontWeight: 800,
    fontSize: 160,
    lineHeight: '96px',
    letterSpacing: '3px',
    textTransform: 'uppercase',

    [theme.breakpoints.down('sm')]: {
      marginBottom: 40,
      fontSize: 96,
      lineHeight: '60px',
      letterSpacing: '1.92px',
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 30,
      fontSize: 82,
      lineHeight: '50px',
      letterSpacing: '1.63px',
    },

    [theme.breakpoints.down('xxxs')]: {
      marginBottom: 16,
      fontSize: 70,
    },
  },
  notFoundDescription: {
    marginBottom: 32,
    fontWeight: 800,
    fontSize: 40,
    lineHeight: '46px',
    letterSpacing: '0.16px',
    whiteSpace: 'break-spaces',

    [theme.breakpoints.down('sm')]: {
      marginBottom: 23,
      fontSize: 34,
      lineHeight: '40px',
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 17,
      fontSize: 26,
      lineHeight: '34px',
    },

    [theme.breakpoints.down('xxxs')]: {
      marginBottom: 16,
      fontSize: 24,
      lineHeight: '30px',
      letterSpacing: '0.11px',
    },

    '& span': {
      paddingRight: 8,
      display: 'inline-block',
      lineHeight: '40px',
      color: theme.palette.common.black,

      [theme.breakpoints.down('sm')]: {
        lineHeight: '36px',
      },

      [theme.breakpoints.down('xs')]: {
        lineHeight: '30px',
      },
    },
  },
  notFoundPageDescription: {
    marginBottom: 60,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '14px',
    letterSpacing: '-0.025em',
    whiteSpace: 'break-spaces',

    [theme.breakpoints.down('sm')]: {
      marginBottom: 50,
      fontSize: 16,
      lineHeight: '12px',
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: 40,
      fontSize: 14,
      lineHeight: '10px',
    },

    [theme.breakpoints.down('xxxs')]: {
      marginBottom: 30,
      fontSize: 18,
      lineHeight: '14px',
      letterSpacing: '-0.015em',
    },
  },
  notFoundBackButton: {
    maxWidth: 295,
    marginRight: 20,

    [theme.breakpoints.down('sm')]: {
      maxWidth: 273,
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 207,
    },

    [theme.breakpoints.down('xxxs')]: {
      maxWidth: 'unset',
      marginBottom: 10,
    },

    '& > span': {
      [theme.breakpoints.down('xs')]: {
        padding: '13px 0px',
      },

      [theme.breakpoints.down('xxxs')]: {
        padding: '15px 0px',
      },
    },

    '&.offline': {
      [theme.breakpoints.down('xxxs')]: {
        marginBottom: 50,
      },
    },
  },
  notFoundAboutButton: {
    maxWidth: 295,

    [theme.breakpoints.down('sm')]: {
      maxWidth: 273,
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: 207,
    },

    [theme.breakpoints.down('xxxs')]: {
      maxWidth: '100%',
      marginBottom: 50,
    },

    '& > span': {
      backgroundColor: theme.palette.common.white,

      [theme.breakpoints.down('xs')]: {
        padding: '13px 0px',
      },

      [theme.breakpoints.down('xxxs')]: {
        padding: '15px 0px',
      },
    },
  },
}));

export default useStyles;
