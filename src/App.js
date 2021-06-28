import React, { useState } from 'react'
import TodoHeader from './components/TodoHeader';
import TodoItem from './components/TodoItem';
import './styles/Todo.css';

function App() {

  const lclgItems = [];
  
  for(var i=1; i<=100; i++){
  
    if( ! localStorage.getItem(`Item${i} name`) || ! localStorage.getItem(`Item${i} desc`) ) { continue; 
    } else { lclgItems.push({ name: localStorage.getItem(`Item${i} name`), desc: localStorage.getItem(`Item${i} desc`) }) }    
    
  }
  const lclgItemsFull = lclgItems.filter( function (lclgItem)  {return lclgItem.name != null} );
  
  for(var i=0; i<localStorage.length; i++){
    console.log( localStorage.getItem( localStorage.key(i) ) );
  }

  const [Items, setItems] = useState([    
    ...lclgItemsFull,
  ]);

  const  addItem = (item) => {
    setItems([ ...Items, item ]);
  }


  return (
    <div className="App">
      <TodoHeader items={Items} addItem={addItem} />
      <TodoItem items={Items} />
    </div>
  )
}

export default App
