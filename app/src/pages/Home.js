import React, { Component } from 'react';
import HeroSection from '../components/Home/HeroSection';
import About from '../components/Home/About';
import Store from '../components/Home/Store';
import News from '../components/Home/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
        document.addEventListener('scroll', function(e) {
            var supportPageOffset = window.pageXOffset !== undefined;
            var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
            var scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? 
                                    document.documentElement.scrollTop : document.body.scrollTop;
            // console.log(scrollTop + ", " + window.innerHeight);
            var containers = document.getElementsByClassName("hideMe");
            var i = 0;
            for (var container of containers) {
                console.log(scrollTop);
                // var supportPageOffset = window.pageXOffset !== undefined;
                // var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
                // var scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? 
                //                     document.documentElement.scrollTop : document.body.scrollTop;

                let eTop = container.getBoundingClientRect().top + scrollTop;
                let viewportBottom = scrollTop + window.innerHeight;
                console.log(i + ". " + eTop + ", " + viewportBottom)
                
                /* If the object is completely visible in the window, fade it it */
                if(viewportBottom > eTop + 150){
                    container.animate({'opacity':'1'}, {
                        duration: 2500,
                        fill: 'forwards'
                    });
                }

                i++;
            }
        });
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