import React from 'react'
import {
    ProductContainer,
    WineImg,
    WineContent,
    WineText
} from './ProductElements';

const Product = ({ data }) => {

    return (
        <ProductContainer>
            <WineImg src={ data.image } />
            <WineContent>
                <WineText><b>{ data.collection }</b></WineText>
                <WineText>{ data.name } { data.year }</WineText>
            </WineContent>
        </ProductContainer>
    )
}

export default Product
