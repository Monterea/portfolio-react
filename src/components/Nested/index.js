import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  H2,
  H3,
  Pdelineation,
  Row,
  Carousel,
  Delineation,
  CarouselBody,
} from "./carouselContainerStyles";

export default function Nested() {
  const galleryLength = project.image.length;
  const index = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectImage, setProjectImage] = useState(project.image[0]);

  useEffect(() => {
    let nextImage = project.image[activeIndex];
    setProjectImage(nextImage);
  }, [activeIndex]);

  const handleClick = (step) => {
    if (step === "prev" && index.current > 0) {
      index.current--;
    } else if (step === "prev" && index.current === 0) {
      index.current = galleryLength - 1;
    } else if (step === "next" && index.current < galleryLength - 1) {
      index.current++;
    } else if (step === "next" && index.current === galleryLength - 1) {
      index.current = 0;
    }
    setActiveIndex(index.current);
  };

  return (
    <div
      name={"nested list"}
      className="NestedList"
      style={{
        width: "100%",
        color: "black",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "white",
      }}
    >
      <H2 className="bold">Grafika</H2>
      <Row>
        <Carousel>
          <CarouselBody>
            <ImageContainer>
              <Image
                src={projectImage}
                alt={project.description}
                name={`image-` + project.description}
              />
            </ImageContainer>
            <CarouselButton
              name="prev image"
              galleryLength={galleryLength}
              onClick={() => {
                handleClick("prev");
              }}
            />
            <CarouselButton
              name="next image"
              galleryLength={galleryLength}
              onClick={() => {
                handleClick("next");
              }}
            />
          </CarouselBody>
        </Carousel>
        <Delineation>
          <H3 className="bold">Grafika</H3>
          <Pdelineation>
            Grafická tvorba využívající průhlednosti a&nbsp;vrstev.
          </Pdelineation>
          <Pdelineation>Použité programy a nástroje:</Pdelineation>
          <Pdelineation>
            GIMP - rastrový grafický editor, který se&nbsp;používá
            se&nbsp;zejména pro&nbsp;retušování a&nbsp;úpravy obrázků,
            fotografií, kreslení rukou, převod mezi různými formáty obrázků,
            tvorbu webové grafiky a&nbsp;specializovanější práce. Photopea -
            software na&nbsp;úpravu a&nbsp;zpracování rastrových
            a&nbsp;vektorových obrázků od&nbsp;českého vývojáře Ivana Kuckira.
          </Pdelineation>
          <Pdelineation>
            Inkscape - nástroj na&nbsp;tvorbu a&nbsp;úpravu vektorové grafiky.
          </Pdelineation>
          <Pdelineation>
            Zoner Callisto - vektorový grafický editor.
          </Pdelineation>
        </Delineation>
      </Row>
    </div>
  );
}
