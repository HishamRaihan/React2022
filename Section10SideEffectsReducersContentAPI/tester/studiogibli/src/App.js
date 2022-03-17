import React from 'react';
import { useEffect, useState } from 'react';


export function Details(props) {
  const [showData, setShowData] = useState(false)

  return (
    <>
      <button onClick={() => setShowData(!showData)}>{props.data.name}</button>
      <div style={{ display: showData ? '' : 'none' }}>
        <p>{props.data.name}</p>
        <p>{props.data.age}</p>
        <p>{props.data.gender}</p>
      </div>
    </>
  )
}
export function GenderFilter(props) {
  const dropDownChange = (event) => {
    const filterChange = event.target.value
    // console.log(filterChange) 
    props.onChangeFilter(filterChange)

  }

  return (
    <>
      <select value={props.selected} onChange={dropDownChange}>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='NA'>NA</option>
      </select>
    </>
  )
}


function App() {

  const [people, setPeople] = useState([]);
  const [filteredGender, setFilteredGender] = useState('Male')


  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/people/')
      .then(res => res.json())
      // .then(sortedList => sortedList.sort((a, b) => a.name - b.name))
      // .then(data => {
      //   data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      //   return data
      // })
      .then(data => setPeople(data))
    // this will show the array of people so it would be good to show

  }, [])


  const sortedList = people.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

  const filterList = sortedList.filter(people => people.gender === filteredGender)

  const peopleList = filterList.map(data => {
    return (
      <div key={data.id}>
        <Details data={data} />
      </div>
    )
  })

  return (
    <div>
      hello
      <GenderFilter selected={filteredGender} onChangeFilter={setFilteredGender}></GenderFilter>
      <h2>Hello Codesandbox</h2>
      {peopleList}

    </div>
  );
}

export default App;