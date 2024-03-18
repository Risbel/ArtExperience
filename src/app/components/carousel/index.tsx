import Image from "next/image";
import React from "react";
import { useCarouselBrands } from "./useCarouselBrands";

const LogoCarousel = () => {
  const carouselBrands = useCarouselBrands();

  return (
    <div className="bg-secondary w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)]">
      <ul className="flex items-center space-x-0 lg:space-x-16 animate-loop-scroll px-0 lg:px-8 [&_li]:mx-8 [&_img]:max-w-none">
        {carouselBrands.map((item, i) => {
          return (
            <li key={i}>
              <Image
                className="scale-75 md:scale-100"
                src={item.imageUrl}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            </li>
          );
        })}
      </ul>
      <ul
        className="flex items-center space-x-0 lg:space-x-16 animate-loop-scroll px-0 lg:px-8 [&_li]:mx-8 [&_img]:max-w-none"
        aria-hidden="true"
      >
        {carouselBrands.map((item, i) => {
          return (
            <li key={i}>
              <Image
                className="scale-75 md:scale-100"
                src={item.imageUrl}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LogoCarousel;
