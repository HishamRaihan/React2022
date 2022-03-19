import React from 'react'
import './child.css'

export default function Child(props) {

  return (
    <div className='child'>
      <h1>Child</h1>
      <button onClick={()=> props.changeWord('Hisham')}>Click to change title</button>
      </div>
  )
}
