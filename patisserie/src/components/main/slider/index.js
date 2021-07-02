import React from 'react';
import {
    SliderWrap,
    SliderImage,
    Nav,
    BackButton,
    NextButton,
    SliderImgDesc
} from "./SliderStyle";
import {
    CarouselProvider,
    Slider,
    Slide
} from "pure-react-carousel";

import eclairs from "../../../images/eclairs_S.jpg";
import trianon from "../../../images/trianon_S.jpg";
import citronMeringue from "../../../images/citron-meringue_S.jpg";

const Carousel = () => {

    // images come from Unsplash
    const slides = [
        {
            image: eclairs,
            description: "Un grand classique de la patisserie française à dévorer en famille ou entre amis."
        },
        {
            image: trianon,
            description: "Découvrez le Trianon, le gâteau parfait en toute occasion."
        },
        {
            image: citronMeringue,
            description: "Vous allez A-D-O-R-E-R cette fabuleuse tarte. Attention, elle gout le citron ;)"
        }
    ]

    return (
        <SliderWrap id={"suggestions"}>
                <CarouselProvider
                    naturalSlideWidth={400}
                    naturalSlideHeight={400}
                    totalSlides={slides.length}
                    visibleSlides={1}
                >
                    <Slider>
                        {slides.map((slide, index) => (
                            <Slide key={index}>
                                <SliderImgDesc>{slide.description}</SliderImgDesc>
                                <SliderImage image={slide.image} />
                            </Slide>
                        ))}
                    </Slider>
                    <Nav>
                        <BackButton>{`<`}</BackButton>
                        <NextButton>{`>`}</NextButton>
                    </Nav>
                </CarouselProvider>
        </SliderWrap>

    )
}

export default Carousel
