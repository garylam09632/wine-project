import React from 'react';
import hill from '../../images/adelaide_hills.jpg';
import { 
    HeroContainer, 
    HeroBg, 
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP
} from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={ hill } />
            </HeroBg>
            <HeroContent>
                <HeroH1>HOME SECTION</HeroH1>
                <HeroP>"Brief Description, Slogan, etc"</HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
