import styled from "styled-components";
import * as pallete from "../../App.mainStyles";
import landingPageBackgroundDark from "../../assets/pictures/landingPage/landingPageBackgroundDark.jpg";
import landingPageBackgroundLight from "../../assets/pictures/landingPage/landingPageBackgroundLight.jpg";
import landingPageBackgroundGrey from "../../assets/pictures/landingPage/landingPageBackgroundGray.jpg";

export const PageContainer = styled.div`
  top: 55px;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-image: url(${landingPageBackgroundLight});
  background-size: cover;
  //background-repeat: no-repeat;
  background-position: center;
`;
/* export const TechnologiesContainer = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background-image: url(${landingPageBackgroundLight});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`; */
export const HobbiesContainer = styled.div`
  position: relative;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-image: url(${landingPageBackgroundLight});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const H2 = styled.h2`
  color: ${pallete.black};
  font-size: 65px;
  font-weight: bold;
  text-align: center;
  padding: 3px;
  text-shadow: 5px 5px 10px ${pallete.gold};
`;
export const P = styled.p`
  font-size: 16px;
  padding-bottom: 5px;
  color: ${pallete.black};
`;
export const DescriptionContainer = styled.div`
  position: relative;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-image: url(${landingPageBackgroundGrey});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
