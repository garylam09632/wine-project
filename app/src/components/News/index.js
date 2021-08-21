import React, { Component } from 'react';
import {
    ContentContainer,
    PageTitle,
    Line,
    NewsContainer,
    NewsContentContainer,
    NewsImageContainer,
    NewsImage,
    NewsTitle,
    NewsDate,
    SmallTitle,
    SingleNewsLine,
    Bar,
    NewsArticleContainer,
} from './NewsElements';
import Breadcrumb  from '../Breadcrumb';
import { SingleNews as SingleNewsSection } from './SingleNews';

export class News extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        var leftTurn = true;
        let leftContainer = [];
        let rightContainer = [];
        let all = [];
        for (var i=this.props.news.length-1; i>=0; i--) {
            if (leftTurn) {
                leftContainer.push(<SingleNewsSection data={ this.props.news[i] }/>);
                leftTurn = false;
            }
            else {
                rightContainer.push(<SingleNewsSection data={ this.props.news[i] }/>);
                leftTurn = true;
            }
            all.push(<SingleNewsSection data={ this.props.news[i] }/>);
        }

        if (!window.matchMedia("(min-width: 1000px)").matches) {
            return (
                <ContentContainer>
                    <PageTitle>NEWS</PageTitle>
                    <Line />
                    <NewsContainer>{ leftContainer }</NewsContainer>
                    <NewsContainer>{ rightContainer }</NewsContainer>
                </ContentContainer>
            )
        }
        if (window.matchMedia("(max-width: 1000px)").matches) {
            return (
                <ContentContainer>
                    <PageTitle>NEWS</PageTitle>
                    <Line />
                    <NewsContainer>{ all }</NewsContainer>
                </ContentContainer>
            )
        }
        else {
            return (
                <ContentContainer>
                    <PageTitle>NEWS</PageTitle>
                    <Line />
                    <NewsContainer>{ leftContainer }</NewsContainer>
                    <NewsContainer>{ rightContainer }</NewsContainer>
                </ContentContainer>
            )
        }
    }
}

export class SingleNews extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            news: undefined,
            newHasFound: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        var bar = document.getElementById("bar");
        const f = (e) => {
            var body = document.body,
            html = document.documentElement;
            var height = Math.max(body.scrollHeight, body.offsetHeight, 
                                    html.clientHeight, html.scrollHeight, html.offsetHeight);
            e.style.height = height - 200 + "px";
            e.style.display = "block";
        }
        if (!window.matchMedia("(max-width: 1183px)").matches) {
            f(bar);
        }
        else {
            bar.style.display = "none";
        }

        window.addEventListener('resize', function() {
            var bar = document.getElementById("bar");
            if (bar != null) {
                console.log(document.getElementById("news-content-container"));
                if (!window.matchMedia("(max-width: 1183px)").matches) {
                    f(bar);
                }
                else {
                    bar.style.display = "none";
                }
            }
        }, true);
    }

    render() {

        var news = undefined;
        var newsHasFound = false;

        // Finding the news title and grab the data from the props
        const url = window.location.href.split("/")
        var title = url[url.length - 1].replace(/-/g, " ");
        for (var i=0; i<this.props.news.length; i++) {
            let e = this.props.news[i];
            if (e.title == title) {
                news = e;
                newsHasFound = true;
            }
        }

        // Defines the paragraph
        var paras = news.article.split("\n");
        paras = paras.map((para) => {
                if (para.substr(para.length - 1) == "\b") {
                    para = para.substr(0, para.length - 1);
                    return <SmallTitle>{ para }</SmallTitle>
                }
                else {
                    return <p>{ para }</p>
                }
            }
        );
        if (newsHasFound) {
            window.scrollTo(1, 1);
            return (
                <ContentContainer>
                    <Bar id="bar" className="hideMe" />
                    <Breadcrumb to="/news" text="NEWS" />
                    <NewsDate className="hideMe">{ news.date }</NewsDate>
                    <NewsTitle className="hideMe">{ news.title }</NewsTitle>
                    <SingleNewsLine className="hideMe"/>
                    <NewsContentContainer id="news-content-container" className="hideMe">
                        <NewsArticleContainer>{ paras }</NewsArticleContainer>
                        <NewsImageContainer>
                            <NewsImage src={ news.image }/>
                        </NewsImageContainer>
                    </NewsContentContainer>
                </ContentContainer>
            )
        }
        else {
            return (
                <h1>NEWS NOT FOUND</h1>
            )
        }
    }
}