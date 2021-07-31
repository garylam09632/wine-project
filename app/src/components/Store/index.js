import React from 'react'
import { 
    StoreContainer,
    StoreTitle,
    ProductsContainer
} from './StoreElements'
import product_1 from '../../images/product_01.jpg';
import product_2 from '../../images/product_02.jpg';
import product_5 from '../../images/product_sample.jpg';
import Product from './Product/index'
import Button from '../Button'

const Store = () => {

    const p1 = {
        name: "Eagle Eye",
        year: 2021,
        price: 129.99,
        image: product_1
    }

    const p2 = {
        name: "The Wanderer",
        year: 2021,
        price: 85.99,
        image: product_2
    }

    const p3 = {
        name: "Terra Firma",
        year: 2021,
        price: 299.99,
        image: product_5
    }

    return (
        <StoreContainer>
            <StoreTitle className="hideMe">OUR WINES</StoreTitle>
            <ProductsContainer className="hideMe">
                <Product data={p1} />
                <Product data={p2} />
                <Product data={p3} />
            </ProductsContainer>
            <Button text={ "Explore More" }/>
        </StoreContainer>
    )
}

export default Store
