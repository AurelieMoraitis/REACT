import React from 'react';
import {MainContainer, MainMessage} from "./MainStyle";
import Carousel from './slider';

const Main = () => {
    return (
        <MainContainer id={"accueil"}>
            <MainMessage>Tous nos produits sont à venir chercher sur place</MainMessage>
            <Carousel />
        </MainContainer>
    )
}

export default Main
