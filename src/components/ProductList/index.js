import React, {useState} from 'react'

import {
	MainContainer,
	MainBg,
	FirstBox,
	MainTitle,
	FirstMainBox,
	TextSpan,
	IntroText,
	TextA,
	MainContent,
	BoxSide,
	MainBtnWrapper,
	MainPGourmet,
	ContactBox,
	SecondMainP,
	LocationImg,
} from './ProductListElements';

const OurCafeteria = () => {
	const [hover, setHover] = useState(false)
	const onHover = () =>{
		setHover(!hover)
	}

	return (
	
		<MainContainer>

			<MainBg>
				
				<FirstBox>
					<FirstMainBox>
						<MainTitle>
							Nuestra línea
							<TextSpan> de Productos</TextSpan>
						</MainTitle>
						
						<IntroText>Un café y lugar siempre frescos</IntroText>
					</FirstMainBox>

					<MainContent>
						<BoxSide>

							<MainBtnWrapper>
								<MainPGourmet>Los cuatro envases de café (dorado, negro, rojo, turquesa), café a granel de exportación, café pergamino, y café pilado</MainPGourmet>
								<ContactBox>
									<SecondMainP>Lo que ofrecemos sale de nuestro esfuerzo. Nuestras bebidas a base de café, te encantarán</SecondMainP>
								</ContactBox>
							</MainBtnWrapper>

						</BoxSide>
						
						<BoxSide>

							<TextA href="">
								<LocationImg src="https://res.cloudinary.com/dintair/image/upload/v1643129532/Aroma%20de%20Ja%C3%A9n/flocal_3.jpg"/>
							</TextA>
							
						</BoxSide>

					</MainContent>


				</FirstBox>

			</MainBg>

			
		</MainContainer>
	)
}

export default OurCafeteria