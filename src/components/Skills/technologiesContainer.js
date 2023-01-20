import React from "react";
import {
  H2,
  TechnologiesBody,
  TechnologiesUnit,
  TechUnit,
} from "./technologiesContainerStyles";
import { SkillsDatabase } from "../Skills/skillsDatabase";

export /* default */ function TechnologiesContainer() {
  return (
    <div
      name={"projects list body"}
      className="TechnologiesContainer"
      style={{
        position: "relative",
        paddingTop: "50px",
        paddingBottom: "50px",
        width: "100%",
        backgroundImage:
          "../../assets/pictures/landingPage/landingPageBackgroundLight.jpg",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <H2>Technologie</H2>
      <TechnologiesBody>
        {SkillsDatabase.map((item, index) => {
          return (
            <TechnologiesUnit key={index}>
              <ul
                className="bold"
                style={{
                  color: "black",
                  fontSize: "30px",
                  fontWeight: "bolder",
                  fontStyle: "inherit",
                  paddingBottom: "20px",
                  textShadow: "5px 5px 10px white",
                }}
              >
                {item.title}
              </ul>
              {item.technologies.map((subitem, i) => {
                return (
                  <ul>
                    <li
                      style={{
                        listStyleType: "none",
                        paddingBottom: "10px",
                        alignItems: "center",
                      }}
                    >
                      <TechUnit>
                        <img
                          name={"project-" + subitem.name + "-image"}
                          src={subitem.image}
                          alt={subitem.name}
                          width="80px"
                          // max-height="100%"
                        />
                      </TechUnit>
                    </li>
                  </ul>
                );
              })}
            </TechnologiesUnit>
          );
        })}
      </TechnologiesBody>
    </div>
  );
}
