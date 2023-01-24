import React from "react";
/* import {
  H2,
  H3,
  Pdelineation,
  Row,
  Delineation,
  CarouselComponent,
} from "./carouselsContainerStyles"; */

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
    ></div>
  );
}
