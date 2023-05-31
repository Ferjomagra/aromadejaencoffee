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

 					<ATag target="_blank" href="https://res.cloudinary.com/dintair/image/upload/v1672493881/Aroma%20de%20Ja%C3%A9n/AromaDeJa%C3%A9n_carta.pdf">CARTA</ATag>

					<SidebarLinkRouter to="/OurCoffee" onClick={toggle}>NUESTRO CAFÉ</SidebarLinkRouter>

					<SidebarLinkRouter to="/AboutUs" onClick={toggle}>SOBRE NOSOTROS</SidebarLinkRouter>

				</SidebarMenu>

				<SideBtnWrap>
					<SidebarRoute target='_blank' href='https://aromadejaencoffee.com/'>Compra aquí</SidebarRoute>
				</SideBtnWrap>	
 			</SidebarWrapper>

 		</SidebarContainer>
    )
}

export default Sidebar;