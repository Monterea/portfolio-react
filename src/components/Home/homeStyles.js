import styled from "styled-components";
import landingPageBackground from "../../assets/pictures/landingPage/landingPageBackground.jpg";

export const PageContainer = styled.div`
  top: 55px;
  position: relative;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 50px;
  min-height: 100vh;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  background-image: url(${landingPageBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    min-height: 80vh;
    padding-top: 80px;
  }
`;
export const Introduction = styled.div`
  color: white;
  font-family: "Alfa Slab One", cursive;
  font-size: 30px;
  max-width: 800px;
  text-align: center;
  text-shadow: 2px 2px 10px #15104a, 0 0 10px #15104a, 0 0 5px #15104a;
  padding-bottom: 100px;
  padding-left: 100px;
`;
export const H1home = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 4;
  padding-bottom: 110px;
`;
export const H1 = styled.h1`
  z-index: 4;
  font-family: "Alfa Slab One", cursive;
  color: white;
  text-align: center;
  font-size: 5rem;
  text-shadow: 5px 5px 10px #f5a100;
  padding-bottom: 80px;
  @media (max-width: 768px) {
    font-size: 3em;
  }
`;
export const H2home = styled(H1home)`
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const Bubble = styled.div`
  z-index: 4;
  width: 300px;
  position: absolute;
  top: 60px;
  right: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Hero = styled.div`
  height: 560px;
  width: 287px;
  padding: 0px;
  z-index: 3;
`;
export const HeroBorder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 580px;
  width: 330px;
  z-index: 1;
  border: solid;
  border-color: white;
  border-width: 5px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.529), 0 0 5px white,
    0 0 5px rgba(255, 255, 255, 0.768);
  border-width: 5px;
  margin: auto;
  border-radius: 50%;
  /* background-color: transparent; */
  background-image: linear-gradient(to bottom right, transparent, #15104a);
`;
export const LightsBorderHero = styled.div`
  height: 580px;
  width: 330px;
  position: absolute;
  top: 90px;
  right: 100px;
`;
