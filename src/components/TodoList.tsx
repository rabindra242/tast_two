import Todos from "./Todos.tsx";

export default function TodoList({todos}){

    return(
        <div>
            {todos.map((item) =>
                <Todos key={item} item={item}/>
            )}
        </div>
    )
}