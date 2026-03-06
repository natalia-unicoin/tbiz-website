import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      position: 'relative',
      width: '100%',
      height: '100%',
      padding: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      [theme.breakpoints.down('lg')]: {
        padding: 50,
      },

      [theme.breakpoints.down('xxs')]: {
        padding: '60px 16px',
      },

      '&.fullPaddingTop': {
        paddingTop: 140,

        [theme.breakpoints.down('xxl')]: {
          paddingTop: 100,
        },

        [theme.breakpoints.up('lg')]: {
          '@media (max-height: 900px)': {
            paddingTop: 80,
          },
        },

        [theme.breakpoints.down('lg')]: {
          paddingTop: 80,
        },

        [theme.breakpoints.down('xs')]: {
          paddingTop: 60,
        },
      },

      '&.fullPaddingBottom': {
        paddingBottom: 140,

        [theme.breakpoints.down('xxl')]: {
          paddingBottom: 100,
        },

        [theme.breakpoints.up('lg')]: {
          '@media (max-height: 900px)': {
            paddingBottom: 80,
          },
        },

        [theme.breakpoints.down('lg')]: {
          paddingBottom: 80,
        },

        [theme.breakpoints.down('xs')]: {
          paddingBottom: 60,
        },
      },

      '&.noPaddingTop': {
        paddingTop: 0,
      },

      '&.noPaddingBottom': {
        paddingBottom: 0,
      },

      '&.noPaddingsAside': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    contentWrapper: {
      maxWidth: 2000,
      width: '100%',
    },
  };
});

export default useStyles;
