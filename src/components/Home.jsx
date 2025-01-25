import React from 'react'
import { Link } from 'react-router-dom'
import { explore } from '../Costants'
import Footer from './Footer'


const Home = () => {
  return (
    <div>

      <div className='relative'>
        <div 
          className='absolute inset-0 h-screen bg-cover bg-center opacity-40'
          style={{backgroundImage:"url('https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443046/IMG_2867_xzbbcd.jpg')"}}
          >
        </div>

        <div className='relative z-10 flex flex-col justify-center pt-6 lg:pt-60'>
            <h1 className='flex justify-center font-bold font-playfair text-2xl lg:text-4xl px-10 pt-40 lg:pt-0'> 
              WELCOME TO UNITED FOUNDATION 
            </h1>
            <span className='flex justify-center text-xl lg:text-3xl font-playfair font-bold mt-4 px-10'>
                FOR LINGUISTICS, CULTURE AND DEVELOPMENT
            </span>
            <div className='flex flex-col lg:flex-row justify-center my-8'>
                <Link to="/events">
                  <button className='mx-6 my-10 lg:my-10 px-6 py-4 rounded-sm bg-[#954F32] text-white font-bold'>
                    Explore
                  </button> 
                </Link>
                <Link to='/sign in'>
                  <button className='lg:my-10 mx-6 px-4 rounded-sm py-4 bg-black text-[#A4A4A4] border-2 border-black font-bold'>
                    Book a consultation
                  </button>
                </Link>
            </div>
          </div>
      </div>

        {/* Explore our Collection section */}
        <div className='mt-60 lg:mt-60 mb-10'>
          <h1 className='bg-[#F7EFEF] flex justify-center font-playfair font-normal text-[#954F32] text-xl lg:text-4xl mx-10 py-6'>
            EXPLORE OUR COLLECTION
          </h1>
          <ul className='flex flex-col lg:flex-row space-x-4 mx-2 lg:mx-10'>
            {explore.map((explore, index) => (
                <li key={index}>
                    <div>
                      <h1 className='bg-black opacity-80 text-white mr-60 my-8 px-1 lg:px-4'>
                       {explore.title}
                      </h1>

                      <img
                       src= {explore.image}
                       alt='explore images'
                       className='w-[500px] lg:w-[500px] h-[300] lg:h-[300px] shadow-2xl'
                      />
                      
                      <Link to='/events'>
                        <p className='flex justify-center bg-black opacity-80 text-white py-2 px-4'>
                          {explore.link} 
                          <img 
                          src='/Arrow.png'
                          alt='arrow'
                          className='w-[34px] h-[30px]'/>  
                        </p>                         
                      </Link>
                    </div>
                </li>
            ))}
          </ul>
          <div className='flex justify-center mt-6 lg:mt-20'>
            <Link to='/events'>
              <button className=' bg-white font-playfair font-normal border-2 border-[#96644f] text-[#954F32] px-6 py-2'>
                See more
              </button>    
            </Link>
          </div>
        </div>

        {/* About us section */}
        <div className='relative my-20'>
          <div
            className='absolute inset-0 mx-6 lg:mx-60 opacity-80'
            style={{
              backgroundImage: `linear-gradient(to left, orange, grey), url('https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443051/Rectangle_81_w5vhcb.png')`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
            }}
            > 
          </div>

          <div className='relative z-10 justify-center py-10'>
              <h1 className='flex justify-center font-playfair font-normal text-2xl lg:text-5xl text-white pb-10'>
                About us
              </h1>
              <p className='flex justify-center font-Poppins font-normal text-sm lg:text-lg text-[#f8f1f1] px-10 lg:mx-[300px]'>
                United Foundation for Linguistic Culture and Development, a nongovernmental organization dedicated to promoting the learning of the French language among African people, with a particular focus on young people and professionals.
                 Our raison d’etre is to make the French language more accessible, enjoyable, and valuable as a skill that can open doors to opportunities in education, business, personal growth, and cultural exchange.
              </p>
          </div>
          <div className='flex justify-center mt-6 lg:mt-10'>
            <Link to='/about'>
              <button className='font-playfair font-bold border-2 border-black text-[#0f0b0b] px-6 py-2 mb-10'>
                See more
              </button>    
            </Link>
          </div>
        </div>

            {/* OUR VISION SECTION */}
        <div className='relative my-20'>
          <div
              className='absolute inset-0 mx-6 lg:mx-60 opacity-80'
              style={{
                backgroundImage: `linear-gradient(to right, orange, grey), url('https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443051/Rectangle_81_w5vhcb.png')`,
                backgroundSize: "cover",
                backgroundBlendMode: "overlay",
              }}
            > 
          </div>

          <div className='relative z-10 justify-center py-10'>
            <h1 className='flex justify-center font-playfair font-normal text-2xl lg:text-5xl text-white pb-10'>
              Our vision
            </h1>
            <p className='flex justify-center font-Poppins font-normal text-sm lg:text-lg text-[#f8f1f1] px-10 lg:mx-[300px]'>
              <ol>
                <li>
                1.	Encourage Bilingualism: By learning French, students will gain valuable skills that increase their potential for international careers.
                </li>
                <li>
                2.	Foster Cultural Appreciation: Students will learn about Francophone cultures and how they interact with our culture as Nigerians, promoting understanding and mutual respect.
                </li>
                <li>
                3.	Celebrate Academic Achievement: This competition serves as an academic challenge, motivating students to excel in a supportive environment.
                </li>
              </ol>     
            </p>
          </div>
          <div className='flex justify-center mt-6 lg:mt-10'>
            <Link to='/about'>
              <button className=' font-playfair font-bold border-2 border-[black] text-[#0f0b0b] px-6 py-2 mb-10'>
              See more
              </button>
            </Link>    
          </div>
        </div>

            {/* OUR PAST EVENT SECTION */}
        <div className='bg-black w-full pb-10 mt-40 mb-20'>
          <div className='mx-8 flex flex-col lg:flex-row'>
            <div className="relative flex flex-col items-center mt-20 mb-20">
                <div className="relative w-full max-w-[746px] lg:pr-12">
                  <img 
                    src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443048/IMG-20240307-WA0058_znnf1g.jpg" 
                    alt="image with miss Folashade" 
                    className="w-full h-auto lg:h-[850px]"
                  />
                  
                  <div className="absolute bottom-10 lg:bottom-40 left-1/2 transform -translate-x-1/2 flex justify-center items-center border-2 border-[#954F32] bg-[#954F32] opacity-80 text-white px-6 py-2">
                    <Link to='/events'>
                      <button>View more</button>
                    </Link>
                  </div>
                </div>
            </div>

              <div className='w-full lg:w-[50%] mt-10 lg:mt-60'>
                <h1 className='font-playfair font-medium text-2xl lg:text-5xl text-[#954F32]'>
                  OUR PAST PROJECTS
                </h1>
                <p className='font-medium text-sm lg:text-lg text-[#A4A4A4] pt-10 pb-20'>
                    The sensitization,competition and boot camps aims to 
                    utilise language as an essential tool to create a 
                    leveled competitive ground in the labour market, and to enhance cultural exchange. 
                </p>
                <div className='relative flex flex-col max-w-[750px]'>
                  <img 
                    src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443045/IMG_4546_xr17ai.jpg'
                    alt='Havimar image'
                    className='w-auto h-auto lg:h-[413px] mt-6 lg:pr-4'
                  />
                  <div className='absolute flex bottom-10 lg:bottom-40 left-1/2 transform -translate-x-1/2 border-2 border-black bg-black text-white px-8 py-2 opacity-80'>
                  <Link to='/events'>
                    <button>View more</button>
                  </Link>
                  </div>
                </div>
              </div>
          </div>
          <div className='flex justify-center mx-20 lg:mx-[590px] border-2 border-[#954F32] text-white py-1 mt-6'>
            <Link to='/events'>
              <button>
                See more
              </button>
            </Link>
          </div>
        </div>
        
        {/* FOOTER SECTION */}
        <div>
          <Footer />
        </div>
    </div>

  )
}

export default Home