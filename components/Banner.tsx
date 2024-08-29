import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Banner = () => {
  return <div className='flex flex-col bg-[#BDCAC5] pb-10 max-md:h-[60vh] max-md:pb-16'>
    <div className='m-auto mt-10 max-sm:px-4'>
      <p className='text-center pt-4 max-sm:text-3xl text-5xl font-bold'>Experience The Bliss Of Living a Moment</p>
      <p className='text-center pt-4 max-sm:text-xl text-4xl font-light text-[#556945]'>In The Lap Of The Majestic Himalayas At <br></br><span className='text-5xl max-sm:text-3xl font-bold'>Panchopachar Wellness Resort</span></p>
    </div>

    <CarouselSpacing></CarouselSpacing>

  </div>
  
}

const CarouselSpacing = () => {
  return (
    <Carousel className="w-[85%] max-md:w-[90%] px-4 m-auto mt-8" orientation='horizontal'>
      <CarouselContent className="-ml-1">
        {BannerImages.map((item) => (
          <CarouselItem key={item.title} className="pl-2 m-0 sm:basis-1/2 lg:basis-1/3">
            
              <Card className='border-none shadow-none p-0 m-0'>
                <CardContent className="flex items-center justify-center p-0 m-0">
                  <Image className='' src={item.title} alt='banner-image' height={100} width={1000}>
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
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage4.avif'}, 
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage5.avif'},
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/BannerImage6.avif'},
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage2.avif'},
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage1.avif'},
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage3.jpg'}
]

export default Banner