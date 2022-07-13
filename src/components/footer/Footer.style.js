import styled from "styled-components";

export const GetContact = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const Touch = styled.div`
    /* background-color: tomato; */
    color: white;
    a{
        color: white;
        margin-right: 24px;
        font-size: 25px;
        transition: .2s ease-in-out;

        &:hover{
            transform: scale(1.1);
            color: var(--txt-hover);
        }
    }
`;

export const Subs = styled.div`
    color: white;
    input{
        border-radius: 16px;
        padding: 4px 8px;
    }
    button{
        background: var(--btn-color);
        color: white;
        font-weight: bold;
        border: none;
        text-transform: uppercase;
        border-radius: 16px;
        padding: 4px 8px;
    }
`;