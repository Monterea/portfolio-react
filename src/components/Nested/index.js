import React from "react";
import { useState } from "react";
import { H4, P, Input, Button } from "./popupStyles";
import Popup from "../Footer/popup";

export default function Nested() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      name={"nested list"}
      className="NestedList"
      style={{
        width: "100%",
        minHeight: "800px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        color: "black",
        //padding: "10px",
        backgroundColor: "white",
      }}
    >
      <Input type="button" value="Click to Open Popup" onClick={togglePopup} />
      <P>ha,ha,haha,ha,haha,ha,haha,ha,ha</P>
      {isOpen && (
        <Popup
          content={
            <>
              <H4>Design your Popup</H4>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </P>
              <Button>Test button</Button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
