import ProductSansRegular from '@assets/font/ProductSans/ProductSans-Regular.woff'
import ProductSansItalic from '@assets/font/ProductSans/ProductSans-Italic.woff'
import ProductSansThin from '@assets/font/ProductSans/ProductSans-Thin.woff'
import ProductSansLight from '@assets/font/ProductSans/ProductSans-Light.woff'
import ProductSansMedium from '@assets/font/ProductSans/ProductSans-Medium.woff'
import ProductSansBlack from '@assets/font/ProductSans/ProductSans-Black.woff'
import ProductSansThinItalic from '@assets/font/ProductSans/ProductSans-ThinItalic.woff'
import ProductSansLightItalic from '@assets/font/ProductSans/ProductSans-LightItalic.woff'
import ProductSansMediumItalic from '@assets/font/ProductSans/ProductSans-MediumItalic.woff'
import ProductSansBold from '@assets/font/ProductSans/ProductSans-Bold.woff'
import ProductSansBoldItalic from '@assets/font/ProductSans/ProductSans-BoldItalic.woff'
import ProductSansBlackItalic from '@assets/font/ProductSans/ProductSans-BlackItalic.woff'

// Tenor
import TenorSans from '@assets/font/Tenor/TenorSans-Regular.ttf'

// Lato

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

export const productSansFontFace = css`
  @font-face {
    font-family: 'Product Sans Regular';
    src: local('Product Sans Regular'),
      url('${ProductSansRegular}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Product Sans Italic';
    font-style: italic;
    src: local('Product Sans Italic'),
      url('${ProductSansItalic}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Product Sans Thin Regular';
    src: local('Product Sans Thin Regular'),
      url('${ProductSansThin}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Product Sans Light Regular';
    src: local('Product Sans Light Regular'),
      url('${ProductSansLight}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Product Sans Medium Regular';
    src: local('Product Sans Medium Regular'),
      url('${ProductSansMedium}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Product Sans Black Regular';
    src: local('Product Sans Black Regular'),
      url('${ProductSansBlack}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Product Sans Thin Italic';
    font-style: italic;
    src: local('Product Sans Thin Italic'),
      url('${ProductSansThinItalic}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Product Sans Light Italic';
    font-style: italic;
    src: local('Product Sans Light Italic'),
      url('${ProductSansLightItalic}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Product Sans Medium Italic';
    src: local('Product Sans Medium Italic'),
      url('${ProductSansMediumItalic}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Product Sans Bold';
    src: local('Product Sans Bold'), url('${ProductSansBold}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Product Sans Bold Italic';
    font-style: italic;
    src: local('Product Sans Bold Italic'),
      url('${ProductSansBoldItalic}') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Product Sans Black Italic';
    font-style: italic;
    src: local('Product Sans Black Italic'),
      url('${ProductSansBlackItalic}') format('woff');
    font-display: swap;
  }
`

export const tenorSansFontFace = css`
  /* cyrillic */
  @font-face {
    font-family: 'Tenor Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/tenorsans/v12/bx6ANxqUneKx06UkIXISn3F4Cl2I.woff2)
      format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Tenor Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/tenorsans/v12/bx6ANxqUneKx06UkIXISn3t4Cl2I.woff2)
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Tenor Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/tenorsans/v12/bx6ANxqUneKx06UkIXISn3V4Cg.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`

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

export const productSansFont = css`
  font-family: 'Product Sans Regular', ${systemFont};
`
export const tenorSansFont = css`
  font-family: 'Tenor Sans', ${systemFont};
`

export const latoFont = css`
  font-family: 'Lato', ${systemFont};
`

export const cerealFont = css`
  font-family: 'Airbnb Cereal App', ${systemFont};
`

const Font = {
  fontSizing,
  weightSize,
}

export default Font
