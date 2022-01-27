import React from 'react'

import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLinkA,
    SocialMedia,
    Img,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
import logo from '../../images/logo.png'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Menu </FooterLinkTitle>
                            
                            
                            <FooterLinkA href="/AboutUs">Sobre Nosotros</FooterLinkA>
                            
                            <FooterLinkA href="/ProductList">Línea de productos</FooterLinkA>
                            <FooterLinkA href="/ContactUs">Contáctanos</FooterLinkA>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Aquí estamos </FooterLinkTitle>
                           
                           <FooterLinkA href="https://www.google.com/maps/place/Aroma+de+ja%C3%A9n+Coffee/@-12.1974935,-77.0100318,15z/data=!4m5!3m4!1s0x0:0x5481ed2b3067c98!8m2!3d-12.1974935!4d-77.0100318?hl=es" target="_blank">Av Alameda San Marcos, Jirón Eleuthería, Chorrillos 15067</FooterLinkA>
                           <FooterLink to="/signin">aromadejaenwilser@gmail.com</FooterLink>
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <Img src={logo}/>
                        </SocialLogo>
                        <WebsiteRights> © {new Date().getFullYear()} Aroma de Jaén Coffee Todos los derechos reservados.</WebsiteRights>
                        <SocialIcons>
                            <SocialIcons>
                                <SocialIconLink href="https://www.facebook.com/aromadejaen" target="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>

                                <SocialIconLink href="https://www.instagram.com/aromadejaencoffee/" target="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer