import React from 'react';
import { BsHouseDoor } from 'react-icons/bs'; 
import { RiFileListLine } from 'react-icons/ri'; 
import { RxPerson } from 'react-icons/rx'; 
import { Footer as FooterStyle, FooterConteudo, FooterLink } from './FooterStyle';

const Footer: React.FC = () => {
    return (
        <FooterStyle>
            <hr />
            <FooterConteudo>
                <FooterLink to="/">
                    <BsHouseDoor /> 
                    <span>Home</span>
                </FooterLink>
                <FooterLink to="/nova-lista">
                    <RiFileListLine /> 
                    <span>Nova Lista</span>
                </FooterLink>
                <FooterLink to="/perfil">
                    <RxPerson /> 
                    <span>Perfil</span>
                </FooterLink>
            </FooterConteudo>
        </FooterStyle>
    );
};

export default Footer;
