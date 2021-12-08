import 'tailwindcss/tailwind.css'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import '@assets/css/bottomSheet.css'
import '@assets/scss/ckEditorView.scss'
import '@assets/scss/swiper.scss'

// END CSS
import React from 'react'
import { AppContext } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { createBreakpoint, useEffectOnce } from 'react-use'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper'
import moment from 'moment'
import 'moment/locale/id'

import { setScreenSize } from '@features/screen/screen.action'
import { wrapper } from '@redux-state/index'
import { breakScreen } from '@styles/breakpoint'
import gridConfig from '@utils/configs/grid.config'
import { locale } from '@utils/configs/localization.config'
import { ScreenType } from '@utils/types/screen'
import { setMobileDeviceOS } from '@features/devices/device.action'
import useMobileOS from '@utils/hooks/useMobileOS'
import NProgress from 'nextjs-progressbar'
import color from '@styles/colors'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'
import Head from 'next/head'
import BRAND_NAME from '@utils/constants/brand'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

/* Configuration Start */
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
const useScreen = createBreakpoint({ ...breakScreen } as {})
moment.locale(locale.id)
/* Configuration End */

const MainApp = ({ Component, pageProps }) => {
  const theme = {
    ...gridConfig,
  }
  const router = useRouter()

  /* Analytic Start */
  // ReactGA.initialize(process.env.NEXT_PUBLIC_GTA_ID);
  ReactGA.initialize(process.env.NEXT_PUBLIC_GTA_ID, {
    // debug: process.env.NODE_ENV !== 'production',
    titleCase: false,
  })

  ReactGA.pageview(router.asPath)
  /* Analytic End */

  // Redux config
  const store = useStore()

  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })

  // const persistor = persistStore(store)
  const dispatch = useDispatch()

  // end redux config

  const screen = useScreen()

  useEffect(() => {
    dispatch(setScreenSize(screen as ScreenType)) // for set the screen type to global redux
  }, [screen, dispatch])

  const mobileOS = useMobileOS()
  useEffect(() => {
    dispatch(setMobileDeviceOS(mobileOS)) // check mobile os
  }, [mobileOS, dispatch])

  return (
    <>
      <Head>{BRAND_NAME}</Head>
      <NProgress color={color.primary['500']} />
      <ThemeProvider theme={theme}>
        {typeof window !== 'undefined' ? (
          <PersistGate persistor={persistor} loading={<div>Loading</div>}>
            <Component {...pageProps} />
          </PersistGate>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </>
  )
}

MainApp.getInitialProps = wrapper.getInitialAppProps(
  store =>
    async ({ Component, ctx }: AppContext) => {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
          pathname: ctx.pathname,
        },
        creator: {
          url: 'https://github.com/xxidbr9',
          name: 'Barnando Akbarto Hidaytullah',
          email: 'barnando13@gmail.com',
        },
      }
    }
)

export default wrapper.withRedux(MainApp)
