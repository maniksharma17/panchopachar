"use client"
import React from 'react'
import Image from 'next/image'
import phone from '../public/phone.svg'
import mail from '../public/mail-icon.svg'
import sun from '../public/sun-icon.svg'
import exercise from '../public/exercise-icon.svg'
import meditate from '../public/meditate-icon.svg'
import learn from '../public/learn-icon.svg'


const Program2 = () => {
  return <div className='flex flex-row max-md:flex-col max-lg:gap-10 items-center p-10 justify-evenly max-md:pt-10 max-md:p-4 bg-[#e0ebe3] m-8 max-md:m-2'>

    <div id='program2' className='w-full flex-col flex gap-6'>
      <div className='flex flex-row max-md:flex-col justify-between gap-6 items-center'>

        <div className='flex flex-row max-md:flex-col gap-8 items-center'>
          <Image src={'/images/logo1.jpg'} alt='logo' height={100} width={100}></Image>
          <div>
            <h1 className='text-2xl max-md:text-2xl font-normal raleway-heading-two'>Panchopachar presents</h1>
            <h1 className='text-4xl block max-md:text-2xl text-green-900 font-bold raleway-heading-one text-center'>THE 5:00 AM CLUB<br></br>40/30/20 Formula</h1>
          </div>
        </div>

      <div className='flex flex-row gap-4'>  
          <div className='flex flex-col gap-2'>
            <div className='bg-black max-md:text-sm cursor-pointer raleway-heading-two text-white h-10 mt-5 px-4 py-2 text-xl'>
              Join for free
            </div>

            <div className='text-lg font-light border flex flex-col border-black px-4 py-2 digit-font'>
              <div className='flex flex-row gap-2 items-center'><Image src={phone} alt='phone' height={18} width={18}></Image> <a href="tel:9953754105">9953754105</a></div>
              <div className='flex flex-row gap-2 items-center'><Image src={phone} alt='phone' height={18} width={18}></Image> <a href="tel:9669598478">9669598478</a></div>
            </div>

            <div className='text-lg font-thin border border-black px-4 py-2'>
              <Image className='inline mr-2' src={mail} alt='mail' height={20} width={20}></Image> <a href="mailto:panchopachar@gmail.com">panchopachar@gmail.com</a>
            </div>
          </div>
      </div>
    </div>

    <div className='flex flex-row max-md:grid max-md:grid-cols-2 max-md:mt-8 h-fit items-center gap-5'>
      {GridImages.map(item => {
        return <div key={item.title} className='border border-black p-8 max-md:p-4 max-md:h-72 flex flex-col gap-2 items-left'>
          <Image src={item.icon} alt='icon' height={40} width={40}></Image>
          <p className='raleway-heading-two text-2xl'>{item.title}</p>
          <p className='text-lg font-bold max-md:font-normal'>{item.desc}</p>
        </div>
      })}
    </div>

    <LineBreak/>
    
    <div>
      <h1 className='text-4xl font-normal digit-font text-center'>4 Master Steps</h1>
    </div>

    <div className='flex flex-row h-fit max-md:grid max-md:grid-cols-2 max-md:mt-8 items-center gap-5'>
      {MasterSteps.map(item => {
        return <div key={item.title} className='border border-black p-8 max-md:p-3 max-md:h-28'>
          <p className='raleway-heading-two text-2xl max-md:text-xl'>{item.title}</p>
          <p className='text-lg  max-md:text-sm'>{item.desc}</p>
        </div>
      })}
    </div>

  </div>
</div>

}

const GridImages = [
  {
    title: 'Wake up',
    desc: 'Wake up at 5am daily to change your life.',
    icon: sun
  },
  {
    title: 'Exercise',
    desc: 'Perform moderate exercise for 40 minutes daily.',
    icon: exercise
  },
  {
    title: 'Meditate',
    desc: 'Spend 30 minutes meditating and journaling.',
    icon: meditate
  },
  {
    title: 'Learn',
    desc: 'Dedicate 20 minutes to intellectual growth or reading.',
    icon: learn
  }
]

const MasterSteps = [
  {
    title: 'Awareness',
    desc: 'Expand your mind and your point of view.'
  },
  {
    title: 'Execution',
    desc: 'Put what you have learned into practice.'
  },
  {
    title: 'Result',
    desc: 'Share your new skills with others.'
  },
  {
    title: 'Consistency',
    desc: 'Keep doing your routine until it is natural.'
  }
]

const LineBreak = () => {
  return <div>
    <div className="inline-flex items-center justify-center w-full">
        <hr className="w-96 h-1 my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
        <div className="absolute px-4 -translate-x-1/2 bg-[#e0ebe3] left-1/2 dark:bg-gray-900">
            <svg className="w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
      </svg>
        </div>
    </div>
  </div>
}

export default Program2