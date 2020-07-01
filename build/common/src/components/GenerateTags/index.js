import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const availabilities = [
  'instock',
  'oos',
  'pending',
  'preorder',
  'out of stock',
  'discontinued'
]

const ogTypes = ['website', 'article', 'product']

const brands = {
  1: {
    brand: 'BMW Motorrad',
    fbAdmins: '121729864547483',
    fbAppID: '',
    twitterUser: '@bmwmotorrad_co',
    mainColor: '#003399',
    logo: 'https://www.colombia.bmw-motorrad.co/content/dam/bmwmotorradnsc/common/mnm/graphics/bmw_motorrad_logo.svg.asset.1585209612412.svg'
  },
  2: {
    brand: 'MINI',
    fbAdmins: '55724017509',
    fbAppID: '',
    twitterUser: '@minicolombia',
    mainColor: '#000000',
    logo: 'https://autogermana.s3.amazonaws.com/static/images/mini-cooper.png'
  },
  3: {
    brand: 'BMW',
    fbAdmins: '158505524167832',
    fbAppID: '',
    twitterUser: '@bmwcolombia',
    mainColor: '#4a4a4a',
    logo: 'https://www.bmw.com.co/etc/clientlibs/digitals2/clientlib/media/img/BMW_White_Logo.svg'
  }
}


const currentBrand = brands[process.env.BRAND_ID]

function GenerateTags({
  title = '',
  description = '',
  image = currentBrand.logo,
  url = '',
  siteName = currentBrand.brand,
  twitterTitle,
  twitterSummary = '',
  twitterDescription = '',
  twitterUser = currentBrand.twitterUser,
  twitterImage = currentBrand.logo,
  ogType = ogTypes[0],
  isProduct = false,
  availability = availabilities[0],
  price = '',
  fbAdmins = currentBrand.fbAdmins,
  fbAppID = currentBrand.fbAppID,
  brand = currentBrand.brand
}) {
  const twTitle = `${title || twitterTitle} - ${brand}`

  return (
    <Head>
      {/* <!-- COMMON TAGS --> */}
      <title>
        {brand} Shop Colombia | {title}
      </title>
      <meta name='theme-color' content={brand.mainColor} />
      {/* <!-- Search Engine --> */}
      <meta name='description' content={description} />
      <meta name='image' content={image} />
      {/* <!-- Schema.org for Google --> */}
      <meta itemProp='name' content={`${brand} Shop Colombia | ${title}`} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={image} />
      {/* <!-- Twitter --> */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={twTitle} />
      <meta name='twitter:description' content={twitterDescription} />
      <meta name='twitter:site' content={twitterUser} />
      <meta name='twitter:image:src' content={twitterImage} />
      {/* <!-- Twitter - Product (e-commerce) --> */}
      {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
      <meta name='og:title' content={`${brand} Shop Colombia | ${title}`} />
      <meta name='og:description' content={description} />
      <meta name='og:image' content={image} />
      <meta name='og:url' content={url} />
      <meta name='og:site_name' content={`${siteName} Shop Colombia`} />
      <meta name='og:locale' content='es_CO' />
      <meta name='fb:admins' content={fbAdmins} />
      <meta name='fb:app_id' content={fbAppID} />
      <meta name='og:type' content={ogType} />

      {/* <!-- Open Graph - Product (e-commerce) --> */}
      {isProduct && (
        <Fragment>
          <meta name='product:availability' content={availability} />
          <meta name='product:price:currency' content='COP' />
          <meta name='product:price:amount' content={price} />
          <meta name='product:brand' content={brand} />
          <script type="application/ld+json">
            product
          </script>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{ "@context": "http://schema.org", "@type": "Product", "name": "${title}", "image": "${image}", "description": "${description}" }, "offers": { "@type": "Offer", "price": ${price}, "priceCurrency": "COP" }` }} />
        </Fragment>
      )}
    </Head>
  )
}

GenerateTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  siteName: PropTypes.string,
  twitterTitle: PropTypes.string,
  twitterSummary: PropTypes.string,
  twitterDescription: PropTypes.string,
  twitterUser: PropTypes.string,
  twitterImage: PropTypes.string,
  fbAdmins: PropTypes.string,
  fbAppID: PropTypes.string,
  brand: PropTypes.string,
  availability: PropTypes.oneOf(availabilities),
  ogType: PropTypes.oneOf(ogTypes),
  isProduct: PropTypes.bool,
  price: PropTypes.string
}

export default GenerateTags
