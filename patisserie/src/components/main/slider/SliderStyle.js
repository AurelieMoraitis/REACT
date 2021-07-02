import styled, {css} from "styled-components";
import {ButtonNext, ButtonBack} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {rgba} from "polished";

export const SliderWrap = styled.div`
    width: 400px;
    height: 400px;
    overflow: hidden;
    position: relative;
    background: #ff6f69;
    margin: 10px auto;
`;

export const SliderImage = styled.div`
    width: 400px;
    height: 400px;
    background: url(${(p) => p.image});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
`;

export const SliderImgDesc = styled.p`
    font-size: 14px;
    background: white;
    position: absolute;
    bottom: 0;
`;

export const Nav = styled.nav`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const buttonSryle = css`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${rgba("#1a132b", 0.5)};
    color: white;
    bordder: 0;
    font-size: 30px;
    outline: none;
    transition: opacity 0.35s;

    &:disabled {
        opacity: 0;
    }
`;

export const BackButton = styled(ButtonBack)`
    ${buttonSryle};
`;

export const NextButton = styled(ButtonNext)`
    ${buttonSryle};
`;