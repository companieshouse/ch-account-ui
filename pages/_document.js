import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    const BASE_PATH = process.env.BASE_PATH || ''
    return (
      <Html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <title>GOV.UK - The best place to find government services and information</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
          <meta name="theme-color" content="#0b0c0c"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <link rel="shortcut icon" sizes="16x16 32x32 48x48" href={`${BASE_PATH}/assets/images/favicon.ico`} type="image/x-icon"/>
          <link rel="mask-icon" href={`${BASE_PATH}/assets/images/govuk-mask-icon.svg`} color="#0b0c0c"/>
          <link rel="apple-touch-icon" sizes="180x180" href={`${BASE_PATH}/assets/images/govuk-apple-touch-icon-180x180.png`}/>
          <link rel="apple-touch-icon" sizes="167x167" href={`${BASE_PATH}/assets/images/govuk-apple-touch-icon-167x167.png`}/>
          <link rel="apple-touch-icon" sizes="152x152" href={`${BASE_PATH}/assets/images/govuk-apple-touch-icon-152x152.png`}/>
          <link rel="apple-touch-icon" href={`${BASE_PATH}/assets/images/govuk-apple-touch-icon.png`}/>
          <meta property="og:image" content={`${BASE_PATH}/assets/images/govuk-opengraph-image.png`}/>

          <link rel="stylesheet" href={`${BASE_PATH}/css/global.css`}/>
        </head>
        <Head/>
        <body className="govuk-template__body app-body-class">
        <Main/>
        <NextScript/>
        <script src={`${BASE_PATH}/js/sa11y.js`}/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
