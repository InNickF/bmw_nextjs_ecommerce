import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import Helmet from 'react-helmet'

import HeadTags from '../components/HeadTags'
import HeadEndTags from '../components/HeadEndTags'
import BodyStartTags from '../components/BodyStartTags'
import BodyEndTags from '../components/BodyEndTags'

export default class BaseApp extends Document {

  static async getInitialProps({ renderPage, ...otherProps }) {
    /*     const sheet = new ServerStyleSheet()
        const page = renderPage(App => props =>
          sheet.collectStyles(<App {...props} />)
        )
    
        const styleTags = sheet.getStyleElement()
    
        return { ...page, styleTags, helmet: Helmet.rewind(), isHome: otherProps.pathname === '/' }
      }
    
      helmetHtmlAttrComponents() {
        return this.props.helmet.htmlAttributes.toComponent() */
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  helmetHeadComponents() {
    const keys = Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes')
      .map(el => this.props.helmet[el].toComponent())
      .filter(
        el =>
          el.length > 0 ||
          !(Object.keys(el).length === 0 && el.constructor === Object)
      )

    return keys.length ? keys : []
  }

  render() {
    return (
      <html lang='es' >
        <Head>
          {this.props.styleTags}
          <HeadTags />
          <HeadEndTags />
        </Head>
        <body >
          <BodyStartTags />
          <main className='root'>
            <Main />
          </main>
          <NextScript />
          <BodyEndTags />
        </body>
      </html>
    )
  }
}
