import styled from "styled-components";
import * as pallete from "../../App.mainStyles";
import landingPageBackgroundLight from "../../assets/pictures/landingPage/landingPageBackgroundLight.jpg";

export const TechnologiesBody = styled.div`
  position: relative;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  /*   background-image: url(${landingPageBackgroundLight});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */
`;
export const TechnologiesUnit = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`;
export const TechUnit = styled.div`
  width: 105px;
  height: 105px;
  background-color: ${pallete.white};
  border: 3px solid ${pallete.darkBlue};
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const H2 = styled.h2`
  color: ${pallete.black};
  font-size: 65px;
  font-weight: bolder;
  text-align: center;
  padding: 3px;
  text-shadow: 5px 5px 10px ${pallete.gold};
`;
