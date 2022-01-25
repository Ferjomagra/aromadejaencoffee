import React from 'react'
import {FaBars} from 'react-icons/fa'
import logo from '../../images/logo.png'
import PdfCarta from '../../images/carta_Aroma_jaen.pdf'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ATag,
  NavBtn,
  NavBtnLink
} from './NavbarElements'


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Img src={logo}/>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>

            <NavItem>
              <NavLinks to="Ourcafeteria">LA CAFETERÍA</NavLinks>
            </NavItem>

            <NavItem>
              <ATag target="_blank" href={PdfCarta}>CARTA</ATag>
            </NavItem>

            <NavItem>
              <NavLinks to="Ourcoffee">NUESTRO CAFÉ</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="AboutUs">SOBRE NOSOTROS</NavLinks>
            </NavItem>

          </NavMenu>

          <NavBtn>
            <NavBtnLink to="Email">Compra aquí</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar