const person = {
  name:'Hisham',
}
const secondPerson = {
  ...person,
   age: 30
}
console.log(secondPerson);

const me = {
  ...secondPerson.name = 'Raihan'
}
console.log(secondPerson);