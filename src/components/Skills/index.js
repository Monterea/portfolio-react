import React from "react";
import {
  PageContainer,
  HobbiesContainer,
  H2,
  P,
  DescriptionContainer,
} from "./skillsStyles";
import { TechnologiesContainer } from "./technologiesContainer";
//import { HobbiesDescription } from "../../../public/textFiles/hobbiesText.txt";

export default function Skills() {
  // const hobbiesTexts = { HobbiesDescription };
  return (
    <>
      <PageContainer name="skills page">
        <TechnologiesContainer />
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
