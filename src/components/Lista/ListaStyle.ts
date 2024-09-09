import styled from 'styled-components';

export const ListaContainer = styled.ul`
    padding: 0; 
    margin: 0; 
    list-style-type: none; 
`;

export const ListaItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ccc;
    list-style: none;
    margin-left: 0.5em;

    svg {
        margin-right: 0.5rem;
        color: #000;
    }

    span {
        color: #000;
    }
`;
