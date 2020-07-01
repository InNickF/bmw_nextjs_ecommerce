import styled from 'styled-components'
import media from '../../themes/media'

export const Container = styled.div`
  margin: 15px 0px 30px 0px;
  min-height: 300px;
  position: relative;

  ${media.lessThan('tablet')`
    margin: 0px 0px 100px 0px;
  `};
  ${media.between('tablet', 'medium')`
    margin: 0px 0px 150px 0px;
  `};
  .slick-list{
    overflow: visible;
    margin: auto;
    width: 70%;
  }
  .slick-slide {
  display: none!important;
  }
  .slick-current{
    display: block!important;
    left: 0!important;
    img{
      height: 400px!important;
    }
  }  
  .slick-thumb {
    margin-top: 20px;
    bottom: auto;
    li {
      width: 57px !important;
      height: 57px !important;
      img {
        opacity: 0.4;
      }
    }
    .slick-active img {
      opacity: 1;
    }
  }
    .js-image-zoom__zoomed-image{
      height: 500px!important;
      width: 550px!important;
      z-index: 99;
    }

.iiz{margin:0;position:relative;overflow:hidden;display:inline-block;cursor:zoom-in}.iiz__img{max-width:100%;height:500px;display:block;pointer-events:none}.iiz__zoom-img{width:auto!important;max-width:none!important;position:absolute;visibility:hidden;opacity:0;display:block}.iiz__zoom-img--visible{visibility:visible;opacity:1;cursor:zoom-out}.iiz__zoom-portal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000}.iiz__btn{background:rgba(255,255,255,.8);width:40px;height:40px;border:none;outline:0;padding:0;position:absolute;text-decoration:none;display:flex;align-items:center;justify-content:center;appearance:none}.iiz__btn:before{content:" ";background-position:center;background-repeat:no-repeat;display:block}.iiz__hint{bottom:10px;right:10px;pointer-events:none}.iiz__hint:before{content:" ";background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9 19.9'%3E%3Cpath d='M13.9 7.4C13.9 3.8 11 .9 7.4.9S.9 3.8.9 7.4s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5zm5.3 12.5l-6.7-7.2c-1.4 1.3-3.2 2.1-5.1 2.1-4.1 0-7.4-3.3-7.4-7.4S3.3 0 7.4 0s7.4 3.3 7.4 7.4c0 1.7-.6 3.4-1.7 4.7l6.8 7.2-.7.6z' fill='%23000222'/%3E%3C/svg%3E");width:20px;height:20px}.iiz__close{top:10px;right:10px;visibility:hidden;opacity:0}.iiz__close--visible{visibility:visible;opacity:1}.iiz__close::before{content:" ";width:29px;height:29px;background-image:linear-gradient(#222,#222),linear-gradient(#222,#222);background-size:100% 1px,1px 100%;transform:rotate(45deg)}

`

export const ContentImageZoom = styled.div`
  width: fit-content;
  margin-right: auto;
  margin-left: 81px;

  img{        
  height:auto;!important
  background: #ffff;
	-webkit-animation: fade-in .8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in .8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }


@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}  
`
export const ContentImageSelect = styled.div`
position: absolute;
${process.env.APP_NAME == 'motorrad' && `
top: 60px;      
    `}

img{
  cursor: pointer;
  width:  60px;
  height: 60px;
  margin-bottom: 15px;
  ${process.env.APP_NAME == 'motorrad' && `
  background: #ffff;      
    `}
}
`


export const ContentImgSlide = styled.div`
  width: 100%;
  height: ${props => props.height || '500px'};
  background-image: url('${props => props.imgUrl}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`
