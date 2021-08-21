import React, { Component } from 'react';
import { 
    StoreContainer, 
    StoreTitle, 
    WineContainer,
    ProductContentContainer,
    ProductImg,
    ProductContentRight,
    ProductContentLeft,
    ProductDetailsContainer,
    ProductCollection,
    ProductName, 
    ProductDescription,
    ShoppingButton,
    Line
} from './StoreElements';
import Breadcrumb  from '../Breadcrumb';
import Product from './Product/index';

export class Store extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const wines = this.props.wines.map((wine) => 
            <Product data={ wine } />
        )

        window.scrollTo(1, 0)
        return (
            <StoreContainer>
                <StoreTitle>OUR WINES</StoreTitle>
                <Line />
                <WineContainer>
                    { wines }
                </WineContainer>
            </StoreContainer>
        )
    }
}


export class SingleProduct extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            wine: undefined,
            wineHasFound: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        var wine = undefined;
        var wineHasFound = false;

        const url = window.location.href.split("/")
        const name = url[url.length - 1].replace("-", " ");
        for (var i=0; i<this.props.wines.length; i++) {
            let e = this.props.wines[i];
            if (e.name == name) {
                wine = e;
                wineHasFound = true;
            }
        }
        if (wineHasFound) {
            window.scrollTo(1, 1);
            return (
                <StoreContainer>
                    <Breadcrumb to="/store" text="OUR WINES" />
                    <ProductContentContainer className="hideMe">
                        <ProductContentLeft>
                            <ProductImg src={ wine.image }/>
                        </ProductContentLeft>
                        <ProductContentRight>
                            <ProductDetailsContainer>
                                <ProductCollection>{ wine.collection }</ProductCollection>
                                <ProductName>{ wine.name }</ProductName>
                                <ProductDescription>
                                    { wine.description }
                                </ProductDescription>
                                <ShoppingButton>Buy Now</ShoppingButton>
                            </ProductDetailsContainer>
                        </ProductContentRight>
                    </ProductContentContainer>
                </StoreContainer>
            )
        }
        else {
            return (
                <h1>WINE NOT FOUND</h1>
            )
        }
    }
}
