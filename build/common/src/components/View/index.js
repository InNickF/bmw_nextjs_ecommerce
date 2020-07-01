import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

const headerMinHeight = '98px'
const footerMinHeight = '323.98px'
const footerMargin = '125px'

export default styled.div`
    .product-card-text h2{
        color: #000;
    }
    ${media.lessThan('tablet')`
    
    `}    
}
`
