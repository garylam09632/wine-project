import React, { useState } from 'react'
import {
    ProductContainer,
    ContentContainer,
    WineImg,
    WineContent,
    WineText,
    HoverElementContainer,
    HoverText
} from './ProductElements';

const Product = ({ data }) => {

    const [isHover, setIsHover] = useState(false);

    const toggle = () => {
        setIsHover(!isHover);
    }

    return (
        <ProductContainer onMouseEnter={ toggle } onMouseLeave={ toggle }>
            <ContentContainer display={ isHover }>
                <WineImg src={ data.image } />
                <WineContent>
                    <WineText><b>{ data.collection }</b></WineText>
                    <WineText>{ data.name } { data.year }</WineText>
                </WineContent>
            </ContentContainer>
            <HoverElementContainer display={ isHover }>
                <HoverText>View</HoverText>
            </HoverElementContainer>
        </ProductContainer>
    )
}

export default Product
