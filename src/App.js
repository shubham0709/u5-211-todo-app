import './App.css';
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";
import SingleTodo from "./components/SingleTodo";
import Edit from './components/Edit';
import Login from "./pages/Login";
import RequireAuth from './hoc/RequireAuth';

function App() {
  return (
    <div className="App">
      {/* <h1><Counter /></h1> */}
      <Routes>
        <Route path="/todo/:id" element={<RequireAuth><SingleTodo /></RequireAuth>}></Route >
        <Route path="/" element={<RequireAuth><Todo /></RequireAuth>}></Route >
        <Route path="/todo/:id/edit" element={<RequireAuth><Edit /></RequireAuth>}></Route >
        <Route path="/login" element={<Login />}></Route >
      </Routes>
    </div>
  );
}

export default App;