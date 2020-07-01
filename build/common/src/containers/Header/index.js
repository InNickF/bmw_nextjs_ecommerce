/* eslint-disable react/jsx-indent */
import React, { useState } from "react";

import { Dropdown, Header, MobileDefaultHeader } from "../../components";
import { Link } from "../../routes/bmw";

import withStore from "./store";
import capitalizeBrands from "../../helpers/capitalizeBrands";
import { capitalize } from "../../helpers";

function buildCascadeMenu(allCategories) {
  const {
    DropdownMain,
    DropdownItem,
    DropdownList,
    CollectionContent,
    CollectionList,
  } = Dropdown;
  const [toggleHover, setHover] = useState(true);
  const motivator = allCategories;
  const [img, setImg] = useState(motivator.cover);
  const colections = {
    2: ["MINI Collection", "MINI 60 años", "John Cooper Works"],
    3: [
      "Golfsport",
      "Yatchsport",
      "Active",
      "M Motorsport",
      "BMW M",
      "BMW X",
      "BMW i",
      "Clásica",
    ],
  };
  return (
    <>
      {motivator && (
        <DropdownMain>
          {Object.hasOwnProperty.call(motivator, "childrenCategories") &&
            motivator.childrenCategories.length > 0 && ( // Level 2 Subitems | Con items o con mas subitems
              <>
                <img src={img} alt="Categoria Banner" />
                <DropdownList
                  type="main"
                  onMouseEnter={() => setHover(false)}
                  onMouseLeave={() => setHover(true)}
                  className={`${toggleHover && "select-hover"}`}
                >
                  {Object.hasOwnProperty.call(
                    motivator,
                    "childrenCategories"
                  ) &&
                    motivator.childrenCategories.length > 0 &&
                    motivator.childrenCategories.map((subitem) => (
                      <DropdownItem
                        key={subitem.id} // Si no tiene mas items para anidar se mostrarn enlaces en lista
                        subItem={subitem.cover}
                        cover={motivator.cover}
                        setImg={setImg}
                        itemButton={
                          <>
                            <Link
                              route="products"
                              params={{
                                c: subitem.slug,
                                level: 2,
                                parentId: motivator.id,
                              }}
                            >
                              <a>{subitem.name.replace("MW I", "BMW i")}</a>
                            </Link>
                          </>
                        }
                      >
                        {Object.hasOwnProperty.call(
                          subitem,
                          "childrenCategories"
                        ) &&
                          subitem.childrenCategories.length > 0 && (
                            <DropdownList type="sublist">
                              {subitem.childrenCategories.map((
                                block // Level 3 | Se mostraran en columnasfffffff
                              ) => (
                                  <DropdownItem
                                    key={block.id}
                                    subItem={subitem.cover}
                                    cover={motivator.cover}
                                    setImg={setImg}
                                    itemButton={
                                      <Link
                                        route="products"
                                        params={{
                                          c: block.slug,
                                          level: 3,
                                          parentId: subitem.id,
                                        }}
                                      >
                                        <a>
                                          {block.name.replace("MW I", "BMW i")}
                                        </a>
                                      </Link>
                                    }
                                  />
                                ))}
                            </DropdownList>
                          )}
                      </DropdownItem>
                    ))}
                </DropdownList>
                {motivator.name.toLowerCase() === 'lifestyle' && <CollectionContent>
                  <h1>Colecciones</h1>
                  <CollectionList>
                    {colections[process.env.BRAND_ID].map((colection, i) =>
                      <Link key={i} route="products" params={{ colection: colection }}>
                        <a>{colection}</a>
                      </Link>
                    )}
                  </CollectionList>
                </CollectionContent>}
              </>
            )}
        </DropdownMain>
      )}
    </>
  );
}

function HeaderContainer({
  isMobileMenuActived,
  onMobileMenuButtonTap,
  closeMobileMenu,
  allCategories,
  user,
  toggleLogin,
  onSearch,
  getCategoriesByParentId,
  toggleMobileMenu,
  cartQty,
  withBackground,
  logo,
  isSearchMobileVisible,
  toggleSearch,
  getProducts,
  logout,
  isCartLoading,
  isUserLoading,
  flattenCategories,
  isHome,
  products,
  breadcrumbs,
  cartPreviewShowing,
  hideCartPreview,
  RemoteSubmitButton,
  cart,
  query,
  cartLocal,
}) {
  const DesktopMenu =
    [
      buildCascadeMenu(allCategories[0]),
      buildCascadeMenu(allCategories[1]),
    ]
  if (process.env.BRAND_ID == 1) {
    DesktopMenu.push(
      buildCascadeMenu(allCategories[2]),
    )
  }
  return (
    <Header
      brand="motorrad"
      categories={allCategories}
      logo={logo}
      isHome={isHome}
      cartPreviewShowing={cartPreviewShowing}
      cart={cart}
      cartLocal={cartLocal}
      hideCartPreview={hideCartPreview}
      logoPosition="right"
      flattenCategories={flattenCategories}
      DesktopMenu={DesktopMenu}
      MobileDefaultHeader={
        <MobileDefaultHeader
          isLogged={Object.hasOwnProperty.call(user, "id")}
          showLoginDialog={toggleLogin}
          userName={
            Object.hasOwnProperty.call(user, "firstName") ? user.firstName : ""
          }
        />
      }
      totalCartItems={cartQty}
      isMobileMenuActived={isMobileMenuActived}
      onMobileMenuButtonTap={onMobileMenuButtonTap}
      closeMobileMenu={closeMobileMenu}
      toggleMobileMenu={toggleMobileMenu}
      onSearch={onSearch}
      withBackground={withBackground}
      isLogged={Object.hasOwnProperty.call(user, "id")}
      isSearchMobileVisible={isSearchMobileVisible}
      toggleSearch={toggleSearch}
      getProducts={getProducts}
      products={products}
      breadcrumbs={breadcrumbs}
      toggleLogin={toggleLogin}
      userName={
        Object.hasOwnProperty.call(user, "firstName") ? user.firstName : ""
      }
      logout={logout}
      isCartLoading={isCartLoading}
      isUserLoading={isUserLoading}
      query={query}
    />
  );
}

export default withStore(HeaderContainer);
