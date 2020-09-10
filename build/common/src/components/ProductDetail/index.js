import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import {withTheme} from 'styled-components'
import Collapsible from 'react-collapsible';

import {
	Modal,
	Button,
	VehicleRegister,
	SlideShowImageThumb,
	GenerateTags,
	ModelFilterForm,
	FrequentlyBuyed
} from '../'

import {
	Content,
	Detail,
	InfoContainer,
	ShortDescription,
	Sheet,
	Attr,
	Available,
	Info,
	DetailActions,
	ColorsList,
	ColorItem,
	IconStyle,
	ContentIcon,
	ContentSlide,
	CountContent,
	CountLabel,
	VehiclesContent,
	VehicleItem,
	VechicleInfo,
	ContentCount,
	PriceContent,
	TallasContent,
	TallaItem,
	ModalTitle,
	ModelTable,
	SizeGuide,
	SpecificationsModal,
	ComplementStyle,
	TotalWithThis,
	Kit,
	CompatibilityActions,
	CompatibleCar,
	ItemDataProduct,
	ActionProductContent,
	ListClotheTheme,
	InstalationKit,
	ModalSeriesContainer,
	SearchContent,
	Title,
	YearList,
	SerieCardContainer,
	ContentModels,
	YearTabItem,
	SerieCard,
	TireDataContent,
	TireDataList,
	TireDataListItem,
	TireGuide,
	TireGuideImg,
	TireGuideData
} from './styles'

import {complement} from 'polished'
import Slider from "react-slick";
import {priceFormatter} from '../../helpers';
import {colorsPicker} from '../../constants/products';
import {VehicleFilterBox} from '../../containers';


function getUnique(arr, comp) {
	const unique = arr
		.map(e => e[comp])
		// store the keys of the unique objects
		.map((e, i, final) => final.indexOf(e) === i && i)
		// eliminate the dead keys & store unique objects
		.filter(e => arr[e]).map(e => arr[e]);

	return unique;
}

class ProductDetail extends React.Component {
	state = {
		expandDescription: false,
		count: 1,
		totalKit: 0,
		compatibilidadModal: true,
		colorSelected: {
			color: '',
			sizes: []
		},
		sizeSelected: {},
		isDetailDialogVisible: false,
		isCompatibilityTableDialogVisible: false,
		selectedYear: 0,
		showedSeries: [],
		searchValue: ''
	};


	toggleState = keyName =>
		this.setState(state => ({[keyName]: !state[keyName]}));

	getCompatibilityYears = (model) => {
		const years = [];
		model.map(e => {
			years.push(e.endYear);
			years.push(e.startYear);
		})

		if (this.state.selectedYear === 0)
			this.setState({selectedYear: [...new Set(years)].sort()[0]});

		return [...new Set(years)].sort();
	}

	getCompatibilitySeries = (model, year) => {
		const arr = model.filter(a => year <= a.endYear && year >= a.startYear)
		const arrSeries = []
		let serie = {}
		arr.map(e => {
			serie = e.serie;
			if (!arrSeries.includes(serie))
				arrSeries.push(serie);
		})
		return arrSeries;
	}

	getCompatibilityModel = (model, serie, year) => {
		const ar = model.filter(a => year <= a.endYear && year >= a.startYear)
		const arr2 = ar.filter(e => e.serie === serie)
		return [...new Set(arr2)].sort();
	}

	renderVehicles = () => {
		const {vehicles, product} = this.props
		if (!product.isAccessory) {
			return null
		}
		return (
			<Sheet>
				{/*      <h6>
          Compatibilidad:{' '}
          <a
            className='anchor'
            onClick={() =>
              this.toggleState('isCompatibilityTableDialogVisible')
            }
          >
            Ver modelos compatibles
          </a>
        </h6> */}
				<VehiclesContent>
					{map(vehicles, item => {
						const vehicleBrand =
							Object.hasOwnProperty.call(item, 'vehicleBrand') &&
							Object.hasOwnProperty.call(item.vehicleBrand, 'name')
								? item.vehicleBrand.name
								: ''
						const vehicleSerie =
							Object.hasOwnProperty.call(item, 'vehicleSerie') &&
							Object.hasOwnProperty.call(item.vehicleSerie, 'name')
								? item.vehicleSerie.name
								: ''
						const vehicleModel =
							Object.hasOwnProperty.call(item, 'vehicleModel') &&
							Object.hasOwnProperty.call(item.vehicleModel, 'name')
								? item.vehicleModel.name
								: ''

						return (
							<VehicleItem key={item.id}>
								<div>
									<IconStyle
										name={
											Object.hasOwnProperty.call(item, 'compatibility') &&
											item.compatibility
												? 'check-box'
												: 'check-box-error'
										}
										width={20}
										height={20}
										fill={item.compatibility ? '#52D322' : '#FF001F'}
									/>
								</div>
								<VechicleInfo>{`${vehicleBrand} ${vehicleSerie} ${vehicleModel}`}</VechicleInfo>
							</VehicleItem>
						)
					})}
				</VehiclesContent>
			</Sheet>
		)
	};

	renderPrice = (product) => {
		const {sizeSelected, count} = this.state;
		let selectProduct = sizeSelected.productChildrenId ? sizeSelected : product;
		const today = new Date();
		const initDis = new Date(selectProduct.initDateDiscount);
		const endDis = new Date(selectProduct.endDateDiscount);
		const isDiscountAvalidable = today >= initDis && today <= endDis;
		const precio = Math.round(selectProduct.priceWithTax - ((selectProduct.priceWithTax * selectProduct.discountPercentage) / 100));
		const priceAvalidable = Math.round(isDiscountAvalidable
			? (selectProduct.calculardescuentos
				? selectProduct.priceWithTax
				: (selectProduct.priceWithTax / (1 - (selectProduct.discountPercentage / 100))))
			: selectProduct.priceWithTax);

		return (
			<>
				{isDiscountAvalidable ?
					<div>
						<p className='price-discount'>
							{priceFormatter(priceAvalidable)}
							{/* {` $${(priceAvalidable * count).toLocaleString()}`} */}
						</p>
						<p className='price'>
							{priceFormatter(selectProduct.calculardescuentos ? precio : selectProduct.price)}
							{/* {` $${(selectProduct.price * count).toLocaleString()}`} */}
							<span className='discount-percentage'>
                {selectProduct.discountPercentage}% OFF
              </span>
						</p>
					</div>
					:
					<p className='price'>
						{priceFormatter(priceAvalidable)}
						{/* {` $${(priceAvalidable * count).toLocaleString()}`} */}
					</p>
				}
			</>
		);
	}

	sortSizes(sSices) {
		return ['44', '50', '56', '62', '68', '74', '80', '86', '92', '86', '92', '98', '104', '110', '116', '122', '128', '134', '140', '146', '152', '158', '164', '170', 'XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXL', '2XL', '3XL', "ÚNICA"].filter(x => new Set(sSices).has(x))
	}

	selectTalla = obj => {
		this.props.setTalla(obj.stock, obj.images, obj.sku, obj.productChildrenId)
		this.setState({sizeSelected: obj, count: 1})
	};

	renderColor = () => {
		const {colorSelected, sizeSelected} = this.state
		const sortSizes = [, '1', '2', '3', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '50', '56', '62', '68', '74', '80', '86', '92', '86', '92', '98', '104', '110', '116', '122', '128', '134', '140', '146', '152', '158', '164', '170', 'XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXL', '2XL', '3XL', "ÚNICA"]
		colorSelected.sizes.sort(function (a, b) {
			return sortSizes.indexOf(a.size) - sortSizes.indexOf(b.size);
		});
		return (
			<ListClotheTheme>
				<Attr>
					<h6>Colores: </h6>
					<ColorsList>
						{this.props.product.colorVariations && this.props.product.colorVariations.length > 0 ? this.props.product.colorVariations.map((obj, iter) => {
								let color = colorsPicker[obj.color]
								return (
									<ColorItem
										key={iter}
										color={(obj.hex)}
										image={undefined}
										onClick={() => this.setColor(obj)}
										active={
											Object.hasOwnProperty.call(colorSelected, 'color') &&
											colorSelected.color === obj.color
										}

									>
										<div/>
									</ColorItem>
								)
							}) :
							<>
								<ColorItem
									color={colorsPicker[this.props.product.color] ? colorsPicker[this.props.product.color].value : '#ffff'}
									image={undefined}
									active={true}>
									<div/>
								</ColorItem>
							</>
						}
					</ColorsList>
				</Attr>
				{colorSelected.sizes.length > 0 ? (
						<Attr>
							<h6>
								Seleccionar talla:&nbsp;
								<a
									className='anchor'
									onClick={() => this.toggleState('isSizesVisible')}
								>
									Ver guía de tallas
								</a>
							</h6>
							<TallasContent>
								{colorSelected.sizes.map((obj, iter) => (
									<TallaItem
										key={iter}
										available={obj.stock > 0}
										selected={
											Object.hasOwnProperty.call(sizeSelected, 'sku') &&
											sizeSelected.sku === obj.sku
										}
										onClick={() => obj.stock > 0 && this.selectTalla(obj)}>
										{obj.size}
									</TallaItem>
								))}
							</TallasContent>
						</Attr>
					) :
					<Attr>
						<h6>
							Seleccionar talla:&nbsp;
							<a
								className='anchor'
								onClick={() => this.toggleState('isSizesVisible')}>
								Ver guía de tallas
							</a>
						</h6>
						<TallasContent>
							<TallaItem
								available={this.props.product.stock > 0}
							>
								{this.props.product.size}
							</TallaItem>
						</TallasContent>
					</Attr>
				}
			</ListClotheTheme>
		)
	};

	setColor = obj => {
		const sizes = obj.zisesVariations
		this.setState({
			colorSelected: {color: obj.color, sizes},
			sizeSelected: obj,
			count: 1
		})
		if (sizes && sizes.length && sizes[0]) {
			this.selectTalla(sizes[0])
		}
	};

	componentDidMount() {
		const {product, query} = this.props
		if (
			product &&
			product.isFather &&
			Array.isArray(product.colorVariations) &&
			product.colorVariations.length
		) {
			let sku = query.slug.split("-");
			sku = sku[sku.length - 1];
			let resultVariation = product.colorVariations.find(variation => {
				let sizeSucess = variation.zisesVariations.find(sizeVariation =>
					sizeVariation.sku == sku
				)
				return sizeSucess != undefined

			})
			this.setColor(resultVariation)
		}
	}

	handleChangeKit = (e, value) => {
		if (e.target.checked) {
			this.setState(prevState => {
				return {totalKit: prevState.totalKit + value}
			})
		} else {
			this.setState(prevState => {
				return {totalKit: prevState.totalKit - value}
			})
		}
	}

	handleModalCompatibilitySearch = (e, models, year) => {
		const searched = models.filter(t => (t.model.toLowerCase().includes(event.target.value.toLowerCase())) || (t.serie.toLowerCase().includes(event.target.value.toLowerCase())) || (t.startYear.toLowerCase().includes(event.target.value.toLowerCase())) || (t.endYear.toLowerCase().includes(event.target.value.toLowerCase())));
		//const allArticles = this.state.allArticles.slice(1);// articlesEn.concat(articlesEs);
		this.setState({showedSeries: searched});
		this.setState({searchValue: event.target.value});
	}

	handlerAddComplementations = (productsComplementations) => {
		const {product, cart, cartLocal} = this.props
		const {count} = this.state

		if (this.props.isLogged) {
			const productsForCart = []

			if (cart.items && Array.isArray(cart.items))
				cart.items.map(item => {
					productsForCart.push({productId: item.productId, quantity: item.quantity})
				})

			const isProduct = productsForCart.find(item => item.productId == product.id)
			if (isProduct) {
				isProduct.quantity += count;
			} else
				productsForCart.push({productId: product.id, quantity: count})

			productsComplementations.map(item => {
				item.productStock = item.stock
				const isExist = productsForCart.find(_item => _item.productId == item.id)
				if (isExist)
					isExist.quantity++;
				else
					productsForCart.push({productId: item.id, quantity: 1})
			})

			this.props.setCart(productsForCart)
			this.props.addReduxCart()
		} else {
			const items = [{...Object.assign(product, {}), quantity: count}]

			productsComplementations.map(item => {
				item.productStock = item.stock
				const isExist = items.find(_item => _item.id == item.id)
				if (isExist) {
					isExist.quantity += 1
					isExist.count += 1
				} else {
					items.push({...item, quantity: 1})
				}
			})

			this.props.addProductToCartLocal(items)
		}
	}

	render() {
		const settingsSlider = {
			dots: true,
			infinite: true,
			autoplay: false,
			arrows: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		const {
			product,
			models,
			addToWishlist,
			addToWishlistId,
			addProductToCart,
			addVehicle,
			// isLogged,
			originalUrl,
			isCartLoading,
			addWishlistLoading,
			alertStock,
			theme,
			query,
			category
		} = this.props
		const {count, compatibilidadModal, sizeSelectedm, sizeSelected, totalKit, selectedYear, showedSeries, searchValue} = this.state
		const {isFather, isLifeStyle} = product
		const sizesGuidePDF = `https://autogermana.s3.amazonaws.com/static/guia-de-tallas-${
			process.env.BRAND_ID
		}.pdf#zoom=50`
		const sizesGuidePDFresponsive = `https://autogermana.s3.amazonaws.com/static/guia-de-tallas-${
			process.env.BRAND_ID
		}-responsive.pdf#zoom=40`
		const isCompatibility = this.props.isCompatibility;
		const seeTire = category == "LLANTAS" ? true : false;

		let isProductComplementation = false

		if (Array.isArray(product.relatedProducts) && product.relatedProducts.length > 0) {
			product.relatedProducts.map(item => {
				if (item.relatedProduct.stock)
					isProductComplementation = true;
			})
		}

		return (
			<Content>
				<GenerateTags
					title={product.name}
					description={product.description}
					image={
						product.imageProducts && product.imageProducts.length
							? product.imageProducts[0].image
							: 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
					}
					url={originalUrl}
					twitterTitle={product.name}
					twitterSummary={product.description}
					twitterDescription={product.description}
					twitterImage={
						product.imageProducts && product.imageProducts.length
							? product.imageProducts[0].image
							: 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
					}
					isProduct
					ogType='product'
					availability={product.stock > 0 ? 'instock' : 'out of stock'}
					price={product.price.toLocaleString()}
				/>
				<Detail>
					<ContentSlide width='65%'>
						<div className="slide-product-no-responsive">
							<SlideShowImageThumb
								images={product.imageProducts.length > 0 ? product.imageProducts
									:
									[{
										image: 'https://autogermana.s3.amazonaws.com/no%20-foto.png',
										default: true
									}]
								}
								name={product.name}
								height='320px'
							/>
						</div>
						<div className="slide-product-responsive">
							{product.imageProducts && product.imageProducts.length ?
								<Slider {...settingsSlider}>
									{map(product.imageProducts, item => (
										<div key={item.id}>
											<img
												src={item.image}
												alt={'producto'}
											/>
										</div>))}
								</Slider> : <img
									src="https://autogermana.s3.amazonaws.com/no%20-foto.png"
									alt="No foto"
								/>}
						</div>
						{isProductComplementation &&
						<FrequentlyBuyed products={product.relatedProducts} addToWishlist={addToWishlistId}
										 responsive={false} productTarget={product}
										 addProductToCart={this.handlerAddComplementations.bind(this)}/>}
						{seeTire &&
						<TireGuide>
							<p>Guía de llanta</p>
							<TireGuideImg>
								<img
									src={process.env.BRAND_ID != 1 ? "/static/images/tireguide.jpg" : "/static/images/tireguideMotorrad.jpg"}
									alt="Datos llanta usada"
								/>
							</TireGuideImg>
							<TireGuideData>
								<p><strong>Ancho:</strong>Medida en milímetros de un costado de la llanta hasta el otro.
								</p>
								<p><strong>Perfil:</strong>Es el porcentaje a lo alto con respecto al ancho de la
									llanta, o la distancia que existe entre el borde de la llanta hasta el borde del
									rin.</p>
								<p><strong>Rin:</strong> Diámetro o medida del Rin en pulgadas.</p>
								<p><strong>Índice:</strong> Peso y velocidad máxima que la llanta puede soportar. Carga
									rango de 71 (345 kg) y 110 (1060 kg) / Velocidad rango A (el menor 30 km/h) y Y (el
									mayor 300 km/h).</p>
								<p><strong>Runflat:</strong> Incorporación de paredes laterales que permite que la
									llanta desinflada o pinchada continúe llevando el peso del vehículo por varios
									kilómetros sin causar daño.</p>
							</TireGuideData>
						</TireGuide>
						}
					</ContentSlide>
					<InfoContainer>

						<Sheet>
              <span style={{
				  color: " #929292",
				  fontSize: "10px"
			  }}>{product.productCategory && product.productCategory.name}</span>
							<h1 style={{fontWeight: "bold"}}>{product.name}</h1>
							<PriceContent style={{fontSize: "18px"}}>
								{this.renderPrice(product)}
							</PriceContent>
							<Available color='#83d626'>
								<div>
                  <span>
                    {product.stock > 0
						? 'En stock'
						: 'Sin stock'}
                  </span>
								</div>
							</Available>

							{!isLifeStyle && !seeTire && (
								<CompatibilityActions>
									{!this.props.selectedCar.serie &&
									< Button
										action={() => this.props.setVehicleFilter(!this.props.vehicleFilter)}
										compatibility
									>
										<span>Ver compatibilidad con el vehiculo</span>
									</Button>
									}
									{this.props.selectedCar.serie &&
									<CompatibleCar>
										<div className="actual-car-check">
											<div
												className={` ${isCompatibility ? 'squaredThree ' : 'squaredThree squaredThree--not'}`}>
												<input type="checkbox" value="None" id="squaredThree" name="check"
													   checked disabled className="css-checkbox"/>
												<label htmlFor="squaredThree" className="css-label"></label>
											</div>
											<div className="data-car">
												<p>{isCompatibility ? 'Compatible con tu carro:' : 'No es compatible con tu vehiculo'}</p>
												<p>
													<strong>{this.props.selectedCar.model.name}</strong> - {this.props.selectedCar.year}
												</p>
											</div>
										</div>
										{/*  <div className="btn-see-list">
                        <button onClick={() => this.setState({ isCompatibilityTableDialogVisible: !this.state.isCompatibilityTableDialogVisible })}>
                          Ver lista
                          </button>
                      </div> */}
									</CompatibleCar>
									}
								</CompatibilityActions>
							)}
							{seeTire &&
							<TireDataContent>
								<TireDataList>
									<TireDataListItem>
										<p>Medidas</p>
										<p>{`${product.width}/${product.high} ${product.scale}`}</p>
									</TireDataListItem>
									<TireDataListItem>
										<p>Marca</p>
										<img width="80%"
											 src={`/static/images/tires/${product.productBrand != null ? product.productBrand.toLowerCase() : ''}.png`}/>
									</TireDataListItem>
									<TireDataListItem>
										<p>Uso</p>
										<p>{product.type}</p>
									</TireDataListItem>
								</TireDataList>
								<TireDataList bordered>
									<TireDataListItem>
										<p>Índice</p>
										<p>{product.indexRin}</p>
									</TireDataListItem>
									<TireDataListItem>
										<p>Runflat</p>
										<p>{product.runflat ? 'Si' : 'No'}</p>
									</TireDataListItem>
								</TireDataList>
							</TireDataContent>
							}
							{product.description !== null && (
								<ItemDataProduct>
									<h6>Descripción</h6>
									<p>{product.description}</p>
								</ItemDataProduct>)}
						</Sheet>
						<Sheet>
							<ItemDataProduct>
								<h6>Referencia</h6>
								<p>#{product.sku}</p>
							</ItemDataProduct>
							{seeTire &&
							<ItemDataProduct>
								<h6>Envío</h6>
								<p style={{
									fontWeight: "bold", fontSize: "16px", lineHeight: "19px", color: "#000000"
								}}>Gratis</p>
							</ItemDataProduct>
							}
						</Sheet>
						{product.complements && product.complements.length > 0 &&
						<InstalationKit>
							<Kit>
								<span>Kit de instalación</span>
							</Kit>
							{product.complements.map((complement, i) =>
								<ComplementStyle key={i}>
									<label className="checkbox-button">
										<div className="checkbox-button__label">
											<span style={{flex: '1 1'}}>{i + 1}.{complement.name}</span>
											<span style={{
												flex: '1 1',
												textAlign: 'left'
											}}>{priceFormatter(complement.priceWithTax)}</span>
											<span>
                          <label>
                            <input type="checkbox" className="checkbox-button__input" id="choice1-1" name="choice1"
								   onChange={(e) => this.handleChangeKit(e, complement.priceWithTax)}/>
                            <span className="checkbox-button__control"></span>
                          Incluir en compra</label>
                        </span>
										</div>
									</label>
								</ComplementStyle>)}
							<TotalWithThis>
								<p>Total con esto</p>
								<p>{priceFormatter(totalKit + product.priceWithTax)}</p>
							</TotalWithThis>
						</InstalationKit>
						}

						<ShortDescription>{product.descriptionShort}</ShortDescription>
						{isLifeStyle && this.renderColor()}
						{this.renderVehicles()}
						{product.requierInstalation && (
							<Info>
								<div>
									<IconStyle name='screwdriver'/>
								</div>
								<p>
									Este producto requiere de instalación profesional, puede
									elegir hacerla en cualquiera de nuestro centros autorizados
									agendando una cita al momento de pagar el producto o en su
									centro de confianza.
								</p>
							</Info>
						)}
						{product.stock <= 5 &&
						<CountLabel>Cantidad: &nbsp;<span
							className="font-italic">   {product.stock + ' en existencia'} </span></CountLabel>
						}
						<ActionProductContent>
							<CountContent>
								<ContentCount>
									<div
										className={`${count === 1 ? "disabled-style" : ''}`}
										onClick={() => {
											if (count - 1 > 0) {
												return this.setState({count: count - 1})
											}
											return null
										}}
									>
										<IconStyle
											name='minus-square-button'
											width={18}
											height={18}
											stroke={'black'}
											fill={'white'}
										/>
									</div>
									<div>{count}</div>
									<div
										className={`${product.stock === count ? "disabled-style" : ''}`}
										onClick={() => {
											if (product.stock >= count + 1)
												return this.setState({count: count + 1})
											return null
										}}
									>
										<IconStyle
											name='add-square-button'
											width={18}
											height={18}
											stroke={'black'}
											fill={'white'}
										/>
									</div>
								</ContentCount>
							</CountContent>

							<DetailActions className="content-btn-add">
								<Button
									gray={product.stock <= 0 ? true : false}
									disabled={product.stock <= 0}
									isLoading={isCartLoading}
									action={() =>
										addProductToCart(count, isLifeStyle && isFather, sizeSelected, product)
									}
								>
									<ContentIcon>
										<IconStyle name='cart' width={18} height={18} fill="white"/>
									</ContentIcon>
									<span>&nbsp;Añadir al carrito&nbsp;</span>
								</Button>
								<Button
									withLoader
									isLoading={addWishlistLoading}
									className='wishlist'
									action={addToWishlist}
									white
								>
									<ContentIcon>
										<IconStyle
											name='heart'
											width={18}
											height={18}
											fill={parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'}
										/>
									</ContentIcon>
									&nbsp;
									<span>
                    {product.inWishlist ? 'AÑADIDO A WISHLIST' : 'Añadir a lista de deseos'}
                  </span>
								</Button>
							</DetailActions>
						</ActionProductContent>
						<div className="collapsible-responsive">
							<Collapsible trigger="Descripción" open={true}>
								<p>{product.description}</p>
							</Collapsible>
						</div>
						<Collapsible trigger={seeTire ? 'Especificaciones (*)' : 'Especificaciones'} open={true}>
							<SpecificationsModal>
								<p><strong>Material:</strong> {product.material || 'No especificado'}</p>
								{!!(product.attributevalues && product.attributevalues.length) && (
									getUnique(product.attributevalues, 'value').map((item, i) => (
										!(item.value.split(/\s/)[0].includes("0")) && <p key={i}>
											<strong>{item.value.split(/\s/)[0]}</strong> &nbsp; {item.value.substr(item.value.indexOf(" ") + 1)}
										</p>
									))
								)}
								{product.weight && product.weight > 0 ?
									<p><strong>Peso:</strong> {product.weight} g</p>
									: ''
								}
								<p><strong>Garantía:</strong> {product.warrantyYear} años{seeTire && '(*)'}</p>
								{!isLifeStyle && (
									<Fragment>
										<p>
											<strong>Requiere instalación:</strong> {product.installation ? 'Si' : 'No'}
										</p>
										<p>
											<strong> Complementos para instalación:</strong>{' '}
											{product.complements && product.complements.length
												? 'Si'
												: 'No'}
										</p>
										{/*     {!!(product.complements && product.complements.length) && (
                        <ul>
                          {product.complements.map(item => (
                            <li>
                              - <a>{item.description}</a>
                            </li>
                          ))}
                        </ul>
                      )} */}
									</Fragment>
								)}
							</SpecificationsModal>
						</Collapsible>

					</InfoContainer>
					{isProductComplementation &&
					<FrequentlyBuyed products={product.relatedProducts} productTarget={product}
									 addToWishlist={addToWishlistId} responsive={true}
									 addProductToCart={this.handlerAddComplementations.bind(this)}/>}
				</Detail>
				<Modal
					isVisible={this.state.isDetailDialogVisible}
					name='detailDialog'
					closeModal={() => this.toggleState('isDetailDialogVisible')}
				>
					<SpecificationsModal>
						<ModalTitle>Especificaciones</ModalTitle>
						<h4>Características</h4>
						<p>Material: {product.material || 'No especificado'}</p>
						<p>Detalles adicionales:</p>
						{!!(product.attributevalues && product.attributevalues.length) && (
							<ul>
								{product.attributevalues.map((item, i) => (
									<li key={i}>- {item.value}</li>
								))}
							</ul>
						)}

						<br/>
						{product.weight && product.weight > 0 ?
							< p> Peso: {product.weigh} g</p> :
							''
						}
						<p>Garantía: {product.warrantyYear} años</p>
						{!isLifeStyle && (
							<Fragment>
								<p>
									Requiere instalación: {product.installation ? 'Si' : 'No'}
								</p>
								<p>
									Complementos para instalación:{' '}
									{product.complements && product.complements.length
										? 'Si'
										: 'No'}
								</p>
								{!!(product.complements && product.complements.length) && (
									<ul>
										{product.complements.map((item, i) => (
											<li key={i}>
												- <a>{item.description}</a>
											</li>
										))}
									</ul>
								)}
							</Fragment>
						)}
					</SpecificationsModal>
				</Modal>
				<Modal
					isVisible={this.state.isCompatibilityTableDialogVisible}
					name='compatibilityTable'
					closeModal={() =>
						this.toggleState('isCompatibilityTableDialogVisible')
					}
				>
					<ModalSeriesContainer>
						<SearchContent>
							<div>
								<IconStyle
									name='find'
									width={18}
									height={18}
									fill={theme.colors.main}
								/>
								<input type="search" placeholder="Busca el modelo serie año"
									   onChange={(e) => this.handleModalCompatibilitySearch(e, models)}/>
							</div>
						</SearchContent>

						<ContentModels>
							<Title>{searchValue ? 'Buscando: ' + searchValue : 'Carros compatibles'}</Title>
							<YearList>
								<div className="difuminated-title">Año</div>
								{this.getCompatibilityYears(searchValue ? showedSeries : models).map((year, i) => (
									<YearTabItem key={i} selected={selectedYear === year}
												 onClick={() => this.setState({selectedYear: year})}>
										{year}
									</YearTabItem>
								))}
							</YearList>
							<SerieCardContainer>
								{searchValue ?
									this.getCompatibilitySeries(searchValue ? showedSeries : models, selectedYear).map((serie, i) => (
										<SerieCard key={i}>
											<h3>{serie.includes('Serie') ? serie : `Serie ${serie}`}</h3>
											{this.getCompatibilityModel(searchValue ? showedSeries : models, serie, selectedYear).map((model, i) => (
												<p key={i}>{model.model}</p>
											))
											}
										</SerieCard>))

									:

									this.getCompatibilitySeries(models, selectedYear).map((serie, i) => (
										<SerieCard key={i}>
											<h3>{serie.includes('Serie') ? serie : `Serie ${serie}`}</h3>
											{this.getCompatibilityModel(models, serie, selectedYear).map((model, i) => (
												<p key={i}>{model.model}</p>
											))
											}
										</SerieCard>
									))
								}
							</SerieCardContainer>
						</ContentModels>

						<ModelTable style={{display: 'none'}}>
							<div className='divTable'>
								<div className='divTableBody'>
									<div className='divTableHeader'>
										<div className='divTableCell'>SERIE</div>
										<div className='divTableCell'>MODELO</div>
										<div className='divTableCell'>AÑOS</div>
									</div>
									{models.map((item, i) => (
										<div className='divTableRow' key={i}>
											<div className='divTableCell'>
												<p>{item.serie}</p>
											</div>
											<div className='divTableCell'>
												<p>{item.model}</p>
											</div>
											<div className='divTableCell'>
												<p>
													{item.startYear} - {item.endYear}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</ModelTable>
					</ModalSeriesContainer>
				</Modal>
				<Modal
					isVisible={this.state.isSizesVisible}
					name='sizesGuide'
					closeModal={() => this.toggleState('isSizesVisible')}
					className='modal-sizes'
				>
					<div>
						<SizeGuide>
							<iframe
								className='guideSize'
								src={sizesGuidePDF}
								marginWidth='0'
								marginHeight='0'
								hspace='0'
								vspace='0'
								frameBorder='0'
							/>
							<iframe
								className='guideSizeResponsive'
								src={sizesGuidePDFresponsive}
								marginWidth='0'
								marginHeight='0'
								hspace='0'
								vspace='0'
								frameBorder='0'
							/>
						</SizeGuide>
					</div>
				</Modal>

			</Content>
		)
	}
}

ProductDetail.defaultProps = {
	vehicles: {}
}

ProductDetail.propTypes = {
	product: PropTypes.object.isRequired,
	addToWishlist: PropTypes.func.isRequired,
	addProductToCart: PropTypes.func.isRequired,
	addWishlistLoading: PropTypes.bool.isRequired,
	isCartLoading: PropTypes.bool.isRequired,
	addVehicle: PropTypes.func.isRequired,
	alertStock: PropTypes.func.isRequired,
	isLogged: PropTypes.bool.isRequired,
	vehicles: PropTypes.any
}

export default withTheme(ProductDetail)
