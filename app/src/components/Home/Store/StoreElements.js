import styled from 'styled-components';

export const StoreContainer = styled.div`
    background: #242424;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 0px 0px;
    height: 800px;
    position: relative;
    flex-wrap: wrap;
    flex-direction: row;

    @media screen and (max-width: 1000px) {
        height: auto;
        padding-bottom: 50px;
        padding-top: 30px;
    }
`;

export const StoreTitle = styled.h1`
    color: #fff;
    font-family: 'Encode Sans SC', sans-serif;
    font-size: 40px;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }

    @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`;

export const ProductsContainer = styled.div`
    width: 100%;
    height: 70%;
    margin-bottom: 3vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
    flex-direction: row;

    @media screen and (max-width: 1000px) {
        padding: 0px 30%;
        margin-top: 3vh;
    }

    @media screen and (max-width: 700px) {
        padding: 0px 25%;
    }

    @media screen and (max-width: 600px) {
        padding: 0px 20%;
    }

    @media screen and (max-width: 500px) {
        padding: 0px 15%;
    }
`;