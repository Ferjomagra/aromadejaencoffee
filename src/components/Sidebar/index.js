import React from "react";

import {
    SidebarContainer,
    Icon,
    CloseIcon,
	ATag,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
	SidebarLinkRouter,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
 			<Icon onClick={toggle}>
 				<CloseIcon/>
 			</Icon>
 			<SidebarWrapper>
 				<SidebarMenu>

 					<SidebarLinkRouter to="/Ourcafeteria" onClick={toggle}>LA CAFETERÍA</SidebarLinkRouter>

 					<ATag target="_blank" href="https://res.cloudinary.com/dintair/image/upload/v1680356872/Aroma%20de%20Ja%C3%A9n/carta_ajaen.pdf">CARTA</ATag>

					<SidebarLinkRouter to="/OurCoffee" onClick={toggle}>NUESTRO CAFÉ</SidebarLinkRouter>

					<SidebarLinkRouter to="/AboutUs" onClick={toggle}>SOBRE NOSOTROS</SidebarLinkRouter>

				</SidebarMenu>

				<SideBtnWrap>
					<SidebarRoute target='_blank' href='https://res.cloudinary.com/dintair/image/upload/v1680356872/Aroma%20de%20Ja%C3%A9n/carta_ajaen.pdf'>Nuestra carta</SidebarRoute>
				</SideBtnWrap>	
 			</SidebarWrapper> 

 		</SidebarContainer>
    )
}

export default Sidebar;