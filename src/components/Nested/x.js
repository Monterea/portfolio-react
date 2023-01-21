import React from "react";
import { CarouselsDatabase } from "./carouselsDatabase";
import { CarouselComponent } from "./carouselComponent";
import {
  H2,
  H3,
  Pdelineation,
  Row,
  Delineation,
  //  Carousel,
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
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "white",
      }}
    >
      <H2 className="bold">Grafika</H2>
      {CarouselsDatabase.map((item, index) => {
        return (
          <Row key={index}>
            {/*  <Carousel />*/}
            <CarouselComponent carousel={item} />

            <Delineation>
              <H3 className="bold">{item.title}</H3>
              {item.descriptions.map((subitem) => {
                return <Pdelineation>{subitem}</Pdelineation>;
              })}
            </Delineation>
          </Row>
        );
      })}
    </div>
  );
}
