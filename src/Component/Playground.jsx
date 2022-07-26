import React, { useEffect, useState } from 'react'
import Paper from './Paper'
import Rock from './Rock'
import Scissors from './Scissors'
import ScoreTab from './ScoreTab'
import useStickyState from '../hooks'
import Rules from './Rules'

const computerChoice = ['paper','scissors','rock'] //tableau des possibilités

const Playground = () => {
const [score, setScore] = useStickyState(0,"score")
const [choice, setChoice] = useState('')
const [result, setResult] = useState('')
const [computer, setComputer] = useState('')


const random = () => {
setComputer(computerChoice[Math.floor(Math.random() * computerChoice.length)])
}

const matchup = () => {
  if (choice === 'scissors' && computer === 'paper'){
    setResult('YOU WIN')
    setScore(score+1)
  } else if (choice === 'scissors' && computer === 'rock'){
    setResult('YOU LOSE')
    setScore(score-1)

  }else if (choice === 'paper' && computer === 'rock'){
    setResult('YOU WIN')
    setScore(score+1)
  }else if (choice === 'paper' && computer === 'scissors'){
      setResult('YOU LOSE')
      setScore(score-1)

  }else if (choice === 'rock' && computer === 'scissors'){
    setResult('YOU WIN')
    setScore(score+1)
  }else if (choice === 'rock' && computer === 'paper'){
    setResult('YOU LOSE')
    setScore(score-1)

  }else {
    setResult('DRAW')
  }
}
useEffect(() => {
  matchup();
  //eslint-disable-next-line
},[choice])

return (
<div>
  <div className='flex justify-center pt-6'>
      <ScoreTab score={score}/>
  </div>

  <div className={choice === '' ? "flex relative transition-all duration-500 ease-in-out opacity-100 mt-6 bg-triangle bg-no-repeat bg-center w-[21rem] h-[18rem] sm:w-[27rem] sm:h-[23rem] mx-auto bg-40% sm:bg-50%": 'transition-all duration-500 ease-in-out hidden'}>
  <div>
  <Paper onClick={() => {setChoice("paper");random()}} />
  </div>

  <div className='flex absolute hover:animate-pulse right-0'>
  <Scissors onClick={() => {setChoice("scissors");random()}}  />
  </div>

  <div className='flex absolute cursor-pointer hover:animate-pulse bottom-0 right-0 left-0 mx-auto w-[9rem] sm:w-[11rem] '>
  <Rock onClick={() => {setChoice("rock");random()}} />
  </div>
</div>



<div className={choice !== '' ? 'md:mt-5 w-10/12 md:w-3/5 lg:w-3/6 h-64 px-2 mx-auto' : 'hidden'}>
<div className='flex  items-center lg:justify-between justify-center mt-10'>

<div className='flex flex-col items-center mx-4'>
    <p className='hidden md:flex text-lg lg:text-xl tracking-widest text-white text-center md:mb-5'>THE HOUSE PICKED</p>
    <div className='mt-1'>
    <div className={result === 'YOU WIN' ? "animate-bounce" : result === 'YOU LOSE' ? "animate-[wiggle_1s_ease-in-out_infinite]" : ''}  >{choice === 'scissors' && <Scissors />}</div>
    <div className={result === 'YOU WIN' ? "animate-bounce" : result === 'YOU LOSE' ? "animate-[wiggle_1s_ease-in-out_infinite]" : ''}  >{choice === 'paper' && <Paper />}</div>
    <div className={result === 'YOU WIN' ? "animate-bounce" : result === 'YOU LOSE' ? "animate-[wiggle_1s_ease-in-out_infinite]" : ''}>{choice === 'rock' && <Rock />}</div> 
    </div>
    <p className='flex md:hidden text-lg text-white text-center mt-6'>THE HOUSE PICKED</p>

  </div>
  <div className='hidden md:flex flex-col'>
  <p className='text-5xl text-white text-center font-bold  mb-1'>{result}</p>
    <button className='bg-white text-black text-center text-[0.73rem] tracking-widest hover:text-red-400 w-48 h-10 mt-2 mb-5 rounded-lg transition-all ease-in-out' onClick={() => setChoice('')}>PLAY AGAIN</button>
  </div>

  <div className='flex flex-col items-center mx-4'>
    <p className='hidden md:flex text-lg lg:text-xl tracking-widest text-white text-center md:mb-5'>THE HOUSE PICKED</p>
    <div className='mt-1'>
    <div className={result === 'YOU LOSE' ? "animate-bounce" : result === 'YOU WIN' ? "animate-[wiggle_1s_ease-in-out_infinite]" : ''}  >{computer === 'scissors' && <Scissors />}</div>
    <div className={result === 'YOU LOSE' ? "animate-bounce" : result === 'YOU WIN' ? "animate-[wiggle_1s_ease-in-out_infinite]" : ''}  >{computer === 'paper' && <Paper />}</div>
    <div className={result === 'YOU LOSE' ? "animate-bounce" : result === 'YOU WIN' ? "animate-[wiggle_1s_ease-in-out_infinite]" : ''}>{computer === 'rock' && <Rock />}</div> 
    </div>
    <p className='flex md:hidden text-lg text-white text-center mt-6'>THE HOUSE PICKED</p>

  </div>
 </div>
  <div className='flex flex-col items-center md:hidden mt-10 mb-4'>
    <p className='text-5xl text-white text-center font-bold'>{result}</p>
    <button className='bg-white text-black text-center text-[0.73rem] tracking-widest hover:text-red-400 w-48 h-10 mt-2 mb-5 rounded-lg transition-all ease-in-out' onClick={() => setChoice('')}>PLAY AGAIN</button>
  </div>
  <div className={choice !== '' ? 'flex justify-center sm:absolute sm:bottom-3 sm:right-3' : 'hidden'}>
        <Rules />
      </div>
  </div>
  <div className={choice === '' ? 'flex justify-center items-end sm:absolute sm:bottom-3 sm:right-3 pt-24' : 'hidden'}>
        <Rules />
      </div>
</div>  
)
}

export default Playground