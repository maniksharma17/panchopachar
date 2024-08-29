import React from 'react'
import Image from 'next/image'

const Mentors = () => {
  return <div className='flex justify-center'>
    <div className='flex flex-col gap-10 max-md:w-full bg-yellow-200 mb-10 m-auto w-1/2 max-md:mx-2 max-md:px-2 max-md:gap-4 items-center py-8 mx-16 my-6'>
      <h1 className='raleway-heading-one text-5xl max-md:text-3xl text-black'>Mentors</h1>
      <div className='flex flex-row max-md:flex-row gap-8 items-center justify-center'>
        <div className='flex flex-col items-center inter-body gap-2'>
          <Image className='rounded-full' src={'https://panchopachar.s3.ap-south-1.amazonaws.com/person3.png'} alt='person1' height={300} width={200}></Image>
          <p className='font-semibold'>Gautam Yogi</p>
        </div>
        <div className='flex flex-col items-center inter-body gap-2'>
          <Image className='rounded-full' src={'https://panchopachar.s3.ap-south-1.amazonaws.com/person1.png'} alt='person2' height={300} width={200}></Image>
          <p className='font-semibold'>Dr. Vijay Vedant</p>
        </div>
      </div>
    </div>
  </div>
  
}

export default Mentors