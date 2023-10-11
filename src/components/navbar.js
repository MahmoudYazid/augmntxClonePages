import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { GrMenu } from 'react-icons/gr';
import { IoMdCloseCircleOutline } from 'react-icons/io';

export default function Navbar() {
    const [IndustDropListVisibility, SetIndustDropListVisibility]=useState('hidden')
    const [MobileMenu, SetMobileMenu] = useState('hidden')
    const [IndustDropListVisibilityMobile, SetIndustDropListVisibilityMobile] = useState('hidden')
  return (
    <>
          {/* main navabar   Start */}
          <div  className=' z-10 fixed min-w-[100%] bg-[#f2fafd] min-h-[3.75rem] flex flex-row-reverse gap-1 lg:gap-5 items-center pr-[1rem] '>
              <GrMenu size={30} className='min-w-[5rem] lg:hidden' onClick={() => MobileMenu == "hidden" ? SetMobileMenu('visible') : SetMobileMenu('hidden')}></GrMenu>
              <div  ><p className=' hidden lg:block cursor-pointer	hover:text-[#5271FF] font-semibold text-[20px] font-[550]'>Login</p></div>
            
              <div className='  	text-center cursor-pointer	 hover:-translate-y-1  bg-[#5271FF] rounded-[50px] border-[#5271FF] border-2 w-[8rem]  h-[3rem] flex items-center justify-center'>
                  <p className='font-semibold text-[1.25] font-[550] text-white'>Hire dev</p>
                </div>
            
              <div ><p className=' cursor-pointer	hidden lg:inline-flex hover:text-[#5271FF] font-semibold text-[20px] font-[550]'>Apply as vendor</p></div>
            
              <div ><p className=' hidden lg:inline-flex cursor-pointer	 hover:text-[#5271FF] font-semibold text-[20px] font-[550]'>find dev</p></div>
            
              <div className='  hidden lg:inline-flex flex flex-row items-center hover:text-[#5271FF]' onClick={() => IndustDropListVisibility == "hidden" ? SetIndustDropListVisibility('visible') : SetIndustDropListVisibility('hidden')}>
                 
                  <p className='cursor-pointer 	  font-semibold text-[20px] font-[550]'>industries</p>
                  <IoIosArrowDown size={20}></IoIosArrowDown>
                </div>
              
              <div ><p className='cursor-pointer	hidden lg:inline-flex hover:text-[#5271FF] font-semibold text-[20px] font-[550]'>why</p></div>
              
              <img src='/AugmntX-Logo.png' alt='augm' className='mr-auto   h-[2rem] lg:ml-[5rem] '></img>
    </div>
          {/* main navabar   Start */}
    {/* Side menu industry Start */ }
          <div className={` ${IndustDropListVisibility} items-start pl-10 justify-center gap-3 z-10 min-h-[18rem] fixed  top-[4.5rem]  right-0 mr-[26rem]	w-[15rem] bg-slate-50 flex flex-col   `}>
              
              <p className='hover:cursor-pointer font-[700] text-[18px] hover:text-[#5271FF]'>Travel</p>
              <p className='hover:cursor-pointer font-[700] text-[18px] hover:text-[#5271FF]'>Automotive</p>
              <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'>Banking</p>
              <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'>Capital Markets</p>
              <p className='font-[700] hover:cursor-pointer  text-[18px] hover:text-[#5271FF]'>Healthcare</p>
              <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'>Digital Commerce</p>
              <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'> View all</p>
              
                  
                  
                  
                  
                  
                 
    </div>
    {/* Side menu industry end */}

          {/* Side navabar in mobile  Start */}
          <div className={` ${MobileMenu} text-white lg:hidden  items-start pl-10 justify-start pt-5 gap-5 z-10 min-h-screen fixed  top-[4.5rem]  left-0 	w-[70%] bg-black flex flex-col   `}>
              <div className='flex flex-row items-center   w-11/12	'>
                  <p className=' hover:cursor-pointer font-[700] text-[2rem] hover:text-[#5271FF]'>Augmntx</p>
                  <IoMdCloseCircleOutline size={40} className='ml-auto w-[5rem]' onClick={() => SetMobileMenu('hidden')}></IoMdCloseCircleOutline>
            </div>
      
              <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'>why</p>

              <div onClick={() => IndustDropListVisibilityMobile == "hidden" ? SetIndustDropListVisibilityMobile('visible') : SetIndustDropListVisibilityMobile('hidden')} className='flex flex-row items-center   w-11/12	hover:text-[#5271FF]'>
                  <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'>industries</p>
                  <IoIosArrowDown size={20} className='ml-auto'></IoIosArrowDown>

              </div>
{/* Side menu For industry in Mobile screens start*/}
                <div className={`${IndustDropListVisibilityMobile} pr-5 flex flex-col`}> 
                  <p className='hover:cursor-pointer font-[700] text-[18px] hover:text-[#5271FF]'>Travel</p>
                  <p className='hover:cursor-pointer font-[700] text-[18px] hover:text-[#5271FF]'>Automotive</p>
                  <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'>Banking</p>
                  <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'>Capital Markets</p>
                  <p className='font-[700] hover:cursor-pointer  text-[18px] hover:text-[#5271FF]'>Healthcare</p>
                  <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'>Digital Commerce</p>
                  <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'> View all</p>


                </div>

              {/* Side menu For industry in Mobile screens end*/}
              <p className='font-[700] hover:cursor-pointer  text-[18px] hover:text-[#5271FF]'>Find dev</p>
              <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'>Apply as vendor</p>
              <p className='font-[700] hover:cursor-pointer text-[18px] hover:text-[#5271FF]'> Login</p>







          </div>

          {/* Side navabar in mobile  end */}
      </>
  )
}
