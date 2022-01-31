class Human {
  constructor(){
    this.gender = 'male'
  }
  printGender(){
    console.log(this.gender);
  }
}


class Person extends Human{
  // will be executed when ever method is instantiated
  constructor (){
    // initializes the parent class
    super()
    this.name = 'Hisham'
    // changes the gender constructor
    this.gender = 'He'
  }

printMyName(){
  console.log(this.name);
}
}

const person = new Person()
person.printMyName()
person.printGender()