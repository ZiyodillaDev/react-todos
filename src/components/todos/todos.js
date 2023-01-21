import { useState } from "react"
import Edit from "../../assets/images/editing.png"
import Delete from "../../assets/images/deleting.png"
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils"
const Todos = ()=>{
    const handleSubmit = (evt) =>{
        evt.preventDefault();
setTodos([
    ...Todos,
    {
        id:Todos.length >0? Todos[Todos.length - 1].id +1 :1,
    isComplated:false,
    text:isValidInputTimeValue,
    }
])
    }
    return(
        <>
<div className="search_wrap search_wrap_3">
			<div class="search_box">
   <form onSubmit={handleSubmit}>
   <input onChange={(evt)=> setInputValue(evt.target.value)} type="text" className="input" placeholder="Add Todo"></input>
            <button type="submit" className="btn btn_common">Add</button>
   </form>
			</div>
		</div>
        <div className="search_wrap search_wrap_3 todos">
            <ul className="list">
            
{
    Todos.map(todo =>  <li className="item">
                    <input className="check" type="checkbox"/>
                    <span className="todovalue">Text</span>
                    <div className="btnGroup">
                    <button className="edit" type="button"><img src={Edit}></img>EDIT</button>
                    <button className="delete" type="button"><img src={Delete}></img>DELETE</button>
                    </div>
                </li>
                )
}

            </ul>
        </div>
        </>
    )
}

export default Todos