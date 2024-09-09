import React from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { ListaItem, ListaContainer } from './ListaStyle';

interface ListaProps {
    items: string[];
}

const Lista: React.FC<ListaProps> = ({ items }) => {
    return (
        <ListaContainer>
            {items.map((item, index) => (
                <ListaItem key={index}>
                    <FaRegCircle />
                    <span>{item}</span>
                    {index < items.length - 1 && <hr />}
                </ListaItem>
            ))}
        </ListaContainer>
    );
};

export default Lista;
