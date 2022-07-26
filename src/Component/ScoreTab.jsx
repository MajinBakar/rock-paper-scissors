import React from 'react'
import logo from '../assets/logo.png'


const ScoreTab = ({score}) => {
  return (
    <div className='flex mt-3 border-2 border-solid border-[#606E85] w-11/12 xs:w-1/2 h-18 sm:h-24 px-1 sm:px-3 rounded-lg justify-between items-center'>
<img src={logo} alt="logo" className='scale-[0.7] sm:scale-100 max-h-16' />
<div className='flex flex-col bg-neutral-200 w-[4rem] h-[3.5rem] sm:w-[6rem] sm:h-[4.5rem] rounded-lg items-center'>
    <p className='text-[0.4rem] sm:text-[0.6rem] pt-2 tracking-widest text-[#2A46C0] font-[700]'>SCORE</p>
    <p className='text-2xl sm:text-4xl text-[#3B4363] font-[700]'>{score}</p>
</div>
    </div>   
  )
}

export default ScoreTab