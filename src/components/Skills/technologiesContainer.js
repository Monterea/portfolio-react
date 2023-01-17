import React from "react";
import { useState } from "react";
import { SkillsDatabase } from "./skillsDatabase";
import { Title } from "./skillsStyles";
import { TechnologiesUnit } from "./technologiesUnit";

export default function TechnologiesContainer() {
  const [skills, setSkills] = useState(SkillsDatabase);
  //  const [techStacks, setTechStacks] = useState(SkillsDatabase);
  return (
    <div
      name={"skills list body"}
      className="SkillsBody"
      style={{
        width: "100%",
        minHeight: "800px",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        //padding: "10px",
        backgroundImage:
          "../../assets/pictures/landingPage/landingPageBackgroundLight.jpg",
      }}
    >
      {skills.map((skill) => (
        <div
          name={"technologies list body"}
          className="TechnologiesBody"
          style={{
            width: "auto",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            //   flexWrap: "wrap",
            //padding: "10px",
          }}
        >
          <Title>{skill.title}:</Title>
          <TechnologiesUnit>
            {skill.technologies.map((tech) => (
              <div
                name={"technologies list body"}
                className="TechnologiesBody"
                style={{
                  width: "auto",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  //   flexWrap: "wrap",
                  //padding: "10px",
                }}
              >
                <img
                  name={"project-" + tech.name + "-image"}
                  src={tech.image}
                  alt={"tech.name"}
                  width="100%"
                  height="auto"
                />
              </div>
            ))}
          </TechnologiesUnit>
        </div>
      ))}
    </div>
  );
}
