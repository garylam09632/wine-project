import styled from 'styled-components';

export const StoreContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    padding: 75px 0px 50px 0px;
    background: #242424;
    flex-flow: row wrap;
`;

export const StoreTitle = styled.p`
    color: #fff;
    font-family: 'Encode Sans SC', sans-serif; 
    font-size: 50px;
    font-weight: bold;

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
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 1000px) {
        padding: 0px 30%;
        margin: 0px;
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

// Components to show a single product
export const BreadcrumbsContainer = styled.div`
    display: flex;
    height: auto;
    width: 100%;
    padding-left: 15%; 
    margin-bottom: 110px;
`;

export const Breadcrumb = styled.a`
    font-size: 17px;
    font-family: 'Encode Sans SC', sans-serif; 
    text-decoration: none;
    color: #fff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &::before {
        content: '<';
        font-weight: bold;
        margin-right: 10px;
        color: #fff;
    }
    
    &:hover, &:hover::before {
        color: #8B9192;
    }
`;

export const ProductContentContainer = styled.div`
    display: flex;
    padding-left: 15%;
    padding-right: 15%;
    height: 600px;
`;

export const ProductImg = styled.img`
    width: 35%;
    height: 70%;
    margin-right: 200px;
`;

export const ProductDetailsContainer = styled.div`
    color: #fff;
    display: block;
    font-family: 'Encode Sans SC', sans-serif;
    padding-top: 40px;
    text-align: center;
`;

export const ProductCollection = styled.p`
    margin-bottom: 5px;
    font-size: 1vw;
`;

export const ProductName = styled.p`
    font-size: 2.3vw;
    font-weight: bold;
`;

export const ProductDescription = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    margin-bottom: 50px;
`;

export const ShoppingButton = styled.a`
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    padding: 25px 75px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: #535354;
        padding-right: 110px;
        padding-left: 110px;
    }

`;