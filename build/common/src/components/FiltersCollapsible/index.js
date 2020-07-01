import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import { Grid2Column, ContentSelect } from './styles';
import CollapsibleItems from '../CollapsibleItems'
import capitalizeBrands from '../../helpers/capitalizeBrands';
import { capitalize } from '../../helpers';
import index from '../../../../pages/index';



function SizeFilter({ filter, sizes, selectedProps }) {
  const [selected, setSelected] = useState(true);
  let sortSizes = ['44', '50', '56', '62', '68', '74', '80', '86', '92', '86', '92', '98', '104', '110', '116', '122', '128', '134', '140', '146', '152', '158', '164', '170', 'XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXL', '2XL', '3XL', "ÚNICA"]
    .filter(x => new Set(sizes).has(x))
  return (
    <Collapsible trigger="Tallas" open={true} >
      {sizes &&
        sortSizes.map((talla, i) =>
          <a className="scale" key={i} style={{ marginTop: '20px' }}  >
            <input checked={selectedProps && selectedProps.sizes === talla} name="my-input" type="radio" id={i + 'a'} />
            <label onClick={(e) => { filter({ sizes: talla }); setSelected(selected == talla ? '' : talla) }} htmlFor={i + 'a'}  >{talla}</label>
          </a>
        )
      }
      {
        !sizes && ['XS', 'S', 'M', 'L', 'XL', 'XXL', "ÚNICA"].map((talla, i) =>
          <a className="scale" key={i} style={{ marginTop: '20px' }} >
            <input name="my-input" type="radio" id={i + 'a'} />
            <label onClick={() => { (filter({ sizes: talla })) }} htmlFor={i + 'a'}  >{talla}</label>
          </a>
        )
      }
    </Collapsible >
  )
}


function TypeFilter({ filter, types, selectedProps }) {
  const [selected, setSelected] = useState(true);
  return (
    <Collapsible trigger="Tipo" open={true} >
      {types && types.map((type, i) => {
        if (type && type != 0)
          return <a key={i} onClick={() => { filter({ 'type': type }); setSelected(selected == type ? '' : type) }} style={{
            cursor: 'pointer', display: 'block', margin: '10px 0', borderNottom: '1px solid #f8f8f8',
            paddingBottom: '10px'
          }} className={selectedProps && selectedProps.type == type ? 'bold' : ''} >
            {capitalizeBrands(capitalize(type))}
          </a>
      }
      )}
    </Collapsible>
  )
}

function GenderFilter({ filter, genders, selectedProps }) {
  const [selected, setSelected] = useState(true);
  return (
    <Collapsible trigger="Género" open={true} >
      {genders && genders.map((gender, i) => {
        if (gender && gender != 0)
          return <a className="scale" key={i} style={{ marginTop: '20px' }}  >
            <input checked={selectedProps && selectedProps.gender === gender} name="my-inputGender" type="radio" id={i + 'aGender'} />
            <label onClick={() => { filter({ gender: gender }); setSelected(selected == gender ? '' : gender) }} htmlFor={i + 'aGender'}  >{gender}</label>
          </a>
      })}
    </Collapsible>
  )
}

function CollectionFilter({ filter, collections, selectedProps }) {
  const [selected, setSelected] = useState(true);
  return (
    <Collapsible trigger="Colección" open={true} >
      {collections[process.env.BRAND_ID].map((colection, i) =>
        <a key={i} onClick={() => { filter({ 'collection': colection }); setSelected(selected == colection ? '' : colection) }} style={{
          cursor: 'pointer', display: 'block', margin: '10px 0', borderNottom: '1px solid #f8f8f8',
          paddingBottom: '10px'
        }} className={selectedProps && selectedProps.collection == colection ? 'bold' : ''} >
          {capitalizeBrands(colection)}
        </a>
      )}
    </Collapsible>
  )
}

function ColorsFilter({ filter, colors, selectedProps }) {
  return (
    <>
      <CollapsibleItems
        colors={colors}
        colorsFilter={(color) => filter({ colors: color })}
        selectedProps={selectedProps}
      />
    </>
  )
}

function ScaleFilter({ filter, selectedProps }) {
  const [selected, setSelected] = useState(true);
  return (
    <Collapsible trigger="Escala" open={true} >
      <div style={{ paddingTop: 15 }}>
        {['1:10', '1:12', '1:14', '1:18', '1:32', '1:43', '1:64'].map((scale, i) =>
          <a className="scale" key={i} >
            <input checked={selectedProps && selectedProps.scale === scale} name="my-input" type="radio" id={i + 'a'} />
            <label onClick={() => { filter({ 'scale': scale }); setSelected(selected == scale ? '' : scale) }} htmlFor={i + 'a'}  >{scale}</label>
          </a>
        )
        }
      </div>
    </Collapsible>
  )
}

function RinFilter({ filter, scale, selectedProps }) {
  const [selected, setSelected] = useState(true);
  return (
    <select name="rin" onChange={(e) => { filter({ 'scale': e.target.value }); setSelected(selected == e.target.value ? '' : e.target.value) }} value={selectedProps ? selectedProps.scale : ""} defaultValue={selectedProps ? selectedProps.scale : ""} >
      <option value="" >Rin</option>
      {Array.isArray(scale) && scale.map((rin, i) =>
        <option key={i} value={rin}>{rin}</option>
      )}
    </select>
  )
}

function IndexFilter({ filter, indexRin, selectedProps }) {
  const [selected, setSelected] = useState(true);
  if (Array.isArray(indexRin) && indexRin.length > 0) {
    indexRin.sort(function (a, b) { return a.substring(0, a.length - 1) - b.substring(0, b.length - 1) })
    indexRin.sort(function (a, b) { return a.substring(a.length - 1, a.length).localeCompare(b.substring(b.length - 1, b.length)) })
  }
  return (
    <div style={{ position: "relative", zIndex: 3 }}>
      <div className="btn-info--filter">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0ZM8.8 12.8H7.2V11.2H8.8V12.8ZM9.5808 8.892C9.424 9.0184 9.2728 9.1392 9.1528 9.2592C8.8264 9.5848 8.8008 9.8808 8.8 9.8936V10H7.2V9.8664C7.2 9.772 7.2232 8.9248 8.0208 8.1272C8.1768 7.9712 8.3704 7.8128 8.5736 7.648C9.1608 7.172 9.5464 6.8248 9.5464 6.3464C9.5371 5.94226 9.37 5.5578 9.08085 5.27529C8.7917 4.99279 8.40346 4.83467 7.99921 4.83478C7.59496 4.83488 7.2068 4.9932 6.9178 5.27585C6.62879 5.55851 6.46189 5.94305 6.4528 6.3472H4.8528C4.8528 4.612 6.2648 3.2 8 3.2C9.7352 3.2 11.1472 4.612 11.1472 6.3472C11.1472 7.6248 10.204 8.3872 9.5808 8.892Z" fill="#707070" />
        </svg>
        <div className="btn-info--filter-tooltip">
          {/*    <img
            src={
              'https://res.cloudinary.com/cacaotics/image/upload/v1580662565/Rectangle_49.png'
            }
            alt="Datos llanta usada"
          /> */}
          <p><strong>Índice:</strong>Peso y velocidad máxima que la llanta puede soportar. Carga rango de 71 (345 kg) y 110 (1060 kg) / Velocidad rango A (el menor 30 km/h) y  Y (el mayor 300 km/h).</p>
        </div>
      </div>
      <Collapsible trigger="Índice" open={true} >
        <ContentSelect>
          <select name="index" onChange={(e) => { filter({ 'indexRin': e.target.value }); setSelected(selected == e.target.value ? '' : e.target.value) }} defaultValue={selectedProps && selectedProps.indexRin}>
            <option value="" >Índice</option>
            {Array.isArray(indexRin) && indexRin.map((scale, i) =>
              <option key={i} value={scale}>{scale}</option>
            )}
          </select>
        </ContentSelect>
      </Collapsible>
    </div>
  )
}

function RunflatFilter({ filter, indexRin, selectedProps }) {
  const [selected, setSelected] = useState(true);
  return (
    <div className="runflatFilter" >
      <span onClick={() => { setSelected(false); filter({ runflat: "" }); }} className="title">Runflat</span>
      <div className="btn-info--filter" style={{ right: "50px" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0ZM8.8 12.8H7.2V11.2H8.8V12.8ZM9.5808 8.892C9.424 9.0184 9.2728 9.1392 9.1528 9.2592C8.8264 9.5848 8.8008 9.8808 8.8 9.8936V10H7.2V9.8664C7.2 9.772 7.2232 8.9248 8.0208 8.1272C8.1768 7.9712 8.3704 7.8128 8.5736 7.648C9.1608 7.172 9.5464 6.8248 9.5464 6.3464C9.5371 5.94226 9.37 5.5578 9.08085 5.27529C8.7917 4.99279 8.40346 4.83467 7.99921 4.83478C7.59496 4.83488 7.2068 4.9932 6.9178 5.27585C6.62879 5.55851 6.46189 5.94305 6.4528 6.3472H4.8528C4.8528 4.612 6.2648 3.2 8 3.2C9.7352 3.2 11.1472 4.612 11.1472 6.3472C11.1472 7.6248 10.204 8.3872 9.5808 8.892Z" fill="#707070" />
        </svg>
        <div className="btn-info--filter-tooltip">
          <p><strong>Runflat:</strong>Incorporación de paredes laterales que permite que la llanta desinflada o pinchada continúe llevando el peso del vehículo por varios kilómetros sin causar daño.</p>
        </div>
      </div>
      <label className="switch">
        <input onChange={(e) => { filter({ runflat: selected ? selected : "" }); setSelected(!selected); }} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

function TiresFilter({ filter, selectedProps, width, scale, flatness }) {
  const [selected, setSelected] = useState(true);
  return (
    <div style={{ position: 'relative', zIndex: 4 }}>
      <div className="btn-info--filter">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0ZM8.8 12.8H7.2V11.2H8.8V12.8ZM9.5808 8.892C9.424 9.0184 9.2728 9.1392 9.1528 9.2592C8.8264 9.5848 8.8008 9.8808 8.8 9.8936V10H7.2V9.8664C7.2 9.772 7.2232 8.9248 8.0208 8.1272C8.1768 7.9712 8.3704 7.8128 8.5736 7.648C9.1608 7.172 9.5464 6.8248 9.5464 6.3464C9.5371 5.94226 9.37 5.5578 9.08085 5.27529C8.7917 4.99279 8.40346 4.83467 7.99921 4.83478C7.59496 4.83488 7.2068 4.9932 6.9178 5.27585C6.62879 5.55851 6.46189 5.94305 6.4528 6.3472H4.8528C4.8528 4.612 6.2648 3.2 8 3.2C9.7352 3.2 11.1472 4.612 11.1472 6.3472C11.1472 7.6248 10.204 8.3872 9.5808 8.892Z" fill="#707070" />
        </svg>
        <div className="btn-info--filter-tooltip">
          {/*    <img
            src={
              'https://res.cloudinary.com/cacaotics/image/upload/v1580662565/Rectangle_49.png'
            }
            alt="Datos llanta usada"
          /> */}
          <p><strong>Ancho:</strong>Medida en milímetros de un costado de la llanta hasta el otro.</p>
          <p><strong>Perfil:</strong>Es el porcentaje a lo alto con respecto al ancho de la llanta, o la distancia que existe entre el borde de la llanta hasta el borde del rin.</p>
          <p><strong>Rin:</strong> Diámetro o medida del Rin en pulgadas.</p>
        </div>
      </div>
      <Collapsible trigger="Medidas" open={true} >
        <ContentSelect>
          <RinFilter
            filter={filter}
            scale={scale}
            selectedProps={selectedProps}
          />
          <WidthFilter
            filter={filter}
            width={width}
            selectedProps={selectedProps}
          />
          <FlatnessFilter
            filter={filter}
            flatness={flatness}
            selectedProps={selectedProps}
          />
        </ContentSelect>
      </Collapsible>
    </div>
  )
}
function WidthFilter({ filter, width, selectedProps }) {
  const [selected, setSelected] = useState("");

  return (
    <select name="Ancho" onChange={(e) => { filter({ 'width': e.target.value }); setSelected(selected == e.target.value ? '' : e.target.value) }} value={selectedProps ? selectedProps.width : ""} defaultValue={selectedProps ? selectedProps.width : ""} >
      <option value="" >Ancho</option>
      {Array.isArray(width) && width.map((item, i) =>
        <option key={i} value={item}>{item}</option>
      )}
    </select>
  )
}

function FlatnessFilter({ filter, flatness, selectedProps }) {
  const [selected, setSelected] = useState("");
  return (
    <select name="Perfil" onChange={(e) => { filter({ 'high': e.target.value }); setSelected(selected == e.target.value ? '' : e.target.value) }} value={selectedProps ? selectedProps.high : ""} defaultValue={selectedProps ? selectedProps.high : ""}>
      <option value="" >Perfil</option>
      {Array.isArray(flatness) && flatness.map((item, i) =>
        <option key={i} value={item}>{item}</option>
      )}
    </select>
  )
}

export { SizeFilter, GenderFilter, CollectionFilter, ColorsFilter, ScaleFilter, TypeFilter, RinFilter, IndexFilter, WidthFilter, FlatnessFilter, TiresFilter, RunflatFilter }