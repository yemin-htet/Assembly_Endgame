import React from 'react'

export default function LanguageList({langs}) {
    const langEle = langs.map((lang) =>{
        const style = {
            backgroundColor : lang.backgroundColor,
            color: lang.color
        }
        return <span className="px-2 py-2 rounded-xl" style={style}>
            {lang.name}
        </span>
    })
  return (
    <section className='w-3/5 h-1/8 flex items-start justify-center flex-wrap gap-1 px-5'>
        {langEle}
    </section>
  )
}
