import styled from "styled-components";

export const MainContainer = styled.div`
    background: linear-gradient(to bottom, #fceee3, #fcd98c);
    padding: 100px 0 70px 0;
    width: 100%;
    display: grid;
    grid-template-rows: 8% 420px 1fr;
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: 5% 230px 1fr;
        padding-bottom: 0;
    }
`;
export const MainMessage = styled.p`
    font-size: 24px;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;