import React,{useState} from 'react';

function App() {
  const [counter , setCounter] = useState(0);
  return (
    <div>
     <h1> {counter}</h1>
      <button onClick={setCounter(counter+1)}>Click Me</button>
    </div>  
  );
}

export default App;