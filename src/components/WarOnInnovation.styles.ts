import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
    const isYellowBg = theme.palette.info.main === '#FCD144';
    const textColor = isYellowBg ? '#10141E' : theme.palette.text.primary;
    const textAlpha80 = isYellowBg ? 'rgba(16, 20, 30, 0.8)' : theme.palette.text.secondary;
    const textAlpha90 = isYellowBg ? 'rgba(16, 20, 30, 0.9)' : theme.palette.text.primary;
    const accentColor = theme.palette.mode === 'dark' ? theme.palette.secondary.main : (isYellowBg ? theme.palette.primary.main : theme.palette.secondary.main);

    return {
        section: {
            paddingTop: '80px',
            paddingBottom: '120px',
            backgroundColor: theme.palette.background.default, // Let theme handle it
            color: textColor,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.up('lg')]: {
                paddingTop: '160px',
                paddingBottom: '200px',
            }
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            [theme.breakpoints.up('lg')]: {
                paddingLeft: '150px',
                paddingRight: '150px',
            }
        },
        eyebrow: {
            fontFamily: theme.typography.body1.fontFamily,
            fontWeight: 600,
            letterSpacing: '0.05em',
            marginBottom: theme.spacing(3),
            fontSize: '14px',
            textTransform: 'none', // Keep it elegant, not shouting
            color: textAlpha80,
            [theme.breakpoints.up('md')]: {
                fontSize: '16px',
            }
        },
        mainTitle: {
            fontFamily: theme.typography.h1.fontFamily,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: textColor,
            marginBottom: theme.spacing(4),
            fontSize: '32px',
            [theme.breakpoints.up('md')]: {
                fontSize: '56px',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '64px',
            }
        },
        accent: {
            color: accentColor,
        },
        description: {
            fontFamily: theme.typography.body1.fontFamily,
            fontSize: '16px',
            lineHeight: 1.5,
            color: textAlpha90,
            fontWeight: 400,
            maxWidth: '800px',
            margin: '0 auto',
            marginBottom: theme.spacing(10),
            [theme.breakpoints.up('md')]: {
                fontSize: '20px',
            }
        },
        metricGrid: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing(6),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row',
                gap: theme.spacing(12),
            }
        },
        metricItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        metricDivider: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'block',
                width: '1px',
                height: '80px',
                backgroundColor: 'rgba(250, 251, 252, 0.2)',
            }
        },
        metricValue: {
            fontSize: '3rem',
            fontWeight: 700,
            color: textColor,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            fontFamily: theme.typography.h1.fontFamily,
            [theme.breakpoints.up('md')]: {
                fontSize: '5rem',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '6rem',
            }
        },
        metricLabel: {
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: textAlpha80, // Subdued label color
            marginTop: theme.spacing(2),
            fontWeight: 600,
            fontFamily: theme.typography.body1.fontFamily,
        }
    };
});
