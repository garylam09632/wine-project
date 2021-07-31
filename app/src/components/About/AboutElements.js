import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #323232;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px 0px 30px 0px;
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
    margin-bottom: 5%;

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
    font-family: 'Josefin Sans', sans-serif;
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