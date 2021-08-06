import React, { useState } from 'react'
import {
    ProductContainer,
    ContentContainer,
    WineImg,
    WineContent,
    WineText,
    HoverElementContainer,
    HoverContent,
    HoverIcon,
    HoverText
} from './ProductElements';

const Product = ({ data }) => {

    return (
        <ProductContainer>
            <ContentContainer>
                <WineImg src={ data.image } />
                <WineContent>
                    <WineText><b>{ data.collection }</b></WineText>
                    <WineText>{ data.name } { data.year }</WineText>
                </WineContent>
            </ContentContainer>
            <HoverElementContainer>
                <HoverContent>
                    <HoverIcon />
                    <HoverText>View</HoverText>
                </HoverContent>
            </HoverElementContainer>
        </ProductContainer>
    )
}

export default Product
