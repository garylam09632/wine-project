import styled from 'styled-components';
import { BiUpArrowCircle } from 'react-icons/bi';

export const ProductContainer = styled.div`
    width: 20%;
    background-color: #d6d4d5;
    height: 500px;  
    transition: 0.2s ease-in-out;
    cursor: pointer;
    position: relative;
    margin: 0px 50px 100px 50px;

    &:hover {
        box-shadow: 1px 5px 10px #555859;
        transform: translate(-2px, -2px);
    }

    @media screen and (max-width: 1500px) {
        height: 400px;
    }

    @media screen and (max-width: 1300px) {
        height: 350px;
    }

    @media screen and (max-width: 1100px) {
        height: 300px;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 375px;
        margin: 0px;
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
    justify-content: center;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    transition: 0.5s ease-in-out;

    ${ProductContainer}:hover & {
        display: none;
    }
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
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;  
    flex-flow: none;

    ${ProductContainer}:hover & {
        display: flex;
        flex-flow: row wrap;
    }
`;

export const HoverContent = styled.div`
    display: block;
    height: auto;
    text-align: center;
`;

export const HoverIcon = styled(BiUpArrowCircle)`
    font-size: 125px;

    ${HoverElementContainer}:hover & {
        transform: rotate(90deg);
        transition: 0.3s ease-in-out;
    }

    @media screen and (max-width: 1000px) {
        font-size: 110px;
    }
`;

export const HoverText = styled.p`
    font-size: 25px;
    opacity: 0;
    font-family: 'Encode Sans SC', sans-serif;

    ${HoverElementContainer}:hover & {
        opacity: 1;
        font-weight: bold;
        transition: 0.4s ease-in-out;
    }

    @media screen and (max-width: 1000px) {
        font-size: 20px;
    }
`;
