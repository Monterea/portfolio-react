import styled from "styled-components";
import * as palette from "../../App.mainStyles";
import wall from "../../assets/pictures/landingPage/wall.jpg";
export const DescriptionContainer = styled.div`
  position: relative;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const H2 = styled.h2`
  color: ${palette.black};
  font-size: 65px;
  font-weight: bold;
  text-align: center;
  padding: 3px;
  text-shadow: 5px 5px 10px ${palette.gold};
`;
export const Row = styled.div`
  position: relative;
  flex-direction: row;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  //max-width: 1500px;
`;
export const Carusel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: ${palette.darkBlue};
`;
export const Delineation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  background-image: url(${wall});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const H3 = styled.h3`
  color: ${palette.black};
  font-size: 30px;
  font-weight: bolder;
  font-style: inherit;
  padding-bottom: 20px;
  text-shadow: 5px 5px 10px ${palette.white};
`;
export const Pdelineation = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
  text-align: left;
  color: ${palette.black};
`;
/* export const CarouselBody = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
  display: grid;
  aspect-ratio: 600/640;
  background-color: #15104a;
  padding: 25px;
  gap: 5px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "foto" "title";
  grid-area: 'I I',
            'L R';
`; */
export const CarouselBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  object-fit: contain;
  height: 100%;
  width: 100%;
  ${(props) => {
    if (props.backgroundImage) {
      return `
				background-image: url(${props.backgroundImage});
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
			`;
    }
  }}
  @media (max-width: 550px) {
    margin-bottom: 65px;
    justify-content: flex-start;
  }
  ::before {
    content: "";
    position: absolute;
    background-color: green;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${palette.almostBlack};
    opacity: 0.8;
  }
`;
export const ImageContainer = styled.div`
  display: flexbox;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  z-index: 2;
`;
export const Image = styled.img`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
`;
export const CarouselButton = styled.button`
  position: absolute;
  display: flex;
  width: 50px;
  aspect-ratio: 1/1;
  background-color: ${palette.almostBlackOp03};
  background-image: url(${CarouselArrow});
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
  :nth-child(2) {
    right: calc(100% - 70px);
    top: calc(50% - 25px);
    transform: rotate(180deg);
    @media (max-width: 550px) {
      right: calc(50% + 15px);
      top: calc(100% + 13px);
    }
  }
  :nth-child(3) {
    left: calc(100% - 70px);
    top: calc(50% - 25px);
    @media (max-width: 550px) {
      left: calc(50% + 15px);
      top: calc(100% + 13px);
    }
  }
`;
