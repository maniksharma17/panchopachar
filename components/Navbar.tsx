import React from 'react';
import Image from 'next/image';



const Navbar = () => {
  return <div className=''>
    <div className='flex flex-col p-5 items-center'>
      <Image className='m-auto mt-10'
        src={'https://panchopachar.s3.ap-south-1.amazonaws.com/logo1.jpg'}
        alt='logo'
        width={150}
        height={150}
      ></Image>

      
    
    </div>

</div>
  
  
}

export default Navbar