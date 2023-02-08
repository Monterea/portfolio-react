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
`;
export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  width: 40%;
  justify-content: flex-end;
  align-items: center;
`;
export const MenuItem = styled.li`
  display: inline-block;
  margin-left: 20px;
`;
export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${palette.whiteFull};
  font-size: 25px;
  cursor: pointer;
  @media (max-width: 1240px) {
    font-size: 20px;
  }
  &:hover {
    font-size: 35px;
    color: ${palette.gold};
    @media (max-width: 1240px) {
      font-size: 30px;
    }
  }
`;
export const BrandName = styled.div`
  width: 60%;
  margin-left: 50px;
  @media (max-width: 500px) {
    justify-self: flex-start;
    margin-left: 20px;
  }
`;
export const BrandNameH2 = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: ${palette.white};
  text-shadow: 5px 5px 10px ${palette.gold}; //
  @media (max-width: 1240px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    justify-self: flex-start;
    margin-left: 20px;
  }
`;
//END OF DESKTOP VERSION

//MOBILE VERSION
export const MobNavi = styled.nav`
  height: 70px;
  width: 100%;
  margin: auto;
  position: fixed;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  display: none;
  @media (max-width: 500px) {
    display: flex;
    font-size: 18px;
  }
`;
export const Hamburger = styled(RiMenuFill)`
  height: 50px;
  width: 50px;
  color: ${palette.whiteFull};
  margin-right: 20px;
  cursor: pointer;
`;
export const MobMenuList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  top: 70px;
  height: 100vh;
  width: 100%;
  padding-bottom: 70px;
  background-color: ${palette.almostBlack};
  z-index: 9;
`;
export const MobMenuItem = styled.li`
  display: inline-block;
`;
export const MobMenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
`;
//END OF MOBILE VERSION
