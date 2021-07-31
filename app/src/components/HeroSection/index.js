import { React, Component } from 'react';
import hill from '../../images/adelaide_hills.jpg';
import hill2 from '../../images/adelaide_hills_2.jpg';
import { 
    HeroContainer, 
    HeroBg, 
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP
} from './HeroElements';

class HeroSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            images: [
                hill,
                hill2
            ]
        }
    }

    switchImage = () => {
        if (this.state.currentImage < this.state.images.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        } 
        else {
            this.setState({
                currentImage: 0
            });
        }
    }

    componentDidMount() {
        setInterval(this.switchImage, 10000);
    }

    render() {
        return (
            <HeroContainer>
                <HeroBg>
                    <ImageBg src={ this.state.images[this.state.currentImage] } />
                </HeroBg>
                <HeroContent>
                    <HeroH1>HOME SECTION</HeroH1>
                    <HeroP>"Brief Description, Slogan, etc"</HeroP>
                </HeroContent>
            </HeroContainer>
        )
    }

}

export default HeroSection
