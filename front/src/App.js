
import React from 'react'
import { useState } from 'react'
import "./App.css"



export default function MyApp() {
  const [input, setlists] = useState([]);
  const [inputval, setinputval] =  useState('');

  //handleSubmit: function(e){ if (!this.validate()) { e.preventDefault() } }
  //For the John Doe I want to create Profiles in the future
  // It will correct to the user's name
  return (
    <div class = "App">
      <h2>Welcome John Doe, Please add to your list</h2>
      <body>Your List</body>
      <input type = 'text' value={inputval}/>
      <button>Add</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
