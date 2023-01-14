import styled from "styled-components";
import * as palette from "../../App.mainStyles";

export const FooterContainer = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${palette.darkBlue};
`;
export const FooterBody = styled.div`
  display: grid;
  gap: 20px;
  width: 95%;
  max-width: 1700px;
  padding: 20px 0;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "a b c";
  @media (max-width: 500px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "a"
      "b"
      "c";
  }
`;
export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  color: ${palette.almostBlack};
  text-align: left;
  justify-content: center;
  @media (max-width: 500px) {
    padding-bottom: 20px;
  }
  &:nth-child(1) {
    text-align: left;
    grid-area: a;
    @media (max-width: 500px) {
      text-align: center;
      border-bottom: 1px solid ${palette.white};
    }
  }
  &:nth-child(2) {
    text-align: center;
    grid-area: b;
    @media (max-width: 500px) {
      text-align: center;
      border-bottom: 1px solid ${palette.whiteFull};
    }
  }
  &:nth-child(3) {
    display: flex;
    gap: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    justify-items: flex-end;
    grid-area: c;
    @media (max-width: 500px) {
      text-align: center;
    }
  }
`;
export const H1 = styled.h1`
  color: ${palette.whiteFull};
  font-size: 20px;
`;
export const B = styled.b`
  color: ${palette.whiteFull};
  font-size: 16px;
`;
export const P = styled.p`
  color: ${palette.whiteFull};
  font-size: 16px;
`;
export const NewTabLink = styled.a`
  color: ${palette.whiteFull};
  font-size: 13px;
  text-decoration: underline;
`;
