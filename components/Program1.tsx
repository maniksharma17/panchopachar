"use client"
import React from 'react'
import Image from 'next/image'
import phone from '../public/phone.svg'
import location from '../public/location-icon.svg'
import mailIcon from "../public/mail-icon.svg"
import ImageCarousel from './Carousel'

const Program1 = () => {
  return <div className='flex flex-col max-lg:gap-4 items-center justify-evenly max-md:p-2 mx-8 my-4 max-md:m-2'>

    <div id='program1' className='bg-green-950 p-10 max-md:p-4 rounded-xl text-white flex-col flex gap-6'>
      <div className='flex flex-row max-md:flex-col gap-6 items-center max-md:items-center'>
        <Image src={'/logo3.png'} alt='logo' height={150} width={150}></Image>
        <h1 className='text-5xl max-md:text-3xl font-bold raleway-heading-one text-center'>YOGA TREATMENT MEDITATION RETREAT</h1>
      </div>

      <p className='w-full max-md:pr-0 text-xl max-md:text-lg text-justify'>This package is a holistic experience combining enjoyment, travel, nature, self-discovery, and health. It offers thrilling adventures and serene moments, blending the excitement of new destinations with the tranquility of nature. Through exploration, participants discover not only the world but also themselves, fostering personal growth and mindfulness. The journey includes wellness activities such as yoga, meditation, and healthy eating, ensuring a balanced mind and body. It&apos;s a chance to disconnect from daily routines, embrace new experiences, and return rejuvenated, with a deeper understanding of oneself and a renewed sense of well-being.
      </p>

      <ImageCarousel></ImageCarousel>
    </div>

    <div className='mt-2 w-full text-white rounded-xl bg-red-800'>
        <div className='flex flex-col inter-body items-center text-left gap-4 hover:text-white p-10'>
          <p className='text-5xl max-md:text-3xl font-light text-white'>Pack your bags for:<br></br><br></br><span className='text-white font-bold'>13-16 September</span></p>
          
          <ul className='text-4xl max-md:text-2xl list-disc font-semibold'>
            <li>2 Nights 3 Days</li>
            <li>3 Nights 4 Days</li>
          </ul>
          
        </div>
      </div>

      <div className='flex mt-2 max-md:flex-col flex-row w-full justify-between gap-2'>
        <div className='text-lg p-8 flex max-md:flex-col w-full flex-col justify-between gap-2  rounded-xl font-light bg-gray-200 bg-opacity-80'>
          <h1 className='raleway-heading-two underline text-xl'>Location:</h1>
          <div className='flex flex-row max-md:flex-col max-md:gap-4 justify-between items-center'>
            <div className='flex flex-row max-md:flex-col gap-4 items-start max-md:items-center'>
              <Image className='mb-1' src={location} alt='phone' height={20} width={20}></Image> 
              <a target='_blank' href="https://maps.app.goo.gl/TAGbF2Woqq8HyEEw5" className='text-2xl max-md:text-xl inter-body'>Panchopachar Wellness Resort,<br></br>Jadipani, Kanatal, Tehri Garhwal,<br></br> Uttarakhand</a>
            </div>
            <div>
              <Image src={'https://panchopachar.s3.ap-south-1.amazonaws.com/locationQR.jpeg'} alt='qr_code' width={200} height={200}></Image>
            </div>
          </div>
        </div>

        <div className='flex text-2xl max-md:text-xl flex-col gap-8 font-light rounded-xl bg-gray-200 w-full bg-opacity-80 p-8 inter-body'>
          <h1 className='raleway-heading-two underline text-xl'>Contact us:</h1>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-4'>
              <Image src={phone} alt='phone' height={20} width={20}></Image> 
              <a href="tel:9669598478">9669598478</a>
            </div>
            <div className='flex flex-row gap-4'>
              <Image src={phone} alt='phone' height={20} width={20}></Image> 
              <a href="tel:9971236534">9971236534</a>
            </div>
            <div className='flex flex-row gap-4'>
              <Image src={phone} alt='phone' height={20} width={20}></Image> 
              <a href="tel:9953754105">9953754105</a>
            </div>
            <div className='flex flex-row gap-4 w-full items-center font-light'>
              <Image src={mailIcon} alt='mail' height={24} width={24}></Image>
              <a href="mailto:panchopachar@gmail.com">panchopachar@gmail.com </a>
            </div>
          </div>
        </div>
    </div>
</div>
}

export default Program1