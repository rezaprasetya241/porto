import styled from 'styled-components'

export const ProjectList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin: 5rem auto;
    align-items: center;
    justify-content: center;
    .CardProject{
        background-color: transparent;
        color: white;
        transition: .3s ease-in-out;
        border: none;
        &:hover{
            transform: scale(1.1);
            box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.44);
            -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.44);
            -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.44);
        }
    }

    @media(max-width: 480px)  {
        grid-template-columns: 1fr;
        .CardProject{
            margin: 0 auto;   
        }
        
    }

    .projectImg{
    }
`;

export const ProjectImg = styled.img`
    height: 180px;
    width: 100%;
`;
export const Url = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        border-radius: 16px;
        color: white;
        border: none;
        padding: 8px 22px;
        &:hover{
            background: linear-gradient(270deg, #FFC72C -105.12%, rgba(255, 199, 44, 0) 153.61%);
        }   
    }
`;
export const LinkProject = styled.a`
    color: black;
    text-decoration: none;
    margin-left: 10px;
    font-size: 24px;
`;