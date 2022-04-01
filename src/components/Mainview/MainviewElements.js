import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'


export const MainContainer = styled.div`
	
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0px;
	height: 700px;
	position: relative;
	z-index: 1;
`

//background-color: #ff4d4d;
export const MainBg = styled.div`
	
	position: aboslute;
	top: 0;
	right:0;
	bottom:0;
	left:0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`

export const Img = styled.img`
	height: 100%;
	max-height: 520px;
	-o-object-fit: cover;
	object-fit: cover;
	-o-object-position: top;
	object-position: top;
	position: absolute;
	top: 0;
	width: 100%;
`
//En Img: responsive: @media screen and (max-width:730px){display:none;}


/*export const Img2 = styled.img`
	display: none;
	@media screen and (max-width:730px){
		height: 100%;
		-o-object-fit: cover;
		object-fit: cover;
		-o-object-position: top;
		object-position: top;
		position: absolute;
		top: 0;
		width: 100%;
		display:block;
	}
`*/

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
	position: absolute;
	padding: 8px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const MainH1 = styled.h1`
	color: #fff;
	font-size:48px;
	padding: 20px;
	margin-bottom:65%;
	text-align: center;
	@media screen and (max-width:950px){
		font-size: 40px;
		margin-bottom:85%;
	}
	@media screen and (max-width: 480px){
		font-size:32px;
	}
`

export const MainP = styled.p`
	margin-top: 24px;
	color: #fff;
	font-size: 24px;
	text-align: center;
	max-width: 600px;
	@media screen and (max-width:950px){
		font-size: 24px;
	}
	@media screen and (max-width: 480px){
		font-size:18px;
	}
`

export const MainBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`


export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left:8px;
	font-size:20px;
`