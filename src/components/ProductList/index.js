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
	ContactBox,
	SecondMainP,
	LocationImg,
	MainPGourmet,
	MainPCafetera,
    MainPCappuccino
} from './ProductListElements';

import tostadoGourmet from '../../images/products/coffee_1.png'
import expresoCappuccino from '../../images/products/coffee_2.2.png'
import cafetera from '../../images/products/coffee_2.png'

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
						
						<IntroText></IntroText>
					</FirstMainBox>

					<MainContent>
						<BoxSide>

							<MainBtnWrapper>
								<MainPGourmet>Tostado Gourmet</MainPGourmet>
								<ContactBox>
									<SecondMainP>Café de tostado suave, fresco, con mayor fineza y pensado en ti.</SecondMainP>
									<SecondMainP>Ideal para un desayuno en familia, o una cena con invitados especiales.</SecondMainP>
								</ContactBox>
							</MainBtnWrapper>

						</BoxSide>
						
						<BoxSide>

							<TextA href="">
								<LocationImg src={tostadoGourmet}/>
							</TextA>
							
						</BoxSide>

					</MainContent>

                    <MainContent>
						<BoxSide>

							<MainBtnWrapper>
								<MainPCappuccino>Cappuccino & Expresso</MainPCappuccino>
								<ContactBox>
									<SecondMainP>Café molido de intensidad moderado, especial para preparado de cappuccino y expresso a tu modo.</SecondMainP>
									
								</ContactBox>
							</MainBtnWrapper>

						</BoxSide>
						
						<BoxSide>

							<TextA href="">
								<LocationImg src={expresoCappuccino}/>
							</TextA>
							
						</BoxSide>

					</MainContent>

                    <MainContent>

						<BoxSide>

							<MainBtnWrapper>
								<MainPCafetera>Cafetera italiana o prensa francesa</MainPCafetera>
								<ContactBox>
									<SecondMainP>Especial para cafetera italiana o prensa francesa cuya intensidad de molido es mayor para garantizar un sabor más fuerte y exquisito.</SecondMainP>
				
								</ContactBox>
							</MainBtnWrapper>

						</BoxSide>
						
						<BoxSide>

							<TextA href="">
								<LocationImg src={cafetera}/>
							</TextA>
							
						</BoxSide>

					</MainContent>


				</FirstBox>

			</MainBg>

			
		</MainContainer>
	)
}

export default OurCafeteria