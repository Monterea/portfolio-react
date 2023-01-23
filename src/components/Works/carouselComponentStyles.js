import styled from "styled-components";
import * as palette from "../../App.mainStyles";

export const CarouselBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  object-fit: contain;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  padding: 10px;
  /*   ${(props) => {
    if (props.backgroundImage) {
      return `
				background-image: url(${props.backgroundImage});
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
			`;
    }
  }} */
  @media (max-width: 550px) {
    margin-bottom: 65px;
    justify-content: flex-start;
  }
  /*   ::before {
    content: "";
    position: absolute;
    background-color: ${palette.darkBlue};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.8;
  } */
`;
export const ImageContainer = styled.div`
  display: flexbox;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  //max-height: ;
  z-index: 2;
`;
export const Image = styled.img`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
`;
export const OthersContainer = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  //max-height: ;
  z-index: 2;
`;
export const CarouselTexts = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;
export const CarouselButton = styled.button`
  position: relative;
  display: flex;
  width: 30px;
  height: 30px;
  aspect-ratio: 1/1;
  background-color: ${palette.white};
  border-radius: 50%;
  border: none;
  z-index: 5;
  ${(props) => {
    if (props.galleryLength <= 1) {
      return `
			display: none;
			`;
    }
  }}
  @media (min-width: 768px) {
    cursor: pointer;
    :hover {
      background-color: ${palette.almostBlackOp};
    }
  }
`;

export const CarouselTitle = styled.h4`
  grid: "t";
  color: ${palette.white};
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  // text-shadow: 5px 5px 10px ${palette.gold};
`;
export const CarouselAddition = styled.p`
  grid: "a";
  color: ${palette.white};
  font-size: 20px;
  // font-weight: bold;
  text-align: center;
  padding: 5px;
  // text-shadow: 5px 5px 10px ${palette.gold};
`;
