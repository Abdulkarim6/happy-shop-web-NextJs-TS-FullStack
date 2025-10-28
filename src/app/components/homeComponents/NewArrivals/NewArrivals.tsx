"use client"
import { Product } from "@/app/utils/interfaces";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewArrivals = () => {
      const [arrivalsProducts, setArrivlsProducts] = useState<Product[]>([]);
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      useEffect(() =>{
        fetch(`${baseUrl}/api/getNewArrivals`, {cache:"force-cache"})
        .then(res => res.json())
        .then(data => setArrivlsProducts(data))
      },[])
      // console.log(arrivalsProducts);

    return (
         <section className="w-full flex flex-col justify-center items-center my-5 md:my-10">
         <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold`}>-New Arrivals-</h2>

        <Carousel className="w-full px-8 md:px-12 mt-3 md:mt-5"
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
                    <CardContent className="flex aspect-square items-center justify-center p-1">
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
    </section>
    );
};

export default NewArrivals;