import React, { Component } from 'react';
import HeroSection from '../components/Home/HeroSection';
import About from '../components/Home/About';
import Store from '../components/Home/Store';
import News from '../components/Home/News';

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
        window.scrollTo(1, 1);
        this.props.fadeInFunction();
    }

    render() {
        return (
            <>
                <HeroSection />
                <About />
                <Store />
                <News />
            </>
        )
    }

}

export default Home;