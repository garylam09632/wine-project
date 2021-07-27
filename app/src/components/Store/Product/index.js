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
                <WineText>{ data.name } <span><b><i>({ data.year })</i></b></span></WineText>
                <WineText>${ data.price }</WineText>
            </WineContent>
        </ProductContainer>
    )
}

export default Product
