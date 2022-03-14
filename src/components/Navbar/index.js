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
  PdfTag,
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
              <ATag to='/Ourcafeteria'>LA CAFETERÍA</ATag>
            </NavItem>

            <NavItem>
              <PdfTag target="_blank" href={PdfCarta}>CARTA</PdfTag>
            </NavItem>

            <NavItem>
              <ATag to='/OurCoffee'>NUESTRO CAFÉ</ATag>
            </NavItem>

            <NavItem>
              <ATag to='/AboutUs'>SOBRE NOSOTROS</ATag>
            </NavItem>

          </NavMenu>

          <NavBtn>
            <NavBtnLink target='_blank' href='https://aromadejaencoffee.com/'>Compra aquí</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar