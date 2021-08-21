import React from 'react';
import {
    ContactContainer,
    ContactSectionContainer,
    TextContainer,
    ContactSectionText,
    ContactForm,
    TextareaRow,
    ContactTextarea
} from './ContactElements'
import { 
    ImageSectionContainer,
    ImageContainer,
    Image,
    ImageSectionTitleContainer
} from '../About/AboutElements'
import winery from '../../images/winery_04.jpg';
import { Row, Col } from 'react-bootstrap';
import Button from '../Button/index';
import Input from '../Input/index';

export const Contact = () => {

    window.scrollTo(1, 1);

    return (
        <ContactContainer>
            <ImageSectionContainer>
                <ImageContainer>
                    <Image src={ winery } />
                </ImageContainer>
                <ImageSectionTitleContainer>CONTACT US</ImageSectionTitleContainer>
            </ImageSectionContainer>
            <ContactSectionContainer>
                <TextContainer className="hideMe">
                    <ContactSectionText>
                        Mauris eros orci, blandit a porta eu, sagittis ac nulla. Vivamus aliquet urna ac erat aliquam, 
                        nec finibus felis viverra. Phasellus euismod dui in sapien mollis, quis laoreet enim tempor. 
                    </ContactSectionText>
                </TextContainer>
                <ContactForm className="hideMe">
                    <Row>
                        <Col md={3}>
                            <Input label={"Last Name"} />
                        </Col>
                        <Col md={3}>
                            <Input label={"First Name"} />
                        </Col>
                        <Col md={6}>
                            <Input label={"Email"} />
                        </Col>
                    </Row>
                    <br />
                    <TextareaRow>
                        <Col>
                            <ContactTextarea placeholder="Message" />
                        </Col>
                    </TextareaRow>
                    <Row>
                        <Button text={ "Send" } hoverColor={ "#000" } />
                    </Row>
                </ContactForm>
            </ContactSectionContainer>
        </ContactContainer>
    )
}
