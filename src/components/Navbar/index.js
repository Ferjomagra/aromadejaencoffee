import React from 'react'
import {FaBars} from 'react-icons/fa'
import logo from '../../images/logo.png'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
  MobileIcon,
  NavMenu,
  NavItem,
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
              <PdfTag target="_blank" href="https://res.cloudinary.com/dintair/image/upload/v1672493881/Aroma%20de%20Ja%C3%A9n/AromaDeJa%C3%A9n_carta.pdf">CARTA</PdfTag>
            </NavItem>

            <NavItem>
              <ATag to='/OurCoffee'>NUESTRO CAFÉ</ATag>
            </NavItem>

            <NavItem>
              <ATag to='/AboutUs'>SOBRE NOSOTROS</ATag>
            </NavItem>

          </NavMenu>

          {/* <NavBtn>
            <NavBtnLink target='_blank' href='https://aromadejaencoffee.com/'>Compra aquí</NavBtnLink>
          </NavBtn> */}

          <NavBtn>
            <NavBtnLink target='_blank' href='https://res.cloudinary.com/dintair/image/upload/v1680356872/Aroma%20de%20Ja%C3%A9n/carta_ajaen.pdf'>Nuestra Carta</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar