const numbers = [1, 2, 3]

// build in array method takes a function and exectued on each element on the array
const doubleNumArray = numbers.map((num) =>{
return num * 2
})
console.log(numbers);
// double array holds the array wih double the values
console.log(doubleNumArray);

const filterdNums = numbers.filter(function(value) {
  return value >= 0;
})
console.log('Filtered Numbers :',filterdNums);