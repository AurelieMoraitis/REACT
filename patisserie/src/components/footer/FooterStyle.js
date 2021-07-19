import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: #D9B382;
    box-shadow: 0px -4px 30px 0px rgb(0 0 0 / 50%);
`;

export const FooterWrap = styled.div`
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 16px auto 0 auto;

    @media screen and (max)width: 820px {
        flex-direction: column;
    }
`;

export const Address = styled.a`
    color: black;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    margin-bottom: 16px;

    @media screen and (max-width: 480px) {
        font-size: 10px;
        font-weight: bold;
    }
`;

export const SocialIcons = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

    @media screen and (max-width: 480px) {
        justify-content: space-evenly;
    }
`;

export const SocialIconLink = styled.a`
    color: black;
    font-size: 24px;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;


