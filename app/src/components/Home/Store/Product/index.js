import React from 'react';
import { useHistory } from 'react-router-dom';
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

    const history = useHistory();

    const showDetail = () => {
        history.push("/store?id=" + data.id);
        window.location.reload();
    }

    return (
        <ProductContainer onClick={ showDetail }>
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
