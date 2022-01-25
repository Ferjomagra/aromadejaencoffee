import React from 'react'
import {Button, ButtonA} from '../ButtonElements'
import productos from '../../images/products/hand_coffee.jpg'

import {
    SecundaryContainer,
    SecundaryWrapper,
    SecundaryRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    TextSpan
} from './OurcoffeeElements'

const Ourcoffee = () => {
return (
    <>
        <SecundaryContainer id="Ourcoffee">
            <SecundaryWrapper>
                <SecundaryRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>NUESTRO CAFÉ</TopLine>
                        <Heading>
                            LA DIFERENCIA ESTÁ EN
                            <TextSpan> LOS DETALLES 👌</TextSpan>
                        </Heading>
                        <Subtitle>Brindar productos de calidad mundial es nuestro compromiso con ustedes.</Subtitle>
                        <BtnWrap>
                            <ButtonA href='/OurCoffee'>Saber más</ButtonA>
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

export default Ourcoffee