import {useState} from "react";
import Todos from "./Todos.tsx";
import Form from "./Form.tsx";
import TodoList from "./TodoList.tsx";

export default function Todo() {

    const [todos, setTodus] = useState([])
    return <div>
        <Form todos={todos} setTodos={setTodus}/>
        <TodoList todus={todos}/>


    </div>
}