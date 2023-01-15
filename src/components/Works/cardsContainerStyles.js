import styled from "styled-components";
import * as palette from "../../App.mainStyles";
import landingPageBackgroundDark from "../../assets/pictures/landingPage/landingPageBackgroundDark.jpg";
export const CardsContainer = styled.div`
  width: 100%;
  padding: 10px;
  background-image: url(${landingPageBackgroundDark});
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  max-width: 500px;
  padding: 10px;
  border: 3px solid ${palette.darkBlue};
  color: ${palette.black};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const CardMedia = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${palette.darkBlue};
`;
export const CardContent = styled.div`
  width: 100%;
  border-radius: 10px;
`;
export const TypographyHeader = styled.div`
  width: 100%;
  border-radius: 10px;
  text-align: center;
  background-color: ${palette.lightBlue};
`;
export const CardHeader = styled.h4`
  font-size: 30px;
  color: ${palette.black};
`;

export const Typography = styled.div`
  width: 100%;
  font-size: 18px;
  background-color: ${palette.white};
`;
export const CardActions = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${palette.lightBlue};
  justify-content: space-between;
`;
export const Button = styled.a`
  color: ${palette.black};
  background-color: ${palette.gold};
  width: 150px;
  height: 90px;
  border: 2px solid black;
  border-radius: 10px;
`;
