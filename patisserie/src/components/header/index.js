import React from 'react';
import logo from "../../images/logo.png";
import {
    HeaderContainer,
    HeaderLogo,
    HeaderTitle,
    HeaderLinkWrap,
    HeaderLink,
    HeaderMenuContainer,
    HeaderMenu,
} from "./HeaderStyle";

const Header = ({toggleMenu}) => {

    return (
        <HeaderContainer>
            <HeaderLogo src={logo} alt="Logo"/>
            <HeaderTitle>Patiss'Auré</HeaderTitle>
            <HeaderLinkWrap>
                <HeaderLink to="#home">Accueil</HeaderLink>
                <HeaderLink to="#suggestions">Suggestions</HeaderLink>
                <HeaderLink to="#order">Commande</HeaderLink>
                <HeaderMenuContainer onClick={toggleMenu}>
                    <HeaderMenu />
                </HeaderMenuContainer>
            </HeaderLinkWrap>

        </HeaderContainer>
    )
}

export default Header
