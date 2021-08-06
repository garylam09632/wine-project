import React, { Component } from 'react';
import product_1 from '../../images/product_01.jpg';
import product_2 from '../../images/product_02.jpg';
import product_5 from '../../images/product_sample.jpg';
import { 
    StoreContainer, 
    StoreTitle, 
    WineContainer,
    BreadcrumbsContainer,
    Breadcrumb,
    ProductContentContainer,
    ProductImg,
    ProductDetailsContainer,
    ProductCollection,
    ProductName, 
    ProductDescription,
    ShoppingButton
} from './StoreElements';
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
        
        let url = window.location.href;
        // Show all
        if (url.split('=').length == 1) {
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
        // Show one
        else {
            return (
                <StoreContainer>
                    <BreadcrumbsContainer>
                        <Breadcrumb>OUR WINES</Breadcrumb>
                    </BreadcrumbsContainer>
                    <ProductContentContainer>
                        <ProductImg src={ product_1 }/>
                        <ProductDetailsContainer>
                            <ProductCollection>The Flying Horseman</ProductCollection>
                            <ProductName>Eagle Eye 2021</ProductName>
                            <ProductDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in volutpat leo, in suscipit sem. 
                                Etiam sed efficitur nisi. Mauris a eros maximus est iaculis convallis. Mauris eleifend tincidunt arcu, 
                                eget pulvinar arcu hendrerit a. Sed tempor a sem et hendrerit. In sit amet tortor auctor, ultrices turpis ac, 
                                consequat mi. Praesent ac mollis nunc.
                            </ProductDescription>
                            <ShoppingButton>Buy Now</ShoppingButton>
                        </ProductDetailsContainer>
                    </ProductContentContainer>
                </StoreContainer>
            )
        }

        
    }
}

export default Store
