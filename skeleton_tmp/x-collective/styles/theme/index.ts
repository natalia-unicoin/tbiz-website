import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import { createTheme } from '@mui/material/styles';

import { TypographyFonts, PaletteColorOptions } from '../../createTheme';

const breakpoints = createBreakpoints({
  values: {
    mobile: 340,
    xxxs: 481,
    xxs: 700,
    xs: 769,
    sm: 992,
    md: 1125,
    lg: 1200,
    xl: 1400,
    xxl: 1600,
    xxxl: 2000,
  },
});

const palette: PaletteColorOptions = {
  text: {
    abbey: '#55585B',
    astral: '#337AB7',
    asphalt: '#040101',
    balticSea: '#2A262D',
    bayOfMany: '#23527C',
    chestnut: '#BE4646',
    dustyGray: '#959595',
    gothic: '#699DA8',
    gray: '#808080',
    gullGray: '#A1ACBC',
    mineShaft: '#383838',
    monsoon: '#8F8D8F',
    iron: '#CFD4D9',
    robRoy: '#EEC366',
    roseFog: '#E0ABAE',
    silver: '#BABABA',
    timberwolf: '#D9D4CF',
    blackPearl: '#0B1223',
  },
  background: {
    abbey: '#55585B',
    aeroBlue: '#A6FFCA',
    alabaster: '#F7F7F7',
    alabaster2: '#FAFAFA',
    alabaster3: '#F8F8F8',
    alabaster4: '#F9F9F9',
    algaeGreen: '#8DE0AF',
    alto: '#D9D9D9',
    alto2: '#DCDCDC',
    alto3: '#DEDEDE',
    amber: '#FAC000',
    antiqueBronze: '#6E4704',
    astronaut: '#21406D',
    athensGray: '#EAEDF0',
    athensGray2: '#E9ECEF',
    athensGray3: '#F0F2F4',
    athensGray4: '#F6F7F9',
    boulder: '#777777',
    blackHaze: '#EBEDED',
    blueDianne: '#225660',
    blueRibbon: '#0038FF',
    brightSun: '#FCD144',
    burntSienna: '#F27657',
    buddhaGold: '#D5A400',
    cloud: '#D0CEC9',
    codGray: '#0F0F0F',
    codGray2: '#1E1E1E',
    codGray3: '#1A1A1A',
    concrete: '#F3F3F3',
    cornHarvest: '#977508',
    comet: '#515572',
    creamCan: '#F5D461',
    creamBrulee: '#FFE89E',
    dallas: '#605222',
    doveGray: '#636363',
    ebony: '#080F1A',
    eggWhite: '#FFF0C0',
    elephant: '#153B58',
    frenchGray: '#C7C6CF',
    fuscousGray: '#52574C',
    fiord: '#425073',
    gallery: '#EEEEEE',
    ghost: '#CACDD3',
    gothic: '#699DA8',
    grandis: '#FFD486',
    gray: '#8D8D8D',
    gray2: '#858585',
    grayAsparagus: '#51574C',
    grayAsparagus2: '#4E574C',
    greenPea: '#22604D',
    hotCinnamon: '#E0692A',
    lochmara: '#0080BF',
    lightgrey: '#DBDBDB',
    mariner: '#277EC3',
    martinique: '#32354B',
    mercury: '#E5E5E5',
    mercury2: '#E7E7E7',
    mineShaft: '#202020',
    mineShaft2: '#2F2F2F',
    mineShaft3: '#212121',
    mineShaft4: '#222222',
    mustard: '#FFE457',
    nobel: '#B3B3B3',
    osloGray: '#8C9199',
    persimmon: '#FF6845',
    porcelain: '#E9EBED',
    red: '#EA001E',
    riverBed: '#484C63',
    salomie: '#FFE285',
    scarlet: '#FF2E00',
    scorpion: '#595959',
    scorpion2: '#585858',
    silver: '#C0C0C0',
    silver2: '#C7C7C7',
    silver3: '#BDBDBD',
    silver4: '#CCCCCC',
    silverChalice: '#AAAAAA',
    silverChalice2: '#A0A0A0',
    silverChalice3: '#AEAEAE',
    silverChalice4: '#A5A5A5',
    sunglow: '#FCC22D',
    tiara: '#C3D0CC',
    thunder: '#332D33',
    tradewind: '#6BAAB5',
    tundora: '#4B4B4B',
    tundora2: '#444444',
    woodsmoke: '#141519',
    wildSand: '#F6F6F6',
    wildSand2: '#F5F5F5',
  },
  decoration: {
    alto: '#D1D1D1',
    athensGray: '#E9ECEF',
    atomicTangerine: '#FF905F',
    bombay: '#B7BABE',
    blueSmoke: '#71877D',
    chestnutRose: '#CE6969',
    comet: '#505472',
    doveGray: '#676767',
    driftwood: '#AA804E',
    driftwood2: '#AA814E',
    ebonyClay: '#252736',
    englishWalnut: '#3E2B26',
    freshGray: '#BBBBBE',
    frenchGray: '#BABABE',
    gallery: '#EAEAEA',
    gallery2: '#EFEFEF',
    gothic: '#699DA8',
    gullGray: '#A1ACBC',
    dustyGray: '#999999',
    kimberly: '#7E749A',
    midGray: '#5C5C6B',
    mineShaft: '#3F3F3F',
    paleSky: '#6E757C',
    persimmon: '#FF6845',
    pinkSalmon: '#CE6969',
    porsche: '#EEC066',
    rawSienna: '#D99041',
    salomie: '#FAD280',
    sandyBrown: '#F2B455',
    santasGray: '#9899B1',
    seaBuckthorn: '#FC9F2D',
    seashell: '#F2F1F1',
    shadow: '#7E6F55',
    silver: '#C4C4C4',
    shuttleGray: '#596A76',
    spicyMix: '#825045',
    sycamore: '#967C42',
    tealBlue: '#033C59',
    wafer: '#DCD0C2',
    zombie: '#E5CB9A',
  },

  gradient: {
    alabaster_white: 'linear-gradient(180deg, #F7F7F7 0%, #FFFFFF 100%)',
    alto_silverChalice:
      'linear-gradient(274.72deg, rgba(222, 222, 222, 0.61) 18.68%, rgba(162, 162, 162, 0.88) 37.54%, rgba(224, 224, 224, 0.57) 57.11%, rgba(209, 209, 209, 0.6) 77.3%, rgba(219, 219, 219, 0.830109) 95.37%)',
    black_black: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
    black_black2: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 68.62%)',
    black_black3: 'linear-gradient(257.29deg, #000000 -0.02%, #00000099 98.88%)',
    black_black__black_black:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 74.23%, #000000 100%), linear-gradient(172.51deg, #000000 22.76%, rgba(0, 0, 0, 0) 53.64%)',
    codGray3_transparent: 'linear-gradient(1deg, rgba(26, 26, 26, 0.80) 0.48%, rgba(0, 0, 0, 0.00) 34.82%)',
    creamBrulee_ronchi: 'linear-gradient(257.29deg, #AA814E -0.02%, #E5CB9A 98.88%)',
    driftwood_tan: 'linear-gradient(0deg, #AA804E 21.73%, #D2B381 77.33%)',
    driftwood_tan2: 'linear-gradient(38.1deg, #AA804E 21.73%, #D2B381 77.33%)',
    emperor_mineShaft: 'linear-gradient(90deg, #555555 20%, #3F3F3F 100%)',
    fireBush_rawSienna: 'linear-gradient(90deg, #E5A035 0%, #DB8F3E 100%)',
    grandis_kumera: 'linear-gradient(193deg, #FFD486 27.61%, #935E2A 67.09%)',
    grandis_white: 'linear-gradient(180deg, #FFD374 0%, rgba(255, 255, 255, 0) 100%)',
    kournikova_porsche: 'linear-gradient(180deg, #FED374 0%, #AD935C 100%)',
    kumera_brandyPunch: 'linear-gradient(90deg, #935E2A 0%, #dd903e 100%)',
    paleSky_santasGray: 'linear-gradient(90deg, #6E757C 0%, #9899b1 100%)',
    parchment_brownRust: 'linear-gradient(87.22deg, #EEE3C7 7.52%, #A47339 102.27%)',
    pickledBean_antiqueBrass: 'linear-gradient(90deg, #734027 3.5%, #C88A59 46.22%, #C58C61 100%)',
    porsche_rawSienna: 'linear-gradient(90deg, #EEC066 3.5%, #DB8f3E 100%)',
    seaBuckthorn_white: 'linear-gradient(235.96deg, rgba(252, 159, 45, 0.2) 18.17%, rgba(255, 255, 255, 0) 75.23%)',
    seaBuckthorn_white_2: 'linear-gradient(204.23deg, rgba(252, 159, 45, 0.2) 1.18%, rgba(255, 255, 255, 0) 101%)',
    shuttleGray_regentGray: 'linear-gradient(90deg, #596A76 0%, #838B98 100%)',
    sycamore_zombie: 'linear-gradient(58.34deg, #967C42 7.63%, #E5CB9A 45.43%)',
    sycamore_zombie_driftwood: 'linear-gradient(90deg, #967C42 29.98%, #E5CB9A 40.18%, #AA814E 53.02%)',
    sycamore_zombie_driftwood2: 'linear-gradient(91.01deg, #967C42 1.33%, #E5CB9A 24.99%, #AA814E 54.77%)',
    sycamore_zombie_driftwood3: 'linear-gradient(90deg, #967C42 55.21%, #E5CB9A 68.27%, #AA814E 84.72%)',
    thunder_ebony: 'linear-gradient(122.71deg, #3C3339 0%, #080F1A 87.06%)',
    white_white: 'linear-gradient(219.29deg, rgba(255, 255, 255, 0.3) 15.25%, rgba(255, 255, 255, 0.045) 91%)',
    white_white_2: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
    white_transparent: 'linear-gradient(180deg, #FFFFFF 21.88%, rgba(255, 255, 255, 0) 64.06%)',
    whiteRock_zombie_indianKhaki: 'linear-gradient(90deg, #E7DECE 3.5%, #E5CB9A 46.22%, #BEAC8E 100%)',
    whiteRock_zombie_mongoose: 'linear-gradient(90deg, #E7DECE 3.5%, #E5CB9A 46.22%, #B7A78C 100%)',
    whiteRock_zombie_whiteRock: 'linear-gradient(90deg, #E7DECE 3.5%, #E5CB9A 46.22%, #E6DDCB 100%)',
    zombie_driftwood: 'linear-gradient(98.36deg, #E5CB9A 0%, #AA814E 10.47%)',
    zombie_sycamore: 'linear-gradient(90deg, #E5CB9A 3.5%, #967c42 100%)',
    zombie_sycamore_driftwood: 'linear-gradient(90deg, #967C42 3.5%, #E5CB9A 46.22%, #AA814E 100%)',
    zombie_sycamore_driftwood2: 'linear-gradient(90deg, #967C42 4.24%, #E5CB9A 44.51%, #AA814E 95.2%)',
  },
  common: {
    white: '#FFFFFF',
    black: '#000000',
  },
};

const fonts: TypographyFonts = {
  moul: 'Moul, sans-serif',
  montserrat: 'Montserrat, sans-serif',
  roboto: 'Roboto Condensed, sans-serif',
  inter: 'Inter, sans-serif',
  playfair: 'Playfair, sans-serif',
};

const theme = createTheme({
  breakpoints,
  palette,
  typography: {
    fonts,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: palette.common.black,
          fontFamily: 'Montserrat, sans-serif',
          isolation: 'isolate',
          backgroundColor: palette.common.white,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        },

        '& .swiper-horizontal': {
          '.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal': {
            bottom: 30,
            height: 18,

            [breakpoints.down('sm')]: {
              bottom: 20,
            },

            [breakpoints.down('mobile')]: {
              bottom: 17,
            },
          },

          '.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet': {
            width: 9,
            height: 9,
            margin: '0 10px',
            backgroundColor: palette.common.white,
            opacity: 0.5,
          },

          '.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet.swiper-pagination-bullet-active':
            {
              backgroundColor: palette.common.white,
              opacity: 1,
            },
        },

        a: {
          color: 'inherit',
          textDecorationLine: 'underline',
          textDecorationThickness: 2,
          textUnderlineOffset: 4,
          textDecorationColor: palette.background.brightSun,
          transition: 'text-decoration-color .3s ease-in-out',

          '&:is(:hover, :focus-within)': {
            textDecorationColor: 'transparent',
          },
        },

        '& .defaultUnderline': {
          fontWeight: 700,
          color: palette.common.black,
          textDecorationLine: 'underline',
          textDecorationThickness: 2,
          textUnderlineOffset: 4,
          textDecorationColor: palette.background.brightSun,
          transition: 'text-decoration-color 0.3s ease',

          '&:focus-within': {
            textDecorationColor: palette.background.brightSun,
          },

          '&:hover': {
            textDecorationColor: 'transparent',
          },
        },

        '& .gradientBorder': {
          position: 'relative',
          display: 'block',
          textAlign: 'center',
          overflow: 'hidden',
          borderRadius: '50%',

          '& i': {
            position: 'absolute',
            inset: 0,
            padding: 1,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0) padding-box',
            maskComposite: 'source-out',
            WebkitMaskComposite: 'source-out',
            borderRadius: '50%',
            zIndex: -1,

            '@supports not ((mask-composite: source-out) or (-webkit-mask-composite: source-out))': {
              maskComposite: 'exclude',
            },

            '&::before': {
              content: '""',
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: '100%',
              height: '100%',
              backgroundImage:
                'linear-gradient(142.67deg, rgba(252, 159, 45, 0.2) 18.25%, rgba(255, 255, 255, 0.2) 81.24%)',
              transform: 'translate(-50%, -50%)',
            },
          },
        },

        'input::placeholder': {
          opacity: 0.5,

          [breakpoints.down('sm')]: {
            fontSize: 12,
          },
        },

        button: {
          fontFamily: fonts.montserrat,
          border: 'none',
          transition: 'opacity 0.3s',

          '&:disabled': {
            opacity: 0.5,
          },
        },

        '& .arrowRightAnim': {
          '& span': {
            overflow: 'unset !important',
          },

          '& img[src="/images/official-coin/gradient-arrow-2.svg"]': {
            transition: 'transform 0.5s',
          },

          '&:hover': {
            '& img[src="/images/official-coin/gradient-arrow-2.svg"]': {
              transform: 'translateX(13px) scaleX(0.85)',
            },
          },
        },

        '& .gradientGoldText': {
          padding: 1,
          display: 'inline-block',
          backgroundImage: palette.gradient.creamBrulee_ronchi,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          clipPath: 'inset(1px)',
          WebkitTextFillColor: 'transparent',
          textFillColor: 'transparent',
          backgroundSize: 'cover',
          letterSpacing: '0.02em',
        },

        '& .defaultCorner': {
          position: 'relative',

          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: 130,
            height: 130,
            borderTop: 'solid',
            borderRight: 'solid',
            borderWidth: 16,
            borderColor: palette.background.brightSun,
            backfaceVisibility: 'hidden',

            [breakpoints.down('sm')]: {
              width: 90,
              height: 90,
              borderWidth: 15,
            },

            [breakpoints.down('xs')]: {
              width: 70,
              height: 70,
            },

            [breakpoints.down('xxs')]: {
              width: 84,
              height: 84,
              borderWidth: 12,
            },

            [breakpoints.down('xxxs')]: {
              width: 60,
              height: 60,
            },
          },
        },

        '& .defaultTextHighlight': {
          background: palette.background.brightSun,
          boxShadow: `
            -10px 0 ${palette.background.brightSun},
            inset 5em 5em ${palette.background.brightSun}`,
          boxDecorationBreak: 'clone',
          borderRadius: 2,

          [breakpoints.down('xs')]: {
            boxShadow: `
              -6px 0 ${palette.background.brightSun},
              inset 5em 5em ${palette.background.brightSun}`,
          },
        },

        'ul, ol': {
          listStyle: 'none',
        },

        '& .submitDataWithPrivacy': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          rowGap: 40,

          [breakpoints.down('xs')]: {
            rowGap: 30,
          },
        },

        '& .submitDataWithPrivacyButton': {
          maxWidth: 212,
          fontFamily: fonts.montserrat,
          fontWeight: 500,
          fontSize: 12,
          lineHeight: '15px',
          textTransform: 'uppercase',

          '& p': {
            lineHeight: '20px',
          },

          [breakpoints.down(1080)]: {
            maxWidth: 160,
          },

          [breakpoints.down(850)]: {
            maxWidth: 212,
          },

          [breakpoints.down('xxxs')]: {
            maxWidth: '100%',
          },

          '&.es': {
            [breakpoints.down(1080)]: {
              maxWidth: 160,
            },

            [breakpoints.down(980)]: {
              maxWidth: 212,
            },

            [breakpoints.down('xxxs')]: {
              maxWidth: 'unset',
            },
          },

          '&.pt': {
            [breakpoints.down(1080)]: {
              maxWidth: 160,
            },

            [breakpoints.down(980)]: {
              maxWidth: 212,
            },

            [breakpoints.down('xxxs')]: {
              maxWidth: 'unset',
            },
          },
        },

        '& .permissionToEmail': {
          position: 'relative',
          paddingTop: 16,
          fontWeight: 300,
          fontSize: 12,
          lineHeight: '20px',
          letterSpacing: '0.56px',
          color: palette.common.black,
        },

        '& .triangles-top-right': {
          position: 'absolute',
          top: 0,
          right: 0,
          width: 180,
          height: 180,
          zIndex: 5,

          [breakpoints.down('xl')]: {
            width: 130,
            height: 130,
            right: 0,
          },

          [breakpoints.down('xs')]: {
            width: 100,
            height: 100,
            right: 0,
          },

          [breakpoints.down('xxs')]: {
            display: 'none',
          },

          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
          },

          '&::after': {
            borderWidth: '0 24px 180px 0',
            borderColor: `transparent ${palette.background.brightSun} transparent transparent`,

            [breakpoints.down('xl')]: {
              borderWidth: '0 17px 100px 0',
            },

            [breakpoints.down('xs')]: {
              borderWidth: '0 13px 80px 0',
            },
          },

          '&::before': {
            borderWidth: '0 180px 24px 0',
            borderColor: `transparent ${palette.background.brightSun} transparent transparent`,

            [breakpoints.down('xl')]: {
              borderWidth: '0 100px 17px 0',
            },

            [breakpoints.down('xs')]: {
              borderWidth: '0 80px 13px 0',
            },
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export { default as createEmotionCache } from './createEmotionCache';

export default theme;
