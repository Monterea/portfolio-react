import React from "react";
import { CarouselsDatabase } from "./carouselsDatabase";
import { CarouselComponent } from "./carouselComponent";
import { H2, H3, Pleft } from "../../App.mainStyles";
import { Row, Delineation, Carousels } from "./carouselsContainerStyles";

export function CarouselsContainer() {
  return (
    <div
      name={"carousels list"}
      className="CarouselsList"
      style={{
        width: "100%",
        color: "black",
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        //   flexWrap: "wrap",
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "white",
      }}
    >
      <H2 className="bold">Grafika</H2>
      {CarouselsDatabase.map((carousel, index) => {
        return (
          <Row key={index}>
            <Carousels>
              <CarouselComponent
                carousel={carousel.pictures}
                name={"carousels list"}
                className="CarouselsList"
              />
            </Carousels>
            <Delineation>
              <H3>{carousel.title}</H3>
              {carousel.descriptions.map((subitem) => {
                return <Pleft>{subitem}</Pleft>;
              })}
            </Delineation>
          </Row>
        );
      })}
    </div>
  );
}
