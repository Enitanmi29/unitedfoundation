import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'


const Events = () => {
  return (
    <div>

      <div className='relative'>
        <div
        className='absolute inset-0 bg-cover w-full max-w-[1728px] h-auto opacity-40 '
        style=
        {{backgroundImage:"url('https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443047/IMG-20230208-WA0153_a8mgtj.jpg')"}}
        >
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-16 lg:pb-20">
            <h1 className="text-[#6b3d3d] text-3xl md:text-4xl lg:text-6xl font-playfair font-normal text-center">
              OUR EVENTS
            </h1>
            <p className="text-[#140808] text-base md:text-lg lg:text-2xl font-playfair font-normal pt-4 md:pt-6 text-center tracking-[0.5px] md:tracking-[1px] lg:tracking-[1.5px]">
              A variety of programs and events, such as the annual French language contest, sensitization, 
              <span className="block md:inline px-4 lg:px-8">
                scholarship schemes, online language courses, and cultural exchange programs.
              </span>
            </p>
        </div>

      </div>

        {/* FRENCH CONTEST SECTION */}
      <div className='flex flex-col lg:flex-row flex-1 bg-white'>
        <div className='w-full lg:w-[50%] font-playfair px-4 lg:px-20'>
          <h1 className='text-[#343434] text-2xl lg:text-5xl font-bold tracking-widest pb-10 lg:pb-20 pt-20 lg:pt-60'>
            FRENCH CONTEST
          </h1>
          <p className='text-[#323232] text-lg font-normal leading-loose tracking-tight pb-6'>
            United Foundation for Linguistics, Culture and Development is a NGO whose aim is to stir healthy interest in the learning of languages amongst African people.
            <span className='block'> 
            •	Since 2022, we have organized an annual French language contest in different parts of Lagos state, Nigeria. The Lagos French Contest seeks to encourage Nigerian primary and secondary school pupils to pursue an interest in learning French language.
            </span> 
            <span className='block'>
            •	This annual event has been a great success with over 250-300 attendees annually. 
            </span>
          </p> 
        </div>
        <div className='w-full lg:w-[50%] mb-2'>
          <img 
            src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443048/IMG-20240307-WA0058_znnf1g.jpg" 
            alt="image with miss Folashade" 
            className="w-full max-w-[864px] h-auto lg:h-[823px]"
          />
        </div>
      </div>

          {/* SENSITIZATION SECTION */}
      <div className='flex flex-col lg:flex-row flex-1 bg-white mt-20'>
        <div className='w-full lg:w-[50%] mb-2'>
            <img 
              src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443045/IMG_4546_xr17ai.jpg" 
              alt="Havimar" 
              className="w-full max-w-[865px] h-auto lg:h-[823px]"
            />
          </div>
          
          <div className='w-full lg:w-[50%] font-playfair px-4 lg:px-20'>
            <h1 className='text-[#343434] text-2xl lg:text-5xl font-bold tracking-widest pb-10 lg:pb-20 pt-6 lg:pt-60'>
             SENSITIZATION
            </h1>
            <p className='text-[#323232] text-lg font-normal leading-loose tracking-tight'>
              United Foundation for Linguistics, Culture and Development is a NGO whose aim is to stir healthy interest in the learning of languages amongst African people.
              <span className='block'> 
              •	 Since 2021, we have organized school sensitization programs in different parts of Lagos state, Nigeria. The sensitization aims to educate Nigerian primary and secondary school pupils and tutors on the several opportuinities attached to being bilingual or multilintigual.
              </span> 
              <span className='block'>
              •	This annual event has been a great success with over 20 schools visited annually. 
              </span>
          </p> 
        </div>
      </div>

      {/* BOOTHCAMP CONTEST SECTION */}
      <div className='flex flex-col lg:flex-row flex-1 bg-white'>
        <div className='w-full lg:w-[50%] font-playfair px-4 lg:px-20'>
          <h1 className='text-[#343434] text-2xl lg:text-5xl font-bold tracking-widest pt-20 lg:pt-60 pb-10 lg:pb-20'>
            BOOT CAMP
          </h1>
          <p className='text-[#323232] text-lg font-normal leading-loose tracking-tight pb-4'>
            United Foundation for Linguistics, Culture and Development is a NGO whose aim is to stir healthy interest in the learning of languages amongst African people.
            <span className='block'> 
            •	Since 2023, we have organized an annual booth camp in different parts of Lagos state, Nigeria. The Boot camp seeks to encourage cultural exchange between Africans.
            </span> 
            <span className='block'>
            •	This annual event has been a great success with over 20 attendees annually. 
            </span>
          </p> 
        </div>
        <div className='w-full lg:w-[50%]'>
          <img 
            src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443047/IMG-20230501-WA0033_hxu46b.jpg" 
            alt="boot camp" 
            className="w-full max-w-[864px] h-auto lg:h-[823px]"
          />
        </div>
      </div>

      {/* ADITIONAL SERVICES SECTION */}
      <div className='text-[#343434] bg-[#F7EFEF33] flex flex-col justify-center items-center py-20'>
        <h1 className='text-2xl lg:text-5xl leading-loose tracking-[2.73px] lg:tracking-[8.73px] font-playfair'>
          ADDITIONAL SERVICES
        </h1>
        <ul className='lg:space-x-4 text-xl lg:text-2xl leading-loose tracking-[1.0px] flex flex-col lg:flex-row flex-1 pt-6'>
            <li>
              * ONLINE TUTORING
            </li>
            <li>
              * CULTURAL EXCHANGE PROGRAMS
            </li>
            <li>
              * SCHOLARSHIP SCHEMES
            </li>
        </ul> 
        <Link to='/events' className='pt-20'>
            <img
              src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443047/Gold_Round_Button_op6sls.png'
              alt='icon'
              className='w-[64px] h-[64px] ml-auto lg:ml-[1100px]'/>
        </Link>                       
      </div>

        {/* FOOTER SECTION */}
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Events