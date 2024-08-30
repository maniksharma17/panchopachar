import React from 'react';
import Image from 'next/image';



const Navbar = () => {
  return <div className=''>
    <div className='flex flex-col p-5 items-center'>
      <Image className='m-auto mt-2'
        src={'https://panchopachar.s3.ap-south-1.amazonaws.com/logo3.png'}
        alt='logo'
        width={300}
        height={300}
      ></Image>

      
    
    </div>

</div>
  
  
}

export default Navbar