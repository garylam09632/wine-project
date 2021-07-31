import React from 'react';
import {
    ContactSectionContainer,
    TextContainer,
    ContactSectionText,
    ContactForm,
    TextareaRow,
    ContactTextarea
} from './ContactElements'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../Button/index';
import Input from '../Input/index';

const Contact = () => {
    return (
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
    )
}

export default Contact
