"use client"
import { Product } from '@/app/utils/interfaces';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewArrivalsClient = ({arrivalsProducts}:{arrivalsProducts: Product[]}) => {
    return (
        <Carousel className="w-full px-8 md:px-12"
         plugins={[
         Autoplay({
          delay: 1800, stopOnInteraction: false, stopOnMouseEnter: true,
        }),
      ]}
      opts={{
        align: "start", loop: true, containScroll: "trimSnaps",
      }}
        >
          <CarouselContent className="">
            {arrivalsProducts?.map((product, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
                <div className="p-0">
                  <Card className="p-0 rounded-none">
                    <CardContent className="flex aspect-3/2 items-center justify-center p-1">
                      <Image
                        src={product?.image}
                        alt="Picture of the author" width={450} height={550}
                        className=" hover:scale-105 transition-transform opacity-90"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious iconPosition="left-0.5 lg:left-1" className="bg-transparent"
            icon={<ChevronLeft className="size-6 md:size-8 text-red-500" />} 
          />
          <CarouselNext iconPosition="right-0.5 lg:right-1" className="bg-transparent"
            icon={<ChevronRight className="size-6 md:size-8 text-red-500" />}
          />
        </Carousel>
    );
};

export default NewArrivalsClient;