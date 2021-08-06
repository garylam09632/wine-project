import React from 'react';
import image from '../../../images/wine_01.jpg';
import {
    AboutContainer,
    AboutWrapper,
    AboutLeft,
    AboutRight,
    AboutTitle,
    OpenQuote,
    CloseQuote,
    Slogan,
    AboutP,
    Image
} from './AboutElements'
import Button from '../../Button';

const About = () => {
    return (
        <AboutContainer>
            <AboutLeft>
                <AboutWrapper className="hideMe">
                    <AboutTitle>Sample About Title</AboutTitle>
                    <OpenQuote>“</OpenQuote>
                    <Slogan>Lorem ipsum dolor sit amet, consectetu adipiscing </Slogan>
                    <CloseQuote>”</CloseQuote>
                    <AboutP>
                        Fusce viverra ante id neque iaculis, in feugiat nisi tincidunt. 
                        Nullam a nisi id eros hendrerit euismod eget ac ante. 
                        Nam suscipit eros ut nisl euismod auctor. Donec facilisis sagittis odio eu iaculis.
                    </AboutP>
                </AboutWrapper>
            </AboutLeft>
            <AboutRight className="hideMe">
                <Image src={ image }/>
            </AboutRight>
            <Button text={ "Know More" }/>
        </AboutContainer>
    )
}

export default About
