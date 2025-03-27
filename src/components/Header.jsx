import React, { useState } from 'react'

export default function Header() {
    const isShow = false
    const win = true
  return (
    <div className='text-white w-4/5 h-2/6 flex flex-col justify-center items-center'>
        <h1 className='text-2xl mb-3'>Assembly: Endgame</h1>
        <p className='text-center mx-10 px-20 font-light text-md'>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
        {
            isShow?  <div className="w-4/5 h-1/4 my-5 rounded-xl flex justify-center items-center text-white text-2xl" style={{backgroundColor: win? "green": "red"}}>
            {win? "You win!" : "Game over!"}
                </div>
            : 
            <div className="w-4/5 h-1/4 my-5 bg-amber-300 rounded-xl flex justify-center items-center text-white text-2xl">
            Neutral
            </div>
        }
        
    </div>
  )
}
