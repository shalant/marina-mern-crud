import './App.css';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState(
    {
      title: '',
      description: ''
    }
  )

  function handleChange(event) {
    const {name, value} = event.target;
  }

  return (
    <div className="App">
      <input 
        onChange={handleChange} 
        name='title' 
        value={item.title} 
        placeholder='title'
      ></input>
      <input 
        onChange={handleChange} 
        name='description' 
        value={item.description} 
        placeholder='description'
      ></input>
    </div>
  );
}

export default App;
