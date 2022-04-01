import React, {useState} from 'react'
import {Button} from '../ButtonElements'
import {
	MainContainer,
	MainBg,
	Img,
	MainContent,
	//HeroP,
} from './MainviewElements';
//import productos from '../../images/products/real_coffee_main_png.png'
//import productos from '../../images/products/backgorund_2_ps.jpg'
import productos from '../../images/products/background_3.jpg'
import resp_background from '../../images/products/responsive_background.jpg'

const Mainview = () => {
	const [hover, setHover] = useState(false)
	const onHover = () =>{
		setHover(!hover)
	}

	return (
	
		<MainContainer>
			
			

			<MainBg>
				<Img src={productos}/>
				{/*<Img2 src={resp_background}/>*/}
			</MainBg>

			<MainContent>
				
				
				
				{/*MainBtnWrapper>
					<Button to="" onMouseEnter={onHover} 
					onMouseLeave={onHover}
					primary='true'
					dark='true'>Contáctanos {hover ? <ArrowForward/> : <ArrowRight/>}
					</Button>
				</MainBtnWrapper>*/}
			</MainContent>
		</MainContainer>
	)
}

export default Mainview