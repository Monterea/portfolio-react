import styled from "styled-components";
import * as pallete from "../../App.mainStyles";
import landingPageBackgroundLight from "../../assets/pictures/landingPage/landingPageBackgroundLight.jpg";

export const TechnologiesBody = styled.div`
  position: relative;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  width: 100%;
  /*   background-image: url(${landingPageBackgroundLight});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */
  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const TechnologiesUnit = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: flex-start;
  //flex-wrap: wrap;
  align-items: center;
  @media (max-width: 850px) {
    padding-left: 20px;
    max-height: 100px;
    align-items: flex-start;
    padding-top: 10px;
    padding-bottom: 0px;
  }
`;
export const TechUnits = styled.div`
  flex-wrap: wrap;
  padding-top: 10px;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 20px;
  }
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
  @media (max-width: 1000px) {
    width: 95px;
    height: 95px;
  }
  @media (max-width: 850px) {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
`;
export const Li = styled.li`
  font-size: 22px;
  color: ${pallete.white};
  list-style-type: none;
  padding-bottom: 10px;
  align-items: center;
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
export const Ul = styled.ul`
  padding-bottom: 20px;
  text-align: center;
  min-height: 100px;
  font-size: 28px;
  color: ${pallete.black};
  font-weight: bolder;
  padding-bottom: 10px;
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 1000px) {
    font-size: 24px;
  }
  @media (max-width: 850px) {
    min-height: auto;
  }
  @media (max-width: 700px) {
    font-size: 22px;
  }
`;
