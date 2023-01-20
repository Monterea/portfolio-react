import React from "react";
import { TechnologiesContainer } from "./technologiesContainer";
import { TitleHobbies, TextHobbies } from "../../assets/text/hobbiesText";
import {
  TextDescription,
  TitleJobs,
  Jobs,
  Addendum,
  TitleDescription,
} from "../../assets/text/skillsDescription.js";
import {
  PageContainer,
  DescriptionContainer,
  HobbiesContainer,
  H2,
  P,
  Pwhite,
  H2white,
  Body,
  BodyLi,
  Li,
  Ul,
} from "./skillsStyles";

export default function Skills() {
  // const hobbiesTexts = { HobbiesDescription };
  return (
    <>
      <PageContainer name="skills page">
        <TechnologiesContainer />
        <DescriptionContainer>
          <H2white>{TitleDescription}</H2white>
          <Body>
            {TextDescription.map((paragraph) => (
              <Pwhite>{paragraph}</Pwhite>
            ))}
          </Body>
          <Body>
            <Ul>{TitleJobs}</Ul>
            <BodyLi>
              {Jobs.map((job) => (
                <Li>{job}</Li>
              ))}
            </BodyLi>
            {Addendum.map((paragraph) => (
              <Pwhite>{paragraph}</Pwhite>
            ))}
          </Body>
        </DescriptionContainer>
        <HobbiesContainer>
          <H2 className="cursive">{TitleHobbies}</H2>
          <Body>
            {TextHobbies.map((paragraph) => (
              <P className="cursive">{paragraph}</P>
            ))}
          </Body>
        </HobbiesContainer>
      </PageContainer>
    </>
  );
}
