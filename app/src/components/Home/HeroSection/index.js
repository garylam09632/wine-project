import { React, Component } from 'react';
import winery1 from '../../../images/winery_01.jpg';
import winery3 from '../../../images/winery_03.jpg';
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
                winery1,
                winery3
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