import styled from 'styled-components'

export const InfoContainer = styled.div`
	color: #fff;
	background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '010606')}
	@media screen and (max-width: 768px){
		padding: 100px 0;
	}
`

export const InfoWrapper = styled.div`
	display: grid;
	z-index:1;
	height:880px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 50px 24px;
	justify-content: center;
	@media screen and (max-width: 768px){
		height:100%;
	}
`

export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col1'` : `'col2 col1' 'col2 col1'`)};
	@media screen and (max-width: 768px){
		margin-top: 60px;
		grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
	}
`

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`

export const TextWrapper = styled.div`
	max-width:548px;
	padding-top:0;
	padding-bottom: 60px;
`

export const TopLine = styled.p`
	color: #00CC88;
	font-size: 16px;
	line-height: 16px;
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: 16px;
`

export const Heading = styled.h1`
	color: #000;
	margin-bottom: 24px;
	font-size: 64px;
	line-height: 100%;
	font-weight: 600;
	color: ${({lightText}) => (lightText ? '#f7f8fa' : '010606')};
	@media screen and (max-width: 768px){
		font-size: 55px;
	};
	@media screen and (max-width: 400px){
		font-size: 40px;
	};
`
export const HeadingSpan = styled.span`
	color: #00cc88;
`
export const Heading1 = styled.h1`
	color: #00cc88;
	margin-bottom: 24px;
	font-size: 64px;
	line-height: 100%;
	font-weight: 600;
	color: ${({lightText}) => (lightText ? '#00cc88' : '00cc88')};
	@media screen and (max-width: 768px){
		font-size: 55px;
	};
	@media screen and (max-width: 400px){
		font-size: 40px;
	};
`

export const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: black;
`

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`