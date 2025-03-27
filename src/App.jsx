import { useState } from 'react'
import Header from './components/Header.jsx'

function App() {
 

  return (
    <div className="flex items-center justify-center">
      <div className='bg-black opacity-85 w-180 h-200 my-10 flex items-start justify-center rounded-2xl'>
        <Header/>
      </div>
    </div>
  )
}

export default App
