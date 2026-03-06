export const AXIOS_TIMEOUT_REKOGNITION = 6e4; // wait 60 sec. needed for AWS Rekognition to process large files

export const UNICORN_HUNTERS_URL = 'https://unicornhunters.com/';

export const UNICORN_STORE_URL = 'https://unicornstore.co/';

export const ACCREDITED_INVESTOR_COUNTRIES: string[] = [
  'united states',
  'puerto rico',
];

export const DEFAULT_CRYPTO_CURRENCY_SELL = 'USDT';

export const UNICOIN_PRICE = Number(process.env.NEXT_PUBLIC_UNICOIN_PRICE || 0.05);
export const MAX_CURRENCY_AMOUNT = Number(process.env.NEXT_PUBLIC_MAX_CURRENCY_AMOUNT || 1000000);
export const MIN_CURRENCY_AMOUNT = Number(process.env.NEXT_PUBLIC_MIN_CURRENCY_AMOUNT || 1000);
export const DEFAULT_MONEY_AMOUNT = Number(process.env.NEXT_PUBLIC_DEFAULT_MONEY_AMOUNT || 6000);

export const USE_COOKIE_EXPIRE_TIME = 31536000; // One year in seconds

export const SWAP_URL_LINK = process.env.NEXT_PUBLIC_SWAP_URL_LINK || '';
export const SIG_KEY = process.env.NEXT_PUBLIC_SIG_KEY || '';

export const COUNTRY_STATE_CITY_API_KEY = process.env.NEXT_PUBLIC_COUNTRY_STATE_CITY_API_KEY || '';

export const PARTNERS_FORM_WEBHOOK = process.env.NEXT_PUBLIC_PARTNERS_FORM_WEBHOOK || null;

export const WHITEPAPER_LINK = process.env.NEXT_PUBLIC_WHITEPAPER_LINK || '';

export const ETH_ADDRESS = process.env.NEXT_PUBLIC_ETH_ADDRESS || '';

export const ALCHEMY_TO = process.env.NEXT_PUBLIC_ALCHEMY_TESTWALLET_TO || '';
export const ALCHEMY_FROM = process.env.NEXT_PUBLIC_ALCHEMY_TESTWALLET_FROM || '';

export const UNICOIN_SIGN = 'UX';

export const TOKEN_SALE_WIDGET = process.env.NEXT_PUBLIC_TOKEN_SALE_WIDGET === 'true';

export const ZAPIER_WEBHOOK_SUBSCRIBE = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_SUBSCRIBE || '';

export const EVENT_FORM = process.env.NEXT_PUBLIC_EVENT_FORM || '';

export const MEDIAKIT_LINK = process.env.NEXT_PUBLIC_MEDIAKIT_LINK || '';

export const WEEX_LINK = process.env.NEXT_PUBLIC_WEEX_LINK || null;
export const MEXC_LINK = process.env.NEXT_PUBLIC_MEXC_LINK || null;
export const UNISWAP_LINK = process.env.NEXT_PUBLIC_UNISWAP_LINK || null;

export const CREATORS_LINK = 'https://unicoin.forms.app/creators';
export const PARTNERS_LINK = 'https://unicoin.forms.app/partners';
