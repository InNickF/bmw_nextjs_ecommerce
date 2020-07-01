import styled from 'styled-components'

export const BlogsCont = styled.a`
    display: flex;
    text-decoration: none;
    width: fit-content;
    cursor: pointer;
    a {
        ${props => props.theme.font.family.title}:;
        text-decoration: none;
        font-size: 26px;
        margin: 0 0 0 0;
        font-weight: bold;
        color: #4A4A4A;
    }
    .backBlogs {
        margin: 2px 10px 0 22px;
    }
`
