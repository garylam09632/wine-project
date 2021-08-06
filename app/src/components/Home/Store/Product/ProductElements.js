import styled from 'styled-components';

export const ProductContainer = styled.div`
    width: 20%;
    background-color: #d6d4d5;
    height: 100%;
    display: flex;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    position: relative;

    &:hover {
        box-shadow: 1px 5px 10px #555859;
        transform: translate(-2px, -2px);
    }

    @media screen and (max-width: 1500px) {
        height: 80%;
    }

    @media screen and (max-width: 1300px) {
        height: 70%;
    }

    @media screen and (max-width: 1100px) {
        height: 60%;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 375px;
        margin-bottom: 25px;
    }

    @media screen and (max-width: 500px) {
        height: 325px;
        padding-bottom: 10px;
    }
`;

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    visibility: ${ props => props.display ? "hidden" : "visible" };
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
`;

export const WineImg = styled.img`
    padding-top: 10px;
    width: 65%;
    height: 75%;
`;

export const WineContent = styled.p`
    width: 100%;
    height: 10%;
    margin-top: 0px;
    display: block;
    font-family: 'Encode Sans SC', sans-serif;
    text-align: center;
    font-size: 1vw;
`;

export const WineText = styled.p`
    margin-top: 0px;
    margin-bottom: 5px;
`;

export const HoverElementContainer = styled.div`
    display: ${ props => props.display ? "block" : "none" };
    visibility: ${ props => props.display ? "visible" : "hidden" };
`;

export const HoverText = styled.p`

`;
