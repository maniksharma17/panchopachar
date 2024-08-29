import React from 'react'


const Banner = () => {
  return <div className='flex rounded-lg flex-col gap-8 mx-8 items-center pb-10 max-md:h-[60vh] max-md:pb-16 bg-green-100 py-10'>
    <div className='m-auto mt-2 max-sm:px-4'>
      <p className='text-center max-sm:text-3xl text-5xl font-bold'>Experience The Bliss Of Living a Moment</p>
      <p className='text-center max-sm:text-xl text-3xl font-light text-[#556945]'>In The Lap Of The Majestic Himalayas At <br></br><span className='text-5xl max-sm:text-3xl font-bold'>Panchopachar Wellness Resort</span></p>
    </div>

    <div>
      <a href='https://panchopachar.com' target='_blank'><button className='raleway-heading-one bg-green-800 text-white text-3xl py-2 px-8 hover:bg-green-700 rounded-full'>
        Visit us
      </button>
      </a>
    </div>
  </div>
  
}



export default Banner