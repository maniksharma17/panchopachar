import React from 'react';
import Image from 'next/image';



const Navbar = () => {
  return <div className=''>
    <div className='flex flex-col p-5 items-center'>
      <Image className='m-auto'
        src={'https://panchopachar.s3.ap-south-1.amazonaws.com/logo2.jpg'}
        alt='logo'
        width={250}
        height={250}
      ></Image>

      
    
    </div>

</div>
  
  
}

export default Navbar