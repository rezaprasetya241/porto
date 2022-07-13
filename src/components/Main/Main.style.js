import styled from "styled-components";

export const MainInfo = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100vh;

    @media(max-width: 480px){
        flex-direction: column-reverse;
    }
`;

// text
export const MainText = styled.div`
    color: white;
    margin: 0 auto;
    width: 100%;
`;
export const PositionText = styled.p`
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 0;
    /* background-color: red; */
    line-height: 30px;
    @media(max-width: 480px){
        font-size: 24px;
    }
`;

export const InfoLink = styled.div`
    display: flex;
    button{
        background-color: var(--btn-color);
        border-radius: 18px;
        border: none;

        &:hover{
            background: linear-gradient(270deg, #FFC72C -105.12%, rgba(255, 199, 44, 0) 153.61%);
        }
    }
`;
export const LinkMe = styled.div`
    margin-left: 10px;
    vertical-align: middle;
    /* a{
        margin: 0 12px;
        color: white;
        vertical-align: middle;
        transition: 0.3s ease-in-out;

        &:hover{
            transform:scale(1.2);
            color: red;
        }
    }  */
`;
export const ContactMe = styled.a`
    margin: 0 12px;
    color: white;
    font-size: 24px;
    vertical-align: middle;
    transition: 0.3s ease-in-out;
    &:hover{
        color: var( --txt-hover)
    }
`;
// End

// Pic
export const MainPic = styled.div`
    img{
        background: transparent;
    }
`;