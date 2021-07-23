import { css } from '@emotion/react'

const fontSizing = [12, 14, 16, 18, 20, 24, 30, 36, 48, 64]

const weightSize = [
  ...Array.from({ length: 10 })
    .map((e, i) => i * 100)
    .filter(e => !!e),
]

export type FontWeightType =
  | JSX.IntrinsicElements['span']['style']['fontWeight']
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900

export type FontSizingType =
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 24
  | 30
  | 36
  | 48
  | 64

export const optionsWeigth = (): FontWeightType[] => {
  return ['bold', 'bolder', 'lighter', 'normal', ...weightSize]
}

export const latoFontFace = css`
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u8w4BMUTPHh30AUi-qJCY.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u8w4BMUTPHh30AXC-q.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u_w4BMUTPHjxsI9w2_FQft1dw.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u_w4BMUTPHjxsI9w2_Gwft.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u8w4BMUTPHjxsAUi-qJCY.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u8w4BMUTPHjxsAXC-q.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u_w4BMUTPHjxsI5wq_FQft1dw.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u_w4BMUTPHjxsI5wq_Gwft.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u_w4BMUTPHjxsI3wi_FQft1dw.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u_w4BMUTPHjxsI3wi_Gwft.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u8w4BMUTPHh30AUi-qJCY.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u8w4BMUTPHh30AXC-q.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh7USSwaPGR_p.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh7USSwiPGQ.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjxAwXjeu.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh6UVSwaPGR_p.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh6UVSwiPGQ.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh50XSwaPGR_p.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh50XSwiPGQ.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`

export const cerealFontFace = css`
  @font-face {
    font-family: 'Airbnb Cereal App';
    font-style: normal;
    font-weight: 400;
    src: local('Airbnb Cereal App'),
      url('https://fonts.cdnfonts.com/s/22260/AirbnbCerealBook.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Airbnb Cereal App';
    font-style: normal;
    font-weight: 300;
    src: local('Airbnb Cereal App'),
      url('https://fonts.cdnfonts.com/s/22260/AirbnbCerealLight.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Airbnb Cereal App';
    font-style: normal;
    font-weight: 500;
    src: local('Airbnb Cereal App'),
      url('https://fonts.cdnfonts.com/s/22260/AirbnbCerealMedium.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Airbnb Cereal App';
    font-style: normal;
    font-weight: 700;
    src: local('Airbnb Cereal App'),
      url('https://fonts.cdnfonts.com/s/22260/AirbnbCerealBold.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Airbnb Cereal App';
    font-style: normal;
    font-weight: 800;
    src: local('Airbnb Cereal App'),
      url('https://fonts.cdnfonts.com/s/22260/AirbnbCerealExtraBold.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Airbnb Cereal App';
    font-style: normal;
    font-weight: 900;
    src: local('Airbnb Cereal App'),
      url('https://fonts.cdnfonts.com/s/22260/AirbnbCerealBlack.woff')
        format('woff');
  }
`

/**
 * Export and use Font Family
 *  */

const systemFont = `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`

export const latoFont = css`
  font-family: 'Lato', ${systemFont};
`

const Font = {
  fontSizing,
  weightSize,
}

export default Font
