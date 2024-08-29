import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'

export const SocialsMediaBanner = () => {
  return (
    <div className='flex max-md:flex-col flex-row gap-10 max-md: max-md:gap-4 max-md:mx-2 justify-center items-center rounded-lg mb-10'>
      <SocialMediaLinks></SocialMediaLinks>
    </div>
  )
}
