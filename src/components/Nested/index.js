import React from "react";
//import { useParams } from "react-router-dom";
import Carousels from "./carouselsDatabase";
//import { CarouselComponent } from "./carouselComponent";
import {
  H2,
  H3,
  Pdelineation,
  Row,
  Delineation,
  Carousel,
} from "./carouselContainerStyles";

export default function Nested() {
  // const { id } = useParams();
  //  const carousel = CarouselsDatabase[id - 1];

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
      {Carousels.map((item, index) => {
        return (
          <Row key={index}>
            <Carousel />
            {/*   <CarouselComponent project={carousel} /> */}

            <Delineation>
              <H3 className="bold">{item.title}</H3>
              {item.descriptions.map((subitem, i) => {
                return <Pdelineation>{subitem}</Pdelineation>;
              })}
            </Delineation>
          </Row>
        );
      })}
    </div>
  );
}
