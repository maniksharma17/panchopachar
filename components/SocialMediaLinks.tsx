import React from 'react'
import whatsappIcon from "../public/whatsapp-icon.svg"
import instagramIcon from "../public/instagram-icon.svg"
import facebookIcon from "../public/facebook-icon.svg"
import mailIcon from "../public/mail-icon.svg"
import phoneIcon from "../public/phone.svg"
import Image from 'next/image'

const SocialMediaLinks = () => {
  return (
    <ul className='flex flex-row gap-8 top-0 z-50'>
        <li>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=9669598478&text=Hello&type=phone_number&app_absent=0'>
          <Image src={whatsappIcon} alt='whatsapp-icon' height={48} width={48}
          ></Image>
          </a>
        </li>

        <li>
          <a target='_blank' href='https://www.instagram.com/panchopachar_wellness_resort/'>
          <Image src={instagramIcon} alt='instagram-icon' height={48} width={48}
          ></Image>
          </a>
        </li>

        <li>
          <a target='_blank' href=''>
          <Image src={facebookIcon} alt='facebook-icon' height={48} width={48}
          ></Image>
          </a>
        </li>

        <li>
          <a target='_blank' href='mailto:panchopachar@gmail.com'>
          <Image src={mailIcon} alt='mail-icon' height={48} width={48}
          ></Image>
          </a>
        </li>

        <li>
          <a target='_blank' href='tel:9669598478'>
          <Image src={phoneIcon} alt='phone-icon' height={48} width={48}
          ></Image>
          </a>
        </li>
      </ul>
  )
}

export default SocialMediaLinks