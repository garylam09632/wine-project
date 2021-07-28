import React from 'react';
import wine from '../../images/wine.jpg';
import {
    SingleNewsContainer,
    ImgContainer,
    Image,
    NewsContentContainer,
    SingleNewTitle,
    SingleNewContent
} from './NewsElements'

const SingleNews = ({ imageToLeft }) => {
    if (imageToLeft) {
        return (
            <SingleNewsContainer>
                <ImgContainer>
                    <Image src={ wine } />
                </ImgContainer>
                <NewsContentContainer>
                    <SingleNewTitle>Topic 1</SingleNewTitle>
                    <SingleNewContent>Mauris eros orci, blandit a porta eu, sagittis ac nulla. 
                        Vivamus aliquet urna ac erat aliquam, nec finibus felis viverra. 
                        Phasellus euismod dui in sapien mollis, quis laoreet enim tempor. 
                    </SingleNewContent>
                </NewsContentContainer>
            </SingleNewsContainer>
        )
    }
    else {
        return (
            <SingleNewsContainer>
                <NewsContentContainer>
                    <SingleNewTitle>Topic 2</SingleNewTitle>
                    <SingleNewContent>Mauris eros orci, blandit a porta eu, sagittis ac nulla. 
                        Vivamus aliquet urna ac erat aliquam, nec finibus felis viverra. 
                        Phasellus euismod dui in sapien mollis, quis laoreet enim tempor. 
                    </SingleNewContent>
                </NewsContentContainer>
                <ImgContainer>
                    <Image src={ wine } />
                </ImgContainer>
            </SingleNewsContainer>
        )
    }
}

export default SingleNews
