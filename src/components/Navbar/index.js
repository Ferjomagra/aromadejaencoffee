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
              <ATag to='/OurCoffee'>NUESTRO CAFÉ</ATag>
            </NavItem>

            <NavItem>
              <ATag to='/AboutUs'>SOBRE NOSOTROS</ATag>
            </NavItem>

          </NavMenu>

          <NavBtn>
            {/* <NavBtnLink target='_blank' href='https://res.cloudinary.com/dintair/image/upload/v1686235055/Aroma%20de%20Ja%C3%A9n/carta_Aroma_Jaen.pdf'>Nuestra Carta</NavBtnLink> */}
            <NavBtnLink href='/ContactUs'>Contáctanos</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar