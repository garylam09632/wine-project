import React, { Component } from 'react';
import {
    ContentContainer,
    PageTitle,
    NewsContainer
} from './NewsElements';
import SingleNews from './SingleNews';

class News extends Component {

    render() {
        return (
            <ContentContainer>
                <PageTitle>NEWS</PageTitle>
                <NewsContainer>
                    <SingleNews />
                </NewsContainer>
            </ContentContainer>
        )
    }
}

export default News;