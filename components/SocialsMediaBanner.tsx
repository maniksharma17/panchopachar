import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'

export const SocialsMediaBanner = () => {
  return (
    <div className='flex flex-row gap-10 bg-blue-200 mx-16 p-10 justify-center items-cente rounded-lg mb-10'>
      <h1 className='raleway-heading-one text-5xl pl-10 text-left w-1/2'>Connect with us!</h1>
      <SocialMediaLinks></SocialMediaLinks>
    </div>
  )
}
