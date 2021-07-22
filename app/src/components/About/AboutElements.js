import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #323232;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
    height: 700px;
    position: relative;
    flex-wrap: wrap;

    @media screen and (max-width: 1500px) {
        height: 600px;
    }

    @media screen and (max-width: 1300px) {
        height: 550px;
    }

    @media screen and (max-width: 1100px) {
        height: 500px;
    }

    @media screen and (max-width: 1000px) {
        height: 450px;
    }

    @media screen and (max-width: 768px) {
        height: 700px;
        flex-flow: row wrap;
        justify-content: center;
    }
`;

export const AboutWrapper = styled.div`     
    color: #fff;
    display: block;
    width: 100%;
    padding-left: 20%;

    @media screen and (max-width: 768px) {
        padding-left: 0px;
    }
`;

export const AboutLeft = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 75%;
        height: 35%;
        align-items: flex-end;
    }
`;

export const AboutRight = styled.div`
    display: flex;
    width: 50%;
    height: 90%;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
        width: 70%;
        height: 50%;
    }
`;

export const AboutTitle = styled.div`
    font-family: 'Cinzel', serif;
    font-weight: bold;
    font-size: 1.5rem;

    @media screen and (max-width: 1500px) {
        font-size: 1.5vw;
    }

    @media screen and (max-width: 768px) {
        font-size: 2vw;
        text-align: center;
    }
`;

export const OpenQuote = styled.div`
    font-family: 'Gentium Book Basic', serif;
    font-weight: bold;
    font-size: 1.3rem;
    font-style: italic;
    margin-top: 5%;

    @media screen and (max-width: 1500px) {
        font-size: 1.3vw;
    }

    @media screen and (max-width: 768px) {
        font-size: 2vw;
    }
`;

export const CloseQuote = styled.div`
    font-family: 'Gentium Book Basic', serif;
    font-weight: bold;
    font-size: 1.3rem;
    font-style: italic;
    text-align: right;
    margin-top: 3%;

    @media screen and (max-width: 1500px) {
        font-size: 1.3vw;
    }

    @media screen and (max-width: 768px) {
        font-size: 2vw;
    }
`;

export const Slogan = styled.div`
    font-family: 'Gentium Book Basic', serif;
    font-weight: 400;
    font-size: 1.8rem;
    font-style: italic;
    text-align: center;
    margin-top: 3%;

    @media screen and (max-width: 1500px) {
        font-size: 1.8vw;
    }

    @media screen and (max-width: 768px) {
        font-size: 2.5vw;
        text-align: center;
    }
`;

export const AboutP = styled.p`
    font-family: 'Varela', serif;
    font-weight: 400;
    font-size: 1.2rem;

    @media screen and (max-width: 1500px) {
        font-size: 1.3vw;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5vw;
        text-align: center;
    }
`;

export const Image = styled.img`
    width: 50%;
    height: 70%;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 1500px) {
        width: 55%;
    }

    @media screen and (max-width: 1300px) {
        width: 60%;
    }

    @media screen and (max-width: 1100px) {
        width: 65%;
    }

    @media screen and (max-width: 1000px) {
        width: 70%;
    }

    @media screen and (max-width: 768px) {
        width: 60%;
        height: 80%;
    }

    @media screen and (max-width: 550px) {
        width: 80%;
        height: 80%;
    }

    @media screen and (max-width: 400px) {
        width: 90%;
        height: 80%;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    height: 10%;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 70%;
    }
`;

export const KnowMoreBtn = styled.a` 
    display: flex;
    margin: 0px;
    height: 50%;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.3vw;
    text-align: center;
    font-family: 'Encode Sans SC', sans-serif;
    background: #323232;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
        background-color: #8B9192;
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }

    &:hover {
        color: #8B9192;
        transition: 0.3s ease-in-out;
    }

    &:hover::before {
        left: 0;
        right: auto;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        font-size: 2vw;
        height: 30%;
    }
`;