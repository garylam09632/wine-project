import React, { Component } from 'react';
import { Contact as ContactSection } from '../components/Contact';

class Contact extends Component {

    fetchData = () => {
        // Should be calling api and then set the state
       
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fadeInFunction();
    }

    render() {
        return (
            <>
                <ContactSection />
            </>
        )
    }
}

export default Contact;
