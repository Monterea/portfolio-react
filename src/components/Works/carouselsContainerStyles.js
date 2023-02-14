import styled from "styled-components";
import * as palette from "../../App.mainStyles";
import wall from "../../assets/pictures/landingPage/wall.jpg";

export const H2Carousels = styled(palette.H2)``;
export const Row = styled.div`
  position: relative;
  padding: 20px;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  max-width: 1600px;
  height: auto;
  &:nth-child(2) {
    flex-direction: row;
  }
  &:nth-child(3) {
    flex-direction: row-reverse;
  }
  &:nth-child(4) {
    flex-direction: row;
  }
`;

export const Delineation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-left: 30px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  background-image: url(${wall});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Pdelineation = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
  text-align: left;
  color: ${palette.black};
`;
