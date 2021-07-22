import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logo_grey.jpg';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo,
    LogoImg,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <LogoImg src={ logo } />
                    </NavLogo>
                    <MobileIcon onClick={ toggle }>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Store'>Store</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='news'>News</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;