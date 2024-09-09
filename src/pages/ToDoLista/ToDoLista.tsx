import React, { useState } from 'react';
import Lista from '../../components/Lista/Lista'; 
import { IoAddCircleOutline } from "react-icons/io5";
import { IconeContainer, InputCampo, InputWrapper, Container } from '../../components/Input/InputStyle';

const ToDoLista: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim()) {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
            <h3>Nova Lista</h3>
            <p><span>Adicionar Item</span></p>
            <Container>
                <InputWrapper>
                    <InputCampo
                        placeholder="Digite o item desejado"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <IconeContainer onClick={handleAddItem}>
                    <IoAddCircleOutline />
                </IconeContainer>
            </Container>
            <ul>
                <Lista items={items} />
            </ul>
        </div>
    );
};

export default ToDoLista;
