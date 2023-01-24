import React from "react";
import { CarouselsDatabase } from "./carouselsDatabase";
import { CarouselComponent } from "./carouselComponent";
import {
  H2,
  H3,
  Pdelineation,
  Row,
  Delineation,
} from "./carouselsContainerStyles";

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
            <CarouselComponent
              carousel={carousel.pictures}
              name={"carousels list"}
              className="CarouselsList"
              style={{
                position: "relative",
                width: "50%",
                maxWidth: "800px",
                height: "auto",
                maxHeight: "800px",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#15104a",
                color: "white",
              }}
            />
            <Delineation>
              <H3 className="bold">{carousel.title}</H3>
              {carousel.descriptions.map((subitem) => {
                return <Pdelineation>{subitem}</Pdelineation>;
              })}
            </Delineation>
          </Row>
        );
      })}
    </div>
  );
}
