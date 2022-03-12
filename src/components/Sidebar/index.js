import React from "react";
import PdfCarta from '../../images/carta_Aroma_jaen.pdf'

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

 					<ATag target="_blank" href={PdfCarta}>CARTA</ATag>

					<SidebarLinkRouter to="/OurCoffee" onClick={toggle}>NUESTRO CAFÉ</SidebarLinkRouter>

					<SidebarLinkRouter to="/AboutUs" onClick={toggle}>SOBRE NOSOTROS</SidebarLinkRouter>

				</SidebarMenu>

				<SideBtnWrap>
					<SidebarRoute to="" onClick={toggle}>Compra aquí</SidebarRoute>
				</SideBtnWrap>	
 			</SidebarWrapper>

 		</SidebarContainer>
    )
}

export default Sidebar;