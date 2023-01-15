import React from "react";
import { useState } from "react";
import { ProjectsDatabase } from "./projectsDatabase";
import {
  Card,
  CardMedia,
  CardContent,
  TypographyHeader,
  Typography,
  CardActions,
  Button,
  CardHeader,
} from "./cardsContainerStyles";
export default function CardsContainer() {
  const [projects, setProjects] = useState(ProjectsDatabase);
  return (
    <CardsContainer
      style={{
        width: "90%",
        maxWidth: "1200px",
        minHeight: "100px",
        justifyContent: "center",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {projects.map((project) => (
        <Card key={project.id} name={"project-" + project.id}>
          <CardMedia name={"project-" + project.id + "-image-body"}>
            <img
              name={"project-" + project.id + "-image"}
              src={project.image}
              alt={"project.name"}
              max-width="500px"
            />
          </CardMedia>
          <CardContent>
            <TypographyHeader className="bold">
              <CardHeader className="bold">{project.title}</CardHeader>
            </TypographyHeader>
            <Typography>
              {project.description}
              {project.description1}
              {project.description2}
            </Typography>
          </CardContent>
          <CardActions name={"project-" + project.id + "links"}>
            <Button
              name={"project-" + project.id + "GitHub-link"}
              href={project.gitHub}
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              name={"project-" + project.id + "link"}
              href={project.link}
              target="_blank"
            >
              Aplikace
            </Button>
          </CardActions>
        </Card>
      ))}
    </CardsContainer>
  );
}
