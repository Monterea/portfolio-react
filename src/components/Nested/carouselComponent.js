import React from "react";
import { useState, useRef, useEffect } from "react";
import CarouselsDatabase from "./carouselsDatabase";
import {
  CarouselBody,
  ImageContainer,
  CarouselButton,
  CarouselAddition,
  CarouselTitle,
  Image,
} from "./carouselContainerStyles";

export default function CarouselComponent({ carousel }) {
  const galleryLength = carousel.preview.length;
  const index = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselImage, setCarouselImage] = useState(carousel.preview.image[0]);

  useEffect(() => {
    let nextImage = CarouselsDatabase.preview.image[activeIndex];
    setCarouselImage(nextImage);
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
      name={"projects list body"}
      className="TechnologiesContainer"
      style={{
        position: "relative",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#15104a",
      }}
    >
      <CarouselBody>
        <ImageContainer>
          <Image
            src={carouselImage}
            alt={carousel.image}
            name={`image-` + carousel.image}
          />
          );
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
        <CarouselTitle>{carousel.name}</CarouselTitle>
        <CarouselAddition>{carousel.addition}</CarouselAddition>
      </CarouselBody>
    </div>
  );
}
