import './App.css';
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";
import SingleTodo from "./components/SingleTodo";
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      {/* <h1><Counter /></h1> */}
      <Routes>
        <Route path="/todo/:id" element={<SingleTodo />}></Route >
        <Route path="/" element={<Todo />}></Route >
        <Route path="/todo/:id/edit" element={<Edit />}></Route >
      </Routes>
    </div>
  );
}

export default App;