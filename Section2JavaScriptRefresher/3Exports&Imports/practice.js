import {Person} from "./person.js";
// export default
import fnc from "./exportDefault.js";

const newPerson = new Person('Heshow', 30)

console.log(newPerson.name);

fnc('Hisham from export default')