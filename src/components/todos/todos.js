import { useState } from "react"
import Edit from "../../assets/images/editing.png"
import Delete from "../../assets/images/deleting.png"
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils"
const Todo = () => {
    const [todos,setTodos] = useState([
  
    ])
   let [inputValue,setInputValue] =useState("")

   function handleSubmt (evt){
       evt.preventDefault()

setTodos([
    ...todos,
    {
        id: todos.length>0 ? todos[todos.length - 1].id +1 :1,
        isCompleted:false,
        text:inputValue,
    }])
    evt.nativeEvent.target[0].value =""
}
const hendleDelete =({id})=>{
    setTodos(todos.filter(todo => todo.id !==id))
}
const hendleEdit = ({id})=>{
   const edit = todos.filter(todo => {
    if (todo.id===id) {
     let editVal =   prompt("Change totos",todo.text)
     todo.text =editVal
    }
    return "ishladi"
})
setTodos(edit)
}


const handleCheckbox =({id})=>{
const checkboxFilter = todos.filter(todo =>{
  const text = document.querySelector(".todovalue")
  text.classList.toggle("line")
   return todo.id === id

})
}

    return(
        <>
<div className="search_wrap search_wrap_3">
			<div className="search_box">
   <form onSubmit={handleSubmt}>
   <input onChange={(evt)=> setInputValue(evt.target.value)} type="text" className="input" placeholder="Add Todo"></input>
            <button type="submit" className="btn btn_common">Add</button>
   </form>
			</div>
		</div>
        <div className="search_wrap search_wrap_3 todos">
            <ul className="list">
            
{
    todos.map(todo =>  <li className="item">
                    <input onClick={()=> handleCheckbox(todo)} className="check" type="checkbox"/>
                    <span className="todovalue">{todo.text}</span>
                    <div className="btnGroup">
                    <button className="edit" type="button" data-todo-id={todo.id} onClick={()=> hendleEdit(todo)}><img alt="edit" src={Edit}></img>EDIT</button>
                    <button className="delete" type="button" data-todo-id={todo.id} onClick={() => hendleDelete(todo)}><img alt="delete" src={Delete}></img>DELETE</button>
                    </div>
                </li>
                )
}

            </ul>
        </div>
        </>
    )
}

export default Todo