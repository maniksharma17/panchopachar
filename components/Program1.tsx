"use client"
import React from 'react'
import Image from 'next/image'
import phone from '../public/phone.svg'
import location from '../public/location-icon.svg'
import mailIcon from "../public/mail-icon.svg"
import ImageCarousel from './Carousel'

const Program1 = () => {
  return <div className='flex flex-col max-lg:gap-4 items-center justify-evenly max-md:p-2 m-8 max-md:m-2'>

    <div id='program1' className='bg-green-950 p-10 max-md:p-4 text-white flex-col flex gap-6'>
      <div className='flex flex-row max-md:flex-col gap-6 items-end max-md:items-center'>
        <Image src={'/images/logo1.jpg'} alt='logo' height={100} width={100}></Image>
        <h1 className='text-5xl max-md:text-3xl font-bold raleway-heading-one text-center'>YOGA TREATMENT MEDITATION RETREAT</h1>
      </div>

      <p className='w-full max-md:pr-0 text-xl max-md:text-lg text-justify'>This package is a holistic experience combining enjoyment, travel, nature, self-discovery, and health. It offers thrilling adventures and serene moments, blending the excitement of new destinations with the tranquility of nature. Through exploration, participants discover not only the world but also themselves, fostering personal growth and mindfulness. The journey includes wellness activities such as yoga, meditation, and healthy eating, ensuring a balanced mind and body. It&apos;s a chance to disconnect from daily routines, embrace new experiences, and return rejuvenated, with a deeper understanding of oneself and a renewed sense of well-being.
      </p>

      <ImageCarousel></ImageCarousel>
    </div>

    <div className='mt-2 w-full text-black'>
        <div className='flex flex-col inter-body bg-gray-200 bg-opacity-50 p-10'>
          <p className='text-xl font-light '>Pack your bags for:</p>
          <p className='text-2xl font-bold '>13-16 September</p>
          
          <ul className='text-3xl list-disc ml-3'>
            <li>2 Nights 3 Days</li>
            <li>3 Nights 4 Days</li>
          </ul>
          
        </div>
      </div>

      <div className='flex mt-2 max-md:flex-col flex-row w-full justify-between gap-2'>
        <div className='text-lg p-8 flex max-md:flex-col w-full flex-row justify-between gap-2 font-light bg-gray-200 bg-opacity-50'>
          <div className='flex flex-row max-md:flex-col gap-4 items-start'>
            <Image className='mb-1' src={location} alt='phone' height={20} width={20}></Image> 
            <a target='_blank' href="https://maps.app.goo.gl/TAGbF2Woqq8HyEEw5" className='text-xl'>Panchopachar Wellness Resort,<br></br>Jadipani, Kanatal, Tehri Garhwal, Uttarakhand</a>
          </div>
          <div>
            <Image src={'https://panchopachar.s3.ap-south-1.amazonaws.com/locationQR.jpeg'} alt='qr_code' width={100} height={100}></Image>
          </div>
        </div>

        <div className='text-xl font-light bg-gray-200 w-full bg-opacity-50 p-8 inter-body'>
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
        </div>

        <div className='flex flex-row gap-4 p-8 text-xl w-full items-center font-light bg-gray-200 bg-opacity-50 px-4 py-2'>
          <Image src={mailIcon} alt='mail' height={24} width={24}></Image>
          <a href="mailto:panchopachar@gmail.com"> panchopachar@gmail.com </a>
        </div>
    </div>
</div>
}

export default Program1