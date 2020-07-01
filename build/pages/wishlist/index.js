import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import {
  AlignWrapper,
  PageTitle,
  View,
  WishListCard,
  Wrapper,
} from "../../common/components";

import { nextRouter } from "../../common/helpers";

import { user as coreUser } from "../../common/redux";

import withStore from "./store";
import {
  TitleHeader,
  WishListContainer,
  WishListListItems,
  ContainerWish,
} from "../../common/src/components/WishListCard/styles";

const { Router } = nextRouter;

const goBack = Router.back;

class WishList extends React.Component {

  loading = false

  componentDidMount() {
    const { user, wishlist } = this.props
    if (user.id)
      this.props.getWishlist()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.id && !this.loading) {
      this.loading = true
      this.props.getWishlist()
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Lista de deseos</title>
        </Helmet>
        <View>
          <ContainerWish>
            <TitleHeader onClick={goBack}>Lista de deseos</TitleHeader>
            {!this.props.wishlist.length ? (
              <AlignWrapper>
                <p>No se encontraron productos en lista de deseos</p>
              </AlignWrapper>
            ) : (
                <WishListContainer>
                  <WishListListItems>
                    <p>{this.props.wishlist.length} artículos</p>
                  </WishListListItems>
                  {this.props.wishlist.map((item) => (
                    <WishListCard
                      key={item.id}
                      item={item}
                      remove={this.props.removeItem(item.id)}
                      isLoading={this.props.isCardLoading}
                    />
                  ))}
                </WishListContainer>
              )}
          </ContainerWish>
        </View>
      </>
    );
  }
}

WishList.propTypes = {
  wishlist: PropTypes.array.isRequired,
  isCardLoading: PropTypes.bool.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default withStore(WishList);
