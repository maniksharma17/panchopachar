import React from 'react';
import Image from 'next/image';
import whatsappIcon from "../public/whatsapp-icon.svg"
import instagramIcon from "../public/instagram-icon.svg"
import facebookIcon from "../public/facebook-icon.svg"
import mailIcon from "../public/mail-icon.svg"
import phoneIcon from "../public/phone.svg"


const Navbar = () => {
  return <div className=''>
    <div className='flex flex-col p-5 items-center'>
      <Image className='m-auto'
        src={'https://panchopachar.s3.ap-south-1.amazonaws.com/logo2.jpg'}
        alt='logo'
        width={180}
        height={180}
      ></Image>

      <ul className='flex flex-row m-auto gap-2 top-0 z-50 bg-white'>
        <li>
          <a target='_blank' href='https://api.whatsapp.com/send/?phone=9669598478&text=Hello&type=phone_number&app_absent=0'>
          <Image src={whatsappIcon} alt='whatsapp-icon' height={24} width={24}
          ></Image>
          </a>
        </li>

        <li>
          <a target='_blank' href='https://www.instagram.com/panchopachar_wellness_resort/'>
          <Image src={instagramIcon} alt='instagram-icon' height={24} width={24}
          ></Image>
          </a>
        </li>

        <li>
          <a target='_blank' href=''>
          <Image src={facebookIcon} alt='facebook-icon' height={24} width={24}
          ></Image>
          </a>
        </li>

        <li>
          <a target='_blank' href='mailto:panchopachar@gmail.com'>
          <Image src={mailIcon} alt='mail-icon' height={24} width={24}
          ></Image>
          </a>
        </li>

        <li>
          <a target='_blank' href='tel:9669598478'>
          <Image src={phoneIcon} alt='phone-icon' height={24} width={24}
          ></Image>
          </a>
        </li>
      </ul>
    
    </div>

    <div>

      <div className='flex flex-row border-t z-50 bg-white border-b justify-evenly text-[#736d66]'>

        <a href="#program1" className='border-r w-1/2 text-center text-xl p-2 hover:bg-gray-100'>
          <div>
          Yoga Treatment Meditation Retreat
          </div>
        </a>

        <a href="#program2" className='border-r w-1/2 text-center text-xl p-2 hover:bg-gray-100'>
          <div>
          Join our 5:00 AM Club
          </div>
        </a>

      </div>

    </div>
    </div>
  
}

export default Navbar