import React, { ChangeEvent } from 'react';
import { InputCampo, InputWrapper, IconeContainer, Container } from './InputStyle'; 
import { IoAddCircleOutline } from "react-icons/io5"; 

interface InputProps {
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onIconClick?: () => void;
}

const Input: React.FC<InputProps> = ({ placeholder = '', type = 'text', value = '',
    onChange, onIconClick }) => {
    return (
        <Container>
            <InputWrapper>
                <InputCampo
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </InputWrapper>
            <IconeContainer onClick={onIconClick}>
                <IoAddCircleOutline />
            </IconeContainer>
        </Container>
    );
};

export default Input;
