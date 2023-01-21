import React from "react";
import { useState, useRef, useEffect } from "react";
import { CarouselsDatabase } from "./carouselsDatabase";
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
  const galleryLength = carousel.preview.length;
  const index = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [carouselId, setCarouselId] = useState(carousel.preview);
  const [carouselImage, setCarouselImage] = useState(carousel.preview[0].image);
  const [carouselName, setCarouselName] = useState(carousel.preview[0].name);
  const [carouselAddition, setCarouselAddition] = useState(
    carousel.preview[0].addition
  );
  /*   useEffect(() => {
    let nextId = CarouselsDatabase.preview[activeIndex].image;
    setCarouselImage(nextImage);
  }, [activeIndex]); */

  useEffect(() => {
    let nextImage = CarouselsDatabase.preview[activeIndex].image;
    setCarouselImage(nextImage);
  }, [activeIndex]);
  useEffect(() => {
    let nextName = CarouselsDatabase.preview[activeIndex].name;
    setCarouselName(nextName);
  }, [activeIndex]);
  useEffect(() => {
    let nextAddition = CarouselsDatabase.preview[activeIndex].addition;
    setCarouselAddition(nextAddition);
  }, [activeIndex]);

  /*   useEffect(() => {
    let nextId = CarouselsDatabase.preview[activeIndex];
    setCarouselId(nextId);
  }, [activeIndex]);
 */
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
      className="CarouselsContainer"
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
      }}
    >
      <CarouselBody>
        {/*         {carouselId.map((item) => { */}
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
          </CarouselTexts>
          <CarouselButton
            name="next image"
            galleryLength={galleryLength}
            onClick={() => {
              handleClick("next");
            }}
          />
        </OthersContainer>
        {/*         })} */}
      </CarouselBody>
    </div>
  );
}
