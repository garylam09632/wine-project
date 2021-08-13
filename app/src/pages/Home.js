import React, { Component } from 'react';
import HeroSection from '../components/Home/HeroSection';
import About from '../components/Home/About';
import Store from '../components/Home/Store';
import News from '../components/Home/News';
import Contact from '../components/Contact';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fadeInFunction();
    }

    render() {
        return (
            <>
                <HeroSection />
                <About />
                <Store />
                <News />
                <Contact />
            </>
        )
    }

}

export default Home;