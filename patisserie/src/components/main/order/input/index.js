import React from 'react';
import {
    InputContainer,
    InputLabel,
    InputField,
    SelectField,
    TextAreaLabel,
    TextAreaField,
} from "./InputStyle";

const Input = ({id, label, ...rest}) => {
    return (
        <InputContainer>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <InputField id={id} {...rest}/>
        </InputContainer>
    )
};

const Select = ({id, label, ...rest}) => {
    return (
        <InputContainer>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <SelectField id={id} {...rest}/>
        </InputContainer>
    )
};

const TextArea = ({id, label, ...rest}) => {
    return (
        <InputContainer>
            <TextAreaLabel htmlFor={id}>{label}</TextAreaLabel>
            <TextAreaField id={id} {...rest}/>
        </InputContainer>
    )
}

export {Input, Select, TextArea}
