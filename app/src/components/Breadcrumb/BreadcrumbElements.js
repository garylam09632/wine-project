import styled from "styled-components";
import { Link } from 'react-router-dom';

export const BreadcrumbsContainer = styled.div`
    display: flex;
    height: auto;
    width: 100%;
    padding-left: 10%; 

    @media screen and (max-width: 1000px) {
        padding-left: 15%; 
    }
`;

export const BreadcrumbLink = styled(Link)`
    font-size: 17px;
    font-family: 'Encode Sans SC', sans-serif; 
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: translate(-2px, -2px);
    }

    &::before {
        content: '<';
        font-weight: bold;
        margin-right: 10px;
        color: #fff;
    }
    
    &:hover {
        color: #8B9192;
        font-weight: bold;
        transition: 0.2s;
    }
`;