import { useState } from 'react'
import Header from './components/Header.jsx'
import {languages} from './languages.jsx'
import LanguageList from './components/LanguageList.jsx'
import WordContainer from './components/WordContainer.jsx'
import Keyboard from './components/Keyboard.jsx'
import NewButton from './components/NewButton.jsx'

function App() {
  let [word,setWord] = useState('react')
  let [guessWord, setGetWord] = useState([])

  const alphabets = "abcdefghijklmnopqrstuvwxyz"
    const elements = alphabets.split("").map(
        (letter)=>{
          const isClicked = guessWord.includes(letter)
          const isCorrect = word.split('').includes(letter)
          const style = isClicked? {backgroundColor: isCorrect? "green" : "red"} : {}
            return (<button style={style} onClick={()=> addLetter(letter)} key={letter} className='w-10 h-10 bg-amber-400 text-white flex items-center justify-center rounded-md 
            hover:bg-amber-700'>
                {letter.toUpperCase()}
            </button>)
        }
    )

  const addLetter = (letter) =>{
    setGetWord(prevState => prevState.includes(letter)?[...prevState]:[...prevState,letter])
  }

  return (
    <div className="flex items-center justify-center">
      <div className='bg-black opacity-85 w-150 h-200 my-10 flex flex-col items-center justify-start rounded-2xl gap-5'>
        <Header/>
        <LanguageList langs={languages}/>
        <WordContainer word={word}/>
        <Keyboard elements={elements}/>
        <NewButton/>
      </div>
    </div>
  )
}

export default App
