import styled from 'styled-components'
import { media } from '../common'

export const BlogContainer = styled.div`
${media.lessThan('tablet')`
.blogDetail {
  display: none;
}
.principalBlog {
  width: 62%;
  padding-right: 35%;
  padding-bottom: 666px;
  position: absolute;
  z-index: 1;
}
`}
${media.greaterThan('tablet')`
.principalBlog {
  display: none;
}
`}
`
export const TitleNovedades = styled.h2`
font-size: 36px;
margin-bottom: 25px;
${media.lessThan('tablet')`
margin-left: 10px;
margin-right: 10px;
`}
`
export const SeparatorTop = styled.h2`
margin-top: 60px;
`