import React from 'react'

export default function NewButton({newGame}) {
  return (
    <button onClick={newGame} className='text-white bg-blue-500 w-40 h-12 rounded-2xl hover:bg-blue-900'>
        New Game
    </button>
  )
}
