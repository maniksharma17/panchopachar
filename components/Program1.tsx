"use client"
import React from 'react'
import Image from 'next/image'
import phone from '../public/phone.svg'
import location from '../public/location-icon.svg'

const Program1 = () => {
  return <div className='flex flex-row max-md:flex-col max-lg:gap-10 items-center justify-evenly p-10 max-md:pt-10 max-md:p-4 bg-[#eee9df] m-8 max-md:m-2'>

    <div id='program1' className='w-fit flex-col flex gap-6'>
      <div className='flex flex-row max-md:flex-col gap-6 items-center'>
        <Image src={'/images/logo1.jpg'} alt='logo' height={100} width={100}></Image>
        <h1 className='text-3xl max-md:text-2xl font-bold raleway-heading-one w-fit'>Yoga Treatment Meditation Retreat</h1>
      </div>

      <p className='pr-10 max-md:pr-0 text-lg text-justify'>This package is a holistic experience combining enjoyment, travel, nature, self-discovery, and health. It offers thrilling adventures and serene moments, blending the excitement of new destinations with the tranquility of nature. Through exploration, participants discover not only the world but also themselves, fostering personal growth and mindfulness. The journey includes wellness activities such as yoga, meditation, and healthy eating, ensuring a balanced mind and body. It&apos;s a chance to disconnect from daily routines, embrace new experiences, and return rejuvenated, with a deeper understanding of oneself and a renewed sense of well-being.
      </p>

      <div className='flex flex-row max-md:flex-col gap-4'>
          <div className='flex flex-col mt-5 raleway-heading-two border border-black p-10'>
            <p className='text-xl'>Pack your bags for:</p>
            <p className='text-2xl mb-5'>13-16 September</p>
            
            <ul className='text-2xl list-disc ml-3'>
              <li>2 Nights 3 Days</li>
              <li>3 Nights 4 Days</li>
            </ul>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='bg-black max-md:text-sm cursor-pointer raleway-heading-two text-white h-10 mt-5 px-4 py-2 text-xl'>
              <a>Register Now</a>
            </div>

            <div className='text-lg font-light border border-black px-4 py-2 digit-font'>
              <Image className='mr-2 inline' src={phone} alt='phone' height={20} width={20}></Image> <a href="tel:9669598478">9669598478</a>
            </div>

            <div className='text-lg font-thin border border-black px-4 py-2'>
              <Image className='mb-1' src={location} alt='phone' height={20} width={20}></Image> <a href="https://maps.app.goo.gl/TAGbF2Woqq8HyEEw5">Panchopachar Wellness Resort,<br></br>Jadipani, Kanatal, Tehri Garhwal<br></br>Uttarakhand</a>
            </div>
          </div>
          

        </div>
      
    </div>

    <div className='grid grid-cols-2 max-lg:grid-cols-1 h-fit items-center gap-5'>
      {GridImages.map(item => {
        return <Image key={item.title} src={item.title} alt='image' height={500} width={500}></Image>
      })}
    </div>

  </div>
  
}

const GridImages = [
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage4.avif'}, 
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage5.avif'},
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage1.avif'},
  {title:'https://panchopachar.s3.ap-south-1.amazonaws.com/bannerImage3.jpg'},
]
export default Program1