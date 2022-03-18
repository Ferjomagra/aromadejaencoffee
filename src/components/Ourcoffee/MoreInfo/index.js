import React, {useState} from 'react'
import {Button} from '../../ButtonElements'
import {
	MainContainer,
	MainBg,
	FirstBox,
    FirstMainBox,
	MainTitle,
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
    MainPCappuccino,
	TimeLineContainer,
	TimeLineBoxes,
	TLTitle,
	TLSubTitle,
	TLImg,
	TLDesc
} from './MoreInfoElements';

import Plantacion from '../../../images/production_process/plantones.jpg'
import Recoleccion from '../../../images/production_process/recolectora.jpg'
import ProcesCurado from '../../../images/production_process/curado.jpg'
import AnalisisCalidad from '../../../images/products/coffee_6.png'
import Tostado from '../../../images/production_process/granos.png'
import Molido from '../../../images/production_process/molido.jpg'
import Envasado from '../../../images/products/coffee_6.png'


import tostadoGourmet from '../../../images/products/coffee_1.png'
import expresoCappuccino from '../../../images/products/coffee_2.2.png'
import cafetera from '../../../images/products/coffee_2.png'


const OurCoffeeInfo = () => {
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
                            La importancia de
                            <TextSpan> Nuestro café</TextSpan>
                        </MainTitle>
                        
                        <IntroText>Energía, motivación y cuidado iniciales en el proceso, son clave para nuestro producto final</IntroText>
                    </FirstMainBox>
				

					<TimeLineContainer>
						<TimeLineBoxes>
							<TLTitle>1. Plantación</TLTitle>
							<TLImg src={Plantacion}/>
							<TLDesc>
								Ponemos las semillas en bolsas de almácigo antes de pasarlo a suelo definitivo donde
								podrán crecer hasta los 10m de altura. Sin embargo, para una mejor producción, estos 
								deben mantener una altura baja para una mejor producción.
							</TLDesc>
						</TimeLineBoxes>

						<TimeLineBoxes>
							<TLTitle>2. Recolectado de las cerezas de café</TLTitle>
							<TLImg src={Recoleccion}/>
							<TLDesc>
								Una vez que la planta de café haya alcanzado su punto de madurez, brota sus frutos conocidos 
								como cerezas los cuales son extraidos cuidadosamente para el recolectado.
							</TLDesc>
						</TimeLineBoxes>

						<TimeLineBoxes>
							<TLTitle>3. Secado en bandejas solares</TLTitle>
							<TLImg src={ProcesCurado}/>
							<TLDesc>
								En este paso, se procede a quitar la pulpa de la cereza para obtener el grano crudo,
								el cual se dejará secando.
							</TLDesc>
							<TLDesc>
								En el curado se elimina la cascara que recubre el grano para clasificarlo en base a la calidad, forma y tamaño.
							</TLDesc>
						</TimeLineBoxes>

						<TimeLineBoxes>
							<TLTitle>4. Análisis de calidad</TLTitle>
							<TLImg src={AnalisisCalidad}/>
							<TLDesc>Se separan los granos para diferenciar la calidad del grano resultante. Este proceso puede tardar hasta un día debido a la clasificación
								manual.</TLDesc>
						</TimeLineBoxes>

						<TimeLineBoxes>
							<TLTitle>5. Tostado del grano</TLTitle>
							<TLImg src={Tostado}/>
							<TLDesc>El grano, al ser puesto a temperaturas aproximadas a 200°, aumenta su tamaño en un
								80 a 100%, pierde peso, y disminuye su cafeina, y finalmente adquiere el típico color
								marrón oscuro que conocemos.
							</TLDesc>
							<TLDesc></TLDesc>
						</TimeLineBoxes>

						<TimeLineBoxes>
							<TLTitle>6. Molido</TLTitle>
							<TLImg src={Molido}/>
							<TLDesc>Se procede con la molienda de los granos de café, este lo reduce a polvo. Inmediatamente después,
								se prepara el café.
							</TLDesc>
						</TimeLineBoxes>

						<TimeLineBoxes>
							<TLTitle>7. Envasado y producto final</TLTitle>
							<TLImg src={Envasado}/>
							<TLDesc>El café molido procede al envasado, y es así como nuestro producto final nace.</TLDesc>
						</TimeLineBoxes>
					</TimeLineContainer>


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

export default OurCoffeeInfo