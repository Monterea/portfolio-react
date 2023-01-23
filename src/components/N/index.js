import React from "react";
//import { useParams } from "react-router-dom";
import { useState } from "react";
/* import { CarouselsDatabase } from "./carouselsDatabase";
import { CarouselComponent } from "./carouselComponent2";
import {
  H2,
  H3,
  Pdelineation,
  Row,
  Delineation,
} from "./carouselsContainerStyles"; */
//import { styles } from "./styles";

  const styles = {
    font: {
      size: {
        value: "22",
        unit: "px",
      },
      weight: "bold",
      color: "#663300",
      family: "arial",
      align: "center",
    },
  };

export default function Nested() {
//  const styling = styles;

   const { ...styling } = styles;
   const [style, setStyle] = useState({ styling }); 
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
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="text"
        onChange={(event) => {
          setStyle({
            ...styling,
            font: { ...styling.font, align: event.target.value },
          });
          console.log(style);
        }}
      />
    </div>
  );
}
