import React, { Component } from 'react'
import Contact from '../components/Contact';
import NewsSection from '../components/News';

class News extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fadeInFunction();
    }

    render() {
        return (
            <>
              <NewsSection />
              <Contact />  
            </>
        )
    }
}

export default News;
