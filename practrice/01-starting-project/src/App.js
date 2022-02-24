import React from "react";
import CustomizedTables from "./components/CustomizedTables";
import SimpleTable from "./components/SimpleTable";



function App() {

  return (
    <div>
     <CustomizedTables />
      {/* <SimpleTable/> */}
    </div>
  );
}
// or you can do it like this 
// const App = ()=>  (
//     <div>
//       <h2>Let's get started!</h2>
//     </div>
//   );

export default App;