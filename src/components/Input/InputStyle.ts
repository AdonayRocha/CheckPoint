import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0.5em; 
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    max-width: 350px;
    padding: 0.5rem;
    flex: 1;
`;

export const InputCampo = styled.input`
    padding: 0.5rem;
    border: none;
    border-radius: 2.8px;
    font-size: 16px;
    flex: 1;
    background-color: #fff;
    color: #000;
    outline: none;
`;

export const IconeContainer = styled.div`
    font-size: 28px;
    color: #1E90FF;
    margin-left: 1rem;
`;
