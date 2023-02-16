import styled from "styled-components";
import * as palette from "../../App.mainStyles";
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";

//DESKTOP VERSION
export const Navi = styled.nav`
  display: flex;
  height: 55px;
  width: 100%;
  margin: auto;
  position: fixed;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  background-color: ${palette.darkBlue}; //
  @media (max-width: 500px) {
    display: none;
  }
`;
export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  width: 40%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 500px) {
    width: 30%;
  }
`;

export const MenuItem = styled.li`
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  @media (max-width: 850px) {
    margin-left: 10px;
  }
`;
export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${palette.whiteFull};
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 1200px) {
    font-size: 23px;
  }
  @media (max-width: 850px) {
    font-size: 22px;
  }
  @media (max-width: 650px) {
    font-size: 20px;
  }
  &:hover {
    font-size: 35px;
    color: ${palette.gold};
    ${(props) => {
      if (props.className === "selected-page") {
        return `
			color: ${palette.darkBlue};
			`;
      }
    }}
    @media (max-width: 1200px) {
      font-size: 30px;
    }
    @media (max-width: 850px) {
      font-size: 29px;
    }
    @media (max-width: 650px) {
      font-size: 27px;
    }
  }
`;
export const BrandName = styled.div`
  width: 60%;
  margin-left: 50px;
  @media (max-width: 680px) {
    justify-self: flex-start;
    margin-left: 20px;
    width: 70%;
  }
  @media (max-width: 650px) {
    width: 85%;
  }
  @media (max-width: 505px) {
    width: 50%;
  }
`;
export const BrandNameH2 = styled.h2`
  font-size: 40px;
  font-weight: bold;
  flex-wrap: nowrap;
  color: ${palette.white};
  text-shadow: 5px 5px 10px ${palette.gold}; //
  @media (max-width: 1240px) {
    font-size: 35px;
  }
  @media (max-width: 850px) {
    font-size: 30px;
  }
  @media (max-width: 650px) {
    font-size: 28px;
  }
  @media (max-width: 550px) {
    font-size: 24px;
  }
  @media (max-width: 505px) {
    display: none;
  }
`;
//END OF DESKTOP VERSION

//MOBILE VERSION
export const MobNavi = styled.nav`
  height: 55px;
  width: 100%;
  margin: auto;
  position: fixed;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  display: none;
  background-color: ${palette.darkBlue}; //
  @media (max-width: 500px) {
    display: flex;
    font-size: 18px;
  }
`;
export const Hamburger = styled(RiMenuFill)`
  height: 50px;
  width: 50px;
  color: ${palette.white};
  margin-right: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
`;
export const MobMenuList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  top: 55px;
  height: 40vh;
  width: 100%;
  padding-bottom: 20px;
  background-color: ${palette.darkBlue};
  z-index: 9;
`;
export const MobMenuItem = styled.li`
  display: inline-block;
`;
export const MobMenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  &:hover {
    font-size: 35px;
    color: ${palette.gold};
  }
`;
//END OF MOBILE VERSION
