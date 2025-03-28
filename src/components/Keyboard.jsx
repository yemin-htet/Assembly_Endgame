import React from 'react'

export default function Keyboard({elements}) {
    
  return (
    <div className="flex items-center justify-center flex-wrap w-4/5 gap-1 px-10 mb-5">
        {elements}
    </div>
  )
}
