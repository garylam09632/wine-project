import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';

class App extends Component {

	constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
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
						<Route path="/store">
							<Store />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
					<Footer />
				</div>
			</Router>
		)
	}

}

export default App;
