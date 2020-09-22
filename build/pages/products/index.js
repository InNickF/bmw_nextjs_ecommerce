import React, {Fragment, Component} from "react";
import PropTypes from "prop-types";
import Pagination from "react-js-pagination";

import {
	colors,
	sortItems,
	genderItems,
	filters,
	colections,
	sizes,
	tireBrands
} from "../../common/src/constants/products";
import {
	SizeFilter,
	GenderFilter,
	CollectionFilter,
	ColorsFilter,
	ScaleFilter,
	TypeFilter,
	IndexFilter,
	TiresFilter,
	RunflatFilter
} from "../../common/src/components/FiltersCollapsible";
import {
	Breadcrumbs,
	CollapsibleLinks,
	ProductCard,
	Select,
	Wrapper,
	GenerateTags,
	View,
	Icon,
	PriceSlider,
	ProductCardTire
} from "../../common/components";

import Collapsible from "react-collapsible";

import {VehicleFilterBox} from "../../common/containers";
import {getOriginalUrl} from "../../common/helpers";
import {Link, Router} from "../../common/src/routes/bmw";
import {product as coreProduct} from "../../common/redux";

import withStore from "./store";

import {
	NoProducts,
	SectionContainer,
	CategoriesContainer,
	PaginationWrapper,
	ProductsContainer,
	SelectContainer,
	Showing,
	FilterContainer,
	FilterButton,
	ProductsPage,
	ListProducts,
	ProductsPageHeader,
	FiltersContainerList,
	Separator,
	BtnCloseModalFilter,
	FilterHaderTires,
	ListTireBrands,
	SeparatorBrand,
} from "../../styles/products";

class Products extends Component {

	constructor(props) {
		super(props);
		const acum = {};
		const sizes = [];
		const types = [];
		const colors = [];
		const genders = {};
		const width = [];
		const height = [];
		const indexRin = [];
	}

	static async getInitialProps({store, query, req, isServer}) {
		const {getProducts} = coreProduct.actions;
		const prevPropsProducts = store.getState().getIn(['product', 'products']).toJS();
		let prevBre = prevPropsProducts.some(product => {
				return product.productCategory.slug != query.c
			}
		)
		if (!prevPropsProducts || !prevPropsProducts[0] || prevBre) {
			store.dispatch(getProducts(query));
		}
		return {
			originalUrl: getOriginalUrl(req),
			query,
			pathname: isServer ? req._parsedUrl.pathname : "",
			isServer,
		};
	}

	getImage(product) {
		if (product.image)
			return product.image;

		if (product.imageProducts && product.imageProducts[0]) {
			return product.imageProducts[0].image;
		}
		return "https://autogermana.s3.amazonaws.com/no%20-foto.png";
	}

	state = {
		filterIsHidden: false,
		gender: 0,
		sizes: [],
		filtersAcum: {},
		values: {
			min: 0,
			max: 0,
		},
		productsAll: [],
		pageCount: 10,
		currentPage: 1,
		notProducts: true,
		countItem: 12,
		currentSort: "createdAt-DESC"
	};

	setValues(values) {
		this.multiPropsFilter(this.state.filtersAcum);
		let newProducts = this.props.products.filter((product) => {
			return product.price >= values.min && product.price <= values.max;
		});
		this.setState({productsAll: newProducts, values: values});
	}

	componentDidMount() {
		this.setState({productsAll: this.props.products});
		this.filterInit(this.props.products);
		let queryLocal = localStorage.getItem("query") || "";
		if (queryLocal.replace(/['"]+/g, '') == this.props.query.c) {
			this.acum = JSON.parse(localStorage.getItem("acum"))
		} else {
			localStorage.removeItem("acum")
			localStorage.removeItem("query")
			this.acum = {}
		}
		this.multiPropsFilter({});
		setTimeout(() => {
			this.setState({notProducts: false})
		}, 1500)
		if (typeof document !== 'undefined' && this.state.filterIsHidden) {
			document.body.classList.add('notScroll');
		} else {
			if (typeof document !== 'undefined' && !this.props.isVisible) {
				document.body.classList.remove('notScroll');
			}
		}
	}

	componentDidUpdate() {
		let queryLocal = localStorage.getItem("query") || "";
		if (queryLocal.replace(/['"]+/g, '') == this.props.query.c) {
			/*  this.acum = JSON.parse(localStorage.getItem("acum")) */
		} else {
			localStorage.removeItem("acum")
			localStorage.removeItem("query")
			this.acum = {}
		}
	}

	UNSAFE_componentWillReceiveProps(prevProps) {
		if (this.state.currentSort !== "createdAt-DESC") {
			let result = prevProps.products;
			switch (this.state.currentSort) {
				case "name-ASC":
					prevProps.products.sort((a, b) => {
						if (a.name > b.name) {
							return 1;
						}
						if (a.name < b.name) {
							return -1;
						}
						return 0;
					})
					break;
				case "price-ASC":
					prevProps.products.sort((a, b) => {
						if (parseInt(a.price) > parseInt(b.price)) {
							return 1;
						}
						if (parseInt(a.price) < parseInt(b.price)) {
							return -1;
						}
						return 0;
					})
					break;
				case "price-DESC":
					prevProps.products.sort((a, b) => {
						if (parseInt(a.price) > parseInt(b.price)) {
							return -1;
						}
						if (parseInt(a.price) < parseInt(b.price)) {
							return 1;
						}
						return 0;
					})
					break;
				case "discountPercentage-DESC":
					prevProps.products.sort((a, b) => {
						if (a.discountPercentage > b.discountPercentage) {
							return -1;
						}
						if (a.discountPercentage < b.discountPercentage) {
							return 1;
						}
						return 0;
					})
					break;
				default:
					break;
			}
		}
		if (JSON.stringify(this.props.products) !== JSON.stringify(prevProps.products) || prevProps.compatibility.model && prevProps.compatibility.model.id) {
			if (prevProps.breadcrumbs.length > 0 &&
				prevProps.breadcrumbs[0].label.includes("ACCESORIOS") && prevProps.breadcrumbs[prevProps.breadcrumbs.length - 1].label != "LLANTAS" && this.props.compatibility.model && this.props.compatibility.serie) {
				let result = prevProps.products.filter(product => {
					return product.productVariations.some(variation => {
						return ((variation.vehicleModelId == prevProps.compatibility.model.id && variation.vehicleSerieId == prevProps.compatibility.serie.id && variation.yearStart <= prevProps.compatibility.year && variation.yearEnd >= prevProps.compatibility.year) || (variation.vehicleSerieId == 147))
					})
				})
				switch (this.state.currentSort) {
					case "name-ASC":
						result.sort((a, b) => {
							if (a.name > b.name) {
								return 1;
							}
							if (a.name < b.name) {
								return -1;
							}
							return 0;
						})
						break;
					case "price-ASC":
						result.sort((a, b) => {
							if (parseInt(a.price) > parseInt(b.price)) {
								return 1;
							}
							if (parseInt(a.price) < parseInt(b.price)) {
								return -1;
							}
							return 0;
						})
						break;
					case "price-DESC":
						result.sort((a, b) => {
							if (parseInt(a.price) > parseInt(b.price)) {
								return -1;
							}
							if (parseInt(a.price) < parseInt(b.price)) {
								return 1;
							}
							return 0;
						})
						break;
					case "discountPercentage-DESC":
						result.sort((a, b) => {
							if (a.discountPercentage > b.discountPercentage) {
								return -1;
							}
							if (a.discountPercentage < b.discountPercentage) {
								return 1;
							}
							return 0;
						})
						break;
					default:
						break;
				}
				this.setState({productsAll: result});
			} else {
				this.filterInit(prevProps.products);
				this.setState({productsAll: prevProps.products});
			}
		}
		if (prevProps.breadcrumbs.length > 0 &&
			prevProps.breadcrumbs[0].label.includes("ACCESORIOS") && prevProps.breadcrumbs[prevProps.breadcrumbs.length - 1].label != "LLANTAS" && JSON.stringify(this.props.compatibility) !== JSON.stringify(prevProps.compatibility)) {
			if (prevProps.compatibility.model && prevProps.compatibility.serie) {
				let result = prevProps.products.filter(product => {
					return product.productVariations.some(variation => {
						return ((variation.vehicleModelId == prevProps.compatibility.model.id && variation.vehicleSerieId == prevProps.compatibility.serie.id && variation.yearStart <= prevProps.compatibility.year && variation.yearEnd >= prevProps.compatibility.year) ||
							(variation.vehicleSerieId == 147)
						)
					})
				})
				this.setState({productsAll: result});
			} else {
				this.setState({productsAll: prevProps.products});
			}
		}
	}

	filterInit = (propsProducts) => {
		this.sizes = [];
		this.colors = [];
		this.acum = {};
		this.genders = [];
		this.types = [];
		this.indexRin = [];
		this.flatness = [];
		this.scale = [];
		propsProducts.map((product) => {
			product.sizes && product.sizes.map((size) => {
				if (!this.sizes.includes(size)) {
					this.sizes.push(size);
				}
			});
			product.colors && product.colors.map((color) => {
				if (!this.colors.includes(color))
					this.colors.push(color);
			});
			if (!this.genders.includes(product.gender)) {
				this.genders.push(product.gender);
			}
			if (!this.types.includes(product.type)) {
				this.types.push(product.type);
			}
			if (!this.indexRin.includes(product.indexRin) && product.indexRin) {
				this.indexRin.push(product.indexRin);
			}
			if (!this.scale.includes(product.scale)) {
				this.scale.push(product.scale);
			}
		});
		this.scale.sort();
		this.genders.sort();
		sizes.filter((x) => new Set(this.sizes).has(x));
		let valuesTemp = propsProducts.map((data) => data.price);
		valuesTemp = valuesTemp.sort(function (a, b) {
			return a - b;
		});
		let max = Math.max(...valuesTemp);
		let min = Math.min(...valuesTemp);
		this.setState({values: {min, max}});
	};

	multiPropsFilter = (filters) => {
		if (
			filters.colors &&
			this.acum.colors &&
			this.acum.colors.includes(filters.colors)
		) {
			this.acum = {...this.acum, colors: ""};
		} else if (
			filters.sizes &&
			this.acum.sizes &&
			this.acum.sizes.includes(filters.sizes)
		) {
			this.acum = {...this.acum, sizes: ""};
		} else if (
			filters.gender &&
			this.acum.gender &&
			this.acum.gender.includes(filters.gender)
		) {
			this.acum = {...this.acum, gender: ""};
		} else if (
			filters.collection &&
			this.acum.collection &&
			this.acum.collection.includes(filters.collection)
		) {
			this.acum = {...this.acum, collection: ""};
		} else if (
			filters.type &&
			this.acum.type &&
			this.acum.type.includes(filters.type)
		) {
			this.acum = {...this.acum, type: ""};
		} else if (
			filters.scale &&
			this.acum.scale &&
			this.acum.scale.includes(filters.scale)
		) {
			this.acum = {...this.acum, scale: ""};
		} else if (
			filters.width &&
			this.acum.width &&
			this.acum.width.includes(filters.width)
		) {
			this.acum = {...this.acum, width: ""};
		} else if (
			filters.high &&
			this.acum.high &&
			this.acum.high.includes(filters.high)
		) {
			this.acum = {...this.acum, high: ""};
		} else if (
			filters.runflat &&
			this.acum.runflat &&
			this.acum.runflat.includes(filters.runflat)
		) {
			this.acum = {...this.acum, runflat: ""};
		} else if (
			filters.scale == ""
		) {
			this.acum = {...this.acum, scale: "", width: "", high: ""};
		} else if (
			filters.width == ""
		) {
			this.acum = {...this.acum, width: "", high: ""};
		} else if (
			filters.scale &&
			this.acum.scale &&
			filters.scale != this.acum.scale
		) {
			this.acum = {...this.acum, ...filters, width: "", high: "", indexRin: ""};
		} else if (
			filters.width &&
			this.acum.width &&
			filters.width != this.acum.width
		) {
			this.acum = {...this.acum, ...filters, high: "", indexRin: ""};
		} else {
			this.acum = {...this.acum, ...filters};
		}

		if (this.props.query.rin) {
			this.width = []
			this.acum = {scale: this.props.query.rin, width: this.props.query.width, high: this.props.query.high};
			const tempWidth = {scale: this.props.query.rin}
			this.props.query.rin = undefined;
			let tempFilterKeys = Object.keys(tempWidth);
			let tempNewProducts = this.props.products.filter((product) => {
				return tempFilterKeys.every((key) => {
					if (key != "order") {
						if (!tempWidth[key].toString().length) return true;
						// Loops again if product[key] is an array (for material attribute).
						if (Array.isArray(product[key])) {
							return product[key].some((keyEle) => tempWidth[key].includes(keyEle));
						}
						return tempWidth[key].toString().includes(product[key]);
					} else {
						return true
					}
				});
			});
			tempNewProducts.map(product => {
				if (!this.width.includes(product.width)) {
					this.width.push(product.width);
					if (product.indexRin) {
						this.indexRin.push(product.indexRin);
					}
				}
			})
		}

		const filterKeys = Object.keys(this.acum);
		let newProducts = this.props.products.filter((product) => {
			return filterKeys.every((key) => {
				if (key != "order") {
					if (!this.acum[key].toString().length) return true;
					// Loops again if product[key] is an array (for material attribute).
					if (Array.isArray(product[key])) {
						return product[key].some((keyEle) => this.acum[key] == keyEle);
					}
					return this.acum[key].toString().includes(product[key]);
				} else {
					return true
				}
			});
		});

		if (!filters.width && !filters.high && !filters.scale) {
			this.flatness = []
			this.indexRin = []
			newProducts.map(product => {
				if (!this.flatness.includes(product.high)) {
					this.flatness.push(product.high);
				}
				if (!this.indexRin.includes(product.indexRin) && product.indexRin) {
					this.indexRin.push(product.indexRin);
				}
			})
		}

		if (this.props.breadcrumbs[0]?.label.includes("ACCESORIOS") && !(this.props.breadcrumbs[this.props.breadcrumbs.length - 1].label.includes("LLANTAS")) && this.props.compatibility.model && this.props.compatibility.serie) {
			newProducts = newProducts.filter(product => {
				return product.productVariations.some(variation => {
					return ((variation.vehicleModelId == this.props.compatibility.model.id && variation.vehicleSerieId == this.props.compatibility.serie.id && variation.yearStart <= this.props.compatibility.year && variation.yearEnd >= this.props.compatibility.year) || (variation.vehicleSerieId == 147))
				})
			})
			/* this.setState({ productsAll: result }); */
		} else {
			/* this.filterInit(this.props.products);
			this.setState({ productsAll: this.props.products }) */
			;
		}


		if (this.acum.order) {
			switch (this.acum.order) {
				case "name-ASC":
					newProducts.sort((a, b) => {
						if (a.name > b.name) {
							return 1;
						}
						if (a.name < b.name) {
							return -1;
						}
						return 0;
					})
					break;
				case "price-ASC":
					newProducts.sort((a, b) => {
						if (parseInt(a.price) > parseInt(b.price)) {
							return 1;
						}
						if (parseInt(a.price) < parseInt(b.price)) {
							return -1;
						}
						return 0;
					})
					break;
				case "price-DESC":
					newProducts.sort((a, b) => {
						if (parseInt(a.price) > parseInt(b.price)) {
							return -1;
						}
						if (parseInt(a.price) < parseInt(b.price)) {
							return 1;
						}
						return 0;
					})
					break;
				case "discountPercentage-DESC":
					newProducts.sort((a, b) => {
						if (a.discountPercentage > b.discountPercentage) {
							return -1;
						}
						if (a.discountPercentage < b.discountPercentage) {
							return 1;
						}
						return 0;
					})
					break;
				default:
					break;
			}

		}
		if (Object.keys(filters)[0] == 'scale') {
			this.width = []
			this.flatness = []
			this.acum.width = ""
			this.acum.indexRin = ""
			this.indexRin = []
		}
		if (Object.keys(filters)[0] == 'width') {
			this.flatness = []
			this.indexRin = []
		}
		if (Object.keys(filters)[0] == 'high') {
			this.indexRin = []
		}

		newProducts.map(product => {
			if (Object.keys(filters)[0] == 'scale' && filters.scale != "" && !this.width.includes(product.width)) {
				this.width.push(product.width);
				this.indexRin.push(product.indexRin);
			} else if (Object.keys(filters)[0] == 'width' && filters.width != "" && !this.flatness.includes(product.high)) {
				this.flatness.push(product.high);
				this.indexRin.push(product.indexRin);
			} else if (Object.keys(filters)[0] == 'high' && filters.high != "" && !this.indexRin.includes(product.indexRin)) {
				this.indexRin.push(product.indexRin);
			}
		})
		if (Object.keys(filters)[0] == 'scale') {
			this.width.sort()
		}
		if (Object.keys(filters)[0] == 'width') {
			this.flatness.sort()
		}
		this.setState({productsAll: newProducts});
		localStorage.setItem("acum", JSON.stringify(this.acum))
		localStorage.setItem("query", JSON.stringify(this.props.query.c))
		return newProducts;
	};

	render() {
		const {
			breadcrumbs,
			motivatorsItems,
			getNestedCategories,
			query,
			showPagination,
			originalUrl,
			categoriesPath,
			currentCategoryData,
			getProducts,
		} = this.props;
		const products = this.state.productsAll;
		const propsProducts = this.props.products;
		const currentCategory = filters[`${process.env.APP_NAME}`];

		if (query.c && query.level === 1) {
			breadcrumbs = [breadcrumbs[0]];
		}

		if (typeof document !== 'undefined' && this.state.filterIsHidden) {
			document.body.classList.add('notScroll');
		} else {
			if (typeof document !== 'undefined' && !this.props.isVisible) {
				document.body.classList.remove('notScroll');
			}
		}

		const {filterIsHidden} = this.state;

		const seeTires = breadcrumbs.length > 0 &&
		(breadcrumbs[breadcrumbs.length - 1].label) == "LLANTAS" ? true : false;
		const metaSEOByCategory = [
      {
        name: 'OFFER',
        title: 'Ofertas.',
        description: 'Encuentra ofertas y promociones de accesorios y BMW Lifestyle. Accede a nuestros productos y realiza tus compras de manera rápida y segura.'
      },
      {
        name: 'ACCESORIOS PARA CARROS',
        title: 'Compra accesorios originales para carros BMW.',
        description: ' Los accesorios para exterior e interior BMW, están diseñados con precisión e inspirados en el rendimiento. Regálale a tu BMW la tecnología de punta que merece.'
      },
      {
        name: 'LIFESTYLE',
        title: 'Compra artículos originales BMW Lifestyle.',
        description: 'Agrega un toque de exclusividad a tu estilo con los artículos BMW Lifestyle. Encuentra colecciones BMW para hombre y mujer, relojes, gorras, elementos deportivos y más del estilo de vida BMW.'
      }
    ]
    let currentMetaSEO = null;
    metaSEOByCategory.forEach(categoryMetaSEO => {
      if(breadcrumbs.length > 0 && breadcrumbs[0]?.label == categoryMetaSEO.name) {
        currentMetaSEO = categoryMetaSEO
      }
    })
    if(query?.offer) {
      currentMetaSEO = metaSEOByCategory[0] // OFFER META SEO
		}
		console.log(breadcrumbs)
		console.log(query)
		console.log(currentMetaSEO)

		const sort = query.order ? query.order.replace(" ", "-") : "";
		const currentSort = this.state.currentSort;
		return (
			<>
      {currentMetaSEO ?
        <GenerateTags
          title={currentMetaSEO.title}
          url={originalUrl}
          description={currentMetaSEO.description}
        />
        :
        <GenerateTags
        title={
          currentCategoryData && currentCategoryData.title
            ? currentCategoryData.metaTitle
            : "Productos"
        }
        url={originalUrl}
        description={
          currentCategoryData && currentCategoryData.metaDescription
            ? currentCategoryData.metaDescription
            : ""
        }
      />
      }
				{(breadcrumbs.length > 0 && breadcrumbs[0]?.label !== "LIFESTYLE" && breadcrumbs[0]?.label !== "STYLE" && breadcrumbs[0]?.label !== "RIDER EQUIPMENT" && breadcrumbs[breadcrumbs.length - 1]?.label != "LLANTAS") ||
				(Object.hasOwnProperty.call(query, "c") &&
					query.c.includes("accesorios")) ? (
					<VehicleFilterBox
						getProducts={getProducts}
						totalProducts={products.length}
						query={query}
					/>
				) : (
					<Separator/>
				)}
				<View>
					<ProductsPage>
						<Wrapper fullWrapper relative>
							<Breadcrumbs
								links={
									query.level == 1
										? [breadcrumbs[0]]
										: query.offer
										? {label: "Ofertas", params: {offer: "2020-02-17"}}
										: breadcrumbs
								}
							/>
							<ProductsPageHeader className={seeTires ? "tiresHeader" : ""}>
								<div className="text-header">
									<div className={"div-flex"}>
										<h3>
											{breadcrumbs.length > 0 &&
											(query.level == 1
												? breadcrumbs[0].label
												: query.q
													? query.q
													: query.offer
														? "Ofertas"
														: breadcrumbs[breadcrumbs.length - 1].label)}
										</h3>
										{!!propsProducts.length && (
											<Showing className="show-responsive">
												<p>
													{products.length}
													&nbsp;artículos
												</p>
											</Showing>
										)}
									</div>
								</div>

								<div className="filter-header">
									{seeTires && (
										<FilterHaderTires>
											<ListTireBrands>
												{tireBrands.map((item, i) => (
													<section style={{
														display: "flex",
														alignItems: "center"
													}} key={i}>
														<img
															src={"/static/images/tires/" + item}
															className={this.acum && this.acum.productBrand && this.acum.productBrand.toUpperCase() == item.substring(0, item.length - 4).toUpperCase() ? "selected-brand" : ""}
															onClick={() => {
																this.multiPropsFilter({
																	productBrand: this.acum && this.acum.productBrand && this.acum.productBrand.toUpperCase() == item.substring(0, item.length - 4).toUpperCase() ? "" : item.substring(0, item.length - 4).toUpperCase()
																})
															}}
															alt={item.substring(0, item.length - 3)}
														/>
														<SeparatorBrand/>
													</section>
												))}
											</ListTireBrands>
										</FilterHaderTires>
									)}
									<FilterContainer>
										{!!propsProducts.length && (
											<Showing className={"hide-responsive"}>
												<p>
													{products.length}
													&nbsp;artículos
												</p>
											</Showing>
										)}
										<FilterButton
											onClick={() =>
												this.setState({filterIsHidden: !filterIsHidden})
											}
										>
											<span>Filtros</span>
											<Icon
												name="filter"
												fill="black"
												height={24}
												width={24}
											/>
										</FilterButton>
										<SelectContainer>
											<span>Ordenar por</span>
											<Select
												placeholder=" Seleccionar filtro "
												filter={true}
												defaultValue={currentSort || "createdAt-DESC"}
												onChange={(e) => {
													this.multiPropsFilter({order: e.value});
													this.setState({currentSort: e.value})
												}}
												value={currentSort ? currentSort : "createdAt-DESC"}
												/* disabled={!products.length} */
											>
												{sortItems.map((item, i) => (
													<option value={item.value} key={i}>
														{item.text}
													</option>
												))}
											</Select>
										</SelectContainer>
									</FilterContainer>
								</div>
							</ProductsPageHeader>
							<SectionContainer>
								{motivatorsItems, getNestedCategories, categoriesPath, breadcrumbs && (
									<CategoriesContainer
									hiddenContainer={this.state.filterIsHidden}
									isTires={seeTires}
									className={`filter-responsive-categories`}
									>
									{seeTires && <img style={{maxWidth: '272px', marginBottom: '20px', width: '100%'}}
													  src={process.env.BRAND_ID != 1 ? "/static/images/tireguide.jpg" : "/static/images/tireguideMotorrad.jpg"}/>}
									<div
									className="filter-responsive-overlay"
									onClick={() => this.setState({filterIsHidden: !filterIsHidden})}
									/>
									<div className="filter-header-responsive">
									Filtros
									<button
									style={{padding: " 16px 16px", fontSize: "14px"}}
									onClick={() => this.setState({filterIsHidden: !filterIsHidden})}
									>
									Listo
									</button>
									</div>
									<CollapsibleLinks
									items={motivatorsItems}
									getNestedItems={getNestedCategories}
									openedItems={categoriesPath}
									breadcrumbs={breadcrumbs}
									notFound={!products.length}
									/>
									<FiltersContainerList>
									{!query.offer &&
									!query.q &&
									currentCategory[
										`${
											query.level == 1
												? breadcrumbs[0]?.label
												: breadcrumbs[breadcrumbs.length - 1]?.label
										}`
										] &&
									currentCategory[
										`${
											query.level == 1
												? breadcrumbs[0]?.label
												: breadcrumbs[breadcrumbs.length - 1]?.label
										}`
										].map((filter, i) => {
										return (
											<section key={i}>
												{filter == "Talla" && (
													<SizeFilter
														filter={this.multiPropsFilter.bind(this)}
														sizes={this.sizes}
														selectedProps={this.acum}
													/>
												)}
												{filter == "Género" && (
													<GenderFilter
														filter={this.multiPropsFilter.bind(this)}
														genders={this.genders}
														selectedProps={this.acum}
													/>
												)}
												{filter == "Color" && (
													<ColorsFilter
														filter={this.multiPropsFilter.bind(this)}
														colors={this.colors}
														selectedProps={this.acum}
													/>
												)}
												{filter == "Colección" && (
													<CollectionFilter
														filter={this.multiPropsFilter.bind(this)}
														collections={colections}
														selectedProps={this.acum}
													/>
												)}
												{filter == "Escala" && !seeTires && (
													<ScaleFilter
														filter={this.multiPropsFilter.bind(this)}
														selectedProps={this.acum}
													/>
												)}

												{filter == "Escala" && seeTires && (
													<TiresFilter
														filter={this.multiPropsFilter.bind(this)}
														scale={this.scale}
														width={this.width}
														flatness={this.flatness}
														selectedProps={this.acum}
													/>
												)}
												{filter == "Flatness" && seeTires && (
													<IndexFilter
														filter={this.multiPropsFilter.bind(this)}
														indexRin={this.indexRin}
														selectedProps={this.acum}
													/>
												)}
												{filter == "Runflat" && seeTires && (
													<RunflatFilter
														filter={this.multiPropsFilter.bind(this)}
														indexRin={this.indexRin}
														selectedProps={this.acum}
													/>
												)}
												{filter == "Tipo" && (
													<TypeFilter
														filter={this.multiPropsFilter.bind(this)}
														types={this.types}
														selectedProps={this.acum}
													/>
												)}
											</section>
										);
									})}
									</FiltersContainerList>

									<Collapsible trigger="Precio" open={true}>
									<PriceSlider
									prices2={this.props.products}
									setValues={(data) => this.setValues(data)}
									values={this.state.values}
									/>
									</Collapsible>

									<BtnCloseModalFilter>
									<button style={{background: '#efefef'}} onClick={() => {
									this.acum = {};
									this.multiPropsFilter({})
									if (query.offer) {
										Router.pushRoute("products", {offer: true});
									}
								}}>Borrar todo</button>
									</BtnCloseModalFilter>
									</CategoriesContainer>
									)}
								{!!products.length ? (
									<ProductsContainer>
										<ListProducts>
											{products.map(
												(product, i) =>
													i < this.state.countItem &&
													(seeTires ? (
														<ProductCardTire
															key={i}
															{...product}
															product={product}
															image={this.getImage(product)}
															addProductToCart={this.props.addProductToCart}
															brand={`/static/images/tires/${product.productBrand != null ? product.productBrand.toLowerCase() : ''}.png`}
															size="205/55 R16"
														/>
													) : (
														<ProductCard
															key={i}
															{...product}
															image={this.getImage(product)}
														/>
													))
											)}
										</ListProducts>
										<PaginationWrapper>
                      <span>
                        {this.state.countItem > products.length
							? products.length
							: this.state.countItem}{" "}
						  de {products.length}
                      </span>
											<a
												onClick={() =>
													this.setState({
														countItem: this.state.countItem + 8,
													})
												}
											>
												Ver más
											</a>
										</PaginationWrapper>
									</ProductsContainer>
								) : (
									<NoProducts style={{minHeight: 400}}>
										{
											products.length || this.state.notProducts ?
												<p>Cargando Productos</p>
												:
												<p>No se encontraron productos</p>
										}
									</NoProducts>
								)}
							</SectionContainer>
						</Wrapper>
					</ProductsPage>
				</View>
			</>
		);
	}
}

Products.propTypes = {
	currentCategoryData: PropTypes.object,
	motivator: PropTypes.object,
	motivatorsItems: PropTypes.array,
	setPaginationURL: PropTypes.func,
	onChangePage: PropTypes.func,
	setOrder: PropTypes.func,
	paginationOptions: PropTypes.object,
	productsStatus: PropTypes.object,
	products: PropTypes.array,
	breadcrumbs: PropTypes.array,
	getNestedCategories: PropTypes.func,
};

export default withStore(Products);
