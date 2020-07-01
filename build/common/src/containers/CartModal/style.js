import styled from 'styled-components'
import media from '../../themes/media'

export const Container = styled.div`
    text-align: center;
    .cont1{
        width: 100%;
        display: flex;
        justify-content: center;
        .Advert{
            margin-right: 15px;
            margin-bottom: 10px;
        }
    }
    .cont2{
        margin-bottom: 27px;
    }
    div{
        text-align: justify;
        span{
            font-size: 14px;
        }
    }
    .process{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        margin-top: 16px;
    }
    .acept{
        margin-top: 20px;
    }
    ${media.lessThan('mobile')`
    .process{
        font-size: 15px;
    }
    `}
`
