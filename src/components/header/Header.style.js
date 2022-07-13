import styled from 'styled-components'
export const HeaderLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

export const Link = styled.a`
    color: white;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    margin: 8px 18px;
    transition: 0.1s ease-in-out;
    font-size: 18px;

    &:hover{
        color: var(--txt-hover);
        transform: scale(1.1)
    }
    @media (max-width: 768px) {
        font-size: 12px
  }
`;