import React from "react";
//import { useParams } from "react-router-dom";
//import { useState } from "react";
import { CarouselsDatabase } from "./carouselsDatabase";
import { CarouselComponent } from "./carouselComponent";
import {
  H2,
  H3,
  Pdelineation,
  Row,
  Delineation,
} from "./carouselsContainerStyles";

export default function Nested() {
  return (
    <div
      name={"nested list"}
      className="NestedList"
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
            <CarouselComponent carousel={carousel.pictures} />
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
