import React from "react";
import {
  PageContainer,
  HobbiesContainer,
  H2,
  P,
  DescriptionContainer,
  TechnologiesContainer,
  TechnologiesBody,
  TechnologiesUnit,
  TechUnit,
} from "./skillsStyles";
//import { TechnologiesContainer } from "../Skills/technologiesContainer";
import { SkillsDatabase } from "../Skills/skillsDatabase";
//import { HobbiesDescription } from "../../../public/textFiles/hobbiesText.txt";

export default function Skills() {
  // const hobbiesTexts = { HobbiesDescription };
  return (
    <>
      <PageContainer name="skills page">
        <TechnologiesContainer>
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
                      fontWeight: "bold",
                      paddingBottom: "20px",
                      //         paddingTop: "20px",
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
        </TechnologiesContainer>
        <DescriptionContainer>.....</DescriptionContainer>
        <HobbiesContainer>
          <H2>Koníčky</H2>

          <P>
            Tak jako jsem velmi komplexní člověk, tak i mé koníčky jsou
            různorodé.
          </P>
          <P>
            Bylo by prazvláštní neříci, že nyní je mým hlavním koníčkem čas
            trávený se svými dětmi. Tato životní role je nyní v mém životě
            stěžejní, ale jsem typ člověka, který potřebuje svůj životní rytmus
            vyvažovat a doplňovat vzděláváním, pohybem a kreativní tvorbou.
          </P>
          <P>
            V oblasti vzdělávání jsou to témata: programování a počítačový
            design, zdravý životní styl, čínská medicína, psychologie a
            technická a technologická tématika (fungování strojů, řešení
            náročných staveb).
          </P>
          <P>
            Pohybová složka mého života nyní prochází přerodem. I když budu mít
            capoeiru v srdci už napořád, nyní spíše tíhnu k józe, čchi-kungu.
            Vždy budu preferovat hlavně kolektivní a kontaktní sporty a protože
            mám ráda občasné změny stereotypu ráda nasednu na kolo a nebo
            vyrazím do přírody.
          </P>
          <P>
            Mou tvořivou část života vyplňuji velkometrážními malbami na zeď,
            vyráběním ozdob a lapačů snů, ale hlavně znovupoužití a přeměny
            starých věcí.
          </P>
        </HobbiesContainer>
      </PageContainer>
    </>
  );
}
