import React from 'react';
import { BreadcrumbsContainer, BreadcrumbLink } from './BreadcrumbElements';

const Breadcrumb = ({ to, text }) => {
    return (
        <BreadcrumbsContainer>
            <BreadcrumbLink to={ to }>{ text }</BreadcrumbLink>
        </BreadcrumbsContainer>
    )
}

export default Breadcrumb
