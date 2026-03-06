import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  foundingMemberRoot: {
    backgroundColor: '#ffffff',
    color: '#000000',
    paddingTop: '64px',
    paddingBottom: '64px',

    [theme.breakpoints.down('xs')]: {
      paddingTop: '48px',
      paddingBottom: '48px',
    },
  },
  foundingMemberContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingLeft: '32px',
    paddingRight: '32px',
  },
  foundingMemberLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '48px',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  foundingMemberColumn: {
    width: '50%',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  foundingMemberImageWrapper: {
    position: 'relative',
    aspectRatio: '4/5',
    borderRadius: '24px',
    overflow: 'hidden',
  },
  foundingMemberImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  foundingMemberContent: {
    width: '50%',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  foundingMemberTitle: {
    fontWeight: 700,
    marginBottom: '32px',
    lineHeight: '0.9',
    letterSpacing: '-0.04em',
    fontSize: '4.5rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '3.75rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '2.25rem',
    },
  },
  foundingMemberDescription: {
    fontSize: '1.25rem',
    lineHeight: '1.7',
    color: '#4b5563',
    marginBottom: '32px',

    [theme.breakpoints.down('xs')]: {
      fontSize: '1.125rem',
    },
  },
  foundingMemberDescriptionHighlight: {
    whiteSpace: 'nowrap',
    fontWeight: 700,
  },
  foundingMemberTagsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    marginBottom: '40px',
  },
  foundingMemberTag: {
    padding: '8px 16px',
    backgroundColor: '#f3f4f6',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
  },
  foundingMemberButton: {
    backgroundColor: '#ebe462',
    color: '#000000',
    padding: '16px 32px',
    fontSize: '0.875rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 150ms ease',

    '&:hover': {
      backgroundColor: '#d4cd55',
    },
  },
}));

export default useStyles;
