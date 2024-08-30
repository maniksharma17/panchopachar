import React from 'react'
import Image from 'next/image'
import mailIcon from "../public/mail-icon.svg"
import location from "../public/location-icon.svg"

const Footer = () => {
  return (
    <footer className="raleway-heading-two bg-zinc-50 border-t">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-4 pt-8 sm:px-6 lg:space-y-4 lg:px-4">
    
      <div className="grid grid-cols-1 gap-8 items-start sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        
        <div>
          <p className="font-medium text-xl text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-md">
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
          <p className="font-medium text-gray-900 text-xl">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-md">
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
          <p className="font-medium text-gray-900 text-xl">Legal</p>

          <ul className="mt-6 space-y-4 text-md">
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
          <p className="font-medium text-xl text-gray-900">Contacts</p>

          <ul className="mt-4 space-y-4 text-md">
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
            

            <li className='flex flex-row items-center gap-4 text-sm'>
                <Image src={location} alt='phone' height={20} width={20}></Image> 
                <a href="https://maps.app.goo.gl/TAGbF2Woqq8HyEEw5">Panchopachar Wellness Resort, Jadipani, Kanatal, Tehri Garhwal, Uttarakhand</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p className="text-md text-gray-500 p-4">&copy; 2024. Panchopachar. All rights reserved.</p>
  
</footer>
  )
}

export default Footer