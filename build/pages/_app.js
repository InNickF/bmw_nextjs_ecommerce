import React from "react";
import App, { Container } from "next/app";
import config from "react-reveal/globals";
import { ThemeProvider } from "styled-components";
import { compose } from "recompose";
import { Provider } from "react-redux";
import { withIsomorphicToken, withSSRActions, withRedux } from "../common/hocs";

import Footer from "../components/Footer";
// import { registerServiceWorker } from '@autogermana/core-ecom/helpers'
import { AppWrapper, Header } from "../common/containers";
import HeaderAdvertisement from "../containers/HeaderAdvertisement";

import rootReducer from "../redux/rootReducer";
import rootSaga from "../redux/rootSaga";
import { GlobalStyle } from "../styles/global";
/* import { GlobalStyleHome } from '../styles/home' */
import { GlobalStyleIndex } from "../common/src/themes/bmw";
import { cart as coreCart } from "../common/redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import "nprogress/nprogress.css";
import "animate.css"
import "polished";
import "react-quill/dist/quill.snow.css";

const customReduxMiddlewares = [];

config({ ssrFadeout: true });

class Autogermana extends App {
  static async getInitialProps({ Component, ctx }) {
    let query = ctx;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    let isHome = ctx.pathname === "/" || ctx.pathname === "/repuestos";
    return { pageProps, isHome: isHome };
  }

  componentDidMount() {
    /*const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode)
        jssStyles.parentNode.removeChild(jssStyles) */

    const { store } = this.props;
    if (localStorage.getItem("cartLocal"))
      store.dispatch(
        coreCart.actions.setCartLocal(
          JSON.parse(localStorage.getItem("cartLocal"))
        )
      );
  }

  render() {
    const { Component, pageProps, store } = this.props;
    const theme = store.getState().get("app").get("theme").toJS();
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* <GlobalStyleHome /> */}
          <GlobalStyleIndex />
          <AppWrapper {...pageProps} brandId={process.env.BRAND_ID}>
            <HeaderAdvertisement />
            <Header
              isHome={this.props.isHome}
              query={pageProps.query}
              withBackground
            />
            <Component {...pageProps} />
            <Footer />
          </AppWrapper>
        </ThemeProvider>
      </Provider>
    );
  }
}

const enhance = compose(
  withRedux(rootReducer, rootSaga, customReduxMiddlewares),
  withSSRActions
);

export default enhance(Autogermana);
