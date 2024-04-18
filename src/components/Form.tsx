import {useState} from "react";

export default function Form({todos,setTodus}) {
    const [todo, setTodu] = useState("");


    function handleSubmit(e) {
        e.preventDefault()
        setTodus([...todos, todo])
        setTodu("")
    }

    return <div><form onSubmit={handleSubmit}>
        <input onChange={(e) => setTodu(e.target.value)} value={todo} type="text"/>
        <button type="submit">Add</button>
    </form>
        </div>
}