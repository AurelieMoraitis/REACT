import styled from "styled-components";
import {HashLink as Link} from "react-router-hash-link";
import {FiMenu} from "react-icons/fi";

export const HeaderContainer = styled.div`
    background: #D9B382;
    box-shadow: 0 4px 30px rgb(0 0 0 / 50%);
    display: grid;
    text-align: center;
    align-items: center;
    height: 90px;
    position: fixed;
    width: 100vw;
    z-index: 999;
    grid-template-columns: 20% 50% 28%;

    @media screen and (max-width: 480px) {
        grid-template-columns: 30% 50% 20%;
    }
`;

export const HeaderLogo = styled.img`
    width: 110px;
    height: 80px;
    margin-left: 10px;
    margin-top: 5px;

    @media screen and (max-width: 480px) {
        width: 70px;
        height: 50px;
    }
`;

export const HeaderTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const HeaderLinkWrap = styled.div`
    margin-right: 10px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
        justify-content: center;
    }
`;

export const HeaderLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1rem;

    &:hover {
        text-decoration: underline
    }

    @media screen and (max-width: 480px) {
        display: none;
    }

`;

export const HeaderMenuContainer = styled.div`
    display: block;
    cursor: pointer;
`;

export const HeaderMenu = styled(FiMenu)`
display: none;

@media screen and (max-width: 480px) {
        display: block;
        background: transparent;
    }
`;