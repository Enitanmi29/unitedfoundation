import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <div className=''>
        <div className='relative'>
          <div
            className='absolute inset-0 bg-cover w-full max-w-[1728px] h-auto opacity-40'
            style=
            {{backgroundImage:"url('/IMG-20230208-WA0153.jpg')"}}
          >
          </div>

          <div className='relative z-10 flex flex-col justify-center items-center pt-20 pb-20'>
            <h1 className='px-10 text-[#6b3d3d] text-2xl lg:text-4xl font-playfair font-normal leading-[43.97px] lg:leading-[93.97px]'>
            UNITED FOUNDATION FOR LINGUISTICS, CULTURE AND DEVELOPMENT
            </h1>
            <p className='text-[#1b0d0d] text-lg lg:text-2xl font-playfair font-normal leading-[24px] lg:leading-[44px] tracking-[5.5px]'>
            Don't limit your world!            
            </p>
          </div>
        </div>

        {/* CONTENT */}
      <div className='flex flex-col lg:flex-row flex-1 bg-white'>
        <div className='w-full lg:w-[50%] bg-black'>
                <p className='text-white text-lg font-normal leading-[44px] mx-2 lg:mx-20 my-6 lg:my-40'>
                  United Foundation for Linguistic Culture and Development, a nongovernmental organization dedicated to promoting the learning of the French language among African people, with a particular focus on young people and professionals.
                  Our raison d’etre is to make the French language more accessible, enjoyable, and valuable as a skill that can open doors to opportunities in education, business, personal growth, and cultural exchange.
                </p>
          
            <div className='lg:mr-2 mb-20'>
                <img 
                  src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443050/IMG-20240308-WA0034_q029ok.jpg'
                  alt='2024 contest'
                  className='w-full h-auto max-w-[890px] lg:h-[555px]'
                />
            </div>
        </div>

        <div className='w-full lg:w-[50%] bg-black'>
          <div>
            <img 
              src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443036/20240628_094403_ikbab2.jpg'
              alt='sensitization'
              className='w-full h-[300px] max-w-[852px] lg:h-[555px]'
            />
          </div>
          <p className='text-white text-lg font-normal leading-[44px] mx-2 lg:mx-20 my-6 lg:my-40'>
            United Foundation for Linguistic Culture and Development, une organisation non gouvernementale dédiée à la promotion de l’apprentissage de la langue française auprès des populations africaines, en particulier auprès des jeunes et des professionnels.
            Notre raison d’être est de rendre la langue française plus accessible, plus agréable et plus précieuse en tant que compétence pouvant ouvrir des portes vers des opportunités dans l’éducation, les affaires, la croissance personnelle et les échanges culturels.
          </p>     
        </div>
      </div>

        {/* FOOTER SECTION */}
      <div className='mt-2 lg:mt-0'>
        <Footer />
      </div>      



    </div>
  )
}

export default About