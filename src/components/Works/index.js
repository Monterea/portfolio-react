import React from "react";
import { CarouselsContainer } from "./carouselsContainer";
import { PageContainer, HeaderWhite, H2White } from "./worksStyles";
import CardsContainer from "./cardsContainer";

export default function Works() {
  return (
    <>
      <PageContainer name="works page">
        <HeaderWhite>
          <H2White>Projekty</H2White>
        </HeaderWhite>
        <CardsContainer />
        <CarouselsContainer />
      </PageContainer>
    </>
  );
}
