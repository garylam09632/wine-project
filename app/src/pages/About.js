import React, { Component } from 'react';
import { About as AboutSection } from '../components/About';

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fadeInFunction();
    }

    render() {
        return (
            <>
                <AboutSection />
            </>
        )
    }

}

export default About;