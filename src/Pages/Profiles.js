import React, { useState } from 'react'
import Navbar from  '../components/navbar'
import BodyCo from '../components/profiles/body'
import Informations from '../components/profiles/Informations'
import Footer from '../components/footer'
import { BsArrowUpCircle } from 'react-icons/bs'
import { BiConversation } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaSquareWhatsapp } from 'react-icons/fa6'

export default function Profiles() {
  const [BiConversationState, SetuseBiConversationState]=useState('hidden')
  const changeBi=()=>{
    BiConversationState == 'hidden' ? SetuseBiConversationState('visible') : SetuseBiConversationState('hidden')
  }
  return (
    <>
      <div className='min-w-100 bg-white min-h-screen flex flex-col relative gap-3'>
          <Navbar></Navbar>
          <BodyCo></BodyCo>
      <Informations></Informations>
      <Footer></Footer>
      
    </div>
      <div className='fixed bottom-0 right-0 mr-5 mb-5 flex flex-col gap-2'> 
        <AiOutlineMail className={` ${BiConversationState}  text-[#5271FF] z-20`} size={50}></AiOutlineMail>
        <FaSquareWhatsapp className={` ${BiConversationState}  text-green-400 z-20`} size={50}></FaSquareWhatsapp>
        <BiConversation className='  text-[#5271FF] z-20' size={50} onClick={() => changeBi()}  ></BiConversation>
        <a href='#body'>
        <BsArrowUpCircle className='  text-[#5271FF] z-20' size={50}></BsArrowUpCircle>
        </a>
    </div>
      
    </>
  )
}
