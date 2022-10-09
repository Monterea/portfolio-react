import styled from "styled-components";

export const FooterContainer = styled.div`
	position: relative;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: #15104a
`;
export const FooterBody = styled.div`
	position: relative;
	bottom: 0;
	display: flex;
    flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 90%
`;
export const Line = styled.div`
	position: relative;
	bottom: 0;
	display: flex; 
    text-size-adjust:bold;
    flex-direction: column;
	width: 30%;
    &:nth-child(1) {
		text-align: left
    }
    &:nth-child(2) {
		text-align: center
    }
    &:nth-child(3) {
		text-align: right;
        flex-direction: row;
        align-content: center;
        align-self: center;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10px
    }
`;
export const Hfooter = styled.h1`
    font-family: 'Libre Baskerville', serif;
	font-size: 35px;
    color: white
`;
export const Pfooter = styled(Hfooter)`
	font-size: 25px;
	
`;
/* export const NewTabLink = styled.a`
    height: 60px
`; */
