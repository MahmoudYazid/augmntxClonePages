import React from 'react'
import { AiFillLinkedin, AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'


export default function Footer() {
  return (
    <div className='bg-black min-w-100 h-[30rem] grid grid-rows-[1fr_.3fr]'>
      <div className='bg-green-400 grid grid-cols-[1.5fr_1fr]'>
        <div className='bg-blue-700 grid grid-cols-[1fr_1fr_1fr_1fr] border-b-2 border-white'>
          <div className='bg-black text-white flex flex-col items-start gap-2 pl-10 pt-8'>
            <p className='font-[700] text-[23px]'>Information</p>
            <p>About Us</p>
            <p>Our Story</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>
          <div className='bg-black text-white flex flex-col items-start gap-2 pl-10 pt-8'>
            <p className='font-[700] text-[23px]'>AugmntX</p>
            <p>View Profiles</p>
            <p>Discover</p>
            <p>On Demand Talent</p>
            <p>  Pricing</p>




          </div>

          <div className='bg-black text-white flex flex-col items-start gap-2 pl-10 pt-8'>
            <p className='font-[700] text-[23px]'>Vendor</p>
            <p>       Resources</p>
            <p> Apply As Vendor</p>
            <p>Vendor Login</p>
            <p>Get Verified</p>
            <p> Remote Jobs</p>







          </div>
          <div className='bg-black text-white flex flex-col items-start gap-2 pl-10 pt-8'>
            <p className='font-[700] text-[23px]'>Vendor</p>
            <div className='flex flex-row gap-3'>
              <AiFillLinkedin size={30} className=' hover:-translate-y-1'></AiFillLinkedin>
              <AiOutlineTwitter size={30} className=' hover:-translate-y-1'></AiOutlineTwitter>
              <AiFillFacebook size={30} className=' hover:-translate-y-1'></AiFillFacebook>
              <AiOutlineInstagram size={30} className=' hover:-translate-y-1'></AiOutlineInstagram>

            </div>
           






          </div>

        </div>
        <div className='bg-black border-b-2 border-white'></div>
      </div>
      <div className='black flex justify-center items-center text-white'>
        <p>Supported By  Mahmoud Abuelyazid - augmntx clone</p>

      </div>

    </div>
  )
}
