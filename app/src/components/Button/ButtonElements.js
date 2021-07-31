import styled from 'styled-components';

export const BtnWrapper = styled.div`
    display: flex;
    height: 10%;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Btn = styled.a` 
    display: flex;
    margin: 0px;
    height: 34px;
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
        background-color: ${ props => props.hoverColor };
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }

    &:hover {
        color: ${ props => props.hoverColor };
        transition: 0.2s ease-in-out;
    }

    &:hover::before {
        left: 0;
        right: auto;
        width: 100%;
    }

    @media screen and (max-width: 1700px) {
        height: 32px;
        font-size: 1.4vw;
    }

    @media screen and (max-width: 1500px) {
        height: 27px;
        font-size: 1.4vw;
    }

    @media screen and (max-width: 1300px) {
        height: 23px;
        font-size: 1.5vw;
    }

    @media screen and (max-width: 1100px) {
        height: 25px;
        font-size: 1.7vw;
    }

    @media screen and (max-width: 768px) {
        font-size: 2vw;
        height: 19px;
    }
`;