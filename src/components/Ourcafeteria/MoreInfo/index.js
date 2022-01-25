import React, {useState} from 'react'

import {
	MainContainer,
	MainBg,
	FirstBox,
	MainTitle,
	MainTitle2,
	FirstMainBox,
	SecondMainBox,
	ThirdMainBox,
	TextSpan,
	TextSpan2,
	IntroText,
	TextA,
	MainContent,
	MainContent2,
	BoxSide,
	MainBtnWrapper,
	MainPGourmet,
	ContactBox,
	SecondMainP,
	LocationImg,
} from './MoreInfoElements';

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
							Estamos para servirte
							<TextSpan> lo mejor de nuestra casa</TextSpan>
						</MainTitle>
						
						<IntroText>Un menú y lugar siempre frescos</IntroText>
					</FirstMainBox>

					<MainContent>
						<BoxSide>

							<MainBtnWrapper>
								<MainPGourmet>Bebidas hechas con nuestro propio café</MainPGourmet>
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


					<SecondMainBox style={{  
							backgroundImage: "url(" + "https://res.cloudinary.com/dintair/image/upload/v1643039157/Aroma%20de%20Ja%C3%A9n/coverpage_1.jpg" + ")",
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
							}}>
						<MainTitle>
							De paso, prueba nuestros Creppes
						</MainTitle>

						<MainContent2>
							<BoxSide>

								<TextA href="">
									<LocationImg src="https://res.cloudinary.com/dintair/image/upload/v1642872400/Aroma%20de%20Ja%C3%A9n/creppe_fresa_mango_3.jpg"/>
								</TextA>

							</BoxSide>
							
							<BoxSide>

								<TextA href="">
									<LocationImg src="https://res.cloudinary.com/dintair/image/upload/v1642872477/Aroma%20de%20Ja%C3%A9n/creppe_salado_2.jpg"/>
								</TextA>
								
							</BoxSide>

						</MainContent2>

					</SecondMainBox>

					

					<ThirdMainBox style={{  
							backgroundImage: "url(" + "https://res.cloudinary.com/dintair/image/upload/v1643040658/Aroma%20de%20Ja%C3%A9n/coverpage_2.jpg" + ")",
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
							}}>
						<MainTitle2>
							CREÉMOS EN EL
							<TextSpan2> COFFEE TIME</TextSpan2>
						</MainTitle2>
					</ThirdMainBox>

					

				</FirstBox>

			</MainBg>

			
		</MainContainer>
	)
}

export default OurCafeteria