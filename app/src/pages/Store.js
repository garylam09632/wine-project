import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Store as StoreSection, SingleProduct } from '../components/Store';
import product_1 from '../images/product_01.jpg';
import product_2 from '../images/product_02.jpg';
import product_5 from '../images/product_sample.jpg';

class Store extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            wines: [
                {
                id: "1",
                name: "Eagle Eye",
                year: 2021,
                collection: "The Flying Horseman",
                image: product_1,
                shoppingLink: "https://www.google.com/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in volutpat leo, in suscipit sem. Etiam sed efficitur nisi. Mauris a eros maximus est iaculis convallis. Mauris eleifend tincidunt arcu, eget pulvinar arcu hendrerit a. Sed tempor a sem et hendrerit. In sit amet tortor auctor, ultrices turpis ac, consequat mi. Praesent ac mollis nunc."
                },
                {
                    id: "2",
                    name: "The Wanderer",
                    year: 2021,
                    collection: "The Flying Horseman",
                    image: product_2,
                    shoppingLink: "https://www.google.com/",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in volutpat leo, in suscipit sem. Etiam sed efficitur nisi. Mauris a eros maximus est iaculis convallis. Mauris eleifend tincidunt arcu, eget pulvinar arcu hendrerit a. Sed tempor a sem et hendrerit. In sit amet tortor auctor, ultrices turpis ac, consequat mi. Praesent ac mollis nunc."
                },
                {
                    id: "3",
                    name: "Terra Firma",
                    year: 2021,
                    collection: "The Flying Horseman",
                    image: product_5,
                    shoppingLink: "https://www.google.com/",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in volutpat leo, in suscipit sem. Etiam sed efficitur nisi. Mauris a eros maximus est iaculis convallis. Mauris eleifend tincidunt arcu, eget pulvinar arcu hendrerit a. Sed tempor a sem et hendrerit. In sit amet tortor auctor, ultrices turpis ac, consequat mi. Praesent ac mollis nunc."
                }
            ]
        }
    }

    fetchData = () => {
        // Should be calling api and then set the state
        this.setState({
            wines: [{
                    id: "1",
                    name: "Eagle Eye",
                    year: 2021,
                    collection: "The Flying Horseman",
                    image: product_1,
                    shoppingLink: "https://www.google.com/",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in volutpat leo, in suscipit sem. Etiam sed efficitur nisi. Mauris a eros maximus est iaculis convallis. Mauris eleifend tincidunt arcu, eget pulvinar arcu hendrerit a. Sed tempor a sem et hendrerit. In sit amet tortor auctor, ultrices turpis ac, consequat mi. Praesent ac mollis nunc."
                },
                {
                    id: "2",
                    name: "The Wanderer",
                    year: 2021,
                    collection: "The Flying Horseman",
                    image: product_2,
                    shoppingLink: "https://www.google.com/",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in volutpat leo, in suscipit sem. Etiam sed efficitur nisi. Mauris a eros maximus est iaculis convallis. Mauris eleifend tincidunt arcu, eget pulvinar arcu hendrerit a. Sed tempor a sem et hendrerit. In sit amet tortor auctor, ultrices turpis ac, consequat mi. Praesent ac mollis nunc."
                },
                {
                    id: "3",
                    name: "Terra Firma",
                    year: 2021,
                    collection: "The Flying Horseman",
                    image: product_5,
                    shoppingLink: "https://www.google.com/",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in volutpat leo, in suscipit sem. Etiam sed efficitur nisi. Mauris a eros maximus est iaculis convallis. Mauris eleifend tincidunt arcu, eget pulvinar arcu hendrerit a. Sed tempor a sem et hendrerit. In sit amet tortor auctor, ultrices turpis ac, consequat mi. Praesent ac mollis nunc."
                }
            ]
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fadeInFunction();
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/store">
                        <StoreSection wines={ this.state.wines } />
                    </Route>
                    <Route path="/store/:name">
                        <SingleProduct wines={ this.state.wines } />
                    </Route>
                </Switch>
            </>
        )
    }

}

export default Store;