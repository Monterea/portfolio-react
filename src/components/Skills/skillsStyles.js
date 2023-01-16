import styled from "styled-components";
//import * as pallete from "../../App.mainStyles";
import landingPageBackgroundDark from "../../assets/pictures/landingPage/landingPageBackgroundDark.jpg";

export const PageContainer = styled.div`
  top: 55px;
  position: relative;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  background-image: url(${landingPageBackgroundDark});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
