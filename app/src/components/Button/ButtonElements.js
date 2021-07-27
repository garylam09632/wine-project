import styled from 'styled-components';

export const BtnWrapper = styled.div`
    display: flex;
    height: 10%;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 70%;
    }
`;

export const Btn = styled.a` 
    display: flex;
    margin: 0px;
    height: 33px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.3vw;
    font-weight: bold;
    text-align: center;
    font-family: 'Encode Sans SC', sans-serif;
    background: transparent;
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

    @media screen and (max-width: 1500px) {
        height: 27px;
    }

    @media screen and (max-width: 1300px) {
        height: 22px;
        font-size: 1.5vw;
    }

    @media screen and (max-width: 1100px) {
        height: 20px;
        font-size: 1.7vw;
    }

    @media screen and (max-width: 768px) {
        font-size: 2vw;
        height: 19px;
    }
`;