// method as a property which stores a function as a value
class Human {
  // next generation javascript
    gender = 'male'
 
  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
  // will be executed when ever method is instantiated
  
    name = 'Hisham'
    // changes the gender constructor

  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person()
person.printMyName()
person.printGender()