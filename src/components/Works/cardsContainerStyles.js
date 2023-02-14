import styled from "styled-components";
import * as pallete from "../../App.mainStyles";
//import landingPageBackgroundDark from "../../assets/pictures/landingPage/landingPageBackgroundDark.jpg";
/* export const CardsContainer = styled.div`
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
 */
export const Card = styled.div`
  max-width: 600px;
  width: 24%;
  min-width: 400px;
  padding: 10px;
  border: 3px solid ${pallete.darkBlue};
  background-color: ${pallete.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-left: 0 5px;
  margin-right: 0 5px;
  @media (max-width: 1285px) {
    width: 32%;
    min-width: 300px;
  }
  @media (max-width: 916px) {
    width: 48%;
    min-width: 300px;
  }
  @media (max-width: 616px) {
    width: 90%;
    min-width: 250px;
  }
`;
export const CardMedia = styled.div`
  width: 100%;
`;
export const CardContent = styled.div`
  width: 100%;
  border-radius: 10px;
`;
export const TypographyHeader = styled.div`
  width: 100%;
  border-radius: 10px;
  text-align: center;
  min-height: 50px;
  padding-top: 7px;
  justify-content: center;
  background-color: ${pallete.lightBlue};
`;

export const Typography = styled.div`
  width: 100%;
  background-color: ${pallete.white};
  padding: 10px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardActions = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 50px;
  background-color: ${pallete.lightBlue};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;
export const Button = styled.a`
  color: ${pallete.black};
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  padding-top: 4px;
  background-color: ${pallete.gold};
  min-width: 80px;
  height: 30px;
  border: 2px solid black;
  border-radius: 10px;
`;
