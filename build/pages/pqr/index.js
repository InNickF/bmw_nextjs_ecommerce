import React, { Fragment, Component } from 'react'
import Helmet from 'react-helmet'
import { withTheme } from 'styled-components'

import {
  Wrapper,
  PageTitle,
  InPartLoading,
  View,
  PqrQuestions,
  PqrDevolutions
} from '../../common/components'

import { Header, PQRForm, LoginModal } from '../../common/containers'

import Footer from '../../components/Footer'

import { TitleWrapped, ContentPqr, SideTabs, PqrOption, ContainerPqr, HeaderPqr } from '../../styles/pqr'

import withStore from './store'
import { BreadStep } from '../../styles/products'

class PQR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'pqr',
      activeTabTitle: 'Peticiones, quejas, y reclamos'
    };
  }

  static async getInitialProps({ store, query, req, isServer }) {
    return {
      query
    };
  }
  componentDidUpdate(prevProps) {
    /* if (
       this.props.isAuthenticated !== prevProps.isAuthenticated &&
       this.props.isAuthenticated
     ) {
       if (!this.props.validData) {
         this.props.showFeedbackProfile()
       }
     }*/
  }

  componentDidMount() {
    if (this.props.query.tab && this.props.query.tab == 'devoluciones') {
      this.changeTab("devolutions")
    }
  }

  changeTab(tab) {
    this.setState({ activeTab: tab })
    if (this.props.isAuthenticated) {
      this.props.getOrders();
    }
  }
  render() {
    const { activeTab, activeTabTitle } = this.state
    return (
      <>
        <Helmet>
          <title>PQR</title>
        </Helmet>
        <ContentPqr>
          <SideTabs>
            <div>
              <PqrOption activate={activeTab === 'questions'} onClick={() => this.changeTab('questions')}><span>¿?</span><p>Preguntas frecuentes</p></PqrOption>
              <PqrOption activate={activeTab === 'pqr'} onClick={() => this.changeTab('pqr')}>
                <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.4959 2H6.89936C5.60111 2.00369 4.35708 2.52106 3.43907 3.43907C2.52106 4.35708 2.00369 5.60111 2 6.89936V23.6972C2.00369 24.9954 2.52106 26.2395 3.43907 27.1575C4.35708 28.0755 5.60111 28.5929 6.89936 28.5965H10.3989V35.5956L18.5983 28.7593C18.7243 28.6541 18.8831 28.5965 19.0472 28.5965H33.4959C34.7942 28.5929 36.0382 28.0755 36.9562 27.1575C37.8742 26.2395 38.3916 24.9954 38.3953 23.6972V6.89936C38.3916 5.60111 37.8742 4.35708 36.9562 3.43907C36.0382 2.52106 34.7942 2.00369 33.4959 2V2Z" stroke="black" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M11.7987 18.0981C13.3449 18.0981 14.5983 16.8446 14.5983 15.2984C14.5983 13.7522 13.3449 12.4988 11.7987 12.4988C10.2525 12.4988 8.99902 13.7522 8.99902 15.2984C8.99902 16.8446 10.2525 18.0981 11.7987 18.0981Z" fill="black" />
                  <path d="M20.1981 18.0981C21.7443 18.0981 22.9977 16.8446 22.9977 15.2984C22.9977 13.7522 21.7443 12.4988 20.1981 12.4988C18.6519 12.4988 17.3984 13.7522 17.3984 15.2984C17.3984 16.8446 18.6519 18.0981 20.1981 18.0981Z" fill="black" />
                  <path d="M28.5965 18.0981C30.1427 18.0981 31.3961 16.8446 31.3961 15.2984C31.3961 13.7522 30.1427 12.4988 28.5965 12.4988C27.0503 12.4988 25.7969 13.7522 25.7969 15.2984C25.7969 16.8446 27.0503 18.0981 28.5965 18.0981Z" fill="black" />
                </svg>
                <p>Peticiones, Quejas y Reclamos.</p></PqrOption>
              <PqrOption activate={activeTab === 'devolutions'} onClick={() => this.changeTab('devolutions')}>
                <svg width="40" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.883762 25.9389L18.4984 31.7364C19.0713 30.8233 19.8824 30.0839 20.8444 29.5978C21.8064 29.1117 22.8829 28.8973 23.9577 28.9777L33.2675 0.671541L40.6834 0L40.9443 2.89874L35.4271 3.38186L26.7309 29.8812C27.6229 30.4433 28.3498 31.232 28.8373 32.167C29.3248 33.1019 29.5554 34.1495 29.5055 35.2027C29.4557 36.2559 29.1272 37.277 28.5536 38.1617C27.98 39.0464 27.1818 39.763 26.2407 40.2383C25.2995 40.7136 24.249 40.9306 23.1966 40.8672C22.1441 40.8037 21.1273 40.462 20.2501 39.8769C19.3729 39.2919 18.6667 38.4846 18.2036 37.5373C17.7406 36.5901 17.5372 35.5369 17.6143 34.4853L-0.000354767 28.6879L0.883762 25.9389ZM20.7933 36.2922C21.0166 36.7445 21.3483 37.1345 21.7588 37.4275C22.1693 37.7205 22.646 37.9074 23.1462 37.9716C23.6465 38.0358 24.1549 37.9752 24.6261 37.7953C25.0973 37.6155 25.5167 37.3218 25.8469 36.9406C26.1772 36.5593 26.408 36.1023 26.5188 35.6103C26.6297 35.1183 26.6171 34.6064 26.4822 34.1204C26.3473 33.6344 26.0943 33.1893 25.7457 32.8248C25.3971 32.4602 24.9638 32.1876 24.4843 32.0311C24.1032 31.9044 23.7007 31.8546 23.3002 31.8844C22.8996 31.9143 22.509 32.0232 22.1508 32.205C21.7918 32.3859 21.472 32.6358 21.2097 32.9404C20.9474 33.245 20.7477 33.5984 20.6221 33.9802C20.4964 34.3621 20.4473 34.765 20.4775 35.1658C20.5077 35.5667 20.6167 35.9577 20.7981 36.3164L20.7933 36.2922Z" fill="black" />
                  <path d="M1.27479 22.1657L7.31383 3.80701L26.2812 10.0538L20.2422 28.4125L1.27479 22.1657ZM9.1642 7.46908L4.93687 20.3153L18.3967 24.7504L22.624 11.8993L9.1642 7.46908Z" fill="black" />
                </svg>
                <p>Devoluciones</p></PqrOption>
            </div>
          </SideTabs>
          <ContainerPqr>
            <BreadStep><a href="/">Home</a><span>/</span><a>{activeTabTitle}</a></BreadStep>
            {activeTab === 'questions' && <PqrQuestions />}
            {activeTab === 'pqr' && <PQRForm />}
            {activeTab === 'devolutions' && <>
              {this.props.isAuthenticated &&
                !this.props.isLoading && (
                  <PqrDevolutions goToProduct={this.props.redirectToProduct} getDevolutions={() => this.props.getOrders()} onSubmit={this.props.onSubmit} orders={this.props.orders} />
                )}
              {!this.props.isAuthenticated &&
                !this.props.isLoading &&
                <LoginModal brandId={process.env.BRAND_ID} /> &&
                this.changeTab('questions') ||
                this.props.loginModal()
              }

            </>}
          </ContainerPqr>
        </ContentPqr>
        {false && <Wrapper relative>
          <View>
            {this.props.isAuthenticated &&
              !this.props.isLoading && (
                <div className="pqr">
                  <PqrQuestions />
                </div>
              )}
            {!this.props.isAuthenticated &&
              !this.props.isLoading && (
                <LoginModal brandId={process.env.BRAND_ID} />
              )}
            <InPartLoading isLoading={this.props.isLoading} canAbsolute />
            {this.props.validData && <PQRForm />}
          </View>
        </Wrapper>}
      </>
    )
  }
}

export default withTheme(withStore(PQR))
