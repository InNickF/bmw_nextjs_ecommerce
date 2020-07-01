import React from "react";
import Helmet from "react-helmet";

import { Wrapper, Tabs, InPartLoading, View } from "../../common/components";
import { ProfileEditData, ProfileOrdersHistory } from "../../common/containers";
import { user as coreUser } from '../../common/redux'

import withStore from "./store";
import WishListCard from "../wishlist";

// No necesitan ser consumidas desde el backend
const tabs = [
  {
    id: 1,
    label: "Mis datos",
    icon: (
      <svg
        width="29"
        height="31"
        viewBox="0 0 29 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 16.39C19.0029 16.39 21.0451 12.8012 21.0451 8.19498C21.0451 3.58878 19.0029 0 14.5 0C9.99707 0 7.95486 3.58878 7.95486 8.19498C7.95486 12.8012 9.99707 16.39 14.5 16.39ZM21.75 19.8756L18.6291 21.3589C17.3717 21.9498 15.9727 22.2859 14.5 22.2859C13.0273 22.2859 11.634 21.9498 10.3709 21.3589L7.25 19.8756C3.24551 19.8756 0 23.1955 0 27.2919V28.2189C0 29.7543 1.21777 31 2.71875 31H26.2812C27.7822 31 29 29.7543 29 28.2189V27.2919C29 23.1955 25.7545 19.8756 21.75 19.8756Z"
          fill="#000000"
        />
      </svg>
    ),
    component: ProfileEditData,
  },
  {
    id: 2,
    label: "Lista de deseos",
    icon: (
      <svg
        width="29"
        height="25"
        viewBox="0 0 29 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 25L13.9882 24.5791C2.98529 15.7407 0 12.6263 0 7.57576C0 3.367 3.41176 0 7.67647 0C11.1735 0 13.1353 1.93603 14.5 3.45118C15.8647 1.93603 17.8265 0 21.3235 0C25.5882 0 29 3.367 29 7.57576C29 12.6263 26.0147 15.7407 15.0118 24.5791L14.5 25Z"
          fill="#000000"
        />
      </svg>
    ),
    component: WishListCard,
  },
  {
    id: 3,
    label: "Historial de compras",
    queryNavigation: 'history',
    icon: (
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 26.1C17.5765 26.1 20.527 24.8779 22.7024 22.7024C24.8779 20.527 26.1 17.5765 26.1 14.5C26.1 11.4235 24.8779 8.47298 22.7024 6.29756C20.527 4.12214 17.5765 2.9 14.5 2.9C11.4235 2.9 8.47298 4.12214 6.29756 6.29756C4.12214 8.47298 2.9 11.4235 2.9 14.5C2.9 17.5765 4.12214 20.527 6.29756 22.7024C8.47298 24.8779 11.4235 26.1 14.5 26.1ZM14.5 0C16.4042 0 18.2897 0.375054 20.0489 1.10375C21.8081 1.83244 23.4066 2.9005 24.753 4.24695C26.0995 5.5934 27.1676 7.19187 27.8963 8.95109C28.6249 10.7103 29 12.5958 29 14.5C29 18.3456 27.4723 22.0338 24.753 24.753C22.0338 27.4723 18.3456 29 14.5 29C6.4815 29 0 22.475 0 14.5C0 10.6544 1.52767 6.96623 4.24695 4.24695C6.96623 1.52767 10.6544 0 14.5 0ZM15.225 7.25V14.8625L21.75 18.734L20.6625 20.5175L13.05 15.95V7.25H15.225Z"
          fill="black"
        />
      </svg>
    ),
    component: ProfileOrdersHistory,
  }
];

class ProfilePage extends React.Component {

  state = {
    tabActive: undefined
  }

  static async getInitialProps({ store }) {
    const { getWishlist } = coreUser.actions;
    store.dispatch(getWishlist());
    return {};
  }

  componentDidMount() {
    const queryNavegate = window.location.search.split('navigate=')[1]

    if (queryNavegate)
      this.setState({ tabActive: tabs.find(tab => tab.queryNavigation == queryNavegate) })
  }

  render() {
    const { isLoading, isLogged } = this.props
    const { tabActive } = this.state

    return (
      <>
        <Helmet>
          <title>MI PERFIL</title>
        </Helmet>
        <View>
          <Wrapper relative>
            <InPartLoading
              isLoading={isLoading}
              canAbsolute
              relative
            />
            <Tabs items={tabs} loginModal={this.props.loginModal} isLogged={isLogged} initialTab={tabActive} />
          </Wrapper>
        </View>
      </>
    );
  }
}

export default withStore(ProfilePage);
