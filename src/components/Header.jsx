import React, { useState } from 'react'

export default function Header({isGameOver,isGameWon}) {
    const isShow = isGameOver
    const win = isGameWon
  return (
    <section className='text-white w-4/5 h-2/6 flex flex-col justify-center items-center my-1'>
        <h1 className='text-2xl mb-3 font-bold'>Assembly: Endgame</h1>
        <p className='text-center mx-10 px-20 font-light text-md'>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
        {
            isShow?  <div className="w-4/5 h-1/4 my-5 rounded-xl flex flex-col justify-center items-center text-white text-xl" style={{backgroundColor: win? "green": "red"}}>
            {win? "You win!" : "Game over!"}
            {win? <p className='text-lg'>Well done!🎉</p>:<p className='text-lg'>You lose! Better start learning Assembly</p>}
                </div>
            : 
            <div className="w-4/5 h-1/4 my-5 bg-blue-400 rounded-xl flex justify-center items-center text-white text-2xl">
              Playing
            </div>
        }
        
    </section>
  )
}
