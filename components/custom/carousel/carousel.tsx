import React from 'react'

import Cards from '@/components/custom/card/card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const carousel = () => {
  return (
    <div>
      
      <Carousel
      
      opts={{
        align: "start",
        loop: true,
      }}      
      
      >
        <CarouselContent>
        <CarouselItem className="basis-1/3">
            <Cards />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Cards />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Cards />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Cards />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Cards />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

export default carousel