import React, { Component } from 'react';
import {
    ContentContainer,
    PageTitle,
    NewsContainer,
    NewsContentContainer,
    NewsImageContainer,
    NewsImage,
    NewsTitle,
    NewsDate,
    SmallTitle,
    Line,
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
                    <NewsContainer>{ leftContainer }</NewsContainer>
                    <NewsContainer>{ rightContainer }</NewsContainer>
                </ContentContainer>
            )
        }
        if (window.matchMedia("(max-width: 1000px)").matches) {
            return (
                <ContentContainer>
                    <PageTitle>NEWS</PageTitle>
                    <NewsContainer>{ all }</NewsContainer>
                </ContentContainer>
            )
        }
        else {
            return (
                <ContentContainer>
                    <PageTitle>NEWS</PageTitle>
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
        console.log(paras);
        const x = paras[0].split["\b"];
        console.log(paras[0].substr(paras[0].length - 1) == "\b");
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
                    <Bar id="bar" />
                    <Breadcrumb to="/news" text="NEWS" />
                    <NewsDate>{ news.date }</NewsDate>
                    <NewsTitle>{ news.title }</NewsTitle>
                    <Line />
                    <NewsContentContainer id="news-content-container">
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