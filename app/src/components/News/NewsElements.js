import styled from 'styled-components';

export const ContentContainer = styled.div`
    padding: 75px 100px;
    display: block;
    height: auto;
    background: #323232;
    color: #fff;
    font-family: 'Encode Sans SC', sans-serif; 
`;

export const PageTitle = styled.h1`
    font-size: 60px;
    text-align: center;
    margin-bottom: 75px;
`;

export const NewsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

// Single News Components;
export const SingleNewsContainer = styled.div`
    display: flex;
    width: 50%;
    height: 500px;
    background-image: url("${ props => props.backgroundImage }");
    background-size: contain;
    background-repeat: no-repeat;
    resize: both;
    padding: 50px;
    align-items: flex-end;
    font-weight: bold;
`;

export const SingleNewsBgImg = styled.img`
    pointer-events: none;
    max-width: 500px;
    max-height: 400px;
    z-index: 0;
`;

export const SingleNewsCotentContainer = styled.div`
    display: block;
    z-index: 1;
    position: relative;
    width: 85%;
`;

export const SingleNewsTitle = styled.p`
    font-size: 2.5vw;
`;

export const SingleNewsDate = styled.p`

`;

export const SingleNewsDescription = styled.p`
    font-family: 'Josefin Sans', sans-serif;
`;