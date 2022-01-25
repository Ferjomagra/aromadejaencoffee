import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'


export const MainContainer = styled.div`
	
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0px;
	z-index: 1;
`

export const MainBg = styled.div`
	background-color: white;
	margin:0 auto;
	width: 100%;
`
export const FirstBox = styled.div`
	width:100%;
	height: 100%;
	text-align:center;
	padding: 50px;
	
	padding-bottom: 100px;
	padding-top: 100px;
`
export const MainTitle = styled.h1`
	font-size: 55px;
	font-weight: bold;
	color: #004de6;
	margin:0 0 0px;
	padding:0 0 0px;
	@media screen and (max-width:730px){
		
	}
`
export const TextSpan = styled.span`
	color: #00cc88;
`
export const IntroText = styled.p`
	font-size: 28px;
	color: #333;
	margin: 0 auto;
	padding: 0 0 0px;
	margin-top: 35px;
	margin-bottom: 35px;
	width:100%;
	max-width: 800px;
`

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`
/*Add :before styles*/

export const MainContent = styled.div`
	z-index:3;
	max-width: 100%;
	flex-direction: column;
	align-items: center;
`
export const BoxSide = styled.div`
	display: inline-block;
	vertical-align: middle;
	@media screen and (max-width:903px){
		display:inline-block;
		margin-bottom: 10px;
	}
`
export const ContactBox = styled.div`
	background: #f2f2f2;
	width: 100%;
	height: 100%;
	vertical-align: middle;
	align-items: center;
	padding: 10px;
	border-radius:10px;
`
export const MainP = styled.p`
	margin:0 0 0px;
	padding: 0 0 0px;
	color: #333;
	font-weight: bold;
	margin-bottom: 20px;
	font-size: 15px;
	text-align: center;
	@media screen and (max-width:950px){
		font-size: 15px;
	}
`
export const SecondMainP = styled.p`
	margin:0 0 0px;
	padding: 0 0 0px;
	color: #333;
	font-weight: bold;
	font-size: 15px;
	text-align: left;
	@media screen and (max-width:950px){
		font-size: 15px;
	}
`
export const TextA = styled.a`
	text-decoration: none;
	font-size: 15px;
	color: #333;
	font-weight: bold;
`

export const MainBtnWrapper = styled.div`
	width: 100%;
	max-width: 500px;
	vertical-align: middle;
	align-items: center;
	border-radius: 5px;
	height: 100%;
	padding: 30px;
	cursor: pointer;
	transform: (1.1, 1.1);
	&:hover{
		background: #e6e6e6;
		transition: all 0.5s ease;
	}
`
export const WtpImg = styled.img`
	width: 30px;
`
export const LocationImg = styled.img`
	margin-left: 10px;
	width: 100%;
	max-width: 500px;
	border-radius: 10px;
	@media screen and (max-width:903px){
		margin-left:0px;
	}
`