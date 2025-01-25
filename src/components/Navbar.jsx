import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NavItems } from '../Costants'


const Navbar = () => {
    const [isMobileMenuOpen,setisMobileMenuOpen] = useState()
 
      const toggleMobileMenu = () => {
        setisMobileMenuOpen(!isMobileMenuOpen);
      };

    return (
    <nav className='top-0 z-50 w-full bg-black shadow-lg'>
        <div className='container mx-auto flex justify-between items-center py-4 px-2 lg:pr-[300px] lg:pl-4'>
            <Link to="/">
              <img 
                src='https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443033/20231018_180034_0000_bc75vr.png'
                alt='logo'
                className='w-[120px] h-[120px] rounded-lg'/>  
            </Link>
            <ul className='hidden lg:flex text-black gap-[24px] lg:gap-[60px] ml-auto'>
               {NavItems.map((item, index) => ( 
                 <li key={index}>
                    <NavLink
                     to={item.link}
                     className={({ isActive }) =>
                        `text-base font-medium text-white hover:text-orange-600 transition-colors ${
                            isActive ? 'text-orange-600' : ''
                        }`
                    }
                    >
                        {item.label}
                    </NavLink>
                </li>
               ))}    
            </ul>

               {/* menu button for smaller screen  */}
            <button className='lg:hidden flex items-center text-white p-2 focus:outline-none' 
                   onClick={toggleMobileMenu}>
                <svg
                 className="w-6 h-6" 
                 fill="none" 
                 stroke="currentColor" 
                 viewBox="0 0 24 24" 
                 xmlns="http://www.w3.org/2000/svg"
                 >
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </div>
                    {/* Navitem menu for smaller screen */}
        {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col text-center text-black space-y-2 py-2">
            {NavItems.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.link}
                  className="text-base text-white font-medium hover:text-orange-600 transition-colors"
                  onClick={() => setisMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
    
  )
}

export default Navbar