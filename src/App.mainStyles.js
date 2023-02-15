import styled from "styled-components";
import landingPageBackground from "./assets/pictures/landingPage/landingPageBackground.jpg";
import purpleNebula6 from "../src/assets/pictures/landingPage/purpleNebula6.jpg";

//COLOR SCHEME
export const almostBlack = "rgba(10,10,10,1)";
export const almostBlackOp01 = "rgba(10,10,10,0.1)";
export const almostBlackOp03 = "rgba(10,10,10,0.3)";
export const almostBlackOp = "rgba(10,10,10,0.5)";
export const darkGrey = "#4C0D7D";
export const lightGrey = "#5ED3DC";
export const darkTurquoise = "#D731A7";
export const lightTurquoise = "#F08FEF";
export const whiteFull = "rgb(255,255,255)";
export const whiteOp01 = "rgba(255,255,255,0.1)";
export const whiteOp03 = "rgba(255,255,255,0.3)";
export const whiteOp = "rgba(255,255,255,0.5)";

export const darkBlue = "#15104a";
export const lightBlue = "#b1e0f0";
export const greyShadow = "rgba(0, 0, 0, 0.2)";
export const white = "rgb(255,255,255)";
export const gold = "#f5a100";
export const black = "rgb(0,0,0)";
export const blueShadow = "rgba(27, 27, 94, 0.7)";
export const darkBlueShadow = "rgba(8, 8, 29, 0.7)";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 50px;
  min-height: 100vh;
  width: 100%;
  justify-content: start;
  align-items: center;
  background-image: url(${landingPageBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    background-image: url(${purpleNebula6});
    background-position: top;
    background-repeat: repeat-y;
    background-size: contain;
  }
`;
export const H1 = styled.h1`
  color: white;
  font-size: 35px;
  margin-bottom: 15px;
  width: 80%;
  max-width: 1200px;
  text-align: center;
  background-color: ${whiteOp03};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(8px);
  border-radius: 20px 20px 0 0;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
export const H2 = styled.h2`
  color: ${black};
  font-size: 5em;
  font-weight: bold;
  text-align: center;
  padding: 3px;
  padding-top: 50px;
  padding-bottom: 20px;
  text-shadow: 5px 5px 10px ${gold};
  @media (max-width: 1400px) {
    font-size: 4em;
  }
  @media (max-width: 1000px) {
    font-size: 3em;
  }
  @media (max-width: 700px) {
    font-size: 2em;
  }
`;
export const H2white = styled(H2)`
  color: ${white};
`;
export const H3 = styled.h3`
  color: ${black};
  font-size: 35px;
  font-weight: bolder;
  padding-bottom: 20px;
  text-shadow: 5px 5px 10px ${white};
  @media (max-width: 1400px) {
    font-size: 33px;
  }
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 700px) {
    font-size: 28px;
  }
`;
export const H4 = styled.h4`
  font-size: 28px;
  color: ${black};
  font-weight: bolder;
  padding-bottom: 10px;
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 1000px) {
    font-size: 24px;
  }
  @media (max-width: 700px) {
    font-size: 22px;
  }
`;
export const H4white = styled(H4)`
  color: ${white};
`;
export const P = styled.p`
  font-size: 22px;
  padding-bottom: 6px;
  text-align: center;
  color: ${black};
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1218px) {
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 880px) {
    font-size: 14px;
  }
`;

export const Pwhite = styled(P)`
  color: ${white};
`;

export const H5 = styled.h5`
  font-size: 23px;
  padding: 5px;
  font-weight: bolder;
  color: ${black};
  border-top: 2px solid ${darkBlue};
  @media (max-width: 1400px) {
    font-size: 21px;
  }
  @media (max-width: 1218px) {
    font-size: 19px;
  }
  @media (max-width: 1000px) {
    font-size: 17px;
  }
  @media (max-width: 880px) {
    font-size: 15px;
  }
`;
