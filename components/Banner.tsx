import React from 'react'


const Banner = () => {
  return <div className='flex justify-center items-center pb-10'>
  <div className='flex rounded-lg mb-2 justify-start flex-col gap-2 h-[60vh] mx-2 items-center p-10 max-md:pb-16 py-2 max-md:px-4 m-auto w-fit'>
    <div className='max-sm:px-4'>
      <p className='text-center max-sm:text-2xl text-4xl w-1/2 m-auto max-md:w-full font-normal text-yellow-400'>Experience The Bliss Of Living a Moment In The Lap Of The Majestic Himalayas At </p>
    </div>

    <div className='flex flex-col gap-4 items-center'>
      <p className='text-center max-sm:text-2xl text-3xl font-light text-white'><br></br><span className='mt-8 raleway-heading-one text-6xl max-sm:text-4xl font-bold bg-opacity-40 rounded-full'>Panchopachar Wellness Resort</span></p>
      <a href='https://panchopachar.com' target='_blank'><button className='raleway-heading-one bg-black text-white max-md:text-xl text-3xl py-2 px-8 hover:bg-gray-900 rounded-full'>
        Visit us  &#8599;
      </button>
      </a>
      <a href='#program1'><button className='raleway-heading-one bg-transparent border-white border-2 text-white text-lg max-md:text-sm py-2 px-8 hover:bg-white hover:text-black rounded-full'>
        Yoga Treatment Meditation Retreat
      </button>
      </a>
    </div>
  </div>
</div>
  
}



export default Banner