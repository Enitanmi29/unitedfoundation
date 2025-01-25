import React, { useState } from 'react'
import Footer from './Footer'
import Videos from './Videos'


const ToggleBar = ({activeTab,setActiveTab}) => (
    <div className='flex items-center justify-center mt-10'>
        <button
        onClick={() => setActiveTab('images')}
        className={`px-6 py-6 rounded-l-lg ${
        activeTab === 'images' ? 'bg-black text-[#6b3d3d]'  : 'bg-slate-500 text-[#6b3d3d]'
        }`}>
          Images
        </button>

        <button
        onClick={() => setActiveTab('videos')}
        className={`px-6 py-6 rounded-r-lg ${
        activeTab === 'videos' ? 'bg-black text-[#6b3d3d]'  : 'bg-slate-500 text-[#6b3d3d]'
        }`}>
          Videos
        </button>
    </div>
)

const Gallery = () => {
  const [activeTab,setActiveTab] = useState('images')
   if (activeTab === 'videos') {
     return <Videos />;
   } else {
  return (
    <div className=''>
      <div className='relative'>
        <div
          className='absolute inset-0 bg-cover w-full max-w-[1728px] h-auto opacity-40 '
          style=
          {{backgroundImage:"url('/IMG-20230208-WA0153.jpg')"}}
          >
          </div>

        <div className='relative z-10 flex flex-col justify-center items-center pt-20 pb-20'>
          <h1 className='text-[#6b3d3d] text-4xl lg:text-7xl font-playfair font-normal leading-[93.97px]'>
            Gallery
          </h1>        
        </div>
      </div>

              {/* TOGGLEBAR SECTION */}
      <ToggleBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* SENSITIZATION SECTION */}
          <div className='w-full flex flex-col items-center bg-black text-white mt-20 rounded-lg'>
            <h1 className='text-4xl lg:text-4xl text-gray-500 py-4 font-playfair font-semibold'>
              SENSITIZATION
            </h1>
            <div className='flex p-10 w-full bg-black'>
              <p className=' font-playfair tracking-[1.5px] text-xl lg:p-10 lg:pl-[350px] flex items-center w-[50%]'>
                  Sensitizaton program at Havimar Head-Start schools.
              </p>
              <img 
                src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443045/IMG_4546_xr17ai.jpg" 
                alt="Havimar"
                className='h-auto max-w-[800px] lg:h-[400px] rounded-lg w-[50%]'
              />
              
            </div>
            <div className='flex p-10 w-full bg-black'>
              <img 
                src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443035/20240626_133437_bke0s6.jpg'
                alt='sensitization ABS'
                className='h-auto max-w-[800px] lg:h-[400px] rounded-lg w-[50%]'
              />
              <p className='font-playfair tracking-[1.5px] text-xl p-4 lg:p-10 lg:pr-[350px] flex items-center w-[50%]'>
                Sensitizaton program at ABS Nursery and Primary school.
              </p>
            </div>
            <div className='flex p-10 w-full bg-black'>
              <p className='font-playfair tracking-[1.5px] text-xl lg:p-10 lg:pl-[350px] flex items-center w-[50%]'>
                  Sensitizaton program at Reagan Memorial Nursery and Primary school.
              </p>
              <img 
                src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443037/20240705_082824_obf1af.jpg'
                alt='Onike image'
                className='h-auto max-w-[800px] lg:h-[400px] rounded-lg w-[50%]'
              />         
            </div>    
          </div>

          {/* French Contest SECTION */}
          <div className='w-full flex flex-col items-center bg-black text-white rounded-lg'>
            <h1 className='text-2xl lg:text-4xl text-gray-500 py-4 font-playfair font-semibold'>
              FRENCH CONTEST
            </h1>
            <div className='flex p-10 w-full bg-black'>
              <p className=' font-playfair tracking-[1.5px] text-xl p-10 lg:pl-[350px] flex items-center w-[50%]'>
              Lagos Frech contest 2024 with Hon. Mrs Folashade Adefisayo.
              </p>
              <img 
                src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443048/IMG-20240307-WA0058_znnf1g.jpg" 
                alt="image with miss Folashade" 
                className='h-auto max-w-[800px] lg:h-[400px] rounded-lg w-[50%]'
              />
              
            </div>
             <div className='flex p-10 w-full bg-black'>
              <img 
                src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443050/IMG-20240308-WA0034_q029ok.jpg'
                alt='2024 contest'
                className='h-auto max-w-[800px] lg:h-[400px] rounded-lg w-[50%]'
              />
              <p className='font-playfair tracking-[1.5px] text-xl p-10 lg:pr-[350px] flex items-center w-[50%]'>
              Lagos Frech contest 2024 Grand Winners.
              </p>
            </div>
            <div className='flex p-10 w-full bg-black'>
              <p className='font-playfair tracking-[1.5px] text-xl p-10 lg:pl-[350px] flex items-center w-[50%]'>
              
              Lagos Frech contest 2023.
              </p>
              <img 
                src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443046/IMG_2867_xzbbcd.jpg'
                alt='AUDIENCE'
                className='h-auto max-w-[800px] lg:h-[400px] rounded-lg w-[50%]'
              />         
            </div>    
          </div>

            {/* BOOT CAMP SECTION */}
          <div className='w-full flex flex-col items-center bg-black text-white'>
            <h1 className='text-2xl lg:text-4xl text-gray-500 py-4 font-playfair font-semibold'>
              BOOT CAMP
            </h1>

            <div className='flex p-10 w-full bg-black'>
              <img 
                src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443048/IMG-20230501-WA0032_jzqxgn.jpg'
                alt='BOOT CAMP SHIRT'
                className='h-auto max-w-[800px] lg:h-[400px] rounded-lg w-[50%]'
              />
              <p className='font-playfair tracking-[1.5px] text-xl p-10 lg:pr-[350px] flex items-center w-[50%]'>
              Time to unwind and have fun while learning.
              </p>
            </div>

            <div className='flex p-10 w-full bg-black space-x-4'> 
              <img 
                src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443047/IMG-20230501-WA0033_hxu46b.jpg" 
                alt="boot camp" 
                className='h-auto max-w-[800px] lg:h-[400px] rounded-lg w-[50%]'
              />
              <img 
                src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443046/IMG-20230208-WA0037_uk1awe.jpg'
                alt='DAMILARE AND HANNAH'
                className='h-auto max-w-[800px] lg:h-[400px] rounded-lg w-[50%]'
              />       
            </div>  
            <div className='flex p-10 w-full bg-black space-x-4'> 
              <img 
                src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443044/20241214_153944_xeukp7.jpg" 
                alt="boot camp" 
                className='h-auto max-w-[800px] lg:h-[400px] rounded-lg w-[50%]'
              />
              <img 
                src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443045/20241214_143642_cqrbyi.jpg'
                alt='boot camp 2024'
                className='h-auto max-w-[800px] lg:h-[400px] rounded-lg w-[50%]'
              />       
            </div>     
          </div>

          {/* FOOTER SECTION */}
            <div className='pt-40 lg:pt-0'>
              <Footer />
            </div>

    </div>
  )
}
}

export default Gallery