import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./action/actioncreator";

function Crud() {
    const [input, setInput] = useState({
        text: ''
    })

    const handleChange = (e) => { 
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoReducer.todos)
    const handleTodo = (e) => {

        e.preventDefault()
        if (input?.id) {
            dispatch(editTodo(input))
            setInput({ text: '', id: '' })
           
        } else {
            dispatch(addTodo(input.text))
            setInput({ text: '' })
            
        }

    }
    //console.log(input)
    const editItem = ({ text, id }) => {
        setInput({ text: text, id: id })
    }


    return (
        <div>
            <h1>Todo app in design crud in react redux</h1>
            <form onSubmit={handleTodo}>
                <input type="text" name="text" onChange={handleChange} value={input?.text || ''} />
                <button type="submit">AddItem</button>
            </form>
            <div>
                {
                    todos.map((elem) => {
                        return (

                            <div key={elem.id}>
                                <h3>{elem.text}</h3>
                                <button onClick={() => dispatch(deleteTodo(elem.id))} >Delete</button>
                                <button onClick={() => editItem(elem)}>Edit</button>
                            </div>
                               )
                    })
                   
                }
                
            </div>
        </div>
    )
}
export default Crud;