import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  footerRoot: {
    background: '#ffffff',
    color: '#000',
    paddingTop: '4rem',
    paddingBottom: '4rem',
    borderTop: '1px solid #f3f4f6',
  },
  footerContainer: {
    maxWidth: '1120px',
    margin: '0 auto',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '4rem',
    marginBottom: '4rem',

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
    },
  },
  footerBrandCol: {
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 4 / span 4',
    },
  },
  footerLogoWrapper: {
    width: '12rem',
    marginBottom: '1.5rem',
  },
  footerLogoImg: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  footerBrandText: {
    color: '#6b7280',
    lineHeight: 1.625,
    maxWidth: '20rem',
    marginBottom: '2rem',
  },
  footerSocialLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  footerSocialBtn: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    background: '#f9fafb',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',

    '& svg': {
      transition: 'transform 0.3s ease',
    },

    '&:hover': {
      background: '#000',
      color: '#fff',

      '& svg': {
        transform: 'scale(1.1)',
      },
    },
  },
  footerColumnTitle: {
    fontWeight: 700,
    marginBottom: '1.5rem',
  },
  footerLinkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    color: '#6b7280',

    '& li + li': {
      marginTop: '1rem',
    },
  },
  footerLink: {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'color 0.2s ease',

    '&:hover': {
      color: '#000',
    },
  },
  footerPlatformCol: {
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 2',
      gridColumnStart: 7,
    },
  },
  footerCommunityCol: {
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 2',
    },
  },
  footerLegalCol: {
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 2',
    },
  },
  footerBottom: {
    paddingTop: '2rem',
    borderTop: '1px solid #f3f4f6',
  },
  footerBottomStrip: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    fontSize: '10px',
    fontWeight: 700,
    color: '#9ca3af',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  footerBottomSeparator: {
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'inline',
      color: '#d1d5db',
    },
  },
  footerBottomNote: {
    marginTop: '2rem',
    textAlign: 'center',
    fontSize: '10px',
    color: '#d1d5db',
  },
  footerBottomBrand: {
    whiteSpace: 'nowrap',
    fontWeight: 700,
    marginLeft: '4px',
    marginRight: '4px',
  },
}));

export default useStyles;
