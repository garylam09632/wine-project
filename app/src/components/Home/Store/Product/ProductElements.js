import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiUpArrowCircle } from 'react-icons/bi';

export const ProductContainer = styled(Link)`
    width: 375px;
    height: 500px;
    background-color: #d6d4d5;  
    cursor: pointer;
    position: relative;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000 !important;

    &:hover {
        box-shadow: 1px 5px 10px #555859;
        transform: translate(-2px, -2px);
    }

    @media screen and (max-width: 1250px) {
        margin-bottom: 25px;
    }

    @media screen and (max-width: 600px) {
        transition: none;
    }

    @media screen and (max-width: 500px) {
        width: 300px;
        height: 425px;
    }
`;

export const ContentContainer = styled.div`
    width: inherit;
    height: inherit;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    transition: inherit;

    ${ProductContainer}:hover & {
        display: none;
    }
`;

export const WineImg = styled.img`
    padding-top: 10px;
    width: 273px;
    height: 375px;

    @media screen and (max-width: 500px) {
        width: 219px;
        height: 300px;
    }
`;

export const WineContent = styled.p`
    width: 100%;
    height: 10%;
    margin-top: 0px;
    display: block;
    font-family: 'Encode Sans SC', sans-serif;
    text-align: center;
    font-size: 18px;

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

export const WineText = styled.p`
    margin-top: 0px;
    margin-bottom: 5px;
`;

export const HoverElementContainer = styled.div`
    width: inherit;
    height: inherit;
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
