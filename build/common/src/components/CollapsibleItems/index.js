import React, { useState } from 'react'
import {
  List, Item, ColorSquare, CollapsiblesContainer, WrapCollapsible, CollapsibleContent
} from './styles'

function CollapsibleItems(props) {
  const [selected, setSelected] = useState(true);
  const colorsConst = {
    NEGRO: {
      value: '#000000',
      title: 'Negro'
    },
    AZUL: {
      value: '#2468AF',
      title: 'Azul'
    },
    BLANCO: {
      value: '#FFFFFF',
      title: 'Blanco'
    },
    ROJO: {
      value: '#FF001F',
      title: 'Rojo'
    },
    GRIS: {
      value: '#9B9B9B',
      title: 'Gris'
    },
    CAFÉ: {
      value: '#8B572A',
      title: 'Café'
    },
    BEIGE: {
      value: '#FCDFC6',
      title: 'Beige'
    },
    VERDE: {
      value: '#388E3C',
      title: 'Verde'
    },
    NARANJA: {
      value: '#FF5722',
      title: 'Naranja'
    },
    'AZUL OSCURO': {
      value: '#182173',
      title: 'Azul Oscuro'
    },
    AMARILLO: {
      value: '#F8E71C',
      title: 'Amarillo'
    },
    'AMARILLO NEÓN': {
      value: '#F8E71C',
      title: 'Amarillo'
    },
    'MARRÓN CLARO': {
      value: '#CDA683',
      title: 'Marrón Claro'
    },
    'GRIS OSCURO': {
      value: '#4A4A4A',
      title: 'Gris Oscuro'
    },
    MULTICOLOR: {
      value: '#ffff',
      title: 'Multicolor',
      image: true
    },
    BRONCE: {
      value: '#cd7f32',
      title: 'Bronce',
      image: true
    },
    COBRE: {
      value: '#763c28',
      title: 'Cobre',
      image: true
    },
    PLATEADO: {
      value: '#e3e4e5',
      title: 'Plateado',
      image: true
    },
    VINOTINTO: {
      value: '#5e2129'
    },
    MORADO: {
      value: '#8c004b'
    }
  };
  const { colors, materials, materialFilter, colorsFilter, selectedProps } = props
  return (
    <CollapsiblesContainer>
      {colors && <WrapCollapsible>
        <input id="collapsibleColor" className="toggle" type="checkbox" defaultChecked />
        <label htmlFor="collapsibleColor" className="lbl-toggle">Colores</label>
        <div className="collapsible-content">
          {colors.map((color, i) => {
            if (color && colorsConst[`${color}`]) {
              return (
                <a className="color" key={i} >
                  <input checked={selectedProps && selectedProps.colors == color} name="my-inputColor" type="radio" id={i + 'ac'} />
                  {/* <label onClick={() => { filter({ 'scale': scale }); setSelected(selected == scale ? '' : scale) }} htmlFor={i + 'a'}  >{scale}</label> */}
                  < ColorSquare onClick={() => { colorsFilter(color); setSelected(color) }} color={colorsConst[`${color}`].value} key={i} htmlFor={i + 'ac'} bordered={colorsConst[`${color}`].value === '#FFFFFF' || colorsConst[`${color}`].value === 'white'} />
                </a>
              )
            }
          }

          )}
          {/*   <a className="scale" style={{ verticalAlign: 'top', margin: 0 }}>
            <input name="my-input" type="radio" id={'Ta2'} />
            <label style={{ margin: 0 }} onClick={() => colorsFilter("TODOS")} htmlFor={'Ta2'}  >Todos</label>
          </a> */}
        </div>
      </WrapCollapsible>
      }
      {/* {materials && <WrapCollapsible>
        <input id="collapsibleMaterials" className="toggle" type="checkbox" defaultChecked />
        <label htmlFor="collapsibleMaterials" className="lbl-toggle">Materiales</label>
        <div className="collapsible-content">
          <List>
            {materials.map((material, i) =>
              <Item key={i} onClick={() => materialFilter(material)}>
                {material}
              </Item>
            )}
          </List>
        </div>
      </WrapCollapsible>} */}
    </CollapsiblesContainer>
  )
}
export default CollapsibleItems
