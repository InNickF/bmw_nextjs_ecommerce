import styled from 'styled-components'

export const InputContainer = styled.form`
  background: #ffffff;
  display: flex;
  position: relative;
  width: 100%;
  input{
    padding: 15px 100px;
    width: 100%;
  }
  button {
    background: transparent;
    position: absolute;
    left: calc(100px - 28px);
    height: 100%;
  }
`