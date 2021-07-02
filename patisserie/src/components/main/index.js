import React from 'react';
import {MainContainer, MainMessage} from "./MainStyle";
import Carousel from './slider';
import Order from './order';

const Main = () => {
    return (
        <MainContainer id={"home"}>
            <MainMessage>Tous nos produits sont à venir chercher sur place</MainMessage>
            <Carousel />
            <Order/>
        </MainContainer>
    )
}

export default Main
