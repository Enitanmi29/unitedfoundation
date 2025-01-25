import React from 'react'

const Form1 = () => {
  return (
    <div className='w-full lg:w-[50%] flex flex-col mx-2 lg:mx-0'>
        <h1 className='font-medium font-playfair text-2xl lg:text-4xl text-[#954F32] leading-[93.97px] mx-4 lg:ml-20 pt-8'>
            CREATE ACCOUNT
        </h1>

        <div className='font-normal text-lg text-[#A4A4A4] leading-[44px] tracking-[1.2px] space-y-4 lg:pl-6 lg:ml-[50px] pt-6 px-6 pr-8'>
            <input 
             type='name'
             placeholder='First name'
             className='py-4 pl-4 border-[1px] border-[#D9D9D9] w-full max-w-[667px] h-auto lg:h-[70px]'
             />
             <input 
             type='name'
             placeholder='Last name'
             className='py-4 pl-4 border-[1px] border-[#D9D9D9] w-full max-w-[667px] h-auto lg:h-[70px]'
             />
             <input 
             type='email'
             placeholder='Type your email'
             className='py-4 pl-4 border-[1px] border-[#D9D9D9] w-full max-w-[667px] h-auto lg:h-[70px]'
             />
             <input 
             type='phone number'
             placeholder='Phone number'
             className='py-4 pl-4 border-[1px] border-[#D9D9D9] w-full max-w-[667px] h-auto lg:h-[70px]'
             />
             <input 
             type='text'
             placeholder='Password'
             className='py-4 pl-4 border-[1px] border-[#D9D9D9] w-full max-w-[667px] h-auto lg:h-[70px]'
             />
             <input 
             type='text'
             placeholder='Confirm paswword'
             className='py-4 pl-4 border-[1px] border-[#D9D9D9] w-full max-w-[667px] h-auto lg:h-[70px]'
             /> 
             
             <div className='pt-10'>
                <button className='bg-[#954F32] text-white text-lg py-4 w-full'>
                    SIGN UP
                </button>
             </div>

             <div className='flex text-[#954F32] justify-center'>
                <p className='text-lg leading-[44px] tracking-[1.2px] font-normal'>
                    Already have an account?
                </p>
                <p className='text-lg leading-[44px] tracking-[1.2px] font-bold pl-2'>
                    Sign in
                </p>
             </div>

                <p className=' flex text-[#954F32] justify-center text-lg leading-[44px] tracking-[1.2px] font-normal pt-4'>
                    Or Sign Up with Social Media
                </p>
                <div className='flex justify-center space-x-6 mt-20'>
                    <img 
                        src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443047/Facebook_xcrpkk.png'
                        alt='fb logo'
                        className=''
                    />
                    <img 
                        src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443069/Twitter_xfir2b.png'
                        alt='twitter logo'
                        className=''
                    />
                    <img 
                        src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443050/Instagram_jkqnfc.png'
                        alt='instagram logo'
                        className=''
                    />
            </div>
        </div>
    </div>
  )
}

export default Form1