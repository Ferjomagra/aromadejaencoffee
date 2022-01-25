import React from 'react'
 import {Button, ButtonA} from '../ButtonElements'
 import car from '../../images/products/local_info.png'

 import {
     InfoContainer,
     InfoWrapper,
     InfoRow,
     Column1,
     Column2,
     TextWrapper,
     TopLine,
     Heading,
	 HeadingSpan,
     Heading1,
     Subtitle,
     BtnWrap,
     ImgWrap,
     Img
 } from './OurcafeteriaElements'
 
 const Ourcafeteria = () => {
 	return (
 		<>
 			<InfoContainer id="Ourcafeteria">
 				<InfoWrapper>
 					<InfoRow>
 						<Column1>
 						<TextWrapper>
 							<TopLine>LA CAFETERÍA</TopLine>
                      
 							<Heading>
								 DATE UN SALTO A NUESTRA CASA
								 <HeadingSpan> Y PRUEBANOS</HeadingSpan>
							</Heading>
                            
 							<Subtitle>Recibe un cálido 👋 de Aroma de Jaén Coffee. No importa el tamaño, importa la esencia.</Subtitle>
 							<BtnWrap>
								<ButtonA href="/Ourcafeteria">Saber más</ButtonA> 
 							</BtnWrap>
 						</TextWrapper>	
 						</Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={car} alt="La cafetería"/>
                            </ImgWrap>
                        </Column2>
 					</InfoRow>
 				</InfoWrapper>
 			</InfoContainer>	
 		</>
 	)
 }
 
 export default Ourcafeteria