console.log('Spread operator');
const numbers = [1,2,3]
const newNumbers = [...numbers, 4,5]

console.log(newNumbers);

console.log('Objects');
const person = {
  name: 'Hisham'
}
const newPerson = {
  ...person,
  age: 30
}

console.log(newPerson);

console.log('Rest Operator makes it into an array');
const filter = (...args) =>{
  return args.filter(el => el === 3)
  // filter will exectute
}
console.log(filter(1,2,3));


const sumUp = (...args) =>{
  let total = 0
  args.forEach(element => {
    total += element;
  });
  return total
}
console.log(sumUp(1,2,3,4,5));