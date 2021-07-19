import { css } from '@emotion/react';
import breakpoint from './breakpoint';

const THEME_CONF = 'flexboxgrid';

export const BASE_CONF = {
  gridSize: 12,
  gutterWidth: 1,
  outerMargin: 2,
  mediaQuery: 'only screen',
  breakpoints: {
    ...breakpoint
  }
};

function makeMedia(media) {
  const mediaQuery = `@media ${media}`
  return (...args) => css`
  ${mediaQuery} {
      ${css(...args)}
    }
  `
}


const configCache = [];
const makeCacheId = (props: any = {}) =>
  JSON.stringify((props.theme && props.theme[THEME_CONF]) || {});
const resolveConfig = (props: any = {}) => {
  const themeConf = (props.theme && props.theme[THEME_CONF]) || {};

  const conf = {
    ...BASE_CONF,
    ...themeConf,
    container: {
      ...themeConf.container
    },
    breakpoints: {
      ...BASE_CONF.breakpoints,
      ...themeConf.breakpoints
    }
  };

  conf.media = Object.keys(conf.breakpoints).reduce((media, breakpoint: any) => {
    const breakpointWidth = conf.breakpoints[breakpoint];
    media[breakpoint] = makeMedia(
      [conf.mediaQuery, breakpoint !== 0 && `(min-width: ${breakpointWidth})`]
        .filter(Boolean)
        .join(' and ')
    );
    return media;
  }, {});

  return conf;
};

export const DIMENSION_NAMES = ['mobile', 'tablet', 'laptop', 'desktop'] as const;
export const DIMENSION_OFFSET_NAMES = ['mobileOffset', 'tabletOffset', 'laptopOffset', 'desktopOffset'] as const;


export default function config(props = {}) {
  const cacheId = makeCacheId(props);
  if (configCache[0] === cacheId) {
    return configCache[1];
  }

  const conf = resolveConfig(props);

  configCache[0] = cacheId;
  configCache[1] = conf;

  return conf;
}