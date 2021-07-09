import React from 'react';
import {
    SideContainer,
    IconContainer,
    CloseIcon,
    SideMenu,
    SideLink
} from "./SideStyle";

const Side = ({isOpen, toggleMenu}) => {
    return (
        <SideContainer isOpen={isOpen} onClick={toggleMenu} >
            <IconContainer >
                <CloseIcon/>
            </IconContainer>

            <SideMenu>
                <SideLink to="#home">Accueil</SideLink>
                <SideLink to="#suggestions">Suggestions</SideLink>
                <SideLink to="#order">Commande</SideLink>
            </SideMenu>
        </SideContainer>

    )
}

export default Side
