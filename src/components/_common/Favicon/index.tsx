import {
  FC,
  ReactNode,
  memo,
} from 'react';
import Head from 'next/head';

interface FaviconProps {
  applicationName: string;
  iconTileColor: string;
  iconPath: string;
  children?: ReactNode;
}

const Favicon: FC<FaviconProps> = ({
  applicationName,
  iconTileColor,
  iconPath,
  children,
}) => {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="120x120" href={`${iconPath}apple-touch-icon-dark.png`} media="(prefers-color-scheme: dark)" />
      <link rel="icon" type="image/png" sizes="48x48" href={`${iconPath}favicon-dark.png`} media="(prefers-color-scheme: dark)" />
      <link rel="apple-touch-icon" sizes="120x120" href={`${iconPath}apple-touch-icon.png`} media="(prefers-color-scheme: light)" />
      <link rel="icon" type="image/png" sizes="32x32" href={`${iconPath}application-unicoin-32x32.png`} media="(prefers-color-scheme: light)" />
      <link rel="icon" type="image/png" sizes="16x16" href={`${iconPath}application-unicoin-16x16.png`} media="(prefers-color-scheme: light)" />
      <link rel="manifest" href={`${iconPath}site.webmanifest`} />
      <link rel="mask-icon" href={`${iconPath}safari-pinned-tab.svg`} color="#000000" media="(prefers-color-scheme: dark)" />
      <link rel="mask-icon" href={`${iconPath}safari-pinned-tab.svg`} color="#000000" media="(prefers-color-scheme: light)" />
      <link rel="shortcut icon" href={`${iconPath}favicon-dark.ico`} media="(prefers-color-scheme: dark)" />
      <link rel="shortcut icon" href={`${iconPath}favicon.ico`} media="(prefers-color-scheme: light)" />
      <link rel="manifest" href={`${iconPath}site.webmanifest`} />
      <meta name="apple-mobile-web-app-title" content={applicationName} />
      <meta name="application-name" content={applicationName} />
      <meta name="msapplication-TileColor" content={iconTileColor} />
      <meta name="msapplication-config" content={`${iconPath}browserconfig.xml`} />
      {children && children}
    </Head>
  );
};

export default memo(Favicon);
