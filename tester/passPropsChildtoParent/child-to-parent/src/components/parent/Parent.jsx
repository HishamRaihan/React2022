import React, { useState } from 'react'
import Child from '../child/Child'
import './parent.css'

export default function Parent() {

const [word, setWord] = useState('Parent')

  return (
    <div className='parent'>
      <h1>{word}</h1>
      <Child changeWord={word => setWord(word)}/>
      </div>
  )
}
