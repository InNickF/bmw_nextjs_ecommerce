import styled, { css } from 'styled-components'
import { prop, switchProp, ifProp } from 'styled-tools'
import { withDynamicTag } from '../../../hocs'
import media from '../../themes/media'

export const BlogHomeContainer = styled.div`
h2{
  font-size: 40px;
  line-height: 48px;
  color:${prop('theme.colors.subTitle')};
  font-weight: 900;
  margin: 36px 0;
  ${media.lessThan('tablet')`
  text-align: center;
  margin: 60px auto;
  `}
}
`

export const PostContainer = styled.div`
 display: grid;
 grid-template-columns: 50% 50%;
 grid-template-rows: 337px 337px;
 grid-gap: 14px;
 a{
  background:${prop('theme.colors.secondBg')};
  height:56px;
  width: 100%;
  max-width: 290px;
  text-align: center;
  box-sizing: border-box;
  color: white;
  padding: 19px 2rem;
  -webkit-text-decoration: none;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  font-weight: bold;
  font-stretch: condensed;
  font-display: auto;
}
  ${media.lessThan('tablet')`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  `}
 `

export const PostGridList = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: 337px 337px;
 grid-gap: 14px;
 div:first-child{
   display: none;
  }
  ${media.lessThan('tablet')`
  grid-template-rows: 500px repeat(2, 440px);
  grid-gap: 0;
  div:first-child{
    display: block;
    a{
      bottom: 86px;
    }
  }
  `}
  `
export const PostHome = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: 337px 337px;
 grid-gap: 14px;
 img{
   width: 100%;
   height: 100%;
   object-fit: cover;
  }
  .post-data-text{
    >h3{
      font-weight: bold;
      margin: 1em 0;
      font-size: 30px;
      line-height: 35px;
    }
    >p{
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      margin: 1em 2em 0 0;
    }
  }
  .autor-card-container{
    display: grid;
    grid-template-columns: 50% 50%;
    a{
     text-transform: uppercase;  
    }
  }
  .post-data{
    background: #ffff;
    flex-direction: column;
    position:relative;
    padding: 0 10px 15px 15px;
    display: flex;
    justify-content: space-between;
    ${process.env.APP_NAME == 'motorrad' ? `
    &:before{
      content: '';
      position: absolute;
      width: 100%;
      height: 14px;
      left: 0;
      top: -14px;
      background: #fff;
    }
    `: ''}
  }
}
  ${media.lessThan('tablet')`
  display: none;
  `}
`
export const PostCard = styled.div`
a{
  text-transform: capitalize!important;  
}
position: relative;
  &:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 39.06%);    
  }
img{
  width: 100%;
  max-height: 271px;
  height: 100%;
  object-fit: cover;
  ${media.lessThan('tablet')`
    ${process.env.APP_NAME == 'motorrad' && `
      max-height: initial;    
    `}
  `}
}
h3{
  position:absolute;
  top: 30px;
  left: 30px;
  font-weight: bold;
  max-width: calc(100% - 50px);
  font-size: 30px;
  line-height: 35px;
  color: #FFFFFF;
  ${media.lessThan('tablet')`
    font-size: 28px;
    text-shadow: 1px 1px 1px #333333;
  `}
}
a{
  position:absolute;
  max-width: 280px;
  bottom: 30px;
  left: 30px;
  font-weight: bold;
  background: ${prop('theme.colors.secondBg')};  
  ${media.lessThan('tablet')`
    bottom: 26px;
    left:calc((100% - 280px) / 2);
  `}
}
p{
  max-width: calc(100% - 58px);
  font-weight: bold;
  margin: 18px auto;
}
  ${media.greaterThan('tablet')`
  img{
    max-height: 337px;
  }
  h3{
    font-size: 28px;
  }
  p{
    display: none;
  }
  `}
`

export const PostCardMotorrad = styled.div`
&::after{
 content:'';
  position:absolute;
    background: #C4C4C4;
    bottom: 10px;
    width: 215px;
    height: 5px;
    left: 10px;
  }
a{
  background: #ffffff;
  position:absolute;
  cursor: pointer;    
  bottom: 0;
  left: 0;
  min-width: 300px;
  min-height: 130px;
  height: auto;
  padding: 0;
}
h3, p{
  color: #4a4a4a;
}
h3{
  position: relative;
  text-align: left;
  font-weight: bold;
  font-size: 22px;
  top: 10px;
  left: 10px;
  line-height: 1em;
}
p{
  position: relative;
  text-align: left;
  bottom: 0;
  margin-left: 10px;
  font-weight: normal;
  font-size: 12px;
  display: flex;
  color: #4a4a4a;
  text-transform: none!important;
}
`

export const AutorCard = styled.div`
  display: flex;
  align-items: center;
  img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 22px;
  } 
  h3{
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
  }
  p{
    font-size: 12px;
  }

`