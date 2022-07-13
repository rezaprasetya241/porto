import styled from "styled-components";

export const Hire = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    background-color: #787D89;
    padding: 50px 40px;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: space-between;

    button{
        border: none;
        background: var(--btn-color);
        color: white;
        font-weight: bold;
        border-radius: 28px;
        padding: 8px 16px;
        transition: .1s ease-in-out;
        &:hover{
            background: linear-gradient(270deg, #FFC72C -105.12%, rgba(255, 199, 44, 0) 153.61%);
        }
    }

    @media (max-width: 480px) {
        padding: 25px 20px;
        /*flex-direction: wrap; */
        flex-direction: column;
    }
`;