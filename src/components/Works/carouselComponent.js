import React from "react";
import { useState, useRef, useEffect } from "react";

import {
  CarouselBody,
  ImageContainer,
  CarouselButton,
  CarouselTexts,
  CarouselTitle,
  CarouselAddition,
  Image,
  OthersContainer,
} from "./carouselComponentStyles";

export function CarouselComponent({ carousel }) {
  const galleryLength = carousel.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselImage, setCarouselImage] = useState(carousel[0].image);
  const [carouselName, setCarouselName] = useState(carousel[0].name);
  const [carouselAddition, setCarouselAddition] = useState(
    carousel[0].addition
  );
  const [carouselAddition1, setCarouselAddition1] = useState(
    carousel[0].addition1
  );
  const index = useRef(0);

  useEffect(() => {
    let nextImage = carousel[activeIndex].image;
    let nextName = carousel[activeIndex].name;
    let nextAddition = carousel[activeIndex].addition;
    let nextAddition1 = carousel[activeIndex].addition1;
    setCarouselImage(nextImage);
    setCarouselName(nextName);
    setCarouselAddition(nextAddition);
    setCarouselAddition1(nextAddition1);
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
      name={"Carousels list body"}
      className="CarouselsComponent"
      style={{
        position: "relative",
        width: "50%",
        maxWidth: "800px",
        height: "auto",
        maxHeight: "800px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#15104a",
        color: "white",
      }}
    >
      <CarouselBody>
        <ImageContainer>
          <Image
            src={carouselImage}
            alt={carouselImage}
            name={`image-` + carouselImage}
          />
        </ImageContainer>
        <OthersContainer>
          <CarouselButton
            name="prev image"
            galleryLength={galleryLength}
            onClick={() => {
              handleClick("prev");
            }}
          />
          <CarouselTexts>
            <CarouselTitle className="bold">{carouselName}</CarouselTitle>
            <CarouselAddition>{carouselAddition}</CarouselAddition>
            <CarouselAddition>{carouselAddition1}</CarouselAddition>
          </CarouselTexts>
          <CarouselButton
            name="next image"
            galleryLength={galleryLength}
            onClick={() => {
              handleClick("next");
            }}
          />
        </OthersContainer>
      </CarouselBody>
    </div>
  );
}
