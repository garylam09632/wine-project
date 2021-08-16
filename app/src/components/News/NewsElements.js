import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const moveToTop = keyframes`
    from {
        height: 0px;
    }
    to {
        height: 100%;
    }
`;

const moveToBottom = keyframes`
    from  {
        height: 100%;
        opacity: 0.8;
    }
    to {
        height: 100px;
        opacity: 0;
    }
`;

export const ContentContainer = styled.div`
    padding-top: 75px;
    padding-bottom: 75px;
    display: flex;
    height: auto;
    background: #121212;
    color: #fff;
    font-family: 'Encode Sans SC', sans-serif; 
    justify-content: center;
    flex-flow: row wrap;
    align-items: flex-start;
`;

export const PageTitle = styled.h1`
    font-size: 60px;
    text-align: center;
    margin-bottom: 75px;
    width: 100%;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 1000px) {
        font-size: 50px;
    }

    @media screen and (max-width: 500px) {
        font-size: 45px;
    }
`;

export const NewsContainer = styled.div`
    display: flex; 
    width: 45%;
    flex-flow: row wrap;
    margin: 0px 10px;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin: 0px 100px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0px 40px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0px 20px;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
        margin: 0px 10px;
    }
`;

// Single News Components
export const SingleNewsContainer = styled(Link)`
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    color: #fff !important;

    &:hover {
        box-shadow: 1px 5px 10px #555859;
        transform: translate(-2px, -2px);
    }
`;

export const SingleNewsBgImg = styled.img`
    pointer-events: none;
    width: 100%;
    z-index: 1;
`;

export const SingleNewsCotentContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px 50px;
    width: 100%;
    animation: ${moveToBottom} 0.3s;
    opacity: 1;
    height: auto;
    transition: opacity: 0.2s;
    overflow: hidden;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));

    @media screen and (max-width: 450px) {
        padding: 10px 15px;
    }

    ${SingleNewsContainer}:hover & {
        overflow: hidden;
        animation: ${moveToTop} 0.5s forwards;
        background-color: rgba(0, 0, 0, 0.8);
        padding-top: 10%;
    }
`;

export const SingleNewsTitle = styled.p`
    font-size: 2vw;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    ${SingleNewsContainer}:hover & {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        font-size: 35px;
        margin-bottom: 5px;
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }

    @media screen and (max-width: 600px) {
        font-size: 23px;
    }

    @media screen and (max-width: 400px) {
        font-size: 23px;
    }

    @media screen and (max-width: 300px) {
        font-size: 20px;
    }
`;

export const SingleNewsDate = styled.p`
    font-size: 15px;
    transition: all 0.2s ease-in-out;

    ${SingleNewsContainer}:hover & {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        font-size: 13px;
    }

    @media screen and (max-width: 450px) {
        font-size: 10px;
    }
`;

export const SingleNewsDescription = styled.p`  
    font-size: 15px;
    font-family: 'Josefin Sans', sans-serif;
    transition: all 0.2s ease-in-out;
    display: none;

    ${SingleNewsContainer}:hover & {
        display: block;
    }

    @media screen and (max-width: 1200px) {
        font-size: 13px;
    }

    @media screen and (max-width: 450px) {
        font-size: 10px;
    }

    @media screen and (max-width: 400px) {
        
    }
`;

// Components for news in separate page
export const NewsContentContainer = styled.div`
    display: flex; 
    width: 75%;
    flex-flow: row wrap-reverse;
    margin: 50px;
    justify-content: space-between;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1400px) {
        width: 90%;
    }

    @media screen and (max-width: 1183px) {
        justify-content: center;
        width: 80%;
        margin-top: 0px;
        margin-left: 50px;
    }

    @media screen and (max-width: 400px) {
        width: 93%;
        margin: 0px;
    }
`;

export const NewsImageContainer = styled.div`
    width: 45%;
    padding-top: 100px;
    height: auto;
    position: sticky;
    top: 0;
    transition: 0.3s ease-in-out;
    align-self: flex-end;

    @media screen and (max-width: 1183px) {
        width: 100%;
        position: relative;
        padding: 0px;
        margin-bottom: 50px;
    }
`;

export const NewsImage = styled.img`
    width: 100%;
`;

export const NewsArticleContainer = styled.div`
    width: 50%;
    display: block;
    font-family: 'Josefin Sans', sans-serif;
    margin-right: 50px;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 1183px) {
        width: 100%;
        margin-right: 0px;
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const NewsTitle = styled.h1`
    width: 100%;
    font-size: 2.5vw;
    text-align: center;
    background-color: #fff;
    color: #000;
    padding: 0px 10% 10px 10%;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 1183px) {
        width: 100%;
        font-size: 40px;
        padding: 0px 10% 10px 10%;
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`;

export const NewsDate = styled.p`
    width: 100%;
    font-size: 20px;
    text-align: center;
    margin-top: 75px;
`;

export const SmallTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 2px;
    margin: 25px 35% 75px 35%;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));

    @media screen and (max-width: 768px) {
        margin: 25px 25% 75px 25%;
    }

`;  

export const Bar = styled.div`
    position: absolute;
    height: 0px;
    display: none;
    width: 5%;
    top: 0;
    right: 18%;
    z-index: 1 !important;
    background-color: #fff;
`;


