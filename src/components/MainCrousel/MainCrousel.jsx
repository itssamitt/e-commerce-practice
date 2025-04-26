import React from "react";
import { useEffect } from "react";
import "./MainCrousel.css";
import mainfirst from "../../assets/maincrousel/mainone.webp";
import maintwo from "../../assets/maincrousel/maintwo.webp";
import mainthree from "../../assets/maincrousel/mainthree.webp";
import mainfour from "../../assets/maincrousel/mainfour.webp";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const MainCrousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img loading="lazy" src={mainfirst} />
          </div>
          <div className="embla__slide">
            <img loading="lazy" src={maintwo} />
          </div>
          <div className="embla__slide">
            <img loading="lazy" src={mainthree} />
          </div>
          <div className="embla__slide">
            <img loading="lazy" src={mainfour} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCrousel;
