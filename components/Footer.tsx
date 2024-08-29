import React from 'react'
import Image from 'next/image'
import whatsappIcon from "../public/whatsapp-icon.svg"
import instagramIcon from "../public/instagram-icon.svg"
import facebookIcon from "../public/facebook-icon.svg"
import mailIcon from "../public/mail-icon.svg"
import phoneIcon from "../public/phone.svg"
import location from "../public/location-icon.svg"

const Footer = () => {
  return (
    <footer className="raleway-heading-two bg-white border-t">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div>
        <Image
        src={'https://panchopachar.s3.ap-south-1.amazonaws.com/logo2.jpg'}
        alt='logo'
        width={180}
        height={180}
      ></Image>

        </div>

        <p className="mt-4 max-w-xs text-gray-500">
        Your ultimate destination for holistic wellness nestled in the serene lap of the Himalayas. At Panchopachar Wellness Resort, we believe in nurturing the mind, body, and spirit to achieve optimal well-being, offering a harmonious blend of ancient wisdom and modern practices.
        </p>

        <ul className='flex flex-row m-auto mt-6 gap-5 top-0 z-50'>
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

      <div className="grid grid-cols-1 gap-8 items-start sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
        
        <div>
          <p className="font-medium text-lg text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="https://panchopachar.com/" className="text-gray-700 transition hover:opacity-75"> About </a>
            </li>

            <li>
              <a href="https://panchopachar.com/services/" className="text-gray-700 transition hover:opacity-75"> Services </a>
            </li>

            <li>
              <a href="https://panchopachar.com/outdoor-activites" className="text-gray-700 transition hover:opacity-75"> Outdoor Activites </a>
            </li>
          </ul>
        </div>
        

        <div>
          <p className="font-medium text-gray-900">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="https://panchopachar.com/contact" className="text-gray-700 transition hover:opacity-75"> Contact </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Feedback </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Legal</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Terms and Conditions </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Privacy Policy </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Refund Policy </a>
            </li>

          </ul>
        </div>

        <div>
          <p className="font-medium text-lg text-gray-900">Contacts</p>

          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a href="tel:9669598478">9669598478</a>
            </li>
            <li>
              <a href="tel:9971236534">9971236534</a>
            </li>
            <li>
              <a href="tel:9953754105">9953754105</a>
            </li>
            

            <li className='flex flex-row gap-4'>
              <Image src={mailIcon} alt='mail' height={20} width={20}></Image>
              <a href="mailto:panchopachar@gmail.com" className="text-gray-700 transition hover:opacity-75"> panchopachar@gmail.com </a>
            </li>
            

            <li className='flex flex-row gap-4'>
                <Image src={location} alt='phone' height={20} width={20}></Image> 
                <a href="https://maps.app.goo.gl/TAGbF2Woqq8HyEEw5">Panchopachar Wellness Resort, Jadipani, Kanatal, Tehri Garhwal, Uttarakhand</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p className="text-xs text-gray-500">&copy; 2024. Panchopachar. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer