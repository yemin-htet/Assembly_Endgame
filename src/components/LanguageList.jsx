import React from 'react'

export default function LanguageList({langs,wrongLetterCount}) {
    const langEle = langs.map((lang,index) =>{
        const isLost = index < wrongLetterCount
        const style = {
            backgroundColor : lang.backgroundColor,
            color: lang.color,
            opacity: isLost? 0.25:1
        }
        return <span key={index} className="px-2 py-2 rounded-xl relative" style={style}>
            {isLost && <span className='absolute insert-0 flex items-center justify-center w-full h-full top-0 left-0 right-0 text-2xl font-bold'>🩻</span>}
            {lang.name}
        </span>
    })
  return (
    <section className='w-3/5 h-1/8 flex items-start justify-center flex-wrap gap-1'>k
        {langEle}
    </section>
  )
}
