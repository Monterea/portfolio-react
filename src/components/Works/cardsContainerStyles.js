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
  max-width: 500px;
  width: 400px;
  padding: 10px;
  border: 3px solid ${pallete.darkBlue};
  background-color: ${pallete.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;
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
  height: 50px;
  padding-top: 7px;
  justify-content: center;
  background-color: ${pallete.lightBlue};
`;
export const P = styled.p`
  font-size: 16px;
  padding-bottom: 5px;
  color: ${pallete.black};
`;
export const T = styled.p`
  font-size: 18px;
  padding: 5px;
  font-weight: bolder;
  color: ${pallete.black};
  border-top: 2px solid ${pallete.darkBlue};
`;

export const CardHeader = styled.h4`
  font-size: 30px;
  color: ${pallete.black};
`;
export const Typography = styled.div`
  width: 100%;
  font-size: 18px;
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
  justify-content: space-evenly;
`;
export const Button = styled.a`
  color: ${pallete.black};
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  padding-top: 4px;
  background-color: ${pallete.gold};
  width: 130px;
  height: 30px;
  border: 2px solid black;
  border-radius: 10px;
  /* ${(props) => {
    if (props.checked === 1) {
      return `
            display: flex;
         `;
    } else if (props.checked === 2) {
      return `
            display: none;
         `;
    }
  }} */
`;
