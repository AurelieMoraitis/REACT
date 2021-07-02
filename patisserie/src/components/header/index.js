import React from 'react';
import logo from "../../images/logo.png";
import {
    HeaderContainer,
    HeaderLogo,
    HeaderTitle,
    HeaderLinkWrap,
    HeaderLink
} from "./HeaderStyle";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo src={logo} alt="Logo"/>
            <HeaderTitle>Patiss'Auré</HeaderTitle>
            <HeaderLinkWrap>
                <HeaderLink to="#home">Accueil</HeaderLink>
                <HeaderLink to="#suggestions">Suggestions</HeaderLink>
                <HeaderLink to="#order">Commande</HeaderLink>
            </HeaderLinkWrap>

        </HeaderContainer>
    )
}

export default Header
