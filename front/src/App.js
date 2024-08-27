
import React from 'react'
import { useState } from 'react'


export default function MyApp() {
  const [input, setlists] = useState([]);
  const [inputval, setinputval] =  useState('');

  
  return (
    <div>
      <h1>Welcome John Doe, Please add to your list</h1>
      <input type='text' value={inputval}/>
      <button>Submit</button>
      
    
    </div>
  );
}
