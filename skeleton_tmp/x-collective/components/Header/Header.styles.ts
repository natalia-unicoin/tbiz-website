import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  headerRoot: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #f3f4f6',
  },
  headerContainer: {
    maxWidth: '1120px',
    margin: '0 auto',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLogoWrapper: {
    width: '12rem',
  },
  headerLogoImg: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  headerRight: {
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
  },
  headerLangSwitcher: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  headerLangActive: {
    color: '#000',
    fontWeight: 700,
    cursor: 'pointer',
  },
  headerLangSeparator: {
    color: '#d1d5db',
  },
  headerLangInactive: {
    color: '#9ca3af',
    cursor: 'pointer',
    transition: 'color .2s',

    '&:hover': {
      color: '#000',
    },
  },
  headerJoinBtn: {
    background: '#000',
    color: '#fff',
    padding: '0.65rem 1.5rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'background .2s',

    '&:hover': {
      background: '#1f2937',
    },
  },
}));

export default useStyles;
