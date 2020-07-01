import styled from 'styled-components'
import { prop } from 'styled-tools'

export const HeaderSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
  width: 100px;
  a {
  }
`

export const RightBlock = styled.div`
  ${prop('theme.font.family.condensed')};
  cursor: pointer;
  margin-right: 1rem;
  position: relative;
  button {
    background: transparent;
    cursor: pointer;
    vertical-align: middle;
    ${prop('theme.font.family.condensed')};
  }
  svg, span {
    vertical-align: middle;
  }
  svg {
    margin-left: ${prop('theme.spacing.small')};
  }
  .profile-menu {
    display: none;
    position: absolute;
    right: 0;
  }
  &:hover {
    .profile-menu {
      display: block;
    }
  }
`

export const Container = styled.div`
  background: #303030;
`
