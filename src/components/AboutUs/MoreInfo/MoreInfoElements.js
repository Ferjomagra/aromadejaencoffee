import styled from 'styled-components'


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
	padding: 0px;
	padding-bottom: 0px;
	padding-top: 0px;
`
export const FirstMainBox = styled.div`
    background: white;
    padding-top: 160px;
    padding-bottom: 160px;
    padding-left: 30px;
    padding-right: 30px;
`
export const MainTitle = styled.h1`
	font-size: 60px;
	font-weight: bold;
	color: #333;
	margin:0 0 0px;
	padding:0 0 0px;
	@media screen and (max-width:730px){
		
	}
`
export const TextSpan = styled.span`
	color: #ff4d4d;
`
export const IntroText = styled.p`
	font-size: 28px;
	color: #333;
	margin: 0 auto;
	padding: 0 0 0px;
	margin-top: 35px;
	width:100%;
	max-width: 800px;
`

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
    text-align: left;
`

export const TopLine = styled.p`
	color: #ff4d4d;
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
	color: ${({lightText}) => (lightText ? '#f7f8fa' : '010606')}
	@media screen and (max-width: 480px;){
		font-size: 32px;
	}
`
export const HeadingSpan = styled.span`
	color: #ff4d4d;
`
export const Heading1 = styled.h1`
	color: #00cc88;
	margin-bottom: 24px;
	font-size: 64px;
	line-height: 100%;
	font-weight: 600;
	color: ${({lightText}) => (lightText ? '#00cc88' : '00cc88')}
	@media screen and (max-width: 480px;){
		font-size: 32px;
	}
`

export const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: black;
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






export const SecundaryContainer = styled.div`
	color: #fff;
	background: white;
	@media screen and (max-width: 768px){
		padding: 100px 0;
	};
`

export const SecundaryWrapper = styled.div`
	display: grid;
	z-index:1;
	height: 880px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0px 24px;
	justify-content: center;
	@media screen and (max-width: 768px){
		height:100%;
	}
`

export const SecundaryRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col2'` : `'col1 col2' 'col1 col2'`)};
	@media screen and (max-width: 768px){
		margin-top: 60px;
		grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
	}
`

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`