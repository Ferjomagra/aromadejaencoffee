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

 					<SidebarLink to="Ourcoffee" onClick={toggle}>LA CAFETERÍA</SidebarLink>

 					<ATag target="_blank" href={PdfCarta}>CARTA</ATag>

					<SidebarLink to="Ourcoffee" onClick={toggle}>NUESTRO CAFÉ</SidebarLink>

					<SidebarLink to="AboutUs" onClick={toggle}>SOBRE NOSOTROS</SidebarLink>

				</SidebarMenu>

				<SideBtnWrap>
					<SidebarRoute to="" onClick={toggle}>Compra aquí</SidebarRoute>
				</SideBtnWrap>	
 			</SidebarWrapper>

 		</SidebarContainer>
    )
}

export default Sidebar;