import React from 'react';
import { NewsContainer, NewsSectionTitle, SeparateLine } from './NewsElements';
import SingleNews from './SingleNews';
import Button from '../Button';

const News = () => {
    return (
        <NewsContainer>
            <NewsSectionTitle>SOME NEWS FROM US...</NewsSectionTitle>
            <SingleNews imageToLeft={ true } />
            <SeparateLine />
            <SingleNews imageToLeft={ false } />
            <Button text={ "See More" } />
        </NewsContainer>
    )
}

export default News
