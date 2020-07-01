import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
    border: 1px solid #D8D8D8;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
    width: 93px;
    height: 93px;
  }
`

export const Container = styled.div`
  a{
    display: flex;
    text-decoration: none;
  }
`
export const SearchProductCardData = styled.div`
flex: 2;
padding: 0 1em;
line-height: 1.2;
text-align: left;
h2{
  color: #373737;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  font-family: "BMWGroup-Bold",sans-serif;
} 
p{
  font-size: 12px;
  text-transform: uppercase;
} 
small{
  font-size: 10px;
  line-height: 12px;
}
.search-product-compatible{
  font-weight: bold;
  font-size: 14px;
  line-height: 3em;
}
`