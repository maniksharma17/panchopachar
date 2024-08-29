"use client"
import React from 'react'
import Image from 'next/image'
import phone from '../public/phone.svg'
import location from '../public/location-icon.svg'
import mailIcon from "../public/mail-icon.svg"
import ImageCarousel from './Carousel'
import LocationQR from "../public/Location_qrcode.svg"

const Program1 = () => {
  return <div className='flex flex-col bg-gradient-to-r from-indigo-50 to-blue-100 max-lg:gap-10 items-center justify-evenly p-10 max-md:pt-10 max-md:p-4 m-8 max-md:m-2'>

    <div id='program1' className='w-fit flex-col flex gap-6'>
      <div className='flex flex-row max-md:flex-col gap-6 items-end'>
        <Image src={'/images/logo1.jpg'} alt='logo' height={100} width={100}></Image>
        <h1 className='text-5xl max-md:text-2xl font-bold raleway-heading-one text-center'>YOGA TREATMENT MEDITATION RETREAT</h1>
      </div>

      <p className='w-full max-md:pr-0 text-xl text-justify'>This package is a holistic experience combining enjoyment, travel, nature, self-discovery, and health. It offers thrilling adventures and serene moments, blending the excitement of new destinations with the tranquility of nature. Through exploration, participants discover not only the world but also themselves, fostering personal growth and mindfulness. The journey includes wellness activities such as yoga, meditation, and healthy eating, ensuring a balanced mind and body. It&apos;s a chance to disconnect from daily routines, embrace new experiences, and return rejuvenated, with a deeper understanding of oneself and a renewed sense of well-being.
      </p>

      <ImageCarousel></ImageCarousel>


      <div className='grid grid-cols-2 gap-3 w-full'>
          <div className='flex flex-col inter-body bg-opacity-40 bg-gray-50 rounded-lg p-10'>
            <p className='text-xl font-light '>Pack your bags for:</p>
            <p className='text-2xl mb-5 font-bold '>13-16 September</p>
            
            <ul className='text-3xl list-disc ml-3'>
              <li>2 Nights 3 Days</li>
              <li>3 Nights 4 Days</li>
            </ul>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='text-lg p-8 flex flex-row justify-between gap-2 font-light bg-opacity-40 bg-gray-50 rounded-lg'>
              <div className='flex flex-row gap-4 items-center'>
                <Image className='mb-1' src={location} alt='phone' height={20} width={20}></Image> 
                <a target='_blank' href="https://maps.app.goo.gl/TAGbF2Woqq8HyEEw5" className='text-xl'>Panchopachar Wellness Resort,<br></br>Jadipani, Kanatal, Tehri Garhwal, Uttarakhand</a>
              </div>
              <div>
                <Image src={'https://panchopachar.s3.ap-south-1.amazonaws.com/locationQR.jpeg'} alt='qr_code' width={100} height={100}></Image>
              </div>
            </div>

            <div className='text-lg font-light bg-opacity-40 bg-gray-50 rounded-lg px-4 py-2 inter-body'>
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

            <div className='flex flex-row gap-6 text-xl font-light bg-opacity-40 bg-gray-50 rounded-lg px-4 py-2'>
              <Image src={mailIcon} alt='mail' height={20} width={20}></Image>
              <a href="mailto:panchopachar@gmail.com" className="text-gray-700 transition hover:opacity-75"> panchopachar@gmail.com </a>
            </div>

          </div>
        </div>
    </div>

    
  </div>
  
}

export default Program1