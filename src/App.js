import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [item, setItem] = useState(
    {
      title: '',
      description: ''
  });
  const [items, setItems] = useState([{
    title: '',
    description: ''
  }])

  useEffect(() => {
    fetch('/items')
  })

  function handleChange(event) {
    const {name, value} = event.target;
    setItem(prevInput => {
      return {
          ...prevInput,
          [name]: value
      }
    });
    console.log(item);
  }

  function addItem(event) {
    event.preventDefault();
    const newItem = {
      title: item.title,
      description: item.description
    };

    axios.post('/newitem', newItem);
    console.log(newItem)
    alert('item added');

    setItem({
      title: '',
      description: ''
    })

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
      <button onClick={addItem}>ADD ITEM</button>
    </div>
  );
}

export default App;
