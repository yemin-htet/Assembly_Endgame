import { useState } from 'react'
import Header from './components/Header.jsx'
import {languages} from './languages.jsx'
import LanguageList from './components/LanguageList.jsx'
import WordContainer from './components/WordContainer.jsx'
import Keyboard from './components/Keyboard.jsx'

function App() {
  let [word,setWord] = useState('React')
  return (
    <div className="flex items-center justify-center">
      <div className='bg-black opacity-85 w-150 h-200 my-10 flex flex-col items-center justify-start rounded-2xl gap-0'>
        <Header/>
        <LanguageList langs={languages}/>
        <WordContainer word={word}/>
        <Keyboard/>
      </div>
    </div>
  )
}

export default App
