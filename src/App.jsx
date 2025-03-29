import { useState } from 'react'
import Header from './components/Header.jsx'
import {languages} from './languages.jsx'
import LanguageList from './components/LanguageList.jsx'
import WordContainer from './components/WordContainer.jsx'
import Keyboard from './components/Keyboard.jsx'
import NewButton from './components/NewButton.jsx'

function App() {
  let [word,setWord] = useState('react')
  let [guessWord, setGuessWord] = useState([])

  const wrongLetterCount = guessWord.filter(letter=> !word.includes(letter)).length
  const isGameWon = word.split("").every(letter => guessWord.includes(letter))
  const isGameLost = wrongLetterCount >= languages.length - 1 
  const isGameOver = isGameWon || isGameLost

  const alphabets = "abcdefghijklmnopqrstuvwxyz"
    const elements = alphabets.split("").map(
        (letter)=>{
          const isClicked = guessWord.includes(letter)
          const isCorrect = word.split('').includes(letter)
          const style = isClicked? {backgroundColor: isCorrect? "green" : "red"} : {}
          const disabledStyle = {...style,opacity:0.25,pointerEvents:"none"}
            return (<button style={isGameOver? disabledStyle: style} onClick={()=> addLetter(letter)} key={letter} className='w-10 h-10 bg-amber-400 text-white flex items-center justify-center rounded-md 
            hover:bg-amber-700'>
                {letter.toUpperCase()}
            </button>)
        }
    )
    const wordEle = word.split("").map((letter,index)=>{
      return <span key={index} className='text-white w-10 h-10 border-b-2 border-white bg-gray-600 
      flex items-center justify-center '>
        {guessWord.includes(letter) && letter.toUpperCase()}
      </span>
  })

  

  const addLetter = (letter) =>{
    setGuessWord(prevState => prevState.includes(letter)?[...prevState]:[...prevState,letter])
  }
  const newGame = () => {
    setWord("react")
    setGuessWord([])
  }

  return (
    <div className="flex items-center justify-center">
      <div className='bg-black opacity-85 w-150 h-200 my-10 flex flex-col items-center justify-start rounded-2xl gap-5'>
        <Header isGameOver={isGameOver} isGameWon={isGameWon} wrongLetterCount={wrongLetterCount}/>
        <LanguageList langs={languages} wrongLetterCount={wrongLetterCount}/>
        <WordContainer wordEle={wordEle}/>
        <Keyboard elements={elements}/>
        {isGameOver && <NewButton newGame={newGame}/>}
      </div>
    </div>
  )
}

export default App
