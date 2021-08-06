import React, { Component } from 'react';
import product_1 from '../../images/product_01.jpg';
import product_2 from '../../images/product_02.jpg';
import product_5 from '../../images/product_sample.jpg';
import { StoreContainer, StoreTitle, WineContainer } from './StoreElements';
import Product from './Product/index';

class Store extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wines: []
        }
    }

    componentDidMount() {
        this.setState({
            wines: [
                {
                    name: "Eagle Eye",
                    year: 2021,
                    collection: "The Flying Horseman",
                    image: product_1
                },
                {
                    name: "The Wanderer",
                    year: 2021,
                    collection: "The Flying Horseman",
                    image: product_2
                },
                {
                    name: "The Wanderer",
                    year: 2021,
                    collection: "The Flying Horseman",
                    image: product_2
                }
            ]
        })
    }

    render() {

        const p1 = {
            name: "Eagle Eye",
            year: 2021,
            collection: "The Flying Horseman",
            image: product_1
        }
    
        const p2 = {
            name: "The Wanderer",
            year: 2021,
            collection: "The Flying Horseman",
            image: product_2
        }
    
        const p3 = {
            name: "Terra Firma",
            year: 2021,
            collection: "The Flying Horseman",
            image: product_5
        }

        return (
            <StoreContainer>
                <StoreTitle>OUR WINES</StoreTitle>
                <WineContainer>
                    <Product data={p1} />
                    <Product data={p2} />
                    <Product data={p3} />
                    <Product data={p1} />
                    <Product data={p2} />
                    <Product data={p3} />
                </WineContainer>
            </StoreContainer>
        )
    }
}

export default Store
