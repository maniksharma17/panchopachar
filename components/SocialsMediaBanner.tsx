import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'

export const SocialsMediaBanner = () => {
  return (
    <div className='flex max-md:flex-col flex-row gap-10 max-md:gap-4 bg-blue-200 max-md:mx-2 mx-16 p-10 justify-center items-cente rounded-lg mb-10'>
      <h1 className='raleway-heading-one text-5xl max-md:text-2xl pl-10 max-md:pl-0 text-left max-md:w-full w-1/2'>Connect with us!</h1>
      <SocialMediaLinks></SocialMediaLinks>
    </div>
  )
}
