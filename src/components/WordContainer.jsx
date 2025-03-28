import React from 'react'

export default function WordContainer({wordEle}) {
    
  return (
    <div className="py-3 flex flex-row items-center justify-center gap-1 my-5">
        {wordEle}
    </div>
  )
}
