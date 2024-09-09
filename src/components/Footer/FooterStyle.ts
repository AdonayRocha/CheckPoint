import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
    background-color: #fff;
    padding: 1.8rem;
    text-align: center;
`;

export const FooterConteudo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

export const FooterLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-decoration: none;
    color: #1E90FF; 

    svg {
        font-size: 36px; 
        margin-bottom: 0.5rem;
    }

    span {
        font-size: 24px;
    }
`;
