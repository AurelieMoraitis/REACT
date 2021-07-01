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
                <HeaderLink to="#accueil">Accueil</HeaderLink>
                <HeaderLink>Suggestions</HeaderLink>
                <HeaderLink>Commande</HeaderLink>
            </HeaderLinkWrap>

        </HeaderContainer>
    )
}

export default Header
