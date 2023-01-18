import React from "react";

export default function Nested() {
  const list = [
    {
      value: "One",
      list: [
        { value: "abc", selected: false },
        { value: "efg", selected: false },
      ],
    },
    { value: "Two", list: [{ value: "psr", selected: false }] },
  ];
  return (
    <div
      name={"nested list"}
      className="NestedList"
      style={{
        width: "100%",
        color: "black",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        display: "flex",
        minHeight: "100px",
        flexDirection: "column",
        //    flexWrap: "wrap",
        padding: "10px",
        backgroundImage:
          "../../assets/pictures/landingPage/landingPageBackgroundLight.jpg",
      }}
    >
      {list.map((item, index) => {
        return (
          <div key={index}>
            <ul>{item.value}</ul>
            {item.list.map((subitem, i) => {
              return (
                <ul>
                  <li>{subitem.value}</li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
