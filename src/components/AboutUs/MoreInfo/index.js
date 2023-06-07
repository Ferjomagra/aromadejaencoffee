import React, {useState} from 'react'
import {
	MainContainer,
	MainBg,
	FirstBox,
    FirstMainBox,
	MainTitle,
	TextSpan,
	IntroText,

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
    ImgWrap,
    Img,


    SecundaryContainer,
    SecundaryWrapper,
    SecundaryRow,
} from './MoreInfoElements';

const AboutUsInfo = () => {
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
                            Vinimos para marcar un 
                            <TextSpan> Antes y después</TextSpan>
                        </MainTitle>
                        
                        <IntroText>¿Cómo nacimos, crecimos y seguimos? Ahora lo averiguarás</IntroText>
                    </FirstMainBox>


                    <SecundaryContainer id="AboutUs">
                        <SecundaryWrapper>
                            <SecundaryRow>
                                <Column1>
                                <TextWrapper>
                                    <TopLine>NUESTRA HISTORIA</TopLine>
                                    <Heading>
                                        REINVENTAR ES NUESTRA MÁS
                                        <HeadingSpan> GRANDE META</HeadingSpan>
                                    </Heading>
                                    <Subtitle>
                                        Cuando descubrimos que se puede hacer más cosas con el café que
                                        simplemente comercializarlo, decidimos decir SÍ al futuro.
                                    </Subtitle>

                                    <Subtitle>
                                        La propuesta fue simple; degustar las comidas cotidianas añadiendo café dentro
                                        de la receta. El resultado fue increible 🙌.
                                    </Subtitle>
                                    
                                </TextWrapper>
                                </Column1>
                                <Column2>
                                    <ImgWrap>
                                        <Img src="https://res.cloudinary.com/dintair/image/upload/v1684901675/Aroma%20de%20Ja%C3%A9n/collage.png" alt=""/>
                                    </ImgWrap>
                                </Column2>
                            </SecundaryRow>
                        </SecundaryWrapper>
                    </SecundaryContainer>


                    <InfoContainer id="Recipes">
                        <InfoWrapper>
                            <InfoRow>
                                <Column1>
                                <TextWrapper>
                                    <TopLine>NUESTRA MISIÓN</TopLine>
                            
                                    <Heading>
                                        TRANSFORMAR
                                        <HeadingSpan> EL DÍA A DÍA</HeadingSpan>
                                    </Heading>
                                    <Subtitle>
                                        Estamos aquí para innovar transformar la percepción del café, y haciendo
                                        mil cosas con él. La diversificación es inherente a Aroma de Jaén Coffee.
                                    </Subtitle>
                                
                                </TextWrapper>	
                                </Column1>
                                <Column2>
                                    <ImgWrap>
                                        <Img src="https://res.cloudinary.com/dintair/image/upload/v1588651844/ruv8lsdrhjall5j9vtqm.jpg" alt="La cafetería"/>
                                    </ImgWrap>
                                </Column2>
                            </InfoRow>
                        </InfoWrapper>
                    </InfoContainer>

                    <SecundaryContainer id="AboutUs">
                        <SecundaryWrapper>
                            <SecundaryRow>
                                <Column1>
                                <TextWrapper>
                                    <TopLine>NUESTRA VISIÓN</TopLine>
                                    <Heading>
                                        APRENDIENDO DEL PRESENTE, MIRAMOS
                                        <HeadingSpan> CON CLARIDAD EL FUTURO</HeadingSpan>
                                    </Heading>
                                    <Subtitle>
                                        Aprendimos que un poco de fracaso es uno de los mejores ingredientes para el éxito.
                                        Llevar lo que producimos a cada persona posible manteniendo unido a nuestro equipo.
                                    </Subtitle>
                                    <Subtitle>Recordando e impulsando nuestra visión, se encuentra nuestra convicción.</Subtitle>

                            
                                    
                                </TextWrapper> 
                                </Column1>
                                <Column2>
                                    <ImgWrap>
                                        <Img src="https://res.cloudinary.com/dintair/image/upload/v1684903478/Aroma%20de%20Ja%C3%A9n/Dise%C3%B1o_sin_t%C3%ADtulo_1.png" alt=""/>
                                    </ImgWrap>
                                </Column2>
                            </SecundaryRow>
                        </SecundaryWrapper>
                    </SecundaryContainer>

                    <InfoContainer id="Recipes">
                        <InfoWrapper>
                            <InfoRow>
                                <Column1>
                                <TextWrapper>
                                    <TopLine>¿QUÉ DECIMOS?</TopLine>
                            
                                    <Heading>
                                        NOSOTROS SOMOS
                                        <HeadingSpan> NUESTRA COMPETENCIA</HeadingSpan>
                                    </Heading>
                                    <Subtitle>
                                        Al final de cada día, nos entusiasmamos por analizar las situaciones en las que
                                        podemos mejorar, lo que hicimos bien y lo que falta por hacer. Esa es nuestra motivación diária. 
                                    </Subtitle>
                                
                                </TextWrapper>	
                                </Column1>
                                <Column2>
                                    <ImgWrap>
                                        <Img src="https://res.cloudinary.com/dintair/image/upload/v1684904673/Aroma%20de%20Ja%C3%A9n/Dise%C3%B1o_sin_t%C3%ADtulo_2.png" alt="La cafetería"/>
                                    </ImgWrap>
                                </Column2>
                            </InfoRow>
                        </InfoWrapper>
                    </InfoContainer>

				</FirstBox>
			</MainBg>
		</MainContainer>
	)
}

export default AboutUsInfo