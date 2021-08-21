import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { data } from '../../data/footer.json';
import {
    FooterContainer,
    Container,
    InfoContainer,
    InfoElementContainer,
    InfoElementTitle,
    InfoElementText,
    MenuLink,
    Copyright
} from './FooterElements'

const Footer = () => {

    const iconStyle = {
        marginRight: "8px",
        fontSize: "18px",
        transform: "translateY(-1px)"
    }

    return (
        <FooterContainer>
            <Container>
                <InfoContainer>
                    <InfoElementContainer>
                        <InfoElementTitle>Menu</InfoElementTitle>
                        <InfoElementText><MenuLink to="/">Home</MenuLink></InfoElementText>
                        <InfoElementText><MenuLink to="/about">About</MenuLink></InfoElementText>
                        <InfoElementText><MenuLink to="/store">Store</MenuLink></InfoElementText>
                        <InfoElementText><MenuLink to="/news">News</MenuLink></InfoElementText>
                        <InfoElementText><MenuLink to="/contact">Contact</MenuLink></InfoElementText>
                    </InfoElementContainer>
                    <InfoElementContainer>
                        <InfoElementTitle>Contact</InfoElementTitle>
                        <InfoElementText>{ data.contact.streetNo } { data.contact.street }</InfoElementText>
                        <InfoElementText>{ data.contact.suburb }</InfoElementText>
                        <InfoElementText>{ data.contact.state } { data.contact.postcode }</InfoElementText>
                        <InfoElementText>{ data.contact.country }</InfoElementText>
                        <InfoElementText>xxxxxxxxx@gmail.com</InfoElementText>
                        <InfoElementText>(+61) 00 0000 0000</InfoElementText>
                    </InfoElementContainer>
                    <InfoElementContainer>
                        <InfoElementTitle>Social</InfoElementTitle>
                        <InfoElementText></InfoElementText>
                    </InfoElementContainer>
                    <InfoElementContainer>
                        <InfoElementTitle>NANGKITA Vineyard</InfoElementTitle>
                        <InfoElementText></InfoElementText>
                    </InfoElementContainer>
                </InfoContainer>
            </Container>
            <Copyright>&copy; 2021 - { data.company.name }</Copyright>
        </FooterContainer>
    )
}

export default Footer
