import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {opacity: 0.1;}
    30% {opacity: 1;}
    96% {opacity: 1;}
    100% {opacity: 0.6;}
`;

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center; 
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    background-color: #fff;

    @media screen and (max-width: 768px) {
        height: 650px;
    }

    @media screen and (max-width: 480px) {
        height: 600px;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border: none;
    background: #232a34;
    animation: ${fadeIn} ease 10s infinite;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    display: flex;
    align-items: center;
    position: absolute;
    padding: 8px 24px;
    flex-direction: column;
    justify-content: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: center;
    transition: 0.2s ease-in-out;
    font-family: 'Cinzel', serif;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    max-width: 600px;
    transition: 0.2s ease-in-out;
    font-family: 'Gentium Book Basic', serif;
    font-style: italic;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;