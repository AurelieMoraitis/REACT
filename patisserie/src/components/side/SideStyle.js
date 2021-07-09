import styled from "styled-components";
import {MdClose} from "react-icons/md";
import {HashLink as Link} from "react-router-hash-link";

export const SideContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #D9B382;
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    top: 0;
    right: ${({isOpen}) => (isOpen ? "0" : "-1000px")};

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

export const IconContainer = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(MdClose)`
    background: transparent;
    border: none;
`;

export const SideMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 60px);
    }
`;

export const SideLink = styled(Link)`
    text-decoration: none;
    color: black;
`;