import styled from 'styled-components';

export const NewsContainer = styled.div`
    background: #323232;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 2%;
    padding-left: 2%;
    height: 1100px;
    position: relative;
    flex-wrap: wrap;
    flex-direction: row;

    @media screen and (max-width: 1200px) {
        height: 900px;
    }

    @media screen and (max-width: 1000px) {
        height: auto;
        padding-bottom: 50px;
        padding-top: 30px;
    }
`;

export const NewsSectionTitle = styled.h1`
    color: #fff;
    font-family: 'Encode Sans SC', sans-serif;
    font-size: 40px;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 50px;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        font-size: 27px;
    }

    @media screen and (max-width: 480px) {
        font-size: 23px;
    }
`

export const SingleNewsContainer = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    position: relative;
    transition: 0.3s ease-in-out;
    flex-flow: row wrap;

    @media screen and (max-width: 1200px) {
        margin-top: 0px;
        margin-bottom: 0px;
        height: 30%;
    }

    @media screen and (max-width: 1000px) {
        height: 500px;
        margin-bottom: 33px;
    }

    @media screen and (max-width: 768px) {
        height: 400px;
    }

    @media screen and (max-width: 480px) {
        height: 350px;
    }
`;

export const ImgContainer = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 70%;
    }

    @media screen and (max-width: 768px) {
        height: 60%;
    }

    @media screen and (max-width: 480px) {
        height: 50%;
    }
`;

export const Image = styled.img`
    width: 70%;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1000px) {
        width: auto;
        height: 100%;
    }
`;

export const NewsContentContainer = styled.div`
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;

    @media screen and (max-width: 1000px) {
        width: 100%;
        text-align: center;
    }
`;

export const SingleNewTitle = styled.a`
    font-family: 'Encode Sans SC', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    max-width: 75%;
    color: #fff;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1500px) {
        font-size: 1.5vw;
    }

    @media screen and (max-width: 1200px) {
        font-size: 1.7vw;
    }

    @media screen and (max-width: 1000px) {
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        font-size: 2vw;
        text-align: center;
    }
`;

export const SingleNewContent = styled.p`
    font-family: 'Varela', serif;
    max-width: 75%;
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1500px) {
        font-size: 1.1vw;
    }

    @media screen and (max-width: 1200px) {
        font-size: 1.3vw;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.3vw;
        text-align: center;
    }
`;

export const SeparateLine = styled.div`
    width: 70%;
    border-top: 1px outset #8B9192;
    border-radius: 1%;
    display: none;
    margin: 0px 0px 39px 0px;

    @media screen and (max-width: 1000px) {
        display: block;
    }

`;