import React from 'react'
import logo from '../assets/logo.png'


const ScoreTab = ({score}) => {
  return (
    <div className='flex mt-3 border-2 border-solid border-[#606E85] w-11/12 lg:w-1/2 h-18 sm:h-40 px-1 sm:px-3 rounded-lg justify-between items-center'>
<img src={logo} alt="logo" className='sm:ml-12 scale-[0.9] sm:scale-[1.8] max-h-20' />
<div className='flex flex-col bg-neutral-200 w-[5.5rem] h-[4.5rem] sm:w-[10rem] sm:h-[8rem] rounded-lg items-center'>
    <p className='flex text-[0.8rem] sm:text-[1rem] pt-2 sm:pt-5 lg:pb-3 tracking-widest text-[#2A46C0] font-[700]'>SCORE</p>
    <p className='flex text-3xl sm:text-5xl text-[#3B4363] font-[700]'>{score}</p>
</div>
    </div>   
  )
}

export default ScoreTab