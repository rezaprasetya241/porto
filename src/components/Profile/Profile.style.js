import styled from "styled-components";


export const ProfileInfo = styled.div`
    max-width: 800px;
    max-height: 500px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    color: var(--txt-color);
    font-size: 30px;
    margin-top: 80px;
    margin-bottom: 50px;
`;

export const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 80vw;
    /* max-width: 1170px; */
`;
export const TabsButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 4rem;

    button{
        text-transform: uppercase;
        background: transparent;
        color: white;
        border: none;
        margin: 1rem;
        cursor: pointer;
        line-height: 1;

        &:hover{
            color: var(--btn-color);
            box-shadow: 0 2px var(--btn-color);
        }
    }
    .active-btn{
        color: var(--btn-color);
    }
`;

export const DataInfo = styled.div`

    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;   
`;