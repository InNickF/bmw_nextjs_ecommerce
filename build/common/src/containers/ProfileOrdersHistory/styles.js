import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 15px;
`

export const ContainerMobile = styled.div``

export const Filters = styled.div`
display: flex;
justify-content: space-between;
p{
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
}
  margin-bottom: 1rem;
  select {
    cursor: pointer;
    background: transparent;
    text-transform: capitalize;
    height: 30px;
    margin-left: 1rem;
    line-height: 30px;
  }
`
