import {
  type ReactNode,
  type ForwardedRef,
  type JSX,
  memo,
  forwardRef,
  createElement,
} from 'react';

import useStyles from './ContentLayout.styles';

interface ContentLayoutClassesProps {
  root?: string;
  content?: string;
}

interface ContentLayoutProps {
  className?: string;
  classes?: ContentLayoutClassesProps;
  component?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  fullPaddingTop?: boolean;
  fullPaddingBottom?: boolean;
  noPaddingTop?: boolean;
  noPaddingBottom?: boolean;
  noPaddingsAside?: boolean;
}

const ContentLayout = forwardRef<HTMLDivElement, ContentLayoutProps>(
  (
    {
      className = '',
      classes: { root = '', content = '' } = {},
      children,
      component = 'div',
      fullPaddingBottom,
      fullPaddingTop,
      noPaddingTop,
      noPaddingBottom,
      noPaddingsAside,
    },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { classes, cx } = useStyles();

    return createElement(
      component,
      {
        className: cx(
          classes.root,
          fullPaddingTop && 'fullPaddingTop',
          fullPaddingBottom && 'fullPaddingBottom',
          noPaddingTop && 'noPaddingTop',
          noPaddingBottom && 'noPaddingBottom',
          noPaddingsAside && 'noPaddingsAside',
          className,
          root,
        ),
        ref,
      },
      <div className={cx(classes.contentWrapper, content)}>
        {children}
      </div>,
    );
  },
);

ContentLayout.displayName = 'ContentLayout';

export default memo(ContentLayout);
