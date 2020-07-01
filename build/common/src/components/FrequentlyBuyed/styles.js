import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'
import Icon from '../Icon'

export const Container = styled.div`    
  margin-top: 100px;
  h3{    
    font-size: 32px;    
    color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
    margin-bottom: 30px;
  }
  .checkbox-button {
    cursor: pointer;
    display: flex;  
  }
  
  input[type=checkbox] {
    box-sizing: border-box;
    padding: 0;
  }
  
  input {
    font-size: 1rem;
    line-height: 1.5;
    padding: 11px 23px;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 0;
    outline: 0;
    background-color: transparent;
  }
  ${media.lessThan('tablet')`
  display: none;
  `}
  .checkbox-button__input {
    opacity: 0;
    position: absolute;
  }
  
  .checkbox-button__control {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;    
    vertical-align: middle;
    background-color: inherit;    
    color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
    border: 2px solid #666;
    ${parseInt(process.env.BRAND_ID) === 1 && 'border-color: #ffffff'};
  }
  
  .checkbox-button__input:checked+.checkbox-button__control:after {
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    left: 3px;
    width: 14px;
    height: 14px;
    background-color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};

  }
  
  .checkbox-button__input:checked+.checkbox-button__control {
    border-color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};

  }
  
  .checkbox-button__control {
    transform: scale(0.75);
    margin-right: 10px;
  }
  .checkbox-button__label{
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
    img{
      width: 120px;
      height: 120px;
      object-fit: cover;
      margin-bottom: 6px;
    }
  }
  
  .btn-expand{
    position: absolute;
    bottom: 150px;
    cursor: pointer;
    left: 0;
    border-bottom: 1px solid #DEDEDE;
    padding: 0 10px 15px;
    svg{
      margin-left: 5px;
    }
    ${media.lessThan('tablet')`
      display: none;
  `}
  }
.content-high-auto{
  height: auto;
  transition: all ease .5s;
  ${media.lessThan('tablet')`
    width: 95vw;    
    overflow: auto;
  `}
}
.content-high{
  height: 140px;
  overflow: hidden;
  transition: all ease .5s;
  ${media.lessThan('tablet')`
  height: auto;  
  `}
}

  .column-more{
    position: relative;
    flex-direction: column;
    .frequently-cost{
      display: flex;
      align-self: flex-end;
      align-items: center;
      justify-content: center;
      margin: 70px 0 10px 0;
      p{
        margin-right: 5px;
      }      
    }
    .frequently-btn{
      align-self: flex-end;
    }
  }

  .frequently-item{
    margin-right: 60px;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    .flex-responsive{
      display: flex;
    }

    ${media.lessThan('tablet')`
    margin-right: 0;
    flex-direction: column;
    `}
  }
  .frequently-more{
    margin: 0 20px;
    align-items: center;
    display: flex;
    ${media.lessThan('tablet')`
    margin: 0 15px;
    `}

    svg{
      fill: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
      path{
        fill: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
      }
    }
  }
  .frequently-cost{
    p{
      font-weight: normal;
      font-size: 16px;
      color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
      margin-bottom: 5px;
    }
    h2{
      font-weight: bold!important;
      font-size: 22px;        
      color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
    }
    ${media.lessThan('tablet')`
    margin-top: 15px;
  `}
}

.frequently-btn{
  max-width: 270px;
  button{
    display: flex;  
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    color: '#000000';
    min-width: 270px;
    min-height: 40px;
    cursor: pointer;    
  }
  span{
    margin-left: 28px;
  }
  ${media.lessThan('tablet')`
  display: flex;
  margin-top: 15px;
  button{
    height: 50px;
    &:first-child{
      margin-right: 15px;
    }
    &:last-child{
      margin-top: 0;
    }
  }
  `}
  ${media.lessThan('laptop')`
  button{
    min-width: 50px;
  }
  span{
    display: none;     
  }   
  `}
  .btn-add-car{
    width: 100%;
    color: #ffffff;
    ${parseInt(process.env.BRAND_ID) === 3 ?
    `background: rgb(28, 105, 212);` :
    parseInt(process.env.BRAND_ID) === 2 ?
      `background: #000000;` :
      `background: #ffffff;  
  color: #000000;
  path{
    fill: #000000;  
  }`
  }
    transition: all .5s ease-in;
  }
  .btn-wishlist{
    margin-top: 10px;
    border: 1px solid #000000;
    background: #ffffff;
    transition: all .5s ease-in;
    span{
      margin-left: 10px;
    }
  }
}
  ${media.lessThan('tablet')`  
  &.frequent-responsive-container{    
      display: block;

  .frequently-more{
    height: 120px;
  }
  .checkbox-button {
    flex-direction: column-reverse;
  }
  .checkbox-button__control {
    transform: none;
    margin-top: 10px;
    box-sizing: border-box;
    width: 120px;
    height: 50px;
    background-color: inherit;    
    background: white;
    border: 1px solid black;  
    margin-right: 0;
    ${parseInt(process.env.BRAND_ID) === 1 && 'border-color: #ffffff'};    
  }

  .checkbox-button__control:after {
    content: "Seleccionar";
    display: block;
    position: absolute;        
    width: 120px;
height: 50px;
    color: black;
    display: flex;
    align-items: center;
    font-size: 12px;
    justify-content: center;
    transition: all ease-in .3s;
  }
  .checkbox-button__input:checked+.checkbox-button__control:after {    
    content: "Seleccionado";
    display: block;
    position: absolute;
    top: 0;
    left: 0;    
    width: 120px;
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#1C69D4'};
  }
  .checkbox-button__input:checked+.checkbox-button__control {
    border: none;
  }
  
  .frequently-btn{
    max-width: 100%;
    width: 100%;
    flex-direction: column;
    .btn-add-car{
      margin-bottom: 15px; 
    }
    .btn-wishlist,
    .btn-add-car{
      width: 100%;
      span{
        display: block;
      }
    }    
  }

}
    `}  
`

export const IconStyle = styled(Icon).attrs(props => ({
  name: props.name,
  width: props.width || 50,
  height: props.height || 50,
  fill: props.fill || 'black'
}))``