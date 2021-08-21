import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import News from './pages/News';
import Contact from './pages/Contact';

class App extends Component {

	constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

	elementFadeIn = () => {
		document.addEventListener('scroll', function(e) {
            var supportPageOffset = window.pageXOffset !== undefined;
            var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
            var scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? 
                                    document.documentElement.scrollTop : document.body.scrollTop;
            // console.log(scrollTop + ", " + window.innerHeight);
            var containers = document.getElementsByClassName("hideMe");
            for (var container of containers) {
                // var supportPageOffset = window.pageXOffset !== undefined;
                // var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
                // var scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? 
                //                     document.documentElement.scrollTop : document.body.scrollTop;

                let eTop = container.getBoundingClientRect().top + scrollTop;
                let viewportBottom = scrollTop + window.innerHeight;
                
                /* If the object is completely visible in the window, fade it it */
                if(viewportBottom > eTop + 150){
                    container.animate({'opacity':'1'}, {
                        duration: 2500,
                        fill: 'forwards'
                    });
                }
            }
        });
	}

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

	render() {
		return  (
			<Router>
				<div className="App">
					<Sidebar isOpen={this.state.isOpen} toggle={this.toggle} />
					<Navbar toggle={this.toggle} />

					<Switch>
                        <Route exact path="/">
							<Home fadeInFunction={ this.elementFadeIn } />
						</Route>
                        <Route path="/about">
                            <About fadeInFunction={ this.elementFadeIn } />
                        </Route>
						<Route path="/store">
							<Store fadeInFunction={ this.elementFadeIn } />
						</Route>
                        <Route path="/news">
                            <News fadeInFunction={ this.elementFadeIn } />
                        </Route>
                        <Route path="/contact">
                            <Contact fadeInFunction={ this.elementFadeIn } />
                        </Route>
					</Switch>
					<Footer />
				</div>
			</Router>
		)
	}

}

export default App;
