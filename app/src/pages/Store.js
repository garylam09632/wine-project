import React, { Component } from 'react';
import StoreSection from '../components/Store';
import Contact from '../components/Contact';

class Store extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fadeInFunction();
    }

    render() {
        return (
            <>
                <StoreSection />
                <Contact />
            </>
        )
    }

}

export default Store;