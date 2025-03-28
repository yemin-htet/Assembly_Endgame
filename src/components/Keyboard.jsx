import React from 'react'

export default function Keyboard() {
    const alphabets = "abcdefghijklmnopqrstuvwxyz"
    const elements = alphabets.split("").map(
        (letter)=>{
            return <button key={letter} className='w-10 h-10 bg-amber-400 text-white flex items-center justify-center rounded-md 
            hover:bg-amber-700'>
                {letter.toUpperCase()}
            </button>
        }
    )
  return (
    <div className="flex items-center justify-center flex-wrap w-4/5 gap-1 px-10 mb-5">
        {elements}
    </div>
  )
}
