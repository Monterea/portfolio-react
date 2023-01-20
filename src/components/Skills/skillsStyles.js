import styled from "styled-components";
import * as palette from "../../App.mainStyles";
import landingPageBackgroundDark from "../../assets/pictures/landingPage/landingPageBackgroundDark.jpg";
import landingPageBackgroundLight from "../../assets/pictures/landingPage/landingPageBackgroundLight.jpg";

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
  padding-bottom: 30px;
`;
export const DescriptionContainer = styled.div`
  position: relative;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-image: url(${landingPageBackgroundDark});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const HobbiesContainer = styled(DescriptionContainer)`
  background-image: url(${landingPageBackgroundLight});
`;
export const Body = styled.div`
  position: relative;
  flex-direction: column;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-self: center;
  width: 100%;
  max-width: 1500px;
`;
export const BodyLi = styled.div`
  padding-bottom: 30px;
  width: 100%;
  column-count: 3;
  column-width: auto;
`;
export const Li = styled.li`
  font-size: 20px;
  padding-bottom: 10px;
  color: ${palette.white};
`;
export const Ul = styled.ul`
  font-size: 25px;
  padding-bottom: 15px;
  font-weight: bolder;
  color: ${palette.white};
`;
export const H2 = styled.h2`
  color: ${palette.black};
  font-size: 65px;
  font-weight: bold;
  text-align: center;
  padding: 3px;
  text-shadow: 5px 5px 10px ${palette.gold};
`;
export const H2white = styled(H2)`
  color: ${palette.white};
`;
export const P = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
  text-align: center;
  color: ${palette.black};
`;
export const Pwhite = styled(P)`
  color: ${palette.white};
`;
