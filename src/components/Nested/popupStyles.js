import styled from "styled-components";
import * as palette from "../../App.mainStyles";

export const H4 = styled.h4`
  color: ${palette.darkBlue};
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding: 3px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const P = styled.p`
  font-size: 20px;
  padding-bottom: 20px;
  text-align: left;
  color: ${palette.black};
`;
export const Input = styled.input`
  font-size: 20px;
  height: 50px;
  width: 100px;
  border: 2px ${palette.darkBlue} solid;
  border-radius: 10px;
  background-color: red;
  padding: 10px;
  text-align: center;
  color: ${palette.black};
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  width: 200px;
  border: 2px ${palette.darkBlue} solid;
  border-radius: 10px;
  background-color: ${palette.gold};
  padding: 10px;
  text-align: center;
  color: ${palette.black};
`;
