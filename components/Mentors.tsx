import React from 'react'
import Image from 'next/image'

const Mentors = () => {
  return (
    <div className='flex flex-row justify-evenly items-center bg-yellow-200 py-8 rounded-lg mx-16 my-6'>
      <h1 className='raleway-heading-one text-5xl text-black'>Our Mentors</h1>
      <div className='flex flex-row gap-10'>
        <div className='flex flex-col items-center inter-body gap-2'>
          <Image className='rounded-full' src={'https://panchopachar.s3.ap-south-1.amazonaws.com/person3.png'} alt='person1' height={300} width={200}></Image>
          <p>Gautam Yogi</p>
        </div>
        <div className='flex flex-col items-center inter-body gap-2'>
          <Image className='rounded-full' src={'https://panchopachar.s3.ap-south-1.amazonaws.com/person1.png'} alt='person2' height={300} width={200}></Image>
          <p>Dr. Vijay Vedant</p>
        </div>
      </div>
    </div>
  )
}

export default Mentors