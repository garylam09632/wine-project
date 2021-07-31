import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    background-color: #262e30;
    font-family: "Josefin Sans";
    height: 300px;
    color: #fff;
    flex-flow: row wrap;
    padding-top: 40px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    @media screen and (max-width: 568px) {
        height: auto;
        padding-top: 0px;
        padding-bottom: 20px;
    }
`;

export const AddressContainer = styled.div`
    display: flex;
    flex-flow: row wrap;

    @media screen and (max-width: 568px) {
        margin: 40px 0px 20px 0px;
    }
`;

export const ContactInfoContainer = styled.div`
    display: flex;
    flex-flow: row wrap;

    @media screen and (max-width: 568px) {
        margin-bottom: 20px;
    }
`;

export const FooterText = styled.p`
    width: 100%;
    text-align: center;
`;