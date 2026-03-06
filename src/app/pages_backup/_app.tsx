import type { AppProps } from 'next/app';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { CacheProvider, EmotionCache } from '@emotion/react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { CAPTCHA_SCRIPT_PROPS } from 'constants/captcha';

import {
  useScrollRestoration,
  useScrollByQuery,
} from 'hooks';

import store, { CustomContext } from 'store';

import MainLayout from 'components/_layouts/MainLayout';
import { Meta, Favicon } from 'components/_common';

import theme, { createEmotionCache } from 'styles/theme';

// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import '../styles/fonts.css';
import '../styles/globals.css';

const reCaptchaKey = process.env.NEXT_PUBLIC_GOOGLE_RE_CAPTCHA_KEY;
const gaMeasurementId = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;
const hotjarSiteId = process.env.NEXT_PUBLIC_HOTJAR_SITE_ID;
const cfToken = process.env.NEXT_PUBLIC_CLOUDFLARE_INSIGHTS_TOKEN;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const cliengoChatUrl = process.env.NEXT_PUBLIC_CLIENGO_CHAT_URL;

interface AppPropsWithEmotion extends AppProps {
  emotionCache?: EmotionCache;
}

const MarketApp = ({
  Component,
  pageProps,
  router,
  emotionCache = createEmotionCache(),
}: AppPropsWithEmotion) => {
  useScrollRestoration(router);
  useScrollByQuery();

  return (
    <>
      {/* Cliengo chatbot widget */}
      {cliengoChatUrl && (
      <Script id="cliengo-chatbot" strategy="afterInteractive">
        {`
          (function () {
            var ldk = document.createElement('script');
            ldk.type = 'text/javascript';
            ldk.async = true;
            ldk.src = '${cliengoChatUrl}';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ldk, s);
          })();
        `}
      </Script>
      )}

      {/* Google Tag Manager gtag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}');
        `}
      </Script>

      {/* Cloudflare Web Analytics */}
      {cfToken && (
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${cfToken}"}`}
        />
      )}

      {/* Google tracking offline conversions */}
      <Script id="google-gclid">
        {`
          function getParam(p) {
            var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
            return match && decodeURIComponent(match[1].replace(/\\+/g, ' '));
          }
          function getExpiryRecord(value) {
            var expiryPeriod = 90 * 24 * 60 * 60 * 1000;
            var expiryDate = new Date().getTime() + expiryPeriod;

            return {
              value: value,
              expiryDate: expiryDate,
            };
          }
          function addGclid() {
            var gclidParam = getParam('gclid');
            var gclidFormFields = [
              'gclid_personal',
              'gclid_subscribe',
              'gclid_request',
              'gclid_check',
              'gclid_crypto',
              'gclid_directa',
              'gclid_mine',
              'gclid_ambassador',
            ];
            var gclidRecord = null;
            var currGclidFormFields = [];
            var gclsrcParam = getParam('gclsrc');
            var isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf('aw') !== -1;

            gclidFormFields.forEach(function (field) {
              if (document.getElementById(field)) {
                currGclidFormFields.push(document.getElementById(field));
              }
            });

            if (gclidParam && isGclsrcValid) {
              gclidRecord = getExpiryRecord(gclidParam);
              localStorage.setItem('gclid', JSON.stringify(gclidRecord));
            }

            var gclid = gclidRecord || JSON.parse(localStorage.getItem('gclid'));
            var isGclidValid = gclid && new Date().getTime() < gclid.expiryDate;

            if (currGclidFormFields.length > 0 && isGclidValid) {
              currGclidFormFields.forEach(function (currGclidFormField) {
                currGclidFormField.value = gclid.value;
              });
            }
          }
          window.addEventListener('load', addGclid);
        `}
      </Script>

      {/* Hotjar Tracking Code */}
      {hotjarSiteId && (
        <Script id="Hotjar">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${hotjarSiteId},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      )}

      <CustomContext.Provider value={store}>
        <GoogleReCaptchaProvider
          reCaptchaKey={reCaptchaKey}
          scriptProps={CAPTCHA_SCRIPT_PROPS}
        >
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <Meta
                title="X Collective"
                description="A Utility Token Designed to Reward Value Creation. Earn by Contributing to the Community, Redeem for Exclusive Access and Experiences."
                img_url="/images/main/og-image.png"
                theme_color="#ffffff"
              >
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="alternate" href={`${siteUrl}${router.asPath}`} hrefLang="x-default" />
                {[...router.locales].sort().map((locale) => (
                  <link key={locale} rel="alternate" href={`${siteUrl}${locale === router.defaultLocale ? '' : `/${locale}`}${router.asPath === '/' && locale !== router.defaultLocale ? '' : router.asPath}`} hrefLang={locale} />
                ))}
              </Meta>

              <Favicon
                applicationName="X Collective"
                iconTileColor="#b89462"
                iconPath="/favicon/"
              />

              <CssBaseline />

              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </ThemeProvider>
          </CacheProvider>
        </GoogleReCaptchaProvider>
      </CustomContext.Provider>
    </>
  );
};

export default appWithTranslation(MarketApp);
