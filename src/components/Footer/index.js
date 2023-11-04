import React from 'react'

import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
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
                           
                           <FooterLinkA href="https://www.google.com/maps/place/Aroma+de+ja%C3%A9n+Coffee/@-12.1983403,-77.0096197,19z/data=!3m1!4b1!4m6!3m5!1s0x9105b9940749ecff:0x5481ed2b3067c98!8m2!3d-12.1983403!4d-77.008976!16s%2Fg%2F11flzsz576" target="_blank">Av Alameda San Marcos con Calle Barataría, Frente a la UPC de Chorrillos</FooterLinkA>
                           <FooterLink to="/signin">aromadejaenwilser@gmail.com</FooterLink>
                           <FooterLink to="/signin">aromadejaencoffeeinternational@gmail.com</FooterLink>
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <Img src={logo}/>
                        </SocialLogo>
                        <WebsiteRights> © {new Date().getFullYear()} Aroma de Jaén Coffee. Todos los derechos reservados.</WebsiteRights>
                        <SocialIcons>
                            <SocialIcons>
                                <SocialIconLink href="https://www.facebook.com/aromadejaen" target="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>

                                <SocialIconLink href="https://www.instagram.com/aromadejaencoffee/" target="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>

                                <SocialIconLink href="https://wa.link/2up311" target="_blank" aria-label="WhatsApp">
                                    <FaWhatsapp/>
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