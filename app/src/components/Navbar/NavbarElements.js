import styled from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';
 
export const Nav = styled.nav`
    background: #262e30;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkRoute)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    width: 114px;
    height: 100%;
    align-items: center;
    margin-left: 24px;
    margin-right: calc(100% * 0.15);
    font-weight: bold;
    text-decoration: none;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 1000px) {
        margin-right: calc(100% * 0.1);
    }
`;

export const LogoImg = styled.img`
    width: 100%;
    height: 100%;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        right: 0;
        transform: translate(-100%, 30%);
        font-size: 1.8rem;
        color: #fff;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-bottom: 0px;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 1000px) {
        padding-left: 0px;
    }
`

export const NavItem = styled.li`
    height: 80px;   
`

export const NavLinks = styled(LinkRoute)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Encode Sans SC', sans-serif;

    &.active {
        border-bottom: 3px solid red;
    }

    &:hover {
        color: #8B9192;
        transition: 0.2s ease-in-out;
    }
`