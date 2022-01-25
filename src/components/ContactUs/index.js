import React, {useState} from 'react'
import {Button} from '../ButtonElements'
import {
	MainContainer,
	MainBg,
	FirstBox,
	MainTitle,
	TextSpan,
	IntroText,
	TextA,
	MainContent,
	BoxSide,
	MainH1,
	MainBtnWrapper,
	ContactBox,
	WtpImg,
	MainP,
	SecondMainP,
	LocationImg
} from './ContactUsElements';

import wtplogo from '../../images/products/whatsapp-logo-11.png'
import emailLogo from '../../images/products/email_png.png'
import Location from '../../images/location.PNG'
import TimeIcon from '../../images/products/time-icon.jpg'

const ContactUs = () => {
	const [hover, setHover] = useState(false)
	const onHover = () =>{
		setHover(!hover)
	}

	return (
	
		<MainContainer>

			<MainBg>
				
				<FirstBox>
					<MainTitle>
						Estamos en
						<TextSpan> contacto</TextSpan>
					</MainTitle>
					
					<IntroText>Ya sea para solicitar una cotización, un pedido o retroalimentación, ¡aquí estamos para atenderte!</IntroText>

					<MainContent>
						<BoxSide>

							<MainBtnWrapper>
								<WtpImg src={TimeIcon}/>
								<MainP>Horario de atención</MainP>
								<ContactBox>
									<SecondMainP >Lunes a domingo</SecondMainP>
									<SecondMainP >De 8:00 am a 11:00 pm</SecondMainP>
								</ContactBox>
							</MainBtnWrapper>

							<TextA href="https://wa.me/+51962019075" target="_blank">
								<MainBtnWrapper>
									
									<WtpImg src={wtplogo}/>
									<MainP>WhatsApp</MainP>
									<ContactBox>
										<TextA>+51 962 019 075</TextA>
									</ContactBox>
									
								</MainBtnWrapper>
							</TextA>

							<MainBtnWrapper>
								<WtpImg src={emailLogo}/>
								<MainP>Email</MainP>
								<ContactBox>
									<TextA href="" target="_blank">aromadejaenwilser@gmail.com</TextA>
								</ContactBox>
							</MainBtnWrapper>
						</BoxSide>
						
						<BoxSide>
							<TextA href="https://www.google.com/maps/place/Aroma+de+ja%C3%A9n+Coffee/@-12.1974935,-77.0100318,15z/data=!4m5!3m4!1s0x0:0x5481ed2b3067c98!8m2!3d-12.1974935!4d-77.0100318?hl=es" target="_blank">
								<LocationImg src={Location}/>
							</TextA>
							
						</BoxSide>

					</MainContent>

				</FirstBox>

			</MainBg>

			
		</MainContainer>
	)
}

export default ContactUs