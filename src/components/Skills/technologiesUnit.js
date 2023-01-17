/* import React from "react";
import { useState } from "react";
import { SkillsDatabase } from "./skillsDatabase";
import { Title } from "./techContainerStyles";

export default function TechnologiesUnit() {
  const [techStacks, setTechStacks] = useState(SkillsDatabase);
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
        <>
          <Title>{skill.title}:</Title>
          <TechnologiesUnit>
            {skill.technologies.map((tech) => (
              <>
                <Unit>
                  <img
                    name={"project-" + tech.name + "-image"}
                    src={tech.image}
                    alt={"tech.name"}
                    width="100%"
                    height="auto"
                  />
                </Unit>
              </>
            ))}
          </TechnologiesUnit>
        </>
      ))}
    </div>
  );
}
 */
