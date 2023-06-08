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
	MenuButton,
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
						
						<IntroText>Un café y lugar siempre frescos</IntroText>

						<MenuButton href="https://res.cloudinary.com/dintair/image/upload/v1686235055/Aroma%20de%20Ja%C3%A9n/carta_Aroma_Jaen.pdf" target="_blank">Nuestra carta</MenuButton>

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
							De paso, prueba nuestro Aroma de Jaén Coffee
						</MainTitle>

						<MainContent2>
							<BoxSide>

								<TextA href="">
									<LocationImg title="Creppe de fudge con mango, fresa y helado" src="https://res.cloudinary.com/dintair/image/upload/v1642872479/Aroma%20de%20Ja%C3%A9n/creppe_helado_1.jpg"/>
								</TextA>

							</BoxSide>
							
							<BoxSide>

								<TextA href="">
									<LocationImg title="Crepper de leche condensada con plátano, fresa y arándanos" src="https://res.cloudinary.com/dintair/image/upload/v1642872478/Aroma%20de%20Ja%C3%A9n/creppe_fresa_arandanos_1.jpg"/>
								</TextA>
								
							</BoxSide>
							
							<BoxSide>

								<TextA href="">
									<LocationImg title="Frappe de café" src="https://res.cloudinary.com/dintair/image/upload/v1643207832/Aroma%20de%20Ja%C3%A9n/IMG-20211130-WA0030.jpg"/>
								</TextA>

							</BoxSide>
							
							<BoxSide>

								<TextA href="">
									<LocationImg title="Frappe de aguaymanto" src="https://res.cloudinary.com/dintair/image/upload/v1643208567/Aroma%20de%20Ja%C3%A9n/IMG-20211130-WA0025.jpg"/>
								</TextA>
								
							</BoxSide>

							<BoxSide>

								<TextA href="">
									<LocationImg title="Chilcano de café" src="https://res.cloudinary.com/dintair/image/upload/v1643208779/Aroma%20de%20Ja%C3%A9n/t_1.jpg"/>
								</TextA>

							</BoxSide>
							
							<BoxSide>

								<TextA href="">
									<LocationImg title="Daiquiri de café" src="https://res.cloudinary.com/dintair/image/upload/v1643208934/Aroma%20de%20Ja%C3%A9n/t_2.jpg"/>
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