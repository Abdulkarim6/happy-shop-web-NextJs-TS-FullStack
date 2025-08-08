"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import _1stSlide from "@/bannerImages/1stSlide.webp";
import _2ndSlide from "@/bannerImages/2ndSlide.webp";
import _3rdSlide from "@/bannerImages/3rdSlide.webp";
import _4thSlide from "@/bannerImages/4thSlide.webp";
import _5thSlide from "@/bannerImages/5thSlide.webp";
import _6thSlide from "@/bannerImages/6thSlide.webp";

const images = [ _1stSlide, _2ndSlide, _3rdSlide, _4thSlide, _5thSlide, _6thSlide, ];

const Banner = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1700,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className=""
    >
      <CarouselContent className="">
        {images?.map((image, i) => (
          <CarouselItem key={i}>
            <Image
              src={image}
              alt="Picture of the author"
              // width={900} //automatically provided
              // height={600} //automatically provided
              placeholder="blur" // Optional blur-up while loading
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious iconSize="size-8 md:size-10 lg:size-14" iconPosition="left-1 lg:left-2" />
      <CarouselNext iconSize="size-8 md:size-10 lg:size-14" iconPosition="right-1 lg:right-2" />
    </Carousel>
  );
};

export default Banner;
