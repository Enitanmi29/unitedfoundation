import React from 'react'

const Form1 = () => {
  return (
    <div>
        <h1 className='font-normal text-2xl text-[#954F32] leading-[44px] ml-6 lg:ml-20 pt-8'>
           Get in touch with us !
        </h1>

        <div className='font-normal text-lg text-[#A4A4A4] leading-[44px] tracking-[1.2px] space-y-4 px-6 lg:ml-[50px] pt-6'>
            <input 
             type='name'
             placeholder='Type your full name here'
             className='py-4 pl-4 border-[1px] border-[#D9D9D9] w-full max-w-[667px] h-auto lg:h-[70px]'
             />
             <input 
             type='email'
             placeholder='Type your email address here'
             className='py-4 pl-4 border-[1px] border-[#D9D9D9] w-full max-w-[667px] h-auto lg:h-[70px]'
             />
             <input 
             type='text'
             placeholder='Type subject of the message'
             className='py-4 pl-4 border-[1px] border-[#D9D9D9] w-full max-w-[667px] h-auto lg:h-[70px]'
             />
             <input 
             type='text'
             placeholder='Type your message here'
             className='py-4 pl-4 border-[1px] border-[#D9D9D9] w-full max-w-[667px] h-auto lg:h-[184px]'
             />
             
             <div className='py-10'>
                <button className='bg-[#954F32] text-white text-lg py-2 px-6'>
                    SEND
                </button>
             </div>
        </div>
    </div>
  )
}

export default Form1