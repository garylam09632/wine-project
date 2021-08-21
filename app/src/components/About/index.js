import React from 'react'
import { data } from '../../data/about.json';
import winery from '../../images/winery_05.jpg';
import {
    AboutContainer,
    ImageSectionContainer,
    ImageContainer,
    Image,
    ImageSectionTitleContainer,
    AboutContentContainer,
    AboutTitle,
    SmallTitle,
    AboutArticle,
    YoutubePlayerContainer
} from './AboutElements'

export const About = () => {

    // Defines the paragraph
    var paras = data.article.split("\n");
    paras = paras.map((para) => {
            if (para.substr(para.length - 1) == "\b") {
                para = para.substr(0, para.length - 1);
                return <SmallTitle>{ para }</SmallTitle>
            }
            else {
                return <AboutArticle>{ para }</AboutArticle>
            }
        }
    );

    return (
        <AboutContainer>
            <ImageSectionContainer>
                <ImageContainer>
                    <Image src={ winery } />
                </ImageContainer>
                <ImageSectionTitleContainer>OUR STORY</ImageSectionTitleContainer>
            </ImageSectionContainer>
            <AboutContentContainer>
                <AboutTitle>{ data.title }</AboutTitle>
                { paras }
            </AboutContentContainer>
            <YoutubePlayerContainer>
                <div
                    className="video"
                    style={{
                        position: "relative",
                        paddingBottom: "56.25%" /* 16:9 */,
                        paddingTop: 25,
                        height: 0
                }}>
                    <iframe
                        style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                        }}
                        src="https://www.youtube.com/embed/oApea_KXyEw"
                        frameBorder="0"
                    />
                </div>
            </YoutubePlayerContainer>
        </AboutContainer>
    )
}


