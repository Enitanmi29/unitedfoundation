import React, { useState } from 'react'
import Gallery from './Gallery'
import Footer from './Footer'

const ToggleBar = ({activeTab,setActiveTab}) => (
  <div className='flex justify-center mt-10'>
    <button 
      onClick={() => setActiveTab('videos')}
      className={`px-6 py-6 rounded-l-lg ${
        activeTab === 'videos' ? 'bg-gray-500 text-[#6b3d3d]' : 'bg-black text-[#6b3d3d]'
      }`}>
        Videos
    </button>
    <button 
      onClick={() => setActiveTab('images')}
      className={`px-6 py-6 rounded-r-lg ${
        activeTab === 'images' ? 'bg-gray-500 text-[#6b3d3d]' : 'bg-black text-[#6b3d3d]'
      }`}>
      Images
    </button>
  </div>
)

const Videos = () => {
  const [activeTab,setActiveTab] = useState('videos')
    if (activeTab === 'images') {
      return <Gallery />;
    } else {
  return (
    <div>
      <div className='relative'>
        <div
          className='absolute inset-0 bg-cover w-full max-w-[1728px] h-auto opacity-40 '
          style=
          {{backgroundImage:"url('/IMG-20230208-WA0153.jpg')"}}
          >
          </div>

        <div className='relative z-10 flex flex-col justify-center items-center pt-20 pb-20'>
          <h1 className='text-[#6b3d3d] text-7xl font-playfair font-normal leading-[93.97px]'>
            Gallery
          </h1>        
        </div>
      </div>

          {/* TOGGLEBAR BUTTONS */}
      <ToggleBar activeTab={activeTab} setActiveTab={setActiveTab} />
    
        {/* SENSITIZATION SECTION */}
        <div className='w-full flex flex-col items-center bg-black text-white mt-20 rounded-lg'>
            <h1 className='text-4xl text-gray-500 py-4 font-playfair font-semibold'>
              SENSITIZATION
            </h1>
            <div className="flex flex-col lg:flex-row p-10 w-full bg-black items-center">
              <p className="font-playfair tracking-[1.5px] text-xl p-5 lg:pl-10 text-white lg:w-[50%] text-center lg:text-left">
                 Sensitization program 2023.
              </p>
              <video 
                src="https://res.cloudinary.com/dqyvf0nay/video/upload/v1736443682/20230518_084217_fliak1.mp4" 
                className="h-auto max-w-[90%] lg:max-w-[800px] lg:h-[400px] rounded-lg lg:w-[50%]" 
                controls
                aria-label="A Video">
                Your browser does not support the video tag.
              </video>
            </div>

            <div className='flex flex-col lg:flex-row p-10 pt-1 w-full bg-black items-center'>
            <video 
                src="https://res.cloudinary.com/dqyvf0nay/video/upload/v1736444096/20240705_095448_r57vyq.mp4" 
                className="h-auto max-w-[90%] lg:max-w-[800px] lg:h-[400px] rounded-lg lg:w-[50%]" 
                controls 
                aria-label="staff school sensitization">
                Your browser does not support the video tag.
              </video>
              <p className="font-playfair tracking-[1.5px] text-xl p-5 lg:pl-10 text-white lg:w-[50%] text-center lg:text-left">
                Sensitizaton program 2024
              </p>
            </div>

            <div className="flex flex-col lg:flex-row p-10 pt-1 w-full bg-black items-center">
              <p className="font-playfair tracking-[1.5px] text-xl p-5 lg:pl-10 text-white lg:w-[50%] text-center lg:text-left">
                 Sensitization program 2022
              </p>
              <video 
                src="https://res.cloudinary.com/dqyvf0nay/video/upload/v1736443173/InShot_20230219_141137261_ojnhlj.mp4" 
                className="h-auto max-w-[90%] lg:max-w-[800px] lg:h-[400px] rounded-lg lg:w-[50%]" 
                controls
                aria-label="Gbagada high school sensitization">
                Your browser does not support the video tag.
              </video>
            </div>   
          </div>

                  {/* FRENCH SECTION */}
        <div className='w-full flex flex-col items-center bg-black text-white mt-20 rounded-lg'>
            <h1 className='text-4xl text-gray-500 py-4 font-playfair font-semibold'>
              FRENCH CONTEST
            </h1>
            <div className="flex flex-col lg:flex-row p-10 w-full bg-black items-center">
              <p className="font-playfair tracking-[1.5px] text-xl p-5 lg:pl-10 text-white lg:w-[50%] text-center lg:text-left">
                 Sensitization program 2023.
              </p>
              <video 
                src="https://res.cloudinary.com/dqyvf0nay/video/upload/v1736443212/IMG_5739_fiazcv.mov" 
                className="h-auto max-w-[90%] lg:max-w-[800px] lg:h-[400px] rounded-lg lg:w-[50%]" 
                controls
                aria-label="2024 competition">
                Your browser does not support the video tag.
              </video>
            </div>

            <div className='flex flex-col lg:flex-row p-10 pt-1 w-full bg-black items-center'>
            <video 
                src="https://res.cloudinary.com/dqyvf0nay/video/upload/v1736443930/InShot_20230302_201243924_uouien.mp4" 
                className="h-auto max-w-[90%] lg:max-w-[800px] lg:h-[400px] rounded-lg lg:w-[50%]" 
                controls
                aria-label="clips from 2023 competition">
                Your browser does not support the video tag.
              </video>
              <p className="font-playfair tracking-[1.5px] text-xl p-5 lg:pl-10 text-white lg:w-[50%] text-center lg:text-left">
                Lagos French Contest 2023
              </p>
            </div>

            <div className="flex flex-col lg:flex-row p-10 pt-1 w-full bg-black items-center">
              <p className="font-playfair tracking-[1.5px] text-xl p-5 lg:pl-10 text-white lg:w-[50%] text-center lg:text-left">
                 Lagos French contest, 2024.
              </p>
              <video 
                src="https://res.cloudinary.com/dqyvf0nay/video/upload/v1736444103/20240307_122544_hpnjpq.mp4"
                className="h-auto max-w-[90%] lg:max-w-[800px] lg:h-[400px] rounded-lg lg:w-[50%]" 
                controls
                aria-label="2024 competition">
                Your browser does not support the video tag.
              </video>
            </div>   
          </div>

          {/* FOOTER SECTION */}
            <div>
              <Footer />
            </div>

    </div>     
  )
}
}

export default Videos