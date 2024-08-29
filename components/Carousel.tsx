import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const ImageCarousel = () => {
  return (
    <Carousel className="w-[96%] max-md:w-[90%] m-auto mt-8" orientation='horizontal'>
      <CarouselContent className="-ml-1">
        {BannerImages.map((item) => (
          <CarouselItem key={item.title} className="pl-1 items-center m-1 sm:basis-1/2 lg:basis-1/3">
            
              <Card className='border-none'>
                <CardContent className="flex items-center justify-center p-0">
                  <Image className='rounded' src={item.title} alt='banner-image' height={100} width={1000}>
                  </Image>
                </CardContent>
              </Card>
           
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const BannerImages = [
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage1.jpeg'}, 
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage4.avif'},
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage3.jpg'},
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage2.jpeg'},
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage5.jpeg'},
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage6.jpeg'},
]


export default ImageCarousel