import React from 'react'
import PropTypes from 'prop-types'
import {withTheme} from 'styled-components'
import LazyLoad from 'react-lazyload'
import {priceFormatter, capitalize} from '../../helpers'

import {Link} from "../../routes/bmw";


import {
	Container,
	ImageContainer,
	Title,
	Tag,
	Price,
	PriceDiscount,
	ProductCardData,
	ColorSquares,
	ProductCardDataResponsive
} from './styles'
import {ColorSquare} from '../CollapsibleItems/styles'
import {colorsPicker} from '../../constants/products'
import capitalizeBrands from '../../helpers/capitalizeBrands'

function getUnique(arr, comp) {

	const unique = arr
		.map(e => e[comp])

		// store the keys of the unique objects
		.map((e, i, final) => final.indexOf(e) === i && i)

		// eliminate the dead keys & store unique objects
		.filter(e => arr[e]).map(e => arr[e]);
	return unique;
}


function ProductCard(
	{
		slug,
		discountPercentage,
		initDateDiscount,
		endDateDiscount,
		calculardescuentos,
		priceWithTax,
		name,
		image,
		price,
		productCategory,
		skuVariations,
		i,
		color,
		hexArray
	}
) {
	const today = new Date();
	const initDis = new Date(initDateDiscount);
	const endDis = new Date(endDateDiscount);
	const isDiscountAvalidable = today >= initDis && today <= endDis;
	const priceAvalidable = Math.round(isDiscountAvalidable
		? (
			calculardescuentos
				? (priceWithTax)
				: (priceWithTax / (1 - (discountPercentage / 100)))
		)
		: priceWithTax);

	return (
		<Container>
			<Link route='product-detail' params={{slug: slug}}>
				<a className='product-card'>
					<ImageContainer>
						{isDiscountAvalidable &&
						<Tag>{discountPercentage}% off</Tag>
						}
						<img
							src={
								image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
							}
							alt={name}
						/>
					</ImageContainer>
					<ProductCardData>
						<div className="product-card-text">
							<h2>{name}</h2>
							{isDiscountAvalidable &&
							<PriceDiscount>
								{priceFormatter(priceAvalidable)}
							</PriceDiscount>}
						</div>
						<div className="product-card-prices">
							<p>{productCategory && productCategory.name}</p>
							<Price>{priceFormatter(priceFormatter(
								calculardescuentos
									? Math.round(priceWithTax - ((priceWithTax * discountPercentage) / 100))
									: priceWithTax))}</Price>
						</div>
					</ProductCardData>
					<ProductCardDataResponsive>
						<div className="product-card-text">
							<h2>{capitalizeBrands(capitalize(name))}</h2>
							<p>{productCategory && capitalizeBrands(capitalize(productCategory.name))}</p>
						</div>
						<div className="product-card-prices">
							{isDiscountAvalidable &&
							<PriceDiscount>
								{priceFormatter(priceAvalidable)}
							</PriceDiscount>}
							<Price>{priceFormatter(calculardescuentos
								? Math.round(priceWithTax - ((priceWithTax * discountPercentage) / 100))
								: priceWithTax)}</Price>
						</div>
					</ProductCardDataResponsive>
					<div className="hover-data">
						<ColorSquares>
							{(hexArray && hexArray.length > 0) ? hexArray.map((color, i) => {
									return <ColorSquare color={color} bordered={color == "#FFFFFF"}/>
								}
								) :
								<ColorSquare color={'#ffff'} bordered={color == "#FFFFFF"}/>
							}
						</ColorSquares>
					</div>
				</a>
			</Link>
		</Container>
	)
}

ProductCard.propTypes = {
	slug: PropTypes.string.isRequired,
	tagText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string,
	price: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
		.isRequired
}

export default withTheme(ProductCard)
