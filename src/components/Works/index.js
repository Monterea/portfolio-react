import React from "react";
import {
  PageContainer,
  HeaderWhite,
  H2White,
  CaruselsContainer,
} from "./worksStyles";
import CardsContainer from "./cardsContainer";

export default function Works() {
  return (
    <>
      <PageContainer name="works page">
        <HeaderWhite>
          <H2White>Projekty</H2White>
        </HeaderWhite>
        <CardsContainer />
        <CaruselsContainer>vvvvvv</CaruselsContainer>
      </PageContainer>
    </>
  );
}
