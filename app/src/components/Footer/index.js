import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import {
    FooterContainer,
    AddressContainer,
    ContactInfoContainer,
    FooterText
} from './FooterElements'

const Footer = () => {

    const iconStyle = {
        marginRight: "8px",
        fontSize: "18px",
        transform: "translateY(-1px)"
    }

    return (
        <FooterContainer>
            <AddressContainer>
                <FooterText>Street No, Street</FooterText>
                <FooterText>Suburb</FooterText>
                <FooterText>State, Postcode</FooterText>
                <FooterText>Australia</FooterText>
            </AddressContainer>
            <ContactInfoContainer>
                <FooterText><AiOutlineMail style={iconStyle} /> xxxxxxxxx@gmail.com</FooterText>
                <FooterText><AiOutlinePhone style={iconStyle} /> (+61) 00 0000 0000</FooterText>
            </ContactInfoContainer>
            <FooterText>&copy; 2021 - Company</FooterText>
        </FooterContainer>
    )
}

export default Footer
