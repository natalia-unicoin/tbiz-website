import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  export interface BreakpointOverrides {
    mobile: true;
    phone: true;
    xxxs: true;
    xxs: true;
    xxl: true;
  }
}

declare module '@mui/system/createTheme/createBreakpoints' {
  export interface BreakpointOverrides {
    mobile: true;
    xxxs: true;
    xxs: true;
    xxl: true;
    xxxl: true;
  }
}

export interface PaletteTypeText {
  abbey: string;
  astral: string;
  asphalt: string;
  balticSea: string;
  bayOfMany: string;
  chestnut: string;
  dustyGray: string;
  gothic: string;
  gray: string;
  gullGray: string;
  mineShaft: string;
  monsoon: string;
  iron: string;
  robRoy: string;
  roseFog: string;
  silver: string;
  timberwolf: string;
  blackPearl: string;
}

export interface PaletteTypeBackground {
  abbey: string;
  aeroBlue: string;
  alabaster: string;
  alabaster2: string;
  alabaster3: string;
  alabaster4: string;
  algaeGreen: string;
  alto: string;
  alto2: string;
  alto3: string;
  amber: string;
  antiqueBronze: string;
  astronaut: string;
  athensGray: string;
  athensGray2: string;
  athensGray3: string;
  athensGray4: string;
  boulder: string;
  blackHaze: string;
  blueDianne: string;
  blueRibbon: string;
  brightSun: string;
  burntSienna: string;
  buddhaGold: string;
  cloud: string;
  codGray: string;
  codGray2: string;
  codGray3: string;
  comet: string;
  concrete: string;
  cornHarvest: string;
  creamCan: string;
  creamBrulee: string;
  dallas: string;
  doveGray: string;
  ebony: string;
  eggWhite: string;
  elephant: string;
  frenchGray: string;
  fuscousGray: string;
  fiord: string;
  gallery: string;
  ghost: string;
  gothic: string;
  grandis: string;
  gray: string;
  gray2: string;
  grayAsparagus: string;
  grayAsparagus2: string;
  greenPea: string;
  hotCinnamon: string;
  lochmara: string;
  lightgrey: string;
  mariner: string;
  martinique: string;
  mercury: string;
  mercury2: string;
  mineShaft: string;
  mineShaft2: string;
  mineShaft3: string;
  mineShaft4: string;
  mustard: string;
  nobel: string;
  osloGray: string;
  persimmon: string;
  porcelain: string;
  red: string;
  riverBed: string;
  salomie: string;
  scarlet: string;
  scorpion: string;
  scorpion2: string;
  silver: string;
  silver2: string;
  silver3: string;
  silver4: string;
  silverChalice: string;
  silverChalice2: string;
  silverChalice3: string;
  silverChalice4: string;
  sunglow: string;
  tiara: string;
  silver: string;
  thunder: string;
  tradewind: string;
  tundora: string;
  tundora2: string;
  woodsmoke: string;
  wildSand: string;
  wildSand2: string;
}

export interface PaletteTypeDecoration {
  alto: string;
  athensGray: string;
  atomicTangerine: string;
  bombay: string;
  blueSmoke: string;
  chestnutRose: string;
  comet: string;
  doveGray: string;
  dustyGray: string;
  driftwood: string;
  driftwood2: string;
  ebonyClay: string;
  englishWalnut: string;
  freshGray: string;
  frenchGray: string;
  gallery: string;
  gallery2: string;
  gothic: string;
  gullGray: string;
  kimberly: string;
  midGray: string;
  mineShaft: string;
  paleSky: string;
  persimmon: string;
  pinkSalmon: string;
  porsche: string;
  rawSienna: string;
  salomie: string,
  sandyBrown: string;
  santasGray: string;
  seaBuckthorn: string;
  seashell: string;
  shadow: string;
  silver: string;
  shuttleGray: string;
  spicyMix: string;
  sycamore: string;
  tealBlue: string;
  wafer: string;
  zombie: string;
}

export interface PaletteTypeGradient {
  alabaster_white: string;
  alto_silverChalice: string;
  black_black: string;
  black_black2: string;
  black_black3: string;
  black_black__black_black: string;
  codGray3_transparent: string;
  creamBrulee_ronchi: string;
  driftwood_tan: string;
  driftwood_tan2: string;
  emperor_mineShaft: string;
  fireBush_rawSienna: string;
  grandis_kumera: string;
  grandis_white: string;
  kournikova_porsche: string;
  kumera_brandyPunch: string;
  paleSky_santasGray: string;
  parchment_brownRust: string;
  pickledBean_antiqueBrass: string;
  porsche_rawSienna: string;
  seaBuckthorn_white: string;
  seaBuckthorn_white_2: string;
  shuttleGray_regentGray: string;
  sycamore_zombie: string;
  sycamore_zombie_driftwood: string;
  sycamore_zombie_driftwood2: string;
  sycamore_zombie_driftwood3: string;
  thunder_ebony: string;
  white_white: string;
  white_white_2: string;
  white_transparent: string;
  whiteRock_zombie_indianKhaki: string;
  whiteRock_zombie_mongoose: string;
  whiteRock_zombie_whiteRock: string;
  zombie_driftwood: string;
  zombie_sycamore: string;
  zombie_sycamore_driftwood: string;
  zombie_sycamore_driftwood2: string;
}

export interface PaletteTypeCommon {
  white: string;
  black: string;
}

export interface PaletteColorOptions {
  text: PaletteTypeText;
  background: PaletteTypeBackground;
  decoration: PaletteTypeDecoration;
  gradient: PaletteTypeGradient;
  common: PaletteTypeCommon;
}

declare module '@mui/material/styles/createPalette' {
  export interface TypeText extends PaletteTypeText {}
  export interface TypeBackground extends PaletteTypeBackground {}
  export interface TypeDecoration extends PaletteTypeDecoration {}
  export interface TypeGradient extends PaletteTypeGradient {}
  export interface TypeCommon extends PaletteTypeCommon {}

  export interface PaletteOptions {
    text: TypeText;
    background: TypeBackground;
    decoration: TypeDecoration;
    gradient: TypeGradient;
    common: TypeCommon;
  }
  // Need for rewrite of Material interface
  interface Palette extends PaletteOptions {}
}

export interface TypographyFonts {
  moul: string;
  montserrat: string;
  roboto: string;
  inter: string;
  playfair: string;
}

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    fonts: TypographyFonts;
  }

  interface Typography extends TypographyOptions {}
}
