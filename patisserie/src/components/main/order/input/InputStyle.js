import styled from "styled-components";

/*InputContainer, InputLabel, InputField*/

export const InputContainer = styled.div`
    position: relative;
    margin: 10px;
`;

export const InputLabel = styled.label`
    transition: 300ms;
    transform: translate(-50%, -50%);
    margin-right: 5px;
`;

export const InputField = styled.input`
    outline: none;
    background: #fff
    padding: 16px 22px;
    border: 1px solid #dadce0;
    font-size: 18px;
    border-radius: 5px;
    height: 1.5rem;

    &:focus {
        border: 2px solid royalblue;
    }

    &:valid + ${InputLabel} {
        top: -1;
        padding: 0 3px;
        font-size: 14px;
        color: #8d8d8d;
    }

    &:focus + ${InputLabel} {
        top: -1;
        padding: 0 3px;
        font-size: 14px;
        color: rpyalblue;
        transition: 300ms;
    }
`;

export const SelectField = styled.select`
    outline: none;
    background: #fff
    padding: 16px 22px;
    border: 1px solid #dadce0;
    font-size: 18px;
    border-radius: 5px;
    height: 1.5rem;

`;

export const TextAreaLabel = styled.label`
    transition: 300ms;
    transform: translate(-50%, -50%);
    margin-left: 90px;
    position: absolute;
    top: 10px;
`;

export const TextAreaField = styled.textarea`
    outline: none;
    background: #fff
    padding: 16px 22px;
    border: 1px solid #dadce0;
    font-size: 18px;
    border-radius: 5px;
    max-width: 50%;
    margin-left: 189px;
`;