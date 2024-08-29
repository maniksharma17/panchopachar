import React from 'react';
import Image from 'next/image';
import whatsappIcon from "../public/whatsapp-icon.svg"
import instagramIcon from "../public/instagram-icon.svg"
import facebookIcon from "../public/facebook-icon.svg"
import mailIcon from "../public/mail-icon.svg"


const Navbar = () => {
  return <div>
    <div className='flex flex-col p-5 items-center'>
      <Image className='m-auto'
        src={'https://panchopachar.s3.ap-south-1.amazonaws.com/logo2.jpg'}
        alt='logo'
        width={180}
        height={180}
      ></Image>

      <ul className='flex flex-row m-auto gap-2'>
        <li>
          <Image src={whatsappIcon} alt='whatsapp-icon' height={24} width={24}
          ></Image>
        </li>

        <li>
          <Image src={instagramIcon} alt='instagram-icon' height={24} width={24}
          ></Image>
        </li>

        <li>
          <Image src={facebookIcon} alt='facebook-icon' height={24} width={24}
          ></Image>
        </li>

        <li>
          <Image src={mailIcon} alt='mail-icon' height={24} width={24}
          ></Image>
        </li>
      </ul>
    
    </div>

    <div>

      <div className='flex flex-row border-t border-b justify-evenly text-[#736d66]'>

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