import { useState } from 'react'
import Header from './components/Header.jsx'
import {languages} from './languages.jsx'
import LanguageList from './components/LanguageList.jsx'

function App() {
  return (
    <div className="flex items-center justify-center">
      <div className='bg-black opacity-85 w-180 h-200 my-10 flex flex-col items-center justify-start rounded-2xl'>
        <Header/>
        <LanguageList langs={languages}/>
      </div>
    </div>
  )
}

export default App
