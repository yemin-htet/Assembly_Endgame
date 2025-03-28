import React from 'react'

export default function WordContainer({word}) {
    const wordEle = word.split("").map((letter,index)=>{
        return <span key={index} className='text-white w-10 h-10 border-b-2 border-white bg-gray-600 flex items-center justify-center'>
            {letter.toUpperCase()}
        </span>
    })
  return (
    <div className="py-3 flex flex-row items-center justify-center gap-1 my-5">
        {wordEle}
    </div>
  )
}
