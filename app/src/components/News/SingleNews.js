import React from 'react';
import {
    SingleNewsContainer,
    SingleNewsBgImg,
    SingleNewsCotentContainer,
    SingleNewsTitle,
    SingleNewsDate,
    SingleNewsDescription
} from './NewsElements';

export const SingleNews = ({ data }) => {

    window.scrollTo(1, 1);

    const newsTitle = data.title.replace(/ /g, "-");

    return (
        <SingleNewsContainer className="hideMe" to={ "/news/" + newsTitle }>
            <SingleNewsBgImg src={ data.image } />
            <SingleNewsCotentContainer>
                <SingleNewsTitle>{ data.title }</SingleNewsTitle>
                <SingleNewsDescription>{ data.shortDescription } (Click to view more)</SingleNewsDescription>
                <SingleNewsDate>{ data.date }</SingleNewsDate>
            </SingleNewsCotentContainer>
        </SingleNewsContainer>
    )
}