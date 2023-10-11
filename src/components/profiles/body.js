import React from 'react'
import Leftmenu from './leftmenu'
import Rightmenu from './rightmenu'
import Informations from './Informations'
export default function body() {
  return (
      <div id='body' className='mt-[3.4rem] grid lg:grid-cols-[.4fr_1fr]  grid-cols-[1fr] min-w-screen '>
          <Leftmenu></Leftmenu>
          <Rightmenu></Rightmenu>    

    </div>
  )
}
