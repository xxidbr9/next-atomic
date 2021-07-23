import Document, { Html, Head, Main, NextScript } from 'next/document'
import styled from '@emotion/styled'
import { latoFont } from '@styles/fonts'

const StyledBody = styled.body`
  /* Load The Font */
  ${latoFont}/* => change this if it require to change all the base font-family */
`
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="id">
        <Head />
        <StyledBody>
          <Main />
          <NextScript />
        </StyledBody>
      </Html>
    )
  }
}

export default MyDocument
