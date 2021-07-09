import styled from "styled-components";

/*OrderContainer, OrderForm*/

export const OrderContainer = styled.div`
    padding-top: 10px;
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 7% 45% 7% 35%;
    margin-bottom: 15px;

    @media screen and (max-width: 480px) {
        grid-template-rows: 5% 45% 5% 35% 10%;
        padding-top: 0;
        margin-left: 0;
        width: 100%;
    }
`;

export const Legend = styled.legend`
    text-decoration: underline;
    margin-left: 10px;
    height: max-content;
    text-align: left;

    @media screen and (max-width: 480px) {
        margin-left: 22px;
    }
`;

export const OrderForm = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    background: #faeab4;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 15px;
    text-align: left;

    @media screen and (max-width: 480px) {
        grid-template-rows: 25% 25% 0% 40%;
        grid-template-columns: 1fr;
        margin: 0 10px 10px;
    }
`;

export const CollectForm = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    background: #faeab4;
    display: grid;
    grid-template-columns: 50% 50%;
    text-align: left;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 25%);
        grid-template-columns: 1fr;
        margin: 0 10px 10px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;

    @media screen and (max-width: 480px) {
        display: block;
    }
`;

export const OrderButton = styled.button`
    border: 1px solid black;
    border-radius:  5px;
    padding: 10px;
    margin-top: 20px;

    @media screen and (max-width: 480px) {
        margin-top: 0;
    }
`;