import React from "react"
const gundamArrays = [
  { pilot: 'Hero', mechs: ['Wing gundam', 'Heavy Arms', 'Some wack gundam'] },
  { pilot: 'Qatra', mechs: ['Sandrock', 'Wing gundam'] },
  { pilot: 'Duo', mechs: ['Deathsytche'] },
  { pilot: 'Miliardo', mechs: ['Tallgeese', 'Epyon'] },
]

function GundamIterableFunction() {
  return (
    <div className="card-body">
      {gundamArrays.map((ele)=>{
     return   <ul key={ele.pilot}>
          The Pilot: {ele.pilot}
          {ele.mechs.map(gundams =>
            <li>{gundams}</li>)}
        </ul>
      })}
    </div>
  )
}
export default GundamIterableFunction