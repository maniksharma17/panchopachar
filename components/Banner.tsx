import React from 'react'


const Banner = () => {
  return <div className='flex justify-center items-center pb-10'>
  <div className='flex rounded-lg mb-10 justify-start flex-col gap-8 h-[60vh] mx-2 items-center p-10 max-md:pb-16 py-10 max-md:px-4 m-auto w-fit'>
    <div className='mt-4 mb-8 max-sm:px-4'>
      <p className='text-center max-sm:text-3xl text-3xl font-light text-gray-100'>Experience The Bliss Of Living a Moment</p>
      <p className='text-center max-sm:text-xl text-3xl font-light text-white'>In The Lap Of The Majestic Himalayas At <br></br><span className='mt-8 raleway-heading-one text-6xl max-sm:text-3xl font-bold bg-opacity-40 rounded-full'>Panchopachar Wellness Resort</span></p>
    </div>

    <div className='flex flex-col gap-2 items-center'>
      <a href='https://panchopachar.com' target='_blank'><button className='raleway-heading-one bg-black text-white max-md:text-xl text-3xl py-2 px-8 hover:bg-gray-900 rounded-full'>
        Visit us  &#8599;
      </button>
      </a>
      <a href='#program1'><button className='raleway-heading-two bg-transparent border-white border-2 text-white text-lg max-md:text-sm py-2 px-8 hover:bg-white hover:text-black rounded-full'>
        Yoga Treatment Meditation Retreat
      </button>
      </a>
    </div>
  </div>
</div>
  
}



export default Banner