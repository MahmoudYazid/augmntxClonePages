import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { RiWechatPayLine } from 'react-icons/ri'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

export default function rightmenu() {
    const Card =({name,indust,job,skills})=>(
        <div className=' max-w-[80%] lg:max-w-[48%] min-h-[20rem]   m-5 lg:m-2  grid grid-rows-[1.2fr_1fr_.5fr]'>
            {/* Upper part of card */}
            <div className=' grid grid-cols-[.5fr_1fr]'>
                <div className='flex justify-center items-center bg-white'>
                    <img src='/profile.jpg' alt='profile' className='w-[7rem] drop-shadow-xl rounded-full'></img>
                </div>
                <div className=' grid grid-rows-[1fr_1fr_1fr] bg-white'>
                    <div className=' flex flex-row items-center justify-start'>
                        <p>{name}</p>

                    </div>
                    <div className=' flex flex-row items-center justify-start'>
                        <p>{job}</p>

                    </div>
                    
                    <div className=' flex flex-row flex-wrap items-center justify-start'>
                        {skills.map((Skillitem) => (
                            <div className='border-2 border-[#5271FF] m-2 rounded-full p-1 text-[12px]'><p>{Skillitem}</p></div>
                            
                        ))}

                    </div>


                </div>

            </div>
            {/* MIDDLE part of card */}
            <div className='bg-white grid grid-col-[1fr_.2fr] '>
                <div className='max-w-100 overflow-hidden'>
                    <p className='ml-3'>Over 7+ years of experience in Design and Development, and implementation of various client-server enterprise applications in Python</p>
                </div>
                <div className='pl-3 flex flex-row gap-1 '>
                    <p>Industries:</p>
                    {indust.map((industitem) =>(
                        <p>{industitem}</p>
                    ))}
                   
                </div>
            </div>

            {/* Lower part of card */}
            <div className='bg-white flex flex-row text-[#5271FF]'>
                <div className=' hover:cursor-pointer flex-1 flex justify-center items-center'>
                    <RiWechatPayLine size={20}></RiWechatPayLine>
                    <p>Hire {name}</p>
                    </div>
                <div className='hover:cursor-pointer flex-1  flex justify-center items-center'>
                    <AiOutlineDownload size={20}></AiOutlineDownload>
                    <p>Download Pdf</p>
                    </div>

            </div>
        
        </div>
    )
  return (
      <div className='  items-center flex flex-col  flex-wrap bg-[#f8f9fa] min-w-100 min-h-screen flex-1'>
          <div id='SearchBar' className='  mt-8 bg-[#f8f9fa] flex items-center justify-center min-w-[100%] h-[5rem] ' >
              <input type='text' placeholder='search For Skills' className=' focus:outline-[#5271FF] outline-none min-w-[95%] h-[4rem] rounded-[14px] '></input>

</div>
          <div className='  justify-center items-center flex flex-col md:flex-row flex-wrap bg-[#f8f9fa] min-w-[100%] min-h-screen flex-1'>
              <Card skills={['redux' , 'node js ', 'nextjs', 'react']} job={'Javascript Developer'} name={"mahmoud"} indust={["software engineer"]}></Card>
 
              <Card skills={['redux', 'node js ', 'nextjs', 'react']} job={'Javascript Developer'} name={"mahmoud"} indust={["software engineer"]}></Card>
              <Card skills={['redux', 'node js ', 'nextjs', 'react']} job={'Javascript Developer'} name={"mahmoud"} indust={["software engineer"]}></Card>
                <Card skills={['redux' , 'node js ', 'nextjs', 'react']} job={'Javascript Developer'} name={"mahmoud"} indust={["software engineer"]}></Card>
                <Card skills={['redux' , 'node js ', 'nextjs', 'react']} job={'Javascript Developer'} name={"mahmoud"} indust={["software engineer"]}></Card>
              <Card skills={['redux', 'node js ', 'nextjs', 'react']} job={'Javascript Developer'} name={"mahmoud"} indust={["software engineer"]}></Card>
              <Card skills={['redux', 'node js ', 'nextjs', 'react']} job={'Javascript Developer'} name={"mahmoud"} indust={["software engineer"]}></Card>
              <Card skills={['redux', 'node js ', 'nextjs', 'react']} job={'Javascript Developer'} name={"mahmoud"} indust={["software engineer"]}></Card>

        </div>  

        {/* pagination container*/}
        <div className=' min-w-[100%] h-[5rem] flex justify-center items-center'>
              <div className='drop-shadow-lg min-w-[20rem] h-[3.5rem] m-2 flex flex-row'>
                  <div className='hover:cursor-pointer hover:text-[#5271FF] flex-1 flex justify-center items-center bg-white'>1</div>
                  <div className='hover:cursor-pointer hover:text-[#5271FF] flex-1 flex justify-center items-center bg-white'>3</div>
                  <div className='hover:cursor-pointer hover:text-[#5271FF] flex-1 flex justify-center items-center bg-white'>2</div>
                  <div className='hover:cursor-pointer hover:text-[#5271FF] flex-1 flex justify-center items-center bg-white'><MdKeyboardDoubleArrowRight size={10} ></MdKeyboardDoubleArrowRight></div>
        </div>

        </div>
      </div>      
  )
}
