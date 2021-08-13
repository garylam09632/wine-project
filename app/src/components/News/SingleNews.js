import React from 'react';
import wine from '../../images/wine.jpg';
import {
    SingleNewsContainer,
    SingleNewsBgImg,
    SingleNewsCotentContainer,
    SingleNewsTitle,
    SingleNewsDate,
    SingleNewsDescription
} from './NewsElements';

const SingleNews = ({ data }) => {
    return (
        <SingleNewsContainer backgroundImage={ wine }>
            {/* <SingleNewsBgImg src={ nene1 } /> */}
            <SingleNewsCotentContainer>
                <SingleNewsTitle>SOME TITLE</SingleNewsTitle>
                <SingleNewsDescription>
                    Mauris eros orci, blandit a porta eu, sagittis ac nulla. 
                    Vivamus aliquet urna ac erat aliquam, nec finibus felis viverra. 
                    Phasellus euismod dui in sapien mollis, quis laoreet enim tempor. 
                </SingleNewsDescription>
                <SingleNewsDate>06 DEC 2021</SingleNewsDate>
            </SingleNewsCotentContainer>
        </SingleNewsContainer>
    )
}

export default SingleNews