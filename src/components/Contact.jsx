import React from 'react'
import Form1 from './Form1'
import Footer from './Footer'
import Map from './Map'

const Contact = () => {
  return (
    <div className=''>
      <div className='flex justify-center bg-[#F5EBEBC9] opacity-[79%] text-[#954F32] text-2xl lg:text-4xl leading-[93.97px] font-playfair font-normal lg:mx-20 lg:mt-10'>
        CONTACT US
      </div>

          {/* CONTENT */}
      <div className='flex flex-col lg:flex-row flex-1 lg:space-x-4'>
        <div className='w-full lg:w-[50%]'>
            <Form1 />
        </div>

        <div className='w-full lg:w-[50%] flex items-center px-6 lg:px-4'>
          <Map />
        </div>
      </div>

      {/* FOOTER SECTION */}
      < div className='pt-60'>
          <Footer />
        </div>
    </div>
  )
}

export default Contact