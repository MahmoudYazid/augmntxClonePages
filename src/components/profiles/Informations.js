import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

import { TfiWorld } from 'react-icons/tfi'
export default function Informations() {
  return (
      <div className='max-w-[100%] min-h-[30rem] bg-[#f6f7f9] flex flex-row flex-wrap justify-center items-center mt-0  '>
          <div className='m-2 mt-[2rem]  grid grid-cols-[.5fr_1fr] justify-center items-center  w-[90%] md:w-[30%] h-[15rem]'>
              <div className=' w-[100%] h-[100%] flex justify-end items-start'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" data-inject-url="https://www.augmntx.com/assets/img/icons/solid/employees.svg" class="w-[4rem] mr-8 mt-4"><path class="fill-secondary" d="M72.11 86.51l-3.52-21 1.41-1.4-4.36-4.48a24.12 24.12 0 01-5.78-24.43c.11-.32.2-.53.32-.85l-1.4-.21-9-18.88a8 8 0 00-14.49 0l-8.88 19-19.69 3.07a8 8 0 00-6.29 5.44 7.94 7.94 0 001.92 8.11l14.51 14.83-3.42 21A8.07 8.07 0 0021.33 96a8.33 8.33 0 004-1l17.49-9.81 17.6 9.6a8.2 8.2 0 008.53-.43 8 8 0 003.21-7.89zm183.46-44.06a7.85 7.85 0 00-6.4-5.33l-19.73-3-9-18.88a8 8 0 00-14.5 0l-8.86 19-1.17.21c0 .11.11.21.11.32a23.76 23.76 0 01-5.44 24.32L185.81 64l1.71 1.71-3.41 21A8.07 8.07 0 00192 96a8.33 8.33 0 004-1l17.49-9.81 17.6 9.6a8.2 8.2 0 008.53-.43 8.06 8.06 0 003.2-7.89l-3.52-21 14.51-14.92a8.09 8.09 0 001.81-8.13z"></path><path class="fill-primary" d="M100.18 106.67a8 8 0 01-7.91-9.25l4.61-28.8L77 48.37a8 8 0 014.46-13.51l27.09-4.22 12.11-26a8 8 0 017.2-4.64 8 8 0 017.23 4.58l12.29 25.9 27.12 4.05A8 8 0 01179.09 48l-19.78 20.38 4.8 28.77a8 8 0 01-11.74 8.34l-24.19-13.25-24.12 13.42a7.94 7.94 0 01-3.88 1z"></path><circle class="fill-secondary" cx="42.67" cy="160" r="21.33"></circle><path class="fill-secondary" d="M71.15 196.27A44.71 44.71 0 0053.34 232v2.67H8a8.06 8.06 0 01-8-8v-5.33A29.32 29.32 0 0129.33 192H56a29.13 29.13 0 0115.15 4.27z"></path><circle class="fill-secondary" cx="213.33" cy="160" r="21.33"></circle><path class="fill-secondary" d="M256 221.33v5.33a8.07 8.07 0 01-8 8h-45.33V232a44.69 44.69 0 00-17.81-35.73A29.07 29.07 0 01200 192h26.67A29.32 29.32 0 01256 221.33z"></path><circle class="fill-primary" cx="128" cy="154.67" r="32"></circle><path class="fill-primary" d="M157.33 202.67H98.66A29.35 29.35 0 0069.33 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16a29.35 29.35 0 00-29.33-29.33z"></path></svg>
              </div>
              <div className=' w-[100%] h-[100%]   grid grid-rows-[.5fr_1fr]'>
                  <div className=' text-[23px] font-[600] flex justify-center flex-col'><p>Verified profiles</p></div>
                  <div ><p>AugmntX vets profiles rigorously & the best candidates are handpicked by our experts.</p></div>
              </div>
                
            </div>
            
          <div className='m-2 mt-[2rem]  grid grid-cols-[.5fr_1fr] justify-center items-center  w-[90%] md:w-[30%] h-[15rem]'>
              <div className=' w-[100%] h-[100%] flex justify-end items-start'>
                  <FaPaperPlane size={50} className="w-[5rem] mr-8 mt-4"></FaPaperPlane>
              </div>
              <div className=' w-[100%] h-[100%]   grid grid-rows-[.5fr_1fr]'>
                  <div className=' text-[23px] font-[600] flex justify-center flex-col'><p>Fast onboarding</p></div>
                  <div ><p>You'll be able to get an developer working on your project within 2 to 3 business days.</p></div>
              </div>

          </div>
          <div className='m-2 mt-[2rem]  grid grid-cols-[.5fr_1fr] justify-center items-center  w-[90%] md:w-[30%] h-[15rem]'>
              <div className=' w-[100%] h-[100%] flex justify-end items-start'>
                  <TfiWorld size={50} className="w-[5rem] mr-8 mt-4"></TfiWorld>
              </div>
              <div className=' w-[100%] h-[100%]   grid grid-rows-[.5fr_1fr]'>
                  <div className=' text-[23px] font-[600] flex justify-center flex-col'><p> Effortless scaling</p></div>
                  <div ><p>With our large talent pool of dev, you can effortlessly scale your team fast.</p></div>
              </div>

          </div>
    </div>
  )
}
