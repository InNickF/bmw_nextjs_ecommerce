import React, {useState} from "react";
import PropTypes from "prop-types";
import {withTheme} from "styled-components";
import Sticky from "react-stickynode";
import {Link, Router} from "../../routes/bmw";
import {useRouter} from "next/router";
import {nextRouter} from "../../helpers";

import {
	CategoriesNavigation,
	Icon,
	InPartLoading,
	SearchBox,
	SideNav,
	ProfileMenu,
	Wrapper,
} from "../";

import {
	DesktopLinks,
	HeaderWrapper,
	CategoriesDropdown,
	MobileMenuButton,
	Content,
	LogoContainer,
	CartAuthContent,
	AuthContent,
	SearchButton,
	SearchComponent,
	SearchResults,
	Nav,
	SearchBoxContainer,
	CartCount,
	CartModalPreview,
	CartModalPreviewContainer,
	CloseXBtn,
	CartModalPreviewBtns,
	CartModalPreviewText,
	WhiteHeader,
	SearchComponentMini,
	SearchResultsMini,
} from "./styles";
import SearchProductCard from "../SearchProductCard";
import {priceFormatter} from "../../helpers";
import capitalizeBrands from "../../helpers/capitalizeBrands";
import {NoProducts} from "../../../../styles/products";

function Header(props) {
	const {
		isMobileMenuActived,
		totalCartItems,
		onSearch,
		onMobileMenuButtonTap,
		closeMobileMenu,
		theme,
		MobileDefaultHeader,
		DesktopMenu,
		DesktopDropDownMenu,
		isLogged,
		toggleSearch,
		getProducts,
		isSearchMobileVisible,
		toggleLogin,
		userName,
		logout,
		isCartLoading,
		isUserLoading,
		categories,
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
	} = props;
	const withCartCount = !!totalCartItems;
	const {header} = theme;
	const router = useRouter();
	/*   const { Router } = nextRouter */
	return (
		<WhiteHeader className={`${isHome ? "home" : "white-header"}`}>
			{/* <div className={`sticky-outer-wrapper active`}>
        <div className="sticky-inner-wrapper"></div> */}
			<Sticky enabled={true}>
				<HeaderWrapper>
					<Wrapper
						className={`${
							parseInt(process.env.BRAND_ID) === 2 ? "wrapper-header-mini" : ""
						}`}
					>
						{!isSearchMobileVisible && (
							<Content>
								<Nav>
									<MobileMenuButton onClick={() => onMobileMenuButtonTap(!isMobileMenuActived)}>
										<Icon
											name="menu"
											fill={header.cartIcon}
											width={18}
											height={12}
										/>
									</MobileMenuButton>
									<DesktopLinks>
										{categories &&
										categories.map((
											category,
											i // Level 1 Motivadores
										) => (
											<CategoriesDropdown
												key={i}
												className={`${
													query &&
													Object.hasOwnProperty.call(query, "c") &&
													query.c.includes(
														category.name.replace(/ .*/, "").toLowerCase()
													)
														? "active-tab-bmw"
														: ""
												}`}
											>
												<Link
													route="products"
													params={{c: category.slug, level: 1}}
												>
													<a className="nav-item">
														{category.name.trim().split(/\s+/).length > 2 ?
															category.name.replace(/ .*/, "").toLowerCase() :
															category.name.toLowerCase()
														}
														{/* {category.name.toLowerCase()} */}
													</a>
												</Link>
												<div className="dropdown-container">
													{/* {categories[i]} */}
													{DesktopMenu[i]}
												</div>
											</CategoriesDropdown>
										))}
										{/*          <CategoriesDropdown >
                      <Link route="/used-cars">
                        <a className='nav-item'> {parseInt(process.env.BRAND_ID) === 1 ? 'Motos usadas' : 'Carros Usados'}</a>
                      </Link>
                    </CategoriesDropdown> */}
										{/* ${query.includes('blog') ? 'active-tab-bmw' : ''} */}
										<CategoriesDropdown className={``}>
											<Link route="/repuestos">
												<a className="nav-item">Repuestos</a>
											</Link>
										</CategoriesDropdown>
										<CategoriesDropdown className={``}>
											<Link route="blog">
												<a className="nav-item">Novedades</a>
											</Link>
										</CategoriesDropdown>
										{/* ${query.includes('offer') ? 'active-tab-bmw' : ''} */}
										<CategoriesDropdown className={``}>
											<Link route="products" params={{offer: true}}>
												<a className="nav-item">Ofertas</a>
											</Link>
										</CategoriesDropdown>
									</DesktopLinks>
									{false && (
										<SearchBoxContainer
											isVisibleInMobile={isSearchMobileVisible}
										>
											<SearchBox
												onSearch={onSearch}
												iconColor={theme.colors.main}
												theme={theme}
												toggleSearch={toggleSearch}
												getProducts={getProducts}
												products={products}
											/>
											{!theme.header.searchBottom && (
												<button
													className="close-search"
													onClick={() => toggleSearch(!isSearchMobileVisible)}
												>
													<svg
														width="27"
														height="27"
														viewBox="0 0 27 27"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M27 2.71929L24.2807 0L13.5 10.7807L2.71929 0L0 2.71929L10.7807 13.5L0 24.2807L2.71929 27L13.5 16.2193L24.2807 27L27 24.2807L16.2193 13.5L27 2.71929Z"
															fill="#D5D5D5"
														/>
													</svg>
												</button>
											)}
										</SearchBoxContainer>
									)}
									<CartAuthContent>
										{parseInt(process.env.BRAND_ID) !== 2 && (
											<SearchButton
												searchActive={isSearchMobileVisible}
												onClick={() => toggleSearch(!isSearchMobileVisible)}
											>
												<Icon
													name="find"
													fill={header.cartIcon}
													height={19}
													width={19}
												/>
											</SearchButton>
										)}
										{parseInt(process.env.BRAND_ID) !== 2 && (
											<Link route="cart">
												<div style={{position: "relative"}}>
													<a
														className={`cart-link ${
															(withCartCount || cartLocal?.length > 0) &&
															"cart-link-active"
														}`}
													>
														<Icon
															name="cart"
															fill={header.cartIcon}
															height={25}
															width={25}
														/>
														{withCartCount || cartLocal?.length > 0 ? (
															<CartCount
																cartNumberBg={header.cartNumberBg}
																cartNumberText={header.cartNumberText}
																searchActived={isSearchMobileVisible}
															>
                                <span>
                                  {totalCartItems || cartLocal.length}
                                </span>
															</CartCount>
														) : (
															<div className="separator-cart-responsive"/>
														)}
														<InPartLoading
															isLoading={isLogged && isCartLoading}
															canAbsolute
															preload
														/>
													</a>
													{cartPreviewShowing.isShowing && cart && (
														<CartModalPreview
															onClick={(e) => e.stopPropagation()}
														>
															<div className="icon-top">
																<svg
																	width="250"
																	height="69"
																	viewBox="0 0 250 69"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<g clipPath="url(#clip0)">
																		<g filter="url(#filter0_d)">
																			<path
																				d="M0 50.6482C0 50.6482 14.3849 50.6482 62.5001 50.6482C110.615 50.6482 110.119 10 123.512 10C136.905 10 138.889 50.6482 187.501 50.6482C236.111 50.6482 250 50.6482 250 50.6482H0Z"
																				fill="white"
																			/>
																		</g>
																	</g>
																	<defs>
																		<filter
																			id="filter0_d"
																			x="-4"
																			y="2"
																			width="258"
																			height="48.6482"
																			filterUnits="userSpaceOnUse"
																			colorInterpolationFilters="sRGB"
																		>
																			<feFlood
																				floodOpacity="0"
																				result="BackgroundImageFix"
																			/>
																			<feColorMatrix
																				in="SourceAlpha"
																				type="matrix"
																				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
																			/>
																			<feOffset dy="-4"/>
																			<feGaussianBlur stdDeviation="2"/>
																			<feColorMatrix
																				type="matrix"
																				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
																			/>
																			<feBlend
																				mode="normal"
																				in2="BackgroundImageFix"
																				result="effect1_dropShadow"
																			/>
																			<feBlend
																				mode="normal"
																				in="SourceGraphic"
																				in2="effect1_dropShadow"
																				result="shape"
																			/>
																		</filter>
																		<clipPath id="clip0">
																			<rect
																				width="250"
																				height="69"
																				fill="white"
																			/>
																		</clipPath>
																	</defs>
																</svg>
															</div>
															<CartModalPreviewContainer>
																<CloseXBtn onClick={hideCartPreview}>
																	<svg
																		width="14"
																		height="14"
																		viewBox="0 0 14 14"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
																			fill="#D5D5D5"
																		/>
																	</svg>
																</CloseXBtn>
																<img
																	src={
																		cartPreviewShowing.items[
																		cartPreviewShowing.items.length - 1
																			].image ||
																		"https://autogermana.s3.amazonaws.com/no%20-foto.png"
																	}
																	alt="product"
																/>
																<CartModalPreviewText>
																	<h3>
																		{cartPreviewShowing.items[
																		cartPreviewShowing.items.length - 1
																			].name.toUpperCase()}
																	</h3>
																	<label>Referencia</label>
																	<p>
																		#
																		{
																			cartPreviewShowing.items[
																			cartPreviewShowing.items.length - 1
																				].sku
																		}
																	</p>
																	<label>Cantidad</label>
																	<p>
																		x
																		{
																			cartPreviewShowing.items[
																			cartPreviewShowing.items.length - 1
																				].quantity
																		}
																	</p>
																	<h3>
																		{priceFormatter(
																			cartPreviewShowing.items[cartPreviewShowing.items.length - 1].calculardescuentos
																				? Math.round(cartPreviewShowing.items[cartPreviewShowing.items.length - 1].priceWithTax - ((cartPreviewShowing.items[cartPreviewShowing.items.length - 1].priceWithTax * cartPreviewShowing.items[cartPreviewShowing.items.length - 1].discountPercentage) / 100))
																				: cartPreviewShowing.items[cartPreviewShowing.items.length - 1].priceWithTax
																		)}
																	</h3>
																</CartModalPreviewText>
																<CartModalPreviewBtns>
																	<button
																		onClick={() => {
																			Router.pushRoute("/carrito");
																			hideCartPreview();
																		}}
																		className="btn-cart"
																	>
																		<svg
																			width="20"
																			height="18"
																			viewBox="0 0 20 18"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M7.75687 18.0001C7.16647 18.0001 6.60025 17.763 6.18277 17.341C5.7653 16.9191 5.53076 16.3468 5.53076 15.7501C5.53076 15.1533 5.7653 14.581 6.18277 14.1591C6.60025 13.7371 7.16647 13.5 7.75687 13.5C8.34727 13.5 8.91349 13.7371 9.33097 14.1591C9.74845 14.581 9.98298 15.1533 9.98298 15.7501C9.98298 16.3468 9.74845 16.9191 9.33097 17.341C8.91349 17.763 8.34727 18.0001 7.75687 18.0001ZM15.5483 18.0001C14.9579 18.0001 14.3916 17.763 13.9742 17.341C13.5567 16.9191 13.3221 16.3468 13.3221 15.7501C13.3221 15.1533 13.5567 14.581 13.9742 14.1591C14.3916 13.7371 14.9579 13.5 15.5483 13.5C16.1387 13.5 16.7049 13.7371 17.1224 14.1591C17.5398 14.581 17.7744 15.1533 17.7744 15.7501C17.7744 16.3468 17.5398 16.9191 17.1224 17.341C16.7049 17.763 16.1387 18.0001 15.5483 18.0001ZM1.03624 2.16338C0.75838 2.15432 0.494897 2.03639 0.301511 1.83452C0.108126 1.63266 0 1.36268 0 1.08169C0 0.800701 0.108126 0.530726 0.301511 0.328858C0.494897 0.126991 0.75838 0.00905832 1.03624 0H2.31737C3.32134 0 4.18953 0.704252 4.40769 1.69426L5.80235 8.04153C6.0205 9.03153 6.88869 9.73578 7.89266 9.73578H16.2539L17.859 3.24451H7.45746C7.18221 3.23182 6.9224 3.11237 6.73206 2.91101C6.54172 2.70965 6.43551 2.44187 6.43551 2.16338C6.43551 1.88489 6.54172 1.61712 6.73206 1.41576C6.9224 1.2144 7.18221 1.09495 7.45746 1.08225H17.859C18.1843 1.08216 18.5055 1.15704 18.7979 1.30122C19.0904 1.44539 19.3465 1.65506 19.5467 1.91429C19.7469 2.17351 19.8861 2.47547 19.9535 2.79721C20.021 3.11894 20.0149 3.45198 19.9359 3.77101L18.3309 10.26C18.2152 10.7283 17.9479 11.1439 17.5716 11.4409C17.1952 11.738 16.7314 11.8992 16.2539 11.8992H7.89266C6.91851 11.8993 5.97345 11.5636 5.21355 10.9475C4.45366 10.3314 3.92438 9.47183 3.71314 8.51065L2.31737 2.16338H1.03624Z"
																				fill="black"
																			/>
																		</svg>
																		Ver carrito
																	</button>
																	{/*    <Link route="cart" params={{ step: 2 }}>
                                  <a className="btn-checkout" >Checkout</a>
                                </Link> */}
																	<button
																		onClick={() => {
																			Router.pushRoute("cart", {checkout: 2});
																			hideCartPreview();
																		}}
																		className="btn-checkout"
																	>
																		Checkout
																	</button>
																	<span>
                                    <svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
                                      <path
										  d="M6 11.625C9.1066 11.625 11.625 9.1066 11.625 6C11.625 2.8934 9.1066 0.375 6 0.375C2.8934 0.375 0.375 2.8934 0.375 6C0.375 9.1066 2.8934 11.625 6 11.625Z"
										  fill="#4BD37B"
									  />
                                      <path
										  d="M8.625 2.625L4.6875 6.675L3.375 5.325L2.0625 6.675L4.6875 9.375L9.9375 3.975L8.625 2.625Z"
										  fill="white"
									  />
                                    </svg>
                                    Agregado al carrito
                                  </span>
																</CartModalPreviewBtns>
															</CartModalPreviewContainer>
														</CartModalPreview>
													)}
												</div>
											</Link>
										)}
										<AuthContent onClick={toggleLogin}>
											{
												<span>
                          {isLogged
							  ? `Hola, ${userName}`
							  : "Registrarse / Ingresar"}
                        </span>
											}
											<Icon
												name="profile"
												fill={header.cartIcon}
												height="18pt"
												width="19pt"
											/>
											{isLogged && <ProfileMenu logout={logout}/>}
											<InPartLoading
												isLoading={isUserLoading}
												canAbsolute
												preload
											/>
										</AuthContent>
										{parseInt(process.env.BRAND_ID) === 2 && (
											<Link route="cart">
												<div style={{position: "relative"}}>
													<a className={`cart-link cart-link-mini`}>
														<Icon
															name="cart"
															fill={header.cartIconDark}
															height={25}
															width={25}
														/>
														{(cartLocal?.length > 0 || withCartCount) && (
															<CartCount
																cartNumberBg={header.cartNumberBg}
																cartNumberText={header.cartNumberText}
																searchActived={isSearchMobileVisible}
															>
                                <span>
                                  {totalCartItems || cartLocal.length}
                                </span>
															</CartCount>
														)}
														<InPartLoading
															isLoading={isLogged && isCartLoading}
															canAbsolute
															preload
														/>
													</a>
													{cartPreviewShowing.isShowing && cart && (
														<CartModalPreview
															onClick={(e) => e.stopPropagation()}
														>
															<div className="icon-top">
																<svg
																	width="250"
																	height="69"
																	viewBox="0 0 250 69"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<g clipPath="url(#clip0)">
																		<g filter="url(#filter0_d)">
																			<path
																				d="M0 50.6482C0 50.6482 14.3849 50.6482 62.5001 50.6482C110.615 50.6482 110.119 10 123.512 10C136.905 10 138.889 50.6482 187.501 50.6482C236.111 50.6482 250 50.6482 250 50.6482H0Z"
																				fill="white"
																			/>
																		</g>
																	</g>
																	<defs>
																		<filter
																			id="filter0_d"
																			x="-4"
																			y="2"
																			width="258"
																			height="48.6482"
																			filterUnits="userSpaceOnUse"
																			colorInterpolationFilters="sRGB"
																		>
																			<feFlood
																				floodOpacity="0"
																				result="BackgroundImageFix"
																			/>
																			<feColorMatrix
																				in="SourceAlpha"
																				type="matrix"
																				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
																			/>
																			<feOffset dy="-4"/>
																			<feGaussianBlur stdDeviation="2"/>
																			<feColorMatrix
																				type="matrix"
																				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
																			/>
																			<feBlend
																				mode="normal"
																				in2="BackgroundImageFix"
																				result="effect1_dropShadow"
																			/>
																			<feBlend
																				mode="normal"
																				in="SourceGraphic"
																				in2="effect1_dropShadow"
																				result="shape"
																			/>
																		</filter>
																		<clipPath id="clip0">
																			<rect
																				width="250"
																				height="69"
																				fill="white"
																			/>
																		</clipPath>
																	</defs>
																</svg>
															</div>
															<CartModalPreviewContainer>
																<CloseXBtn onClick={hideCartPreview}>
																	<svg
																		width="14"
																		height="14"
																		viewBox="0 0 14 14"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
																			fill="#D5D5D5"
																		/>
																	</svg>
																</CloseXBtn>
																<img
																	src={
																		cartPreviewShowing.items[
																		cartPreviewShowing.items.length - 1
																			].image ||
																		"https://autogermana.s3.amazonaws.com/no%20-foto.png"
																	}
																	alt="product"
																/>
																<CartModalPreviewText>
																	<h3>
																		{cartPreviewShowing.items[
																		cartPreviewShowing.items.length - 1
																			].name.toUpperCase()}
																	</h3>
																	<label>Referencia</label>
																	<p>
																		#
																		{
																			cartPreviewShowing.items[
																			cartPreviewShowing.items.length - 1
																				].sku
																		}
																	</p>
																	<label>Cantidad</label>
																	<p>
																		x
																		{
																			cartPreviewShowing.items[
																			cartPreviewShowing.items.length - 1
																				].quantity
																		}
																	</p>
																	<h3>
																		{priceFormatter(
																			cartPreviewShowing.items[cartPreviewShowing.items.length - 1].calculardescuentos
																				? Math.round(cartPreviewShowing.items[cartPreviewShowing.items.length - 1].priceWithTax - ((cartPreviewShowing.items[cartPreviewShowing.items.length - 1].priceWithTax * cartPreviewShowing.items[cartPreviewShowing.items.length - 1].discountPercentage) / 100))
																				: cartPreviewShowing.items[cartPreviewShowing.items.length - 1].priceWithTax
																		)}
																	</h3>
																</CartModalPreviewText>
																<CartModalPreviewBtns>
																	<button
																		onClick={() => {
																			Router.pushRoute("/carrito");
																			hideCartPreview();
																		}}
																		className="btn-cart"
																	>
																		<svg
																			width="20"
																			height="18"
																			viewBox="0 0 20 18"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M7.75687 18.0001C7.16647 18.0001 6.60025 17.763 6.18277 17.341C5.7653 16.9191 5.53076 16.3468 5.53076 15.7501C5.53076 15.1533 5.7653 14.581 6.18277 14.1591C6.60025 13.7371 7.16647 13.5 7.75687 13.5C8.34727 13.5 8.91349 13.7371 9.33097 14.1591C9.74845 14.581 9.98298 15.1533 9.98298 15.7501C9.98298 16.3468 9.74845 16.9191 9.33097 17.341C8.91349 17.763 8.34727 18.0001 7.75687 18.0001ZM15.5483 18.0001C14.9579 18.0001 14.3916 17.763 13.9742 17.341C13.5567 16.9191 13.3221 16.3468 13.3221 15.7501C13.3221 15.1533 13.5567 14.581 13.9742 14.1591C14.3916 13.7371 14.9579 13.5 15.5483 13.5C16.1387 13.5 16.7049 13.7371 17.1224 14.1591C17.5398 14.581 17.7744 15.1533 17.7744 15.7501C17.7744 16.3468 17.5398 16.9191 17.1224 17.341C16.7049 17.763 16.1387 18.0001 15.5483 18.0001ZM1.03624 2.16338C0.75838 2.15432 0.494897 2.03639 0.301511 1.83452C0.108126 1.63266 0 1.36268 0 1.08169C0 0.800701 0.108126 0.530726 0.301511 0.328858C0.494897 0.126991 0.75838 0.00905832 1.03624 0H2.31737C3.32134 0 4.18953 0.704252 4.40769 1.69426L5.80235 8.04153C6.0205 9.03153 6.88869 9.73578 7.89266 9.73578H16.2539L17.859 3.24451H7.45746C7.18221 3.23182 6.9224 3.11237 6.73206 2.91101C6.54172 2.70965 6.43551 2.44187 6.43551 2.16338C6.43551 1.88489 6.54172 1.61712 6.73206 1.41576C6.9224 1.2144 7.18221 1.09495 7.45746 1.08225H17.859C18.1843 1.08216 18.5055 1.15704 18.7979 1.30122C19.0904 1.44539 19.3465 1.65506 19.5467 1.91429C19.7469 2.17351 19.8861 2.47547 19.9535 2.79721C20.021 3.11894 20.0149 3.45198 19.9359 3.77101L18.3309 10.26C18.2152 10.7283 17.9479 11.1439 17.5716 11.4409C17.1952 11.738 16.7314 11.8992 16.2539 11.8992H7.89266C6.91851 11.8993 5.97345 11.5636 5.21355 10.9475C4.45366 10.3314 3.92438 9.47183 3.71314 8.51065L2.31737 2.16338H1.03624Z"
																				fill="black"
																			/>
																		</svg>
																		Ver carrito
																	</button>
																	{/*    <Link route="cart" params={{ step: 2 }}>
                                  <a className="btn-checkout" >Checkout</a>
                                </Link> */}
																	<button
																		onClick={() => {
																			Router.pushRoute("cart", {checkout: 2});
																			hideCartPreview();
																		}}
																		className="btn-checkout"
																	>
																		Checkout
																	</button>
																	<span>
                                    <svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
                                      <path
										  d="M6 11.625C9.1066 11.625 11.625 9.1066 11.625 6C11.625 2.8934 9.1066 0.375 6 0.375C2.8934 0.375 0.375 2.8934 0.375 6C0.375 9.1066 2.8934 11.625 6 11.625Z"
										  fill="#4BD37B"
									  />
                                      <path
										  d="M8.625 2.625L4.6875 6.675L3.375 5.325L2.0625 6.675L4.6875 9.375L9.9375 3.975L8.625 2.625Z"
										  fill="white"
									  />
                                    </svg>
                                    Agregado al carrito
                                  </span>
																</CartModalPreviewBtns>
															</CartModalPreviewContainer>
														</CartModalPreview>
													)}
												</div>
											</Link>
										)}
									</CartAuthContent>
								</Nav>
								<Link route="home">
									<LogoContainer>
										<a>
											<img src={header.logo}/>
										</a>
									</LogoContainer>
								</Link>
							</Content>
						)}
						{parseInt(process.env.BRAND_ID) === 2 && (
							<SearchComponentMini>
								<div
									className={`search-header-mini ${
										router.pathname !== "/" && "search-header-mini-black"
									}`}
									onClick={() => toggleSearch(!isSearchMobileVisible)}
								>
									<SearchBox
										onSearch={onSearch}
										iconColor={theme.colors.main}
										theme={theme}
										toggleSearch={toggleSearch}
										getProducts={getProducts}
										products={products}
										submit={RemoteSubmitButton}
									/>
								</div>
							</SearchComponentMini>
						)}

						{isSearchMobileVisible && (
							<SearchComponent>
								<div className="search-header">
									{/*   <Icon
                    name='find'
                    fill={header.cartIcon}
                    height={16}
                    width={16}
                  /> */}
									<SearchBox
										onSearch={onSearch}
										iconColor={theme.colors.main}
										theme={theme}
										toggleSearch={toggleSearch}
										getProducts={getProducts}
										products={products}
										submit={RemoteSubmitButton}
									/>
									{/* <input type="search" size="45" className='input-search' placeholder="Busca el producto, categoría, modelo, etc." autofocus /> */}
								</div>
								<button
									className="close-search"
									onClick={() => toggleSearch(!isSearchMobileVisible)}
								>
									<svg
										width="27"
										height="27"
										viewBox="0 0 27 27"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M27 2.71929L24.2807 0L13.5 10.7807L2.71929 0L0 2.71929L10.7807 13.5L0 24.2807L2.71929 27L13.5 16.2193L24.2807 27L27 24.2807L16.2193 13.5L27 2.71929Z"
											fill="#D5D5D5"
										/>
									</svg>
								</button>
								{products.length > 0 ? (
									<SearchResults>
										<div className="search-results-content">
											<div>
												<h3>Productos sugeridos</h3>
												<div className="search-products-content">
													{products.map(
														(e, i) =>
															i < 6 && (
																<SearchProductCard
																	slug={e.slug}
																	subCategory={e.productCategory.name}
																	key={i}
																	stock={true}
																	name={e.name}
																	image={
																		e.imageProducts.length
																			? e.imageProducts[0].image
																			: "https://autogermana.s3.amazonaws.com/no%20-foto.png"
																	}
																	toggleSearch={toggleSearch}
																	/*   carCompatible={18} key={i} */
																/>
															)
													)}
												</div>
												<div className="search-products-content">
													<div></div>
													<div>{RemoteSubmitButton}</div>
												</div>
											</div>
											<div>
												<h3>Categorías asociadas</h3>
												<div className="search-categories">
													{breadcrumbs.map((category) => {
														let route = category.route.split("?")[1].split("&");
														let params = {};
														route.map((data) => {
															let p = data.split("=");
															params[p[0]] = p[1];
														});
														return (
															<div onClick={() => toggleSearch()}>
																<Link route="products" params={params}>
																	<a>{category.label}</a>
																</Link>
															</div>
														);
													})}
												</div>
											</div>
										</div>
									</SearchResults>
								) : (
									<NoProducts style={{minHeight: 400}}>
										<p>No se encontraron productos</p>
									</NoProducts>
								)}
							</SearchComponent>
						)}
					</Wrapper>
				</HeaderWrapper>
			</Sticky>
			<SideNav isShowing={isMobileMenuActived} closeNav={closeMobileMenu}>
				<CategoriesNavigation
					bgHead={header.navigationBGHover}
					colorHead={header.navigationTextHover}
					categories={flattenCategories}
					DefaultHeader={MobileDefaultHeader}
					theme={theme}
					logout={logout}
					isLogged={isLogged}
				/>
			</SideNav>
		</WhiteHeader>
	);
}

Header.defaultProps = {
	isMobileMenuActived: false,
	totalCartItems: 0,
	withBackground: false,
};

export default withTheme(Header);
