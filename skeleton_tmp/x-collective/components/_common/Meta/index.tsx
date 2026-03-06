import {
  FC,
  ReactNode,
  memo,
} from 'react';
import Head from 'next/head';

interface MetaProps {
  title: string;
  description?: string;
  img_url?: string;
  video?: string;
  theme_color?: string;
  children?: ReactNode;
}

const Meta: FC<MetaProps> = ({
  title,
  description,
  img_url,
  video,
  theme_color,
  children,
}) => {
  return (
    <Head>
      {title && (
        <>
          <title>
            {title}
          </title>

          <meta
            name="title"
            key="title"
            content={title}
          />

          <meta
            property="og:title"
            key="og:title"
            content={title}
          />

          <meta
            property="twitter:title"
            key="twitter:title"
            content={title}
          />
        </>
      )}

      {description && (
        <>
          <meta
            name="description"
            key="description"
            content={description}
          />

          <meta
            property="og:description"
            key="og:description"
            content={description}
          />

          <meta
            property="twitter:description"
            key="twitter:description"
            content={description}
          />
        </>
      )}

      {video && (
        <>
          <meta
            property="og:type"
            key="og:type"
            content="video"
          />

          <meta
            property="og:video"
            key="og:video"
            content={video}
          />

          <meta
            property="og:secure_url"
            key="og:secure_url"
            content={video}
          />

          <meta
            property="og:video:type"
            key="og:video:type"
            content="application/x-shockwave-flash"
          />

          <meta
            property="og:video:height"
            key="og:video:height"
            content="273"
          />

          <meta
            property="og:video:width"
            key="og:video:width"
            content="406"
          />

          <meta
            property="twitter:player"
            key="twitter:player"
            content={video}
          />
        </>
      )}

      {img_url && (
        <>
          <meta
            itemProp="image"
            key="image"
            content={img_url}
          />

          <meta
            property="og:image"
            key="og:image"
            content={img_url}
          />

          <meta
            property="twitter:image"
            key="twitter:image"
            content={img_url}
          />

          <meta
            property="twitter:card"
            key="twitter:card"
            content="summary_large_image"
          />
        </>
      )}
      {theme_color && (
        <meta
          name="theme-color"
          key="theme-color"
          content={theme_color}
        />
      )}
      {children && children}
    </Head>
  );
};

export default memo(Meta);
