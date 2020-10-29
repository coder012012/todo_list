import React,{ useState,useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText,setinputText] = useState("");
  const [todos,settodos] = useState([]);
  const [status,setstatus] = useState('all');
  const [filteredTodos,setfilteredTodos] = useState([]);
  //
useEffect( () => {
  filterHandler();
},[todos,status]);

  const filterHandler =()=>{
      switch(status){
        case "completed" : setfilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
        case "uncompleted" : setfilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
        default: 
        setfilteredTodos(todos);

      }
  }
  //save to local remaining
  

  return (
    <div className="App">
    <header>
  <h1>My TODO's List</h1>
    </header>
    <Form todos={todos} inputText={inputText} settodos={settodos} setinputText={setinputText} setstatus={setstatus} />
    <TodoList filteredTodos={filteredTodos} todos={todos} settodos={settodos}/>
    </div>
   );
}

export default App;
