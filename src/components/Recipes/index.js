import React from 'react'
 import {Button} from '../ButtonElements'
 import car from '../../images/products/fill_coffee.png'

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
     Subtitle,
     BtnWrap,
     ImgWrap,
     Img
 } from './RecipesElements'
 
 const Recipes = () => {
 	return (
 		<>
 			<InfoContainer id="Recipes">
 				<InfoWrapper>
 					<InfoRow>
 						<Column1>
 						<TextWrapper>
 							<TopLine>RECETAS</TopLine>
                      
 							<Heading>
								EL BUEN PULSO QUE
								<HeadingSpan> NOS CARACTERIZA</HeadingSpan>
							</Heading>
 							<Subtitle>Recetas claras y sencillas, con sabores espectaculares y diferentes 🍽️☕.</Subtitle>
 							<BtnWrap>
 								<Button to='Email'>Saber más</Button>
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
 
 export default Recipes