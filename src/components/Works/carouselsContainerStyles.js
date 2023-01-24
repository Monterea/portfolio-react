import styled from "styled-components";
import * as palette from "../../App.mainStyles";
import wall from "../../assets/pictures/landingPage/wall.jpg";

export const H2 = styled.h2`
  color: ${palette.black};
  font-size: 65px;
  font-weight: bold;
  text-align: center;
  padding: 3px;
  padding-top: 50px;
  padding-bottom: 20px;
  text-shadow: 5px 5px 10px ${palette.gold};
`;
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
