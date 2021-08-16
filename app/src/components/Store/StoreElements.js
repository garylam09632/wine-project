import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StoreContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    padding: 75px 0px 50px 0px;
    background: #242424;
    flex-flow: row wrap;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 1000px) {
        padding-bottom: 100px;
    }
`;

export const StoreTitle = styled.p`
    color: #fff;
    font-family: 'Encode Sans SC', sans-serif; 
    font-size: 60px;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
        font-size: 42px;
    }

    @media screen and (max-width: 480px) {
        font-size: 35px;
    }
`;

export const WineContainer = styled.div`
    display: flex;
    height: auto;
    width: 100%;
    justify-content: center;
    margin: 50px;
    flex-flow: row wrap;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 1000px) {
        padding: 0px 75px;
        margin: 0px;
        margin-top: 3vh;
    }
`;

// Components to show a single product s
export const ProductContentContainer = styled.div`
    display: flex;
    align-items: top;
    height: 600px;
    width: auto;
    margin-top: 110px;

    @media screen and (max-width: 1000px) {
        height: auto;
        flex-flow: row wrap;
        margin-top: 60px;
    }
`;

export const ProductContentRight = styled.div`
    width: 800px;
    height: 70%;
    display: flex;
    align-items: center;
    transition: 0.2s ease-in-out;
    padding-left: 150px;

    @media screen and (max-width: 1400px) {
        width: 700px;
        padding-left: 100px;
    }

    @media screen and (max-width: 1200px) {
        width: 600px;
        padding-left: 40px;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        justify-content: center;
        padding: 0px 15%;
    }
`;

export const ProductContentLeft = styled.div`
    display: flex;
    width: 350px;
    height: 480px;
    transition: 0.2s ease-in-out;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin-bottom: 50px;
    }

`;

export const ProductImg = styled.img`
    width: 100%;
    height: 100%;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 1000px) {
        width: 350px;
    }
`;

export const ProductDetailsContainer = styled.div`
    color: #fff;
    display: block;
    font-family: 'Encode Sans SC', sans-serif;
    text-align: center;
    transition: 0.2s ease-in-out;
`;

export const ProductCollection = styled.p`
    margin-bottom: 5px;
    font-size: 1vw;

    @media screen and (max-width: 1400px) {
        font-size: 1.5vw;
    }

    @media screen and (max-width: 1000px) {
        font-size: 18px;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }

    @media screen and (max-width: 500px) {
        font-size: 13px;
    }
`;

export const ProductName = styled.p`
    font-size: 2.3vw;
    font-weight: bold;

    @media screen and (max-width: 1400px) {
        font-size: 2.8vw;
    }

    @media screen and (max-width: 1000px) {
        font-size: 35px;
    }

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }

    @media screen and (max-width: 500px) {
        font-size: 25px;
    }
`;

export const ProductDescription = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    margin-bottom: 50px;
    font-size: 0.8vw;

    @media screen and (max-width: 1400px) {
        font-size: 1.1vw;
    }

    @media screen and (max-width: 1200px) {
        font-size: 1.3vw;
    }

    @media screen and (max-width: 1000px) {
        font-size: 15px;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.2vw;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

export const ShoppingButton = styled.a`
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    padding: 25px 75px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    font-size: 0.9vw;

    &:hover {
        color: #fff;
        background-color: #535354;
        padding-right: 15%;
        padding-left: 15%;
    }

    @media screen and (max-width: 1400px) {
        font-size: 1.1vw;
        padding: 20px 50px;
    }

    @media screen and (max-width: 1000px) {
        font-size: 15px;
        padding: 25px 60px;
    }

    @media screen and (max-width: 768px) {
        font-size: 15px;
        padding: 20px 60px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
        padding: 18px 25px;
    }

`;