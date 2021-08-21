import styled from 'styled-components'
import { Form, Row } from 'react-bootstrap'

export const ContactContainer = styled.div`
    display: block;
    width: 100%;
    height: auto;
    background-color: #121212;
    color: #fff;
    font-family: 'Encode Sans SC', sans-serif; 
`;

export const ContactSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #5E5E5E;
    align-items: center;
    height: 800px;
    position: relative;
    padding: 0px;
    flex-flow: row wrap;

    @media screen and (max-width: 768px) {
        height: auto;
        padding: 100px 0px 100px 0px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
    height: 30%;
`;

export const ContactSectionText = styled.p`
    font-size: 1.2vw;
    width: 70%;
    color: #fff;
    font-family: "Josefin Sans";

    @media screen and (max-width: 1200px) {
        font-size: 1.5vw;
    }

    @media screen and (max-width: 1000px) {
        font-size: 17px;
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const ContactForm = styled(Form)`
    width: 70%;
    height: 65%;
`;

export const TextareaRow = styled(Row)`
    height: 50%;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        height: 150px;
    }
`;

export const ContactTextarea = styled.textarea`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    outline: 0;
    font-family: "Josefin Sans";
    padding: 5px 12px 0px 6px;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    resize: none;
    background: transparent;
    transition: all .15s ease;

    &::placeholder {
        color: #fff;
    }

    &:focus::placeholder  {
        color: #000;
    }

    &:placeholder-shown {
        color: #fff;
        border: 1px solid #fff;
    }

    &:focus {
        color: #000;
        border: 2px solid #000;
        transition: 0s ease;
    }

    @media screen and (max-width: 768px) {
        font-size: 13px;
    }

`;