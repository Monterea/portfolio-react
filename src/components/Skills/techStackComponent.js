import React from "react";
import { useState } from "react";
import { SkillsDatabase } from "./skillsDatabase";
import { Title } from "./techStackComponentStyles";

export default function TechStackComponent() {
  const [skills, setSkills] = useState(SkillsDatabase);
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
        <Title>{skill.title}:</Title>
      ))}
      {/* <CardMedia name={"project-" + project.id + "-image-body"}>
            <img
              name={"project-" + project.id + "-image"}
              src={project.image}
              alt={"project.name"}
              width="100%"
              height="auto"
            />
          </CardMedia>
          <CardContent name={"project-" + project.id + "descriptions"}>
            <TypographyHeader className="bold">
              <CardHeader className="bold">{project.title}</CardHeader>
            </TypographyHeader>
            <Typography>
              <P>{project.description}</P>
              <P>{project.description1}</P>
              <P>{project.description2}</P>
              <T>{project.technology}</T>
            </Typography>
          </CardContent>
          <CardActions name={"project-" + project.id + "links"}>
            {project.gitHub && (
              <Button
                name={"project-" + project.id + "GitHub-link"}
                href={project.gitHub}
                target="_blank"
              >
                GitHub
              </Button>
            )}
            {project.link && (
              <Button
                name={"project-" + project.id + "link"}
                href={project.link}
                target="_blank"
              >
                Aplikace
              </Button>
            )}
          </CardActions>
        </Card> */}
    </div>
  );
}
