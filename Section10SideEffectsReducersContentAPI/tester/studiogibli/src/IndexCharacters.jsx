import React from 'react'

export default function IndexCharacters({people}) {
  return (
    <div>
      <h1>Index Characters</h1>
      
      <h3>Character List</h3>

      {people.map(characters =>(
        <h2>
          {characters.people.name}
        </h2>
      ))}
    </div>
  )
}
