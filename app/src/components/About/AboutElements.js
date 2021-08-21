import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: block;
    width: 100%;
    height: auto;
    background-color: #121212;
    color: #fff;
    font-family: 'Encode Sans SC', sans-serif; 
    padding-bottom: 100px;
`;

export const ImageSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    position: relative;
`;

export const ImageContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border: none;
    background: #232a34;
    filter: brightness(0.6);
`;

export const ImageSectionTitleContainer = styled.p`
    font-size: 60px;
    font-family: 'Cinzel',serif;
    font-weight: bold;
    z-index: 3;
    max-width: 1200px;
    display: flex;
    align-items: center;
    position: absolute;
    padding: 8px 24px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transition: .2s ease-in-out;

    @media screen and (max-width: 1000px) {
        font-size: 50px;
    }

    @media screen and (max-width: 500px) {
        font-size: 45px;
    }
`;

export const AboutContentContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: auto;
    width: 100%;
    justify-content: center;
    padding: 75px 14%;

    @media screen and (max-width: 1000px) {
        padding: 75px 7%;
    }

    @media screen and (max-width: 500px) {
        padding: 75px 5%;
    }
`;

export const AboutTitle = styled.p`
    font-size: 50px;
    font-weight: bold;

    @media screen and (max-width: 1000px) {
        font-size: 40px;
    }

    @media screen and (max-width: 500px) {
        font-size: 35px;
    }
`;

export const SmallTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`;

export const AboutArticle = styled.p`
    text-align: left;
    margin: 20px 0px;
    font-size: 17px;
    font-family: 'Josefin Sans', sans-serif;
    transition: .2s ease-in-out;

    @media screen and (max-width: 1000px) {
        font-size: 15px;
    }

    @media screen and (max-width: 500px) {
        font-size: 14px;
    }
`;

export const YoutubePlayerContainer = styled.div`
    padding: 0px 250px;

    @media screen and (max-width: 1000px) {
        padding: 0px 80px;
    }

    @media screen and (max-width: 500px) {
        padding: 0px 20px;
    }
`;

