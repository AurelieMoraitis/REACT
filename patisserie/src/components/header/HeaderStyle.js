import styled from "styled-components";
import {HashLink as Link} from "react-router-hash-link";

export const HeaderContainer = styled.div`
    background: #D9B382;
    display: grid;
    grid-template-columns: 20% 50% 30%;
    text-align: center;
    align-items: center;
    height: 90px;
    position: fixed;
    width: 100vw;

    @media screen and (max-width: 480px) {
        grid-template-columns: 30% 50% 20%;
    }
`;

export const HeaderLogo = styled.img`
    width: 110px;
    height: 80px;
    margin-left: 10px;
    margin-top: 5px;
`;

export const HeaderTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const HeaderLinkWrap = styled.div`
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
`;

export const HeaderLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1rem;

    &:hover {
        text-decoration: underline
    }

`;