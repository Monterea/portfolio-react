import styled from "styled-components";
import landingPageBackgroundDark from "../../assets/pictures/landingPage/landingPageBackgroundDark.jpg";
import * as pallete from "../../App.mainStyles";

export const PageContainer = styled.div`
  top: 55px;
  position: relative;
  flex-direction: column;
  padding-top: 70px;
  padding-bottom: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-image: url(${landingPageBackgroundDark});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    min-height: 80vh;
    padding-top: 80px;
  }
`;
export const HeaderWhite = styled.div`
  width: 100%;
  font-weight: bold;
  justify-self: center;
  text-align: center;
  padding-bottom: 10px;
`;
export const H2White = styled.h2`
  color: ${pallete.white};
  font-size: 65px;
  font-weight: bold;
  text-align: center;
  padding: 3px;

  text-shadow: 5px 5px 10px ${pallete.gold};
`;
export const CaruselsContainer = styled.div`
  color: ${pallete.darkBlue};
  top: 55px;
  position: relative;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${pallete.lightBlue};
  //background-color: ${pallete.white};
`;
