import React, {useEffect} from "react";

function Form({input,setInput,todos,setTodos,editTodo,setEditTodo}){

    function updateTodo(title,id,completed){
        const newTodo = todos.map((todo)=>
        todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("");
        }
    }, [setInput,editTodo])

    function onInputChange(e){
        console.log(e.target.value);
        setInput(e.target.value);
    }
    function onFormSubmit(e){
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: new Date().getTime().toString(), title: input, completed: false}])
            setInput("");
        }else {
            updateTodo(input,editTodo.id,editTodo.completed)
        }
       
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder="Enter a todo" 
            className="task_input"
            value={input}
            required
            onChange={onInputChange}
             />
            <button className="button_add" type="submit"> 
            {editTodo ? "Save" : "Add"} 
            </button>
        </form>
    )
}

export default Form;