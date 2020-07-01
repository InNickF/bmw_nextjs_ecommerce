import React, { useState, useRef, useLinking, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'

import { Icon } from '../'

import { Container } from './styles'
import { Link } from '../../routes/bmw'
import {
  product as coreProduct,
} from '../../redux'


const customStyles = {
  singleValue: (provided, state) => ({
    ...provided,
    width: '100%',
    textAlign: 'center'
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#000000',
    width: '100%',
    textAlign: 'center'
  }),
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    background: 'transparent',
    borderBottom: '1px solid rgba(112, 112, 112, 0.2)',
    textAlign: 'center',
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '16px',
    background: state.isSelected ? 'rgba(28, 105, 212, 0.9)' : '#ffff',
    '&:hover': {
      background: '#1c69d4',
      color: '#ffff'
    }
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' })
}

function arrowRenderer() {
  return <div className='content'><svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.168945 0L4.56846 5L8.96797 0H0.168945Z" fill="black" />
  </svg>
  </div>
}

function multiPropsFilter({ filters, acum, setAcum, measurements, setMeasurements, tires }) {
  if (
    filters.width &&
    filters.width != ""
  ) {
    acum.width = filters.width;
  } else if (
    filters.high &&
    filters.high != ""
  ) {
    acum.high = filters.high
  } else if (
    filters.scale &&
    filters.scale == ""
  ) {
    acum.scale = "";
    acum.width = "";
    acum.high = "";
  } else if (
    filters.width == ""
  ) {
    acum.width = "";
    acum.high = "";
  } else if (
    filters.scale &&
    filters.scale != acum.scale
  ) {
    acum.scale = filters.scale;
    setMeasurements({ width: [], high: [], indexRin: measurements.indexRin })
    measurements.width = [];
    acum.width = "";
    acum.high = "";
  } else if (
    filters.width != acum.width
  ) {
    acum.high = "";
  }
  const filterKeys = Object.keys(acum);
  let newProducts = tires.filter((product) => {
    return filterKeys.every((key) => {
      if (!acum[key].toString().length) return true;
      // Loops again if product[key] is an array (for material attribute).
      if (Array.isArray(product[key])) {
        return product[key].some((keyEle) => acum[key].includes(keyEle));
      }
      return acum[key].toString().includes(product[key]);
    });
  });
  if (Object.keys(filters)[0] == 'scale') {
    setMeasurements({ width: [], high: [], indexRin: [] })
  }
  if (Object.keys(filters)[0] == 'width') {
    setMeasurements({ ...measurements, high: [], indexRin: [] })
  }
  if (Object.keys(filters)[0] == 'high') {
    setMeasurements({ ...measurements, indexRin: [] })
  }
  newProducts.map(product => {
    if (Object.keys(filters)[0] == 'scale' && filters.scale == "" && !measurements.scale.includes(product.scale)) {
      measurements.scale.push(product.scale);
    } else
      if (Object.keys(filters)[0] == 'scale' && filters.scale != "" && !measurements.width.includes(product.width)) {
        measurements.width.push(product.width);
        setMeasurements({ scale: measurements.scale, width: measurements.width, high: [] })
        /* measurements.indexRin.push(product.indexRin); */
      } else if (Object.keys(filters)[0] == 'width' && filters.width != "" && !measurements.high.includes(product.high)) {
        measurements.high.push(product.high);
        setMeasurements({ scale: measurements.scale, width: measurements.width, high: measurements.high })
        /* setMeasurements({ ...measurements, flatness: [...measurements.flatness, product.high], indexRin: [...measurements.indexRin, product.indexRin] }) */
      } else if (Object.keys(filters)[0] == 'high' && filters.high != "" && !measurements.indexRin.includes(product.indexRin)) {
        /* setMeasurements({ ...measurements, indexRin: [...measurements.indexRin, product.indexRin] }) */
      }
  })
  if (Object.keys(filters)[0] == 'scale') {
    if (measurements.scale) {
      measurements.scale = measurements.scale.sort();
    }
    measurements.width = measurements.width.sort();
  }
  if (Object.keys(filters)[0] == 'width') {
    /* setMeasurements({ ...measurements, flatness: measurements.flatness.sort(), }) */
  }

  return newProducts;
};


const SectionProductFilter = ({ image, title, slug, callToActionText, info, dark, toolTipData }) => {
  const dispatch = useDispatch()
  const tires = useSelector(state => state.get("product").get('products').toJS())
  const [measurements, setMeasurements] = useState({ width: [], scale: [], high: [], flatness: [] })
  const [acum, setAcum] = useState({ width: "", scale: "", high: "" })
  const [options, setOptions] = useState({ width: [], scale: [], high: [] })
  useEffect(() => {
    dispatch(coreProduct.actions.getProducts({
      c: 'llantas',
      level: 3,
      parentId: `${process.env.BRAND_ID == 3 ? '5918' : process.env.BRAND_ID == 2 ? '5916' : ''}`,
    }))
  }, [])
  if (tires.length > 0 && options.scale.length == 0) {
    multiPropsFilter({ filters: { scale: "" }, acum, setAcum, measurements, setMeasurements, tires });
    let scale = []
    measurements.scale.map(data => { scale.push({ value: data, label: data }) });
    setOptions({ scale: scale, width: [], high: [] })
  }
  if (tires.length > 0 && measurements.width.length != options.width.length) {
    let width = []
    measurements.width.map(data => { width.push({ value: data, label: data }) });
    setOptions({ scale: options.scale, width: width, high: [] })
  }
  if (tires.length > 0 && measurements.high.length != options.high.length) {
    let high = []
    measurements.high.map(data => { high.push({ value: data, label: data }) });
    setOptions({ scale: options.scale, width: options.width, high: high })
  }

  return (
    <Container>
      <Link route="products" params={{ c: 'llantas', level: '3', parentId: slug }} >
        <a>
          <div className="banner-product-filter">
            <img
              src={
                image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
              }
              alt={title}
            />
            <p className={dark ? `color-black` : ''}>{title}</p>
          </div>
        </a>
      </Link>
      <div className="select-product-filter">
        {info && <div className="btn-info">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0ZM8.8 12.8H7.2V11.2H8.8V12.8ZM9.5808 8.892C9.424 9.0184 9.2728 9.1392 9.1528 9.2592C8.8264 9.5848 8.8008 9.8808 8.8 9.8936V10H7.2V9.8664C7.2 9.772 7.2232 8.9248 8.0208 8.1272C8.1768 7.9712 8.3704 7.8128 8.5736 7.648C9.1608 7.172 9.5464 6.8248 9.5464 6.3464C9.5371 5.94226 9.37 5.5578 9.08085 5.27529C8.7917 4.99279 8.40346 4.83467 7.99921 4.83478C7.59496 4.83488 7.2068 4.9932 6.9178 5.27585C6.62879 5.55851 6.46189 5.94305 6.4528 6.3472H4.8528C4.8528 4.612 6.2648 3.2 8 3.2C9.7352 3.2 11.1472 4.612 11.1472 6.3472C11.1472 7.6248 10.204 8.3872 9.5808 8.892Z" fill="#707070" />
          </svg>
          <div className="btn-info-tooltip">
            <img
              src={process.env.BRAND_ID != 1 ? "/static/images/tireguide.jpg" : "/static/images/tireguideMotorrad.jpg"}
              alt="Datos llanta usada"
            />
            <p><strong>Ancho:</strong>Medida en milímetros de un costado de la llanta hasta el otro.</p>
            <p><strong>Perfil:</strong>Es el porcentaje a lo alto con respecto al ancho de la llanta, o la distancia que existe entre el borde de la llanta hasta el borde del rin.</p>
            <p><strong>Rin:</strong> Diámetro o medida del Rin en pulgadas.</p>
          </div>
        </div>}
        <div className="select-container">
          <p>Encuentra llantas con garantía para tu carro  </p>
          <Select
            arrowRenderer={arrowRenderer}
            styles={customStyles}
            placeholder={"Rin"}
            options={options.scale}
            onChange={(scale) => multiPropsFilter({ filters: { scale: scale.value }, acum, setAcum, measurements, setMeasurements, tires })}
          />
          <Select
            arrowRenderer={arrowRenderer}
            styles={customStyles}
            placeholder={"Ancho"}
            options={options.width}
            onChange={(width) => multiPropsFilter({ filters: { width: width.value }, acum, setAcum, measurements, setMeasurements, tires })}
          />
          <Select
            arrowRenderer={arrowRenderer}
            styles={customStyles}
            placeholder={"Perfil"}
            options={options.high}
            onChange={(high) => setAcum({ width: acum.width, scale: acum.scale, high: high.value })}
          />

        </div>

        <Link route="products" params={{ c: 'llantas', level: '3', parentId: slug, rin: acum.scale, high: acum.high, width: acum.width }} >
          <a><span>{callToActionText}</span></a>
        </Link>
      </div>
    </Container>
  )
}



export default SectionProductFilter
