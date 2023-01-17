import React from "react";
import { PageContainer } from "./skillsStyles";
import { HobbiesContainer } from "./hobbiesContainer";
import { TechnologiesContainer } from "./technologiesContainer";
import { DescriptionContainer } from "./descriptionContainer";

export default function Skills() {
  return (
    <PageContainer name="skills page">
      <TechnologiesContainer />
      <DescriptionContainer />
      <HobbiesContainer />
    </PageContainer>
  );
}
