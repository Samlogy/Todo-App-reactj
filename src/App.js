import logo from './logo.svg';
import './App.css';

import Todo from './Todo'
import { AddTodo, EditTodo, TodoList, SearchTodo } from './Components/Templates';
// import { Label, Input, Button, Header } from './Components/Atoms';
// import { Form } from './Components/Molecules';

import data from './data'

const App = () => {
  // <TodoList />
  return <TodoList data={data} />
  // <SearchTodo />
  // <EditTodo />
  // <AddTodo />
  //<Todo />
}

export default App;