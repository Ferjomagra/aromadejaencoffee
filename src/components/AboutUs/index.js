import React from 'react'
import {Button, ButtonA} from '../ButtonElements'
import productos from '../../images/products/hand_circle.jpg'

import {
    SecundaryContainer,
    SecundaryWrapper,
    SecundaryRow,
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
} from './AboutUsElements'

const AboutUs = () => {
return (
    <>
        <SecundaryContainer id="AboutUs">
            <SecundaryWrapper>
                <SecundaryRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>SOBRE NOSOTROS</TopLine>
                        <Heading>
                            ¿CÓMO NACIMOS, CRECIMOS
                            <HeadingSpan> Y SEGUIMOS?</HeadingSpan>
                        </Heading>
                        <Subtitle>La transparencia es lo que nos caracteriza 🙌. Mira nuestros inicios, precesos, y ambiciones.</Subtitle>
                        <BtnWrap>
                            <ButtonA href='/AboutUs'>Saber más</ButtonA>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={productos} alt=""/>
                        </ImgWrap>
                    </Column2>
                </SecundaryRow>
            </SecundaryWrapper>
        </SecundaryContainer>
    </>
)
}

export default AboutUs