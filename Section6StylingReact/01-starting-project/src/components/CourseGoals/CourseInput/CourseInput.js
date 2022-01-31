import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css'

// const FormControl = styled.div`

//   margin: 0.5rem 0;
// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.invalid ? 'red' : 'black'};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 5px solid ${props => props.invalid ? 'red' : 'blue'};
//   background: ${props => props.invalid ? 'red' : 'transparent'};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
 const [isValid, setIsValid] =  useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* allows us to dynamically add styling if isNotValid then add invalid class to it */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
         {/* setting ternirary inline Styling */}
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
