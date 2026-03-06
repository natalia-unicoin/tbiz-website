import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',

    '&.withSticky': {
      '& main': {
        overflow: 'unset',
      },
    },

    '&.withoutHeader': {
      '& header, & > .PrivateSwipeArea-root': {
        display: 'none',
      },

      '& main': {
        paddingTop: 0,
      },
    },

    '& main': {
      paddingTop: 80,
      flex: 1,
      overflow: 'hidden',

      [theme.breakpoints.down('lg')]: {
        paddingTop: 60,
      },
    },
  },
}));

export default useStyles;
