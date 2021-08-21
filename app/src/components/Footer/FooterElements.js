import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    background-color: #262e30;
    font-family: "Josefin Sans";
    padding: 50px 0px 35px 0px;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    width: 60%;
    font-size: 16px;
    justify-content: space-between;
    height: auto;
    color: #fff;
    flex-flow: row wrap;
    position: relative;
    transition: .2s ease-in-out;

    @media screen and (max-width: 768px) {
        width: 90%;
    }

    @media screen and (max-width: 568px) {
        height: auto;
    }
`;

export const InfoElementContainer = styled.div`
    display: block;

    @media screen and (max-width: 1000px) {
        width: 50%;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const InfoElementTitle = styled.p`
    font-size: 22px;
    font-family: 'Encode Sans SC', sans-serif; 
    margin-bottom: 15px;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

export const InfoElementText = styled.p`
    margin-bottom: 7px;
    font-size: 15px;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

export const MenuLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 15px;

    &::before {
        content: '>';
        font-weight: bold;
        font-size: 1px;
        margin-right: 0px;
        color: #fff;
        display: none;
    }

    &:hover {
        color: #8B9192;
        transition: 0.2s ease-in-out;
    }

    &:hover::before {
        transform: translateY(-2px);
        transition: 0.5s ease-in-out;
        display: inline-block;
        color: #fff;
    }
`

export const Copyright = styled.p`
    width: 100%;
    text-align: center;
    color: #fff;
    margin: 0px;
    margin-top: 30px;

    @media screen and (max-width: 600px) {
        margin-top: 5px;
    }
`;